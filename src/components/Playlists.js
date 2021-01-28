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
    Button
  } from "reactstrap";

function Playlists() {
    const [{playlists}, dispatch] = useDataLayerValue();
    console.log(playlists);
    return (
        <div className="playlists">
            <Container fluid={true}>
                <Row>
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
