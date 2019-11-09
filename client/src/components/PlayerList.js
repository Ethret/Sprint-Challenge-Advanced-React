import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

export default class PlayerList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        console.log(err, `Where's the data?`)
      })
  }

  render() {
    return (
      <div className='playerList'>
        {this.state.data.map(player => (
          <PlayerCard key={player.id} playerData={player}/>
        ))}
      </div>
    )
  }
}
