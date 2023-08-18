<template>
    <Form v-if="loading" @submit="submit" :validation-schema="createGallarySchema">


        <label for="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label for="subTitle">subTitle</label>
        <Field v-model="state.subTitle" name="subTitle" type="text" />
        <ErrorMessage name="subTitle" />


        <label for="description">description</label>
        <Field v-model="state.description" name="description" type="text" />
        <ErrorMessage name="description" />


        <label for="section">section</label>
        <Field v-model="state.section" name="section" type="text" />
        <ErrorMessage name="section" />


        <label for="attachements">Section</label>
        <input type="file" @change="onFileChanged($event)" name="" id="attachements" multiple />
        <button type="submit"> submit this shit</button>

    </Form>
</template>
<script setup lang="ts">
import { galleriesStore } from "../stores/galleriesStore";
import { Form, Field, ErrorMessage } from 'vee-validate';
import { createGallarySchema } from '../validation';
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()
let loading = true;
let state = reactive<UpdateGalleryDto>({
    id: 0,
    title: "",
    subTitle: "",
    section: "",
    description: "",
    images: null,
});

onMounted(() => {
    try {
        var res = store.getGallery(route.params.id as string)
        console.log(res);

    } catch (e) {
        console.log(e);

    } finally {
        loading = false;
    }
});


const store = galleriesStore();

const submit = () => {
    console.log("sdfsdf");
    store.updateGallery();
}

function onFileChanged($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (!target || !target.files) return;
    store.setFiles(target.files);
}
</script>
  