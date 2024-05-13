import { useFormik } from 'formik';
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { BiSearch } from 'react-icons/bi'
import InputCustom from '../../components/user/Input/InputCustome';

const SearchModal = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (values) => {
        // Gửi yêu cầu tìm kiếm và cập nhật kết quả
        // Ở đây mô phỏng một hàm tìm kiếm async
        // Thực tế, bạn sẽ gọi API từ máy chủ
        setTimeout(() => {
            const results = ["Kết quả 1", "Kết quả 2", "Kết quả 3"]; // Mô phỏng kết quả tìm kiếm
            setSearchResults(results);
        }, 500);
    };

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors
    } = useFormik({
        initialValues: {
            searchTerm: "",
        },
        onSubmit: (values) => {
            handleSearch(values);
        },
    });

    return (
        // <form onSubmit={handleSubmit} className="relative">
        //     <div className="flex items-center bg-white rounded-full shadow-md">
        //         <input
        //             type="text"
        //             name="searchTerm"
        //             onChange={handleChange}
        //             value={values.searchTerm}
        //             placeholder="Bắt đầu tìm kiếm..."
        //             className="w-full py-2 px-4 rounded-l-full focus:outline-none"
        //         />
        //         <button
        //             type="submit"
        //             className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-r-full focus:outline-none"
        //         >
        //             <IoSearchOutline size={24} />
        //         </button>
        //     </div>
        //     {searchResults.length > 0 && (
        //         <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
        //             {searchResults.map((result, index) => (
        //                 <div
        //                     key={index}
        //                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
        //                 >
        //                     {result}
        //                 </div>
        //             ))}
        //         </div>
        //     )}
        // </form>
        <form onSubmit={handleSubmit} className="relative">

            <div className='flex items-center'>
                <div className='border-1[px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>

                    <div className='flex flex-row items-center justify-between'>

                        <div className='text-sm font-semibold px-6'>
                            <InputCustom
                                name="searchTerm"
                                label="Địa điểm"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.searchTerm}
                                id="searchTerm"
                                error={errors.searchTerm}
                                touched={errors.searchTerm}
                                border={false}
                            />
                        </div>
                        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                            Nhận phòng
                        </div>
                        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                            Trả phòng
                        </div>
                        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                            <div className='hidden sm:block'>
                                Thêm khách
                            </div>
                            <div className='p-2 bg-rose-500 rounded-full text-white'>
                                <button
                                    type="submit"
                                >
                                    <BiSearch size={18} />
                                </button>
                            </div>
                        </div>
                        {searchResults.length > 0 && (
                            <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
                                {searchResults.map((result, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
                                    >
                                        {result}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SearchModal