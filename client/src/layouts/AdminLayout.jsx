import { Layout } from 'antd';
import AdminMenu from './admin/AdminMenu';

const { Header, Footer, Sider, Content } = Layout;

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Layout style={{minHeight: "100vh"}}>
        <Sider width="20%" style={{color : "white"}}>
          <AdminMenu />
        </Sider>
        <Layout>
          <Header style={{color : "white"}}>Header</Header>
          <Content style={{}}>Content</Content>
          <Footer style={{}}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default AdminLayout