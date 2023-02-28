import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div>
        {
        /* para exibir os filhos de "RotaPadrão" qu esta sendo renderizado denro de "src > routes.js" utilizamos o "Outlet" que não é nada menos que um "children" */
        }
        <Outlet/>
      </div>
    </>
  );
}