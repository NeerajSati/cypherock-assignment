import React from "react";
import "./mainpage.css";
import lock from "../../images/lock.svg";
import darkmode from "../../images/darkmode.svg";
import synchronized from "../../images/synchronized.svg";
import filter from "../../images/filter.svg";
import drop from "../../images/drop.svg";
import sort from "../../images/sort.svg";
import bitcoinLogo from "../../images/bitcoin.svg";
import etherLogo from "../../images/ether.svg";
import etherBlueLogo from "../../images/etherblue.svg";
import binanceLogo from "../../images/binance.svg";
import SingleTransaction from "../SingleTransaction/SingleTransaction";
function Mainpage() {
  return (
    <div className="mainpage">
      <div className="topbar">
        <div className="synchronized">
          <img src={synchronized} alt="synchronized"></img>
          Synchronized
        </div>
        <button className="topbarBtn">
          <img src={darkmode} alt="darkmode"></img>
        </button>
        <button className="topbarBtn">
          <img src={lock} alt="lock"></img>
        </button>
      </div>
      <div className="walletDetails">
        <h1 className="walletName">Wallet 1</h1>
        <button className="addCoin">+ Add Coin</button>
      </div>
      <div className="coinFiltersWrapper">
        <p className="coinCount">Total Coins-3</p>
        <div className="coinFilters">
        <div className="coinFilter">
          <img src={filter} alt="filter"></img><span className="filter">Year</span>
          <img src={drop} alt="drop"></img></div>
        <div className="coinFilter">
          <img src={sort} alt="sort"></img><span className="filter">A-Z</span>
          <img src={drop} alt="drop"></img></div>
        </div>
      </div>
      <SingleTransaction name="BITCOIN" val="BTC 0.0025600" amount="USD 0.5268" src={bitcoinLogo}/>
      <SingleTransaction name="ETHEREUM" val="ETH 0.0025600" amount="USD 0.5268" src={etherLogo} />
      <SingleTransaction name="BINANCE COIN" val="BTC 0.0025600" amount="USD 0.5268" src={binanceLogo}/>
      <SingleTransaction name="BITCOIN" val="BTC 0.0025600" amount="USD 0.5268" src={bitcoinLogo}/>
      <SingleTransaction name="ETHEREUM" val="ETH 0.0025600" amount="USD 0.5268" src={etherBlueLogo}/>
    </div>
  );
}

export default Mainpage;
