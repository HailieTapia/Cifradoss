import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { HomeOutlined, LockOutlined, CodeSandboxOutlined, MenuOutlined } from '@ant-design/icons';
import '../App.css';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Layout className="layout" style={{ minHeight: '100vh' }}>
            <Header className="App-header">
                <h1 style={{ color: '#fff', margin: 0 }}>Cifrado de Mensajes</h1>
                <Button 
                    type="primary" 
                    onClick={showDrawer} 
                    icon={<MenuOutlined />} 
                    style={{ marginLeft: 'auto' }}
                />
                <Drawer 
                    title="Menú" 
                    placement="right" 
                    onClose={onClose} 
                    visible={visible}
                >
                    <Menu mode="vertical" onClick={onClose}>
                        <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: '20px' }} />}>
                            <NavLink to="/">Inicio</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<LockOutlined style={{ fontSize: '20px' }} />}>
                            <NavLink to="/cesar">Cifrado César</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<CodeSandboxOutlined style={{ fontSize: '20px' }} />}>
                            <NavLink to="/escitala">Cifrado Escítala</NavLink>
                        </Menu.Item>
                    </Menu>
                </Drawer>
            </Header>
            <Content style={{ padding: '20px' }}>
                <Outlet />
            </Content>
            <Footer className="App-footer">
                <p>Desarrollado por Hailie. Todos los derechos reservados &copy; 2024</p>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
