import React, { Component } from 'react';
import HeadImage from '../../assets/img/head.jpeg';
import { Breadcrumb, Layout, Button, Menu, Image } from 'antd';
import { GithubOutlined, WechatOutlined, IdcardOutlined, HomeOutlined } from '@ant-design/icons';
import { blueBright } from 'ansi-colors';
import { gray, yellow } from 'chalk';
import { fix } from 'prelude-ls';
import './DefaultLayout.less';
import HeadNav from '../../common/HeadNav'
import FooterNav from '../../common/FooterNav'
const { Header, Content, Sider, Footer } = Layout;
const { Item } = Menu
export default class DefaultLayout extends Component {
    render() {
        return (
            <div id="DefaultLayout">
                <HeadNav/>
                
                {/* <Menu mode="horizontal" theme="dark" style={{ position: "fixed", top: 0, width: "200vh" }}>
                    <Item style={{ marginLeft: "25vh" }}> <WechatOutlined style={{ color: "green" }} />contact</Item>
                    <Item style={{ marginLeft: "25vh" }}><HomeOutlined />home</Item>
                    <Item style={{ marginLeft: "25vh" }}><IdcardOutlined />about</Item>
                    <Item style={{ marginLeft: "25vh" }}><GithubOutlined />github</Item>
                </Menu>
                <Layout style={{ color: "yellowgreen" }}>
                    <Header style={{ color: "blue", aligin: "center", width: "100%", height: "30vh", backgroundImage: `url(${HeadImage})` }}>
                        {/* <image src={require('./assets/img/head.jpeg')} alt="" /> */}
                        {/* <Menu mode="horizontal" theme="light">
            <Item icon="">contact</Item>
            <Item>home</Item>
            <Item>about</Item>s
            <Item ><GithubOutlined />github</Item>
          </Menu> */}
                   { /*</Header>

                    <Layout style={{ color: "white", aligin: "center", width: "100%", height: "70vh" }}>
                        <Sider style={{ color: "white", aligin: "center", width: "100%", height: "70vh" }}>left sidebar</Sider>
                        <Content>main content</Content>
                        <Sider>right sidebar</Sider>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout> */}
                hello
                <FooterNav/>
            </div>
        )
    }
}