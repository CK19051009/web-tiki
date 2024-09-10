import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataFirebase } from '../../firebaseConfig';
import { Header } from '../../components/header/Header';



export const ProductDetailsPages = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const productRef = ref(dataFirebase, "products/" + id);
        
    
        const unsubscribe = onValue(productRef, (snapshot) => {
            const value = snapshot.val();
            if (value) {
                setProduct({
                    image: value.image,
                    title: value.title,
                    sold: value.sold,
                    price: value.price,
                    discount: value.discount
                });
            }
        });


        return () => unsubscribe();
    }, [id]);
    return (

        <>
            <Header />
            <h1> day la san pham {id}</h1>
            
        </>
    )
}