import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import MenuItem from './MenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { handleOpen } from "../../hooks/useRegisterModal"
import { handleOpenLogin } from '../../hooks/useLoginModal'
import { userLocalStorage } from '../../api/localService'
import { useNavigate } from 'react-router-dom'

const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userLocal = userLocalStorage.get("user")
    const handleLogout = () => {
        userLocalStorage.remove("user");
        window.location.href = "/";
    };

    const openModalRegister = () => {
        dispatch(handleOpen());
    }

    const openModalLogin = () => {
        dispatch(handleOpenLogin())
    }

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div onClick={() => { }}
                    className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
                >
                    Cho thuê chỗ ở qua AirBnb
                </div>
                <div onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-sm w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        {userLocal ? (
                            <>
                                <MenuItem onClick={() => { navigate(`/user-info/${userLocal.user.id}`) }} label="Trang cá nhân" />
                                <MenuItem onClick={handleLogout} label="Đăng xuất" />
                            </>

                        ) : (
                            <>
                                <MenuItem onClick={openModalLogin} label="Đăng nhập" />
                                <MenuItem onClick={openModalRegister} label="Đăng ký" />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu