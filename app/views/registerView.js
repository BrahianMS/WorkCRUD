export function registerView() {
    const main = document.getElementById("main");
    main.innerHTML = `<h2 class="text-center mb-4">Welcome to WorkCRUD</h2>
                        <div class="card">
                            <div class="card-body">
                            <h4 class="card-title text-center">Registrarse</h4>
                            <form id="register">
                                <div class="mb-3">
                                <label for="regEmail" class="form-label">Email</label>
                                <input type="email" class="form-control" id="regEmail" required>
                                </div>
                                <div class="mb-3">
                                <label for="regPword" class="form-label">Password</label>
                                <input type="password" class="form-control" id="regPword" required>
                                </div>
                                <div class="mb-3">
                                <label for="regRole" class="form-label">Tipo de Usuario</label>
                                <select class="form-control" id="regRole" required>
                                    <option value="postulant">Postulant</option>
                                    <option value="company">Company</option>
                                </select>
                                </div>
                                <div class="mb-3">
                                <button type="submit" class="btn btn-success w-100">Register</button>
                                </div>
                            </form>
                            </div>
                        </div>`;
    
    // Handle form submission
    document.getElementById('register').addEventListener('submit', async function (event) {
        event.preventDefault(); 

        const email = document.getElementById('regEmail').value;
        const role = document.getElementById('regRole').value;

        const res = await checkRegister(email, role);

        if (res.error) {
            alert(res.error);
        } else {
            alert(res.success);

            const pword = document.getElementById('regPword').value;
            const name = document.getElementById('name').value;
            registUser(name, email,role, pword);
            window.location.hash = '#/login'
        }
    });

}

// Check if the email or username exists
async function checkRegister(email, role) {
    try {
        const emailResponse = await fetch(`http://localhost:3000/users?email=${email}`);
        const emailExists = await emailResponse.json();
        if (emailExists.length > 0) {
            return { error: 'The email is already registered.' };
        }
        if (role !== 'postulant' || role !== 'company') {
            return { error: 'Select a type of user' };
        }
        return { success: 'Successful Register' };
    } catch (error) {
        console.log('An error occurred during verification:', error);
        return { error: 'There was a problem verifying the data.' };
    }
}


// Save user information in db.json
async function registUser(name, email,role, password) {
    const newUser = {
            name: name,
            email: email,
            role: role,
            password: password,
            profile: {}
        }

    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
}