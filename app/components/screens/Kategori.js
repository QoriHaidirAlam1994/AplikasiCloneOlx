import React, {Component} from 'react'
import { StyleSheet, Text, View, Style, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Body,
         Right, Title, Button, FooterTab, Drawer,
         Icon, Footer, Content, CardItem, Card, Thumbnail }
         from 'native-base'
import  { createStackNavigator }  from 'react-navigation'
import Sidebar from '../sidebar/Sidebar'

export default class KategoriView extends Component {

  static navigationOptions = { header: null }
    render() {
      const { navigate } = this.props.navigation
    return (
      <Drawer
        ref= {(ref) => this.drawer= ref}
        content={ <Sidebar /> }
        onClose={ ()=> this.closeDrawer() }
        panOpenMask={.10}
      >
          <Container>
            <Header style={styles.white}>
              <Left>
                <Button transparent onPress={ ()=> this.openDrawer() }>
                  <Icon style={styles.black} name= 'menu' />
                </Button>
              </Left>
                <Body>
                  <Title style={styles.judul}>Kategori</Title>
                </Body>
              <Right>
                <Button transparent>
                  <Icon style={styles.black} name= 'search' />
                </Button>
                <Button transparent onPress={() => this.props.navigation.navigate('KategoriFilter')}>
                  <Icon style={styles.black} name= 'md-options' />
                </Button>
              </Right>
          </Header>

        <Content>
              <View>
                <View style={{flex:1 , flexDirection:"row", justifyContent:"center"}}>
                  <Card>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukView')}>
                    <CardItem style={styles.info}>
                      <Thumbnail square source={require('../../img/iconmobil.png')} />
                      <Text>Mobil</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                      <Thumbnail square source={require('../../img/iconmotor.png')} />
                      <Text>Motor</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                      <Thumbnail square source={require('../../img/iconrumah.png')} />
                      <Text>Properti</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                </View>
                <View style={{flex:1 , flexDirection:"row", justifyContent:"center"}}>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                      <Thumbnail square source={require('../../img/iconolahraga.png')} />
                      <Text>Hobi & Olahraga</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                      <Thumbnail square source={require('../../img/iconpakaian.png')} />
                      <Text>Keperluan Pribadi</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                    <Thumbnail square source={require('../../img/iconperalatan.png')} />
                    <Text>Jasa & Lowongan</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                </View>
                <View style={{flex:1 , flexDirection:"row", justifyContent:"center"}}>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                      <Thumbnail square source={require('../../img/iconprinter.png')} />
                      <Text>Kantor & Properti</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                      <Thumbnail square source={require('../../img/iconhandphone.png')} />
                      <Text>Elektronik & Gadget</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                    <Thumbnail square source={require('../../img/iconalatbayi.png')} />
                    <Text>Perlengkapan Bayi & Anak</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                </View>
                <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
                  <Card>
                  <TouchableOpacity onPress={ () => navigate('Lihat')}>
                    <CardItem style={styles.info}>
                      <Thumbnail square source={require('../../img/iconperlengkapan.png')} />
                      <Text>Rumah Tangga</Text>
                    </CardItem>
                    </TouchableOpacity>
                  </Card>
                  <Card transparent >
                  </Card>
                  <Card transparent>
                  </Card>
                  </View>
                </View>
          </Content>

        <Footer >
          <FooterTab style={styles.white}>
            <Button vertical onPress={() => this.props.navigation.navigate('ProdukView')}>
              <Icon style={styles.black} name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon  style={styles.orange} name="apps" />
              <Text>Kategori</Text>
            </Button>
            <Button vertical active>
              <Icon name="camera" />
              <Text>Jual</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.black} active name="mail" />
              <Text>Pesan</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.black} name="heart" />
              <Text>Favorit</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
      </Drawer>
    );
  }
}

    const styles = StyleSheet.create({
    judul: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30
    },
    black: {
      color: 'black'
    },
    white: {
      backgroundColor: '#FFF'
    },
    orange: {
      color: '#ffa500'
    },
    info: {
      flex: 1,
      flexDirection: 'column'
    }
    });
