<script setup>
import { useGalleryStore } from "~~/composables/galerryStore";

const galleryStore = useGalleryStore();
const nav = toRef(galleryStore, "nav");

const changeCategoryHandler = (item) => {
  galleryStore.get(item);
};
</script>
<template>
  <div class="navigation mb-4">
    <NuxtLink
      v-for="item in nav"
      class="btn btn-secondary me-1"
      :to="`/works/${item}`"
      :key="item"
      @click="changeCategoryHandler(item)"
      >{{ item }}</NuxtLink
    >
  </div>
</template>
<style scoped>
.navigation a {
  text-transform: uppercase;
}
</style>
