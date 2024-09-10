import { Title } from "../../components/title/title"
import { Description } from "./description"
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

export const Right = (props) => {
    const {image } = props;
    return (
        <>
            <div className="w-[400px] h-[695px] p-[16px] bg-[#ffffff] rounded-[4px] ">

                <div className="w-[368px] h-[368px] mb-[8px]">
                    <img src={image} className="size-full rounded-[4px]" alt="" />
                </div>
                <div className="flex">
                    <img src="" alt="" />
                    <div> anh de mo do thieu data</div>
                </div>
                <div className="mb-[10px]">
                    <Title title = "Đặc điểm nổi bật" />
                </div>
                <div className="">
                    <Description desc ="Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ."/>
                    <Description desc ="Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ."/>
                    <Description desc ="Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ."/>

                </div>
                <div className="mt-[16px] border-t-[1px] border-solid border-[#Ebebf0] flex justify-between items-center py-[13px]">
                    <div className="flex">
                        
                        <FaRegFaceSmileWink className="mr-[8px] text-[blue]"/>
                        <div className="font-[400] text-[#808089] text-[14px] ">Xem thêm <b className="text-[#27272a]">Tóm tắt nội dung sách</b></div>
                    </div>
                    <button className="size-[24px] text-[#808089] "><FaChevronRight  className=""/></button>
                </div>
            </div>
            

        </>
    )
}