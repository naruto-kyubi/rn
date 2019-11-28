import {
    queryArticleList,
    queryArticleById,
    queryProvince
  } from '../services/article';
import { setPageQueryState } from '../utils/pageUtils';

export default {
    namespace: 'article',
    state: { 
        count: 1,
        list:[],
        articleList: {},
        articleDetail: {},
    },
    effects: {

        *fetchArticleList({ payload }, { call, put }) {
            
            const response = yield call(queryArticleList, payload);
            yield put({
              type: 'setPageQueryListState',
              payload: response,
              meta: { property: 'articleList' },
            });
          },

        *fetchArticleById({ payload, callback }, { call, put }) {

            const response = yield call(queryArticleById, payload);
            yield put({
              type: 'setState',
              payload: {
                articleDetail: response,
              },
            });
      
            if (callback) {
              callback(response);
            }
          },
          
        *fetchProvince({ payload }, { call, put }) {
            const response = yield call(queryProvince, payload);
            console.log(response);
            const { data } = response;
            yield put({
              type: 'setState',
              payload: {list : data},
            });
          },
    },

    reducers: {
        
        setState(state, action) {
            return { ...state, ...action.payload };
        },

        setPageQueryListState(state, action) {
            const { property } = action.meta;
            return setPageQueryState(state, action, property);
        },

        edit(state, { count }) {
            state.count += count;
            return { ...state };
        },
    },
};
