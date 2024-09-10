import { Title } from "../../components/title/title"

export const Description2 = (props) => {
    const {image , description } = props;

    return (
        <>
            <div className="w-[584px] h-auto rounded-[4px] bg-[#ffffff] mt-[20px] p-[16px]">
                <Title  title = "Mô tả sản phẩm"/>
                <div className="size-[552px] mt-[17px]">
                    <img src={image} className="size-full object-cover rounded-[6px]" alt=""/>
                </div>

                {/* lấy dữ liệu */}
                {description}



            </div>
            
        
        </>
    )
}