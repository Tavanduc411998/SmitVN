var latestCheckOpening = false
var oldCheckOpening = false

function showIntro() {
    document.getElementById('content__intro').style.display = 'block'
    document.getElementById('content__vers').style.display = 'none'
    document.getElementById('content__introduction--button').classList.add('turnOff')
    document.getElementById('content__version--button').classList.remove('turnOff')
}

function showVers() {
    document.getElementById('content__intro').style.display = 'none'
    document.getElementById('content__vers').style.display = 'block'
    document.getElementById('content__version--button').classList.add('turnOff')
    document.getElementById('content__introduction--button').classList.remove('turnOff')
}

function latestVerClick() {
    if (latestCheckOpening) {
        document.getElementById('latest__box').classList.remove('ver__box--click')
        latestCheckOpening = false
    } else {
        document.getElementById('latest__box').classList.add('ver__box--click')
        latestCheckOpening = true
    }
}

function oldVerClick() {
    if (oldCheckOpening) {
        document.getElementById('old__box').classList.remove('ver__box--click')
        oldCheckOpening = false
    } else {
        document.getElementById('old__box').classList.add('ver__box--click')
        oldCheckOpening = true
    }
}