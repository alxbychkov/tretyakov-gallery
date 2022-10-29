<script setup>
import { useGalleryStore } from "~~/composables/galerryStore";

const galleryStore = useGalleryStore();

const changeCategoryHandler = () => {
  galleryStore.get();
};

const changeRoleHandler = (e) => {
  galleryStore.changeRole(e.target.checked);
}
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand" @click="changeCategoryHandler">Gallery</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NuxtLink to="/" class="nav-link" active-class="active" @click="changeCategoryHandler">Home</NuxtLink>
            <NuxtLink to="/works/all" class="nav-link" active-class="active" @click="changeCategoryHandler">Works
            </NuxtLink>
            <div class="form-check form-switch align-self-center">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" @change="changeRoleHandler"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Admin mode</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.navbar-nav {
  flex: 1;
}
.form-switch {
  margin: 0 0 0 auto;
  height: fit-content;
}
</style>
