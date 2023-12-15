import React, { useState } from 'react';
import { PlusOutlined, ShopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom';

export const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" label="Home" icon={<ShopOutlined />}>
          <Link to="/">
            Lugares
          </Link>          
        </Menu.Item>
        <Menu.Item key="app" label="create-place" icon={<PlusOutlined />}>
          <Link to="/place/create">
            Crear lugar
          </Link>  
        </Menu.Item>           
      </Menu>    
    </>);
};