import React from 'react'
import { NavLink } from 'react-router-dom'
import AirBnb_Logo from "../../assets/img/Airbnb_Logo.png"
import { BiSearch } from 'react-icons/bi'
import UserMenu from '../../components/user/UserMenu'
import { userLocalStorage } from '../../api/localService'

const Header = () => {
    return (
        <div style={{ position: "sticky", top: 0 }} className='bg-white z-20 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>

                    <div className='flex flex-row justify-between items-center gap-3 md:gap-0 ' >
                        <NavLink to="/" className="flex items-center">
                            <img src={AirBnb_Logo} className='hidden md:block cursor-pointer' height="100" width="100" alt='AirBnb logo' />
                        </NavLink>
                        <div className='flex items-center '>
                            <div className='border-1[px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>

                                <div className='flex flex-row items-center justify-between'>

                                    <div className='text-sm font-semibold px-6'>
                                        Địa điểm bất kỳ
                                    </div>
                                    <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                                        Tuần bất kỳ
                                    </div>
                                    <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                                        <div className='hidden sm:block'>
                                            Thêm khách
                                        </div>
                                        <div className='p-2 bg-rose-500 rounded-full text-white'>
                                            <BiSearch size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <UserMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
