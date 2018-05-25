<template lang="html">
  <system-template>
    <span slot="principal">
    <v-layout row wrap>
      <v-flex lg8>
        <v-layout row wrap>
          <v-container fluid>
           <p class="display-1 grey--text">Novos</p>
            <v-expansion-panel v-for="ticket in chamados" :key="titulo">
              <v-expansion-panel-content>
                <div class="teal--text text--darken-3" slot="header">
                  <v-layout row wrap>
                    <v-flex xs12 sm12 lg6>
                      {{ ticket.titulo }}
                    </v-flex>
                    <v-flex v-flex xs12 sm12 lg6>
                      <v-chip outline color="teal">Novo</v-chip>
                    </v-flex>
                  </v-layout>
                </div>
                <v-card>
                  <v-card-text class="teal--text text--darken-3">
                    {{ ticket.texto }}
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-container>
        </v-layout>
      </v-flex>
      <v-flex lg4>
        <v-layout row>
          <v-container>
            <p class="display-1 grey--text">
              Funcionario do mês
            </p>
            <v-card class="appl white--text">
                <v-container fluid grid-list->
                  <v-layout row wrap>
                    <v-flex xs7>
                      <div>
                        <div class="headline">John Leider</div>
                        <div class="brown--text text--lighten-3">Maior número de chamdos atendidos <b>322</b></div>
                      </div>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-media
                        src="https://abrilmdemulher.files.wordpress.com/2017/11/julius.jpg?quality=90&strip=info&resize=680,453"
                        height="150px"
                        contain
                      >
                      </v-card-media>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-container>
          </v-layout>
          <v-layout row>
            <v-container>
              <v-card class="appl white--text">
                  <v-container fluid grid-list->
                    <v-layout row wrap>
                      <v-flex xs7>
                        <div>
                          <div class="headline">John Leider</div>
                          <div class="brown--text text--lighten-3">Maior número de chamdos atendidos <b>322</b></div>
                        </div>
                      </v-flex>
                      <v-flex xs5>
                        <v-card-media
                          src="https://randomuser.me/api/portraits/men/85.jpg"
                          height="125px"
                          contain
                        >
                        </v-card-media>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-container>
            </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-container>

      </v-container>
    </v-layout>
    </span>
  </system-template>
</template>
<script>
import SystemTemplate from '@/templates/SystemTemplate'
export default {
  name: 'Home',
  components: {
    SystemTemplate
  },
  data () {
    return {

      chamados: [
        {
          titulo: 'Teste 01',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: '1'
        },
        {
          titulo: 'Teste 02',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: '4'
        },
        {
          titulo: 'Teste 03',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: '5'
        },
        {
          titulo: 'Teste 03',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: '6'
        },
        {
          titulo: 'Teste 03',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: '7'
        },
        {
          titulo: 'Teste 03',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: '5'
        },
        {
          titulo: 'Teste 03',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: '5'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
