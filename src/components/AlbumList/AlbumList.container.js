import { connect } from 'react-redux';

import { fetchAlbums } from 'store/actions';
import { AlbumList } from './AlbumList';

const mapStateToProps = ({ albums }) => ({
  albums,
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
});

const AlbumListWithProps = connect(mapStateToProps, mapDispatchToProps)(AlbumList);

export { AlbumListWithProps as AlbumList };
