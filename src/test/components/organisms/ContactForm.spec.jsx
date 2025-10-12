import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../../../components/organisms/ContactForm';

describe('ContactForm Component', () => {

  it('renderiza los campos del formulario', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Tu Nombre')).toBeTruthy();
    expect(screen.getByPlaceholderText('Tu Correo')).toBeTruthy();
    expect(screen.getByText('Enviar Mensaje')).toBeTruthy();
  });

  it('permite escribir en el campo de correo', () => {
    render(<ContactForm />);
    const emailInput = screen.getByPlaceholderText('Tu Correo');
    fireEvent.change(emailInput, { target: { value: 'test@correo.com' } });
    expect(emailInput.value).toBe('test@correo.com');
  });
});