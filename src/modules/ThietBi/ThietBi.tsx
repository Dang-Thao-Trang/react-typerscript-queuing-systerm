// import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Content } from "antd/es/layout/layout";
// import data from "./data.json";
import "./ThietBi.scss";
import { thietbiCollection } from "../../lib/controller";
import { onSnapshot } from "firebase/firestore";
// import React from "react";
import { Breadcrumb, Select, Input, Row, Col } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { RiAddFill } from "react-icons/ri";
import UseName from "../../component/UseName/UseName";
const { Search } = Input;
const { Option } = Select;


const ThietBi = () => {
  useEffect(()=>
  onSnapshot(thietbiCollection,(snapshot)=>{
    snapshot.docs.map((doc)=>{
      return{
        id: doc.id,
        ...doc.data(),
      }
    })
  }))
  // const onChange = (value) => {
  //   console.log(`selected ${value}`);
  // };
  // const onSearch = (value) => {
  //   console.log("search:", value);
  // };
  // const [options, setOptions] = useState([]);
  // const handleSearch = (value) => {
  //   // Do something to fetch options based on the search value
  //   // and setOptions with the results
  // };

  return (
    <div className="device">
      <UseName/>
      <Breadcrumb
        separator=">"
        items={[
          { title: "Thiết bị" },
          { title: "Danh Sách thiết bị", className: "ant-breadcrumb-link-2" },
        ]}
      />
      <h3>Danh sách thiết bị</h3>
      {/*  chức năng được viết tại đây */}
      <div className="add_device">
        <div className="icon_add">
          <RiAddFill />
        </div>
        <span>Thêm thiết bị</span>
      </div>
      <div className="data_classification">
        <Row>
          <Col span={7}>
            <div className="active">
              <h6>Trạng thái hoạt động</h6>
              <Select
                suffixIcon={<CaretDownOutlined color="#FF7506" />}
                showSearch
                placeholder="Tất cả"
                optionFilterProp="children"
                // onChange={onChange}
                // onSearch={onSearch}
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
            <div className="connect">
              <h6>Trạng thái kết nối</h6>
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
                <Option value="ketnoi">Kết nối</Option>
                <Option value="matketnoi">Mất kết nối</Option>
              </Select>
            </div>
          </Col>
          <Col span={7} offset={3} order={3}>
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
              <th>Mã dịch vụ</th>
              <th>Tên thiết bị</th>
              <th>Địa chỉ IP</th>
              <th>Trạng thái hoạt động</th>
              <th>Trạng thái kết nối</th>
              <th>Dịch vụ sử dụng</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Mathietbi}</td>
                  <td>{item.tenthietbi}</td>
                  <td>{item.IP}</td>
                  <td>{item.trangthaihoatdong}</td>
                  <td>{item.trangthaiketnoi}</td>
                  <td>{item.dichvusudung}</td>
                  <td>chi tiết</td>
                  <td>cập nhật</td>
                </tr>
              );
            })}
          </tbody>
        </Table> */}
      </Content>
    </div>
  );
};

export default ThietBi;
