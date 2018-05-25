<template>
    <system-template>
        <span slot="principal">
            <v-container>
            <v-layout row>
                <v-flex xs12 sm12>
                    <v-card class="elevation-4">
                        <v-card-title>
                            <v-container fluid fill-height>
                                <v-layout align-center justify-center>
                                    <v-flex text-xs-center md4>
                                        <v-avatar
                                            size="120px"
                                        >
                                            <img src="https://abrilmdemulher.files.wordpress.com/2017/11/julius.jpg?quality=90&strip=info&resize=680,453" alt="">
                                        </v-avatar>
                                        <br>
                                        <br>
                                        <div class="display-1 teal--text text--darken-2">John Leider</div>
                                    </v-flex>
                                    <v-flex md9>
                                        <v-text-field 
                                            id="nome" 
                                            label="nome" 
                                            type="text" 
                                            value="zezin" 
                                            required
                                        />
                                        <v-text-field 
                                            id="email" 
                                            label="E-mail" 
                                            type="email" 
                                            value="zezin@gmail.com" 
                                            required
                                            />
                                        <v-text-field 
                                            id="senha" 
                                            label="Senha" 
                                            type="password" 
                                            value="zezin123" 
                                            required
                                            />
                                        <v-text-field 
                                            id="cpf" 
                                            label="CPF" 
                                            type="text" 
                                            value="042.777.610-46" 
                                            required
                                            />
                                        <v-text-field 
                                            id="endereco" 
                                            label="Endereço" 
                                            type="text" 
                                            value="zezin marc 23, ap 12" 
                                            required
                                            />
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
            </v-container>
        </span>
    </system-template>
</template>
<script>
import SystemTemplate from '@/templates/SystemTemplate'

export default {
  name: 'Profile',
  components: {
    SystemTemplate
  }
}
</script>
<style scoped>

</style>
