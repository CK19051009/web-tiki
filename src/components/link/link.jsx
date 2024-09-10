import { Link, useParams } from "react-router-dom";

export const LinkPage  = () => {
    
    const {page} = useParams();
   
    

    return (

        <>
        
            <>
            
                <div className="mt-[162px] mb-[53px] text-center" >

                    <Link to =  {`/page/1`} className={"px-[16px] py-[8px] font-[500] text-[16px] rounded-[4px] " + (page === '1'  ? 'bg-[#0B74E5] text-[#ffffff]' : '')}>1</Link>
                    <Link to= {`/page/2`} className={"px-[16px] py-[8px] font-[500] text-[16px] rounded-[4px] " + (page === '2' ? 'bg-[#0B74E5] text-[#ffffff]' : '')}>2</Link>
                    <Link to= {`/page/3`} className={"px-[16px] py-[8px] font-[500] text-[16px] rounded-[4px] " + (page === '3' ? 'bg-[#0B74E5] text-[#ffffff]' : '')}>3</Link>
                    <Link to= {`/page/4`}className={"px-[16px] py-[8px] font-[500] text-[16px] rounded-[4px] " + (page === '4' ? 'bg-[#0B74E5] text-[#ffffff]' : '')}>4</Link>
                    <Link to= {`/page/5`} className={"px-[16px] py-[8px] font-[500] text-[16px] rounded-[4px] " + (page === '5' ? 'bg-[#0B74E5] text-[#ffffff]' : '')}>5</Link>
                </div>

            </>
        </>
    );
}