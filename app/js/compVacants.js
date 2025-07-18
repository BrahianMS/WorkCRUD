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
            list.innerHTML += `<div class="col"">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title fw-bold">${vacant.name}</h5>
                                            <p class="card-text">${vacant.description}</p>
                                            <p class="card-text text-muted">${vacant.requirements}</p>
                                        </div>
                                        <div class="card-footer bg-transparent d-flex justify-content-end">
                                            <button class="btn btn-primary">Edit</a>
                                            <button class="btn btn-danger ms-3 del" data-id="${vacant.id}">Cancel</button>
                                        </div>
                                    </div>
                                </div>`
        });
    }
}


async function getCompVacants(comp) {
    try {
        const response = await fetch(`http://localhost:3000/vacants?idComp=${comp.id}`);
        let vacants = await response.json();
        return vacants;
    } catch (error) {
        console.log('error:', error);
        return { error: 'There was a problem trying to find the information.' };
    }
}