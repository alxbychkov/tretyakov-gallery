<script setup>
import { useGalleryStore } from "~~/composables/galerryStore";

const route = useRoute();
const work = route.params.name;

const galleryStore = useGalleryStore();
const gallery = toRef(galleryStore, "filteredGallery");
</script>
<template>
  <div>
    <h1>{{ work }} <span v-if="work === 'all'">works</span></h1>
    <div class="cards">
      <div class="row">
        <div v-for="item in gallery" :key="item.id" class="col-sm-3 mb-3">
          <Card :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  margin-bottom: 20px;
  text-transform: capitalize;
}
</style>
