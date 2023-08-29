import React from 'react'
import SingleItem from './SingleItem'

function Category(props) {
    return (
        <div class='w-full h-fit flex flex-row flex-wrap py-[3vh] sm:justify-start justify-center '>
            <SingleItem description={'Anime'} StyleType={props.StyleType} setStyleType={props.setStyleType}/>
            <SingleItem description={'Neon'} StyleType={props.StyleType} setStyleType={props.setStyleType}/>
            <SingleItem description={'Cyberpunk'} StyleType={props.StyleType} setStyleType={props.setStyleType}/>
            {/* 
            <SingleItem />
            <SingleItem />
            <SingleItem /> */}
        </div>
    )
}

export default Category