import React from 'react';
import {Card as StrapCard, CardImg, CardHeader, CardTitle, CardSubtitle, CardBody, CardGroup, Container, Col, Row} from 'reactstrap';
import '../node_modules/bootswatch/dist/materia/bootstrap.min.css'
export default class Card extends React.Component{

    render(){
        return (
            <StrapCard>
                <CardHeader>
                    <CardTitle>
                        <h3>{this.props.item.name}</h3>
                        <CardSubtitle>{this.props.item.login}</CardSubtitle>
                    </CardTitle>
                    <CardImg src={this.props.item.avatar_url} alt=''/>
                </CardHeader>
                <CardBody>
                    <CardGroup>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        {this.props.item.location && <p>Location: {this.props.item.location}</p>}
                                        <p>Repos: {this.props.item.public_repos}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <p>Followers: {this.props.item.followers}</p>
                                        <p>Following: {this.props.item.following}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </CardGroup>
                </CardBody>
            </StrapCard>
        )
    }
}