import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Login from '@/app/auth/ingresar/page';

describe('Login', () => {
  test('Should display all inputs and buttons', () => {
    render(<Login />);

    expect(
      screen.getByRole('heading', { name: /ingresar/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /ingresar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /crear una nueva cuenta/i }),
    ).toHaveAttribute('href', '/auth/registrarse');
  });

  // test('Should complete form correctly', () => {
  //   render(<Login />);

  //   const email = screen.getByLabelText(/correo electrónico/i);
  //   const password = screen.getByLabelText(/contraseña/i);

  //   fireEvent.input(email, 'test@email.com');
  //   fireEvent.input(password, '123456');

  //   expect(email).toHaveValue('test@email.com');
  //   expect(password).toHaveValue('123456');
  // });
});
