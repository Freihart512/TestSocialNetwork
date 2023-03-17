// importamos la funcion que vamos a testear
import { register } from '../src/componets/register';
import { registerWithEmail } from '../src/lib/authentication';
import { navigateTo } from '../src/router';

jest.mock('../src/lib/authentication', () => ({ registerWithEmail: () => Promise.resolve() }));
jest.mock('../src/router', () => ({ navigateTo: jest.fn() }));

describe('register', (done) => {
  it('si el usuario se registrò correctamente debe mandar llamar la funcion navigateTo con el parametro home', () => {
    document.body.appendChild(register());
    document.getElementById('btnregister').click();

    setTimeout(() => {
      expect(navigateTo).toHaveBeenCalledWith('/home');
      done();
    }, 0);
  });
});
