import { createSlice } from "@reduxjs/toolkit";

const beerInitialState = [
  { id: "id-1", title: "Світлий лагер", imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFoSIzHKitwrZgBqlmEjsTQdl-2xxdlMSM_j2EYGzEGGwukrqNjZS-HwSOOQjOhK4QPU&usqp=CAU', price: 45, quantity: 1 },
  { id: "id-2", title: "Пілзнер", imgUrl: 'https://img.freepik.com/premium-vector/types-of-beer-illustration-alcoholic-beverage-menu-collection-set_1995-600.jpg?w=2000', price: 22, quantity: 0.5 },
  { id: "id-3", title: "Бок", imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wOD5P8G0nc32jzrFQG9bBV8ZwLrkT4EqdpkNfpBXKVZE5fRzq_S2_cY9Qs837HTr8kI&usqp=CAU', price: 24, quantity: 0.5 },
  { id: "id-4", title: "Шотландський ель", imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ist5y2uYoiMIu5ohnO5FbdGwpLkZUD1xjlBpeqpMNlo9fw0Nf7Tcheo8tVd8bAmp-lk&usqp=CAU', price: 24, quantity: 0.5 },
  { id: "id-5", title: "Ірландський ель", imgUrl: 'https://charlestonbeerworks.com/wp-content/uploads/2014/10/shutterstock_74179669.jpg', price: 30, quantity: 0.5 },
  { id: "id-6", title: "Портер", imgUrl: 'https://cdn.shopify.com/s/files/1/0054/6682/files/how_to_make_beer_480x480.jpg?v=1682910325', price: 26, quantity: 0.5 },
  { id: "id-7", title: "Стаут", imgUrl: 'https://img.freepik.com/premium-vector/types-of-beer-illustration-alcoholic-beverage-menu-collection-set_1995-600.jpg?w=2000', price: 18, quantity: 0.5 },
  { id: "id-8", title: "Вайсбір", imgUrl: 'https://img.freepik.com/premium-vector/types-of-beer-illustration-alcoholic-beverage-menu-collection-set_1995-600.jpg?w=2000', price: 20, quantity: 0.5 },
  { id: "id-9", title: "Мюнхенське темне", imgUrl: 'https://img.freepik.com/premium-vector/types-of-beer-illustration-alcoholic-beverage-menu-collection-set_1995-600.jpg?w=2000', price: 18, quantity: 0.5 },
  { id: "id-10", title: "Шварцибер", imgUrl: 'https://img.freepik.com/premium-vector/types-of-beer-illustration-alcoholic-beverage-menu-collection-set_1995-600.jpg?w=2000', price: 24, quantity: 0.5 },
  { id: "id-11", title: "Американський лагер", imgUrl: 'https://cdn.shopify.com/s/files/1/0897/0774/articles/Blog_Posts_1_1f5a8c83-5b6a-4e41-99b8-9d361894e10d.png?v=1683049556', price: 30,quantity: 0.5 },
  { id: "id-12", title: "Венський лагер", imgUrl: 'https://img.freepik.com/premium-vector/types-of-beer-illustration-alcoholic-beverage-menu-collection-set_1995-600.jpg?w=2000', price: 26, quantity: 0.5 },
  { id: "id-13", title: "Каліфорнійський комен бір", imgUrl: 'https://img.freepik.com/premium-vector/types-of-beer-illustration-alcoholic-beverage-menu-collection-set_1995-600.jpg?w=2000', price: 32, quantity: 0.5 },
];

const beerListSlice = createSlice({
  // Ім'я слайсу
  name: "beerList",
  // Початковий стан редюсера слайсу
  initialState: beerInitialState,
  // Об'єкт редюсерів
  reducers: {
    toggleFavorite(state, action) {
      for (const beerItem of state) {
        if (beerItem.id === action.payload) {
          beerItem.favorite = !beerItem.favorite;
          break;
        }
      }
    },
  },
});

// Експортуємо генератори екшенів та редюсер
// Генератори екшенів
export const { toggleFavorite } = beerListSlice.actions;
// Редюсер слайсу
export const beerListReducer = beerListSlice.reducer;
