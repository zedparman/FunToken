import React, {useState, useEffect, useContext} from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import {funTokenAddress, funTokenABI} from "./constants";

export const ERC20ICOContext = React.createContext();

export const ERC20Provider = ({children})=> {
  const funToken = "Hey subscribe to my channel";
  return (
    <ERC20ICOContext.Provider value={{ funToken }}>
      {children}
    </ERC20ICOContext.Provider>
  )
}
