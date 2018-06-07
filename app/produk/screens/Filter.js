import React, {Component} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Container, Header, Content, Footer,
         FooterTab, Form, Item, Input,
         Icon, Left, Right, Body,
         Title, Label, Button, ListItem,
         List, CheckBox, Radio } from 'native-base'
import  { createStackNavigator }  from 'react-navigation';

export default class FilterScreen extends Component {

static navigationOptions = { header: null }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header style={styles.white}>
          <Left>
            <Button transparent onPress={ () => this.props.navigation.navigate('ProdukView')}>
              <Icon style={styles.black} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.judul}>Filter</Title>
          </Body>
          <Right/>
          </Header>
        <Content>
          <Form>
            <Item>
              <View style={styles.info}>
                <Label style={styles.ungu}>Masukan kata pencarian</Label>
                <Input placeholder='Pencarian'/>
              </View>
            </Item>
            <Item>
              <View style={styles.info}>
                <Label style={styles.ungu}>Cari Lokasi</Label>
                  <Input placeholder='Lokasi saat ini'/>
              </View>
              <Icon active name='md-locate' />
            </Item>
            <Item>
              <View style={styles.info}>
                <Label style={styles.ungu}>Urutkan</Label>
            <ListItem selected={true} >
              <Left>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
              <Text>Terdekat</Text>
              </Left>
            </ListItem>
            <ListItem selected={false}>
              <Left>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
              <Text>Terbaru</Text>
              </Left>
            </ListItem>
            <ListItem selected={false}>
              <Left>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
              <Text>Termurah</Text>
              </Left>
            </ListItem>
            <ListItem selected={false}>
            <Left>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
              <Text>Termahal</Text>
              </Left>
            </ListItem>
              </View>
            </Item>
            <Item>
              <Label style={[styles.info, styles.ungu]}>Tipe Tampilan</Label>
            </Item>
                <View style={styles.infoRight}>
                  <ListItem selected={true}>
                    <Radio
                      color={"#f0ad4e"}
                      selectedColor={"#5cb85c"}
                      selected={true}
                    />
                    <Text>Grid</Text>
                  </ListItem>
                <ListItem selected={false}>
                  <Radio
                    color={"#f0ad4e"}
                    selectedColor={"#5cb85c"}
                    selected={false}
                  />
                  <Text>List</Text>
                </ListItem>
                <ListItem selected={false}>
                  <Radio
                    color={"#f0ad4e"}
                    selectedColor={"#5cb85c"}
                    selected={false}
                  />
                  <Text>Galeri</Text>
                </ListItem>
              </View>
            <Item>
              <View style={styles.info}>
                <Label  style={styles.ungu}>Kategori</Label>
                  <Input placeholder='Pilih kategori'/>
              </View>
              <Icon active name='md-create' />
            </Item>
              <ListItem style={{ flex: 1, flexDirection: 'row' }}>
                  <Button full large transparent style={{flex:1}}>
                      <Text style={styles.black}>RESET</Text>
                  </Button>
                  <Button full large style={styles.orangeground}>
                      <Text style={styles.whiteButton}>CARI</Text>
                  </Button>
              </ListItem>
          </Form>
        </Content>
        <Footer style={styles.bawah}/>
      </Container>
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
  whiteButton: {
    color: 'white'
  },
  orange: {
    color: '#ffa500'
  },
  ungu: {
    color: '#cc00cc'
  },
  orangeground: {
    backgroundColor: '#ffa500',
    flex: 1
  },
  info: {
    flex: 1,
    flexDirection: 'column'
  },
  bawah: {
    backgroundColor: '#ebebe0'
  },
  infoRight: {
    flex: 1,
    flexDirection: 'row'
  }
  });
