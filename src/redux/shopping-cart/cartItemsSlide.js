import { createSlice } from '@reduxjs/toolkit';

const items =
  localStorage.getItem('cartItems') !== null
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const initialState = {
  value: items,
};

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = state.value.filter(
        (e) =>
          e.slug === newItem.slug &&
          e.color === newItem.color &&
          e.size === newItem.size
      );
      //   const duplicate = findItem(state.value, newItem) có thể thay thế
      if (duplicate.length > 0) {
        state.value = state.value.filter(
          (e) =>
            e.slug !== newItem.slug ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
        // state.value = delItem(state.value, newItem)

        state.value = [
          ...state.value,
          {
            id: duplicate[0].id,
            slug: newItem.slug,
            color: newItem.color,
            size: newItem.size,
            price: newItem.price,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem(
        'cartItems',
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
    updateItem: (state, action) => {
      const newItem = action.payload;
      const item = state.value.filter(
        (e) =>
          e.slug === newItem.slug &&
          e.color === newItem.color &&
          e.size === newItem.size
      );
      if (item.length > 0) {
        state.value = state.value.filter(
          (e) =>
            e.slug !== newItem.slug ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
        state.value = [
          ...state.value,
          {
            id: item[0].id,
            slug: newItem.slug,
            color: newItem.color,
            size: newItem.size,
            price: newItem.price,
            quantity: newItem.quantity,
          },
        ];
      }
      localStorage.setItem(
        'cartItems',
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
        // JSON.stringify(sortItems(state.value)) giong nhau, cu phap don gian hon
      );
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.value = delItem(state.value, item);
      localStorage.setItem('cartItems', JSON.stringify(sortItems(state.value)));
    },
  },
});

// const findItem = (arr, item) =>
//   arr.filter(
//     (e) =>
//       e.slug === item.slug && e.color === item.color && e.size === item.size
//   );

const delItem = (arr, item) =>
  arr.filter(
    (e) =>
      e.slug !== item.slug || e.color !== item.color || e.size !== item.size
  );

const sortItems = (arr) =>
  arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
