import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Title, Button, Icon, Left, Right, Body } from 'native-base';
export default class Intro extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                      <Text>
                        Sample Body (Middle)
                      </Text>
                    </Body>
                    <Right>
                      <Text>
                        Sample Body (Right)
                      </Text>
                    </Right>
                </CardItem>
           </Card>
        );
    }
}
