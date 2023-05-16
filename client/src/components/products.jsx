import React from "react";
import { getProducts } from "../JS/actions/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductTable from "./productTable";
import Filter from "./Search";




function Products() {
const dispatch=useDispatch()
const products= useSelector((state)=>state.productReducer.products)
const inputS = useSelector((state)=>state.productReducer.productSearch)

useEffect(()=> {
    dispatch(getProducts())
},[])


    return(
        
        <div className="products">
            <Filter />
        {products
        .filter((prod)=> prod.Name.toLowerCase().includes(inputS.toLowerCase()))
        .map((prod)=> <ProductTable key={prod.ProductId} ProductId={prod.ProductId} Name={prod.Name} 
        Categorie={prod.Categorie} Image={prod.Image} Stock={prod.Stock} Price={prod.Price} Barcode={prod.Barcode} Id={prod._id}/>)}
        </div>
    )

}

export default Products;