<template>
    <v-container>
        <!-- Hero -->
        <v-row class="no-gutters" align="center" justify="center">
            <v-col class="text-center" cols="12" sm="12" lg="6">
                <h1 class="font-weight-black text-h6 text-sm-h5 text-lg-h2">
                    Welcome to My Vuetify App
                </h1>
                <p class="text-body-2 text-sm-body-1 text-justify my-5 description">
                    The company itself is a very successful company. In truth it is said of the 
                    present. This is what they are going to do here, and whence they come, to 
                    the wise man, what he pleases, at the time of his mind. Pains, for follow!
                </p>
                <v-container>
                    <v-row align="center" justify="center">
                        <v-btn cols="12" class="px-10 mr-2 mr-sm-5" rounded color="success">Get Started</v-btn>

                        <v-btn cols="12" color="indigo" rounded class="px-10">
                            <v-icon class="mr-2"> mdi-play-circle-outline </v-icon>
                            <span class="text-white">Watch video</span>
                        </v-btn>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" sm="12" lg="6">
                <img class="hero-image" src="../assets/images/hero-background.png" />
            </v-col>
        </v-row>
    </v-container>
    <the-about></the-about>
    <the-portfolio></the-portfolio>
    <the-project></the-project>
    <the-gallery></the-gallery>
    <the-contact></the-contact>
</template>

<script>
import TheAbout from "../components/HomeItems/About.vue";
import ThePortfolio from "../components/HomeItems/Portfolio.vue";
import TheProject from "../components/HomeItems/Projects.vue";
import TheGallery from "../components/HomeItems/Gallery.vue";
import TheContact from "../components/HomeItems/Contactus.vue";
export default {
    components: {
        TheAbout,
        ThePortfolio,
        TheProject,
        TheGallery,
        TheContact,
    },
};
</script>

<style scoped>
img.hero-image {
    width: 100%;
}

h1.title-info {
    font-size: 4rem;
    font-weight: bold;
    font-family: "Recursive", sans-serif;
}

p.description {
    font-size: 1rem;
    font-family: "Recursive", sans-serif;
}

/* Media */
@media only screen and (max-width: 460px) {
    .v-btn {
        margin-bottom: 0.5rem;
        width: 100%;
    }
}
</style>