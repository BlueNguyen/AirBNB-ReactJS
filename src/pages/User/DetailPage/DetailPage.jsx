import React, { useEffect, useState } from 'react'
import Header from '../../../layouts/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRoomById } from '../../../hooks/useGetRoomById'
import Footer from '../../../layouts/Footer/Footer'
import placeholder from '../../../assets/img/placeholder.png'
import { PiTelevision } from "react-icons/pi";
import { TbToolsKitchen3 } from "react-icons/tb";
import { TbIroning, TbAirConditioning } from "react-icons/tb";
import { CiParking1 } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePool, MdDesk } from "react-icons/md";
import { getBinhLuanById } from '../../../hooks/useGetBinhLuanById'
import { Input, Select } from 'antd';
import { getUserById } from '../../../hooks/useGetUserById'
import { userLocalStorage } from '../../../api/localService'
import ButtonCustome from '../../../components/user/ButtonCustome'
import { Pagination } from 'antd';
import { useFormik } from 'formik'
import { binhLuanServ, bookingSer } from '../../../api/api'
import toast from 'react-hot-toast'
import InputCustom from '../../../components/user/Input/InputCustome'
import moment from 'moment'
import ToastProvider from '../../../template/user/ToastProvider'
import { DatePicker, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import { FiDollarSign } from "react-icons/fi";
import LoginModal from '../../../layouts/Modal/LoginModal'
import RegisterModal from '../../../layouts/Modal/RegisterModal'


const DetailPage = () => {
    const { TextArea } = Input;
    const { Option } = Select;
    const { RangePicker } = DatePicker;


    const { roomById } = useSelector(state => state.useGetRoomById)
    const { arrBinhLuan } = useSelector(state => state.useGetBinhLuanById)
    const { user } = useSelector(state => state.useGetUserById)
    const userLocal = userLocalStorage.get("user")
    const { id } = useParams();
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [commentsToShow, setCommentsToShow] = useState([]);
    const [numberOfDays, setNumberOfDays] = useState(0);
    const [selectedDates, setSelectedDates] = useState([]);

    const handleRangePickerChange = (dates) => {
        const [start, end] = dates;
        formikBooked.setFieldValue('ngayDen', start ? moment(start).format('YYYY-MM-DD HH:mm:ss') : null);
        formikBooked.setFieldValue('ngayDi', end ? moment(end).format('YYYY-MM-DD HH:mm:ss') : null);
    };

    const handleDateChange = (value) => {
        setSelectedDates(value);
    };

    useEffect(() => {
        dispatch(getRoomById(id));
        dispatch(getBinhLuanById(id));
        if (userLocal) {
            dispatch(getUserById(userLocal.user.id));
        }
    }, [dispatch, id]);
    useEffect(() => {
        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        setCommentsToShow(arrBinhLuan.slice(startIndex, endIndex));
    }, [arrBinhLuan, currentPage]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const renderGuestOptions = () => {
        const options = [];
        for (let i = 1; i <= 20; i++) {
            options.push(<Option key={i} value={i}>{i} khách</Option>);
        }
        return options;
    };

    const now = new Date();
    const dateString = moment(now).format('YYYY-MM-DD HH:mm:ss');

    const formik = useFormik({
        initialValues: {
            id: 0,
            maPhong: parseInt(id),
            maNguoiBinhLuan: userLocal ? userLocal.user.id : "",
            ngayBinhLuan: dateString,
            noiDung: "",
            saoBinhLuan: 0
        },
        onSubmit: async (values) => {
            try {
                const res = await binhLuanServ.createBinhLuan(values);
                toast.success("Bình luận thành công")
                setTimeout(() => {
                    window.location.reload()
                }, 500)
            } catch (error) {
                toast.error("Something went Wrong")
            }
        }
    })

    const formikBooked = useFormik({
        initialValues: {
            id: 0,
            maPhong: parseInt(id),
            ngayDen: "",
            ngayDi: "",
            soLuongKhach: 0,
            maNguoiDung: userLocal ? userLocal.user.id : ""
        },
        onSubmit: async (values) => {
            try {
                const res = await bookingSer.createBooked(values)
                toast.success("đã đặt phòng")
                setTimeout(() => {
                    window.location.reload;
                }, 1000)
            } catch (error) {
                if (userLocal == null) {
                    toast.error("Vui lòng đăng nhập")
                }
                else {
                    toast.error("Something went Wrong")
                }
            }
        }
    })

    useEffect(() => {
        const startDate = moment(formikBooked.values.ngayDen);
        const endDate = moment(formikBooked.values.ngayDi);
        const duration = moment.duration(endDate.diff(startDate));
        const days = duration.asDays(); // Số ngày giữa hai ngày
        setNumberOfDays(days);
    }, [formikBooked.values.ngayDen, formikBooked.values.ngayDi]);

    return (
        <div>
            <ToastProvider />
            <LoginModal />
            <RegisterModal />
            <Header />
            <>
                <div className='my-10 ax-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                    <div className='text-3xl font-bold'>{roomById.tenPhong}</div>
                    <img src={roomById.hinhAnh} alt="Hình phòng" />
                    <div className='flex'>
                        <div className="w-3/5 text-xl font-semibold py-2">
                            {roomById.khach} <span>khách -</span> {roomById.phongNgu} <span>phòng ngủ - </span>
                            {roomById.giuong} <span>giường -</span> {roomById.phongTam} <span>phòng tắm</span>
                            <div className="w-full border-t border-gray-300 mb-4 my-5"></div>
                            <p className='text-xl'>Tiện nghi</p>
                            <div className='flex items-center'>
                                <div className='flex-1'>
                                    {roomById.bep && (
                                        <div className="flex items-center py-2">
                                            <TbToolsKitchen3 className='mr-2' />
                                            <span className="text-sm">Bếp</span>
                                        </div>
                                    )}
                                    {roomById.tivi && (
                                        <div className="flex items-center py-2">
                                            <PiTelevision className='mr-2' />
                                            <span className="text-sm">Tv với truyền hình cáp tiêu chuẩn</span>
                                        </div>
                                    )}
                                    {roomById.dieuHoa && (
                                        <div className="flex items-center py-2">
                                            <TbAirConditioning className='mr-2' />
                                            <span className="text-sm">Điều hòa không khí</span>
                                        </div>
                                    )}
                                    {roomById.banLa && (
                                        <div className="flex items-center py-2">
                                            <MdDesk className='mr-2' />
                                            <span className="text-sm">Bàn này lạ lắm</span>
                                        </div>
                                    )}
                                </div>
                                <div className='flex-1'>
                                    {roomById.wifi && (
                                        <div className="flex items-center py-2">
                                            <FaWifi className='mr-2' />
                                            <span className="text-sm">Wifi tốc độ cao</span>
                                        </div>
                                    )}
                                    {roomById.banUi && (
                                        <div className="flex items-center py-2">
                                            <TbIroning className='mr-2' />
                                            <span className="text-sm">Bản ủi tiêu chuẩn</span>
                                        </div>
                                    )}
                                    {roomById.hoBoi && (
                                        <div className="flex items-center py-2">
                                            <MdOutlinePool className='mr-2' />
                                            <span className="text-sm">Hồ bơi</span>
                                        </div>
                                    )}
                                    {roomById.doXe && (
                                        <div className="flex items-center py-2">
                                            <CiParking1 className='mr-2' />
                                            <span className="text-sm">Bãi đỗ xe thu phí nằm ngoài công viên</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button className='p-3 mt-5 border-2 hover:bg-neutral-200 font-light text-sm'>Hiển thị tất cả tiện ích</button>
                            <div className="w-full border-t border-gray-300 mb-4 my-5"></div>
                            {/*Bình luận  */}
                            <div>
                                {arrBinhLuan.map((binhLuan, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="flex items-center my-3">
                                                <div className="w-auto">
                                                    <img className="rounded-full h-12 w-12" src={binhLuan.avatar ? binhLuan.avatar : placeholder} alt="avatar" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="ml-4">
                                                        <p className="font-bold text-lg">{binhLuan.tenNguoiBinhLuan}</p>
                                                        <p className="text-gray-500 text-sm font-light">{binhLuan.ngayBinhLuan ? binhLuan.ngayBinhLuan : "Đã bình luận"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="ml-12 mt-2 text-sm font-light">{binhLuan.noiDung}</p>
                                            <div className="w-1/2 border-t border-gray-300 mb-4 my-5"></div>
                                        </div>
                                    )
                                })}
                                <Pagination
                                    defaultCurrent={1}
                                    total={arrBinhLuan.length}
                                    pageSize={5}
                                    onChange={handlePageChange}
                                />
                            </div>
                            <div>
                                <div className="flex items-center my-3">
                                    <div className="w-auto">
                                        <img className="rounded-full h-12 w-12" src={user.avatar ? user.avatar : placeholder} alt="avatar" />
                                    </div>
                                    <div className='flex-1 ml-4'>
                                        <TextArea rows={4} id="noiDung" name="noiDung" value={formik.values.noiDung} onChange={formik.handleChange} />
                                    </div>
                                </div>
                                <div className='w-1/2 md:w-1/4 lg:w-1/6'>
                                    <ButtonCustome type="submit" onClick={formik.handleSubmit} label="Bình luận" />
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5'>
                            <div className="shadow-md p-6 rounded-lg bg-white m-5">
                                <div className="flex items-center py-2">
                                    <FiDollarSign />
                                    <span className="text-xl">{roomById.giaTien} / đêm</span>
                                </div>
                                <RangePicker className='h-20 w-full'
                                    placeholder={['Nhận phòng', 'Trả phòng']}
                                    onChange={handleRangePickerChange} />
                                <Select
                                    placeholder="Số lượng khách"
                                    onChange={(value) => formikBooked.setFieldValue("soLuongKhach", value)}
                                    className="w-full h-20"
                                >
                                    {renderGuestOptions()}
                                </Select>
                                <div className='py-2'>
                                    <ButtonCustome type="button" onClick={formikBooked.handleSubmit} label="Đặt phòng" />
                                    <p className='pt-2 text-center font-light'>Bạn vẫn chưa bị trừ tiền?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-neutral-100'>
                    <Footer />
                </div>
            </>
        </div>
    )
}

export default DetailPage