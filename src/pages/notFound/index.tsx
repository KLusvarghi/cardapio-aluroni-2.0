import styles from './NotFound.module.scss';
import {ReactComponent as NotFoundImg} from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';
// importamos o useNavigate
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  // criamos uma variavel e atribuimos ela o 'useNavigate' que funciona como uma função
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        {/* como ele funciona como o sistemas de pilha, basta colocar '-1' para que ele volta para a página anterior */}
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImg/>
    </div>
  );
}