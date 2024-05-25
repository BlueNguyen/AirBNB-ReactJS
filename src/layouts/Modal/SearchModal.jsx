import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import InputCustom from '../../components/user/Input/InputCustome';
import { useDispatch, useSelector } from 'react-redux';
import { getAllViTri } from '../../hooks/useGetAllViTri';
import { locationServ } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const SearchModal = () => {
    const [filteredResults, setFilteredResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const { arrViTri } = useSelector(state => state.useGetAllViTri)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllViTri())
    }, [dispatch])


    const formik = useFormik({
        initialValues: {
            searchTerm: "",
        },
        onSubmit: (values) => {

        },
    });

    useEffect(() => {
        filterData(formik.values.searchTerm);
    }, [formik.values.searchTerm]);

    const filterData = (searchTerm) => {
        const filtered = arrViTri.filter(item => {
            const tenViTriLowerCase = item.tenViTri.toLowerCase();
            const searchTermLowerCase = searchTerm.toLowerCase();
            return tenViTriLowerCase.includes(searchTermLowerCase);
        });
        setFilteredResults(filtered)
        setShowResults(true);
    }

    return (
        <form onSubmit={formik.handleSubmit} className='relative'>
            <div className='flex justify-center items-center'>
                <div className='border-1[px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='text-sm font-semibold px-6'>
                            <InputCustom
                                name="searchTerm"
                                label="Địa điểm"
                                onChange={formik.handleChange}
                                value={formik.values.searchTerm}
                                id="searchTerm"
                                border={false}
                            />
                        </div>
                        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                            <InputCustom
                                label="Nhận phòng"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                border={false}
                            />
                        </div>
                        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                            <InputCustom
                                label="Trả phòng"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                border={false}
                            />
                        </div>
                        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                            <div className='hidden sm:block'>
                                <InputCustom
                                    label="Thêm khách"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    border={false}
                                />
                            </div>
                            <div className='p-2 bg-rose-500 rounded-full text-white'>
                                <button type="submit">
                                    <BiSearch size={18} />
                                </button>
                            </div>
                        </div>
                        {showResults && (
                            <div className="absolute z-10 mt-1 w-1/4 bg-white rounded-md shadow-lg top-20 left-0"
                                onBlur={() => setShowResults(false)}
                            >
                                {/* Nội dung của div */}
                                {filteredResults.length > 0 && filteredResults.map((result, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
                                        onClick={() => {
                                            navigate(`/${result.id}`);
                                        }}
                                    >
                                        <div className=''>
                                            {result.tenViTri}
                                        </div>
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

export default SearchModal;
