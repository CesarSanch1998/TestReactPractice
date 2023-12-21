import { Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { ReactNode } from "react";

interface Props {
children:ReactNode
}
export function ModLayout (props: Props): JSX.Element {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
    return (
        <>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}  />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight:602,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            
                            {props.children}

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>
    );
}