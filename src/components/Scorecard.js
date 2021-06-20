import { Component } from 'react';
import initScoreData from './Constants';
import './scorecard.css';

class Scorecard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dice: [],
            score: initScoreData,
            rollMessage: 'Roll',
            lastPreview: '',
            yahtzeed: false
        }
    }
    componentDidMount() {
        
    }
    componentDidUpdate(oldProps) {
        if(oldProps !== this.props) {
            if(this.props.data.rollMessage === 'Play') {
                let dice = [];
                for(let i=0; i<5; i++) {
                    dice.push(this.props.data.dice[i].number)
                }
                this.setState({ dice: dice, rollMessage: 'Play', lastPreview: '' });
            }
            else {
                this.setState({ rollMessage: 'Roll' });
            }
        }
    }
    scoreClick = e => {
        
        let id = e.target.id;
        let dice = this.state.dice;
        if(this.state.rollMessage === 'Play' && this.state.score[id].value === null) {
            if(id === 'aces' ||
               id ==='twos' ||
               id === 'threes' ||
               id === 'fours' ||
               id === 'fives' ||
               id === 'sixes') {
                this.calcUpperBox(id, dice)
            }
            if(id === 'threeKind') { this.threeKind(id, dice) }
            if(id === 'yahtzee') { this.yahtzee(id, dice) }
        }
    }
    calcUpperBox = (id, dice) => {
        let num;
        let total = 0;
        switch(id) {
            case('aces'): num = 1;
                break;
            case('twos'): num = 2;
                break;
            case('threes'): num = 3;
                break;
            case('fours'): num = 4;
                break;
            case('fives'): num = 5;
                break;
            case('sixes'): num = 6;
                break;
            default: alert("An error occured and I'm confused too. Maybe refresh the page?");
        }
        for(let i=0; i<5; i++) {
            if(dice[i] === num) {
                total = total + num;
            }
        }
        let score = this.state.score;
        if(this.state.lastPreview !== '') {
            score[this.state.lastPreview].value = null;
        }   
        score[id].value = total;
        this.setState({ score: score, lastPreview: id });
        return total;
    }
    threeKind = (id, dice) => {
        let total = 0;
        let count = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0
        };
        let threeKind = false
        for(let i=0; i<dice.length; i++) {
            let numStr = dice[i].toString();
            count[numStr]++;
            if(count[numStr] === 3) { threeKind = true }
        }
        if(threeKind) {
            total = count["1"] + count["2"]*2 + count["3"]*3 + count["4"]*4 + count["5"]*5 + count["6"]*6;
        }
        let score = this.state.score;
        if(this.state.lastPreview !== '') {
            score[this.state.lastPreview].value = null;
        }   
        score[id].value = total;
        this.setState({ score: score, lastPreview: id });
        return total;
    }
    yahtzee = (id, dice) => {
        let firstDie = dice[0];
        let total = 0;
        let yahtzee = true;
        for(let i=1; i<dice.length; i++) {
            if(dice[i] !== firstDie) {
                yahtzee = false;
            }
        }
        if(yahtzee) { total = 50 }
        let score = this.state.score;
        if(this.state.lastPreview !== '') {
            score[this.state.lastPreview].value = null;
        }   
        score[id].value = total;
        this.setState({ score: score, lastPreview: id });
        return total;
    }
    render() {
        let { score, yahtzeed } = this.state;
        return (
            <div id='scorecard-box' className='flex-row justify-space-between'>
                <table id='scorecard-upper'>
                    <thead>
                        <td>Upper Section</td>
                        <td>Score</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aces</td>
                            <td><div className="table-score-box" onClick={this.scoreClick} id='aces'>{score.aces.value}</div></td>
                        </tr>
                        <tr>
                            <td>Twos</td>
                            <td><div className="table-score-box" onClick={this.scoreClick} id='twos'>{score.twos.value}</div></td>
                        </tr>
                        <tr>
                            <td>Threes</td>
                            <td><div className="table-score-box" onClick={this.scoreClick} id='threes'>{score.threes.value}</div></td>
                        </tr>
                        <tr>
                            <td>Fours</td>
                            <td><div className="table-score-box" onClick={this.scoreClick} id='fours'>{score.fours.value}</div></td>
                        </tr>
                        <tr>
                            <td>Fives</td>
                            <td><div className="table-score-box" onClick={this.scoreClick} id='fives'>{score.fives.value}</div></td>
                        </tr>
                        <tr>
                            <td>Sixes</td>
                            <td><div className="table-score-box" onClick={this.scoreClick} id='sixes'>{score.sixes.value}</div></td>
                        </tr>
                        <tr>
                            <td>Bonus</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <td>Lower Section</td>
                        <td>Score</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3 of a Kind</td>
                            <td><div className="table-score-box" onClick={this.scoreClick} id='threeKind'>{score.threeKind.value}</div></td>
                        </tr>
                        <tr>
                            <td>4 of a Kind</td>
                            <td><div className="table-score-box"></div></td>
                        </tr>
                        <tr>
                            <td>Full House</td>
                            <td><div className="table-score-box"></div></td>
                        </tr>
                        <tr>
                            <td>Sm. Straight</td>
                            <td><div className="table-score-box"></div></td>
                        </tr>
                        <tr>
                            <td>Lg. Straight</td>
                            <td><div className="table-score-box"></div></td>
                        </tr>
                        <tr>
                            <td>Chance</td>
                            <td><div className="table-score-box"></div></td>
                        </tr>
                        <tr>
                            <td>Yahtzee</td>
                            <td><div className="table-score-box" onClick={this.scoreClick} id='yahtzee'>{score.yahtzee.value}</div></td>
                        </tr>
                        { yahtzeed ? (
                            <tr>
                                <td>Yahtzee Bonus</td>
                                <td><div className="table-score-box"></div></td>
                            </tr>
                        ) : null }
                        <tr>
                            <td>Upper Total</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lower Total</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Grand Total</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Scorecard;