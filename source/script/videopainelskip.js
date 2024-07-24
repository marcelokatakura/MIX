const videos = document.querySelectorAll('#video')
let timerActive = true;
let ms = 14000

    videos.forEach((video, index) => {
        video.onended = () => {
            if (index === (videos.length - 2)) {
                document.getElementById('next').style.display = 'none'
            }
            if (index === (videos.length - 1)) {
                document.getElementById('next').style.display = 'block'
            }
            if (video.classList[0] === 'playing') {
                videos[index].classList.remove('playing')
                dot[index].classList.remove('dotactive')
                if (videos[index+1]) {
                    videos[index+1].classList.add('playing')
                    dot[index+1].classList.add('dotactive')
                    videos[index+1].play()  
                    document.getElementById('prev').style.display = 'block'  
                } else {
                    videos[0].classList.add('playing')
                    dot[0].classList.add('dotactive')
                    videos[0].play()
                    document.getElementById('prev').style.display = 'none'
                }
                
            }
        }
    })

    let timer = setInterval (() => {
        nextVideo('interval')
    }, ms)


    const nextVideo = (param) => {
        if (!timerActive) {
            setTimeout(() => {
                timer = setInterval (() => {
                    nextVideo('interval')
                }, ms)
            }, ms);
        }
        if (param != 'interval') {
            clearInterval(timer)
            timerActive = false;
        }
        let started = false
        videos.forEach((video, index) => {
            if (video.classList[0] === 'playing' && !started) {
                started = true
                video.currentTime = 0
                video.classList.remove('playing')
                if (videos[index+1]) {
                    videos[index+1].classList.add('playing')
                    dot[index].classList.remove('dotactive')
                    dot[index+1].classList.add('dotactive')
                    videos[index+1].play()  
                    document.getElementById('prev').style.display = 'block'  
                } else {
                    videos[0].classList.add('playing')
                    dot[videos.length - 1].classList.remove('dotactive')
                    dot[0].classList.add('dotactive')
                    videos[0].play()
                    document.getElementById('next').style.display = 'block'
                    document.getElementById('prev').style.display = 'none'
                }
            }
        })
        if (videos[videos.length - 1].classList[0] === 'playing') {
            document.getElementById('next').style.display = 'none'
            
        }
    }
    
    const prevVideo = () => {
        let started = false
        videos.forEach((video, index) => {
            if (video.classList[0] === 'playing' && !started) {
                ms = 0 
                started = true
                video.currentTime = 0
                video.classList.remove('playing')
                videos[index-1].classList.add('playing')
                videos[index-1].play()
                dot[index].classList.remove('dotactive')
                dot[index-1].classList.add('dotactive')
            }
        })
        if (document.getElementById('next').style.display === 'none') {
            document.getElementById('next').style.display = 'block'
        }
        if (videos[0].classList[0] === 'playing') {
            document.getElementById('prev').style.display = 'none'
        }
    }

