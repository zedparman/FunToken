import Reac, { useState, useEffect, useContext } from 'react'
import Image from "next/image";

import {ERC20ICOContext} from "../context/FunToken";

const Home = () => {
  const { 
    checkConnection, 
    ERC20FunToken, 
    transferToken, 
    tokenHolderData, 
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
   })
  return (
    <div>HOME</div>
  )
}

export default Home