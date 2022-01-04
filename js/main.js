
// nav
const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const mobileNavIcon = document.querySelector('.mobile-nav-btn-icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavBtn.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})

// video

const videoBtn = document.querySelector('#story-video-btn');
const videoFile = document.querySelector('#video-story');
const videoBtnIcon = document.querySelector('#video-story-icon');

videoBtn.addEventListener('click', function(){
    
    if(videoFile.paused){
        videoFile.play();
        videoBtnIcon.src = './img/pause.svg';
    }else{
        videoFile.pause();
        videoBtnIcon.src = './img/play.svg';
    }
    
})