/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { ContactFormType } from '@/types/types'

export const EmailTemplate: React.FC<Readonly<ContactFormType>> = ({
  name, email, message
}) => (
  <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
    <header>
      <a href="#">
        <img className="w-auto h-7 sm:h-8" src="https://cgcapps-api.vercel.app/cgc-logo.png" alt="CGC Logo" />
      </a>
    </header>

    <main className="mt-8">
      <h2 className="text-gray-700 dark:text-gray-200">Hi Carlos,</h2>

      <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
        You have received a new message from our contact form from <span className="font-semibold ">{name}</span>:
      </p>

      <p className="my-4 leading-loose text-gray-600 dark:text-gray-300 text-pretty">
        <span className="text-xl text-bold pe-2">&quot;</span>
        {message}
        <span className="text-xl text-bold ps-2">&quot;</span>
      </p>

      <div>
        <a href={`mailto:${email}`} className="inline-flex items-center text-blue-600 underline dark:text-blue-400 gap-x-2 underline-offset-4">
          <span>Please respond to the sender at {email}</span>
        </a>
      </div>

      <p className="mt-8 text-gray-600 dark:text-gray-300">
        <hr />
        CGCAPPS &copy;
      </p>
    </main>
  </section>
)
