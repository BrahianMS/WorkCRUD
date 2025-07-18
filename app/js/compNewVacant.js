export function newVacant() {
    const cont = document.getElementById("content");
    cont.innerHTML = `<h3 class="text-center my-4">Post New Vacancy</h3>
                        <div class="card">
                            <div class="card-body">
                                <form id="newVac">
                                    <div class="mb-3">
                                        <label for="jobTitle" class="form-label">Vacancy Title</label>
                                        <input type="text" class="form-control" id="jobTitle" placeholder="Developer Full Stack..." required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="jobDesc" class="form-label">Vacancy Description</label>
                                        <textarea class="form-control" id="jobDesc" rows="4" placeholder="Write the vacancy details" required></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="jobReq" class="form-label">Requirements</label>
                                        <textarea class="form-control" id="jobReq" rows="4" placeholder="Specify the requirements for the position" required></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="jobSalary" class="form-label">Salary (Optional)</label>
                                        <input type="text" class="form-control" id="jobSalary" placeholder="$3000 USD per month...">
                                    </div>
                                    <div class="mb-3">
                                        <label for="jobMod" class="form-label">Work Modality</label>
                                        <select class="form-select" id="jobMod" required>
                                        <option value="inPerson">In Person</option>
                                        <option value="hybrid">Hybrid</option>
                                        <option value="remote">Remote</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">Publicar Vacante</button>
                                </form>
                            </div>
                        </div>`
    
    document.getElementById('newVac').addEventListener('submit', async function (event) {
        event.preventDefault();
        const comp = JSON.parse(sessionStorage.getItem('user'))
        saveVac(comp)
    })
}


function saveVac(comp) { 
        const name = document.getElementById('jobTitle').value;
        const desc = document.getElementById('jobDesc').value;
        const req = document.getElementById('jobReq').value;
        const salary = document.getElementById('jobSalary').value;
        if (!salary) {
            salary = ""
        }
        const mod = document.getElementById('jobMod').value;

        registVac(name, desc, req, salary, mod, comp);
};


async function registVac(name, desc, req, salary, mod, comp) {
    const newJob = {
            name: name,
            description: desc,
            requirements: req,
            salary: salary,
            modality: mod,
            idComp: comp.id
        }
    const response = await fetch('http://localhost:3000/vacants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    });
}