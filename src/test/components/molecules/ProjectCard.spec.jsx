import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../../../components/molecules/ProjectCard';

describe('ProjectCard Component', () => {

  const mockProject = {
    image: 'test.jpg',
    title: 'Proyecto Test',
    date: '2025',
    description: 'Descripción test',
    tags: ['React', 'Test'],
    projectUrl: 'https://ejemplo.com'
  };

  it('renderiza el título del proyecto', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Proyecto Test')).toBeTruthy();
  });

  it('renderiza la descripción del proyecto', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Descripción test')).toBeTruthy();
  });

  it('renderiza la fecha del proyecto', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('2025')).toBeTruthy();
  });

  it('renderiza la imagen del proyecto', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('test.jpg');
  });
  
  it('renderiza el botón de detalles', () => {
    render(<ProjectCard project={mockProject} />);
    const button = screen.getByText('Escuchar proyecto →');
    expect(button).toBeTruthy();
  });
});