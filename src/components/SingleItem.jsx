import React, { useEffect, useState } from 'react'
import pic from '../assets/logo.png'

function SingleItem(props) {

    function TypeOfStyle()
    {
        if(props.description=='Anime')
        {
            var obj={index:1,text:'Anime'}
            props.setStyleType(obj)
        }
        else if(props.description=='Neon')
        {
            var obj={index:2,text:'Neon'}
            props.setStyleType(obj)
        }
        else if(props.description=='Cyberpunk')
        {
            var obj={index:3,text:'Cyberpunk'}
            props.setStyleType(obj)
        }
    }

    const [desc,setdesc]=useState('')
    return (
        <button class={((props.description=='Anime' && props.StyleType.index==1) || (props.description=='Neon' && props.StyleType.index==2) || (props.description=='Cyberpunk' && props.StyleType.index==3) )? 'w-[17vh] h-[14vh] bg-brandDarkBlue rounded-lg mr-[1.3vh] mb-[1.3vh] border-[4px] border-white' : 'w-[17vh] h-[14vh] bg-brandDarkBlue rounded-lg mr-[1.3vh] mb-[1.3vh] border-[1.5px] border-white/50'} onClick={TypeOfStyle}>
            <div class='w-full h-[77%] overflow-hidden rounded-t-lg' >
                <img src={pic} />
            </div>
            <div class='w-full h-[23%] bg-color2 rounded-b-lg flex justify-center items-center'>
                <text class='text-white text-xs'>{props.description}</text>
            </div>
        </button>
    )
}

export default SingleItem