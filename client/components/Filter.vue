<script setup>
import { useGalleryStore } from "~~/composables/galerryStore";
import Select from "../components/Select.vue";

const galleryStore = useGalleryStore();
const filters = toRef(galleryStore, "filters");
const filterValues = ref({});

const filterGalleryHandler = (key, value) => {
  if (value)
    filterValues.value[key] = value;
  else
    filterValues.value[key] && delete filterValues.value[key];

  galleryStore.filterGallery(filterValues.value);
};
</script>
<template>
  <div v-show="filters.length" class="filter mb-4 d-flex align-items-center">
    <Select
      v-for="item in Object.entries(filters)"
      :filters="item"
      :key="item[0]"
      @select="filterGalleryHandler"
    />
  </div>
</template>
