import React, { useEffect } from 'react'
import Header from '../../../layouts/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRoomById } from '../../../hooks/useGetRoomById'
import Footer from '../../../layouts/Footer/Footer'
import placeholder from '../../../assets/img/placeholder.png'
import { PiTelevision } from "react-icons/pi";
import { TbToolsKitchen3 } from "react-icons/tb";
import { TbIroning, TbAirConditioning } from "react-icons/tb";
import { CiParking1 } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePool, MdDesk } from "react-icons/md";
import { getBinhLuanById } from '../../../hooks/useGetBinhLuanById'
import { Input } from 'antd';
import { getUserById } from '../../../hooks/useGetUserById'
import { userLocalStorage } from '../../../api/localService'
import ButtonCustome from '../../../components/user/ButtonCustome'
import { Pagination } from 'antd';

const DetailPage = () => {
    const { TextArea } = Input;


    const { roomById } = useSelector(state => state.useGetRoomById)
    const { arrBinhLuan } = useSelector(state => state.useGetBinhLuanById)
    const { user } = useSelector(state => state.useGetUserById)
    const userLocal = userLocalStorage.get("user")
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getRoomById(id)) }, [])
    useEffect(() => { dispatch(getBinhLuanById(id)) }, [])
    useEffect(() => { dispatch(getUserById(userLocal.user.id)) }, [])
    const totalPage = Math.ceil(arrBinhLuan.length / 5);

    return (
        <div>
            <Header />
            <>
                <div className='my-10 ax-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                    <div className='text-3xl font-bold'>{roomById.tenPhong}</div>
                    <div>
                        {roomById.moTa}
                    </div>
                    <img src={roomById.hinhAnh} alt="Hình phòng" />
                    <div className='flex'>
                        <div className="w-3/5 text-xl font-semibold py-2">
                            {roomById.khach} <span>khách -</span> {roomById.phongNgu} <span>phòng ngủ - </span>
                            {roomById.giuong} <span>giường -</span> {roomById.phongTam} <span>phòng tắm</span>
                            <div className="w-full border-t border-gray-300 mb-4 my-5"></div>
                            <p className='text-xl'>Tiện nghi</p>
                            <div className='flex items-center'>
                                <div className='flex-1'>
                                    {roomById.bep && (
                                        <div className="flex items-center py-2">
                                            <TbToolsKitchen3 className='mr-2' />
                                            <span className="text-sm">Bếp</span>
                                        </div>
                                    )}
                                    {roomById.tivi && (
                                        <div className="flex items-center py-2">
                                            <PiTelevision className='mr-2' />
                                            <span className="text-sm">Tv với truyền hình cáp tiêu chuẩn</span>
                                        </div>
                                    )}
                                    {roomById.dieuHoa && (
                                        <div className="flex items-center py-2">
                                            <TbAirConditioning className='mr-2' />
                                            <span className="text-sm">Điều hòa không khí</span>
                                        </div>
                                    )}
                                    {roomById.banLa && (
                                        <div className="flex items-center py-2">
                                            <MdDesk className='mr-2' />
                                            <span className="text-sm">Bàn này lạ lắm</span>
                                        </div>
                                    )}
                                </div>
                                <div className='flex-1'>
                                    {roomById.wifi && (
                                        <div className="flex items-center py-2">
                                            <FaWifi className='mr-2' />
                                            <span className="text-sm">Wifi tốc độ cao</span>
                                        </div>
                                    )}
                                    {roomById.banUi && (
                                        <div className="flex items-center py-2">
                                            <TbIroning className='mr-2' />
                                            <span className="text-sm">Bản ủi tiêu chuẩn</span>
                                        </div>
                                    )}
                                    {roomById.hoBoi && (
                                        <div className="flex items-center py-2">
                                            <MdOutlinePool className='mr-2' />
                                            <span className="text-sm">Hồ bơi</span>
                                        </div>
                                    )}
                                    {roomById.doXe && (
                                        <div className="flex items-center py-2">
                                            <CiParking1 className='mr-2' />
                                            <span className="text-sm">Bãi đỗ xe thu phí nằm ngoài công viên</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button className='p-3 mt-5 border-2 hover:bg-neutral-200 font-light text-sm'>Hiển thị tất cả tiện ích</button>
                            <div className="w-full border-t border-gray-300 mb-4 my-5"></div>
                            {/*Bình luận  */}
                            <div>
                                {arrBinhLuan.map((binhLuan, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="flex items-center my-3">
                                                <div className="w-auto">
                                                    <img className="rounded-full h-12 w-12" src={binhLuan.avatar ? binhLuan.avatar : placeholder} alt="avatar" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="ml-4">
                                                        <p className="font-bold text-lg">{binhLuan.tenNguoiBinhLuan}</p>
                                                        <p className="text-gray-500 text-sm font-light">{binhLuan.ngayBinhLuan ? binhLuan.ngayBinhLuan : "Đã bình luận"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="ml-12 mt-2 text-sm font-light">{binhLuan.noiDung}</p>
                                            <div className="w-1/2 border-t border-gray-300 mb-4 my-5"></div>
                                        </div>
                                    )
                                })}
                                <Pagination defaultCurrent={1} total={arrBinhLuan.length} pageSize={5} />

                            </div>
                            <div>
                                <div className="flex items-center my-3">
                                    <div className="w-auto">
                                        <img className="rounded-full h-12 w-12" src={user.avatar ? user.avatar : placeholder} alt="avatar" />
                                    </div>
                                    <div className='flex-1 ml-4'>
                                        <TextArea rows={4} />
                                    </div>
                                </div>
                                <div className='w-1/6'>
                                    <ButtonCustome label="Bình luận" />
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5'>

                        </div>
                    </div>

                </div>
                <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-neutral-100'>
                    <Footer />
                </div>
            </>
        </div>
    )
}

export default DetailPage