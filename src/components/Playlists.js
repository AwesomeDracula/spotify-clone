import React from 'react';
import './Playlists.css';
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

function Playlists() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="playlists">
            <Container fluid={true}>
                <h4>Playlist</h4>
                <Row>
                    {/* <Col sm="4">
                        <h3>Hello</h3>
                    </Col> */}
                {playlists?.items?.map((item) => (
                    <Col sm="2">
                        <Card>
                            <CardImg
                                top
                                width="100%"
                                src={item.images[0].url}
                                alt="Card image"
                            />
                            <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>
                            {/* <Button>
                                Add to cart
                            </Button> */}
                            </CardBody>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default Playlists
