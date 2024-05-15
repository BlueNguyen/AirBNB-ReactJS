import React from 'react'
import Header from '../../../layouts/Header/Header'
import RegisterModal from '../../../layouts/Modal/RegisterModal'
import ToastProvider from '../../../template/user/ToastProvider'
import LoginModal from '../../../layouts/Modal/LoginModal'
import ListViTri from '../../../layouts/ListViTri/ListViTri'
import SearchModal from '../../../layouts/Modal/SearchModal'
import AnyWhere from '../../../layouts/AnyWhere/AnyWhere.jsx'
import Footer from '../../../layouts/Footer/Footer.jsx'

const HomePage = () => {
    return (
        <div>
            <ToastProvider />
            <LoginModal />
            <RegisterModal />
            <Header />
            <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                <SearchModal />
                <ListViTri />
                <AnyWhere />
            </div>
            <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-neutral-100'>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage