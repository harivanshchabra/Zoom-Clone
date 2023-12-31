const videoGrid = document.getElementById  ('video-grid')

const myVideo = document.createElement('video');
myVideo.muted = false;


// It is a way to get video and audio
let myVideoStream 
    navigator.mediaDevices.getUserMedia(
    {
        video:true,
        audio:true

    }
).then(stream => 
    {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
    });
    const addVideoStream = (video, stream) => {
        video.srcObject = stream;
        video.addEventListener ('loadedmetadata', ()=>{
            video.play();
        })
     videoGrid.append(video) 
    };

// It will now allow others to stream their video

