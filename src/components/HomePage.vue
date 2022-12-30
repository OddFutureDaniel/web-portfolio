<template>
    <div class="home__title" id="home">
        <h1>Daniel Rogerson</h1>
        <h3>Frontend Web Developer</h3>
        <img class="logo" src="../assets/errvv.png" alt="">
    </div>
    <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>

    </div>
</template>

<script></script>

<style scoped>
.home__title {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    text-transform: uppercase;
    font-style: normal;
    margin: 0;
    padding-top: 6em;
    padding-bottom: 7.8em;
    z-index: 999;
}

.logo {
    margin-top: 3em;
    margin-bottom: 3em;
    width: 300px;
    border-radius: 300px;
    z-index: 999;
}

.logo:hover {
    transform: scaleX(-1);
}

.home__title h1 {
    font-weight: 100;
    font-size: 7.5vw;
    line-height: 1;
    margin-block-start: 0em;
    margin-block-end: 0em;
    z-index: 998;
}

.home__title h3 {
    margin-block-end: 0em;
    color: #52b7bd;
    z-index: 999;
}

/* ------------------Droplet animation adapted by https://codepen.io/osorina ---------------------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
}

html,
body {
    height: 100%;
}

body {
    display: table;
    width: 100%;
    height: 100%;
    background-color: #171717;
    color: #000;
    line-height: 1.6;
    position: relative;
    font-family: sans-serif;
    overflow: hidden;
}

.lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
    width: 90vw;
}

.line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    overflow: hidden;
}

.line::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #52b7bd 75%, #ffffff 100%);
    animation: drop 3.5s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

.line:nth-child(1) {
    margin-left: -25%;
}

.line:nth-child(1)::after {
    animation-delay: 0.8s;
}

.line:nth-child(3) {
    margin-left: 25%;
}

.line:nth-child(3)::after {
    animation-delay: 0.5s;
}

.line:nth-child(4) {
    margin-left: 50%;
}

.line:nth-child(4)::after {
    animation-delay: 1.1s;
}

.line:nth-child(5) {
    margin-left: -50%;
}

.line:nth-child(5)::after {
    animation-delay: 1s;
}

@keyframes drop {
    0% {
        top: -50%;
    }

    100% {
        top: 110%;
    }
}
</style>