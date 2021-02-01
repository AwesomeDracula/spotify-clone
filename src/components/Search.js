import React from 'react';
import './Search.css';
import { useDataLayerValue } from '../contextapi/DataLayer';
import Header from './Header';
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

function Search({spotifyApi}) {
    const [
        {
            searchTermIsExisted,
            currentAlbumSearchResult,
            currentArtistSearchResult,
            currentPlaylistSearchResult,
            currentTrackSearchResult,
            currentShowSearchResult,
            currentEpisodeSearchResult
        }] = useDataLayerValue();
    return (
        <div className="search">
            <Header spotifyApi={spotifyApi}/>
            {searchTermIsExisted && <Container fluid={true} >
                {console.log(currentTrackSearchResult)}
                {currentTrackSearchResult?.total > 0 && <h4>Bài hát</h4>}
                <Row>
                {currentTrackSearchResult?.items.map((item,pos) => {
                        if(pos < 5) return (
                            <Col sm="2">
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item?.album?.images[0]?.url}
                                        alt="Card image"
                                    />
                                    <CardBody>
                                    <CardTitle tag="h5">{item?.name}</CardTitle>
                                    <CardText>{item?.artists.map(artist => artist.name).join(", ")}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {currentArtistSearchResult?.total > 0 &&<h4>Nghệ sĩ</h4>}
                <Row>                   
                    {currentArtistSearchResult?.items.map((item,pos) => {
                        if(pos < 5) return (
                            <Col sm="2">
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item?.images[0]?.url}
                                        alt="Card image"
                                    />
                                    <CardBody>
                                    <CardTitle tag="h5">{item?.name}</CardTitle>
                                    <CardText>Followers: {item?.followers.total}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {currentAlbumSearchResult?.total > 0 && <h4>Album</h4>}
                <Row>
                    {currentAlbumSearchResult?.items.map((item,pos) => {
                        if(pos < 5) return (
                            <Col sm="2">
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item?.images[0].url}
                                        alt="Card image"
                                    />
                                    <CardBody>
                                    <CardTitle tag="h5">{item?.name}</CardTitle>
                                    <CardText>{item?.artists.map(artist => artist.name).join(", ")}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {currentPlaylistSearchResult?.total > 0 && <h4>Playlist</h4>}
                <Row>
                    {currentPlaylistSearchResult?.items.map((item,pos) => {
                        if(pos < 5) return (
                            <Col sm="2">
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item?.images[0]?.url}
                                        alt="Card image"
                                    />
                                    <CardBody>
                                    <CardTitle tag="h5">{item?.name}</CardTitle>
                                    <CardText>Của {item?.owner.display_name}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {currentShowSearchResult?.total > 0 && <h4>Podcast</h4>}
                <Row>
                    {currentShowSearchResult?.items.map((item,pos) => {
                        if(pos < 5) return (
                            <Col sm="2">
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item?.images[0].url}
                                        alt="Card image"
                                    />
                                    <CardBody>
                                    <CardTitle tag="h5">{item?.name}</CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {currentEpisodeSearchResult?.total > 0 && <h4>Tập</h4>}
                <Row>
                    {currentEpisodeSearchResult?.items.map((item,pos) => {
                        if(pos < 5) return (
                            <Col sm="2">
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item?.images[0].url}
                                        alt="Card image"
                                    />
                                    <CardBody>
                                    <CardTitle tag="h5">{item?.name}</CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>}
            {!searchTermIsExisted && (
            <div>
                <h4>Không tìm thấy kết quả nào</h4>
                <h6>Vui lòng đảm bảo viết đúng chính tả, hoặc sử dụng ít từ khóa hơn hay thử các từ khóa khác</h6>
            </div>
            )}
        </div>
    )
}

export default Search
