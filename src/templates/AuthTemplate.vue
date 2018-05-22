<template lang="html">
  <v-app>
    <v-content>
      <v-jumbotron
        :gradient="gradient"
        src="/static/login.jpeg"
        height="100%"
      >
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
             <v-flex md4 lg4>
                <slot name="info"></slot>
            </v-flex>
            <v-flex xs12 sm12 md4 lg4>
              <v-card>
                <v-card-title>Login</v-card-title>
                <v-card-content color="white">
                  <v-container>
                    <slot name="form"></slot>
                  </v-container>
                </v-card-content>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'AuthTemplate',
  data: () => ({
    gradient: 'to top right, rgba(0,102,153, .9), rgba(0,204,153, .6)'
  })
}
</script>
<style lang="css">
</style>