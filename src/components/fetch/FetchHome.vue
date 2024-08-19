<template>
  <div class="bg-cl_gray">
    <h3 class="text-white text-2xl font-bold py-6 text-center bg-cl_OrangeSoft">Fetch Images</h3>
  </div>

  <section class="image_main bg-cl_gray pb-4 pt-2">
  <ul class="container grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2">
    <li v-for="image in images" :key="image.id" class="mb-14 mt-6 px-2 md:m-0 md:p-0">
      <img :src="image.url" :alt="image.title" class="h-full w-full md:h-96 md:w-96 md:my-5 rounded-lg">
      <p class="text-white text-base text-center my-4">{{ image.title }}</p>
    </li>
  </ul>
</section>

</template>

<script setup>
import ImageService from '@/services/fetchImage'
import { onMounted } from 'vue'

const service = new ImageService()
const images = service.getImages()

onMounted(async () => {
  await service.fetchAll()
})
</script>

<style scoped>

</style>