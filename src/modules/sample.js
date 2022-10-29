import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const SAMPLE = 'sample/SAMPLE';
const CLEAR_SAMPLE = 'sample/SAMPLE_2';

export const sampleAction = createAction(SAMPLE, (payload) => payload,);
export const clearSampleAction = createAction(CLEAR_SAMPLE, () => ({}));

const initialState = {
  sample: ''
};

const sample = handleActions({
  [SAMPLE]: (state, action) => {
    produce(state, (draft) => {
      draft.sample = action.payload;
    })
  }, [CLEAR_SAMPLE]: (state, action) => ({
    ...state, sample: initialState['sample']
  })
}, initialState,);

export default sample;
