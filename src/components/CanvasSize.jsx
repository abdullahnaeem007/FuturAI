import React from 'react'
import { BsImage } from 'react-icons/bs'

function CanvasSizes(props) {

    function HandleCanvasSizeOne() {
        props.setCanvasSize(1)
    }

    return (
        <div class='w-full h-fit flex flex-row py-[3vh] items-end md:justify-start justify-center flex-wrap space-x-5 space-y-5 '>
            <div onClick={HandleCanvasSizeOne} class='w-[128px] h-[128px] cursor-pointer bg-black rounded-lg border-[1.5px] border-color2 flex justify-center items-center'>
                <div class='w-1/2 h-1/2 flex flex-col text-gray-400 items-center justify-evenly'>
                    <BsImage />
                    <text>512x512</text>
                </div>
            </div>
        </div>
    )
}

export default CanvasSizes