import {
  Text,
  View,
} from 'react-native';

import React from 'react';
import Expo from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import Intro from './components/Intro';
export default class App extends React.Component {

  async componentWillMount() {
     await Expo.Font.loadAsync({
       'Roboto': require('native-base/Fonts/Roboto.ttf'),
       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
       'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
     });

     this.setState({isReady: true});
   }

  render() {
    return (
      <Container padder>
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
              <Title>Collab</Title>
            </Body>
            <Right />
        </Header>
        <Content>
          <Intro />
        </Content>
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Collab</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

Expo.registerRootComponent(App);
