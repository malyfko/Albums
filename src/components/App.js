import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';

import { Header } from 'components/Header';
import { LoginForm } from 'components/LoginForm';
import { AlbumList } from 'components/AlbumList';
import { Button, Spinner } from 'components/common';
import { Firebase } from 'config/firebase';
import { store } from 'store';

type Props = {};
export class App extends Component<Props> {
  state = {
    authorized: null,
  };

   componentWillMount() {
     Firebase.auth().onAuthStateChanged((user) => {
       this.setState({
         authorized: !!user,
       });
     });
   }

  handleSignOut = () => {
    Firebase.auth().signOut();
  };

   renderContent = () => {
     const { authorized } = this.state;

     switch (authorized) {
       case true:
         return (
           <ScrollView>
             <Button
               onPress={this.handleSignOut}
             >
               Log Out
             </Button>
             <AlbumList />
           </ScrollView>
         );
       case false:
         return <LoginForm />;
       default:
         return <Spinner />;
     }
   };

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header headerText={'Albums'} />
          {this.renderContent()}
        </View>
      </Provider>
    );
  }
}
