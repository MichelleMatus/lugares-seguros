import React from 'react'
import { Layout, theme, Space } from 'antd'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { ProfileMenu } from './ProfileMenu'

export const AppLayout = () => {

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ width: "100vw", minHeight: "100vh"}}>
      <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
        <Space>
          <Navbar />     
          <ProfileMenu />
        </Space>
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}
