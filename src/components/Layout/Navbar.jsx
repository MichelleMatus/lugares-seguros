import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
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
        <Menu.Item key="mail" label="Home" icon={<MailOutlined />}>
          <Link to="/">
            Lugares
          </Link>          
        </Menu.Item>
        <Menu.Item key="app" label="create-place" icon={<AppstoreOutlined />}>
          <Link to="/place/create">
            Crear lugar
          </Link>  
        </Menu.Item>           
      </Menu>    
    </>);
};