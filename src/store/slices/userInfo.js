import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userId: null,
  username: '',
  email: null,
  mainProgress: {
    image: 'd01.jpg',
    date: '05/21',
    percentage: 75,
  },
  mainChart: {},
  filterButtons: [{
    image: 'knife',
    text: 'Morning'
  },{
    image: 'knife',
    text: 'Lunch'
  },{
    image: 'knife',
    text: 'Dinner'
  },{
    image: 'cup',
    text: 'Snack'
  }],
  meals: [{
    image: 'm01.jpg',
    date: '05.21',
    meal: 'Morning',
  },{
    image: 'l03.jpg',
    date: '05.21',
    meal: 'Morning',
  },{
    image: 'd01.jpg',
    date: '05.21',
    meal: 'Dinner',
  },{
    image: 'l01.jpg',
    date: '05.21',
    meal: 'Snack',
  },{
    image: 'm01.jpg',
    date: '05.20',
    meal: 'Morning',
  },{
    image: 'l02.jpg',
    date: '05.20',
    meal: 'Lunch',
  },{
    image: 'd02.jpg',
    date: '05.20',
    meal: 'Dinner',
  },{
    image: 's01.jpg',
    date: '05.21',
    meal: 'Snack',
  }],
};

export const { reducer: userReducer } = createSlice({
  initialState,
  name: 'User',
  reducers: {},
});