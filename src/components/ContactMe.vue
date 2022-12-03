<template>
    <div class="contact__container">
        <h1>Get in touch</h1>
        <form class="contact__form" ref="form" @submit.prevent="sendEmail">
            <div class="name__email">
                <div class="name__area">
                    <label>Name</label>
                    <input class="input__area" type="text" name="user_name">
                </div>
                <div>
                    <label>Email</label>
                    <input class="input__area" type="email" name="user_email">
                </div>
            </div>
            <div class="message__area">
                <label>Message</label>
                <textarea class="message__input__area" name="message"></textarea>

            </div>
            <input class="submit__box" type="submit" value="Send">
        </form>
    </div>

</template>
  
<script>
import emailjs from '@emailjs/browser';

export default {
    methods: {
        sendEmail() {
            emailjs.sendForm('service_sdho7o3', 'template_zsxiz5d', this.$refs.form, 'OhD1BYztul7NILvKR')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>

<style scoped>
.contact__container {
    padding-top: 9em;
    padding-bottom: 6em;
}

.contact__form {
    display: flex;
    flex-direction: column;
    padding-top: 4em;
    padding-bottom: 4em;
    padding-left: 5em;
    padding-right: 5em;
    width: auto;
    align-items: center;

}

.name__email {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 70%;
}

.name__area{
    margin-right: 1em;
}

.input__area {
    border-radius: 5px;
    background-color: #464d5d;
    color: white;
    border-style: none;
}

.message__input__area {
    border-radius: 5px;
    background-color: #464d5d;
    color: white;
    border-style: none;
    width: 70%;
    height: 8em;
    resize: none;
    min-width: 22em;
    max-width: 37em;
}

.message__area {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    
}

.submit__box {
    background-color: #464d5d;
    border-style: none;
    border-radius: 10px;
    height: 3em;
    margin-top: 1em;
    width: 20%;
    min-width: 50px;
    max-width: 25%;
    color: #b1a4a4;
    
}

label {
    padding-right: 0.2em;
}
</style>