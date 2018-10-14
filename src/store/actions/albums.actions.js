import axios from 'axios';

import { API_URL } from 'consts';

export const FETCH_ALBUMS_START = 'FETCH_ALBUMS_START';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAIL = 'FETCH_ALBUMS_FAIL';

export const fetchAlbums = () =>
  (dispatch) => {
    dispatch(fetchAlbumsStart());

    axios.get(`${API_URL}/music_albums`)
      .then(({ data }) => {
        dispatch(fetchAlbumsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchAlbumsFail(error));
      });
  };

const fetchAlbumsStart = () => ({
  type: FETCH_ALBUMS_START,
});

const fetchAlbumsSuccess = (data) => ({
  type: FETCH_ALBUMS_SUCCESS, payload: data,
});

const fetchAlbumsFail = (error) => ({
  type: FETCH_ALBUMS_FAIL, payload: error,
});
