import { SET_SELECTED_ALBUM } from 'store/actions/types';

const initialState = null;

export const selectedAlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ALBUM:
      return action.payload;
    default:
      return state;
  }
};
