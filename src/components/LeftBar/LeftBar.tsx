import React from "react";
import "./leftbar.css";
function LeftBar() {
  return (
    <div className="leftbar">
      <div className="leftbarContent">
        <div className="leftbarItem">Portfolio</div>
        <div className="leftbarItem walletswrapper">
          Wallets
          <div className="wallets active">Wallet 1</div>
          <div className="wallets walletadd">+ add wallet</div>
        </div>
        <div className="leftbarItem">Last Transactions</div>
        <div className="leftbarItem">Tutorials</div>
        <div className="leftbarItem">Setting</div>
      </div>

      <div className="leftbarBtnDiv">
        <button className="leftbarBtn">Support</button>
      </div>
    </div>
  );
}

export default LeftBar;
