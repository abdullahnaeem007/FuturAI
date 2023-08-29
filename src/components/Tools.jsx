import React from 'react'
import { headingStyle, textStyle } from '../assets/styles'

function Tools() {
    const tools = [
        {
            title: "FuturAI's text-to-text generation feature",
            content: "is designed to provide instant answers to any questions or queries you may have. Simply input your question, and our AI-powered system will generate a detailed and accurate response. Whether you need information on complex topics, assistance with problem-solving, or just a quick fact check, FuturAI has got you covered."
        },
        {
            title: "Text-to-Image Generation",
            content: "Unleash your creativity with our text-to-image generation capability. By providing a prompt, FuturAI can generate stunning, high-quality images that match your description. Whether you're an artist in need of inspiration or a designer looking for visual elements, FuturAI's image generation feature will bring your ideas to life."
        },
        {
            title: "Text-to-Video Creation",
            content: "Experience the magic of text-to-video creation with FuturAI. With a simple text prompt, our platform can transform your ideas into captivating videos. Whether you're a content creator, marketer, or simply want to share your stories in a visually engaging way, FuturAI's text-to-video feature is your ultimate tool for seamless video production."
        },
        {
            title: "Text-to-Website Development",
            content: "Launching a website has never been easier with FuturAI's text-to-website development. Simply provide the necessary details and specifications, and our platform will generate a fully functional WordPress website tailored to your requirements. Say goodbye to the complexities of coding and web design—FuturAI simplifies the process, making website development accessible to everyone."
        }
    ]

    return (
        <div id='tools' className='flex flex-col w-full items-center justify-center h-full px-4 py-12 space-y-16'>
            <h1 className={`${headingStyle} uppercase tracking-wider text-brandBlue`}>
                FuturAI
            </h1>
            <div className='flex flex-col w-full items-center space-y-16 h-full px-4'>
                {tools.map((tool, index) => {
                    return (
                        <div className='flex flex-row md:w-10/12 w-full lg:w-6/12 items-start space-x-6 h-full px-4' key={index}>
                            <div className='flex flex-row justify-center h-full items-start'>
                                <h1 className={`font-bold text-8xl uppercase tracking-wider bg-gradient-to-b from-white to-brandDarkBlue text-transparent bg-clip-text`}>
                                    {index + 1}
                                </h1>
                            </div>
                            <div className='flex flex-col justify-start h-full w-full space-y-2 px-4'>
                                <h1 className={`uppercase text-2xl font-bold tracking-wider text-white`}>
                                    {tool.title}
                                </h1>
                                <p className={textStyle}>
                                    {tool.content}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tools