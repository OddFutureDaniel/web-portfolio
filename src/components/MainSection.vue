<template>
    <div class="main__section">
        <div id="item-0">
            <NavigationButtons />
        </div>
        <div id="item-1">
            <AboutPage />
        </div>
        <div id="item-2">differing api things?</div>
    </div>
</template>

<script>
import AboutPage from './AboutPage.vue'
import NavigationButtons from './NavigationButtons.vue'

export default {
    name: 'App',
    components: {
        AboutPage,
        NavigationButtons
    }
}
</script>

<style scoped>
.main__section {
    display: grid;

    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 100%;
    gap: 0px;


}

#item-0 {

    background-color: #F76756;
    grid-row-start: 3;
    grid-column-start: 4;

    grid-row-end: 4;
    grid-column-end: 6;

}

#item-1 {

    background-color: #D99968;
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 4;
    grid-column-end: 4;

}

#item-2 {

    background-color: #BE6CEA;
    grid-row-start: 1;
    grid-column-start: 4;

    grid-row-end: 3;
    grid-column-end: 6;

}
</style>