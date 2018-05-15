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
            <v-flex xs12 sm12 offset-md8 md4 offset-lg8 lg4>
              <v-card>
                <v-card-title>Login</v-card-title>
                <v-card-content color="white">
                  <v-container>
                    <form action="/" method="">
                      <v-text-field label="E-mail" name="email" id="email"></v-text-field>
                      <v-text-field label="Senha" name="senha" id="senha"></v-text-field>
                      <v-btn type="submit" outline block color="teal darken-3">Entrar</v-btn>                      
                    </form>
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
  data: () => ({
    gradient: 'to top right, rgba(0,102,153, .9), rgba(0,204,153, .6)'
  })
}
</script>
<style lang="css">
</style>
