export const criaPlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const addMusica = 
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"

export const deletaMusica =
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId"

export const deletaPlaylist =
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"

export const todasAsPlaylists = 
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

export const procuraPlaylist = 
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string"

export const todasAsMusicasDaPlaylist = 
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"

export const axiosConfig = {
  headers: {
    Authorization: "igor-meira-cruz"
  }
};
