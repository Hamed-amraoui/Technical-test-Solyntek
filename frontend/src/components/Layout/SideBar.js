import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { Item } = Menu;

const Sidebar = () => {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px', marginBottom: '16px' }}>
        <img
          src="Solyntek.png"
          alt="Logo"
          style={{ width: '25%', marginRight: '10px' }}
        />
        <h3 style={{ margin: 0 }}>Solyntek</h3>
      </div>
      <Menu mode="vertical" theme="light" defaultSelectedKeys={['1']}>
        <Item key="1">
          <Link to="/dashboard">Dashboard</Link>
        </Item>
        <Item key="2">
          <Link to="/alerts">Alerts</Link>
        </Item>
        <Item key="3">
          <Link to="/cameras">Cameras</Link>
        </Item>
        <Item key="4">
          <Link to="/rules">Rules</Link>
        </Item>
        <Item key="5">
          <Link to="/zones">Zones</Link>
        </Item>
        <Item key="6">
          <Link to="/users">Users</Link>
        </Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
