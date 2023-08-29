import React from 'react'
import { headingStyle } from '../assets/styles'

function Roadmap() {

    const data = [
        {
            phase: "Phase 1: Research and Development",
            "tasks": [
                "Conduct extensive research on natural language processing, computer vision, and machine learning technologies.",
                "Build a team of AI experts, developers, and researchers.",
                "Define the scope and objectives of the FuturAI project.",
                "Develop a robust infrastructure to support the various features and functionalities of FuturAI."
            ]
        },
        {
            phase: "Phase 2: Feature Development",
            tasks: [
                "Text-to-Text Generation:\n Design and develop a text-to-text generation model capable of answering a wide range of questions accurately and efficiently.\n- Train the model using large-scale datasets and fine-tune it for optimal performance.",
                "Text-to-Image Generation:\n Build a text-to-image generation system that can generate high-quality images based on user prompts.\n- Train the model using diverse datasets and refine the output to meet user expectations.",
                "Text-to-Video Creation:\n Develop a text-to-video creation feature that transforms text prompts into engaging and dynamic videos.\n- Integrate computer vision and video processing algorithms to enhance the quality and visual appeal of the generated videos.",
                "Text-to-Website Development:\n Create a text-to-website development tool that generates WordPress websites based on user input and specifications.\n- Implement a user-friendly interface to allow customization of website elements such as themes, layouts, and content.",
                "FuturAI Bot for Telegram:\n Build a Telegram Bot that enables users to interact with FuturAI and access its features directly from the Telegram messaging platform.\n Implement a seamless and intuitive command system to provide users with a smooth experience."
            ]
        },
        {
            phase: "Phase 3: Testing and Optimization",
            tasks: [
                "Conduct extensive testing of each feature to ensure accuracy, reliability, and user-friendliness.",
                "Gather user feedback and iterate on the features based on user input.",
                "Optimize the performance and efficiency of the AI models to enhance response times and overall system performance."
            ]
        },
        {
            phase: "Phase 4: Platform Integration and Deployment",
            tasks: [
                "Integrate all developed features into a unified FuturAI platform.",
                "Implement a scalable and secure infrastructure to support the growing user base.",
                "Conduct rigorous security audits and implement measures to protect user data and ensure privacy."
            ]
        },
        {
            phase: "Phase 5: Launch and User Acquisition",
            tasks: [
                "Develop a comprehensive marketing strategy to promote FuturAI and attract users.",
                "Launch the platform to the public and offer a user-friendly onboarding process.",
                "Provide support and documentation to assist users in getting the most out of FuturAI."
            ]
        },
        {
            phase: "Phase 6: Continuous Improvement and Expansion",
            tasks: [
                "Continuously gather user feedback and analyze user behavior to identify areas for improvement.",
                "Regularly update and enhance the features of FuturAI based on user needs and emerging technologies.",
                "Explore opportunities for expanding FuturAI's capabilities and integrating with other platforms and technologies."
            ]
        }
    ]

    return (
        <div id='roadmap' className='flex flex-col min-h-screen bg-brandDarkBlue px-4 md:px-12 lg:px-24 relative'>
            <h1 className={`${headingStyle} text-brandBlue mb-24 text-center uppercase tracking-wider bg-brandDarkBlue relative z-50 flex flex-row items-center justify-center h-24`}>Roadmap for FuturAI Project</h1>
            <div className='flex flex-col w-full mt-8'>
                {data.map((phase, index) => (
                    <>
                        <div
                            className={`flex flex-row w-full mb-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            key={index}
                            style={{ position: 'relative' }}
                        >
                            <div className='flex flex-col w-full lg:w-2/5 px-6 py-6 bg-white/10 rounded-xl border border-white/20'>
                                <h2 className='text-brandBlue text-2xl font-bold'>{phase.phase}</h2>
                                {phase.tasks.map((task, index) => (
                                    <p className='text-text text-md mt-4' key={index}>{task}</p>
                                ))}
                            </div>
                            <div
                                style={{ position: 'absolute', top: '4%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                className='h-8 w-8 bg-brandBlue hidden lg:block rounded-full'
                            ></div>
                        </div>
                        {/* vertical bar after every card */}
                        {index !== data.length - 1 && (
                            <div className='absolute hidden lg:block top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-brandBlue/20'></div>
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Roadmap