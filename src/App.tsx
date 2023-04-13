import {Suspense} from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { BrowserRouter as Router, Route, Link, Routes, RouterProvider, } from "react-router-dom";
import AppRoutes from './component/AppRoutes/AppRoutes';



function App(){
  return(   
    <AppRoutes/>
  )
  }
  export default App

  
