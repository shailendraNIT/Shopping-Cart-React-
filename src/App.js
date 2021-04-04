import React from 'react';
import Cart from './cart';
import Nav from './navbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Watch',
          price: 999,
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          title: 'Phone',
          price: 9999,
          qty: 1,
          img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 2
        },
        {
          title: 'Laptop',
          price: 50000,
          qty: 1,
          img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
      ]

    }
  }

  increaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })

  }
  decreaseQuantity = (product) => {

    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty == 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })

  }

  deleteItem = (id) => {
    const { products } = this.state;

    const items = products.filter((product) => {
      return product.id != id;
    })

    this.setState({
      products: items
    })
  }



  getCartCount=()=>{
    const {products}=this.state;

    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }

  getCartTotal=()=>{
    const {products}=this.state;
    let total=0;

    products.forEach((product)=>{
      total+=product.qty*product.price;
    })

    return total;    
  }

  render() {
    return (
      <div className="App">
        <Nav count={this.getCartCount()} />
        <Cart products={this.state.products} decreaseQuantity={this.decreaseQuantity} increaseQuantity={this.increaseQuantity} deleteItem={this.deleteItem} />
        <div style={{padding:10,fontsize:20}}>Total:{this.getCartTotal()}</div>
      </div>
    );
  }

}

export default App;
