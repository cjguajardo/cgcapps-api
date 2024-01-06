
import ContactFormAdapter from '@/adapters/contact-form-adapter'
import { sendMailFromContactForm } from '@/services/email-service'

export async function POST (request: Request) {
  try {
    const body = await request.json()
    try {
      const adapter = new ContactFormAdapter()
      const contactFormData = adapter.extractData(body)
      if (contactFormData.isValid === false) {
        return Response.json({ error: contactFormData.reasons })
      }
      const data = await sendMailFromContactForm(contactFormData)

      return Response.json(data)
    } catch (e: unknown) {
      const error = e as Error
      console.log({ error: error.message })
      return Response.json({ error: error.message })
    }
  } catch (e: unknown) {
    const error = e as Error
    console.log({ error: error.message })
    return Response.json({ error: 'Invalid request' })
  }
}
