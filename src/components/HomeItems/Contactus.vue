<template>
    <v-container class="my-10">
        <v-row justify="center" align="center">
            <v-col lg="12">
                <h5 class="mb-2 text-center text-h4">Contact us</h5>
                <p class="text-body-1 text-center">
                    The company itself is a very successful company.
                </p>
            </v-col>
        </v-row>
        <v-row class="mt-5 px-12">
            <!-- Map -->
            <v-col cols="12" lg="6" class="text-center">
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=16LNghtIMuYfvU7PJpyEWK5hQP7Q&ehbc=2E312F"
                    width="100%" height="100%" style="border: 0" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
            <!-- Form -->
            <v-col cols="12" lg="6">
                <v-form ref="form" v-model="valid">
                    <v-text-field v-model="firstName" :counter="10" label="Name" :rules="nameRules" @input="submit"
                        required></v-text-field>
                    <v-text-field v-model="email" :rules="emailRules" @input="submit" label="E-mail" required>
                    </v-text-field>
                    <v-textarea v-model="message" :rules="messageRules" @input="submit" label="Message" :counter="200">
                    </v-textarea>

                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
                        submit
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            valid: true,
            firstName: "",
            email: "",
            message: "",
            nameRules: [
                (v) => v.length >= 5 || "your name must be greater than 5 characters",
            ],
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
            ],
            messageRules: [
                (v) => !!v || "Message is required",
                (v) =>
                    (v !== "" && v.length >= 20) ||
                    "Minimum length 50 characters is needed",
                (v) => v.length <= 200 || "Maximum length is 200 characters",
            ],
        };
    },

    methods: {
        submit() {
            this.$refs.form.validate();
        },
    },
    computed: {},
};
</script>
  