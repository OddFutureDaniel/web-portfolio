<template>
    <nav class="nav__container">
        <ul class="social__links">
            <a class="social__link" href="https://github.com/OddFutureDaniel" target="_blank">
                <font-awesome-icon class="nav__icon" icon="fa-brands fa-github-alt" />
            </a>
            <a class="social__link" href="https://www.linkedin.com/in/daniel-rogerson/" target="_blank">
                <font-awesome-icon class="nav__icon" icon="fa-brands fa-linkedin" />
            </a>

        </ul>
        <ul class="options" id="optionsID">
            <router-link class="option" to="/Home">Home</router-link>
            <router-link class="option" to="/About">About</router-link>
            <router-link class="option" to="/Skills">Skills</router-link>
            <router-link class="option" to="/Portfolio">Portfolio</router-link>
            <router-link class="option" to="/Contact">Contact</router-link>


            <!-- <a class="option" href="#home">Home</a>
            <a class="option" href="#about">About</a>
            <a class="option" href="#skills">Skills</a>
            <a class="option" href="#portfolio">Portfolio</a>
            <a class="option" href="#contact">Contact</a> -->
        </ul>
    </nav>

</template>

<script>
export default {
} 
</script>

<style scoped>
.nav__container {
    position: fixed;
    min-width: 100vw;
    display: flex;
    height: 3rem;
    background-color: #464d5d;
    margin: 0px;

    justify-content: center;
    box-shadow: 0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%);
    z-index: 999;
}

.social__links {
    display: flex;
    margin: 0px;
    padding-right: 1em;
    padding-left: 1em;
    column-gap: 1em;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    width: 100px;

}

.options {
    display: flex;
    padding-right: 1em;
    padding-left: 1em;
    justify-content: center;
    margin: 0px;
    column-gap: 1em;
    flex-wrap: wrap;
    align-items: center;
}

.option {
    text-decoration: none;
    color: #b1a4a4;
    font-weight: 200;
}

.social__link {
    text-decoration: none;
    width: 30px;
    height: 30px;
    align-items: center;
    color: #b1a4a4;
}

.active {
    text-decoration: underline;
    color: red;
}

.nav__icon {
    width: 100%;
    height: auto;
    align-items: center;
}

.option:active {
    transform: scale(0.95);

}
</style>

