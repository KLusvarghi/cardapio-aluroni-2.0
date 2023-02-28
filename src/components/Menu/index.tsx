import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  // criando um array de objetos com as rotas, contendo o 'label' (nome a ser exibido) e o 'to' o path do caminho que será destinado
  // assim, ele irá percorrer o arry e exibir cada "li" contendo o label e se clicar nela, será redirecionado a outro componente do site
  const rotas = [
    {
      label: 'Inicio',
      to: '/'
    },
    {
      label: 'Cardapio',
      to: '/cardapio'
    },
    {
      label: 'Sobre',
      to: '/sobre'
    },
    // {
    //   label: 'Teste',
    //   to: '/teste' 
    // }
  ];

  return (
    <nav className={styles.menu}>
      <Logo />
      {/* criando uma navegação, um tipo de navbar */}
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}> {rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}