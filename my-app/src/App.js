import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Search} from "./search"


class App extends Component {
  state = {
    dataText: {},
    data: [],
    followerData: []
  };
  
  componentWillMount() {

    axios
      .get("https://api.github.com/users/Nick-Ohman")
      .then(res => {

        this.setState({ data: res.data })
        console.log(this.state.data)
      })
      .catch(err => console.log(err))

    axios
      .get("https://api.github.com/users/Nick-Ohman/followers")
      .then(follers => {
        console.log(follers.data)
        this.setState({ followerData: follers.data })
      })
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      dataText:{[e.target.name]: e.target.value}
      
    });
    console.log(this.state)
  };

//   fetchDataText = item => {

//     axios
//     .get(`https://api.github.com/users/${item}`)
//     .then(res => {
//       console.log(res)
//       this.setState({...this.state, followerData: res.data })
      
//     })
//     .catch(err => console.log(err));
  
// }
  render() {
    return (
      <div className="card">
        <input
          type="text"
          name="search"
          value={this.state.dataText.search}
          onChange={this.handleChanges}
        />
        <button onClick={()=>Search(this.state.dataText.search)
          }>Find Friend</button>
        <div className="me2">
        <h1>React Github User Card!!</h1>
          
          <div className="me">
            {this.state.data.name}
            <img src={this.state.data.avatar_url} />
            {this.state.data.login}<br></br>
            {this.state.data.location}
          </div>
        </div>
        <div className="followers">
          {this.state.followerData.map((person, i) => (
            <div className="personcard">
              <p key={i}>{person.login}</p><br></br>
              <img src={person.avatar_url} />
              <p >{person.name}</p><br></br>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}
export default App;







