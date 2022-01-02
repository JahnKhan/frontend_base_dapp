import React, { useEffect, useState, useRef } from "react";
import './Header.css'
import legendsLogo from './assets/header/legendscom.png'
import metamaskLogo from './assets/header/metamask.svg'
import { connect } from "../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/data/dataActions";


function Header() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);

    const [claimingNft,setClaimingNft] = useState(false);
    const [feedback,setfeedback] = useState("Maybe its your lucky day!");

    const claimNFTs=(_amount)=>{
      setClaimingNft(true);
      console.log("test")
      blockchain.smartContract.methods.mint(_amount).call({
        from : blockchain.account,
        value:blockchain.web3.utils.toWei(String(0.02*_amount),"ether"),
      }).once("error",(err)=>{
        console.log(err);
        setfeedback("Error");
        setClaimingNft(false);
      }).then((receipt) => {
        setfeedback("Success");
        setClaimingNft(false);
      });
    };

    const getMetaData=()=>{
        setClaimingNft(true);
        console.log("test")
        blockchain.smartContract.methods.totalSupply({
            from : blockchain.account
          }).call().once("error",(err)=>{
          console.log(err);
          setfeedback("Error");
          setClaimingNft(false);
        }).then((receipt) => {
          setfeedback("Success");
          setClaimingNft(false);
        });
      };


    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    }, [blockchain.smartContract, dispatch]);
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={legendsLogo} className='legendsLogo' alt=''></img>
            </div>
            <div>
            <div className='headerItems'>
                <p>About</p>
                <p>NFTs</p>
                <p>Team</p>
            </div>
            </div>
            {blockchain.account === "" || blockchain.smartContract === null ? (
                <div className='buttonContainerHeader'>
                    <button className='buttonConnected'
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getMetaData();
                        }}>
                        Connect Wallet
                    </button>
                    
                <img src={metamaskLogo} className='metamaskLogo' alt=''></img>
            
                </div>
            ) : (<div className='buttonContainerHeader'>
                <button className='buttonConnected' onClick={(e) => {
                            getMetaData();
                           
                        }}>
                   <p> CONNECTED</p>

                </button>
                
                <img src={metamaskLogo} className='metamaskLogo' alt=''></img>
          
               
            </div>
            
            )}
            
        </div>
    )
}

export default Header
