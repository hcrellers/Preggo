import React, { Component } from 'react';
import { Card } from 'reactstrap';

class ContentItem extends Component {
    render() {
        return (

            <Card className="bg-dark text-white">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Preggo</Card.Title>
                    <Card.Text>
                        A nutritional app for pregnant women.
                     </Card.Text>
                    <Card.Text> To get started, enter the profile information to calculate your nutrient goals per the USDA's recommendation.</Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    }
}

export default ContentItem