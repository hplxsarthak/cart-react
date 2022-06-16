import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id: 2,
                },
                {
                    price: 99999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
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

    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product= {product} 
                            key={product.id}
                            onIncreaseQuantity= {this.handleIncreaseQuantity}
                            onDecreaseQuantity= {this.handleDecreaseQuantity}
                            onDeleteProduct= {this.handleDeleteProduct}
                        />
                    );
                })}
            </div>
        );
    }
}


export default Cart;