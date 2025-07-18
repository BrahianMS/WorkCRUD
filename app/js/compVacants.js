export async function compVacants() {
    const cont = document.getElementById("content");
    cont.innerHTML = `<h3 class="text-center my-4">Vacantes Publicadas</h3>
                        <div id="jobList" class="row"></div>`;
    const list = document.getElementById('jobList')
    const comp = JSON.parse(sessionStorage.getItem('user'))
    const vacants = await getCompVacants(comp);
    list.innerHTML = ""
    if (vacants) {
        vacants.forEach(vacant => {
            list.innerHTML += `<div class="col-md-4 mb-4">
                                    <div class="card card-job">
                                        <div class="card-body">
                                            <h5 class="card-title">${vacant.name}</h5>
                                            <p class="card-text">${vacant.desc}</p>
                                            <button class="btn btn-warning w-100">Editar</button>
                                            <button class="btn btn-danger w-100 mt-2">Cerrar Vacante</button>
                                        </div>
                                    </div>
                                </div>`
        });
    }
}


async function getCompVacants(comp) {
    try {
        const response = await fetch(`http://localhost:3000/users?id=${comp.id}`);
        let users = await response.json();
        return {users};

    } catch (error) {
        console.log('Login failed:', error);
        return { error: 'There was a problem trying to log in.' };
    }
}