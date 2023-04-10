import React from 'react'
import "./BaoCao.scss"
// import Table from "react-bootstrap/Table";
// import data from "../CapSo/data.json";
import dayjs from "dayjs";
import { Content } from "antd/es/layout/layout";
import { Breadcrumb, Space, DatePicker } from "antd";
import { MdOutlineCalendarMonth } from "react-icons/md";
// import { HiDocumentArrowUp } from "react-icons/hi2";
// import { HiDocumentArrowUp } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import UseName from '../../component/UseName/UseName';

const dateFormat = "DD/MM/YYYY";

const BaoCao = () => {
  return (
<div className="report">
  <UseName/>
      <Breadcrumb
        separator=">"
        items={[
          { title: "Báo cáo" },
          { title: "Lập báo cáo", className: "ant-breadcrumb-link-2" },
        ]}
      />
      <div className="data_time">
        <h6>Chọn thời gian</h6>
        <DatePicker
          defaultValue={dayjs("10/10/2021", dateFormat)}
          format={dateFormat}
          suffixIcon={<MdOutlineCalendarMonth className="icon_calendar" />}
          className=""
        />
        <div className="icon_sm">
          <IoMdArrowDropright />
        </div>
        <DatePicker
          defaultValue={dayjs("18/10/2021", dateFormat)}
          format={dateFormat}
          suffixIcon={<MdOutlineCalendarMonth className="icon_calendar" />}
        />
      </div>
      <div className="download">
        <div className="icon_down">
          <FaFileDownload />
        </div>
        <span>Tải về</span>
      </div>

      <Content
        style={{
          background: "white",
          width: 1112,
          height: 490,
          borderRadius: 12,
        }}
      >
        {/* <Table bordered>
          <thead>
            <tr>
              <th>Số thứ tự</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Tình trạng</th>
              <th>Nguồn cấp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.tenDv}</td>
                  <td>{item.thoigiancap}</td>
                  <td>{item.trangthai}</td>
                  <td>{item.nguoncap}</td>
                </tr>
              );
            })}
          </tbody>
        </Table> */}
      </Content>
    </div>  )
}

export default BaoCao