import React, { useState } from 'react'
import Modal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { handleCloseUpload, handleOpenUpload } from '../../hooks/useUploadAvatarModal'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { userServ } from '../../api/api'

const UploadAvatarModal = () => {
    const { isOpen } = useSelector(state => state.useUploadAvatarModal)
    const [image, setImage] = useState();

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    const openModalUpload = () => {
        dispatch(handleOpenUpload())
    }

    const closeModalUpload = () => {
        dispatch(handleCloseUpload())
    }

    const {
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        touched,
        errors,
        setFieldValue } = useFormik({
            initialValues: {
                avatar: ""
            },
            onSubmit: async (values) => {
                try {
                    const res = await userServ.updateAvatars(values.avatar);
                    toast.success("Upload thành công")
                    window.location.reload()
                    setTimeout(() => {
                        closeModalUpload();
                    }, 1000)
                } catch (error) {
                    toast.error("Something went Wrong")
                } finally {
                    setIsLoading(false)
                }
            },
        })

    const bodyContent = (
        <div>
            <label htmlFor="">Hình ảnh</label>
            <input
                onChange={(event) => {
                    const urlImage = URL.createObjectURL(event.target.files[0])
                    setImage(urlImage)
                    setFieldValue("avatar", event.target.files[0])
                }}
                type="file" />
            <img className="w-32" src={image} alt="" />
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={isOpen} title="Upload Avatar"
            actionLabel="Tiếp tục" onClose={closeModalUpload} onSubmit={handleSubmit} body={bodyContent} />
    )
}

export default UploadAvatarModal
