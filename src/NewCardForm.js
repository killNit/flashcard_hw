import React from 'react';
import { Form, Button } from "semantic-ui-react";

class NewCardForm extends React.Component {
  state = { 
    quiz: ""
  };
  //handleSubmit


  //this.props.AddFlashCardProp(this.state)


  //handleChange


  render() {
    const { quiz } = this.state;
      return (
        <Form>
        <Form.Field>
          <label>New Quiz</label>
          <input placeholder='question goes here' />
        </Form.Field>
        <Form.Field>
          <label>Answer</label>
          <input placeholder='Answer to question' />
        </Form.Field>
        <Button color="blue" type='submit'>Submit</Button>
      </Form>
      )
  }



}

export default NewCardForm;