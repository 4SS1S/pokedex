import React, { Component } from 'react'
import './pokemon_card.css'

export default class PokemonCard extends Component {
    
    constructor(params)
    {
        super(params);

        this.state = {
            id: 0,
            name: null,
            image: null,
            thumbnail: null
        }

        this.showPokemon = this.showPokemon.bind(this)
    }

    componentDidMount(){

        let pokemon = this.props.pokemon;
        
        
        let id = pokemon.id;
        let name = pokemon.name.english;

        if(id < 10)
        {
        id = `00${id}`;
        }

        if((id < 100) && (id > 9))
        {
            id = `0${id}`;
        }

        let thumbnail = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${id}${name}.png`;
        let image = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${id}${name}.png`;

        console.log(pokemon)

        this.setState({
            id:id,
            name:name,
            image: image,
            thumbnail: thumbnail
        })
    }

    showPokemon(){
        console.log(this.props.pokemon)

        
    }

    render() {

        return ( 
        <div>
            <div class="pokemon" id={this.state.id} onClick={this.showPokemon}>
                <img class="pokemon-pic" src={this.state.thumbnail} />
                <div class="pokemon-info">
                    <div class="pn">{this.state.id}</div>
                    <span class="pokename">{this.state.name }</span>
                </div>
            </div>
            <div class="full-info">
                <img class="pokemon-pic" src={this.state.image} />
            </div>
        </div>
        )
    }
}