<template>
    <div class="contact__container">
        <h1>Get in touch</h1>
        <form class="contact__form" ref="form" @submit.prevent="sendEmail">
            <div>
                <label>Name</label>
                <input class="input__area" type="text" name="user_name">
                <label>Email</label>
                <input class="input__area" type="email" name="user_email">
            </div>
            <div>
                <label>Message</label>
                <textarea class="input__area" name="message"></textarea>
                
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
.contact__container {}

.contact__form {
    display: flex;
    flex-direction: column;
    padding-top:4em;
    padding-bottom:4em;
    padding-left:5em;
    padding-right:5em;
    width: auto;
    align-items: center;

}

.input__area{
    border-radius: 5px;
    background-color: #464d5d;
    color: white;
    border-style: none;
}

.submit__box{
    width: 15%;
    min-width: 50px;
    max-width: 25%;
    
}
</style>