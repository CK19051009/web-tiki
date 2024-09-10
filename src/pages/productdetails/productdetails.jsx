
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        // const productRef = ref(dataFirebase, "products/" + id);
        
    
        // const unsubscribe = onValue(productRef, (snapshot) => {
        //     const value = snapshot.val();
        //     if (value) {
        //         setProduct({
        //             image: value.image,
        //             title: value.title,
        //             sold: value.sold,
        //             price: value.price,
        //             discount: value.discount
        //         });
        //     }
        // });

        
        // return () => unsubscribe();
    //     const fetchData = async () => {
    //         const data = await fetchApi(`https://h5ltj4-8080.csb.app/books/${id}`)
    //         setProduct(data)

    //    };
    //    fetchData()
        fetch(`https://h5ltj4-8080.csb.app/books/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id]);
    console.log(product)
    return (

        <>
            <div className='bg-[#f5e6e6] h-full '>


                <Header />
                <div className='mt-[40px] container mx-auto mb-[60px] flex'>
                    <Right image ="" />
                    <div className='mx-[26px]'>
                        <Middle />
                        <Description2 image="" />
                    </div>
                    <Left />

                </div>
                <Footer />
            </div>
            
        </>
    )
}