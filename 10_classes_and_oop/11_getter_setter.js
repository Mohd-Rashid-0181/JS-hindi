class user {
    constructor (email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value //  Setters  are never been return
    }
}

const hitesh = new user("r@google.com", "rashid")

console.log(hitesh.password);

console.log(hitesh.email);
