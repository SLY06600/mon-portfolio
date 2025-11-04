import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Page from './page';

// Mock the data imports
vi.mock('../../../data/sampleJob', () => ({
  default: {
    title: 'Sample Job Title',
    description: 'Sample job description',
  },
}));

vi.mock('../../../data/annonceData', () => ({
  default: [
    {
      id: 'test-1',
      title: 'Test Job 1',
      description: 'Test description 1',
      category: 'emploi' as const,
      location: 'Test Location',
      datePosted: '2025-01-01',
      contact: { name: 'Test Company' },
    },
  ],
}));

vi.mock('../../../data/cvData', () => ({
  cvData: {
    personalInfo: { name: 'Test Candidate', title: 'Developer' },
    about: 'Test summary',
    technicalSkills: {
      languages: ['JavaScript', 'TypeScript'],
    },
    languages: ['Français'],
    contact: [{ text: 'test@example.com' }],
  },
}));

describe('CV/Cover Letter Generator Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders the page with initial elements', () => {
    render(<Page />);
    
    expect(screen.getByText(/Générateur CV \/ Lettre/i)).toBeInTheDocument();
    expect(screen.getByText(/Titre de l'offre/i)).toBeInTheDocument();
    expect(screen.getByText(/Description \/ Offre/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Générer/i })).toBeInTheDocument();
  });

  test('shows custom mode indicator when user edits job title', () => {
    const { container } = render(<Page />);
    
    // Get the title input by finding the input after the "Titre de l'offre" label
    const titleInput = container.querySelector('input') as HTMLInputElement;
    
    // Initially, custom mode indicator should not be visible
    expect(screen.queryByText(/Mode personnalisé/i)).not.toBeInTheDocument();
    
    // Edit the title
    fireEvent.change(titleInput, { target: { value: 'My Custom Job' } });
    
    // Custom mode indicator should now be visible
    expect(screen.getByText(/Mode personnalisé/i)).toBeInTheDocument();
  });

  test('shows custom mode indicator when user edits job description', () => {
    const { container } = render(<Page />);
    
    // Get the description textarea
    const descriptionTextarea = container.querySelector('textarea') as HTMLTextAreaElement;
    
    // Initially, custom mode indicator should not be visible
    expect(screen.queryByText(/Mode personnalisé/i)).not.toBeInTheDocument();
    
    // Edit the description
    fireEvent.change(descriptionTextarea, { target: { value: 'My custom job description' } });
    
    // Custom mode indicator should now be visible
    expect(screen.getByText(/Mode personnalisé/i)).toBeInTheDocument();
  });

  test('hides custom mode indicator when user selects a predefined announcement', () => {
    const { container } = render(<Page />);
    
    const titleInput = container.querySelector('input') as HTMLInputElement;
    const dropdown = container.querySelector('select') as HTMLSelectElement;
    
    // Edit to trigger custom mode
    fireEvent.change(titleInput, { target: { value: 'My Custom Job' } });
    expect(screen.getByText(/Mode personnalisé/i)).toBeInTheDocument();
    
    // Select a predefined announcement
    fireEvent.change(dropdown, { target: { value: '0' } });
    
    // Custom mode indicator should be hidden
    expect(screen.queryByText(/Mode personnalisé/i)).not.toBeInTheDocument();
  });

  test('resets custom mode when reset button is clicked', () => {
    const { container } = render(<Page />);
    
    const titleInput = container.querySelector('input') as HTMLInputElement;
    const resetButton = screen.getByRole('button', { name: /Réinitialiser/i });
    
    // Edit to trigger custom mode
    fireEvent.change(titleInput, { target: { value: 'My Custom Job' } });
    expect(screen.getByText(/Mode personnalisé/i)).toBeInTheDocument();
    
    // Click reset
    fireEvent.click(resetButton);
    
    // Custom mode indicator should be hidden
    expect(screen.queryByText(/Mode personnalisé/i)).not.toBeInTheDocument();
  });
});
