import Reac, { useState, useEffect, useContext } from 'react'
import Image from "next/image";

import {ERC20ICOContext} from "../context/FunToken";
import Style from "../styles/index.module.css";
import funnyToken from '../assets/funnyToken.png'
import Transfer from '../components/Transfer/Transfer';
import User from '../components/User/User';

const Home = () => {
  const { 
    checkConnection, 
    ERC20FunToken, 
    transferToken, 
    tokenHolderData, 
    holderArray,
    account, 
    accountBalance, 
    userId, 
    NoOfToken, 
    tokenName, 
    tokenStandard, 
    tokenSymbol, 
    tokenOwner, 
    tokenOwnerBal
   } = useContext(ERC20ICOContext);

   useEffect(() => {
    checkConnection();
    tokenHolderData();
    ERC20FunToken();
   })
  return (
    <div className='Style.home'>
      <div className={Style.heroSection}>
        <div className={Style.heroSection_left}>
          <h1>Launching Fun Token (FUN) ERC20 Token</h1>
          <p>some text here</p>

          <div className={Style.heroSection_left_btn}>
            <button className={Style.btn}>White paper</button>
            <button className={Style.btn}>product intro</button>
          </div>
        </div>
        <div className={Style.heroSection_right}> 
          <Image src={funnyToken} alt="funnyToken" width={300} height={300} className="Style.heroSection_right_img_one"/>
          <Image src={funnyToken} alt="funnyToken" width={150} height={150} className="Style.heroSection_right_img"/>
          <Image src={funnyToken} alt="funnyToken" width={100} height={100} className="Style.heroSection_right_img"/>
          <Image src={funnyToken} alt="funnyToken" width={50} height={50} className="Style.heroSection_right_img"/>
          <Image src={funnyToken} alt="funnyToken" width={20} height={20} className="Style.heroSection_right_img"/>
        </div>
      </div>

      <Transfer 
        NoOfToken={NoOfToken}
        tokenName={tokenName}
        tokenStandard={tokenStandard}
        tokenSymbol={tokenSymbol}
        tokenOwnerBal={tokenOwnerBal}
        transferToken={transferToken}
      />
      <User holderArray={holderArray}/>
    </div>
  )
}

export default Home