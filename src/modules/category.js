import { createAction, handleActions } from 'redux-actions';

const CATEGORY = 'category/CATEGORY';

export const selectedCategory = createAction(CATEGORY, (payload) => payload);

const initialState = {
  category: '장 건강',
};

const category = handleActions({
  [CATEGORY]: (state, { payload: select }) => ({
    ...state,
    category: select,
  }),
}, initialState);

export default category;
