import React, { useState } from 'react';

export default function ProjText(props) {

    return <div>
            <div className='ani-text'>
                <p>{props.aboutProj}</p>
                <ul>
                    {props.personal.map((item,ind)=>{return <li key={ind}>{item}</li>})}
                </ul>
            </div>
        </div>
}