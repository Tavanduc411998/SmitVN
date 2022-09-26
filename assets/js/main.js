var latestCheckOpening = false
var oldCheckOpening = false

var featureOpening = false

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

function feature1Click() {
    if (featureOpening) {
        document.getElementById('feature1__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature1__box').classList.add('ver__box--click')
        featureOpening = true
    }
}

function feature2Click() {
    if (featureOpening) {
        document.getElementById('feature2__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature2__box').classList.add('ver__box--click')
        featureOpening = true
    }
}


function feature3Click() {
    if (featureOpening) {
        document.getElementById('feature3__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature3__box').classList.add('ver__box--click')
        featureOpening = true
    }
}


function feature4Click() {
    if (featureOpening) {
        document.getElementById('feature4__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature4__box').classList.add('ver__box--click')
        featureOpening = true
    }
}


function feature5Click() {
    if (featureOpening) {
        document.getElementById('feature5__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature5__box').classList.add('ver__box--click')
        featureOpening = true
    }
}


function feature6Click() {
    if (featureOpening) {
        document.getElementById('feature6__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature6__box').classList.add('ver__box--click')
        featureOpening = true
    }
}


function feature7Click() {
    if (featureOpening) {
        document.getElementById('feature7__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature7__box').classList.add('ver__box--click')
        featureOpening = true
    }
}


function feature8Click() {
    if (featureOpening) {
        document.getElementById('feature8__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature8__box').classList.add('ver__box--click')
        featureOpening = true
    }
}


function feature9Click() {
    if (featureOpening) {
        document.getElementById('feature9__box').classList.remove('ver__box--click')
        featureOpening = false
    } else {
        document.getElementById('feature9__box').classList.add('ver__box--click')
        featureOpening = true
    }
}

