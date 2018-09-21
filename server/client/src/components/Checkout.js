import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';


let items=2;

class Checkout extends Component {
    
    
    render() {
        const authenticated = true;//this.props.authenticated;
        console.log("authenticated : " + authenticated);
        const cart = { contents: { seats: [{ seat_number: 1, price: 10.75 }, { seat_number: 2, price: 10.75 }, { seat_number: 3, price: 10.75 },] } };
        
        const subtotal = this.getCartSubtotal();
        const tax = this.getCartTax();
        const total = this.getCartTotal(subtotal,tax);

        

        return (
            <div>
                <h1>Checkout"</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Item name</td>
                            <td>Item price</td>
                            <td>Item quantity</td>
                            <td>Line total</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Combo Palomitas</td>
                            <td>$80.00</td>
                            <td>{items}</td>
                            <td><button onClick={this.addItem}>add</button></td>
                        </tr>
                        <tr>
                            <td>Subtotal</td>
                            <td>Tax</td>
                            <td>Total</td>
                            <td><input type="button" value="Purchase"/>
                            {(items<1)?<Link to="/landing">landing</Link>:null}
                            </td>
                        </tr>
                        <tr>
                        <td>$ {subtotal}</td>
                            <td>{tax} %</td>
                            <td>$ {total}</td>
                            <td><a href="#">Keep Shopping</a></td>
                            
                        </tr>
                    </tbody>
                </table>
                {authenticated != true && <Redirect to="/login" ></Redirect>}
            </div>
        );
    }

    addItem(){
        items++;
        console.log(items)
    }

    getCartSubtotal(){
        return items*80;
    }

    getCartTax(){
        return 16;
    }

    getCartTotal(subtotal,tax){
        return subtotal*(16/100+1);
    }

    purchase(){
        if(items<1){

        }
    }
}

export default Checkout;