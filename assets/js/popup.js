let social_links = document.querySelectorAll("input");

chrome.storage.sync.get("links", ({links}) => {
    for(let i = 0; i < links.length; i++) {
        social_links.forEach(social => {
            social.value = links[i];
            i++;
        });
    }
});
