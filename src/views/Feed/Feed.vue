<template>
    <div v-if="posts.length > 0">
        <Card class="mb-5" v-for="(p, index) in posts" :key="index">
            <template #title>{{ p.title }}</template>
            <template #content>
                <p class="m-0">
                    {{ p.body }}
                </p>
            </template>
        </Card>
    </div>
    <div class="mt-5" v-else>
        <i class="pi pi-spin pi-spinner" style="font-size: 5rem"></i>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref, Ref, inject, watch } from 'vue'
import Card from 'primevue/card';
import api from '@/api'
import { IPost } from './fTypes';
import { AxiosError } from "axios"

const emit = defineEmits<{
    (e: 'search-data', field: string): void
}>()

const posts: Ref<IPost[]> = ref([])
const fetchDate = async () => {
    try {
        const response = await api.get<IPost[]>('/posts')
        if (response.data.length > 0) {
            posts.value = response.data
        }
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        console.log('error fetching data', axiosError.message)
    }
}

const searchField = inject<Ref<string>>('searchField');

watch(searchField, (newValue: string) => {
    posts.value = posts.value.filter((item) => {
        return item.title.toLowerCase().includes(newValue)
    })
})

onMounted(async () => {
    setTimeout(async () => {
        await fetchDate()
    }, 2000);

})


</script>

<style scoped></style>