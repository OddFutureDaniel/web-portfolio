<template>
    <div class="skills__container">
        <h1>Skills</h1>
        <h4>I really don't like to boast... ok FINE if you really must know</h4>
        <div class="skill">
            <h3>HTML</h3>
            <div class="skill__bar">
                <div class="html__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>CSS</h3>
            <div class="skill__bar">
                <div class="css__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>JavaScript</h3>
            <div class="skill__bar">
                <div class="js__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>VueJS</h3>
            <div class="skill__bar">
                <div class="vue__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>React</h3>
            <div class="skill__bar">
                <div class="react__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>JQuery</h3>
            <div class="skill__bar">
                <div class="jquery__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>PHP</h3>
            <div class="skill__bar">
                <div class="php__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>MySQL</h3>
            <div class="skill__bar">
                <div class="mysql__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>Java</h3>
            <div class="skill__bar">
                <div class="java__progress"></div>
            </div>
        </div>
        <div class="skill">
            <h3>Basketball</h3>
            <div class="skill__bar">
                <div class="basketball__progress"></div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default{
   
    
}
</script>

<style scoped>
.skills__container {
    display: flex;
    flex-direction: column;
    padding-top: 5em;
    padding-bottom: 5em;
    height: auto;

}

.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.skill__bar {
    height: 5px;
    width: 70%;
    background-color: black;
    border-radius: 5px;
}

h1{
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
}

h3 {
    margin-block-start: 0.8em;
    margin-block-end: 0.8em;
}

.skill__bar div {
    height: 100%;
    background-color: #52b7bd;
    border-radius: 5px 5px 5px 5px;
}

.html__progress {
    width: 90%;
}

.css__progress {
    width: 85%;
}

.js__progress {
    width: 75%;
}

.vue__progress {
    width: 70%;
}

.react__progress {
    width: 40%;
}

.jquery__progress{
    width: 50%;
}

.php__progress {
    width: 20%;
}

.mysql__progress{
    width: 50%;
}

.java__progress {
    width: 75%;
}

.basketball__progress{
    width: 120%;
}

@media (max-width: 600px) {
   h4{
    margin-left: 1.5em;
    margin-right: 1.5em;
   }
}
</style>