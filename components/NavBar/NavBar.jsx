import React, { useState, useContext } from 'react'
import Image from "next/image";

//INTERNAM IMPORT
import Style from "./NavBar.module.css"
import { ERC20ICOContext } from "../../context/FunToken";
import loader from '../../assets/loader.gif'
import funnyToken from '../../assets/funnyToken.png'

const NavBar = () => {
    const { account, accountBalance, userId } = useContext(ERC20ICOContext);
  return (
    <div className={StylenavBar}>
        <div className={Style.navBar_box}>
            <div className={Style.navBar_box_left}>
                <h1>Fun Token</h1>
            </div>
            <div className={Style.navBar_box_right}>
                <p>
                    Token Balance {""} {""} <span>{accountBalance}</span>
                </p>
                <p>
                    <span>
                        UserId #{userId} {""} {""} {account}
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default NavBar