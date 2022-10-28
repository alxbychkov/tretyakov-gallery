<script setup>
import { useGalleryStore } from "~~/composables/galerryStore";
import Select from "../components/Select.vue";

const galleryStore = useGalleryStore();
const filters = toRef(galleryStore, "filters");
const select = ref();

const filterGalleryHandler = (key, value) => {
  galleryStore.filterGallery(key, value);
};
</script>
<template>
  <div v-show="filters.length" class="filter mb-4 d-flex align-items-center">
    <Select
      v-for="item in Object.entries(filters)"
      :filters="item"
      @select="filterGalleryHandler"
    />
    <select
      v-for="item in Object.entries(filters)"
      class="form-select me-2"
      :key="item[0]"
      ref="select"
      @input="filterGalleryHandler(item[0], this)"
    >
      <option selected disabled>{{ item[0] }}</option>
      <option v-for="value in item[1]" :value="value" :key="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>
