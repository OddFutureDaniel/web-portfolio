<template>
    <div class="nav__button__container">
        <a class="nav__arrows" href="">
            <font-awesome-icon class="nav__arrow" icon="fa-solid fa-arrow-left-long" />
        </a>
        <a class="nav__arrows" href="">
            <font-awesome-icon class="nav__arrow" icon="fa-solid fa-arrow-right-long" />
        </a>
    </div>
</template>

<script></script>

<style scoped>
.nav__button__container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 75%;
    width: 100%;
 }
 .nav__arrows{
    width: 100px;
    height: auto;
 }

 .nav__arrow{
    height: auto;
    width: 100%;
 }
</style>