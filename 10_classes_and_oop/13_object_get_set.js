const user = {
    _email : "r@rashid.com",
    _password : "abcd",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
const chai = Object.create(user)

console.log(chai.email);
