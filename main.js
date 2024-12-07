let gif = document.getElementById("gif");
let Ltext = document.getElementById("Ltext");
let appendIt = document.getElementById("appendIt");

function yesBtn() {
    // Change GIF source (to test)
    gif.src = "https://i.pinimg.com/originals/98/ed/29/98ed29a15944ee61c41c0e340f698b57.gif";

    // Update text content
    Ltext.textContent = "Ayyooo...!!";

    // Clear the container in case there's already a button
    appendIt.innerHTML = "";

    // Create new button dynamically
    const newBTN = document.createElement("button");
    newBTN.id = "afterClickingYes";
    newBTN.classList.add("btn", "btn-warning", "p-3"); // Bootstrap button styling
    newBTN.textContent = "Ekada Noku Pilla>>>";
    newBTN.style.border = "transparent";

    // Append the button to the centered container
    appendIt.appendChild(newBTN);

    // Add event listener to the new button
    newBTN.addEventListener("click", function() {
        // Create a video element
          // Clear the contents of the gif, Ltext, and appendIt elements
        const video = document.createElement("video");
        video.src = "video1.mp4"; // Replace with your video URL
        video.autoplay = true;
        video.loop = true;
        video.muted = false; // Mute the video if you want it to autoplay
        video.style.position = "fixed";
        video.style.top = "0";
        video.style.left = "2px";
        video.style.width = "100%";
        video.style.height = "95%";
        video.style.objectFit = "cover"; // Cover the entire background
        video.style.zIndex = "1"; // Send the video to the back

        // Append the video to the body or a specific container
        document.body.appendChild(video);
    });
   
}