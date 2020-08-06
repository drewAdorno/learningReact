import React from 'react'
import { useState } from 'react'

const Tabs= ({tabs}) =>
{
    const [content, setContent]=useState('')
    const [hover, setHover]=useState(null)
    
    const showContent = (e,i) => 
    {
        setContent(tabs[i].content)
    }
      
    const hovered =(e,i) =>
    {
        setHover(i)
    }
    return (
        <div>
            {tabs.map( (tab, i) =>
                <h1 className={i == hover ? 'hovered':'labels'} onClick={ (e) => showContent(e,i)} onMouseEnter={ (e) => hovered(e,i)} onMouseLeave={ (e) => hovered(e,null)}>{tab.label}</h1>
            )}
            <p className='content'>{content}</p>
        </div>
        
    )
}
export default Tabs