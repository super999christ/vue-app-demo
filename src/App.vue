<template>
    <v-app :style="cssProps">
        <the-header></the-header>
        <v-main class="mt-10">
            <router-view></router-view>
        </v-main>
        <v-spacer class="mb-10"></v-spacer>
        <the-footer></the-footer>
    </v-app>
</template>
  
<script>
import TheHeader from "./components/layouts/Header.vue";
import TheFooter from "./components/layouts/Footer.vue";
export default {
    components: {
        TheHeader,
        TheFooter,
    },
    data() {
        return {};
    },
    computed: {
        cssProps() {
            var themeColors = {};
            Object.keys(
                this.$vuetify.theme.themes.myCustomThemDefinition.colors
            ).forEach((color) => {
                themeColors[`--v-${color}`] =
                    this.$vuetify.theme.themes.myCustomThemDefinition.colors[color];
            });
            return themeColors;
        },
    },
};
</script>
  
<style lang="sass">
@import './styles/_variables.scss'
</style>