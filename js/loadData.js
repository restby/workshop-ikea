import { getData } from './getData.js';
// временные данные
const wishList = ['idd007', 'idd099', 'idd088', 'idd057'];

const cartList = [
  {
    id: 'idd015',
    coint: 3
  },
  {
    id: 'idd045',
    coint: 1
  },
  {
    id: 'idd095',
    coint: 2
  }
];

export const loadData = () => {
  if (location.search) {
    // декодирование строки на русс язык
    const search = decodeURI(location.search);
    // разбиение строки составляющие каталог подкаталог(меню подменю)
    const prop = search.split('=')[0].substring(1);
    const value = search.split('=')[1];

    if (prop === 'search') {
      getData.search(value, (data) => {
        console.log(data);
      });
    } else if (prop === 'wishlist') {
      getData.wishList(wishList, (data) => {
        console.dir({ wishlist: data })
      });
    } else if (prop === 'cat' || prop === 'subcat') {
      getData.category(prop, value, (data) => {
        console.log(data);
      });
    }
  }

  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => {
      console.log(data);
    });
  }

  if (location.pathname.includes('cart')) {
    getData.cart(cartList, (data) => {
      console.log(data);
    });
  }

  getData.catalog((data) => {
    console.log(data);
  });
  getData.subCatalog('Кухня', (data) => {
    console.log(data);
  });
};