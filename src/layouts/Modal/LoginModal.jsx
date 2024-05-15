import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleCloseLogin, handleOpenLogin } from '../../hooks/useLoginModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaLess, FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import InputCustom from '../../components/user/Input/InputCustome'
import Heading from '../../components/user/Heading'
import ButtonCustome from '../../components/user/ButtonCustome'
import Modal from './Modal'
import { userServ } from '../../api/api'
import { userLocalStorage } from '../../api/localService'
import toast from 'react-hot-toast'

const LoginModal = () => {
    const { isOpen } = useSelector(state => state.useLoginModal)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(handleOpenLogin())
    }

    const closeModal = () => {
        dispatch(handleCloseLogin())
    }
    const {
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        touched,
        errors } = useFormik({
            initialValues: {
                email: "",
                matKhau: "",
            },
            onSubmit: async (values) => {
                try {
                    const res = await userServ.login(values);
                    userLocalStorage.set(res.data.content);
                    toast.success("Đăng nhập thành công")
                    window.location.reload()
                    // notify("đăng ký thành công khách hàng sẻ được chuyển hướng về trang chủ");
                    setTimeout(() => {
                        closeModal();
                    }, 1000)
                } catch (error) {
                    toast.error("Something went Wrong")
                    // notify(error.response.data.content);
                } finally {
                    setIsLoading(false)
                }
            },
            validationSchema: Yup.object({
                matKhau: Yup.string().required("Vui lòng nhập mật khẩu").min(4, "Vui lòng nhập ít nhất 4 kí tự"),
                email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email không hợp lệ").required("Vui lòng nhập email"),
            })
        })

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <ButtonCustome outline label="Đăng nhập bằng Google" icon={FcGoogle} onClick={() => {
                window.location.href = "http://google.com"
            }} />
            <ButtonCustome outline label="Đăng nhập bằng Facebook" icon={FaFacebookSquare} onClick={() => {
                window.location.href = "http://facebook.com"
            }} />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                        Bạn chưa có tài khoản?
                    </div>
                    <div onClick={closeModal}
                        className='text-neutral-800 cursor-pointer hover:underline ml-2'>
                        Sign up
                    </div>
                </div>
            </div>
        </div>
    )

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title="Xin chào đến với AirBnb" subtitle="Đăng nhập" />
            <InputCustom
                name="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="email"
                error={errors.email}
                touched={touched.email} />
            <InputCustom
                name="matKhau"
                label="Mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
                placeholder="Nhập mật khẩu"
                type="password"
                id="matKHau"
                error={errors.matKhau}
                touched={errors.matKhau}
            />
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={isOpen} title="Đăng nhập"
            actionLabel="Tiếp tục" onClose={closeModal} onSubmit={handleSubmit} body={bodyContent} footer={footerContent}
        />
    )
}

export default LoginModal