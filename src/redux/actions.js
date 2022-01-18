import { FETCH_WORKS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from './types';
import emailjs from '@emailjs/browser';

export function showLoader() {
    return { type: SHOW_LOADER }
}

export function hideLoader() {
    return { type: HIDE_LOADER }
}

export function showAlert(text, className) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: { text, className }
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 5000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function sendEmail(event) {
    return async dispatch => {
        dispatch(showLoader())
        await emailjs.sendForm('service_1iy5gak', 'template_6gbir8g', event.target, 'user_XBRlnMJTaDgnsPi3EQeXp')
            .then(
                result => {
                    dispatch(hideLoader())
                    dispatch(showAlert("Успешно отправлено", "success"))
                    event.target.reset()
                },
                error => {
                    dispatch(hideLoader())
                    dispatch(showAlert("Возникла ошибка на стороне сервера.", "warning"))
                }
            );
    }
}

export function fetchWorks() {
    return async dispatch => {
        dispatch(showLoader());
        const cardInfos = [];
        let userRepos = await fetch('https://api.github.com/users/Lecklark/repos');
        userRepos = await userRepos.json();
        for (let i = 0; i < userRepos.length; i++) {
            let userRepo = userRepos[i];
            let contents = await fetch(`https://api.github.com/repos/Lecklark/${userRepo.name}/contents`);
            contents = await contents.json()
            if (contents.some(file => file.name === "preview.png")) {
                const infoForCard = {
                    id: userRepo.id,
                    cardName: userRepo.description,
                    cardBgUrl: `https://raw.githubusercontent.com/Lecklark/${userRepo.name}/${userRepo.default_branch}/preview.png`,
                    deployLink: `https://lecklark.github.io/${userRepo.name}/`,
                    repoLink: userRepo.html_url
                }
                let text = await fetch(`https://raw.githubusercontent.com/Lecklark/${userRepo.name}/${userRepo.default_branch}/README.md`);
                if (text.ok) text = await text.text();
                else text = await "";
                infoForCard.description = text;
                cardInfos.push(infoForCard)
            }
        }
        dispatch({ type: FETCH_WORKS, payload: cardInfos })
        dispatch(hideLoader())
    }
}