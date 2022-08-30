<template>
    <v-container class="my-15">
        <v-row justify="center" align="center">
            <v-col lg="12" class="text-center">
                <h5 class="mb-2 text-center text-h4">Portfolio</h5>
                <p class="text-body-1 text-center">
                    The company itself is a very successful company.
                </p>
            </v-col>
        </v-row>
        <v-row class="mt-4" justify="center">
            <!-- filter links --->
            <v-col cols="12" lg="12">
                <div class="text-center" :class="screenChange">
                    <v-chip v-for="item in chips" :key="item.title" @click="switchPortfolio(item.title)"
                        :color="activePortfolio === item.title ? 'green-darken-4' : ''" text-color="white"
                        cursor-pointer :class="{
                            'on-hover': ishovering,
                        }" class="mx-5 my-4">
                        {{  item.title  }}
                    </v-chip>
                </div>
            </v-col>

            <v-col lg="3" cols="12" sm="6" class="portfolio-image__container"
                v-for="item in portfolios[selectedCategory]" :key="item.title">
                <v-card>
                    <v-img :src="item.src" class="white--text align-end" height="200px"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                        <v-card-title class="text-white" v-text="item.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import categories from "../../_portfolios.js";
export default {
    data() {
        return {
            windowsWidth: window.innerWidth,
            widthisLowerThan: false,
            activePortfolio: "Web Apps",
            chips: [
                { title: "Web Apps" },
                { title: "Mobile Apps" },
                { title: "Desktop Apps" },
            ],
            portfolios: categories,
        };
    },

    computed: {
        selectedCategory() {
            return this.activePortfolio;
        },
        width() {
            return this.windowsWidth;
        },
        screenChange() {
            if (this.widthisLowerThan) {
                return "column-display";
            } else {
                return "";
            }
        },
    },
    methods: {
        setWindowWidthChange() {
            this.windowsWidth = window.innerWidth;
            console.log("window size has changed", this.windowsWidth);
        },
        switchPortfolio(clickedPortfolio) {
            this.activePortfolio = clickedPortfolio;
        },
    },
    watch: {
        width(newValue) {
            console.log("newVale", newValue);
            if (newValue <= "470") {
                this.widthisLowerThan = true;
            } else {
                this.widthisLowerThan = false;
            }
        },
    },
    mounted() {
        window.addEventListener("resize", this.setWindowWidthChange);
    },
};
</script>
  
<style scoped>
@media only screen and (max-width: 480px) {
    .portfolio-image__container- {
        margin-bottom: 0.5rem;
    }
}

.column-display {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
  