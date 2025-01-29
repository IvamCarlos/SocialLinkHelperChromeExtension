let links = [
    "https://linkedin.com/in/ivam-carlos-aa152a99",
    "https://github.com/IvamCarlos",
    "https://www.youtube.com/@ivanzeragameplays",
    "https://www.instagram.com/ivamcarlos10/",
    "https://twitter.com/ivanzerafn",
    ""
];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        links
    });
});