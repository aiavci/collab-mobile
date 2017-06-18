import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Text, Content, Footer} from 'native-base';
export default class LoadingPage extends Component {
  render() {
        return (
          <Container padder>
            <Header>
            </Header>
            <Content>
              <Text>Loading ...</Text>
            </Content>
            <Footer>
            </Footer>
          </Container>
        );
    }
}
