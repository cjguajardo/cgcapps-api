
import ContactFormAdapter from '@/adapters/contact-form-adapter'
import { sendMailFromContactForm } from '@/services/email-service'
import { getOrigins } from "@/services/supabase"

export async function POST (request: Request) {
  const body = await request.json()
  const adapter = new ContactFormAdapter()
  try {
    const contactFormData = adapter.extractData(body)
    console.log({ contactFormData })
    if (contactFormData.isValid === false) {
      return Response.json({ error: 'Invalid data' })
    }
    const origins = await getOrigins("/mail")
    const data = await sendMailFromContactForm(contactFormData)

    return Response.json(data, {
      headers: {
        'cache-control': 's-maxage=1, stale-while-revalidate',
        'Access-Control-Allow-Origin': origins.join(', '),
      }
    })
  } catch (error) {
    return Response.json({ error })
  }
}
