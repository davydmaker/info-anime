import React, { Component } from 'react';
import api from '../services/api'

class Info extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dados: {
                title_synonyms: []
            },
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        await api
            .get(`/anime/${id}`)
            .then(res => {
                this.setState({ dados: res.data })
            });
    }

    render() {
        const { dados } = this.state

        return (
            <div id="channel-content" className="main-holder pad-holder col-md-12 top10 nomargin">
                <div className="row">
                    <div className="mleft20 mright20 text-center">
                    <a href={dados.trailer_url} style={{display:(dados.trailer_url !== '' && dados.trailer_url !== null ? 'block' : 'none')}}>
                        <div id="favit" className="fav-container ">
                            <i className="material-icons fav">play_arrow</i>
                        </div>
                    </a>
                    <img className="channel-img img-responsive mtop20 mbot20" alt={dados.title} src={dados.image_url} />
                    </div>
                    {console.log(dados)}
                    <div className="left20 right20">
                        <h1 style={{ fontWeight: "bold" }}><a href={dados.url} target="_blank" rel="noopener noreferrer">{dados.title}</a></h1>
                        <p><b>Outros Nomes:</b> {dados.title_english}, {dados.title_japanese}, {dados.title_synonyms.map((item, key) => item + (key + 1 < dados.title_synonyms.length ? ", " : ''))}
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
        )
    }
}

export default Info