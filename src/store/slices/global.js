import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  header: {
    navigations: [{
      path: '/my-record',
      text: '自分の記録',
      icon: 'profile'
    },{
      path: '/challenge',
      text: 'チャレンジ',
      icon: 'challenge'
    },{
      path: '/info',
      text: 'お知らせ',
      icon: 'info'
    }],
    userMenu: {
      items: [{
        text: '自分の記録',
        urlPath: '/my-record',
      },{
        text: '体重グラフ',
        urlPath: '',
      },{
        text: '目標',
        urlPath: '',
      },{
        text: '選択中のコース',
        urlPath: '',
      },{
        text: 'コラム一覧',
        urlPath: '/column',
      },{
        text: '設定',
        urlPath: '',
      }],
    },
  },
  footer: {
    texts: [
      '会員登録',
      '運営会社',
      '利用規約',
      '個人情報の取扱について',
      '特定商取引法に基づく表記',
      'お問い合わせ',
    ],
  },
};

export const { reducer: globalReducer } = createSlice({
  initialState,
  name: 'Global',
  reducers: {},
});