import React from 'react'
import weth from './assets/header/weth.svg'
import './CollectionCard.css'


function CollectionCard({ id, name, traits, image}) {
    return (
        <div className='collectionCard'>
            <img src={image} alt="" />
            <div className='details'>
                <div className='name'>{name}</div>
                <div className='id'>.#{id}</div>
                <div className='priceContainer'>
                    <img src={weth} className='wethImage' alt="" />
                    <div className='price'>{traits[0]?.value}</div>
                </div>
            </div>
            <div className='buttonContainer'>
                <button className='collectionButton'>
                  Get NFT Pack
                </button>
                </div>
        </div>
    )
}

export default CollectionCard
