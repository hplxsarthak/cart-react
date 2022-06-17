import React from "react";

const CartItem = (props) => {
    console.log("this.props", props);
    const {price, title, qty} = props.product;
    const { 
        product, 
        onDecreaseQuantity, 
        onIncreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt={title} src={product.img} />
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
                        onClick={() => onIncreaseQuantity(product)} 
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1655289322~hmac=ba7ddc72e3c568ad41595e6963d766f7" 
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;