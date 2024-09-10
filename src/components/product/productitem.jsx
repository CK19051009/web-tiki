
import imageStar from '../../assets/images/image-star.svg'
import { useEffect, useState } from 'react';
import { dataFirebase } from '../../firebaseConfig';
import { onValue, ref } from 'firebase/database';
import { Link, useParams } from 'react-router-dom';
import fetchApi from '../../assets/js/script';



export const ProductItem = () => {
    const [products, setProducts] = useState([]); // Khởi tạo state để lưu sản phẩm
    // const [loading, setLoading] = useState(true); 
    const {page} = useParams()
    
    // useEffect(() => {
    //     const productsRef = ref(dataFirebase, 'products');
    //     const unsubscribe = onValue(productsRef, (snapshot) => {
    //         const data = [];
    //         snapshot.forEach((childSnapshot) => {
    //             data.push(childSnapshot.val()); // Lưu sản phẩm vào mảng
    //         });
    //         setProducts(data);
    //         setLoading(false); 
    //     });
    //     return () => unsubscribe(); 
    // }, [products]); 
    // if (loading) {
    //     return <div>Loading...</div>; // Hiển thị khi đang tải dữ liệu
    // }
    // const itemsPerPage = 10;
    // const currentPage = parseInt(page, 10) || 1;
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentProducts = products.slice(startIndex, endIndex); 
    useEffect(() =>{

       const fetchData = async () => {
            const data = await fetchApi('https://h5ltj4-8080.csb.app/books')
            setProducts(data)

       };
       fetchData()
      

    } ,[products])
    const itemsDefault = 10;
    const currentPage = parseInt(page, 10) || 1
    const startIndex = (currentPage - 1)* itemsDefault;
    const endIndex = startIndex + itemsDefault;
    const currentProducts = products.slice(startIndex , endIndex);
    console.log(currentProducts)
    
    
    

    return (
        <>
            {
                currentProducts.map((item, index) => (



                    <div className="h-[388px] w-[200px] bg-[#ffffff] rounded-[4px]">
                        

                        <Link to={`/product/${startIndex+index + 1}`}>
                        
                        
                            <div className="w-[200px] h-[200px]">
                                <img src={item.images[0].base_url} alt="" className='w-full h-full object-cover rounded-[4px]' />
                            </div>
                        
                        </Link>
                        <div className="px-[8px]">
                            <div className="mt-[28px]">
                                <div className="">
                                    <div className="h-[72px]">
                                        <div className="text-dark font-[400] text-[12px] line-clamp-3 ">{item.name}</div>
                                        <div className="flex justify-start items-center">
                                            <img className='' src={imageStar} alt="" />
                                            <div className='ml-[6px] text-[#EBEBF0] mr-[4px] '>|</div>
                                            {item.quantity_sold?.text 
                                                ? 
                                                (<div className='font-[400] text-[10px] text-[#808089]' >{item.quantity_sold?.text }</div>) 
                                                : 
                                                ("")
                                            }
                                            
                                        </div>
                                    </div>
                                    <div className='flex mt-[4px] mb-[25px]'>

                                        <div className='font-[500] text-[16px] text-[#27272a] mr-[7px]'>{item.list_price.toLocaleString()}<sup className='font-[500px] text-[12px]'>đ</sup></div>

                                        {/* {item.discount ? (
                                            <div className="text-dark bg-[F5f5fa] font-[500] text-[12px] bg-[red] text-center rounded-[6px]">
                                                {item.discount}%
                                            </div>
                                        ) : (
                                            ""
                                        )
                                        } */}
                                    </div>
                                    <div className='h-[35px] text-center font-[400] text-[12px] text-[#808089] py-[8px] border-t-[1px] border-solid border-[#ebebf0]'>
                                        <div>Giao siêu tốc 2h </div>
                                    </div>

                                </div>

                            </div>


                        </div>



                    </div>
                ))



            }
        </>
    );
}