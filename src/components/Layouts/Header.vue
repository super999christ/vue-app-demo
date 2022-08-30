<template>
    <v-app-bar class="main-app_bar" app color="white" light elevation="6" elevation-on-scroll>
        <!-- Mobile navigation button -->
        <v-app-bar-nav-icon v-if="mobileScreen" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title> Cody Christ </v-app-bar-title>
        <v-spacer></v-spacer>
        <!-- Large screens -->
        <v-list v-if="!mobileScreen" class="d-flex flex-row align-center">
            <v-list-item link v-for="item in items" :to="item.router" :key="item.title">
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
        </v-list>

        <v-btn text>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn outlined color="success"> Get started </v-btn>
    </v-app-bar>
    <!-- mobile screens -->
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list class="d-flex flex-column align-center">
            <v-list-item link v-for="item in items" :to="item.router" :key="item.title">
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    data() {
        return {
            drawer: false,
            windowWidth: window.innerWidth,
            mobileScreen: false,

            items: [
                { title: "Home", router: "/home" },
                { title: "About", router: "/about" },
                { title: "Portfolio", router: "/portfolio" },
                { title: "Project", router: "/project" },
                { title: "Gallery", router: "/gallery" },
                { title: "Contact", router: "/contact" },
            ],
        };
    },
    methods: {
        trackWindowChange() {
            this.windowWidth = window.innerWidth;
        },
    },
    computed: {
        width() {
            return this.windowWidth;
        },
    },
    watch: {
        width(newValue) {
            if (newValue <= "950") {
                this.mobileScreen = true;
            } else {
                this.mobileScreen = false;
            }
        },
    },
    mounted() {
        window.addEventListener("resize", this.trackWindowChange);
    },
};
</script>
  
<style scoped>
.v-toolbar-title {
    font-size: 2rem;
    color: green;
    font-family: "Recursive", sans-serif;
    font-weight: bold;
}
</style>
  