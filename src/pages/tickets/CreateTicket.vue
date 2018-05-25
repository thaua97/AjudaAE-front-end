<template lang="html">
    <system-template>
        <span slot="principal">
            <v-card>
                <v-card-title>
                    <span class="headline"></span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-layout row>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="Titulo"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="E-mail" ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="Telefone" ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="Carbs (g)"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="Protein (g)"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </span>   
    </system-template>
</template>

<script>
import SystemTemplate from '@/templates/SystemTemplate'

export default {
  name: 'CreateTicket',
  components: {
    SystemTemplate
  }
}
</script>
<style scoped>
</style>