import React from "react";
// import Table from "react-bootstrap/Table";
// import data from "./data.json";
import "./CapSo.scss";
import dayjs from "dayjs";
import { Content } from "antd/es/layout/layout";
import { CaretDownOutlined } from "@ant-design/icons";
import { RiAddFill } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { Breadcrumb, Select, Input, Row, Col, DatePicker } from "antd";
import UseName from "../../component/UseName/UseName";
const { Search } = Input;
const { Option } = Select;
const dateFormat = "DD/MM/YYYY";

const CapSo = () => {

  return (
    <div className="number_level">
      <UseName/>
      <Breadcrumb
        separator=">"
        items={[
          { title: "Cấp số" },
          { title: "Danh sách cấp số", className: "ant-breadcrumb-link-2" },
        ]}
      />
      <h3>Quản lý cấp số</h3>
      <div className="add_device">
        <div className="icon_add">
          <RiAddFill />
        </div>
        <span>Cấp số mới</span>
      </div>
      <div className="data_classification">
        <Row>
          <Col span={3.5}>
            <div className="active">
              <h6>Tên dịch vụ</h6>
              <Select
                suffixIcon={<CaretDownOutlined color="#FF7506" />}
                showSearch
                placeholder="Tất cả"
                optionFilterProp="children"
                // filterOption={(input, option) =>
                //   (option?.label ?? "")
                //     .toLowerCase()
                //     .includes(input.toLowerCase())
                // }
              >
                <Option value="all">Tất cả</Option>
                <Option value="hoatdong">Hoạt động</Option>
                <Option value="ngunghoatdong">Ngưng hoạt động</Option>
              </Select>
            </div>
          </Col>
          <Col span={3.5}>
            <div className="active">
              <h6>Tình trạng</h6>
              <Select
                suffixIcon={<CaretDownOutlined color="#FF7506" />}
                showSearch
                placeholder="Tất cả"
                optionFilterProp="children"
                // filterOption={(input, option) =>
                //   (option?.label ?? "")
                //     .toLowerCase()
                //     .includes(input.toLowerCase())
                // }
              >
                <Option value="all">Tất cả</Option>
                <Option value="hoatdong">Hoạt động</Option>
                <Option value="ngunghoatdong">Ngưng hoạt động</Option>
              </Select>
            </div>
          </Col>
          <Col span={3.5}>
            <div className="active">
              <h6>Nguồn cấp</h6>
              <Select
                suffixIcon={<CaretDownOutlined color="#FF7506" />}
                showSearch
                placeholder="Tất cả"
                optionFilterProp="children"
                // filterOption={(input, option) =>
                //   (option?.label ?? "")
                //     .toLowerCase()
                //     .includes(input.toLowerCase())
                // }
              >
                <Option value="all">Tất cả</Option>
                <Option value="hoatdong">Hoạt động</Option>
                <Option value="ngunghoatdong">Ngưng hoạt động</Option>
              </Select>
            </div>
          </Col>
          <Col span={7}>
            <div className="data_time">
              <h6>Chọn thời gian</h6>
              <DatePicker
                defaultValue={dayjs("10/10/2021", dateFormat)}
                format={dateFormat}
                suffixIcon={
                  <MdOutlineCalendarMonth className="icon_calendar" />
                }
                className=""
              />
              <div className="icon_sm">
                <IoMdArrowDropright />
              </div>
              <DatePicker
                defaultValue={dayjs("18/10/2021", dateFormat)}
                format={dateFormat}
                suffixIcon={
                  <MdOutlineCalendarMonth className="icon_calendar" />
                }
              />
            </div>
          </Col>
          <Col span={5.5}>
            <div className="search">
              <h6>Từ khoá</h6>
              <Search
                placeholder="Nhập từ khoá"
                // onSearch={handleSearch}
                style={{
                  width: 300,
                }}
              />
            </div>
          </Col>
        </Row>
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
              <th>STT</th>
              <th>Tên Khách Hàng</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Hạn sử dụng</th>
              <th>Trạng thái sử dụng</th>
              <th>Nguồn cấp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.tenKH}</td>
                  <td>{item.tenDv}</td>
                  <td>{item.thoigiancap}</td>
                  <td>{item.hansudung}</td>
                  <td>{item.trangthai}</td>
                  <td>{item.nguoncap}</td>
                  <td>chi tiết</td>
                </tr>
              );
            })}
          </tbody>
        </Table> */}
      </Content>
    </div>
  );
};

export default CapSo;
