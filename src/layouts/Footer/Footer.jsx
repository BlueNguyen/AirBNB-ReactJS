import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-wrap justify-center p-5 mt-20'>
            <div className='flex-1 sm:w-full md:w-1/2 lg:w-1/4'>
                <p className='font-semibold my-2'>Giới thiệu</p>
                <p>
                    Phương thức hoạt động của AirBnb <br />
                    Trang tin tức <br />
                    Nhà đầu tư <br />
                    AirBnbPlus <br />
                    AirBnb Luxe <br />
                    HotelTonight <br />
                    AirBnb for Work <br />
                    Nhờ có Host, mọi điều đều có thể <br />
                    cơ hội nghề nghiệp <br />
                    Thư của nhà sáng lập <br />
                </p>
            </div>
            <div className='flex-1 sm:w-full md:w-1/2 lg:w-1/4'>
                <p className='font-semibold my-2'>Cộng đồng</p>
                <p>
                    Sự đa dạng và cảm giác quen thuộc <br />
                    Tiện nghi phù hợp cho người khuyết tật <br />
                    Đối tác liên kết AirBnb <br />
                    Chỗ ở cho tuyến đầu<br />
                    Lượt giới thiệu của khách <br />
                    AirBnb.org <br />
                </p>
            </div>
            <div className='flex-1 sm:w-full md:w-1/2 lg:w-1/4'>
                <p className='font-semibold my-2'>Đón tiếp khách</p>
                <p>
                    Cho thuê nhà <br />
                    Tổ chức trải nghiệm trực tuyến <br />
                    Tổ chức trải nghiệm <br />
                    Đón tiếp khách có trách nhiệm <br />
                    Trung tâm tài nguyên <br />
                    Trung tâm cộng đông <br />
                </p>
            </div>
            <div className='flex-1 sm:w-full md:w-1/2 lg:w-1/4'>
                <p className='font-semibold my-2'>Hổ trợ</p>
                <p>
                    Biện pháp ứng phó với dại dịch Covid-19 của chúng tôi <br />
                    Trung tâm trợ giúp <br />
                    Các tùy chọn hủy <br />
                    Hổ trợ khu dân cư <br />
                    Tin cây và an toàn <br />
                </p>
            </div>
        </div>
    )
}

export default Footer