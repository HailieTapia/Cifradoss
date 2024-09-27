import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { HomeOutlined, LockOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import '../App.css';
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
    return (
        <Layout className="layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header className="App-header">
                <h1>Cifrado de Mensajes</h1>
                <Menu mode="horizontal">
                    <Menu.Item key="1" style={{ marginLeft: '22px', color: '#FFFF', fontFamily: 'Merriweather' }} icon={<HomeOutlined style={{ fontSize: '20px' }} />}>
                        <NavLink to="/" activeClassName="active-link">Inicio</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" style={{ marginLeft: '22px', color: '#FFFF', fontFamily: 'Merriweather' }} icon={<LockOutlined style={{ fontSize: '20px' }} />}>
                        <NavLink to="/cesar" activeClassName="active-link">Cifrado César</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" style={{ marginLeft: '22px', color: '#FFFF', fontFamily: 'Merriweather' }} icon={<CodeSandboxOutlined style={{ fontSize: '20px' }} />}>
                        <NavLink to="/escitala" activeClassName="active-link">Cifrado Escítala</NavLink>
                    </Menu.Item>
                </Menu>
            </header>
            <Content style={{ padding: '20px' }}>
                <Outlet />
            </Content>
            <footer className="App-footer">
                <p>Desarrollado por Hailie. Todos los derechos reservados &copy; 2024</p>
            </footer>
        </Layout>
    );
};

export default MainLayout;
