 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '0',
          width: '0',
          videoId: 'Dx5qFachd3A',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        


        //play-pause button
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", function() {
          if(player.getPlayerState() == -1 || player.getPlayerState() == 2){
            player.playVideo()
            playButton.innerHTML="PAUSE"
          }
          else{
            player.pauseVideo()
            playButton.innerHTML="PLAY"
          }
          
        });


        // + button
        var inc = document.getElementById("increase");
        inc.addEventListener("click", function() {
        var x
        x=player.getVolume()
        x+=20
        volumeslider.value=x
        player.setVolume(x)
        });
        

        // - button
        var dec = document.getElementById("decrease");
        dec.addEventListener("click", function() {
        var x
        x=player.getVolume()
        x-=20
        volumeslider.value=x
        player.setVolume(x)
        });
        

        // volume slider
        volumeslider=document.getElementById("volumeslider");
        volumeslider.addEventListener("change",setVolume,false);
      }
      

      function setVolume(){
        x=volumeslider.value*2
        player.setVolume(x)
      }
    