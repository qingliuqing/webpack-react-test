'use strict';
import React, { Component } from 'react'
import classnames from 'classnames'

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = { index: 0 };
    }
    handleClick(i){
        this.setState({index: i})
    }
    render() {
        const navLists = [
            {
                name: "爆款热卖",
                index: 0
            },
            {
                name: "爆款热卖",
                index: 1
            },{
                name: "爆款热卖",
                index: 2
            },{
                name: "爆款热卖",
                index: 3
            },{
                name: "爆款热卖",
                index: 4
            },
            {
                name: "爆款热卖",
                index: 5
            }
        ];
        return (
            <div className="tab-list">
                <ul>
                    {
                        navLists.map((val) => { 
                            return (<li key={val.index} className={(this.state.index==val.index)?"active":""} onClick={this.handleClick.bind(this,val.index)}>{val.name}</li>)
                        } )

                    }
                </ul>
            </div>
            );
    }
}