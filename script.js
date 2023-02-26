const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select a media stream, pass to vide element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true; // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

// Onload
selectMediaStream();
