import {useEffect, useState} from 'react'

function Products() {

    const [products, setProducts] = useState([]) //products = []


    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('pass in here') //get all products url link from the fakeapi
            const result = await response.json();
            console.log(result)
            setProducts(result);
          } catch (err) {
            console.log(err);
          }
        };
        fetchProducts();
      }, []);
 
      console.log(products, ';products here')
      // [1,2,3,4,] -- loop through it -> map

    return (
        
        <div>Hello</div>
        {map through your product}
    )
}

export default Products
