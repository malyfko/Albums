import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { AlbumDetails } from 'components/AlbumDetails';

export class AlbumList extends Component {

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums } = this.props;

    return (
      <FlatList
        data={albums}
        renderItem={({ item: album }) => (<AlbumDetails {...album} />)}
        keyExtractor={(album) => album.title}
      />
    );
  }
}
