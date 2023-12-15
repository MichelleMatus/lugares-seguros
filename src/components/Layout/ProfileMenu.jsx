import React from 'react'
import { Button, Dropdown } from 'antd';
import { SettingOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

export const ProfileMenu = () => {
  
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" > <mr-6> { <UserOutlined /> } </mr-6>  
        Perfil
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com"> <mr-6> { <LogoutOutlined  /> } </mr-6>
        Cerrar Sesion
      </a>
    ),
  },
];

  return (
    <Dropdown menu={{ items }}>
      <Button icon={<SettingOutlined />} type='text'>Ajustes</Button>
    </Dropdown>
  )
}
