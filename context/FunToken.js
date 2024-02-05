import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import { funTokenAddress, funTokenABI } from "./constants";

const fetchContractERC20 = (signerOrProvider) =>
  new ethers.Contract(funTokenAddress, funTokenABI, signerOrProvider);

export const ERC20ICOContext = React.createContext();

export const ERC20Provider = ({ children }) => {

  //---USER ACCOUNT
  const [holderArray, setHolderArray] = useState([]);
  const [account, setAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [userId, setUserId] = useState("");

  //----TOKEN INFO
  const [NoOfToken, setNoOfToken] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenStandard, setTokenStandard] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenOwner, setTokenOwner] = useState("");
  const [tokenOwnerBal, setTokenOwnerBal] = useState("");

  //---CONNECTING WALLET TO APPLICATION
  const checkConnection = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      setAccount(accounts[0]);

      //---CREATING CONNECTION TO CONTRACT AND FETCH DATA
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContractERC20(signer);

      //---GET ALL TOKEN HOLDER
      const allTokenHolder = await contract.balanceOf(accounts[0]);
      setAccountBalance(allTokenHolder.toNumber());

      const totalHolder = await contract._userId();
      setUserId(totalHolder.toNumber());
    } catch (error) {
      console.log("App is not connected");
    }
  };

  //---ERC20 CONTRACT
  const ERC20FunToken = async () => {
    try {
      //--CONNECTION
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
      );
      const contract = fetchContractERC20(signer);

      //TOKEN SUPPLY
      const supply = await contract.totalSupply();
      const totalSupply = supply.toNumber();
      setNoOfToken(totalSupply);

      //TOKEN NAME
      const name = await contract.name();
      setTokenName(name);

      //TOKEN symbol
      const symbol = await contract.symbol();
      setTokenSymbol(symbol);

      //TOKEN standard
      const sstandard = await contract.standard();
      setTokenStandard(standard);

      //TOKEN OWNERCONTRACT
      const ownerOfContract = await contract.ownerOfContract();
      setTokenOwner(ownerOfContract);

      //OWNER TOKEN BALANCE
      const balanceToken = await contract.balanceOf(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
      );
      setTokenOwnerBal(balanceToken);
    } catch (error) {
      console.log("Error in ERC20 token");
    }
  };

  const transferToken = async (address, value) => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContractERC20(signer);

      const transfer = await contract.transfer(address, BigInt(value * 1));
      transfer.wait();

      window.location.wait();
    } catch (error) {
      console.log("Something wrong while transfer token");
    }
  };

  //GET TOKEN HOLDER DATA
  const tokenHolderData = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContractERC20(signer);

      const allTokenHolder = await contract.getTokenHolder();

      allTokenHolder.map(async (el) => {
        const singleHolderData = await contract.getTokenHolderData(el);
        holderArray.push(singleHolderData);
        console.log(holderArray);
      });
    } catch (error) {
      console.log("something wrong in getting data");
    }
  };

  return (
    <ERC20ICOContext.Provider
      value={{ checkConnection, ERC20FunToken, transferToken, tokenHolderData, account, accountBalance, userId, NoOfToke, TokenName, TokenStandard, TokenSymbol, TokenOwner, TokenOwnerBal }}
    >
      {children}
    </ERC20ICOContext.Provider>
  );
};
