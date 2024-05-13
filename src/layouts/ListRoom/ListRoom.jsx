import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRooms } from '../../hooks/useRoomModal'
import { NavLink } from 'react-router-dom'

const ListRoom = () => {
    const { arrRooms } = useSelector(state => state.useRoomModal)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getAllRooms()) }, [])
    return (
        <div className='grid grid-cols-4 gap-10'>
            {arrRooms.map((room, index) => {
                return (
                    <div className='movie__item space-y-4'>
                        <img src={room.hinhAnh} className='w-full h-96 object-cover rounded' alt="" />
                        <div className="infoMovie">
                            <h3>
                                <span className='bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3'>C18</span>
                                <span className='text-xl font-semibold'>{room.tenPhong}</span>
                            </h3>
                            <p className='line-clamp-2'>{room.moTa}</p>
                        </div>
                        <div className="muaVe">
                            <button className="bg-orange-600 w-full h-20 rounded font-semibold text-lg text-white">
                                <NavLink to={`/detail/${room.id}`}>Mua vé</NavLink></button>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default ListRoom