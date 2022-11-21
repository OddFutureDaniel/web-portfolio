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
        <ul class="options">
            <a class="option" href="#">Home</a>
            <a class="option" href="#">About</a>
            <a class="option" href="#">Skills</a>
            <a class="option" href="#">Contact</a>
        </ul>
    </nav>

</template>

<script>

</script>

<style scoped>
.nav__container {
    display: flex;
    height: 72px;

    margin: 0px;
    margin-left: 5vw;
    margin-right: 5vw;

    justify-content: space-between;

}

.social__links {
    display: flex;
    margin: 0px;
    padding-right: 40px;
    padding-left: 0px;
    column-gap: 1em;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100px;

}

.options {
    display: flex;

    justify-content: center;
    margin: 0px;
    column-gap: 1em;
    flex-wrap: wrap;
    align-items: center;
}

.option {
    text-decoration: none;
}

.social__link {
    text-decoration: none;
    width: 30px;
    height: 30px;
    align-items: center;
}

.nav__icon {
    width: 100%;
    height: auto;
    align-items: center;
}
</style>

