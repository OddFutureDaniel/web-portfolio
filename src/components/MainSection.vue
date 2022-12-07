<template>
    <div class="container">
        <div class="main__section">
            <HomePage id="home"/>
            <AboutPage id="about" />
            <SkillsPage id="skills" />
            <PortfolioPage id="portfolio" />
            <ContactMe id="contact" />
        </div>
    </div>
</template>

<script>
import HomePage from './HomePage.vue'
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
        HomePage,
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


</style>