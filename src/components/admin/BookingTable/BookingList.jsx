import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { bookingSer } from "../../../api/api";
import moment from "moment";
import DeleteBookingButton from "../Button/Delete/Booking/DeleteBookingButton";

const BookingList = () => {
  

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs pb-[50px]">
      <div className="w-full overflow-x-auto">
        <Table columns={columns} dataSource={data} />;
      </div>
    </div>
  );
};

export default BookingList;
