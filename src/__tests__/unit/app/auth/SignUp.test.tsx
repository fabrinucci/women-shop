import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SignUp from '@/app/auth/registrarse/page';

describe('SignUp', () => {
  test('Should display all inputs and buttons', () => {
    render(<SignUp />);

    expect(
      screen.getByRole('heading', { name: /registrarse/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^contraseña$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/repetir contraseña/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /registrarse/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /ingresar con cuenta existente/i }),
    ).toHaveAttribute('href', '/auth/ingresar');
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
