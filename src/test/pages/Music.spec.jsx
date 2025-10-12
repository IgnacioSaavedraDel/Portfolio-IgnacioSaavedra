import React from 'react';
import { render, screen } from '@testing-library/react';
import Music from '../../pages/Music';

jest.mock('../../components/molecules/ProjectsGrid', () => {
    return function DummyProjectsGrid() {
        return <div data-testid="projects-grid-mock"></div>;
    };
});

describe('Music Page', () => {

    it('renderiza el título de la página', () => {
        render(<Music />);
        const title = screen.getByText('Proyectos Musicales');
        expect(title).toBeTruthy();
    });
});