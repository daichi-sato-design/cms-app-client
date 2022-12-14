import React from 'react'
import { Layout } from 'antd'
import AdminNav from '../nav/AdminNav'

const { Content, Sider } = Layout

const AdminLayout = ({ children }) => {
  return (
    <Layout>
      <AdminNav />
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
