import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import{
    Content, Container, Header, Left, Right,
    Icon, Body, Title, Button, H3, P, Card, CardItem, List, ListItem, Thumbnail
} from 'native-base'
import  { createStackNavigator }  from 'react-navigation';

const Divider =(
    <View
        style={{
            borderBottomColor: '#eee',
            borderBottomWidth: 1,
            marginLeft: 5,
            marginRight: 5
        }}
    />
)
export default class SideBar extends Component {

    render(){

        return(
            <Container style={{backgroundColor: 'white'}}>
                <Content>
                    <Content style={{ backgroundColor: '#cc00cc', padding:10 }}>
                        <Thumbnail
                            style={{ alignSelf: 'center', marginBottom : 10  }}
                            source={{uri : 'https://www.materialui.co/materialIcons/social/person_black_216x216.png' }}
                        />
                        <H3 style={{ textAlign : 'center', color: 'white' }}>
                            Pengguna OLX
                        </H3>
                        <Text style={{ textAlign : 'center', color: 'white' }}>
                            qorihaidiralam@gmail.com
                        </Text>
                    </Content>
                    <Content>
                        <List>
                          <ListItem icon noBorder style={{ margin: 10 }}>
                              <Left>
                                  <Icon name='md-contact'/>
                              </Left>
                              <Body>
                                  <Text style={{ color: '#555', fontSize: 15 }}>Profil Saya</Text>
                              </Body>
                          </ListItem>
                            <ListItem icon noBorder style={{ margin: 10 }}>
                                <Left>
                                    <Icon name='md-apps'/>
                                </Left>
                                <Body>
                                    <Text style={{ color: '#555', fontSize: 15 }}>Iklan Saya</Text>
                                </Body>
                            </ListItem>
                              <ListItem icon noBorder style={{ margin: 10 }}>
                                <Left>
                                    <Icon name='md-filing'/>
                                </Left>
                                <Body>
                                    <Text style={{ color: '#555', fontSize: 15 }}>Saldo OLX</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon noBorder style={{ margin: 10 }}>
                                <Left>
                                    <Icon name='ios-help-circle-outline'/>
                                </Left>
                                <Body>
                                    <Text style={{ color: '#555', fontSize: 15 }}>Hubungi Kami</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon noBorder style={{ margin: 10 }}>
                                <Left>
                                    <Icon name='md-information-circle'/>
                                </Left>
                                <Body>
                                    <Text style={{ color: '#555', fontSize: 15 }}>Tentang OLX</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon noBorder style={{ margin: 10 }}>
                                <Left>
                                    <Icon name='md-exit'/>
                                </Left>
                                <Body>
                                    <Text style={{ color: '#555', fontSize: 15 }}>Logout</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Content>
                </Content>
            </Container>
        )
    }
}
