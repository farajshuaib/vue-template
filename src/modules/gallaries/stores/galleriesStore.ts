import { defineStore } from "pinia";
import { computed, nextTick, reactive, ref } from "vue";
import { useToast } from "vue-toastification";
import GalleriesService from "../repository";
import { START_LOCATION } from "vue-router";
// import GalleriesService from "../repository";

export const galleriesStore = defineStore("useGalleries", () => {
  const userService = new GalleriesService();

  const toast = useToast();

  let state = reactive<{data:UpdateGalleryDto}>({
    data:{

    id: 0,
    title: "",
    subTitle: "",
    section: "",
    description: "",
    images: null,
  }});

  let stateList = reactive<ShowGalleryDto[]>([]);
  

  const setFiles = (files: FileList) => {
    state.data.images = files;
  };
  const createGallery = async (newState: CreateGalleryDto) => {
    try {
      console.log("test");
      
      console.log(state.data);
      state.data.description = newState.description;
      state.data.section = newState.section;
      state.data.subTitle = newState.subTitle;
      state.data.title = newState.title;
      
      
      var client = new GalleriesService();

      
      const formData = new FormData();
      if (!state.data.images) return toast.error("no images brooo");
      
      console.log(state.data.images);
      // formData.append(`Attachments`, JSON.stringify(state.data.images));
      Array.from(state.data.images).forEach((file, index) => {
        formData.append(`Attachments`, file);
      });

          console.log(state);
      
      formData.append("Title", state.data.title);
      formData.append("Description", state.data.description);
      formData.append("Section", state.data.section);
      formData.append("SubTitle", state.data.subTitle);

      console.log(formData.values);
      
      const { data } = await client.createGallery(formData
        
        , {
        headers: {
          Accept: "text/plain",

          "Content-Type": "multipart/form-data",
        },
      }
      
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getGallery = async (id: string) => {
    try {
      var client = new GalleriesService();

      const { data: ResponseData } = await client.getGallery({}, id);
      const res = { ...ResponseData.data };
      state.data.id = res.id;
      state.data.title = res.title;
      state.data.description = res.description;
      state.data.section = res.section;
      state.data.subTitle = res.subTitle;
      state.data.images = res.images;

      return res;

    } catch (error) {
      throw error;
    }
  };
  const updateGallery = async ()=> {
    const client = new GalleriesService();

    const {data} = await client.updateGallery({
      data : state
    }, state.data.id)
  } 
  const showGalleries = async (showGalleriesRequest: ShowGalleryRequestDto): Promise<ShowGalleryDto[]>=> {

    try {
      const toast = useToast()

      const client = new GalleriesService();

      const {data} = await client.getGallaries(showGalleriesRequest);
      console.log(data);
      stateList = data as ShowGalleryDto[]
      

      return await stateList;
    } catch (error) {
      console.log(error);
      toast.error("error in store 91")
      
    }
    return []
  }
  return {
    state,
    setFiles,
    createGallery,
    getGallery,
    updateGallery,
    showGalleries
  };
});


  //   let usersList = ref<UserRequestDto[]>([]);

  //   const addUser = async ()=> {
  //     try {
  //       await userService.createUser({
  //         data
  //       });
  //         toast.success("fuck you, user added")
  //     } catch (error:any) {
  //       toast.error(error.response.data.message)
  //     }
  //   }
  //   const getUser  = async (id : string)=>{
  //     try {
  //       const {data : ResponseData} = await userService.getUser(id);
  //       data = {...ResponseData.data};

  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  //   const updateUser = async (id:string)=> {
  //     await userService.updateUser(id,
  //       {
  //         data
  //       });
  //   }
  //   const getUsers = async (filter: UsersFilter = {})=> {
  //     try {
  //     const {data: ResponseData} = await userService.getUsers({
  //       params:{
  //        ...filter
  //       }
  //     })
  //     usersList.value = ResponseData;

  //     } catch (error : any ) {

  //       toast.error(error.response.data.message)

  //     }
  //   }

