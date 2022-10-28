<script setup>
defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <div class="card">
    <img :src="item.img" class="card-img-top" :alt="item.title" />
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">{{ item.description }}</p>
    </div>
  </div>
</template>
<style>
.card img {
  max-height: 180px;
  object-fit: cover;
}
</style>
