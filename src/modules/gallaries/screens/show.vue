<template>
    <div v-if="isLoading">
        <p>loading screen</p>
    </div>

    <div v-else>
        <galleryTable :headers="Object.keys(state[0])" :data="state" />
    </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import { onMounted, reactive, ref } from 'vue';
import { galleriesStore } from '../stores/galleriesStore';
import galleryTable from '../components/showGalleryTable.vue'
import { loadRouteLocation } from 'vue-router';
let state = reactive<ShowGalleryDto[]>([{
    description:"SDF", 
    id:1, 
    section:"",
    subTitle:   "SF",
    title:"sdf",
    images: null
}]);

const store = galleriesStore();


const isLoading = ref(true);

onMounted(async () => {
    
    
    const gallaries = await store.showGalleries({ includeAttachments: false, dateTimeCondition: ">",pageNumber :1, pageSize : 20 });
    state = gallaries;
    console.log("test");
    
// isLoading.value.focus()
    console.log(state);
        isLoading.value = false
    // isLoading.value= false;
});

</script>