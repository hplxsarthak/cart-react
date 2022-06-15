import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'phone',
            qty: 1,
            img: ''
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        // setState() Form #1 
        // which do batching means it calls render function once 
        // for all the multiple setState calls and will make multiple to single call
        // which is the last call
        // this.setState({
        //     qty: this.state.qty + 1
        // })

        // setState() Form #2 - If prevState is required
        // which do shallowing means it calls render function once  only but
        // for all the multiple setState calls it will up to date the prevState and 
        // will do further actions
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, ()=> {
            // we use this callback as setState is asynchronous so to know when is our state is updated we use this option
            console.log("this.state:", this.state);
        })
    }

    decreaseQuantity = () => {
        const {qty} = this.state
        if (qty === 0) {
            return;
        }

        // setState() Form #1
        this.setState({
            qty: this.state.qty - 1
        })
    }

    render(){
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="" />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                            onClick={this.increaseQuantity} 
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1655289322~hmac=ba7ddc72e3c568ad41595e6963d766f7" 
                        />

                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;