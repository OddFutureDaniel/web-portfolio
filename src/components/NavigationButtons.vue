<template>
    <div class="nav__button__container">
        <button class="nav__arrows" @click="$emit(pageNo, count -= 1)" href="">
            <font-awesome-icon class="nav__arrow" icon="fa-solid fa-arrow-left-long" />
        </button>
        <button class="nav__arrows" @click="$emit(pageNo, count += 1)" href="">
            <font-awesome-icon class="nav__arrow" icon="fa-solid fa-arrow-right-long" />

        </button>
      
        <!--TODO: bind count to page change, add smooth page changing effect-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.nav__button__container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
}

.nav__arrows {
    width: 100px;
    height: auto;
    background: none;
    border: none;
}

.nav__arrow {
    height: auto;
    width: 100%;

}

.nav__arrow:hover {
    cursor: pointer;
}
</style>