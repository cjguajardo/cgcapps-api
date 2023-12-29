import { ContactFormType } from '@/types/types.d';

class ContactFormAdapter {
  public extractData( data: any ): ContactFormType {
    const { name, email, message } = data;
    let isValid = true

    if ( !name || !email || !message ) {
      isValid = false;
    }

    if ( !name || name.length < 3 ) {
      isValid = false;
    }

    // check if email is valid
    if ( email.match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ) === null ) {
      isValid = false;
    }

    // check if message is valid
    if ( !message || message.length < 10 ) {
      isValid = false;
    }

    return {
      name: name,
      email: email,
      message: message,
      isValid: isValid,
    };
  }
}

export default ContactFormAdapter;