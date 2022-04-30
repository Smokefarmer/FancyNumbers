import { useEffect, useState } from "react";
import {
  helloWorldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentWalletConnected,
} from "../util/interact.js";


  export const Services = (props) => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("0.5"); //default message
    const [newMessage, setNewMessage] = useState("");

    const onUpdatePressed = async () => {
      const { status } = "Bid confirmed";
      setStatus(status);
  };

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Fancy Numbers Pot</h2>
        </div>        
        <div id='auction'>
          <div>
                <h3>Current auction</h3>
          </div >
          <div id='number'>
            <img src="img/numbers/nine.jpg" alt="" />
          </div>
          <div id="bid">
            <div>
            <h3>Fancy Number 9 #345</h3>
            <p>Sale ends April 26, 2022 at 9:22pm CEST </p>
            <p>00 Hours 31 Minutes 40 Seconds</p>
            <p>Current bid: {message} ETH</p>
              <input
                type="text"
                placeholder="place a bid"
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              />
              <p id="status">{status}</p>
              <button className='btn btn-custom btn-lg' id="publish" onClick={onUpdatePressed}>Place bid</button>
            </div>
          </div>
        </div>
        <div id="dashboard_wrapper">
          <div id='dasboard'>
            <div className="my-8" >
                <h3>Current Pot: 100.00$</h3>
            </div >
            <svg viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0 67.5C27.8998 67.5 30.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                    <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="7.91244" y2="15" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4DFFDF" />
                        <stop offset="1" stop-color="#4DA1FF" />
                    </linearGradient>
                 </defs>
            </svg >
            <table className="mt-6  w-full text-gray-600" >
                <tbody>
                    <tr>
                        <td>NFTs sold at auction: 10</td>                      
                    </tr >
                </tbody >
            </table >
        </div >

        <div id='dasboard2'>
            <div className="my-8" >
                <h3>Current Pot: 100.00$</h3>
            </div >
            <svg viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0 67.5C27.8998 67.5 30.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                    <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="7.91244" y2="15" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4DFFDF" />
                        <stop offset="1" stop-color="#4DA1FF" />
                    </linearGradient>
                 </defs>
            </svg >
            <table className="mt-6  w-full text-gray-600" >
                <tbody>
                    <tr>
                        <td>NFTs sold at auction: 10</td>                      
                    </tr >
                </tbody >
            </table >
        </div >
        </div> 
      </div>
    </div>
  )
}
