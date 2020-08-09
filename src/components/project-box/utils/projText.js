import React, { useState } from 'react';
import './projText.css'

export default function ProjText(props) {

    const [animation,setAnimation] = useState(false)
    const [toggle,setToggle] = useState(true)

    return <div onClick={()=>{setAnimation(true); setToggle(!toggle); console.log(animation)}}>
            <div className='ani-text' animation={animation.toString()}
            style={{overflow:'hidden', cursor:'pointer'}}
            onAnimationEnd={()=>{setAnimation(false)}}
            >
                {toggle ? <p>{props.aboutProj}</p>:
                <ul>
                    {props.personal.map((item,ind)=>{return <li key={ind}>{item}</li>})}
                </ul>
                }
            </div>
        </div>
}