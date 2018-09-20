import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        return(
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
                        <td>2</td>
                        <td>$80.00 * 2</td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td>Tax</td>
                        <td>Total</td>
                        <td><input type="button" value="Purchase"/></td>
                    </tr>
                    <tr>
                        <td>$160.00</td>
                        <td>16 %</td>
                        <td>$185.60</td>
                        <td><a href="#">Keep Shopping</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default Checkout;