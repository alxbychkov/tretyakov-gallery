<script setup>
const GALLERY = [
  {
    id: "1",
    img: "/images/1_1.jpg",
    description: "Description 1",
    title: "Title 1",
    work: "landscape",
    author: "Sergey",
  },
];
</script>
<template>
  <div class="cards">
    <div class="row">
      <div v-for="item in GALLERY" :key="item.id" class="col-sm-3 mb-3">
        <div class="card">
          <img :src="item.img" class="card-img-top" :alt="item.title" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card img {
  max-height: 180px;
  object-fit: cover;
}
</style>
