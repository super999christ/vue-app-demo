// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
    components,
    directives,
    breakpoint: {
        thresholds: {
            xs: 0,
            sm: 476,
            md: 668,
            lg: 1000,
            xl: 1300,
        },
    },
    theme: {
        themes: {
            myCustomThemDefinition: {
                variables: {},
                colors: {
                    greenish: "#xxx",

                    background: "#ccc",
                    surface: "#212121",
                    primary: "#00ff00",
                    "primary-darken-1": "#3700B3",
                    secondary: "#03DAC5",
                    "secondary-darken-1": "#03DAC5",
                    error: "#CF6679",
                    info: "#2196F3",
                    success: "#4CAF50",
                    warning: "#03fc8c",
                },
            },
        },
    },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
