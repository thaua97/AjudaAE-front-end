<template>
    <v-app>
        <v-content>
            <v-jumbotron
                :gradient="gradient"
                height="100%"
                src="/static/404.jpg"
                dark
            >
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md2 lg2>
                        <img style="width: 75%; margin: 0 0 0 20px;" src="/static/error.png">
                        <p class="display-4">404</p>
                        <p class="subheadline"><b>Vish!</b>, pagina não encontrada</p>
                    </v-flex>
                </v-layout>
            </v-container>    
            </v-jumbotron>
        </v-content>
    </v-app>
</template>
<script>
export default {
  data: () => ({
    gradient: 'to top right, rgba(0,102,153, .8), rgba(0,204,153, .8)'
  })
}
</script>
<style lang="">
    
</style>