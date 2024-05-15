// import { useFormik } from 'formik';
// import React, { useEffect, useState } from 'react'
// import { IoSearchOutline } from "react-icons/io5";
// import { BiSearch } from 'react-icons/bi'
// import InputCustom from '../../components/user/Input/InputCustome';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllViTri } from '../../hooks/useGetAllViTri';
// import { debounce } from 'lodash';

// const SearchModal = () => {
//     const [searchResults, setSearchResults] = useState([]);
//     const [results, setResults] = useState([])
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getAllViTri()).then(data => handleSearch(data))
//     }, [dispatch]);

//     const handleSearch = (data) => {
//         setSearchResults(data)
//     }

//     const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
//         initialValues: {
//             searchTerm: "",
//         },
//         onSubmit: (values) => {
//             handleSearch(values);
//         },
//     });

//     useEffect(() => {
//         const newResults = searchResults.payload;
//         setResults(newResults)
//     }, [searchResults]);

//     useEffect(() => {
//         console.log(results)
//     }, [results])
//     return (
//         <form onSubmit={handleSubmit} className="relative">

//             <div className='flex justify-center items-center'>
//                 <div className='border-1[px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>

//                     <div className='flex flex-row items-center justify-between'>

//                         <div className='text-sm font-semibold px-6'>
//                             <InputCustom
//                                 name="searchTerm"
//                                 label="Địa điểm"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.searchTerm}
//                                 id="searchTerm"
//                                 error={errors.searchTerm}
//                                 touched={errors.searchTerm}
//                                 border={false}
//                             />
//                         </div>
//                         <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
//                             <InputCustom
//                                 label="Nhận phòng"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 border={false}
//                             />
//                         </div>
//                         <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
//                             <InputCustom
//                                 label="Trả phòng"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 border={false}
//                             />
//                         </div>
//                         <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
//                             <div className='hidden sm:block'>
//                                 <InputCustom
//                                     label="Thêm khách"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     border={false}
//                                 />
//                             </div>
//                             <div className='p-2 bg-rose-500 rounded-full text-white'>
//                                 <button
//                                     type="submit"
//                                 >
//                                     <BiSearch size={18} />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
//                             {results.map((result, index) => (
//                                 <div
//                                     key={index}
//                                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
//                                 >
//                                     <div className=''>
//                                         {result.id}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default SearchModal

import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import InputCustom from '../../components/user/Input/InputCustome';
import { useDispatch, useSelector } from 'react-redux';
import { getAllViTri } from '../../hooks/useGetAllViTri';

const SearchModal = () => {
    const [filteredResults, setFilteredResults] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const searchResults = useSelector(state => state.useGetAllViTri.arrViTri); // Lấy dữ liệu từ Redux store

    useEffect(() => {
        dispatch(getAllViTri());
    }, [dispatch]);

    const handleSearch = (values) => {
        // const filtered = searchResults.filter(result =>
        //     result.tinhThanh.toLowerCase().includes(values.searchTerm.toLowerCase())
        // );
        setFilteredResults(values);
    };

    const handleFocusSearch = () => {
        setIsDropdownOpen(true);
    };

    const handleBlurSearch = () => {
        setIsDropdownOpen(false);
    };

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
        initialValues: {
            searchTerm: "",
        },
        onSubmit: (values) => {
            handleSearch(values)
        },
    });

    useEffect(() => {
        console.log(filteredResults)
    }, [values.searchTerm])
    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className='flex justify-center items-center'>
                <div className='border-1[px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='text-sm font-semibold px-6'>
                            <InputCustom
                                name="searchTerm"
                                label="Địa điểm"
                                onChange={handleChange}
                                value={values.searchTerm}
                                id="searchTerm"
                                error={errors.searchTerm}
                                touched={errors.searchTerm}
                                border={false}
                                onBlur={handleBlurSearch}
                                onFocus={handleFocusSearch}
                            />
                        </div>
                        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                            <InputCustom
                                label="Nhận phòng"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                border={false}
                            />
                        </div>
                        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                            <InputCustom
                                label="Trả phòng"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                border={false}
                            />
                        </div>
                        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                            <div className='hidden sm:block'>
                                <InputCustom
                                    label="Thêm khách"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={false}
                                />
                            </div>
                            <div className='p-2 bg-rose-500 rounded-full text-white'>
                                <button type="submit">
                                    <BiSearch size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="absolute z-10 mt-1 w-1/4 bg-white border rounded-md shadow-lg top-20 left-0">
                            {isDropdownOpen && filteredResults.length > 0 && filteredResults.map((result, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
                                >
                                    <div className=''>
                                        {result.tinhThanh}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SearchModal;
