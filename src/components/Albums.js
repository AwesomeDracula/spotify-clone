import React from 'react';
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

function Albums() {
    const [{saved_album}, dispatch] = useDataLayerValue();

    return (
        <div className="albums">
            <Container fluid={true}>
                <h4>Albums</h4>
                <Row>
                {saved_album?.items.map((item) => (
                    <Col sm="2">
                        <Card>
                            <CardImg
                                top
                                width="100%"
                                src={item.album.images[0].url}
                                alt="Card image"
                            />
                            <CardBody>
                            <CardTitle tag="h5">{item.album.name}</CardTitle>
                            <CardText>{item.album.artists.map(artist => artist.name).join(", ")}</CardText>
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

export default Albums
