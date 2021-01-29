import React from 'react';
import { useDataLayerValue } from '../contextapi/DataLayer';
import './Artists.css';
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

function Artists() {
    const [{followed_artists}, dispatch] = useDataLayerValue();
    return (
        <div className="artists">
            <Container fluid={true}>
                <h4>Nghệ sĩ</h4>
                <Row>
                {followed_artists?.artists.items.map((item) => (
                    <Col sm="2">
                        <Card>
                            <CardImg
                                roundedCircle
                                top
                                width="100%"
                                src={item.images[0].url}
                                alt="Card image"
                            />
                            <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardText>Follower: {item.followers.total}</CardText>
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

export default Artists
