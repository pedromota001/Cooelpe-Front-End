import './App.css';
import Banner from './Banner';
import Cabecalho from './Cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Descritivo from './Descritivo';


function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Banner/>
      <Descritivo
        id = "quem-somos"
        title = "Quem somos"
        background = '#D0D7DC'
        text = 'A COOELPE é uma empresa de Energia Renovável que produz a sua própria energia por meio de painéis solares modernos montados em uma grande estrutura. Isso permite que os nossos clientes tenham custo da sua energia reduzido em até 20% (vinte por cento), gerando assim uma redução na conta de energia da Celpe, sem que haja a exigência de um investimento, telhado ou área.'
      />
      <Descritivo
        id = "nossos-objetivos"
        title = "Nossos objetivos"
        background = '#E7E0E0'
        text = 'Na COOELPE, acreditamos que a inovação e a sustentabilidade devem andar juntas. Nosso objetivo é transformar a forma como você consome energia, oferecendo soluções solares eficientes e acessíveis que reduzem significativamente os custos na sua conta de luz. Com tecnologia de ponta e um compromisso com a excelência, ajudamos residências e empresas a gerar sua própria energia limpa, garantindo economia e um futuro mais sustentável. Invista no sol, economize mais e faça parte da revolução energética com a gente!'
      />
    </div>
  );
}

export default App;
