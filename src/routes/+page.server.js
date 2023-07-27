/** @type {import('./$types').PageLoad} */
const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
const redirect_uri = "http://localhost:5173/"
const token_endpoint = `https://accounts.spotify.com/api/token`;
export async function load({fetch}) {
    const { access_token } = await fetch(token_endpoint, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
            redirect_uri,
            client_id,
            client_secret,
        })
    }).then(res => res.json());
    const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;
    const res = await fetch(now_playing_endpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })

    if (res.status === 204 || res.status > 400) {
        return {body: { isPlaying: false }}
    }

    const song = await res.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[1].url;
    const songUrl = song.item.external_urls.spotify;

    return {
    body: {title, artist, album, isPlaying, albumImageUrl, songUrl},
    }
}
