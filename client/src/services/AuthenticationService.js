import Api from '@/services/Api'


/*Exports an object that has a register message to it
* and then we can call this*/
export default {
  register (credentials){
    return Api().post('register', credentials)
  }
}

/*
This is how you would call the register method from another file

AuthenticationService.register
({
  email:'testing@gmail.com'
  password:'12234'
})*/
