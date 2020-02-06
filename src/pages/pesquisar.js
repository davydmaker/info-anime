import React, { Component } from 'react';
import api from '../services/api';
import {Link} from  'react-router-dom'

class Pesquisar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dados: []
        }
    }

    async componentDidMount() {
        const { str } = this.props.match.params

        await api
            .get(`/search/anime?q=${str}&limit=16`)
            .then(res => {
                this.setState({ dados: res.data.results })
            })
    }

    render() {
        const { dados } = this.state
        console.log(dados)
        return (
            <div id="home-content" className="main-holder col-md-12">
                <h1 className="loop-heading"><span>Você pesquisou por: {}</span></h1>
                <div className="loop-content phpvibe-video-list miau">
                    {dados.map((item) => (
                        <div key={item.mal_id} id={"anime-" + item.mal_id} className="video">
                            <div className="video-thumb">
                    <Link className="clip-link" data-id={item.mal_id} title={item.title} to={`/info/${item.mal_id}`}> <span className="clip"> <img src={item.image_url} alt={item.title} title={item.title} /><span className="vertical-align"></span> </span> <span className="overlay"></span> </Link></div>
                            <div className="video-data">
                                <h4 className="video-title"><a href="link" title={item.title}>{item.title}</a></h4>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default Pesquisar;