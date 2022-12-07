<template>
    <div class="home__title" id="home">
        <h1>Daniel Rogerson</h1>
        <h3>Frontend Web Developer</h3>
        <img class="logo" src="../assets/errvv.png" alt="">
    </div>
</template>

<script></script>

<style scoped>
.home__title {
    height:90vh;
    text-align: center;
    text-transform: uppercase;
    font-style: normal;
    margin: 0;
    padding-top: 6em;
    padding-bottom: 7.8em;
}

.logo {
    margin-top: 3em;
    margin-bottom: 3em;
    width: 300px;
    border-radius: 300px;
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
}

.home__title h3 {
    margin-block-end: 0em;
    color: #52b7bd;
}
</style>