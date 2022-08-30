<template>
    <v-footer bottom fixed width="100%" class="mt-10 pa-0 text-white text-center d-flex flex-row">
        <v-col lg="12">
            <v-row justify="center">
                <v-divider></v-divider>
                <v-col lg="6" md="6" cols="12"
                    class="d-flex justify-center justify-md-start align-center flex-row bg-grey-lighten-5">
                    <div class="text-grey-darken-2">
                        {{  new Date().getFullYear()  }} —
                        <strong>Vuetify App</strong>
                    </div>
                </v-col>
                <v-col cols="12" md="6"
                    class="d-flex flex-row align-center justify-center justify-md-end bg-grey-lighten-5" lg="6">
                    <div>
                        <p class="text-grey">
                            @ Copyright Cody Christ. All rights reserved

                            {{  new Date().getFullYear()  }}

                            <v-spacer />
                            <strong>Vuetify App designed by Cody Christ</strong>
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-footer>
</template>
  
<script scoped>
export default {
};
</script>
  