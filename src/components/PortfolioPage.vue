<template>
    <div class="portfolio__container">
        <h1>Portfolio</h1>
        <div class="card__container">
            <div class="card">
                <h3>Netflix Clone</h3>
                <a href="https://github.com/OddFutureDaniel/netflix-clone" target="_blank">
                    <img src="../assets/netflixclone.png" alt="netflix clone">
                </a>
            </div>
            <div class="card">
                <h3>Netflix Clone</h3>
                <a href="" target="_blank">
                    <img src="../assets/netflixclone.png" alt="netflix clone">
                </a>
            </div>
            <div class="card">
                <h3>Netflix Clone</h3>
                <a href="" target="_blank">
                    <img src="../assets/netflixclone.png" alt="netflix clone">
                </a>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.portfolio__container {
    padding-top: 5em;
    padding-bottom: 5em;
}

.card__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    height: auto;
    margin: 0;
}

.card {
    width: auto;
    height: auto;
    padding: 1em;
}

img {
    width: 20em;
}
</style>