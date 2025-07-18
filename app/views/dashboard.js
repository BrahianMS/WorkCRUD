import {compView} from "./compView.js"

export function dashboardView() {
    const role = JSON.parse(sessionStorage.getItem('user')).role;

    if (role === 'company') {
        compView();
    }
    if (role === 'postulant') {
        postView()
    }
}