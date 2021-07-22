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
import { Route } from 'react-router-dom';

import About from '../../routes/About/about';
import Article from '../../routes/Article/Article';
import Resource from '../../routes/Resource/Resource';
import Home from '../../routes/Home/Home';

const { Header, Content, Sider, Footer } = Layout;
const { Item } = Menu
export default class DefaultLayout extends Component {
    render() {
        return (
            <div id="DefaultLayout">
                <HeadNav/>
                <div className="content-wrap">
                <Route path={this.props.match.url+"/"} component={Home} exact/>
                <Route path={this.props.match.url+"/about"} component={About}/>
                <Route path={this.props.match.url+"/article"} component={Article}/>
                <Route path={this.props.match.url+"/resource"} component={Resource}/>
                </div>
                
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