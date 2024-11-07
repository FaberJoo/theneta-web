import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders text content', async () => {
    render(<App />);
    const element = await screen.findByText('Theneta');
    expect(element).toBeInTheDocument();
  });
});
