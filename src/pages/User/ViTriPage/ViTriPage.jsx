import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../../layouts/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import map from "../../../assets/img/map.png"
import map1 from "../../../assets/img/map1.png"
import Footer from '../../../layouts/Footer/Footer';
import { getRoomByViTri } from '../../../hooks/useGetRoomByViTri';
import { roomServ } from '../../../api/api';
const ViTriPage = () => {
    const { roomByViTri } = useSelector(state => state.useGetRoomByViTri)
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRoomByViTri(id));
    }, [dispatch, id]);

    console.log(roomByViTri)
    return (
        <div>
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
                        <img className='w-full' src={map1} alt="Bản đồ" />
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