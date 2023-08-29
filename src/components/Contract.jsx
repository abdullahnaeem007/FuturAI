import React from 'react'
import { btnStyle, headingStyle } from '../assets/styles'

function Contract() {
    const [token, setToken] = React.useState('0xa33f6522710f6db31ceb2cc4ed02ab78324a2a42')
    const copyToken = () => {
        navigator.clipboard.writeText(token)
        setToken('Copied! 🎊 ')
        setTimeout(() => {
            setToken('0xa33f6522710f6db31ceb2cc4ed02ab78324a2a42')
        }, 2000)
    }
    return (
        <div className='flex flex-col w-full mt-24 mb-24 items-center justify-center bg-brandDarkBlue space-y-8 h-full px-4'>
            <h1 className={`text-brandBlue text-center ${headingStyle}`}>Contract</h1>
            <button
                onClick={copyToken}
            className={`flex transition-all w-full md:w-2/3 lg:w-1/3 ease-linear flex-row items-center justify-center text-sm border border-dashed border-text ${btnStyle} h-12 hover:bg-brandBlue/40`}>
                {token}
            </button>
            <p className='text-white text-sm text-center'>Click to copy</p>
        </div>
    )
}

export default Contract