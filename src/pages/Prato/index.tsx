import styles from './Prato.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
// importando o cadapio apenas para nos auxiliar na tipagem
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/notFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato(){
  // console.log (useParams()); // me retorna o id
  const navigate = useNavigate();
  const {id} = useParams(); // pegando o id do prato que foi passado como parametro pelo useNavigate lá em 'inicio'

  // como o erro de inserir 'prato/1' e ele não encontrar o prato, precisamos fazer dessa maneira:

  // sendo prato o item em que o id de um dos pratos que vem lá de 'cardapio'seja igual ao id recebido pelo useParams
  const prato = cardapio.find(item => item.id === Number(id)); 
  
  // e caso "prato" seja null, ele irá navegar para a página de notFound
  if(!prato){
    // poderiamos usa o 'NAVIGATE' e redirecionar para lá, porem não temos um path especifico para o "notFound", fazendo dessa maneira então
    return <NotFound/>;
  }
  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao/>}>
        <Route index element={
          <>
            <button 
              className={styles.voltar}
              onClick={() => navigate(-1)}
            >
              {'<Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>
                {prato.title}
              </h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__description}>
                  {prato.description}
                </p>
                <TagsPrato {...prato} />
              </div>
            </section>
          </>
        }/>
      </Route>
    </Routes>
  );
}