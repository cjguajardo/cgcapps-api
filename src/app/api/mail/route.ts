
import ContactFormAdapter from '@/adapters/contact-form-adapter'
import { sendMailFromContactForm } from '@/services/email-service'

export async function POST (request: Request) {
  const body = await request.json()
  const adapter = new ContactFormAdapter()
  try {
    const contactFormData = adapter.extractData(body)
    console.log({ contactFormData })
    if (contactFormData.isValid === false) {
      return Response.json({ error: contactFormData.reasons })
    }
    const data = await sendMailFromContactForm(contactFormData)

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
