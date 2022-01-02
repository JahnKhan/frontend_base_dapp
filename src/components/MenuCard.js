import React from 'react'
import first from './assets/header/first.gif'
import scrollIcon from './assets/header/scrolldown.png'
import './MenuCard.css'

function menuCard() {
    return (
        <div className='menuCard'>
            <div className='titleContainer'>
                <p>
                   COMMUNITY LEGENDS
                </p>
            </div>

        
        <div className='buttonPictureContainer'>
            <button className='buttonBuy'>
            Buy Now 0,1 ETH
            </button>
            <button className='buttonBuy'>
            Buy Now 0,1 ETH
            </button>
            <button className='buttonBuy'>
            Buy Now 0,1 ETH
            </button>
            <img src={first}>
            </img>
        </div>
        <div className='buttonopeseaContainer'>
        <button className='openseaButton'>
            VIEW ON OPENSEA
        </button>
        <button className='etherescanButton'>
            ETHERSCAN
        </button>
        </div>
        <div className='infoTitle'>
        Contract not deployed to current network please change network in MetaMask
        </div>
        <div className='scrollDownContainer'>
            <div>
            <img src={scrollIcon}>
            </img>
            </div>
        
        </div>
        </div>
    )
}

export default menuCard
