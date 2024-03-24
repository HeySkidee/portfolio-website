document.addEventListener("DOMContentLoaded", function () {
    const audio = document.querySelector("audio");
    const entryButton = document.getElementById("entryButton");
    const content = document.getElementById("content");
    const gif = document.getElementById("gif");
    const favicon = document.getElementById("favicon");

    // Function to play audio
    function playAudio() {
        audio.play();
    }

    // Function to hide the entry button and show content
    function showContent() {
        entryButton.style.opacity = 0;
        entryButton.style.pointerEvents = "none"; // Disable further clicks

        setTimeout(function () {
            entryButton.style.display = "none";
            content.style.display = "block";
            playAudio();
            document.body.style.overflow = "auto"; // Show scrollbar
        }, 500); // Delay for a smooth transition
    }

    // event listener for entry button
    entryButton.addEventListener("click", showContent);

    // Mute/unmute when the GIF is clicked
    gif.addEventListener("click", function () {
        audio.muted = !audio.muted;
    });

    // Mute/unmute when the space key is pressed
    document.body.onkeydown = function (e) {
        if (e.keyCode == 32) {
            audio.muted = !audio.muted;
        }
    };

    // Favicon update on tab visibility change
    document.addEventListener("visibilitychange", function () {
        favicon.href = document.hidden
            ? "https://i1.sndcdn.com/artworks-000249315727-5hakhw-t500x500.jpg"
            : "https://files.catbox.moe/vdrsp5.jpeg";
    });
});