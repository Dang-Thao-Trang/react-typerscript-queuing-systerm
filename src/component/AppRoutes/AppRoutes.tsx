import { Col, Row } from "antd";
import { CiDesktop } from "react-icons/ci";
import { FiLayers, FiLogOut } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiFileChartLine, RiSettingsLine } from "react-icons/ri";
import { TbBrandWechat } from "react-icons/tb";
import { BrowserRouter as Router, Route, Link, Routes, RouterProvider, } from "react-router-dom";
import BaoCao from '../../modules/BaoCao/BaoCao';
import CaiDatHeThong from '../../modules/CaiDatHeThong/CaiDatHeThong';
import CapSo from '../../modules/CapSo/CapSo';
import DangXuat from '../../modules/DangXuat/DangXuat';
import Dashboard from '../../modules/Dashboard/Dashboard';
import DichVu from '../../modules/DichVu/DichVu';
import ThietBi from '../../modules/ThietBi/ThietBi';
import "./AppRouter.scss"

function AppRoutes(){
  return(   
      <Router>
            <div className="appRoutes">
               <nav>
                 <Row>             
                   <Col span={3} className="menue">
                      <div className="img_logo"> 
                        <img src="https://altamedia.vn/wp-content/uploads/sites/11/2020/11/Media-logo.png" alt="logo"/>
                      </div>
                      <ul>
                        <li className="menue_item">
                          <span><MdOutlineDashboard/></span>
                          <Link to="/"> Dashboard</Link>
                        </li>
                        <li className="menue_item">
                          <span><CiDesktop/></span>
                          <Link to="/ThietBi">Thiết bị</Link>
                        </li>
                        <li className="menue_item">
                          <span><TbBrandWechat/></span>
                          <Link to="/DichVu"> Dịch vụ</Link>
                        </li>
                        <li className="menue_item">
                          <span><FiLayers/></span>
                          <Link to="/CapSo">Cấp số</Link>
                        </li>
                        <li className="menue_item">
                          <span><RiFileChartLine/></span>
                          <Link to="/BaoCao">Báo cáo</Link>
                        </li>                                          
                        <li className="menue_item">
                          <span><RiSettingsLine/></span>
                          <Link to="/CaiDatHeThong">Cài đặt hệ thống</Link>
                        </li>
                        <li className="menue_item logout">
                          <span><FiLogOut/></span>
                          <Link to="/Dangxuat">Đăng xuất</Link>
                        </li>
                      </ul>
                   </Col>
                   <Col span={21} className="content">
                      <Routes>
                          <Route path="/"  element={<Dashboard/>} />
                          <Route path="/ThietBi" element={<ThietBi/>}/>
                          <Route path="/BaoCao" element={<BaoCao/>}/>
                          <Route path="/DichVu" element={<DichVu/>}/>
                          <Route path="/CapSo" element={<CapSo/>}/>
                          <Route path="/CaiDatHeThong" element={<CaiDatHeThong/>}/>
                          <Route path="/DangXuat" element={<DangXuat/>}/>              
                      </Routes>
                   </Col>
                 </Row>                
               </nav>             
             </div>
           </Router>
  )
  }
  export default AppRoutes



