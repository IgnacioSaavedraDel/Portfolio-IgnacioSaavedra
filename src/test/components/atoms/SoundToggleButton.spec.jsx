import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SoundToggleButton from '../../../components/atoms/SoundToggleButton';

describe('SoundToggleButton Component', () => {

  it('renderiza el botón correctamente', () => {
    render(<SoundToggleButton soundOn={false} onToggle={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('llama a la función onToggle cuando se hace clic', () => {
    const onToggleMock = jasmine.createSpy('onToggle');
    render(<SoundToggleButton soundOn={false} onToggle={onToggleMock} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(onToggleMock).toHaveBeenCalled();
  });
});