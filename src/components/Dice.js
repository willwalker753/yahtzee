import React, { Component } from 'react'

class Dice extends Component {
    render() {
        let { number, die } = this.props;
        switch(number) {
            case 1: 
                return (
                    <button id={"die-"+die} className='die-button'>
                        <div className='flex-row justify-center'>
                            <div className='die-dot'/>
                        </div>
                    </button>
                )
            case 2: 
                return (
                    <button id={"die-"+die} className='die-button flex-column justify-space-between width-full'>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                        </div>
                        <div className='flex-row'>
                            <div className='die-dot hidden'/>
                        </div>
                        <div className='flex-row justify-end width-full'>
                            <div className='die-dot align-self-end'/>
                        </div>
                    </button>
                )
            case 3:
                return (
                    <button id={"die-"+die} className='die-button flex-column justify-space-between width-full'>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                        </div>
                        <div className='flex-row width-full justify-center'>
                            <div className='die-dot'/>
                        </div>
                        <div className='flex-row justify-end width-full'>
                            <div className='die-dot align-self-end'/>
                        </div>
                    </button>
                )
            case 4:
                return (
                    <button id={"die-"+die} className='die-button flex-column justify-space-between width-full'>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                            <div className='die-dot'/>
                        </div>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                            <div className='die-dot'/>
                        </div>
                    </button>
                )
            case 5:
                return (
                    <button id={"die-"+die} className='die-button flex-column justify-space-between width-full'>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                            <div className='die-dot'/>
                        </div>
                        <div className='flex-row justify-center width-full'>
                            <div className='die-dot'/>
                        </div>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                            <div className='die-dot'/>
                        </div>
                    </button>
                )
            case 6:
                return (
                    <button id={"die-"+die} className='die-button flex-column justify-space-between width-full'>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                            <div className='die-dot'/>
                        </div>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                            <div className='die-dot'/>
                        </div>
                        <div className='flex-row justify-space-between width-full'>
                            <div className='die-dot'/>
                            <div className='die-dot'/>
                        </div>
                    </button>
                )
            default: return <p>Error</p>
        }
    }
}

export default Dice;
