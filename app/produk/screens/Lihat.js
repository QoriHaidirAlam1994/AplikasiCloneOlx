import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, Width, Image, Dimensions } from 'react-native'
import  { createStackNavigator }  from 'react-navigation'
import{
    Content, Container, Header, Left, Right, Drawer,
    Icon, Body, Title, Button, H3, P, Card,
    CardItem, List, ListItem, Thumbnail, Grid, Fab
} from 'native-base'

import Swiper from 'react-native-swiper'
const Divider =(
    <View
        style={{
            borderBottomColor: '#eee',
            borderBottomWidth: 1,
        }}
    />
)
export default class ProdukDetail extends Component {

  constructor() {
    super()
    this.state = {
      active: 'true',
      slides:[
          {id: '1', img: 'https://s3.bukalapak.com/img/3497401432/w-1000/20170331_151557_scaled.jpg.webp'},
          {id: '2', img: 'https://s4.bukalapak.com/img/4358401432/w-1000/20170602_124728_scaled.jpg.webp'},
          {id: '3', img: 'https://s0.bukalapak.com/img/0398401432/w-1000/20170607_123404_scaled.jpg.webp'},
          {id: '4', img: 'https://s3.bukalapak.com/img/3497401432/w-1000/20170331_151557_scaled.jpg.webp'}
      ]
    };
  }

  static navigationOptions = { header: null }
    render() {
      const { navigate } = this.props.navigation
      return(
          <Container>
                  <Content>
                    <Header style={{ backgroundColor: 'transparent', marginBottom: -50, zIndex: 9}} noShadow>
                        <Left >
                            <Button transparent onPress={ () => this.props.navigation.navigate('ProdukView')}>
                                <Icon style={{ color: 'white' }} name='arrow-back'></Icon>
                            </Button>
                        </Left>
                        <Body>
                          <Text style={ styles.judul }>OLX</Text>
                        </Body>
                        <Right>
                            <Icon style={{color: 'white'}} name="md-share"></Icon>
                        </Right>
                    </Header>
                      <Swiper
                          style={styles.wrapper}
                      >
                          {this.state.slides.map( (slide) => (
                              <View style={styles.slide} key={slide.id}>
                                  <Image style={styles.image} source={{ uri : slide.img }}/>
                              </View>
                          ))}
                      </Swiper>
                      <Card>
                          <CardItem>
                          <Left>
                          <Thumbnail
                              style={{ alignSelf: 'center', marginBottom : 10  }}
                              source={{uri : 'https://www.materialui.co/materialIcons/social/person_black_216x216.png' }}
                          />
                          </Left>
                          <Body>
                              <H3 style={{ color : 'black', fontWeight : 'bold' }}>Pengguna OlX </H3>
                              <Text style={{ color : 'black' }}>
                                  Member sejak 7 Nov 2012
                              </Text>
                              <Text style={{ color : '#ad186c' }}>
                                  View Profile
                              </Text>
                          </Body>
                          </CardItem>
                      </Card>
                      <Card style={styles.box}>
                          <CardItem style={styles.box}>
                          <Body>
                              <H3 style={{ color : 'black',fontWeight : 'bold' }}>Dijual Mobil Jeep harga Murah Tapi Aman</H3>
                              <Text style={{ color : 'black' }}>
                                  Hubungi kontak kami apabila anda berminat
                              </Text>
                          </Body>
                          </CardItem>
                          <CardItem style={styles.box}>
                              <Content>
                                <Body>
                                  <Text style={{ color: 'black' }}>
                                    Rp 19.000.000
                                  </Text>
                                </Body>
                              </Content>
                          </CardItem>
                          <Content style={{flex : 1}}>
                              <Text style={{fontWeight: 'bold',textAlign : 'center', color: 'orange', marginBottom: 20}}>
                                  SELENGKAPNYA
                              </Text>
                          </Content>
                          <Card transparent>
                            <CardItem style={styles.box}>
                              <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'left', color: '#ad186c' }}>Dipasang</Text>
                              </View>
                              <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'right' }}>26 Mei 2018</Text>
                              </View>
                            </CardItem>
                          </Card>
                          <Card transparent>
                            <CardItem style={styles.box}>
                              <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'left', color: '#ad186c' }}>Kondisi</Text>
                              </View>
                              <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'right' }}>Bekas</Text>
                              </View>
                            </CardItem>
                            </Card>
                            <Card transparent>
                              <CardItem style={styles.box} >
                                <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                                  <Text style={{ textAlign: 'left', color: '#ad186c' }}>ID Iklan</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                                  <Text style={{ textAlign: 'right' }}>2315352522</Text>
                                </View>
                              </CardItem>
                            </Card>
                          <Card transparent>
                            <CardItem style={styles.box}>
                            <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center', borderColor: '#999', borderRightWidth: 1 }}>
                              <Text style={{ textAlign: 'left' }}>389 </Text>
                              <Text note>Dilihat</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                              <Text style={{ textAlign: 'right' }}>4 </Text>
                              <Text note>Dihubungi</Text>
                              </View>
                            </CardItem>
                          </Card>
                      </Card>
                      <Card>
                          <CardItem>
                          <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left' }}>Lihat iklan lainnya</Text>
                          </View>
                          <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center' }}>
                            <Button transparent>
                              <Icon style={{ color: 'black', textAlign: 'right' }} name='arrow-forward'></Icon>
                            </Button>
                          </View>
                          </CardItem>
                          {Divider}
                          <CardItem>
                          <View>
                            <Content style={{ width: '220%'}}>
                                <Text style={{ color: 'purple' }}>
                                Lokasi Terkini
                                </Text>
                                <Icon style={{ color: 'orange', textAlign: 'left' }} name='md-locate'>
                                <Text style={{color: 'black', textAlign: 'left', fontSize: 15, marginRight: 10}}>Jl Bekasi Raya</Text>
                                </Icon>
                                <Icon style={{  position: 'absolute', zIndex: 10,  color: 'black', right: 15, top: 15}} name='arrow-forward'>
                                </Icon>
                            </Content>
                          </View>
                          </CardItem>
                      </Card>
                      <Card>
                        <CardItem>
                          <View>
                            <Text>
                            Bertemu langsung dengan penjual adalah cara teraman membeli barang.
                            </Text>
                            <Text note>Laporkan iklan ini</Text>
                            <Text note style={{ color: '#ad186c'}}>lebih lanjut</Text>
                            <View style={{ flex: 1 }}>
                            <Fab
                            active={this.state.active}
                            direction="up"
                            containerStyle={{ }}
                            style={{ backgroundColor: '#f4b942', position: 'absolute'}}
                            position="bottomRight"
                            onPress={() => this.setState({ active: !this.state.active })}>
                            <Icon name="md-call" />
                            <Button style={{ backgroundColor: '#34A34F' }}>
                            <Icon name="logo-whatsapp" />
                            </Button>
                            <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                            </Button>
                            <Button disabled style={{ backgroundColor: '#DD5144' }}>
                            <Icon name="mail" />
                            </Button>
                            </Fab>
                            </View>
                          </View>
                        </CardItem>
                      </Card>
                  </Content>
          </Container>
      )
  }
}

const styles = StyleSheet.create({
  container: {
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#24a4ec',
  },
  header:{
      backgroundColor : '#2196f3',
  },
  box:{
      backgroundColor : '#FFF'

  },
  judul: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  wrapper:{
      height : 300
  },
  col:{
      width: 80,
      alignSelf: 'center',
      padding: 10,
      marginRight: 5,
      borderRadius: 5,
      backgroundColor : '#56aff6',

  },
  slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    image: {
      flex: 1
    },
})
