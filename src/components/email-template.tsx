import * as React from 'react'
import { ContactFormType } from '@/types/types'
import CGCLogo from '@/assets/images/cgc-logo.png'
import Image from 'next/image'

export const EmailTemplate: React.FC<Readonly<ContactFormType>> = ({
  name, email, message
}) => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div className='my-12 w-[80%] md:w-[60%]'>
      <div className='w-full flex flex-col items-center border rounded-md p-4 bg-slate-900'>
        <Image src={CGCLogo} alt="CGC Logo" className="w-24 h-12" />
        <h1 className="text-2xl">Hey!, <span className="font-bold">{name}</span> wants to talk</h1>
        <p className="mt-6">{message}</p>
        <p className="mt-6">Email: {email}</p>
      </div>
    </div>
  </div>
)
