


// // THIS IS THE VOLUME KNOB --------------------------------------------

// const volume = document.querySelector('.volume');
// const volumeRange = document.querySelector('.volume-range');
// const volumeContainer = document.querySelector('.volume-container');
// const volumeBtn = document.querySelector('.volume-button');

// const volumeRangeWidth = volumeRange.getBoundingClientRect().width; // This will be the volume limit (100%)

// /*volumeContainer.addEventListener("click", volumeClick);

// function volumeClick(event) {
//   let x = Math.floor(event.offsetX);
//   if (x < 0) x = 0; // check if it's too low
//   if (x > volumeRangeWidth) x = volumeRangeWidth; // check if it's too high
//   volume.style.width = (x + 10) + 'px';
// }
// */


// let mouseIsDown = false;

// window.addEventListener("mouseup", up);
// volumeContainer.addEventListener("mousedown", down);
// volumeContainer.addEventListener("mousedown", volumeSlide);
// volumeContainer.addEventListener("mousemove", volumeSlide);

// function down() {
//   mouseIsDown = true;
// }

// function up() {
//   mouseIsDown = false;
//   firstClick = true;
// }


// let firstClick = true; // this doesn't work
// function volumeSlide(event) {
//   if (mouseIsDown && !firstClick) {
//     let x = Math.floor(event.offsetX );
//     if (x < 0) x = 0; // check if it's too low
//     if (x > volumeRangeWidth) x = volumeRangeWidth; // check if it's too high
//     volume.style.width = (x + 10) + 'px';
//   }
//   //  "firstClick" ignores the offset on the first click as it gives the offset of the volume button
//   firstClick = false;
// }


// // function soundKick00() {
// //     var snd = new Audio('assets/drums/CymaticsOrchidKickLayered.wav')//wav is also supported
// //     snd.play()//plays the sound
    
// // }



// // THIS MAKES THE AUDIO A VARIABLE TO MANIPULATE -------------------------
// const audio = new Audio('assets/drums/CymaticsOrchidKickLayered.wav');
// const volume = document.querySelector('.volume');
// const volumeRange = document.querySelector('.volume-range');
// const volumeContainer = document.querySelector('.volume-container');
// const volumeBtn = document.querySelector('.volume-button');

// const volumeRangeWidth = volumeRange.getBoundingClientRect().width; // This will be the volume limit (100%)
// let mouseIsDown = false;

// // Initialize volume level (0.5 for example)
// let currentVolume = 0.5;

// // Update the volume of the audio when it's changed
// function updateAudioVolume() {
//   audio.volume = currentVolume;
// }

// // Attach the volume change event to the volume range container
// volumeContainer.addEventListener("mousedown", down);
// volumeContainer.addEventListener("mousemove", volumeSlide);

// function down() {
//   mouseIsDown = true;
// }

// window.addEventListener("mouseup", up);

// function up() {
//   mouseIsDown = false;
// }

// function volumeSlide(event) {
//   if (mouseIsDown) {
//     let x = Math.floor(event.offsetX);
//     if (x < 0) x = 0;
//     if (x > volumeRangeWidth) x = volumeRangeWidth;

//     // Calculate the volume based on the position of the slider
//     currentVolume = x / volumeRangeWidth;
//     updateAudioVolume();

//     // Update the visual representation of the volume control
//     volume.style.width = (x + 10) + 'px';
//   }
// }

// // Initial setup: set the volume of the audio to the initial value
// updateAudioVolume();



// THESE ARE THE PADS -------------------------------------------------
function soundKick00() {
    var snd = new Audio('assets/drums/CymaticsOrchidKickTight.wav'); 


    document.addEventListener('keydown', function(event) {
        if (event.key === 'z') {
            snd.play();
            // document.querySelector('.padTable button.pad:nth-child(1)').blur();
            // document.querySelector('section.padTable button.pad:nth-child(1):active');

            document.querySelector('.padTable button.pad:nth-child(1)').blur(), document.querySelector('.pad:nth-child(1):active');

       
        }
    });
    document.querySelector('.padTable button.pad:nth-child(1)').addEventListener('click', function() {
        snd.play(); 
    });
}





function soundKick01() {
    var snd = new Audio('assets/drums/CymaticsOrchidKickClean.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundKick02() {
    var snd = new Audio('assets/drums/CymaticsOrchidKickDancehall.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundSnare01() {
    var snd = new Audio('assets/drums/CymaticsOrchidSnareLustbug.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundSnare02() {
    var snd = new Audio('assets/drums/CymaticsOrchidSnareWanted.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundClap() {
    var snd = new Audio('assets/drums/CymaticsOrchidSnapHefty.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundHiHat() {
    var snd = new Audio('assets/drums/CymaticsOrchidHihatOpen.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundHiHatClosed() {
    var snd = new Audio('assets/drums/CymaticsOrchidHihatClosed2.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundSplash01() {
    var snd = new Audio('assets/drums/CymaticsOrchidCrashPerfect.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundSplash02() {
    var snd = new Audio('assets/drums/CymaticsOrchidCrashLightHighs.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundRide() {
    var snd = new Audio('assets/drums/CymaticsOrchidRideMysterious.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundTom() {
    var snd = new Audio('assets/drums/CymaticsOrchidKickLayered.wav')//wav is also supported
    snd.play()//plays the sound
}