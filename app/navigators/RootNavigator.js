import { StackNavigator } from 'react-navigation';

// import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'
import { ProdukList, ProdukView, ProdukDetail, ProdukFilter } from '../produk/screens/'
import { KategoriList, KategoriView, KategoriDetail, KategoriFilter } from '../components/screens/'

const RootNavigator = StackNavigator({
  ProdukList: {
    screen: ProdukList,
    navigationOptions: {
      header : null
    }
  },
  ProdukView: {
    screen: ProdukView,
    navigationOptions: {
      header : null
    }
  },
  ProdukDetail: {
    screen: ProdukDetail,
    navigationOptions: {
      header : null
    }
  },
  ProdukFilter: {
    screen: ProdukFilter,
    navigationOptions: {
      header : null
    }
  },
  KategoriList: {
    screen: KategoriList,
    navigationOptions: {
      header : null
    }
  },
  KategoriView: {
    screen: KategoriView,
    navigationOptions: {
      header : null
    }
  },
  KategoriFilter: {
    screen: KategoriFilter,
    navigationOptions: {
      header : null
    }
  }
})

export default RootNavigator
