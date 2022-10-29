import { defineStore } from "pinia";

let GALLERY = [
  {
    id: "1",
    img: "/images/1_1.jpg",
    description: "Description 1",
    title: "Title 1",
    work: "landscape",
    author: "Sergey",
  },
  {
    id: "2",
    img: "/images/1_2.jpg",
    description: "Description 2",
    title: "Title 2",
    work: "landscape",
    author: "Alexander",
  },
  {
    id: "3",
    img: "/images/1_3.jpg",
    description: "Description 3",
    title: "Title 3",
    work: "landscape",
    author: "Dmitry",
  },
  {
    id: "4",
    img: "/images/1_4.jpg",
    description: "Description 4",
    title: "Title 4",
    work: "landscape",
    author: "Sergey",
  },
  {
    id: "5",
    img: "/images/1_5.jpg",
    description: "Description 5",
    title: "Title 5",
    work: "landscape",
    author: "Alexander",
  },
  {
    id: "6",
    img: "/images/2_1.jpg",
    description: "Description 6",
    title: "Title 6",
    work: "realism",
    author: "Alexander",
  },
  {
    id: "7",
    img: "/images/2_2.jpeg",
    description: "Description 7",
    title: "Title 7",
    work: "realism",
    author: "Sergey",
  },
  {
    id: "8",
    img: "/images/2_3.jpeg",
    description: "Description 8",
    title: "Title 8",
    work: "realism",
    author: "Dmitry",
  },
  {
    id: "9",
    img: "/images/2_4.jpg",
    description: "Description 9",
    title: "Title 9",
    work: "realism",
    author: "Alexander",
  },
  {
    id: "10",
    img: "/images/3_1.jpg",
    description: "Description 10",
    title: "Title 10",
    work: "expressionism",
    author: "Alexander",
  },
  {
    id: "11",
    img: "/images/3_2.jpg",
    description: "Description 11",
    title: "Title 11",
    work: "expressionism",
    author: "Sergey",
  },
  {
    id: "12",
    img: "/images/3_3.jpg",
    description: "Description 12",
    title: "Title 12",
    work: "expressionism",
    author: "Dmitry",
  },
  {
    id: "13",
    img: "/images/4_1.jpg",
    description: "Description 13",
    title: "Title 13",
    work: "foreign",
    author: "Dmitry",
  },
  {
    id: "14",
    img: "/images/4_2.jpg",
    description: "Description 14",
    title: "Title 14",
    work: "foreign",
    author: "Alexander",
  },
  {
    id: "15",
    img: "/images/4_3.jpg",
    description: "Description 15",
    title: "Title 15",
    work: "foreign",
    author: "Sergey",
  },
];

export const useGalleryStore = defineStore("GalleryStore", {
  state: () => ({
    gallery: [],
    filteredGallery: [],
    admin: false,
    filters: {
      author: new Set(),
      work: new Set()
    },
    nav: [],
    isLoaded: false
  }),
  actions: {
    async get(category = "") {
      this.isLoaded = false;

      if (category && category !== 'all') {
        this.gallery = [...GALLERY.filter((g) => g.work === category)];
      } else {
        this.gallery = [...GALLERY];
      }
  
      this.filteredGallery = [...this.gallery];
      this.nav = new Set(GALLERY.map((i) => i.work));
      this.getFilters();

      this.isLoaded = true;
    },
    getFilters(array) {
      this.clearFilters();

      const temp = {};

      Object.keys(this.filters).forEach(key => {
        temp[key] = new Set(this.gallery.map((i) => i[key]));      
      });

      this.filters = temp;
    },
    clearFilters() {
      this.filters = {
        author: new Set(),
        work: new Set()
      }
    },
    filterGallery(obj) {
      let temp = [...this.gallery];
      
      if (Object.entries(obj).length) {
        Object.entries(obj).forEach(f => {
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
    deleteGalleryItem(id) {
      GALLERY = GALLERY.filter(i => i.id !== id);
      this.gallery = this.gallery.filter(i => i.id !== id);
      this.filteredGallery = [...this.gallery];
    },
    editGalleryItem(item) {
      // GALLERY = GALLERY.filter(i => i.id !== id);

      // this.gallery = this.gallery.filter(i => i.id !== id);
      // this.filteredGallery = [...this.gallery];
    }
  },
  getters: {},
});
