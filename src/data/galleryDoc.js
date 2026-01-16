import img01 from '../assets/gallery/gallery-01.jpeg';
import img02 from '../assets/gallery/gallery-02.jpeg';

export const galleryCategories = [
  {
    "id": "all",
    "name": "All Photos"
  },
  {
    "id": "surgeries",
    "name": "Surgeries"
  },
  {
    "id": "events",
    "name": "Events"
  }
];

export const galleryImages = [
  {
    id: 1,
    src: img01,
    thumb: img01,
    title: "Photo 01",
    description: "",
    category: "surgeries"
  },
  {
    id: 2,
    src: img02,
    thumb: img02,
    title: "A view of 1000 free spectacle frames distribution in connection with Silver Jubilee Celebration",
    description: "",
    category: "events"
  }
];
