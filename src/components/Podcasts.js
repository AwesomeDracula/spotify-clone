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

function Podcasts() {
    const [{podcasts},dispatch] = useDataLayerValue();
    return (
        <div className="podcasts">
            <Container fluid={true}>
                <h4>Podcasts</h4>
                <Row>
                {podcasts?.items.map((item) => (
                    <Col sm="2">
                        <Card>
                            <CardImg
                                top
                                width="100%"
                                src={item.show.images[0].url}
                                alt="Card image"
                            />
                            <CardBody>
                            <CardTitle tag="h5">{item.show.name}</CardTitle>
                            <CardText>{item.show.publisher}</CardText>
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

export default Podcasts
