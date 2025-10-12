import React from 'react';
import { render, screen } from '@testing-library/react';
import Music from '../../pages/Music';

// Mockeamos ProjectsGrid para aislar la prueba.
jest.mock('../../components/molecules/ProjectsGrid', () => {
    return function DummyProjectsGrid() {
        return <div data-testid="projects-grid-mock"></div>;
    };
});

describe('Music Page', () => {

    it('renderiza el título de la página de música', () => {
        render(<Music />);
        // Buscamos el texto del H1.
        const title = screen.getByText('Proyectos Musicales');
        expect(title).toBeTruthy();
    });

    it('renderiza el componente ProjectsGrid', () => {
        render(<Music />);
        // Verificamos que el componente mockeado esté presente.
        const projectsGrid = screen.getByTestId('projects-grid-mock');
        expect(projectsGrid).toBeTruthy();
    });
});