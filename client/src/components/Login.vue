<template>
  <v-layout column-6>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"
            clearable
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            v-model="password"
            name="password"
            hint="Between 8 and 32 characters"
            class="input-group--focused"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            clearable
          ></v-text-field>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn class="cyan" @click="login" dark>Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      show1: false
    }
  },
  watch: {

  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style lang="css" scoped>
.error {
  color: red;
}
</style>
