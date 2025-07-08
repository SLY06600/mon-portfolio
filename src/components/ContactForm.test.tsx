import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import { vi } from 'vitest';

// Mock global fetch
global.fetch = vi.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders contact form', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/nom/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument();
  });

  test('allows user to fill in and submit form', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/nom/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/message/i), { target: { value: 'Hello there!' } });

    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }));

    await waitFor(() => {
      expect(screen.getByText(/message envoyé avec succès/i)).toBeInTheDocument();
    });

    // Vérifier que tous les champs sont réinitialisés
    expect(screen.getByPlaceholderText(/nom/i)).toHaveValue('');
    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('');
    expect(screen.getByPlaceholderText(/message/i)).toHaveValue('');
  });

  test('shows error message if API call fails', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText(/nom/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/message/i), { target: { value: 'Fail test' } });

    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }));

    await waitFor(() => {
      expect(screen.getByText(/erreur/i)).toBeInTheDocument();
    });
  });

  test('disables submit button during sending', async () => {
    let resolveFetch: (value?: unknown) => void;

    (global.fetch as ReturnType<typeof vi.fn>).mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve;
        })
    );

    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText(/nom/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/message/i), { target: { value: 'Disable test' } });

    const submitButton = screen.getByRole('button', { name: /envoyer/i });
    fireEvent.click(submitButton);

    // Le bouton doit être désactivé pendant l'envoi
    expect(submitButton).toBeDisabled();

    // Simule la réponse fetch résolue
    resolveFetch!({ ok: true, json: async () => ({}) });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });
});
