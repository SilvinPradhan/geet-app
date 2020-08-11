// https://developer.spotify.com/
// documentation/web-play-back-sdk/quick-start/# 
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "d05af6cc66744a61b36cc73dc9267758";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-modify",
    "user-top-read"
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("1")
        .reduce((initial, item) => {
            var parts = item.split('=');
            initial[parts[0]] = 
            decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

