<script setup>
import { useGalleryStore } from "../composables/galerryStore.js";
import Card from "../components/Card.vue";

const galleryStore = useGalleryStore();
const gallery = toRef(galleryStore, "filteredGallery");
</script>
<template>
  <div class="cards">
    <div class="row">
      <div v-for="item in gallery" :key="item.id" class="col-sm-3 mb-3">
        <Card :item="item" />
      </div>
    </div>
  </div>
</template>
