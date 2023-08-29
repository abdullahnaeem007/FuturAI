import React from 'react'
import { headingStyle, textStyle } from '../assets/styles';

function Use() {
    const points = [
        {
            step: "Sign Up and Login:",
            description: "Visit our website and create your FuturAI account by providing the required information. Once registered, log in to access the platform and begin your AI-powered journey."
        },
        {
            step: "Explore the Features:",
            description: "Take a moment to familiarize yourself with the different features available on FuturAI. These include:\n- Text-to-Text Generation: Ask questions and receive instant responses on various topics.\n- Text-to-Image Generation: Generate stunning images based on your provided prompts.\n- Text-to-Video Creation: Transform text prompts into engaging and dynamic videos.\n- Text-to-Website Development: Create personalized WordPress websites using text input.\n- FuturAI Bot for Telegram: Interact with FuturAI and access its features directly from Telegram."
        },
        {
            step: "Choose a Feature:",
            description: "Select the feature you want to use based on your specific needs. Whether you need answers, images, videos, websites, or seamless Telegram integration, FuturAI has you covered."
        },
        {
            step: "Input your Prompt:",
            description: "For text-based features (text-to-text generation, text-to-image generation, text-to-video creation, and text-to-website development), provide a clear and concise prompt that describes your desired output. Be as specific as possible to achieve accurate and satisfying results."
        },
        {
            step: "Review and Refine:",
            description: "Once you receive the generated output, take a moment to review it. If needed, you can refine your prompt or make adjustments to ensure it meets your expectations."
        },
        {
            step: "Engage and Interact:",
            description: "For the FuturAI Bot on Telegram, simply send commands and prompts through the Telegram messaging app. The bot will respond accordingly and provide you with the requested information, images, videos, or websites."
        },
        {
            step: "Track Your Progress:",
            description: "Stay updated on your engagement and progress within the FuturAI platform. Utilize your personalized dashboard to monitor your activity, earnings (if applicable), and overall usage statistics."
        },
        {
            step: "Provide Feedback:",
            description: "We value your feedback and input! If you have any suggestions, encounter any issues, or want to share your experience with FuturAI, please don't hesitate to provide feedback. Your insights help us improve and enhance the platform."
        },
        {
            step: "Stay Connected:",
            description: "Join our community and stay connected with FuturAI. Follow our social media channels, subscribe to newsletters, and engage with fellow users. We encourage you to share your experiences and discoveries with others."
        },
        {
            step: "Embrace the Future:",
            description: "With FuturAI at your fingertips, unlock a world of possibilities and embrace the power of AI technology. Let FuturAI fuel your creativity, streamline your productivity, and make complex tasks simpler than ever before."
        }
    ];

    return (
        <div id='use' className='flex flex-col items-center justify-center w-full mt-24 min-h-screen'>
            <div className='flex flex-col items-center justify-center w-full max-w-4xl px-4 py-8 space-y-4'>
                <h1 className={`${headingStyle} text-brandBlue uppercase tracking-wider`}>How to Use FuturAI</h1>
                <p className={`${textStyle} text-center`}>
                    Welcome to FuturAI, the advanced AI platform designed to enhance your productivity and creativity. Here's a step-by-step guide on how to make the most of FuturAI's powerful features:
                </p>
                <div className='flex flex-col items-center justify-center w-full max-w-4xl px-4 py-8 space-y-4'>
                    {points.map((point, index) => (
                        <div key={index} className='flex space-x-12 flex-row items-center justify-center w-full max-w-4xl px-4 py-8'>
                            <div className='flex flex-col items-center justify-center w-10 h-10 p-4 bg-brandBlue rounded-full'>
                                <h1 className='text-2xl font-bold text-white'>{index + 1}</h1>
                            </div>
                            <div className='flex flex-col space-y-4 w-full h-full'>
                                <h1 className='text-2xl font-bold text-white'>{point.step}</h1>
                                <p className={`${textStyle}`}>{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className={`${textStyle} text-center`}>
                    Start your FuturAI journey today and experience the limitless potential of AI technology. Get ready to explore, create, and transform your ideas into reality!
                </p>
            </div>
        </div>
    )
}

export default Use