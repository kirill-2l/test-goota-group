import Vue from "vue/dist/vue.js";
import Vuelidate from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

Vue.use(Vuelidate);

new Vue({
    el: "#form",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            submitStatus: null,
        };
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,
            email,
        },
        message: {
            required,
        },
    },
    methods: {
        status(validation) {
            return {
                error: validation.$error,
                dirty: validation.$dirty,
            };
        },
        submit() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                this.submitStatus = "PENDING";
                setTimeout(() => {
                    this.submitStatus = "OK";
                }, 500);
            }
        },
    },
});
