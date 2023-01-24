<template>
    <div class="extra__container">
        <div class="carousel_container">
            <carousel :items-to-show="1.5" :wrap-around="true">
                <slide class="slidee" v-for="slide in slides" :key="slide.id">
                    <h3>{{ slide.title }}</h3>
                    <div class="carousel__item">
                        <a :href="slide.href" target="_blank">
                            <img class="slideIMG" :src="require('../assets/' + slide.src)" alt="jj">
                        </a>
                    </div>
                </slide>
                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    data() {
        return {
            slides: [
                { id: '1', title: 'React Netflix Clone', src: "netflixclone.png", href: "https://github.com/OddFutureDaniel/netflix-clone" },
                { id: '2', title: 'VueJS Portfolio Website', src: "portfolio.png", href: "https://github.com/OddFutureDaniel/web-portfolio" },
                { id: '3', title: 'Restaurant Website', src: "thecups.png", href: "https://github.com/OddFutureDaniel/theCups" },
                { id: '4', title: 'React Card Payment Component', src: "carpayment.png", href: "https://github.com/OddFutureDaniel/CreditCardFormComponent" },
            ]
        }
    },
    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

}
</script>

<style scoped>
.extra__container {
    min-height: 100vh;
    height: 90vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel_container {
    height: auto;
    width: 80%;
}

.carousel__item {
    min-height: 220px;
    max-height: 220px;
    width: 90%;
    background-color: #f8b4f7;
    color: #000000;
    font-size: 0.9em;
    border-radius: 8px;
    justify-content: center;
    align-items: center;

}

.carousel__slide {
    padding: 10px;
}

.slideIMG {
    width: 100%;
    height: 100%;
    max-height: 270px;
}

.slidee {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>