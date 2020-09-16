import React from 'react';
import { Card, Icon } from "semantic-ui-react";

const FlashCard = ({flashCard}) => {
console.log(flashCard)
    return (
      <>
        <Card>
            <Card.Content header='Answer the following:' />
            <Card.Content description={flashCard.quiz} />
            <Card.Content extra="answer">
            </Card.Content>
        </Card>
      
      </>
    );
};

export default FlashCard;