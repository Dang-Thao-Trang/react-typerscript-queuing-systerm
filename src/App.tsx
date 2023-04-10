import {Suspense} from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { BrowserRouter as Router, Route, Link, Routes, RouterProvider, } from "react-router-dom";
import AppRoutes from './component/AppRoutes/AppRoutes';

import RootLayout from './component/RootLayout/RootLayout';
import BaoCao from './modules/BaoCao/BaoCao';
import CaiDatHeThong from './modules/CaiDatHeThong/CaiDatHeThong';
import CapSo from './modules/CapSo/CapSo';
import DangXuat from './modules/DangXuat/DangXuat';
import Dashboard from './modules/Dashboard/Dashboard';
import DichVu from './modules/DichVu/DichVu';
import ThietBi from './modules/ThietBi/ThietBi';


function App(){
  return(   
    // <RootLayout/>
    <AppRoutes/>
  )
  }
  export default App

  
