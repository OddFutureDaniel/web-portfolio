<!-- view -->
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
        <!-- <button class="hamburger" id="hamburger" @click="showNavMobile">
            <font-awesome-icon class="hamburger_icon" icon="fa-solid fa-bars" />
        </button> -->

        <button class="hamburger" id="hamburger" @click="showNavMobile">
            <div class="burger"></div>
            <div class="burger"></div>
            <div class="burger"></div>
        </button>

        <ul class="options" id="optionsID">
            <router-link class="option" to="/Home">Home</router-link>
            <router-link class="option" to="/About">About</router-link>
            <router-link class="option" to="/Skills">Skills</router-link>
            <router-link class="option" to="/Portfolio">Portfolio</router-link>
            <router-link class="option" to="/Contact">Contact</router-link>
            <router-link class="option" to="/Supersecretpage">What's this?</router-link>
        </ul>
    </nav>
    <nav class="hamburgerNav">
        <ul class="hamburger_options" id="HoptionsID" v-show="navMobile">
            <router-link class="Hoption" to="/Home" @click="closeMenu">Home</router-link>
            <router-link class="Hoption" to="/About" @click="closeMenu">About</router-link>
            <router-link class="Hoption" to="/Skills" @click="closeMenu">Skills</router-link>
            <router-link class="Hoption" to="/Portfolio" @click="closeMenu">Portfolio</router-link>
            <router-link class="Hoption" to="/Contact" @click="closeMenu">Contact</router-link>
            <router-link class="Hoption" to="/Supersecretpage" @click="closeMenu">What's this?</router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    //state
    data() {
        return {
            navMobile: false
        }
    },
    //actions
    methods: {
        showNavMobile() {
            if (this.navMobile == false) {
                this.navMobile = true;
            } else {
                this.navMobile = false
            }
        },
        closeMenu() {
            this.navMobile = false;
            document.getElementById('HoptionsID').style.display = 'none';
        }
    }
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
    z-index: 998;
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
    color: #b4c8a8;
    font-weight: 200;
}

.social__link {
    text-decoration: none;
    width: 30px;
    height: 30px;
    align-items: center;
    color: #b4c8a8;
}

.nav__icon {
    width: 100%;
    height: auto;
    align-items: center;
}

.option:active {
    transform: scale(0.95);
}

.hamburger {
    display: none;
    background: none;
    border-style: none;

}

.hamburger_icon {
    height: 80%;
    color: #b4c8a8;
    margin-top: 0.4em;
}

@media (max-width: 550px) {

    .nav__container {
        justify-content: space-evenly;
    }

    .hamburger {
        width: auto;
        height: 95%;
        display: flex;
        justify-content: space-evenly;
        flex-flow: column nowrap;
        z-index: 10;
        align-self: center;
    }

    .burger {
        width: 2rem;
        height: 0.17rem;
        border-radius: 5px;
        background-color: #b4c8a8;
        transform-origin: 1px;
        transition: all 0.3s linear;
    }

    .hamburger_icon {
        display: flex;
        margin-top: 0;
        height: 80%;
    }

    .options {
        display: none;
    }

    .hamburgerNav {
        position: fixed;
        display: flex;
        justify-content: center;
        width: 100vw;
        height: auto;
        flex-wrap: wrap;
        margin-top: 3rem;
        align-items: center;
        z-index: 998;
        background-color: rgb(38, 38, 38);
        opacity: 0.95;

    }

    .hamburger_options {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
        align-items: center;
        column-gap: 1em;
        padding-left: 0;
    }

    .Hoption {
        width: 100%;
        text-decoration: none;
        color: #b4c8a8;
        font-weight: 200;
        padding-block: 0.6em;
    }
}
</style>

