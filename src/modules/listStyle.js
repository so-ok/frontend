import { createAction, handleActions } from 'redux-actions';

const LIST_STYLE = 'list_style/LIST_STYLE';

export const setListStyle = createAction(LIST_STYLE, (payload) => payload);

const initialState = {
  setStyle: 'list',
};

const listStyle = handleActions({
  [LIST_STYLE]: (state, { payload: listStyle }) => ({
    ...state,
    setStyle: listStyle,
  }),
}, initialState);

export default listStyle;
