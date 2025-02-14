import { render, screen } from '@testing-library/react';
import AppRoutes from './routes';

test('Execução de teste', () => {
  render(<AppRoutes />);
  const linkElement = screen.getByText(/Buscar/i);
  expect(linkElement).toBeInTheDocument();
});
