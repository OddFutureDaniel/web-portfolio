<template>
    <div class="portfolio__container">
        <h1>Portfolio</h1>
        <h4>Here lies a plethora of varied web development projects I have completed or which are currently in development. </h4>
        <div class="card__container">
            <div class="card">
                <h3>Netflix Clone</h3>
                <a href="https://github.com/OddFutureDaniel/netflix-clone" target="_blank">
                    <img src="../assets/netflixclone.png" alt="netflix clone">
                </a>
            </div>
            <div class="card">
                <h3>Portfolio Website</h3>
                <a href="https://github.com/OddFutureDaniel/web-portfolio" target="_blank">
                    <img src="../assets/portfolio.png" alt="portfolio site">
                </a>
            </div>
            <div class="card">
                <h3>Restaurant Website</h3>
                <a href="https://github.com/OddFutureDaniel/theCups" target="_blank">
                    <img src="../assets/thecups.png" alt="Restaurant Website">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default{
   
}
</script>

<style scoped>
.portfolio__container {
    padding-top: 5em;
    padding-bottom: 5em;
    min-height: 90vh;
    height: auto;

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
    border-radius: 5px;
}

img {
    width: 20em;
    height: 180px;
    border: 1px solid black;
    border-radius: 5px;
}

@media screen and (max-width: 600px) {
    h4{
        margin-left: 2em;
        margin-right: 2em;
    }
}

</style>