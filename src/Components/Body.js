import React from 'react';
import Product from "./Product";
import dress1 from "../Assets/Images/1.jpeg";
import dress2 from "../Assets/Images/2.jpeg"

class Body extends React.Component{
    state = {
        product : [
            {
                id : 1,
                name : "پیراهن مردانه زی مدل 153113872",
                brand : "Zi",
                hasDiscount : true,
                discountValue : 235000,
                hasOff : true,
                offValue : 51,
                image  : dress1,
                price : 90000
            },
            {
                id : 2,
                name : "پیراهن مردانه ال سی وایکیکی مدل 9SJ537G8-CRP",
                brand : "LC Waikiki",
                hasDiscount : true,
                discountValue : 206000,
                hasOff : true,
                offValue : 30,
                image  : dress2,
                price : 144000,
            },
            // {
            //     id : 3,
            //     name : "پیراهن جین مردانه - مانگو",
            //     brand : "Mango",
            //     hasDiscount : false,
            //     discountValue : 0,
            //     hasOff : false,
            //     offValue : 0,
            //     image  : "/images/products/105705191.jpg",
            //     price : 890000
            // },
            // {
            //     id : 4,
            //     name : "پیراهن مردانه فرد کد p.baz.244 ",
            //     brand : "FRED",
            //     hasDiscount : true,
            //     discountValue : 59000,
            //     hasOff : true,
            //     offValue : 51,
            //     image  : "/images/products/113013122.jpg",
            //     price : 29000
            // },

        ],
        basket : {
            basket_items : [{
                id : 4,
                name : "پیراهن مردانه فرد کد p.baz.244 ",
                brand : "FRED",
                hasDiscount : true,
                discountValue : 59000,
                hasOff : true,
                offValue : 51,
                image  : "/images/products/113013122.jpg",
                price : 29000,
                count : 1,
            }],
        }
    }

    render(){
        return(
            <div>
                <Product product = {this.state.product}/>
            </div>
        )
    }
}


export default Body;