import React from 'react'
import { EmailTemplate } from '@/components/email-template'

const MailPage = () => {
  return (
    <div>
      <EmailTemplate email="email@email.com" name="carlos" message="this is a message" isValid />
    </div>
  )
}

export default MailPage