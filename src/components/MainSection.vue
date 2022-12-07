<template>
    <div class="container">
        <div class="main__section">
            <div class="home__title" id="home">
                <h1>Daniel Rogerson</h1>
                <h3>Frontend Web Developer</h3>
                <img class="logo" src="../assets/errvv.png" alt="">
            </div>
            <AboutPage id="about" />
            <SkillsPage id="skills" />
            <PortfolioPage id="portfolio" />
            <ContactMe id="contact" />
        </div>
    </div>
</template>

<script>
import AboutPage from './AboutPage.vue'
import SkillsPage from './SkillsPage.vue'
import ContactMe from './ContactMe.vue'
import PortfolioPage from './PortfolioPage.vue'
export default {
    data() {
        return {
            activeComponent: 'AboutPage',
        };
    },
    name: 'App',
    components: {
        AboutPage,
        SkillsPage,
        ContactMe,
        PortfolioPage
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 0;
    border: 0;
}

.main__section {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: auto;
    gap: 0px;
    justify-content: center;
}

.home__title {
    text-align: center;
    text-transform: uppercase;
    font-style: normal;
    margin: 0;
    padding-top: 6em;
    padding-bottom: 5em;
}

.logo {
    margin: 3em;
    width: 200px;
    border-radius: 200px;
}

.logo:hover{
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

}

/** Navigation buttons section */
#item-0 {

    background-color: rgb(234, 219, 208);

    grid-row-start: 3;
    grid-column-start: 4;

    grid-row-end: 4;
    grid-column-end: 6;
}

/** Main section */
#item-1 {

    background-color: rgb(234, 219, 208);
    height: auto;
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 4;
    grid-column-end: 4;
}

/** Api/Filler section */
#item-2 {

    background-color: rgb(234, 219, 208);
    grid-row-start: 1;
    grid-column-start: 4;

    grid-row-end: 3;
    grid-column-end: 6;
}
</style>