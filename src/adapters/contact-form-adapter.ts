import { ContactFormType } from '@/types/types.d'

type reasonsType = {
  [key: string]: string
}

class ContactFormAdapter {
  public extractData (data: any): ContactFormType {
    const { name, email, message } = data
    let isValid = true
    const reasons: reasonsType = {} as reasonsType

    if (!name || !email || !message) {
      isValid = false
      reasons['missing'] = 'Missing data'
    }

    if (!name || name.length < 3) {
      isValid = false
      reasons['name'] = 'Name is too short'
    }

    // check if email is valid
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null) {
      isValid = false
      reasons['email'] = 'Email is not valid'
    }

    // check if message is valid
    if (!message || message.length < 10) {
      isValid = false
      reasons['message'] = 'Message is too short'
    }

    // capitalize first letter of name
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).tolowerCase()

    // clean message from html tags or scripts or other malicious code
    const cleanMessage = message.replace(/(<([^>]+)>)/gi, '')

    return {
      name: nameCapitalized,
      email: email,
      message: cleanMessage,
      isValid: isValid,
      reasons: reasons
    }
  }
}

export default ContactFormAdapter