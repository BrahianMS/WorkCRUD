import {compView} from "./compView.js"
import {guardian} from "../js/auth.js"

export function dashboardView() {
    guardian()

    const role = JSON.parse(sessionStorage.getItem('user')).role;

    if (role === 'company') {
        compView();
    }
    if (role === 'postulant') {
        postView()
    }
}