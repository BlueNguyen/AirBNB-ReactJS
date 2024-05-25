import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../../layouts/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import map from "../../../assets/img/map.png"
import map1 from "../../../assets/img/map1.png"
import Footer from '../../../layouts/Footer/Footer';
import { getRoomByViTri } from '../../../hooks/useGetRoomByViTri';
import { roomServ } from '../../../api/api';
import LoginModal from '../../../layouts/Modal/LoginModal';
import RegisterModal from '../../../layouts/Modal/RegisterModal';
const ViTriPage = () => {
    const { roomByViTri } = useSelector(state => state.useGetRoomByViTri)
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRoomByViTri(id));
    }, [dispatch, id]);

    return (
        <div>
            <LoginModal />
            <RegisterModal />
            <Header />
            <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-10'>
                <div className="flex flex-col md:flex-row">
                    <div className='w-full md:w-1/2 md:pr-4'>
                        <p className='mb-2 md:mb-4'>Hơn 300 chỗ ở - 16 thg 4 - 14 thg 5</p>
                        <p className='text-3xl font-bold mb-4'>Chỗ ở tại khu vực bản đồ đã chọn</p>
                        <div className='flex flex-wrap items-center mb-4 md:mb-8'>
                            <div className='text-sm font-light px-4 py-1 border-2 rounded-xl cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0 md:mr-2'>
                                Loại nơi ở
                            </div>
                            <div className='text-sm font-light px-4 py-1 border-2 rounded-xl cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0 md:mr-2'>
                                Giá
                            </div>
                            <div className='text-sm font-light px-4 py-1 border-2 rounded-xl cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0 md:mr-2'>
                                Đặt ngay
                            </div>
                            <div className='text-sm font-light px-4 py-1 border-2 rounded-xl cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0 md:mr-2'>
                                Phòng và phòng ngủ
                            </div>
                            <div className='text-sm font-light px-4 py-1 border-2 rounded-xl cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0'>
                                Bộ lọc khác
                            </div>
                        </div>
                        <div className="w-full border-t border-gray-300 mb-4 md:mb-8"></div>
                        {roomByViTri.map((room, index) => (
                            <div key={index}>
                                <div onClick={() => { navigate(`/detail/${room.id}`) }} className='flex cursor-pointer mb-4'>
                                    <div className='w-2/5 md:w-1/3'>
                                        <img className='w-full object-cover rounded-sm' src={room.hinhAnh} alt="Hình phòng" />
                                    </div>
                                    <div className='w-3/5 md:w-2/3 pl-2'>
                                        {room.tenPhong}
                                    </div>
                                </div>
                                <div className="w-full border-t border-gray-300 mb-4"></div>
                            </div>
                        ))}
                    </div>
                    <div className='w-full md:w-1/2'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.667113845656!2d106.69362057480464!3d10.760118089387658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f137b9784b5%3A0xa9901de8d5dccee0!2zxJAuIELhur9uIFbDom4gxJDhu5NuLCBRdeG6rW4gNCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1716612979580!5m2!1svi!2s" style={{ border: 0 }}
                            className='w-full h-full'
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-neutral-100'>
                <Footer />
            </div>
        </div >
    )
}

export default ViTriPage