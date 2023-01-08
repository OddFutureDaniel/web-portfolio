<template>
    <div class="contact__container">
        <h1>Get in touch</h1>
        <p class="contact__text">Whether you'd like to discuss web development opportunities or try the world's best
            lemon drizzle, please get
            in touch using the form below! </p>
        <notifications />
        <form class="contact__form" ref="form" id="contactForm" @submit.prevent="sendEmail">
            <div class="name__email">
                <div class="name__container">
                    <label for="user_name">Name<Span style="color: #52b7bd">*</Span></label>
                    <input class="input__container" type="text" name="user_name" required>
                </div>
                <div class="email__container">
                    <label for="user_email">Email<Span style="color: #52b7bd">*</Span></label>
                    <input class="input__container" type="email" name="user_email" required>
                </div>
            </div>
            <div class="message__container">
                <label for="message">Message<Span style="color: #52b7bd">*</Span></label>
                <textarea class="message__input" name="message" required></textarea>

            </div>
            <div class="submit__container">
                <input class="submit__box" type="submit" value="Send">
            </div>
        </form>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';
import $ from 'jquery';

export default {
    data() {
        return {
            //TODO make this data private
            serviceID: 'service_sdho7o3',
            templateID: 'template_zsxiz5d',
            public_key: 'OhD1BYztul7NILvKR'
        }
    },
    methods: {
        sendEmail() {
            if (this.serviceID.length === 0 || this.templateID.length === 0 || this.public_key.length === 0) {
                console.log('Error with email provider data')
            } else {
                emailjs.sendForm(this.serviceID, this.templateID, this.$refs.form, this.public_key)
                    .then((result) => {
                        console.log('SUCCESS!', result.text);
                    }, (error) => {
                        console.log('FAILED...', error.text);
                    });
                    this.sendAlert()
            }
        },
        sendAlert() {
            $("#contactForm").trigger("reset");
            $(alert("Success! I'll be sure to get back to you shortly."));
        }
    },
    

}
</script>

<style scoped>
.contact__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5em;
    padding-bottom: 5em;
    height: 90vh;
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
    width: 100%;
}

.name__container,
.email__container {
    display: flex;
    flex-direction: column;
}

.input__container {
    border-radius: 5px;
    background-color: #464d5d;
    color: white;
    border-style: none;
    height: 30px;
}

.message__input {
    border-radius: 5px;
    background-color: #464d5d;
    color: white;
    border-style: none;
    width: 100%;
    height: 10em;
    resize: none;
    min-width: 22em;
    max-width: 37em;
}

.message__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.submit__box {
    background-color: #464d5d;
    border-style: none;
    border-radius: 10px;
    height: 3em;
    margin-top: 1em;
    min-width: 80px;
    max-width: 12%;
    color: #b1a4a4;
}

label {
    padding-right: 0.2em;
}

.contact__text {
    width: 80%;
}

.submit__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
}

input.submit__box:active {
    transform: scale(0.95);
    box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.25);
}

@media (max-width: 600px) {
    .contact__form {
        margin-left: 0.5em;
        margin-right: 0.5em;
        padding-left: 0;
        padding-right: 0;
        width: 75%;
    }
}

/* TODO: 
        >> create alert for successful email sent
        >> clear form after sent email 
        */
</style>