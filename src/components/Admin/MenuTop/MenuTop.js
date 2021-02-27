import React from 'react';
import {Layout,Button,Icon} from "antd";
import MenuLogo from "../../../assets/img/png/beaver_PNG21 (1).png";

import "./MenuTop.scss";


export default function MenuTop(props){
    const {menuCollapsed,setMenuCollapsed }=props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo"
                    src={MenuLogo}
                    alt="Jorge Ignacio Lara Ceballos"
                />
                <Button type="link" onClick={()=>setMenuCollapsed(!menuCollapsed)}>
                    <Icon type={menuCollapsed ? "menu-unfold":"menu-fo"}/>
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <Icon type="poweroff"/>
                </Button>
            </div>
        </div>
    )
} 