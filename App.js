import {
  Text,
  View,
} from 'react-native';

import React from 'react';
import Expo from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import Intro from './components/Intro';
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
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
