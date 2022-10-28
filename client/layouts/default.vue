<script setup>
import Header from "../components/Header.vue";
import Filter from "../components/Filter.vue";
import Nav from "../components/Nav.vue";
import { useGalleryStore } from "~~/composables/galerryStore";

const galleryStore = useGalleryStore();
const route = useRoute();
const work = route.params.name || "";

galleryStore.get(work);
</script>
<template>
  <div>
    <Header />
    <main class="p-4">
      <div class="container">
        <Filter />
        <Nav />
        <slot />
      </div>
    </main>
  </div>
</template>
