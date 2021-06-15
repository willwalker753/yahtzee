import React, { Component } from 'react';
import Dice from './components/Dice';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dice: [{
                number: 0,
                saved: false
            }, {
                number: 0,
                saved: false
            }, {
                number: 0,
                saved: false
            }, {
                number: 0,
                saved: false
            }, {
                number: 0,
                saved: false
            }]
        }
    }
    componentDidMount = () => {
        this.newDice();
    }
    newDice = () => {
        let dice = [];
        for(let i=0; i<5; i++) {
            dice.push({
                number: Math.floor(Math.random() * 6 + 1),
                saved: false
            });
        }
        this.setState({ dice: dice });
    }
    roll = () => {
        let dice = this.state.dice;
        for(let i=0; i<5; i++) {
            if(!dice[i].saved) {
                dice[i].number = Math.floor(Math.random() * 6 + 1);
            }
        }
        this.setState({ dice: dice });
    }
    dieClick = index => {
        let dice = this.state.dice;
        dice[index].saved = !dice[index].saved;
        document.getElementById('die-'+index).classList.toggle('die-saved');
    }
    render() {
        let { dice } = this.state;
        return (
            <div>
                <header>
                    <h3>Yahtzee</h3>
                </header>
                <div id='dice-container' className='flex-row'>
                    {dice.map((item, key) => {
                        return (
                            <span key={key} onClick={() => this.dieClick(key)}>
                                <Dice number={item.number} die={key}/>
                            </span>
                        );
                    })}
                    <button onClick={this.roll}>Roll</button>
                </div>
            </div>
        );
    }
}

export default App;