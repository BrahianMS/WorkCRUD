import { router } from "../js/routes.js";

export function loginView() {
    const main = document.getElementById("main");
    main.innerHTML = `<h2 class="text-center mb-4">Welcome to WorkCRUD</h2>
                        <div class="card">
                        <div class="card-body">
                            <h4 class="card-title text-center">Log-in</h4>
                            <form id="loginForm">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="pword" class="form-label">Password</label>
                                <input type="password" class="form-control" id="pword" required>
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary w-100">Log-in</button>
                            </div>
                            </form>
                            <p class="text-center">¿No tienes cuenta? <a href="#register">Register here</a></p>
                        </div>
                        </div>`;
        
        // Handle login form submission
        document.getElementById('loginForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('pword').value;

        const resultado = await checkLogin(email, password, );

        if (resultado.error) {
            alert(resultado.error);
        } else {
            alert(resultado.success);
            let user = resultado.user;
            let inf = { 'id': user.id, 'name': user.name, 'email': user.email, 'role': user.role};
            sessionStorage.setItem('user', JSON.stringify(inf));
            sessionStorage.setItem('Auth', 'true');
            router(`${user.role}`)
        }
    });
        

}

// Check login with email or username
async function checkLogin(email, password) {
    try {
        const response = await fetch(`http://localhost:3000/users?email=${email}`);
        let user = await response.json();

        if (user.length === 0) {
            return { error: 'The email or username does not exist' };
        }

        if (user[0].password !== password) {
            return { error: 'Incorrect password' };
        }

        return { success: 'Successful login', user: user[0] };

    } catch (error) {
        console.log('Login failed:', error);
        return { error: 'There was a problem trying to log in.' };
    }
}