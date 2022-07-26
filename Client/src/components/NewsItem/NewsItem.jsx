import React from 'react'
import './newsItem.css'
// import WhatHappening from './WhatHappening'

export const NewsItem = ({ title, description, url, image ,author }) => {
    return (
        
      
            
            <div className='main'>
            <div className='news-logo'>
                <img className='news-img' src={image} alt={image} />

                </div>
                
                <div className="desc">
                <h3><a href={url}>{title}</a></h3>
                
                <p>{description}</p>
                <p>{author}</p>
              
            </div>
            </div>
  
        
    )
}

// export default NewsItem
