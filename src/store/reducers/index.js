import { combineReducers } from 'redux';

import { albumsReducer as albums } from 'store/reducers/albums.reducer';
import { selectedAlbumReducer as selectedAlbumTitle } from 'store/reducers/selectedAlbum.reducer';

export default combineReducers({
  albums,
  selectedAlbumTitle,
});
