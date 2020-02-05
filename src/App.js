import React, { Component } from 'react';

import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import Config from './config';
import api from './services/api';

class App extends Component {
  setEstadoMenu = estadoMenu => {
    this.setState({ estadoMenu });
  };

  state = {
    estadoMenu: "en",
    setEstadoMenu: this.setEstadoMenu,
    dados: {
      title_synonyms: []
    }
  };

  async componentDidMount() {
    api.get('/anime/30016')
      .then(res => {
        this.setState({ dados: res.data })
      })
  }


  render() {
    const { dados } = this.state

    return (

      <div className="App">
        <Config.Provider value={this.state}>
          <h1>{this.state.estadoMenu}</h1>
          <Header />
          <div id="wrapper" className="container haside">
            <div className="row block page p-home">
              <MenuLateral />
              <div id="channel-content" className="main-holder pad-holder col-md-12 top10 nomargin">
                <div className="row">
                  <div className="mleft20 mright20 text-center">
                    <img className="channel-img img-responsive mtop20 mbot20" alt={dados.title} src={dados.image_url} />
                  </div>
                  {console.log(dados.title_synonyms.length)}
                  <div className="left20 right20">
                    <h1 style={{ fontWeight: "bold" }}><a href={dados.url} target="_blank" rel="noopener noreferrer">{dados.title}</a></h1>
                    <p><b>Outros Nomes:</b> {dados.title_english}, {dados.title_japanese}, {dados.title_synonyms.map((item, key) => item + (key + 1 < dados.title_synonyms.length && ", "))}
                      <br /><b>Episódios:</b> {dados.episodes}
                      <br /><b>Tipo:</b> {dados.type}
                      <br /><b>AVG. Score:</b> {dados.score}/10
                        <br /><b>Status:</b> {dados.status}
                      <br /><b>Source:</b> {dados.source}
                      <br />
                      <p style={{ maxHeight: "70px" }}></p>
                      <p>{dados.synopsis}</p>
                    </p>
                  </div>
                </div>
              </div>
              <script type="text/javascript" src="jquery224.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.2/mobile-detect.min.js"></script>
            </div>
          </div>
        </Config.Provider>

      </div>
    );
  }

}

export default App;
