import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import '../Assets/Styles/Product.css'

const Product = (props)=> {
    useEffect(()=>{},[])
    return(
        <div>
            <div className="wrapper-product" id="products">
                {props.product.map((item)=>(
                    
                        <div className="product" key={item.id}>
                        <img src={item.image} className="img-product"/>
                        <p className="brand">{item.brand}</p>
                        <div className="footer-des">
                            <p className="describ">{item.name}</p>
                            <p className="price">{item.price}تومان</p>
                        </div>
                        <div className="btn-group">
                            <input className="btn-product1" value="بعدا میخرم" type="button"/>
                            <input className="btn-product2" value="میخرم" type="button"/>
                        
                        </div>
                   </div>
                ))
                }
            </div></div>
        
    )
}

   
export default Product;