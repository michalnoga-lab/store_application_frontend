// import React, {Component} from "react";
// import Table from "react-bootstrap/Table";
//
// class AddProductToCart extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             product: '',
//             quantity: '',
//             isQuantityValid: true,
//             quantityErrorMessage: ''
//         }
//     }
//
//     handleChange = event => {
//         let target = event.target;
//         let value = target.value;
//         let name = target.name;
//
//         //todo
//         console.log('target')
//         console.log(target)
//
//
//         console.log('name')
//         console.log(name)
//
//         const regex = /^[0-9]{0,5}$/g;
//         const zeroRegex = /^0+$/g;
//
//         if (zeroRegex.test(value)) {
//             this.setState({isQuantityValid: false, quantityErrorMessage: 'Wartość musi być większa od zera'})
//         } else if (regex.test(value)) {
//             this.setState({isQuantityValid: true, quantityErrorMessage: ''})
//         } else if (value.length > 5) {
//             this.setState({isQuantityValid: false, quantityErrorMessage: 'Przekroczono maksymalną ilość znaków'})
//         } else {
//             this.setState({isQuantityValid: false, quantityErrorMessage: 'Dozwolone są tylko cyfry'})
//         }
//
//         //this.setState({quantity: value});
//         this.setState({[name]: value}); //todo remove
//     }
//
//     clearFields = () => {
//         this.setState({isQuantityValid: true, quantityErrorMessage: '', product: '', quantity: ''})
//     }
//
//     // todo - kumulowanie produktów jeżeli już taki jest w koszyku to tylko podbijamy ilość  ???
//     handleSubmit = event => {
//
//         console.log(`SUBMIT ${this.state.isQuantityValid}`); //todo
//
//         let cart = JSON.parse(localStorage.getItem('cart'));
//
//         console.log(`local storage: ${localStorage.getItem('cart')}`);
//         console.log(`cart : ${cart}`);
//         console.log(this.state.product);
//
//         cart.push(this.state.product) //todo set quantity
//
//         console.log('cart')
//         console.log(cart)
//
//         localStorage.setItem('cart', JSON.stringify(cart));
//         console.log('storage')
//         console.log(localStorage.getItem('cart'));
//
//         this.clearFields();
//         event.preventDefault();
//         // todo => przekierowanie do wszyskich produktów i może wyświetlenie znikającego pop-up (produkt dodany)
//     }
//
//     // static getDerivedStateFromProps(props, state) {
//     //     const allProducts = JSON.parse(localStorage.getItem('allProducts'));
//     //     const productToCart = {};
//     //
//     //     for (let product of allProducts) {
//     //         if (product.id == localStorage.getItem('productId')) {
//     //             Object.assign(productToCart, product);
//     //         }
//     //     }
//     //     return {
//     //         product: productToCart
//     //     }
//     // }
//
//     render() {
//         return (<div className='table-page'>
//             <Table bordered hover>
//                 <thead>
//                 <tr>
//                     <td>Nazwa</td>
//                     <td>Cena</td>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr>
//                     <td>{this.state.product.name}</td>
//                     <td>{this.state.product.nettPrice} PLN</td>
//                 </tr>
//                 </tbody>
//             </Table>
//
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <input type='text' className='btn-block' placeholder='PODAJ ILOŚĆ' value={this.state.quantity}
//                                onChange={this.handleChange} name='quantity'/>
//                         <div className='alert alert-danger' hidden={this.state.isQuantityValid}>
//                             {this.state.quantityErrorMessage}
//                         </div>
//                         <div>
//                             <button type='submit' className='btn btn-block btn-outline-dark'>DO KOSZYKA</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>)
//     }
// }
//
// export {AddProductToCart}