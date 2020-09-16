import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Header, } from "semantic-ui-react";
import FlashCards from "./FlashCards";
import NewCardFrom from "./NewCardForm";

class App extends Component {
  state = {
    flashCards: [
      {id:1, quiz: "How to increase index in a 'for' loop?"},
      {id:2, quiz: "What is React, how is it used?"},
      {id:3, quiz: "Who is the best instructor at DevPoint Labs?"},
    ],

  };

  addCard


  render () {
    const { flashCards } = this.state;
    return (
    <Container style={{ paddingTop: "35px"}}>
      <Header as="h1">DevPoint Flash Cards</Header>
      <br />
      <NewCardFrom />
      <br />
      <FlashCards flashCards={this.state.flashCards} />
    </Container>
    );
  }
}

export default App;
