import axios from 'axios';

import { API_URL } from 'consts';

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR';

export const fetchAlbums = () =>
  (dispatch) => {
    axios.get(`${API_URL}/music_albums`)
      .then(({ data }) => {
        dispatch(fetchAlbumsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchAlbumsError(error));
      });
  };

const fetchAlbumsSuccess = (data) => ({
  type: FETCH_ALBUMS_SUCCESS, payload: data,
});

const fetchAlbumsError = (error) => ({
  type: FETCH_ALBUMS_ERROR, payload: error,
});
