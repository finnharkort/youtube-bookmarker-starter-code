(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, valueId } = obj;
        if (type == "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });

    const newVideoLoaded = async () => {
        const bookmarkBtnExists =
            document.getElementsByClassName("bookmark-btn")[0];

        if (bookmarkBtnExists) {
            console.log("hejhejhejhejhej");
        }
        if (!bookmarkBtnExists) {
            const bookmarkBtn = document.createElement("img");
            console.log("HALLÅ");

            bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
            bookmarkBtn.className = "ytp-button " + "bookmark-btn";
            bookmarkBtn.title = "Click to bookmark current timestamp";

            youtubeLeftControls =
                document.getElementsByClassName("utp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName("video-stream")[0];

            youtubeLeftControls.appendChild(bookmarkBtn);
            bookmarkBtn.addEventListener("click", addNewBookMarkEventHandler);
        }
    };

    newVideoLoaded();
})();
