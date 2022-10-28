<script setup>
import { useGalleryStore } from "~~/composables/galerryStore";

const galleryStore = useGalleryStore();

const changeCategoryHandler = () => {
  galleryStore.get();
};
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">Gallery</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NuxtLink
              to="/"
              class="nav-link"
              active-class="active"
              @click="changeCategoryHandler"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/works/all"
              class="nav-link"
              active-class="active"
              @click="changeCategoryHandler"
              >Works</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
