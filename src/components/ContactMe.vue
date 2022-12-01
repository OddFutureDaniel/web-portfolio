<template>
    <div class="contact__container">
        <h1>Get in touch</h1>
        <form class="contact__form" ref="form" @submit.prevent="sendEmail">
            <div>
                <label>Name</label>
                <input type="text" name="user_name">
                <label>Email</label>
                <input type="email" name="user_email">
            </div>
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send">
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
.contact__container{
    padding-left: 7rem;
    padding-right: 7rem;
}
.contact__form {
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 100%;

}
</style>