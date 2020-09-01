import React from 'react';
import Header from './Header';
import Cards from './Cards';

import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchProfile: 'devbeau',
      searchInput: '',
      primaryUser: {},
      followers: [],
      userCards: [],
    };
  };

  handleChanges = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({searchProfile: this.state.searchInput});
  }

  fetchCards = (searchProfile) => {
    let followersList = [];

    fetch(`https://api.github.com/users/${searchProfile}`)
      .then(response => response.json())
      .then(user => this.setState({primaryUser: user}))
      .catch(error => {
        console.log(error)
        debugger
      });
  
    fetch(`https://api.github.com/users/${searchProfile}/followers`)
      .then(response => response.json())
      .then(followers => {
          followersList = followers.map((follower) =>{
            return follower.url;
          });
      })
      .catch(error => {
        console.log(error)
        debugger
      })
      .finally(() => {
        followersList.forEach(item => {
          fetch(item)
            .then(response => response.json())
            .then(follower => {
            this.setState({followers: [...this.state.followers, follower]})
            this.setState({userCards: [this.state.primaryUser, ...this.state.followers]})
          })
          .catch(error => {
            debugger
            })
        })
      })
  }

  componentDidMount(){
    this.fetchCards(this.state.searchProfile);
  }
  
  componentDidUpdate(prevProps, prevState){
    if (this.state.searchProfile !== prevState.searchProfile){
      this.setState({followers: []})
      this.fetchCards(this.state.searchProfile);
    }
  }

  render(){

    return (
      <div className="page-container">
        <Header 
          searchInput={this.state.searchInput} 
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}  
        />
        <Cards userCards={this.state.userCards}/>
      </div>
    )
  }
}
