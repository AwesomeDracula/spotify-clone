export const initialState = {
    user: null,
    playlists: [],
    playingTrack: null,
    item: null,
    current_playlist: null,
    saved_album: null,
    followed_artists: null,
    podcasts: null,
    newReleases: null,
    searchTermIsExisted: false,
    currentAlbumSearchResult: null,
    currentArtistSearchResult: null,
    currentPlaylistSearchResult: null,
    currentTrackSearchResult: null,
    currentShowSearchResult: null,
    currentEpisodeSearchResult: null,
    token: null
    // token: "BQDSQ5RPrFR6ElGYvKlW5JDog0nb6J94etlxU071P3egjKQrlNjoEwfOIMxCuvOYY01KldH31gD-enwrZZY690gp-0_s0H45BWoUA8g5nfE8w2BUJbQDxo7StJtP750HwoAAFXy2lYT1uioQgv-dADoTq5vpDPTmfA0nXXKXg3PduTdy"
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                current_playlist: action.current_playlist
            }
        case 'SET_SAVED_ALBUM':
            return {
                ...state,
                saved_album: action.saved_album
            }
        case 'SET_FOLLOWED_ARTISTS':
            return {
                ...state,
                followed_artists: action.followed_artists
            }
        case 'SET_PODCASTS':
            return {
                ...state,
                podcasts: action.podcasts
            }
        case 'SET_CURRENT_SEARCH_RESULT':
            return {
                ...state,
                currentAlbumSearchResult: action.currentAlbumSearchResult,
                currentArtistSearchResult: action.currentArtistSearchResult,
                currentEpisodeSearchResult: action.currentEpisodeSearchResult,
                currentPlaylistSearchResult: action.currentPlaylistSearchResult,
                currentShowSearchResult: action.currentShowSearchResult,
                currentTrackSearchResult: action.currentTrackSearchResult
            }
        case 'SET_SEARCH_STATUS':
            return {
                ...state,
                searchTermIsExisted: action.searchTermIsExisted
            }
        case 'SET_TRACK':
            return {
                ...state,
                playingTrack: action.playingTrack
            }
        case 'SET_NEW_RELEASES':
            return {
                ...state,
                newReleases: action.newReleases
            }
        default:
            return state;
    }
}

export default reducer;