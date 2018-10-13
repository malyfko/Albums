import React, { Fragment } from 'react';
import { Text, View, Image, Linking, TouchableHighlight, LayoutAnimation } from 'react-native';

import { Card, CardSection, Button } from 'components/common';

export const AlbumDetails = ({
  artist,
  thumbnail_image,
  image,
  title,
  url,
  selected,
  selectAlbum,
                             }) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  LayoutAnimation.easeInEaseOut();

  return (
    <Card>
      <TouchableHighlight
        onPress={() => {
          selectAlbum(title);
        }}
      >
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
      </TouchableHighlight>

      {selected && (
        <Fragment>
          <CardSection>
            <Image source={{ uri: image }} style={imageStyle} />
          </CardSection>

          <CardSection>
            <Button
              onPress={() => {
                Linking.openURL(url);
              }}
            >
              Buy Now
            </Button>
          </CardSection>
        </Fragment>
      )}
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
};
