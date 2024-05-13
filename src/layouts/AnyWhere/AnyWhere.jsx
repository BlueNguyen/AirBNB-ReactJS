import React from 'react'
import Heading from '../../components/user/Heading'
import bietthu from '../../assets/img/biet-thu-don-lap.jpeg'
import aerial from '../../assets/img/aerial-view.jpg'
import trangtrai from '../../assets/img/trang-trai.jpg'
import dog from '../../assets/img/dog.jpg'

const AnyWhere = () => {
    return (
        <div className='my-10'>
            <Heading title="Ở bất cứ đâu" />
            <div className="flex flex-wrap justify-center">
                <div className="w-1/2 p-5 md:w-1/4 md:p-2">
                    <img
                        src={bietthu}
                        alt="Hình ảnh 1"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <p className='text-xl mt-1'>Toàn bộ nhà</p>
                </div>
                <div className="w-1/2 p-5 md:w-1/4 md:p-2">
                    <img
                        src={aerial}
                        alt="Hình ảnh 2"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <p className='text-xl mt-1'>Chỗ ở độc đáo</p>

                </div>
                <div className="w-1/2 p-5 md:w-1/4 md:p-2">
                    <img
                        src={trangtrai}
                        alt="Hình ảnh 3"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <p className='text-xl mt-1'>Trang trại và thiên nhiên</p>
                </div>
                <div className="w-1/2 p-5 md:w-1/4 md:p-2">
                    <img
                        src={dog}
                        alt="Hình ảnh 4"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <p className='text-xl mt-1'>Cho phép mang thú cưng</p>
                </div>
            </div>
        </div>
    )
}
export default AnyWhere