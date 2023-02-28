import cardapio from '../data/cardapio.json';
import styles from './inicio.module.scss';

export default function Inicio() {
  let pratosRecomendado = [...cardapio];
  // ele basicamente faz um sort dentro de 'pratosRecomendado' randomicamente, e em seguida ele da um splice pegando os 3 primeiros itens que a gente quer que seja recomendado
  pratosRecomendado = pratosRecomendado.sort(() => 0.5 - Math.random()).splice(0,3);
  return (
    <section>
      <h3 className={styles.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendado.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}