import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import placeholder from '../../../assets/img/placeholder.png'
import Heading from '../../../components/user/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../../hooks/useGetUserById';
import Header from '../../../layouts/Header/Header';
import { FaCheckCircle } from 'react-icons/fa';
import "./UserInfo.css"
import { getBookedById } from '../../../hooks/useGetBookedById';
import { handleOpenUpload } from '../../../hooks/useUploadAvatarModal';
import UploadAvatarModal from '../../../layouts/Modal/UploadAvatarModal';
import ToastProvider from '../../../template/user/ToastProvider';
import UploadUserInfoModal from '../../../layouts/Modal/UploadUserInfoModal';
import { handleOpenUploadInfo } from '../../../hooks/useUploadUserInfoModal';
import { getRoomById } from '../../../hooks/useGetRoomById';


const UserInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { user } = useSelector(state => state.useGetUserById)
    const { bookedRoom } = useSelector(state => state.useGetBookedById)
    const [roomInfo, setRoomInfo] = useState([])
    console.log("roominfo", roomInfo.payload)
    const openModalUploadAvatar = () => {
        dispatch(handleOpenUpload());
    }

    const openModalUploadUserInfo = () => {
        dispatch(handleOpenUploadInfo())
    }

    useEffect(() => {
        dispatch(getUserById(id))
        dispatch(getBookedById(id))
    }, [])

    useEffect(() => {
        const newRoomInfo = []
        bookedRoom.forEach(room => {
            dispatch(getRoomById(room.maPhong)).then(roomData => {
                newRoomInfo.push(roomData.payload);
                console.log("roomData", roomData)
                if (newRoomInfo.length === bookedRoom.length) {
                    setRoomInfo(newRoomInfo);
                }
            });
        });
    }, [bookedRoom, dispatch]);
    const avatarSource = user && user.avatar ? user.avatar : placeholder;

    return (
        <div>
            <ToastProvider />
            <Header />
            <UploadAvatarModal />
            <UploadUserInfoModal />
            <div className='flex mx-auto max-w-screen-lg my-10 flex-col lg:flex-row'>
                <div className='py-5 shadow-border w-full lg:w-6/12 flex justify-center items-center flex-col border-neutral-500 border-2 rounded-lg'>
                    <img className='rounded-full' src={avatarSource} alt="Ảnh đại diện" />
                    <button onClick={openModalUploadAvatar}
                        className='mt-4 bg-rose-500 hover:bg-neutral-200 text-white font-bold py-2 px-4 rounded'>Cập nhật ảnh</button>
                    <FaCheckCircle className="my-2" size={30} color="green" />
                    <Heading title="Xác minh danh tính" subtitle="Xác thực danh tính của bạn với huy hiệu xác minh danh tính" center />
                    <div className="border-b w-full my-10"></div>
                    <Heading title={`${user.name} đã xác thực`} subtitle={` Địa chỉ email `} />
                </div>
                <div className='w-full lg:w-6/12 mt-10 lg:mt-0 lg:mx-10'>
                    <Heading title={`Xin chào, tôi là ${user.name}`} subtitle="Tôi đã tham gia vào 2024" />
                    <button onClick={openModalUploadUserInfo}
                        className='my-4 bg-rose-500 hover:bg-neutral-200 
                        text-white font-bold py-2 px-4 rounded'>Chỉnh sửa hồ sơ</button>
                    <div className='mt-20'>
                        <Heading title="Phòng đã thuê" />
                        {roomInfo.map((room, index) => (
                            <div key={index} className='flex items-center w-full h-16 md:h-30 cursor-pointer hover:bg-neutral-200' onClick={() => { }}>
                                <div className='w-1/4 md:w-1/3'>
                                    <img
                                        src={room.hinhAnh}
                                        alt='Ảnh địa điểm'
                                        className='w-full object-cover rounded-md'
                                    />
                                </div>
                                <div className='w-3/4 md:w-2/3 ml-2'>
                                    <p className='text-sm md:text-base font-semibold'>{room.tenPhong}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserInfo

