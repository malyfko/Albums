import { combineReducers } from 'redux';

import { albumsReducer as albums } from 'store/reducers/albums.reducer';
import { selectedAlbumReducer as selectedAlbumTitle } from 'store/reducers/selectedAlbum.reducer';
import { loginFormReducer as loginForm } from 'store/reducers/loginForm.reducer';
import { errorMessageReducer as errorMessage } from 'store/reducers/errorMessage.reducer';

export default combineReducers({
  albums,
  selectedAlbumTitle,
  loginForm,
  errorMessage,
});
