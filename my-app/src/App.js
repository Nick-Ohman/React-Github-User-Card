import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


// const initialData = {
//   name
// }
class App extends Component {
  state = {
    data: [],
    followerData: []
  }

  componentDidMount() {
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




  render() {
    return (
      <div className="card">
        <h1>React Github User Card!!</h1>
        <div>
          {this.state.data.name}
          {this.state.data.login}
          {this.state.data.bio}
          {this.state.data.followers}
          {this.state.data.following}
        </div>

        <div className="followers">

          {this.state.followerData.map(person => (
            <div>
              <p key={person.id}>{person.login}</p>
              <p >{person.id}</p>
            </div>
          ))}


        </div>


      </div>
    );
  }
}
export default App;

