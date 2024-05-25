import React, { useEffect, useState } from 'react'
import { handleCloseUploadInfo, handleOpenUploadInfo } from '../../hooks/useUploadUserInfoModal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../hooks/useGetUserById'
import { useParams } from 'react-router-dom'
import { userServ } from '../../api/api'
import { useFormik } from 'formik'
import InputCustom from '../../components/user/Input/InputCustome'
import Heading from '../../components/user/Heading'
import Modal from './Modal'
import toast from 'react-hot-toast'

const UploadUserInfoModal = () => {
    const { isOpen } = useSelector(state => state.useUploadUserInfoModal)
    const { user } = useSelector(state => state.useGetUserById)
    const dispatch = useDispatch();

    const openModalUploadInfo = () => {
        dispatch(handleOpenUploadInfo())
    }

    const closeModalUploadInfo = () => {
        dispatch(handleCloseUploadInfo())
    }
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (user) {
            setFieldValue("id", user.id || '');
            setFieldValue("name", user.name || '');
            setFieldValue("email", user.email || '');
            setFieldValue("phone", user.phone || '');
            setFieldValue("birthday", user.birthday || '');
            setFieldValue("gender", user.gender || true);
            setFieldValue("role", user.role || '');
        }
    }, [user]);

    const {
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        touched,
        errors,
        setFieldValue
    } = useFormik({
        initialValues: {
            id: 0,
            name: '',
            email: '',
            phone: '',
            birthday: '',
            gender: true,
            role: '',
        },
        onSubmit: async (values) => {
            try {
                const res = await userServ.updateUsers(values.id, values);
                toast.success("Upload thành công")
                window.location.reload()
                setTimeout(() => {
                    closeModalUploadInfo();
                }, 1000)
            } catch (error) {
                toast.error("Something went Wrong")
            } finally {
                setIsLoading(false)
            }
        }
    });

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title="Xin chào đến với AirBnb" subtitle="Cập nhật tài khoản" />
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
                readOnly="true"
                name="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="email"
                error={errors.email}
                touched={touched.email} />
            <InputCustom
                name="phone"
                label="Số điện thoại"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                id="phone"
                error={errors.phone}
                touched={touched.phone} />
            <InputCustom
                name="birthday"
                label="birthday DD/MM/YYYY"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthday}
                id="birthday"
                error={errors.birthday}
                touched={touched.birthday} />
            <InputCustom
                name="gender"
                label="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
                id="gender"
                error={errors.gender}
                touched={touched.gender} />
            <InputCustom
                readOnly="true"
                name="role"
                label="role"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.role}
                id="role"
                error={errors.role}
                touched={touched.role} />
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={isOpen} title="Upload Infomation"
            actionLabel="Tiếp tục" onClose={closeModalUploadInfo} onSubmit={handleSubmit} body={bodyContent} />
    )
}

export default UploadUserInfoModal