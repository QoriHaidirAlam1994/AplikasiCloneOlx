import React, { Component } from 'react'
import { StyleSheet, Text, View, Style, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import {
  Container, Header, Left, Body,
  Right, Title, Button, FooterTab,
  Icon, Footer, Content, CardItem, Card, Thumbnail, Drawer
}
  from 'native-base'
import { createStackNavigator } from 'react-navigation';
import Sidebar from '../sidebar/Sidebar'

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allProducts } from '../actions'


const window = Dimensions.get('window')
class ProdukView extends Component {

  componentDidMount() {
    this.props.dispatch(allProducts())
  }

  openDrawer() {
    this.drawer._root.open()
  }
  closeDrawer() {
    this.drawer._root.close()
  }

  static navigationOptions = { header: null }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}
        panOpenMask={.10}
      >
        <Container>
          <Header style={styles.white}>
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon style={styles.black} name='menu' />
              </Button>
            </Left>
            <Body>
              <Title style={styles.judul}>OLX</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon style={styles.black} name='search' />
              </Button>
              <Button transparent onPress={() => this.props.navigation.navigate('ProdukFilter')}>
                <Icon style={styles.black} name='md-options' />
              </Button>
            </Right>
          </Header>

          <Content>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button style={{ backgroundColor: '#ebebe0' }}>
                <Icon style={styles.orange} name='md-locate' />
                <Text > 1 Km dari Anda</Text>
                <Icon style={styles.black} name='ios-arrow-forward' />
              </Button>
            </View>
           
            <FlatList
              numColumns={2}
              data={this.props.produk.results}
              renderItem={({ item }) =>
                <Card style={{ backgroundColor: '#f4c542', justifyContent: "center" }} key={item.id}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukDetail')}>
                  <Thumbnail style={{ height: 250, width: null }} square source={{ uri: item.img }} />
                    <Title style={styles.black}>{item.title}</Title>
                    <Text note style={styles.black}>{item.text}<Icon name="md-pin" /></Text>
                  </TouchableOpacity>
                </Card>                
              }
              keyExtractor={item => item.id.toString()}
            />
          </Content>

          <Footer >
            <FooterTab style={styles.white}>
              <Button vertical>
                <Icon style={styles.orange} name="home" />
                <Text>Home</Text>
              </Button>
              <Button vertical onPress={() => this.props.navigation.navigate('KategoriView')}>
                <Icon style={styles.black} name="apps" />
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

const mapStateToProps = (state) => {
  return {
    produk: state.produkReducer
  }
}

export default connect(mapStateToProps)(ProdukView);

const styles = StyleSheet.create({
  judul: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  },
  black: {
    color: 'black',
    textAlign: 'center'
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
