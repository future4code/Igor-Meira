import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57https://media-exp1.licdn.com/dms/image/C5603AQEfc1y9OpeknQ/profile-displayphoto-shrink_800_800/0/1597787924505?e=1620864000&v=beta&t=I7L7eaoXCHQfpZLbtneFa1wf0XFlRV6cFFqrsk6dU3I846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Igor Meira do Nascimento Silva" 
          descricao="Olá, meu nome é Igor e estou na jornada do Desenvolvimento WEB. Desejo me tornar um desenvolvedor Full Stack e progredir na carreira."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante no curso de WEB Full Stack." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Força Aérea Brasileira" 
          descricao="Cabo na secretaria de Comando do COMGAP." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
