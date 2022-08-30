<template>
    <v-container>
        <v-row justify="center" align="start">
            <v-col cols="12" sm="12" lg="6" md="6">
                <img class="about-image" src="../../assets/images/about-background.png" alt="about" />
            </v-col>
            <v-col cols="12" lg="6" sm="12" md="6" class="px-4">
                <h5 class="text-center text-sm-start text-h4">About Us</h5>
                <p class="text-justify text-sm-start pt-4">
                    The company itself is a very successful company. In truth it is said of the 
                    present. This is what they are going to do here, and whence they come, to 
                    the wise man, what he pleases, at the time of his mind. Pains, for follow!
                </p>
                <v-list>
                    <v-list-item v-for="item in items" :key="item.data">
                        <v-icon class="pr-4" color="success">{{  item.icon  }}</v-icon>
                        <v-list-item-subtitle class="text-grey">
                            {{  item.data  }}
                        </v-list-item-subtitle>
                    </v-list-item>
                    <p :class="classes" class="mt-4 text-justify">
                        The company itself is a very successful company. In truth it is said of the 
                        present. This is what they are going to do here, and whence they come, to 
                        the wise man, what he pleases, at the time of his mind. Pains, for follow!
                    </p>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                {
                    data: "The company itself is a very successful company.",
                    icon: "mdi-check-all",
                },
                {
                    data: "In truth it is said of the present.",
                    icon: "mdi-check-all",
                },
                {
                    data: "This is what they are going to do here, and whence they come, to the wise man, what he pleases, at the time of his mind.",
                    icon: "mdi-check-all",
                },
            ],
        };
    },
    computed: {},
};
</script>
  
<style scoped>
img.about-image {
    width: 100%;
}

.v-list-item-subtitle {
    opacity: 0.75;
}
</style>
  