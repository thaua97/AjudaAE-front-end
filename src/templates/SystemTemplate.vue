<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
    >
    <v-list>
      <v-toolbar
        flat
        color="transparent"
      >
      <v-list>
        <v-list-tile avatar to="/perfil">
          <v-list-tile-avatar>
            <img src="https://abrilmdemulher.files.wordpress.com/2017/11/julius.jpg?quality=90&strip=info&resize=680,453" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="teal--text text--darken-3">John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </v-toolbar>
      <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.route">
        <v-list-tile-action>
          <v-icon class="teal--text text--lighten-3">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="teal--text text--darken-3" >{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      fixed
      dark
      class="appl"
    >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Ajuda AE</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat>Sair</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <slot name="principal"></slot>
      </v-container>
    </v-content>
    <v-footer app dark>
    <span>&nbsp; &copy; THB 2018</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'SystemTemplate',
  data () {
    return {
      drawer: null,
      menuItems: [
        {
          title: 'Inicio',
          icon: 'home',
          route: '/'
        },
        {
          title: 'Usuarios',
          icon: 'people',
          route: '/usuarios'
        },
        {
          title: 'Chamados',
          icon: 'collections_bookmark',
          route: '/chamados'
        }
      ]
    }
  }
}
</script>
<style media="screen">
  .appl{
     background: linear-gradient(45deg, #006699 0%, #00cc99  100%);
  }
</style>