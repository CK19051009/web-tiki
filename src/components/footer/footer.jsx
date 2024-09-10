import { FooterDesc } from "./footerdesc";
import { FooterTitle } from "./footertitle";
import footer1 from "../../assets/images/footer-1.svg"
import { FaYoutube ,FaFacebook  } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

export const Footer = () =>{


    return (
        <>
            <div className="bg-[#ffffff] py-[16px]">
                <div className="container mx-auto ">
                    <div className="flex  justify-around">


                        <div className="">
                            <FooterTitle title = "Hỗ trợ khách hàng" />
                            <div className="mt-[13px]">
                                <div className="font-[400] text-[12px] text-[#808089]">
                                    Hotline: <b className="text-dark">1900-6035</b>
                                    <FooterDesc  desc ="(1000 đ/phút, 8-21h kể cả T7 , CN" />
                                    
                                </div>
                                <FooterDesc desc = "Các câu hỏi thường gặp" />
                                <FooterDesc desc = "Gửi yêu cầu hỗ trợ" />
                                <FooterDesc desc = "Hướng dẫn đặt hàng" />
                                <FooterDesc desc = "Phương thức vận chuyển" />
                                <FooterDesc desc = "Chính sách đổi trả" />
                                <FooterDesc desc = "Hướng dẫn trả góp" />
                                <FooterDesc desc = "Chính sách hàng nhập khẩu" />
                                <FooterDesc desc = "Hỗ trợ khách hàng: hotro@tiki.vn" />
                                <FooterDesc desc = "Báo lỗi bảo mật: security@tiki.vn" />


                            </div>
                        </div>
                        <div className="">
                            <FooterTitle title = "Về Tiki" />
                            <div className="mt-[13px]">
                                <FooterDesc desc = "Giới thiệu Tiki" />
                                <FooterDesc desc = "Tiki Blog" />
                                <FooterDesc desc = "Tuyển dụng" />
                                <FooterDesc desc = "Chính sách bảo mật thanh toán" />
                                <FooterDesc desc = "Chính sách bảo mật thông tin cá nhân" />
                                <FooterDesc desc = "Chính sách giải quyết khiếu nại" />
                                <FooterDesc desc = "Điều khoản sử dụng" />
                                <FooterDesc desc = "Giới thiệu Tiki Xu" />
                                <FooterDesc desc = "Gói hội viên VIP" />
                                <FooterDesc desc = "Tiếp thị liên kết cùng Tiki" />
                                <FooterDesc desc = "Bán hàng doanh nghiệp" />
                                <FooterDesc desc = "Điều kiện vận chuyển" />


                            </div>
                        </div>
                        <div className="">
                            <FooterTitle title = "Hợp tác và liên kết" />
                            <div className="mt-[13px] mb-[24px]">
                                <FooterDesc desc = "Quy chế hoạt động Sàn GDTMĐT" />
                                <FooterDesc desc = "Bán hàng cùng Tiki" />


                            </div>
                            <FooterTitle title="Chứng nhận bởi" />
                            <div className="mt-[12px] relative  ">
                                <img src ={footer1} alt="" className="absolute right-[65px]"  />
                            </div>

                        </div>
                        <div className="">
                            <FooterTitle title = "Phương thức thanh toán" />
                            <div className="mt-[24px]">
                                <FooterTitle title ="Dịch vụ giao hàng" />
                            </div>
                        </div>
                        <div className="">
                            <FooterTitle title = "Kết nối với chúng tôi" />
                            <div className="mt-[12px] flex ">
                                <FaFacebook className="size-[32px] mr-[8px] text-[blue]" />
                                <FaYoutube className="size-[32px] mr-[8px] text-[red]" />
                                <SiZalo className="size-[32px] bg-[blue] rounded-[15px] text-[white]" />

                            

                            </div>
                            <div className="mt-[31px]" >
                                <FooterTitle title ="Tải ứng dụng trên điện thoại" />
                            </div>
                        </div>
                    </div>


                    <div className="py-[16px] border-y-[1px] border-y-solid ">
                        <FooterTitle  title = "Công ty TNHH TIKI"/>
                        <div className="mt-[12px]">
                            <FooterDesc desc = "Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh" />
                            <FooterDesc  desc ="Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010. "/>
                            <div className="font-[400] text-[12px] text-[#808089] ">
                                Hotline: <b className="text-[blue]">1900-6035</b>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}