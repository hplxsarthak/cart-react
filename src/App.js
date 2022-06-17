import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: 'https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1',
                id: 1
            },
            {
                price: 99,
                title: 'Watch',
                qty: 10,
                img: 'https://m.media-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg',
                id: 2,
            },
            {
                price: 99999,
                title: 'Laptop',
                qty: 4,
                img: 'https://c.s-microsoft.com/en-us/CMSImages/1920_Panel01_PriorityFeature_Laptops.jpg?version=2e5e9c24-27f2-0032-2f8f-468ed0d561d8',
                id: 3
            }
        ]
      }
  }
  handleIncreaseQuantity = (product) => {
    console.log("hey inc the qty of:", product);

    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
        products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    console.log("hey dec the qty of:", product);

    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
        return;
    }

    products[index].qty -= 1;
    this.setState({
        products: products
    })
  }

  handleDeleteProduct = (id) => {
    console.log("Hey delete the product with id:", id);

    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    console.log("count", count);

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let total = 0;
    products.forEach((product) => {
      total += (product.qty * product.price);
    });

    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count= {this.getCartCount()} />
        <Cart 
          products= {products}
          onIncreaseQuantity= {this.handleIncreaseQuantity}
          onDecreaseQuantity= {this.handleDecreaseQuantity}
          onDeleteProduct= {this.handleDeleteProduct}
        />

        <div style={{padding: 10, fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
