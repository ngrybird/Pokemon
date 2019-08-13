import React from 'react';
import Pokemon from './Pokemon';
import fetchUtil from '../utils/fetchUtils';
export default class Container extends React.Component{
    constructor(){
        super();
        this.index = 0;
        this.getNextThree = this.getNextThree.bind(this);
        this.getPrevThree = this.getPrevThree.bind(this); 
        this.state = {
            pokemons  : [

            ]
        }
    }
    componentDidMount(){
        console.log('Container Mounted');
        this.getNextThree();
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    async getNextThree(){
        let arr = [];
        this.index = this.index+1;
        
        let data1 = await fetchUtil(this.index);
        let data2 = await fetchUtil(++this.index);
        let data3 = await fetchUtil(++this.index);
        arr.push(data1);
        arr.push(data2);
        arr.push(data3);
        this.setState({pokemons : arr})
    }
    async getPrevThree(){
        this.index = this.index - 6;
        if(this.index < 0){
            this.index = this.index + 6;
            return;
        }else{
            let arr = [];
            let data1 = await fetchUtil(++this.index);
            let data2 = await fetchUtil(++this.index);
            let data3 = await fetchUtil(++this.index);
            arr.push(data1);
            arr.push(data2);
            arr.push(data3);
            this.setState({pokemons : arr})
        }
    }
    getPokemonCards(){
        if(this.state.pokemons &&  this.state.pokemons.length === 0){
            return <div> Loading... </div>;
        }
        else{
            return (
                <div className='pokeCardscontainer'>
                    <Pokemon className='card' name = {this.state.pokemons[0].name} 
                        id = {this.state.pokemons[0].id} 
                        img = {this.state.pokemons[0].sprites.front_default}
                    />
                    <Pokemon className='card' name = {this.state.pokemons[1].name} 
                        id = {this.state.pokemons[1].id} 
                        img = {this.state.pokemons[1].sprites.front_default}
                    />
                    <Pokemon className='card' name = {this.state.pokemons[2].name} 
                        id = {this.state.pokemons[2].id} 
                        img = {this.state.pokemons[2].sprites.front_default}
                    />
                   
                </div>
            );
        }
    }
    render(){
        return (
            <div className = 'constainerDiv'>
                
                <div>{this.getPokemonCards()}</div>
                <div className = 'Buttons'>
                    <div className='leftButton'>
                        <button onClick = {this.getPrevThree} className='buttonStyle'>PREV</button>
                    </div>
                    <div className='rightButton'>
                        <button onClick = {this.getNextThree} className='buttonStyle'>NEXT</button>
                    </div>
                </div>
            </div>
        );
    }
}