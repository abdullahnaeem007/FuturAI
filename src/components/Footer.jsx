import React from 'react'
import { MessageCircle, Twitter, Send } from 'react-feather'

function Footer() {

    const contact = [
        {
            link: 'mailto:contact@futurai.com',
            title: 'Contact@futurai.com',
            content: 'Partnership@futurai.com',
            icon: <MessageCircle className='text-white/70' />
        },
        {
            link: 'https://t.me/Futur_Al',
            title: 'We are on Telegram',
            content: '@futurAI',
            icon: <Send className='text-white/70' />
        },
        {
            link: 'https://twitter.com/futur_ai_',
            title: 'Follow us on Twitter',
            content: '@futurAI',
            icon: <Twitter className='text-white/70' />
        }
    ]

    return (
        <div className='flex flex-col w-full bg-gradient-to-r from-[#6959F7] to-[#13075E] px-4 items-center justify-center md:px-12 lg:px-24 py-8'>
            <h1 className='bg-gradient-to-b from-[#6959F7] to-[#13075E] via-white/10 bg-clip-text text-transparent text-3xl md:text-9xl font-bold'>FUTURAI</h1>
            <div className='flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-16 md:space-y-0 mt-14'>
                {contact.map((item, index) => (
                    <a href={item.link} className='flex flex-col items-center justify-center'>
                        <div className='flex flex-row bg-white/10 rounded-full p-4'>
                            {item.icon}
                        </div>
                        <h1 className='text-white/70 text-lg mt-6'>{item.title}</h1>
                        <p className='text-white/70 text-sm'>{item.content}</p>
                    </a>
                ))}
            </div>
            <hr className='w-full border-white/10 my-8' />
            <p className='text-white/70 text-sm text-center'>Copyright © 2023 FuturAI. All Rights Reserved</p>
        </div>
    )
}

export default Footer