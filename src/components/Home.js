import React from 'react';
import './Home.css';
import UserAccount from './UserAccount';
import { useDataLayerValue } from '../contextapi/DataLayer';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
  } from "reactstrap";

function Home() {
    const [{newReleases}] = useDataLayerValue();
    console.log(newReleases);
    return (
        <div className="home">
            <div className="home-header">
                <h3>Welcome to spotify</h3>
                <UserAccount />
            </div>
            <Container fluid={true}>
                <h4>Mới phát hành</h4>
                <Row>
                {newReleases?.albums?.items?.map((item) => (
                    <Col sm="2">
                        <Card>
                            <CardImg
                                top
                                width="100%"
                                src={item.images[0].url}
                                alt="Card image"
                            />
                            <CardBody>
                            <CardTitle tag="h5">{item?.name}</CardTitle>
                            <CardText>{item?.release_date}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default Home
