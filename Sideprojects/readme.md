 You have the possibility to administrate some funtions, they are listed below
    
    [VOLUME]
        * lowerVolume(down): lower the volume, volume range 0-100, down=amount
        * raiseVolume(up): raise the volume, volume range 0-100, up=amount
        * setVolume(vol): set the volume in absolute numbers 0-100
    
    [SONG MANAGEMENT]
        * skip(): skip to the next song
    
    [SCROLLBAR + SEEK]
        * getScrollBarProgress(): get the percentage of the song that has passed
        * seek(perc): seek to the percentage of the song
        
    [PLAYSTATE]
        * pause(): pause
        * play(): play again after pause
        * getPlayState(): get the playstate, returns "playing", "paused" or any other playstatenumber
        
    [QUEUES]
        * startOnPlaylist(reference): Start with a playlist from a user
        * startOnTrack(track): start with a certain track, the rest of the queue is random
        * suggestion(id): moves from standard to prior
        
    [QUEUES EXTENDED]
        * addPrior(id): adds a song to the prior
        * removeStandard(id): remove an element from standard
