import React from 'react'
import { useState } from 'react';
import { DatePicker } from 'antd';

const RangePickerCustome = () => {
    const { RangePicker } = DatePicker;
    const [dates, setDates] = useState([]);
    const handleChange = (value) => {
        setDates(value);
    };
    return (
        <div className="w-full">
            <RangePicker
                value={dates}
                onChange={handleChange}
                className="w-full h-20"
                placeholder={['Nhận phòng', 'Trả phòng']}
                picker="date"
            />
        </div>
    )
}

export default RangePickerCustome