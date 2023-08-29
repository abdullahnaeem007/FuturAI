import React from 'react'

function CanvasResult(props) {
    return (
        
            props.GenerateType==1?
            <div class='sm:w-[50vh] sm:h-[50vh] w-[100%] h-[50vh] my-[3vh] border-[1.5px] border-color2 bg-black rounded-lg flex justify-center items-center p-2'>
                {
                    props.CanvasSize == 1 ?
                        <div class='w-full h-full bg-color1 flex justify-center items-center'>
                            <img src={props.img} class='w-full h-full object-contain' />
                        </div>
                        :
                        [
                            props.CanvasSize == 2 ?
                                <div class='w-[70%] h-[100%] bg-color1 flex justify-center items-center'>
                                    <text class='text-gray-400 text-xs text-center'>Start Generating Images</text>
                                </div>
                                :
                                <div class='w-[100%] h-[70%] bg-color1 flex justify-center items-center'>
                                    <text class='text-gray-400 text-xs text-center'>Start Generating Images</text>
                                </div>
                        ]
                }

            </div>
            :
            <div class='w-[100%] min-h-[100vh] border-[1.5px] border-color2 bg-black rounded-lg my-[3vh] p-2 '>
                <div class='w-full min-h-[100vh] border-[1.5px] border-white bg-color1 p-4 text-white flex flex-row items-start'>
                    <text >{'>'}</text>
                    <div class='w-full h-full px-2'>
                        <text class='font-mono sm:text-lg text-base whitespace-pre-wrap'>{props.OutputText}</text>
                    </div>
                </div>
            </div>
        
    )
}

export default CanvasResult