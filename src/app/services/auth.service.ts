export class AuthService {
    isLoggedIn = false;

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    isAuththenticated() {

       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn)
            })
        })
    }
}