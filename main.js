/* Elementlere ulasmak */

const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const repeatButton = document.getElementById('repeat')
const shuffleButton = document.getElementById('shuffle')
const audio = document.getElementById('audio')
const songImage = document.getElementById('song-image')
const songName = document.getElementById('song-name')
const songArtist = document.getElementById('song-artist')
const pauseButton = document.getElementById('pause')
const playButton = document.getElementById('play')
const playListButton = document.getElementById('playlist')

const maxDuration = document.getElementById('max-duration')
const currentTimeRef = document.getElementById('current-time')

const progressBar = document.getElementById('progress-bar')
const playListContainer = document.getElementById('playlist-container')
const closeButton= document.getElementById('close-button')
const playListSongs = document.getElementById('playlist-songs')

const currentProgress = document.getElementById('current-progress')


let index

//döngü
let loop = true

//JSON
const songsList = [
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586601730190.mp3",
        artist: "1.Cüz",
        image: "./kuran/1.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586605195857.mp3",
        artist: "2.Cüz",
        image: "kuran/2.jpeg"
    },{
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586605601546.mp3",
        artist: "3.Cüz",
        image: "kuran/3.jpeg"
    },{
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586606015774.mp3",
        artist: "4.Cüz",
        image: "kuran/4.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586606288746.mp3",
        artist: "5.Cüz",
        image: "./kuran/5.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586606583465.mp3",
        artist: "6.Cüz",
        image: "./kuran/6.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586606947901.mp3",
        artist: "7.Cüz",
        image: "./kuran/7.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/30/b6e798d7-ed88-485b-a774-9c8a3733cc97/1588207760210.mp3",
        artist: "8.Cüz",
        image: "./kuran/8.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586607607766.mp3",
        artist: "9.Cüz",
        image: "./kuran/9.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586608107034.mp3",
        artist: "10.Cüz",
        image: "./kuran/10.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586608683808.mp3",
        artist: "11.Cüz",
        image: "./kuran/11.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586609217507.mp3",
        artist: "12.Cüz",
        image: "./kuran/12.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586609559883.mp3",
        artist: "13.Cüz",
        image: "./kuran/13.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586609854546.mp3",
        artist: "14.Cüz",
        image: "./kuran/14.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586608846280.mp3",
        artist: "15.Cüz",
        image: "./kuran/15.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586609932124.mp3",
        artist: "16.Cüz",
        image: "./kuran/16.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586610293646.mp3",
        artist: "17.Cüz",
        image: "./kuran/17.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586610951599.mp3",
        artist: "18.Cüz",
        image: "./kuran/18.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586611493118.mp3",
        artist: "19.Cüz",
        image: "./kuran/19.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586611779981.mp3",
        artist: "20.Cüz",
        image: "./kuran/20.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586612296980.mp3",
        artist: "21.Cüz",
        image: "./kuran/21.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586612559141.mp3",
        artist: "22.Cüz",
        image: "./kuran/22.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586613152248.mp3",
        artist: "23.Cüz",
        image: "./kuran/23.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586613708408.mp3",
        artist: "24.Cüz",
        image: "./kuran/24.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586614076790.mp3",
        artist: "25.Cüz",
        image: "./kuran/25.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586614369606.mp3",
        artist: "26.Cüz",
        image: "./kuran/26.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586614678407.mp3",
        artist: "27.Cüz",
        image: "./kuran/27.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586614924205.mp3",
        artist: "28.Cüz",
        image: "./kuran/28.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586615013868.mp3",
        artist: "29.Cüz",
        image: "./kuran/29.jpeg"
    },
    {
        name: "Kur'an-ı Kerim Meali ",
        link: "https://audios.tmgrup.com.tr/fkr/2020/04/11/b6e798d7-ed88-485b-a774-9c8a3733cc97/1586615418906.mp3",
        artist: "30.Cüz",
        image: "./kuran/30.jpeg"
    }

]

const playAudio= ()=>{
    audio.play()
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')
}

//durdur
const pauseAudio = () =>{
    audio.pause()
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')

}

//şarkı ata
const setSong=(arrayIndex) =>{
let{name,link,artist,image} = songsList[arrayIndex]

audio.src = link
songName.innerHTML=name
songArtist.innerHTML=artist
songImage.src = image

audio.onloadedmetadata = ()=>{
    //saniye hesapla
    maxDuration.innerText = timeFormatter(audio.duration)

}
playListContainer.classList.add('hide')
playAudio()

}

//kaç saniye ilerledi kontrolü
setInterval(()=>{
    currentTimeRef.innerHTML = timeFormatter(audio.currentTime)
    //media çubuğu ilerletme
    currentProgress.style.width=(audio.currentTime/audio.duration.toFixed(3))*100 + "%"
},1000)

//şarkı çubuğu tıklandığında
progressBar.addEventListener('click', (event)=>{

    //başlangıç
    let coordStart = progressBar.getBoundingClientRect().left
   
    //x ekseninde tıklama noktası
    let coordEnd = event.clientX
    

    let progres = (coordEnd-coordStart)/progressBar.offsetWidth
    //progress i ilerlet
    currentProgress.style.width = progres * 100 + "%"

    //sesin süresini değiştir
    audio.currentTime = progres * audio.duration

    audio.play()
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')
})


//zaman formatla

const timeFormatter = (timeInput)=>{
    let minute = Math.floor(timeInput/60)
    minute = minute < 10 ? "0" +minute : minute
    let second = Math.floor(timeInput%60)
    second = second <10 ? "0"+second : second
    return `${minute}: ${second}`
}



const previousSong= ()=>{
    if(index > 0){
        pauseAudio()
        index = index-1
    }else{
        index = songsList.length -1
    }
    setSong(index)
}

const nextSong = () => {
    if(loop){
        if(index == (songsList.length -1)){
            index=0
        }else{
            index=index+1
        }
        setSong(index)
    }else{
        let randIndex = Math.floor(Math.random()* songsList.length)
        setSong(randIndex)
    }
}


//tekrar butonu tıklanıldığında
repeatButton.addEventListener('click',()=>{
    if(repeatButton.classList.contains('active')) {
        repeatButton.classList.remove('active')
        audio.loop = true
    }else{
        repeatButton.classList.add('active')
        audio.loop = false
    }
})

//karışık tıklanıldığında
shuffleButton.addEventListener('click', ()=>{
    if(shuffleButton.classList.contains('active')) {
        shuffleButton.classList.remove('active')
        audio.loop = false
    }else{
        shuffleButton.classList.add('active')
        audio.loop = true
    }

})


//şarkı bittiğinde sonraki şarkıyı çağır
audio.onended = ()=>{
    nextSong()
}

playListButton.addEventListener('click',()=>{
    playListContainer.classList.remove('hide')
})

closeButton.addEventListener('click',()=>{
    playListContainer.classList.add('hide')
})

// oynat butonuna tıklanıldığında
playButton.addEventListener('click',playAudio)

//önceki tıklanırsa
prevButton.addEventListener('click',previousSong)
//sonrakine git
nextButton.addEventListener('click',nextSong)


const initializePlaylist = ()=>{
    for(let i in songsList){
        playListSongs.innerHTML += `<li class="playlistSong"
        onclick="setSong(${i})">

        <div class="playlist-image-container">
         <img src="${songsList[i].image}"/>
        </div>

        <div class="playlist-song-details">
         <span id="playlist-song-name">
          ${songsList[i].name}
         </span>

         <span id="playlist-song-artist-album">
         ${songsList[i].artist}
         </span>

        </div>
       </li>
       `
    }

}


//durdur butonuna tıklanıldığında
pauseButton.addEventListener('click', pauseAudio)
window.onload = () =>{
    index= 0
    setSong(index)
    pauseAudio()
    initializePlaylist()
}



