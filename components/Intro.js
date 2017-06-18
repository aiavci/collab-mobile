import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Title, Button, Icon, Left, Right, Body } from 'native-base';
export default class Intro extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                              <Text>
                                Sample Body
                              </Text>
                            </Body>
                            <Right>
                              <Text>
                                Sample Body
                              </Text>
                            </Right>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}
