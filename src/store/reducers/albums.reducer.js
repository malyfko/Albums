import { FETCH_ALBUMS_SUCCESS } from 'store/actions';

const initialState = [];

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
