import logoImage from '../../assets/images/logi-tiki.svg';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { CiFaceSmile,CiShoppingCart } from "react-icons/ci";


export const Header = () => {


    return (
        <>
            <div className="flex bg-[#FFFFFF] justify-around items-center">
                <Link className='' to="/"><img  src= {logoImage} alt=''/></Link>

                <form className='flex items-center ml-[16px] w-[910px] h-[40px] border-[1px] border-solid border-[#DDDDE3] rounded-[10px] '>
                    <button className='ml-[20px] mr-[5px]'><IoIosSearch className='text-[20px] text-[#808089]' /></button>
                    <input placeholder='Freeship đến 30K' type='string' name='text'  className='w-[778px] h-[21px] border-r-[1px] border-r-solid  outline-none ' />
                    <button className='text-center text-[#0a68ff] text-[14px] font-[400] ml-[16px]'>Tìm kiếm </button>

                </form>

                <div className='flex items-center'>
                    <button><IoHomeOutline className='text-[24px] text-[#808089]' /></button>
                    <Link to='/' className='text-[14px] font-[400] text-[#808089] ml-[4px] '>Trang chủ</Link>
                </div>

                <div className='flex items-center'>
                    <button><CiFaceSmile className='text-[24px] text-[#808089]' /></button>
                    <Link to='/' className='text-[14px] font-[400] text-[#808089] ml-[4px] '>Tài khoản </Link>
                </div>
                <span className='text-[#808089] ml-[-20px]'>|</span>

                <CiShoppingCart className='text-[40px] text-[#0a68ff] ml-[-40px]' />



                
            </div>
        </>
    );
}