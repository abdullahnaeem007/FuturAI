import React, { useState } from 'react'
import { BsImages, BsCameraVideo } from 'react-icons/bs'
import { RxMagicWand, RxText } from 'react-icons/rx'
import {AiOutlineLoading} from 'react-icons/ai'

function GenerateInput(props) {

    function handleToggleImage() {
        if (props.GenerateType == 2) {
            props.setGenerateType(1)
        }
    }

    function handleToggleText() {
        if (props.GenerateType == 1) {
            props.setGenerateType(2)
        }
    }

    return (
        <div class='w-full h-[20vh] flex flex-col py-[2vh] md:pr-[1vh] justify-between '>
            <div class='w-full h-[46%] flex flex-row font-heading1 font-extrabold'>
                <button class={props.GenerateType == 1 ? 'w-full h-full bg-brandBlue rounded-s-full border-[2px] border-white text-white flex justify-center items-center' : 'w-full h-full flex justify-center items-center bg-white rounded-s-full border-[2px] border-white text-color2'} onClick={handleToggleImage}>
                    <BsImages class='md:mr-2 sm:w-fit w-0' />
                    <text class='lg:text-sm text-xs'>Generate Image</text>
                </button>
                {/* <button class={props.GenerateType == 2 ? 'w-full h-full bg-brandBlue border-[2px] border-white text-white flex justify-center items-center' : 'w-full h-full flex justify-center items-center bg-white border-[2px] border-white text-color2'} onClick={handleToggleText}>
                    <RxText class='md:mr-2 sm:w-fit w-0' />
                    <text class='lg:text-sm text-xs'>Generate Text</text>
                </button> */}
                {/* <button class={GenerateType == 2 ? 'w-full h-full flex justify-center items-center bg-color2 text-white border-[2px] border-white' : 'w-full h-full bg-white text-color2 flex justify-center items-center'} onClick={handleToggleVideo} >
                    <RxText class='md:mr-2 sm:w-fit w-0' />
                    <text class='lg:text-sm text-xs'>Generate Text</text>
                </button> */}
                <button class={'w-full h-full bg-white rounded-e-full flex justify-center items-center'} >
                    <BsCameraVideo class='md:mr-2 sm:w-fit w-0' />
                    <div class='flex flex-col justify-center'>
                        <text class='lg:text-sm text-xs'>Generate Website</text>
                        <text class='md:text-xs text-[1.2vh] text-gray-500'>Coming Soon</text>
                    </div>
                </button>
            </div>
            <div class='w-full h-[46%] flex flex-row font-heading1 justify-between rounded-full bg-white'>
                <input 
                onChange={(e) => {
                    props.setInput(e.target.value)
                }}
                type='text' placeholder={props.GenerateType===1?'Image Description':'Text Description'} class='w-[70%] px-[3vh] outline-none border-none rounded-full'></input>
                <button 
                onClick={props.onClick}
                class='h-full w-[30%] bg-color2 rounded-full text-white flex justify-center items-center border-[2px]'>
                    <RxMagicWand class='md:mr-2 mr-1' />
                    <text class='lg:text-sm text-xs'>Generate</text>
                    {props.isLoading ? <AiOutlineLoading class='animate-spin ml-1' /> : null}
                </button>
            </div>
        </div>
    )
}

export default GenerateInput