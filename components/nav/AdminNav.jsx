import React from 'react'
import { Menu, Layout } from 'antd'
import Link from 'next/link'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ]),
]

const AdminNav = () => {
  return (
    <Sider collapsible>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1', 'sub2']}
        mode="inline"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link href="/admin">
            <a>Dashboard</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link href="/admin">
            <a>Dashboard</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          <Link href="/admin">
            <a>Dashboard</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default AdminNav
