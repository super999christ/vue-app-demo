<template>
    <div class="d-flex flex-column mt-5 pa-16">
        <!-- Section title -->
        <div class="d-flex flex-column justify-center align-center mb-10">
            <h5 class="mb-2 text-center text-h4">Gallery</h5>
            <p class="text-body-1 text-center">
                The company itself is a very successful company
            </p>
        </div>
        <!-- Image galleries -->
        <div class="d-flex flex-md-row flex-column align-center mx-md-5 justify-center">
            <!-- IMAGE CONTAINE -->
            <div style="width: 100%" class="my-5" v-for="(image, index) in images" :key="index">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card :elevation="isHovering ? 12 : 2" class="cursor-pointer d-flex mx-2"
                        :class="{ 'on-hover': isHovering }" v-bind="props">
                        <v-img :src="'../../src/assets/images/' + image.src + '.jpg'"
                            lazy-src="https://picsum.photos/id/11/100/60" height="150px" aspect-ratio="2" cover
                            class="cursor-pointer"></v-img>
                    </v-card>
                </v-hover>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            images: [
                { src: "gallery-1" },
                { src: "gallery-2" },
                { src: "gallery-3" },
                { src: "gallery-4" },
            ],
        };
    },
    methods: {},
};
</script>
    
<style scoped>
.v-card {
    cursor: pointer;
}

img:hover {
    box-shadow: 0 0 0 2px darkgray;
}
</style>
  