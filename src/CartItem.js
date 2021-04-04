import React from 'react';

const CartItem = (props) => {
    const { product, increaseQuantity, decreaseQuantity, deleteItem } = props;
    const { price, title, qty, id,img } = product;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img}/>
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: 'grey' }}>Rs {price}</div>
                <div style={{ color: 'grey' }}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/128/148/148764.png" onClick={() => increaseQuantity(product)} ></img>

                    <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/128/929/929430.png" onClick={() => decreaseQuantity(product)}></img>

                    <img alt="delete" className="action-icons" src="https://t3.ftcdn.net/jpg/02/76/19/96/240_F_276199650_Hs5K3QnXm9ZMBLd3DT44YcdWUIf8GHxO.jpg"
                        onClick={() => deleteItem(id)}></img>


                </div>

            </div>

        </div>
    );
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}


export default CartItem;