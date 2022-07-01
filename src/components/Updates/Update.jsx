import React from 'react'
import { UpdatesData } from '../../Data/data'
import './Update.css'

const Update = () => {
  return (
      
    <div className='Updates'>
        {UpdatesData.map((update)=> {
            return(
                <div className='update'>
                    <img src={update.img} alt=""/>
                    <div className='not1'>
                        <div style={{marginBottom:'0.5rem'}}>
                            <span>{update.name}</span>
                            <span>{update.not1}</span>
                        </div>
                    <div>
                        <div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                </div>
            
            
        
    </div>
            )
    })}
        </div>
        )}

export default Update;