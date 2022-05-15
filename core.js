function setPlayer(){
    var vids = document.getElementsByClassName('MFXplayer')
    for (var i = 0; i < vids.length;i++){
        var vid = vids[i]
        var frames = []
        for(j=0; j < 100;j++){
            frames.push(`${vid.duration /100 * j}`)
        }
        vid.value = {
            max:vid.duration,
            prev : frames
        }
    // vid.currentTime
    } 
}



setPlayer()
console.log(document.getElementsByClassName('MFXplayer')[0].value)