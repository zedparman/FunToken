import Reac, { useState, useEffect, useContext } from 'react'
import Image from "next/image";

import {ERC20ICOContext} from "../context/FunToken";

const Home = () => {
  const { funToken } = useContext(ERC20ICOContext);
  return (
    <div>{funToken}</div>
  )
}

export default Home