import { connect } from 'react-redux';

import { selectAlbum } from 'store/actions';
import { AlbumDetails } from './AlbumDetails';

const mapStateToProps = ({ selectedAlbumTitle }, { title }) => ({
  selected: selectedAlbumTitle === title,
});

const mapDispatchToProps = (dispatch) => ({
  selectAlbum: (title) => { dispatch(selectAlbum(title)); },
});

const AlbumDetailsWithProps = connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);

export { AlbumDetailsWithProps as AlbumDetails };
