<template lang="html">
  <div>
    <v-dialog v-model="dialog" max-width="700px">
      <v-btn color="teal" dark outline slot="activator" class="mb-2">Novo</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-layout row>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Titulo" v-model="editedItem.titulo"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="E-mail" v-model="editedItem.email"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Telefone" v-model="editedItem.telefone"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Carbs (g)" v-model="editedItem.carbs"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Protein (g)" v-model="editedItem.protein"></v-text-field>
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
    </v-dialog>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.titulo }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.telefone }}</td>
        <td class="text-xs-right">{{ props.item.tipo }}</td>
        <td class="text-xs-right">{{ props.item.status }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'id',
        align: 'left',
        sortable: false,
        value: 'id'
      },
      { text: 'Titulo', value: 'titulo' },
      { text: 'E-mail', value: 'email' },
      { text: 'Telefone', value: 'telefone' },
      { text: 'Tipo', value: 'tipo' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      titulo: '',
      email: '',
      email2: '',
      email3: '',
      telefone: '',
      telefone2: '',
      descricao: '',
      tipo: '',
      status: ''
    },
    defaultItem: {
      titulo: '',
      email: '',
      email2: '',
      email3: '',
      telefone: '',
      telefone2: '',
      descricao: '',
      tipo: '',
      status: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Novo Chamado' : 'Editar Chamado'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.items = [
        {
          id: 1,
          titulo: 'Formatar Maquina',
          email: 'teste@gmail.com',
          email2: '',
          email3: '',
          telefone: '5332222587',
          telefone2: '',
          descricao: '',
          tipo: 'Formatação',
          status: 'Novo'
        },
        {
          id: 2,
          titulo: 'Formatar Maquina',
          email: 'teste@gmail.com',
          email2: '',
          email3: '',
          telefone: '5332222587',
          telefone2: '',
          descricao: '',
          tipo: 'formatação',
          status: 'Novo'
        }

      ]
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style lang="css">
</style>
