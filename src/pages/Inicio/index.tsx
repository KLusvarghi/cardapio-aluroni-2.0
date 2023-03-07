import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
// importando ele par que seja possivel navegar entre as telas
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
  let pratosRecomendado = [...cardapio];
  // ele basicamente faz um sort dentro de 'pratosRecomendado' randomicamente, e em seguida ele da um splice pegando os 3 primeiros itens que a gente quer que seja recomendado
  pratosRecomendado = pratosRecomendado.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato){
    // console.log(prato);
    // sendo navegado para uma nova tela do prato em expecifico
    // podendo passar dois paramentro, que o outro deles é o state, e passando o objeto 'prato', sendo uma maneira de trafegar informações
    // sendo a url ao clicar no item: http://localhost:3000/prato/4 - '4' é o id do prato
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendado.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button 
              className={styles.recomendado__botao}
              // ao clicar no botão ele chama a função passando o item clicado
              // que são todas as informações sobre o prato
              onClick={() =>  redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Nossa cassa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua verdeiro, 23134 <br/><br/> Vila Sônia - PG
        </div>
      </div>
    </section>
  );
}