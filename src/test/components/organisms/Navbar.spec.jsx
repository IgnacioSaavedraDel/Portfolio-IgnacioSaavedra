import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../../components/organisms/Navbar';

describe('Navbar Component', () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it('renderiza el nombre de la marca', () => {
    expect(screen.getByText('del canto.')).toBeTruthy();
  });

  it('renderiza los links de navegación', () => {
    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Sobre mí')).toBeTruthy();
    expect(screen.getByText('Música')).toBeTruthy();
    expect(screen.getByText('Noticias')).toBeTruthy();
    expect(screen.getByText('Contacto')).toBeTruthy();
  });
});