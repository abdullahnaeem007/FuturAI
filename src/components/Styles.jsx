import React from 'react'
import SingleItem from './SingleItem'

function Styles() {
    return (
        <div class='w-full h-fit flex lg:flex-col md:flex-row py-[3vh] flex-wrap sm:justify-start justify-center '>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
        </div>
    )
}

export default Styles