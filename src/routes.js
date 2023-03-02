import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/notFound';
import Sobre from 'pages/Sobre';
// importando as coisas do Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    // aplicando a estilização que está em 'index.css', deixando todos os componentes em 100vh
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          {/* O 'Route' consegue ter 'children' dentro dele (Outlet) */}
          {/* Podendo colocar uma rota dentro de outra, que no caso, essas rotas dentro dela iram apenas possuir os mesmos itens de estilização e funionalidades que o 'PaginaPadrao' contem */}
          <Route path="/" element={<PaginaPadrao/>}>
            {/* sendo essas rotas relativas a sua rota pai, que no caso é o da linha de cima "/" */}

            {/* como eu não coloquei nenhum path nesse "Route" aqui de cima, ele irá ser o primeiro componente a ser renderizado junto com "PaginaPadrao" */}

            {/* Basicamnete, todos os components que serão renderizados que estão logo abaixo, terão o "header" que vem de "PaginaPadrao", e os que não estão, não terão, tendo apenas o navbar que está em "Menu"  */}

            <Route index element={<Inicio />} />
            {/* tendo que colocar "cardapio" sem o "/" por que se nãi ele nos dará erro, por que queremos que cardapio sejá relativo a "/" que renderiza a página de inicio.
            
            Porém só fazemos isso por que estamos colocando rota dentro de rota
            */}
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          {/* para qualquer rota diferente das outras, ele exibe essa rota */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
