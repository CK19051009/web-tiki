import { Header } from "../../components/header/Header";
import { FaChevronRight } from "react-icons/fa";
import { Sider } from "../../components/sider/Sider";
import { ProductLit } from "../../components/product/productlist";
import { Footer } from "../../components/footer/footer";
import { LinkPage } from "../../components/link/link";

export const Home = () => {


   
    return (

        <>
            <div className="bg-[#f5e6e6] h-full ">



                <Header />
                <div>
                    <div className="container mx-auto">
                        <div className="flex justify-start items-center mb-[10px]">
                            <div className="text-[#808089] font-[300] text-[14px] mr-[5px]">Trang chủ</div>
                            <FaChevronRight className="w-[6px] h-[11px] text-[#808089] mr-[8px]" />
                            <div className="font-[300] text-[14px] text-[#38383d]">Nhà Sách Tiki</div>
                        </div>
                        <div className="flex" >

                            <Sider />
                            <ProductLit  />
                        </div>




                    </div>

                    

                </div>
                <LinkPage />
                <Footer />
            


            </div>
        </>
    );


}