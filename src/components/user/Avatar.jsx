import React from 'react'
import placeholder from '../../assets/img/placeholder.png'
import { userLocalStorage } from '../../api/localService'
const Avatar = () => {

    const userLocal = userLocalStorage.get("user")

    const avatarSource = userLocal && userLocal.user.avatar ? userLocal.user.avatar : placeholder;
    return (
        <img src={avatarSource} className='rounded-full' height="30" width="30" alt='Avatar' />
    )
}

export default Avatar