/** @type {import('./$types').PageLoad} */
const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
const redirect_uri = "https://sebastian-galvis.netlify.app/"
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

    return {
    body: {access_token},
    }
}
