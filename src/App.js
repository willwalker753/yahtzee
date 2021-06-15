import React, { Component } from 'react';
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
    dieClick = e => {
        let index = e.target.value;
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
                <div>
                    {dice.map((item, key) => {
                        return (
                            <button 
                            key={key} 
                            onClick={this.dieClick} 
                            id={"die-"+key} 
                            value={key}
                            >
                                {item.number}
                            </button> 
                        );
                    })}
                    <button onClick={this.roll}>Roll</button>
                    <div className='flex-row align-center'>
                        <button className='die-button'>
                            <div className='flex-row align-center justify-center'>
                                <div className='die-dot'/>
                            </div>
                        </button>
                        <button className='die-button'>
                            <div className='flex-column justify-center'>
                                <div className='die-dot align-self-start'/>
                                <div className='die-dot align-self-end'/>
                            </div>
                        </button>
                        <button className='die-button'>
                            <div className='flex-column justify-center'>
                                <div className='die-dot align-self-start'/>
                                <div className='die-dot align-self-center'/>
                                <div className='die-dot align-self-end'/>
                            </div>
                        </button>
                        <button className='die-button flex-column justify-space-between width-full'>
                            <div className='flex-row align-center justify-space-between width-full'>
                                <div className='die-dot'/>
                                <div className='die-dot'/>
                            </div>
                            <div className='flex-row align-center justify-space-between width-full'>
                                <div className='die-dot'/>
                                <div className='die-dot'/>
                            </div>
                        </button>
                        <button className='die-button flex-column justify-space-between width-full'>
                            <div className='flex-row align-center justify-space-between width-full'>
                                <div className='die-dot'/>
                                <div className='die-dot'/>
                            </div>
                            <div className='flex-row align-center justify-center width-full'>
                                <div className='die-dot'/>
                            </div>
                            <div className='flex-row align-center justify-space-between width-full'>
                                <div className='die-dot'/>
                                <div className='die-dot'/>
                            </div>
                        </button>
                        <button className='die-button flex-column justify-space-between width-full'>
                            <div className='flex-row align-center justify-space-between width-full'>
                                <div className='die-dot'/>
                                <div className='die-dot'/>
                            </div>
                            <div className='flex-row align-center justify-space-between width-full'>
                                <div className='die-dot'/>
                                <div className='die-dot'/>
                            </div>
                            <div className='flex-row align-center justify-space-between width-full'>
                                <div className='die-dot'/>
                                <div className='die-dot'/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App