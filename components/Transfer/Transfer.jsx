import React, { useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../Transfer/Transfer";
import funnyToken from "../../assets/funnyToken.png";

const Transfer = (
{
    NoOfToken,
    tokenName,
    tokenStandard,
    tokenSymbol,
    tokenOwnerBal,
    transferToken
}
) => {

    const [transferAccount, setTransferAccount] = useState('');
    const [tokenNumber, setTokenNumber] = useState(0);
  return (
    <div className={Style.transfer}>
        <div className={Style.transfer_box}>
            <div className={Style.transfer_box_left}>
                <h2>Token Analytics</h2>
                <div className={Style.transfer_box_left_box}>
                    <p>
                        Token Name
                        <span>{tokenName}</span>
                    </p>
                    <p>
                        Token Supply <span>{NoOfToken}</span>
                    </p>
                    <p>
                        Token Symbol {""}
                        <span className={Style.funToken}>
                            <Image src={funnyToken} alt="Symbol" width={70} height={70} objectFit="cover"/>
                        </span>
                    </p>
                    <p>
                        Token Left <span>{tokenOwnerBal}</span>
                    </p>
                </div>
            </div>

            <div className={Style.transfer_box_right}>
                <h2>Transfer Token</h2>
                <input placeholder="Address" type="text" onChange={(e) => setTransferAccount(e.target.value)} />
                <input placeholder="Token Number" type="text" min={1} onChange={(e) => setTokenNumber(e.target.value)} />
                <div className="Style.transfer_box_right_btn">
                    <button onClick={()=> transferToken(transferAccount, tokenNumber)}>Send Token</button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Transfer;
