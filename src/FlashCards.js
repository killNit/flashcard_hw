import React from 'react';
import { Card, Icon } from "semantic-ui-react";
import FlashCard from "./FlashCard";

const FlashCards = ({
    flashCards
}) => {

    const renderFlashCards = () => {
        return flashCards.map((f) => {
            return(
                
                <FlashCard
                    key={f.id}
                    // id={f.id}
                    // quiz={f.quiz}
                    flashCard={f}
                />
                
            );
        });
    };

    return ( 
        
        <>
    <div>{renderFlashCards()}</div>
        {/* <Card>
            <Card.Content header='Answer the following:' />
            <Card.Content description="how do I get my question in this card?" />
            <Card.Content extra="answer">
            </Card.Content>
        </Card> */}
        </>
        
    )

};
    


export default FlashCards;

// const description = [
//   //get the flash card 'quiz' to render in here
// ].join(' ')

// const CardExampleExtraContent = () => (

// )

