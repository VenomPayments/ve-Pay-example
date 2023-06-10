import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "items/itemsFetchStatus",
  async (params) => {
    const { categoryId, sortingItem, searchValue, currentPage } = params;
    const data = await [
      {
        "id": "1",
        "images": [
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
          "https://kartinkin.net/uploads/posts/2021-04/1617249568_35-p-pitstsa-na-belom-fone-krasivo-45.jpg",
          "https://i1.photo.2gis.com/images/branch/0/30258560074074452_7f68.jpg",
          "https://aroma-avenue.ru/wp-content/uploads/2/0/e/20e000f70d8700b671b7fa82ec947967.jpeg",
          "https://lookw.ru/1/73/1380310816-pitstsa-ch1--38.jpg"
        ],
        "title": "Chees",
        "info": [
          "Mozzarella",
          "cheddar and parmesan cheeses ",
          "alfredo sauce"
        ],
        "types": [
          0
        ],
        "sizes": [
          26,
          40
        ],
        "price": 245,
        "category": 2,
        "rating": 5,
        "reviews": 23
      },
      {
        "id": "2",
        "images": [
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
          "https://kartinkin.net/uploads/posts/2021-04/1617249568_35-p-pitstsa-na-belom-fone-krasivo-45.jpg",
          "https://i1.photo.2gis.com/images/branch/0/30258560074074452_7f68.jpg",
          "https://aroma-avenue.ru/wp-content/uploads/2/0/e/20e000f70d8700b671b7fa82ec947967.jpeg",
          "https://lookw.ru/1/73/1380310816-pitstsa-ch1--38.jpg"
        ],
        "title": "Meets",
        "info": [
          "Mozzarella",
          "cheddar and parmesan cheeses ",
          "alfredo sauce"
        ],
        "types": [
          0
        ],
        "sizes": [
          26,
          40
        ],
        "price": 200,
        "category": 2,
        "rating": 5,
        "reviews": 23
      },
      {
        "id": "3",
        "images": [
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
          "https://kartinkin.net/uploads/posts/2021-04/1617249568_35-p-pitstsa-na-belom-fone-krasivo-45.jpg",
          "https://i1.photo.2gis.com/images/branch/0/30258560074074452_7f68.jpg",
          "https://aroma-avenue.ru/wp-content/uploads/2/0/e/20e000f70d8700b671b7fa82ec947967.jpeg",
          "https://lookw.ru/1/73/1380310816-pitstsa-ch1--38.jpg"
        ],
        "title": "Hawaii",
        "info": [
          "Mozzarella",
          "cheddar and parmesan cheeses ",
          "alfredo sauce"
        ],
        "types": [
          0
        ],
        "sizes": [
          26,
          40
        ],
        "price": 215,
        "category": 2,
        "rating": 5,
        "reviews": 23
      },
      {
        "id": "4",
        "images": [
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
          "https://kartinkin.net/uploads/posts/2021-04/1617249568_35-p-pitstsa-na-belom-fone-krasivo-45.jpg",
          "https://i1.photo.2gis.com/images/branch/0/30258560074074452_7f68.jpg",
          "https://aroma-avenue.ru/wp-content/uploads/2/0/e/20e000f70d8700b671b7fa82ec947967.jpeg",
          "https://lookw.ru/1/73/1380310816-pitstsa-ch1--38.jpg"
        ],
        "title": "Extra hawaii",
        "info": [
          "Mozzarella",
          "cheddar and parmesan cheeses ",
          "alfredo sauce"
        ],
        "types": [
          0
        ],
        "sizes": [
          26,
          40
        ],
        "price": 215,
        "category": 2,
        "rating": 5,
        "reviews": 23
      },
    ]
    return data;
  }
);

const initialState = {
  items: [],
  item: {},
  status: "loading",
  activeType: 0,
  activeSize: 0,
  typeNames: ["thin", "thick"],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, actions) {
      state.items = actions.payload;
    },
    setItem(state, actions) {
      state.item = actions.payload;
      localStorage.setItem('item', JSON.stringify(actions.payload));
    },
    setActiveType(state, actions) {
      state.activeType = actions.payload;
    },
    setActiveSize(state, actions) {
      state.activeSize = actions.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, actions) => {
      state.status = "success";
      state.items = actions.payload;
    },
    [fetchItems.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectItemsData = (state) => state.items;

export const { setItems, setItem, setActiveSize, setActiveType } =
  itemsSlice.actions;

export default itemsSlice.reducer;
