import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

import HeaderComponent from '../components/Header/header';
import FooterComponent from '../components/Footer/footer'
import { ChildrenProps } from '../utils/childrenProps';

const PublicDefaultLayout = ({ children }: ChildrenProps) => {
  const layoutStyle: React.CSSProperties = {
  }

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    height: 'auto'
  }

  const contentStyle: React.CSSProperties = {

  }

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5'
  }


  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}><HeaderComponent/></Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}><FooterComponent/></Footer>
    </Layout>
  )
}

export default PublicDefaultLayout
