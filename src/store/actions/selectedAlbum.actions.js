export const SET_SELECTED_ALBUM = 'SET_SELECTED_ALBUM';

/* Although it is an anti-pattern to use `title` as an identifier, for this
particular sample project author of the API provided this set of data without `id` or any
similar field, which is why I've chosen to use `title` to distinguish objects, as they are unique
in this particular set of data */

export const selectAlbum = (title) => ({
  type: SET_SELECTED_ALBUM,
  payload: title,
});
