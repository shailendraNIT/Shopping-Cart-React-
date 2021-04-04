import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor()
    {
        super();
        this.state={
            products:[
                {
                    title:'Watch',
                    price:999,
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    title:'Phone',
                    price:9999,
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    title:'Laptop',
                    price:50000,
                    qty:1,
                    img:'',
                    id:3
                }
            ]
            
        }
    }

    increaseQuantity=(product)=>{
        const {products}=this.state;

        const index=products.indexOf(product);

        products[index].qty+=1;

        this.setState({
            products
        })

    }
    decreaseQuantity=(product)=>{

        const {products}=this.state;

        const index=products.indexOf(product);

        if(products[index].qty==0)
        {
            return;
        }

        products[index].qty-=1;

        this.setState({
            products
        })

    }

    deleteItem=(id)=>{
        const {products}=this.state;

        const items=products.filter((product)=>{
            return product.id!=id;
        })

        this.setState({
            products:items
        })
    }
    render(){
        const products=this.state.products;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem
                        product={product} 
                        key={product.id}
                        increaseQuantity={this.increaseQuantity}
                        decreaseQuantity={this.decreaseQuantity}
                        deleteItem={this.deleteItem}
                    />
                })}
            </div>

        );
    }
}

export default Cart;