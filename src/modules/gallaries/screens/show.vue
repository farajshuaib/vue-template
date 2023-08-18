<template>
    <div v-if="isLoading">
        <p>loading screen</p>
    </div>

    <div v-else>
            <galleryTable :headers= "Object.keys(state[0])" 
            :data ="state"/>
    </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import { onMounted, reactive } from 'vue';
import { galleriesStore } from '../stores/galleriesStore';
import  galleryTable from '../components/showGalleryTable.vue'
import { loadRouteLocation } from 'vue-router';
let state = reactive<ShowGalleryDto[]>( [
        {
            id : 1,
             description : "_", 
            images : null, 
            section : "_", 
            subTitle : "_", 
            title : "_"
        },
        {
            id : 1,
             description : "_", 
            images : null, 
            section : "_", 
            subTitle : "_", 
            title : "_"
        },
        {
            id : 1,
             description : "-", 
            images : null, 
            section : "_", 
            subTitle : "_", 
            title : "_"
        },
        {
            id : 1,
             description : "", 
            images : null, 
            section : "-", 
            subTitle : "-", 
            title : "-"
        },
        {
            id : 1,
             description : "", 
            images : null, 
            section : "-", 
            subTitle : "-", 
            title : "-"
        }


    ]);

const store = galleriesStore();

let isLoading = false;

onMounted(async () => {
isLoading = false;
store.showGalleries()
    

});

</script>