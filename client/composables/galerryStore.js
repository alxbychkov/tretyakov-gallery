import { defineStore } from "pinia";

const API_URL = "http://gallery.alxbychkov.beget.tech/gallery/";

export const useGalleryStore = defineStore("GalleryStore", {
  state: () => ({
    gallery: [],
    filteredGallery: [],
    admin: false,
    filters: {
      author: new Set(),
      work: new Set(),
    },
    nav: [],
    isLoaded: false,
  }),
  actions: {
    async get(category = "") {
      const URL = `${API_URL}get-all-products.php`;
      this.isLoaded = false;
      let response = "";

      if (category && category !== "all") {
        response = await $fetch(`${URL}?work=${category}`);
      } else {
        response = await $fetch(URL);
      }

      this.gallery = response.status === 1 ? response.message : [];

      this.filteredGallery = [...this.gallery];
      // this.nav = new Set(this.gallery.map((i) => i.work));

      this.getNav();
      this.getFilters();

      this.isLoaded = true;
    },
    async getNav() {
      const URL = `${API_URL}get-nav.php`;
      const response = await $fetch(URL);

      if (response.status === 1) {
        this.nav = new Set(response.message.map((i) => i.work));
      }
    },
    getFilters() {
      this.clearFilters();

      const temp = {};

      Object.keys(this.filters).forEach((key) => {
        temp[key] = new Set(this.gallery.map((i) => i[key]));
      });

      this.filters = temp;
    },
    clearFilters() {
      this.filters = {
        author: new Set(),
        work: new Set(),
      };
    },
    filterGallery(obj) {
      let temp = [...this.gallery];

      if (Object.entries(obj).length) {
        Object.entries(obj).forEach((f) => {
          this.filteredGallery = temp.filter((i) => i[`${f[0]}`] === f[1]);
          temp = this.filteredGallery;
        });
      } else {
        this.filteredGallery = [...this.gallery];
      }
    },
    changeRole(flag) {
      this.admin = flag;
    },
    async deleteGalleryItem(id) {
      const URL = `${API_URL}delete-products.php`;

      const response = await $fetch(URL, {
        method: "POST",
        body: { id },
      });

      if (response.status === 1) {
        this.gallery = this.gallery.filter((i) => i.id !== id);
        this.filteredGallery = [...this.gallery];
        alert(response.message);
      }
    },
    async editGalleryItem(item) {
      const URL = `${API_URL}update-products.php`;

      const response = await $fetch(URL, {
        method: "POST",
        body: item,
      });

      if (response.status === 1) {
        alert(response.message);
      }
    },
  },
  getters: {},
});
