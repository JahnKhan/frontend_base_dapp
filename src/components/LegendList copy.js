import React from 'react'
import CollectionCard from './CollectionCard'
import './LegendList.css'
const LegendList = ({ legendListData }) => {
    return (
        <div className='legendList'>
            {legendListData.map(legend => (
                <div>
                    <CollectionCard
                        key={legend.token_id}
                        id={legend.token_id}
                        name={legend.name}
                        traits={legend.traits}
                        image={legend.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default LegendList
