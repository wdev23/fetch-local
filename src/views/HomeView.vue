<template>

  <MenuMain />

  <div>
    <FetchHome />
  </div>

  <MenuFooter />
</template>

<script setup>
import FetchHome from '@/components/fetch/FetchHome.vue'
import MenuMain from '../components/menu/MenuMain.vue'
import MenuFooter from '@/components/menu/MenuFooter.vue';
</script>

<style scoped>

</style>