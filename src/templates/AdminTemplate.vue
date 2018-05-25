<template>
    <v-app>
         <v-navigation-drawer
            class="grey lighten-3"
            stateless
            value="true"
            app
        >
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile>
                <v-list-group
                    prepend-icon="account_circle"
                    value="true"
                >
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Users</v-list-tile-title>
                    </v-list-tile>
                    <v-list-group
                        sub-group
                        no-action
                        value="true"
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-title>Admin</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                            v-for="(admin, i) in admins"
                            :key="i"
                        >
                            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon v-text="admin[1]"></v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-group
                        sub-group
                        no-action
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-title>Actions</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                            v-for="(crud, i) in cruds"
                            :key="i"
                        >
                            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon v-text="crud[1]"></v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="bga" app></v-toolbar>
        <v-content app>
            <v-container>
                <v-layout>
                    <v-flex xs12 sm12 md12 lg12>
                        <slot name="principal"></slot>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer dark app>
            &copy; 2018
        </v-footer>
    </v-app>    
</template>
<script>
export default {
  name: 'AdminTemplate',
  data: () => ({
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
  })
}
</script>
<style scoped>
    .bga {
      background: linear-gradient(45deg, #55038b 20%, #01afff 100%);
    }
</style>
