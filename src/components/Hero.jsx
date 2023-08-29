import React from 'react'
import { btnStyle, headingStyle, textStyle } from '../assets/styles'
import { ArrowRightCircle } from 'react-feather'

function Hero() {
    return (
        <div className='flex flex-col w-full md:w-8/12 lg:w-6/12 items-center justify-center space-y-8 h-full px-4'>
            <h1 className={`text-white text-center ${headingStyle}`}>Generate the Future: Empowering Innovation and Possibility with FuturAI!</h1>
            <p className={`${textStyle} text-center`}>Step into a realm where imagination meets technology. FuturAI empowers you to explore the limitless possibilities of AI, from generating stunning visuals to answering your burning questions. Embrace the future of innovation and unlock your full potential.</p>
            <a 
            href={'/tools'}
            className={`flex flex-row items-center justify-center bg-brandBlue ${btnStyle} h-12 hover:bg-brandBlue/40`}>
                Start Generating
                <ArrowRightCircle className='inline-block ml-2' />
            </a>
        </div>
    )
}

export default Hero