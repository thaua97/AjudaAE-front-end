<template>
    <system-template>
        <span slot="principal">
            <v-container fluid>
                <v-layout row>
                    <v-flex sm12 md6>
                        <v-container fluid>
                            <v-card>
                                <v-card-title>
                                Funcionarios
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="search"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                </v-card-title>
                                <v-data-table
                                :headers="headers"
                                :items="funcionarios"
                                :search="search"
                                >
                                <template slot="items" slot-scope="props">
                                    <td>{{ props.item.id }}</td>
                                    <td class="text-xs-right">{{ props.item.nome }}</td>
                                    <td class="text-xs-right">{{ props.item.email }}</td>                                    
                                </template>
                                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                                    Your search for "{{ search }}" found no results.
                                </v-alert>
                                </v-data-table>
                            </v-card>
                        </v-container>
                    </v-flex>
                    <v-flex sm12 md6>
                        <v-container fluid>
                            <v-card>
                                <v-card-title>
                                Clientes
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="searchc"
                                    append-icon="search"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                </v-card-title>
                                <v-data-table
                                :headers="headers"
                                :items="funcionarios"
                                :search="search"
                                >
                                <template slot="items" slot-scope="props">
                                    <td>{{ props.item.id }}</td>
                                    <td class="text-xs-right">{{ props.item.nome }}</td>
                                    <td class="text-xs-right">{{ props.item.email }}</td>                                    
                                </template>
                                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                                    Your search for "{{ search }}" found no results.
                                </v-alert>
                                </v-data-table>
                            </v-card>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </span>
    </system-template>
</template>
<script>
import SystemTemplate from '@/templates/SystemTemplate'

export default {
  name: 'ListUsers',
  components: {
    SystemTemplate
  },
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'id',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Nome', value: 'nome' },
        { text: 'E-mail', value: 'email' }
      ],
      funcionarios: [
        {
          value: false,
          id: 1,
          nome: 'Frozen Yogurt',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 2,
          nome: 'Ice cream sandwich',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 3,
          nome: '1',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 4,
          nome: 'Cupcake',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 5,
          nome: 'Gingerbread',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 6,
          nome: 'Jelly bean',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 7,
          nome: 'Lollipop',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 8,
          nome: 'Honeycomb',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 9,
          nome: 'Donut',
          email: 'perfumesivone@gmail.com'
        },
        {
          value: false,
          id: 10,
          nome: 'KitKat',
          email: 'perfumesivone@gmail.com'
        }
      ]
    }
  }
}
</script>
