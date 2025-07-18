export function compProfile() {
    const cont = document.getElementById("content");
    cont.innerHTML = `<h2 class="text-center mb-4">Company Profile</h2>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title text-center">Edit the company profile</h4>
                                <form id="saveProf">
                                    <div class="mb-3">
                                        <label for="compLogo" class="form-label">Company Logo (URL)</label>
                                        <input type="url" class="form-control" id="compLogo" value="https://example.com/logo.png" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="compDesc" class="form-label">Description</label>
                                        <textarea class="form-control" id="compDesc" rows="4" required>We are a </textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="compSector" class="form-label">Sector/Industria</label>
                                        <input type="text" class="form-control" id="compSector" value="Tecnología" required>
                                    </div>
                                    <button type="submit" class="btn btn-success w-100">Guardar Cambios</button>
                                </form>
                            </div>
                        </div>`
    
    
    document.getElementById('saveProf').addEventListener('submit', async function (event) {
        event.preventDefault();
        const comp = JSON.parse(sessionStorage.getItem('user'))

        saveComProfile(comp)
    })
}

function saveComProfile(comp) { 
        const logo = document.getElementById('compLogo').value;
        const desc = document.getElementById('compDesc').value;
        const sector = document.getElementById('compSector').value;
        registProf(logo, desc, sector, comp);
};

async function registProf(logo, desc, sector, comp) {
    const prof = {
            logo: logo,
            desc: desc,
            sector: sector
        }
    const response = await fetch(`http://localhost:3000/users/${comp.profile}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prof)
    });
}