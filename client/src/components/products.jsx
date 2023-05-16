import React from "react";
import { getProducts } from "../JS/actions/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cards from "./cards";
import Filter from "./Search";




function Products() {
const dispatch=useDispatch()
const products= useSelector((state)=>state.productReducer.products)
const inputS = useSelector((state)=>state.productReducer.productSearch)

useEffect(()=> {
    dispatch(getProducts())
    
    
},[])


    return(
        
        <div className="cards">
            <Filter />
        {products
        .filter((prod)=> prod.Name.toLowerCase().includes(inputS.toLowerCase()))
        .map((prod)=> <Cards key={prod._id} Name={prod.Name} Image={prod.Image} Stock={prod.Stock} Price={prod.Price} Barcode={prod.Barcode} Id={prod._id}/>)}
        </div>
    )

}

export default Products;