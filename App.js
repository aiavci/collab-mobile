import {
  Text,
  View,
} from 'react-native';

import React from 'react';
import Expo from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs } from 'native-base';
import Intro from './components/Intro';
import LoadingPage from './components/LoadingPage';
export default class App extends React.Component {
  state = {
    isLoading: false,
    isReady: false
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <LoadingPage />;
    }
    return (
      <Container>
        <Header hasTabs>
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
        <Tabs>
            <Tab heading="Tab1">
            </Tab>
            <Tab heading="Tab2">
            </Tab>
            <Tab heading="Tab3">
            </Tab>
        </Tabs>
        <Intro />
        <Intro />
        <Intro />
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
