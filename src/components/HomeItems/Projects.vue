<template>
    <div class="d-flex flex-column align-center">
        <div class="d-flex flex-column">
            <h5 class="text-center text-h4">Projects</h5>
            <p class="text-center pt-4">
                The company itself is a very successful company.
            </p>
        </div>

        <!-- Projects -->
        <div
            class="d-flex flex-column flex-md-row align-center align-sm-stretch justify-center flex-wrap align-content-stretch">
            <v-card v-for="project in projects" :key="project.id" :loading="loading" class="mx-2 my-12" max-width="374">
                <v-progress-linear v-if="loading" class="position-absolute" style="z-index: 1" color="deep-purple"
                    height="10" indeterminate></v-progress-linear>

                <v-img height="250" :src="project.src" cover></v-img>

                <v-card-header>
                    <v-card-header-text>
                        <v-card-title>{{  project.title  }}</v-card-title>
                    </v-card-header-text>
                </v-card-header>

                <v-card-text>
                    <div class="d-flex flex-col">
                        <v-rating v-model="project.rating" color="amber" dense half-increments size="14"></v-rating>

                        <div class="text-grey ms-4">{{  project.rating  }}</div>
                    </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-title><span style="max-width: 300px" class="text-truncate">{{
                         project.descr 
                        }}</span></v-card-title>

                <v-card-actions>
                    <v-btn variant="outlined" color="green-darken-2" @click="reserve">
                        View Details
                    </v-btn>
                </v-card-actions>
                <!-- </v-card> -->
            </v-card>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            rating: 2,
            loading: true,
            projects: [
                {
                    id: new Date().toString(),
                    title: "Cloning Spotify",
                    descr: "Cloning spotify using Vue js",
                    src: "https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471__340.jpg",
                    rating: 2,
                },
                {
                    id: new Date().toString(),
                    title: "Cloning Netflix",
                    descr: "Cloning Netflix with Angular js",
                    src: "https://cdn.pixabay.com/photo/2021/01/24/13/41/netflix-5945225__340.jpg",
                    rating: 1,
                },
                {
                    id: new Date().toString(),
                    title: "Cloning Twitter",
                    descr: "Creating static Twitter with TailwindCSs",
                    src: "https://cdn.pixabay.com/photo/2016/11/18/11/16/social-1834013__340.png",
                    rating: 3,
                },
                {
                    id: new Date().toString(),
                    title: "Hulu Web cloning",
                    descr: "Static site with Gatsby js",
                    src: "https://cdn.pixabay.com/photo/2019/05/12/16/04/genie-4198396__340.jpg",
                    rating: 3,
                },
            ],
        };
    },
    created() {
        setTimeout(() => {
            this.loading = false;
        }, 4000);
    },
    methods: {},
};
</script>
  
<style scoped>
button {
    transition: all 0.5s;
}

button:hover {
    background-color: green;
    color: white !important;
}
</style>