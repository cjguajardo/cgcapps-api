
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/email-template'
import { ContactFormType } from '@/types/types'

const resend = new Resend(process.env.RESEND_API_KEY)
export async function sendMailFromContactForm (contactFormData: ContactFormType): Promise<boolean> {
  try {
    const data = await resend.emails.send({
      from: `${contactFormData.name} <onboarding@resend.dev>`,
      to: ['cj.guajardo@cgcapps.cl', 'cj.guajardo@gmail.com'],
      subject: 'cgcapps.cl contact form',
      text: JSON.stringify(contactFormData),
      react: EmailTemplate(contactFormData),
    })
    console.log({ data })
    if (data !== null) {
      return true
    }
    return false
  } catch (e: unknown) {
    const error = e as Error
    console.log({ error: error.message })
    return false
  }
}