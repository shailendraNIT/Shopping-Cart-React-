import React from 'react';
import Cart from './cart';
import Nav from './navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products:[],
      loading :true
    }
    this.db=firebase.firestore();
  }

  componentDidMount(){
    this.db
    .collection('products')
    .onSnapshot((snapshot)=>{
      
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })

      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })

      this.setState({
        products,
        loading:false
      })
    })
  }

  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      price:15999,
      title:'washing machine',
      qty:1,
      img:'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    })
    .then((docref)=>{
      console.log('Product has been added ',docref);
    })
    .catch((e)=>{
      console.log('Error :',e);
    })

  }

  increaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    
    const docref=this.db.collection('products').doc(products[index].id);
    
    docref
      .update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log('Quantity updated');
      })
      .catch((e)=>{
        console.log('Error : ',e);
      })

  }
  decreaseQuantity = (product) => {

    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    const docref=this.db.collection('products').doc(products[index].id);
    
    docref
      .update({
        qty:products[index].qty-1
      })
      .then(()=>{
        console.log('Quantity updated');
      })
      .catch((e)=>{
        console.log('Error : ',e);
      })

  }

  deleteItem = (id) => {
    const { products } = this.state;

    const docref=this.db.collection('products').doc(id);
    
    docref
      .delete()
      .then(()=>{
        console.log('Product Deleted');
      })
      .catch((e)=>{
        console.log('Error : ',e);
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
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Nav count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding:10,fontsize:20,margin:10}}>Add a Product</button>
        <Cart products={products} decreaseQuantity={this.decreaseQuantity} increaseQuantity={this.increaseQuantity} deleteItem={this.deleteItem} />
        {loading && <h3>Loading products...</h3>}
        <div style={{padding:10,fontsize:20}}>Total:{this.getCartTotal()}</div>
        
      </div>
    );
  }

}

export default App;
