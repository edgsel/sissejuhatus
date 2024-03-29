var textWrapper = document.querySelector('.greeting .letters');

textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x20]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
    .add({
        targets: '.greeting .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.greeting .line',
        translateX: [0, document.querySelector('.greeting .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
    targets: '.greeting .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
}).add({
    targets: '.greeting',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});