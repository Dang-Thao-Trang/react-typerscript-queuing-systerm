import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import "./RootLayout.scss"
import { Link, Outlet, useNavigation } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { CiDesktop } from "react-icons/ci";
import { TbBrandWechat } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { RiFileChartLine, RiSettingsLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
import type { MenuProps, MenuTheme } from 'antd';
import AppRoutes from '../AppRoutes/AppRoutes';
const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key?: React.Key ,
    icon?: React.ReactNode,
    children?: MenuItem[],
    theme?: 'light' | 'dark',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      theme,
    } as MenuItem;
  }

const RootLayout
: React.FC=()=> {
  // const navigate = useNavigation()
    const [current, setCurrent]=useState('1')
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        // navigate(e.key);
      };
      const [theme, setTheme] = useState<MenuTheme>('light');
      const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
      };
      const items: MenuItem[] = [
        // getItem(
        //   'Navigation One',
        //   'sub1',
        //   <TbBrandWechat/>,
        //   [getItem('Option 1', '1'), getItem('Option 2', '2'), getItem('Option 3', '3')],
        // ),
        getItem('Dashboard',"/", <MdOutlineDashboard/> ),
        getItem('ThietBi',"/ThietBi", <CiDesktop/> ),
        getItem('BaoCao',"/BaoCao", <RiFileChartLine/> ),
        getItem('DichVu',"/DichVu", <TbBrandWechat/> ),
        getItem('CapSo',"/CapSo", <FiLayers/> ),
        getItem('CaiDatHeThong',"/CaiDatHeThong", <RiSettingsLine/> ),
        getItem('Dangxuat',"/Dangxuat", <FiLogOut/> ),
      ];

  return (
    <Layout>
      <Sider
        // breakpoint="lg"
        // collapsedWidth="0"
        // trigger={null} collapsible
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="logo" />
        
        <Menu
        onClick={onClick}
        style={{ width: 256 }}
        openKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
        // items={items.map(
        //   (index) => ({
        //     key: String(index + 1),
        //     // icon: React.createElement(icon),
        //     label: `nav ${index + 1}`,
        //   }),
        // )}
        getPopupContainer={(node) => node.parentNode as HTMLElement}
      />
      
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
            <AppRoutes/>
            
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout
;