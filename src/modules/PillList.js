import { createAction, handleActions } from "redux-actions";

const ADD_LIST = "pillList/ADD_LIST";
const LOADING_LIST = "pillList/LOADING_LIST";

export const addListAction = createAction(ADD_LIST, (payload) => payload);
export const loadingListAction = createAction(LOADING_LIST, () => {});

const initialState = {
  id: null,
  name: "",
  nutrient: [],
  img: "",
};

export function* pillListSaga() {}

const pillList = handleActions(
  {
    [ADD_LIST]: (state, payload) => ({
      ...state,
      id: payload.id,
      nutrient: [payload.nutrients],
    }),
    [LOADING_LIST]: (state, payload) => ({
      ...state,
      loading: true,
    }),
  },
  initialState
);

export default pillList;
