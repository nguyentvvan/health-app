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
    type: 'Morning'
  },{
    image: 'knife',
    type: 'Lunch'
  },{
    image: 'knife',
    type: 'Dinner'
  },{
    image: 'cup',
    type: 'Snack'
  }],
  records: [{
    title: 'BODY RECORD',
    text: '自分のカラダの記録',
    image: 'MyRecommend-1.jpg',
  },{
    title: 'MY EXERCISE',
    text: '自分の運動の記録',
    image: 'MyRecommend-2.jpg',
  },{
    title: 'MY DIARY',
    text: '自分の日記',
    image: 'MyRecommend-3.jpg',
  }],
  exercises: [{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  },{
    title: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
  }],
};

export const { reducer: userReducer } = createSlice({
  initialState,
  name: 'UserInfo',
  reducers: {},
});