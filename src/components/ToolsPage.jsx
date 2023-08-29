import React, { useState } from 'react'
import GenerateInput from './GenerateInput'
import CanvasSizes from './CanvasSize'
import Category from './Category'
import Styles from './Styles'
import CanvasResult from './CanvasResult'
import Header from './Header'
import axios from 'axios'

export default function ToolsPage() {

    const [CanvasSize, setCanvasSize] = useState(1)
    const [img, setImg] = useState(null)
    const [OutputText,setOutputText]=useState(null)
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [GenerateType,setGenerateType]=useState(1)
    const [StyleType,setStyleType]=useState({index:1,text:'anime'})

    const [toolcheck,settoolcheck]=useState(true)
 

    function GetInputType()
    {
        if(GenerateType==1)
        {
            getImage()
        }
        else if(GenerateType==2)
        {
            getText()
        }
    }

    const getText=async()=>
    {
        setIsLoading(true)
        const devURL='https://marvelous-valkyrie-30f3e3.netlify.app/ai/prompt'
        var FinalInput='your name is futureAI bot and you help people solve queries using futuristic mindset. '+input
        console.log(FinalInput)
        const res = await fetch(devURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: FinalInput,
                })
            }
        )
        const data= await res.json()
        setOutputText(data.response)
        console.log(OutputText)
        setIsLoading(false)
    }


    const getImage = async () => {
        setIsLoading(true)
        const devURL = 'https://marvelous-valkyrie-30f3e3.netlify.app/ai/prompt'
        var FinalInput=input+' in the style of '+StyleType.text
        const res = await fetch(devURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: FinalInput,
                    type: StyleType.text
                })
            }
        )
        const data = await res.blob()
        const objectUrl = URL.createObjectURL(data)
        setImg(objectUrl)
        setIsLoading(false)
    }

    return (
        <>
            <Header bg={'bg-brandDarkBlue'} />
            <div class='w-full min-h-[100vh] bg-brandDarkBlue flex flex-col md:p-[14vh] p-[5vh] justify-evenly'>
                
                    <div class='md:w-1/2 w-full p-2 border rounded-3xl flex justify-center items-center border-gray-500'>
                        <text class='text-white text-xs'>
                            🌟 Revolutionizing Visual Creation with AI-Powered Technology!
                        </text>
                    </div>
                <div class='w-[100%]  flex flex-col justify-center text-white'>
                    <text class='font-heading1 font-extrabold text-[4.5vh] lg:text-6xl mt-12 lg:text-start text-center '>AI's boundless creativity transforms mere seconds into masterpieces of great artwork.</text>
                    <text class='text-white mt-5 lg:text-lg text-base lg:text-start text-center '>Unleash the extraordinary potential of the FuturAI Image Generator and create awe-inspiring masterpieces with just a click. Experience the magic of artistic innovation today!</text>
                </div>

                <div class='w-full min-h-[100vh] flex lg:flex-row flex-col justify-between items-start mt-36'>
                    <div class='h-full lg:w-[50%] w-[100%] flex flex-col justify-between '>
                        <text class='font-heading1 text-white text-lg font-extrabold'>Generate Image and Video</text>
                        <GenerateInput
                            setInput={setInput}
                            onClick={GetInputType}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            GenerateType={GenerateType}
                            setGenerateType={setGenerateType}
                        />
                        {
                            GenerateType==1?
                                <text class='font-heading1 text-white text-lg font-extrabold'>Category</text>
                            :
                                <></>
                        }
                        {
                            GenerateType==1?
                            <Category StyleType={StyleType} setStyleType={setStyleType}/> 
                            :
                                <></>
                        }
                        {
                            GenerateType==1?
                                <text class='font-heading1 text-white text-lg font-extrabold'>Canvas Size </text>
                            :
                                <></>
                        }
                        {
                            GenerateType==1?
                            <CanvasSizes setCanvasSize={setCanvasSize} />
                            :
                                <></>
                        }
                        
                    </div>

                    <div class='h-full lg:w-[45%] w-[100%] flex flex-col flex-wrap items-start lg:mt-0 mt-10'>
                        {
                                GenerateType==1?
                                <text class='font-heading1 text-white text-lg font-extrabold'>Image Results</text>
                                :
                                <text class='font-heading1 text-white text-lg font-extrabold'>Text Results</text>
                        }
                        <CanvasResult 
                            CanvasSize={CanvasSize}
                            img={img}
                            OutputText={OutputText}
                            GenerateType={GenerateType}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
