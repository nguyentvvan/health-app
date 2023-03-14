import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  loadMoreButtonText: '記録をもっと見る',
  columns: [{
    title: 'RECOMMENDED COLUMN',
    text: 'オススメ',
  },{
    title: 'RECOMMENDED DIET',
    text: 'ダイエット',
  },{
    title: 'RECOMMENDED BEAUTY',
    text: '美容',
  },{
    title: 'RECOMMENDED HEALTH',
    text: '健康',
  }],
};

export const { reducer: initialReducer } = createSlice({
  initialState,
  name: 'Initial',
  reducers: {},
});