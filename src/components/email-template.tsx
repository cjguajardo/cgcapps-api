import * as React from 'react';
import { ContactFormType } from '@/types/types';

export const EmailTemplate: React.FC<Readonly<ContactFormType>> = ( {
  name, email, message
} ) => (
  <div>
    <h1>{name} wants to talk</h1>
    <p>Message: {message}</p>
    <p>Email: {email}</p>
  </div>
);
