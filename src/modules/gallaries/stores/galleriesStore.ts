import { defineStore } from "pinia";
import { computed, nextTick, reactive, ref } from "vue";
import { useToast } from "vue-toastification";
import GalleriesService from "../repository";

export const galleriesStore = defineStore("useGalleries", () => {
  const userService = new GalleriesService();

  const toast = useToast();

  let state = reactive<UpdateGalleryDto>({
    id: 0,
    title: "",
    subTitle: "",
    section: "",
    description: "",
    images: null,
  });

  const setFiles = (files: FileList) => {
    state.images = files;
  };
  const createGallery = async () => {
    try {
      var client = new GalleriesService();

      console.log("i am here");

      const formData = new FormData();
      if (!state.images) return toast.error("no images brooo");

      Array.from(state.images).forEach((file, index) => {
        formData.append(`images[${index}]`, file);
      });

      formData.append("title", state.title);
      formData.append("description", state.description);
      formData.append("section", state.section);
      formData.append("subTitle", state.subTitle);

      const { data } = await client.createGallery(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
      state.id = res.id;
      state.title = res.title;
      state.description = res.description;
      state.section = res.section;
      state.subTitle = res.subTitle;
      state.images = res.images;

      return res;

    } catch (error) {
      throw error;
    }
  };
  const updateGallery = async ()=> {
    const client = new GalleriesService();

    const {data} = await client.updateGallery({
      data : state
    }, state.id)

  } 
  return {
    state,
    setFiles,
    createGallery,
    getGallery,
    updateGallery
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

