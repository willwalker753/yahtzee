import React, { Component } from 'react';
import Dice from './components/Dice';
import Scorecard from './components/Scorecard';
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
            }],
            rollCount: 1,
            rollMessage: 'Roll'
        }
    }
    componentDidMount = () => {
        this.newDice();
        document.addEventListener('keydown', event => {
            if(event.key === 'Y') {
                let dice = [];
                for(let i=0; i<5; i++) {
                    dice.push({
                        number: 6,
                        saved: true
                    });
                    document.getElementById('die-'+i).classList.remove('die-saved');
                    document.getElementById('die-'+i).classList.add('die-saved');
                }
                this.setState({ dice: dice });
            }
        });
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
        let rollCount = this.state.rollCount;
        rollCount++;
        if(rollCount < 4) {
            for(let i=0; i<5; i++) {
                if(!dice[i].saved) {
                    dice[i].number = Math.floor(Math.random() * 6 + 1);
                }
            }
            this.setState({ dice: dice, rollCount: rollCount });
            if(rollCount === 3) {
                this.setState({ rollMessage: 'Play' });
                document.getElementById('roll-button').classList.toggle('play-button');
            }
        }
        else if(rollCount === 4) {
            rollCount = 1;
            this.newDice();
            document.getElementById('roll-button').classList.toggle('play-button');
            this.setState({ rollCount: rollCount, rollMessage: 'Roll' });
            for(let i=0; i<5; i++) {
                document.getElementById('die-'+i).classList.remove('die-saved');
            }
        }
    }
    dieClick = index => {
        let dice = this.state.dice;
        dice[index].saved = !dice[index].saved;
        document.getElementById('die-'+index).classList.toggle('die-saved');
    }
    render() {
        let { dice, rollMessage } = this.state;
        return (
            <div>
                <header>
                    <h1>Yahtzee</h1>
                </header>
                <h2>Scorecard</h2>
                <Scorecard data={{ dice: dice, rollMessage: rollMessage }}/>
                <div id='dice-container' className='flex-row justify-space-between'>
                    {dice.map((item, key) => {
                        return (
                            <span key={key} onClick={() => this.dieClick(key)}>
                                <Dice number={item.number} die={key}/>
                            </span>
                        );
                    })}
                    <button id='roll-button' onClick={this.roll}>{rollMessage}</button>
                </div>
            </div>
        );
    }
}

export default App;