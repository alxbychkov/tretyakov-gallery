<script setup>
import EditIcon from "../components/icons/EditIcon.vue";
import BasketIcon from "../components/icons/BasketIcon.vue";

defineProps({
  item: {
    type: Object,
  },
});

const galleryStore = useGalleryStore();
const admin = toRef(galleryStore, "admin");
const isEdit = ref(false);

const deleteItemHandler = (id) => {
  galleryStore.deleteGalleryItem(id);
};

const editItemHandler = (item) => {
  isEdit.value = !isEdit.value;

  if (!isEdit.value) {
    galleryStore.editGalleryItem(item);
  }
};
</script>

<template>
  <div class="card position-relative">
    <div v-if="admin" class="position-absolute top-0 end-0 mt-2 icons">
      <span class="me-2">
        <EditIcon @click="editItemHandler(item)" />
      </span>
      <span class="me-2">
        <BasketIcon @click="deleteItemHandler(item.id)" />
      </span>
    </div>
    <img :src="item.img" class="card-img-top" :alt="item.title" />
    <div class="card-body">
      <div v-if="isEdit" class="input-group input-group-sm mb-3">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          v-model="item.title"
        />
      </div>
      <h5 v-else class="card-title">{{ item.title }}</h5>
      <div v-if="isEdit" class="input-group input-group-sm">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          v-model="item.description"
        />
      </div>
      <p v-else class="card-text">{{ item.description }}</p>
    </div>
  </div>
</template>
<style>
.card img {
  max-height: 180px;
  object-fit: cover;
}

.icons {
  cursor: pointer;
}
</style>
