<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel grey lighten-4 black-text center">
            <img src="https://cdn3.sportngin.com/attachments/document/afb0-2321593/optimized.png#_ga=2.206018262.459246094.1608479829-634066243.1606313509">
          <h3>Register</h3>
          <form action="index.html">
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="email" id="email" v-model="email">
              <label for="email">Email Address</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input type="password" id="password" v-model="password">
              <label for="password">Password</label>
            </div>
            <button v-on:click="register" class="btn btn-large btn-extended grey lighten-4 black-text">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    
 name: 'register',
  data: function() {
    return {
      email: '',
      password: ''
    };


},
methods:{
    register:function(e){
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
         .then(user =>{
             alert(`account created.Please remember your login information`);
             this.$router.push('/calendar');
         },
         err=>{
            alert (err.message);
         });
      e.preventDefault();  
    }
}
}
</script>