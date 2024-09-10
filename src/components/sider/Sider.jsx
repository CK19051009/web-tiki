import { Link } from "react-router-dom"
import { SiderTitle } from "./sidertitle"
import { IoChevronDown } from "react-icons/io5";




export const Sider = () => {

    const linkTitle = [
        {
            title : "English Books"
        },
        {
            title : "Sách tiếng Việt"
        },
        {
            title :"Văn phòng phẩm"
        },
        {
            title : "Quà lưu niệm"
        }

    ];
    const listsupplier = [
        {
            supplier :"Nhà sách Fahasa"
        },
        {
            supplier :"Bamboo Books"
        },
        {supplier :"Times Books"},
        {supplier :"Nhà Sách Trẻ Online"},
        {supplier :"VBooks"},
    ];
    return (
        <>
            <div className="w-[200px] h-[505px] bg-[#FFFFFF] px-[16px] py-[14px] rounded-[4px] mr-[8px]">
                <div className="">
                    <SiderTitle titleSider = "Danh Mục Sản Phẩm" />
                    <div className="">
                        {linkTitle.map((item , index) => (
                            <Link key ={index} className="text-dark font-[400] text-[12px] mb-[14px] block ">{item.title}</Link>
                        ))}
                    </div>

                </div>
                {/* border-top: 1px solid #F7F7F7 */}
                <div className="border-y-[1px] border-[#f7f7f7] border-solid py-[13px]">
                        <div className="">

                            <SiderTitle titleSider = "Nhà cung cấp" />
                        </div>
                        <div className="mt-[14px]" >

                            {listsupplier.map ((item , index) => (

                                <label key = {index} className="flex mb-[12px]"> 
                                    <input type="checkbox" /> 
                                    <div className="text-dark font-[400] text-[12px] ml-[12px] ">{item.supplier}</div>
                                    
                                </label>

                            ))}
                        </div>
                        


                    <div className="text-[#0B74E5] flex">
                        <div className="font-[500] text-[12px] mr-[5px] ">Xem thêm</div>
                        <button className="text-[12px]"><IoChevronDown /></button>
                    </div>

                </div>

                <div className="py-[14px]">
                            <SiderTitle titleSider ="Đánh giá" />


                </div>



            </div>
        
        </>
    )
}