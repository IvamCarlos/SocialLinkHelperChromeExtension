/*
Altere o array abaixo com seus links socias

[0] Linkedin
[1] GitHub
[2] Youtube
[3] Instagram
[4] Twitter/X
[5] Facebook

Se não tiver link social de alguma rede social é só passar string vázia ""
*/

let links = [
    "sua_url_do_linkedin_aqui",
    "sua_url_do_github_aqui",
    "sua_url_do_youtube_aqui",
    "sua_url_do_instagram_aqui",
    "sua_url_do_twitter_aqui",
    "sua_url_do_facebook_aqui"
];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        links
    });
});