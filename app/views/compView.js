import { compProfile } from "../js/compProfile.js";
import { newVacant } from "../js/compNewVacant.js";
import { compVacants } from "../js/compVacants.js";

export function compView() {
    
    const main = document.getElementById("main");
    main.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">WorkCRUD</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                    <a class="nav-link" id="profile" aria-current="page" href="#">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" id="newVacant" href="#">New Vacant</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" id="vacants" href="#">Vacants</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div id="content"></div>`

    document.getElementById('profile').addEventListener('click', (e) => {
        e.preventDefault();
        compProfile();
    });
    document.getElementById('newVacant').addEventListener('click', (e) => {
        e.preventDefault();
        newVacant();
    });
    document.getElementById('vacants').addEventListener('click', (e) => {
        e.preventDefault();
        compVacants();
    });
}