// function soundKick00() {
//     var snd = new Audio('assets/drums/CymaticsOrchidKickLayered.wav')//wav is also supported
//     snd.play()//plays the sound
    
// }



function soundKick00() {
    var snd = new Audio('assets/drums/CymaticsOrchidKickLayered.wav'); 


    document.addEventListener('keydown', function(event) {
        if (event.key === 'z') {
            snd.play();
            document.querySelector('.padTable button.pad:nth-child(1)').blur();
            document.querySelector('.padTable button.pad:nth-child(1):active');
        }
    });
    document.querySelector('.padTable button.pad:nth-child(1)').addEventListener('click', function() {
        snd.play(); 
    });
}





function soundKick01() {
    var snd = new Audio('assets/drums/Cymatics - Orchid Crash - Light Highs.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundKick02() {
    var snd = new Audio('assets/drums/Cymatics - Orchid Crash - Light Highs.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundSnare01() {
    var snd = new Audio('assets/drums/Cymatics - Orchid Crash - Light Highs.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundSnare02() {
    var snd = new Audio('assets/drums/Cymatics - Orchid Crash - Light Highs.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundClap() {
    var snd = new Audio('assets/drums/CymaticsOrchidSnapHefty.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundHiHat() {
    var snd = new Audio('assets/drums/CymaticsOrchidHihatOpen.wavv')//wav is also supported
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
    var snd = new Audio('assets/drums/Cymatics - Orchid Crash - Light Highs.wav')//wav is also supported
    snd.play()//plays the sound
}