import React from 'react';
import { render, screen } from '@testing-library/react';
import News from '../../pages/News';

jest.mock('../../components/molecules/ProjectsGrid', () => {
    return function DummyProjectsGrid() {
        return <div data-testid="projects-grid-mock"></div>;
    };
});

describe('News Page', () => {

    it('renderiza el título de la página', () => {
        render(<News />);
        const title = screen.getByText('Proyectos Musicales');
        expect(title).toBeTruthy();
    });
});