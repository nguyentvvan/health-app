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
  diaries: [{
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },{
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },{
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },{
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },{
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },{
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },{
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },{
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  }],
};

export const { reducer: userReducer } = createSlice({
  initialState,
  name: 'UserInfo',
  reducers: {},
});