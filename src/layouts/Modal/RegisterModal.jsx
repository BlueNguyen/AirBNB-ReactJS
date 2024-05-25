import React, { useState } from 'react'
import Modal from './Modal'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { userServ } from '../../api/api'
import { userLocalStorage } from '../../api/localService'
import { FaLess, FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { handleOpen, handleClose } from "../../hooks/useRegisterModal"
import Heading from '../../components/user/Heading'
import InputCustom from '../../components/user/Input/InputCustome'
import toast from 'react-hot-toast'
import ButtonCustome from '../../components/user/ButtonCustome'

const RegisterModal = () => {
    const { isOpen } = useSelector(state => state.useRegisterModal)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(handleOpen())
    }

    const closeModal = () => {
        dispatch(handleClose())
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
                name: "",
                password: "",
            },
            onSubmit: async (values) => {
                try {
                    const res = await userServ.signup(values);
                    userLocalStorage.set(res.data.content);
                    toast.success("Đăng ký thành công")
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
                name: Yup.string().required("Vui lòng nhập họ tên").min(4, "Vui lòng nhập ít nhất 4 kí tự"),
                email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email không hợp lệ").required("Vui lòng nhập email"),
            })
        })

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <ButtonCustome outline label="Đăng ký bằng Google" icon={FcGoogle} onClick={() => {
                window.location.href = "http://google.com"
            }} />
            <ButtonCustome outline label="Đăng ký bằng Facebook" icon={FaFacebookSquare} onClick={() => {
                window.location.href = "http://facebook.com"
            }} />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={closeModal}
                        className='text-neutral-800 cursor-pointer hover:underline ml-2'>
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title="Xin chào đến với AirBnb" subtitle="Đăng ký tài khoản" />
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
                name="name"
                label="Họ tên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id="name"
                error={errors.name}
                touched={touched.name} />
            <InputCustom
                name="matKhau"
                label="Mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
                type="password"
                id="matKHau"
                error={errors.matKhau}
                touched={errors.matKhau}
            />
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={isOpen} title="Đăng ký"
            actionLabel="Tiếp tục" onClose={closeModal} onSubmit={handleSubmit} body={bodyContent} footer={footerContent}
        />
    )
}

export default RegisterModal