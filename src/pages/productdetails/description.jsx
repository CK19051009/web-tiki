import { FaCheckCircle } from "react-icons/fa";
export const Description = (props) => {

    const {desc} = props; 
    return (

        <>
            <div className="mb-[6px] flex justify-start items-start">
                <FaCheckCircle className="mr-[16px] text-[blue]"/>
                <div className="font-[400] text-[14px] text-[#27272a]">{desc}</div>

            </div>

        </>
    )
}