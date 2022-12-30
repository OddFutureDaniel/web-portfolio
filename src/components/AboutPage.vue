<template>
    <div class="about__section">
        <h1>About Me</h1>
        <div class="about__text">
            <p>Hello, I'm Daniel, a 24 year old Web Developer and Designer based in South West London who's on track to
                achieve a 2:1 in Computer
                Science at Royal Holloway University of London in May '23.
                I've had a lifelong passion for all things creative, I love creating applications, playing basketball,
                designing and creating clothes and baking lemon drizzle's. My dream is to one day be able to combine my
                programming and fashion skills to create garments that
                'come alive'. I've chosen to begin my career in web development as it allows me to nurture my
                programming skills as well as inject some creative flair into my work.</p>
            <p>
                Web Development became a passion of mine when doing my dissertation project. Before this I was heavily
                cemented in backend using mainly Java, Python and C. The project allowed me to
                work across the full stack and really gave me a working understanding of how web projects are developed.
                The main aspect of my project was validation of data sent across routes to various endpoints. The whole
                project was scaffolded using VueJS which was my introduction into Javascript and some Typescript. I
                instantly
                knew that this was the vein of development I wanted to explore more and spent the following summer and
                beyond
                burying myself into all things web development! Have a look at my 'Skills' page to see what different
                web development
                technologies I currently am comfortable in.
            </p>
        </div>
        <div class="cv_link">
            <h4 class="bounce">
                <span>C</span>
                <span>h</span>
                <span>e</span>
                <span>c</span>
                <span>k</span>
                <span>&nbsp;</span>
                <span>O</span>
                <span>u</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>M</span>
                <span>y</span>
                <span>&nbsp;</span>
                <span>C</span>
                <span>V</span>
                <span>&nbsp;</span>
                <span>B</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>w</span>
                <span>!</span>



            </h4>
            <a class="resume__link" href="https://oddfuturedaniel.github.io/" target="_blank">
                <h4>CV/Resume</h4>
                <font-awesome-icon class="cv_image" icon="fa-solid fa-file" />
            </a>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.about__section {
    display: flex;
    flex-direction: column;
    padding-top: 5em;
    padding-bottom: 5em;
    align-items: center;
    min-height: 90vh;
    height: auto;

}

.cv_link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cv_image {
    height: 1.6em;
}

.about__text {
    width: 45%;
}

.resume__link {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 3em;
    width: 11em;
    background-color: #1b1d21;
    border: none;
    border-style: none;
    color: #52b7bd;
    border-radius: 7px;
    margin-right: 0px;
    margin-top: 2em;
    text-decoration: none;
}

h4 {
    margin: 0px;
}

.bounce span {
    position: relative;
    top: 2px;
    display: inline-block;
    animation: bounce .6s ease infinite alternate;
    color: #b4c8a8;

}

.bounce span:nth-child(2) {
    animation-delay: .1s;
}

.bounce span:nth-child(3) {
    animation-delay: .2s;
}

.bounce span:nth-child(4) {
    animation-delay: .3s;
}

.bounce span:nth-child(5) {
    animation-delay: .4s;
}

.bounce span:nth-child(6) {
    animation-delay: .5s;
}

.bounce span:nth-child(7) {
    animation-delay: .6s;
}

.bounce span:nth-child(8) {
    animation-delay: .7s;
}

.bounce span:nth-child(9) {
    animation-delay: .8s;
}

.bounce span:nth-child(10) {
    animation-delay: .9s;
}

.bounce span:nth-child(11) {
    animation-delay: 1s;
}

.bounce span:nth-child(12) {
    animation-delay: 1.1s;
}

.bounce span:nth-child(13) {
    animation-delay: 1.2s;
}

.bounce span:nth-child(14) {
    animation-delay: 1.3s;
}

.bounce span:nth-child(15) {
    animation-delay: 1.4s;
}

.bounce span:nth-child(16) {
    animation-delay: 1.5s;
}

.bounce span:nth-child(17) {
    animation-delay: 1.6s;
}

.bounce span:nth-child(18) {
    animation-delay: 1.7s;
}

.bounce span:nth-child(19) {
    animation-delay: 1.8s;
}

.bounce span:nth-child(20) {
    animation-delay: 1.9s;
}

.bounce span:nth-child(21) {
    animation-delay: 2s;
}

.bounce span:nth-child(22) {
    animation-delay: 2.1s;
}

@keyframes bounce {
    100% {
        top: -2px;

    }
}

@media screen and (max-width: 600px) {
    .about__text {
        width: 65%;
    }
}
</style>

