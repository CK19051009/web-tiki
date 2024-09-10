import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataFirebase } from '../../firebaseConfig';
import { Header } from '../../components/header/Header';
import { Right } from './right';
import { Footer } from '../../components/footer/footer';
import { Middle } from './middel';
import { Left } from './left';
import { Description2 } from './description2';



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
    console.log(product)
    return (

        <>
            <div className='bg-[#f5e6e6] h-full '>


                <Header />
                <div className='mt-[40px] container mx-auto mb-[60px] flex'>
                    <Right image ={product.image} />
                    <div className='mx-[26px]'>
                        <Middle />
                        <Description2 image={product.image}/>
                    </div>
                    <Left />

                </div>
                <Footer />
            </div>
            
        </>
    )
}