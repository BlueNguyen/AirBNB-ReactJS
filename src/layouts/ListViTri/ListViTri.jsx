import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllViTri } from '../../hooks/useViTriModal'
import { useNavigate } from 'react-router-dom'

const ListViTri = () => {
    const { arrViTri } = useSelector(state => state.useViTriModal)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getAllViTri()) }, [])
    return (
        <div>
            <h1 className='my-5 md:my-10 text-2xl md:text-3xl font-semibold text-center md:text-left'>
                Khám phá những điểm gần đây
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {arrViTri.map((viTri, index) => (
                    <div className='flex items-center w-full h-12 md:h-16 cursor-pointer rounded-md px-4 md:px-6 hover:bg-neutral-200' onClick={() => { navigate(`/${viTri.id}`) }}>
                        <div className='w-1/4 md:w-1/6'>
                            <img src={viTri.hinhAnh} alt='Ảnh địa điểm' className='w-full h-full object-cover rounded-md' />
                        </div>
                        <div className='w-3/4 md:w-5/6 ml-2'>
                            <p className='text-sm md:text-base font-semibold'>{viTri.tinhThanh}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListViTri