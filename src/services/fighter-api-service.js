import TokenService from './token-service'
import config from '../config'
import FighterContext from '../context/FighterContext'

const FighterApiService = {
    getContestants() {
        return fetch(`${config.API_ENDPOINT}/fighters`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getFighter(fighterId) {
        return fetch(`${config.API_ENDPOINT}/fighters/${fighterId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    // postFightResults(fighterId){
    //     return fetch(`${config.API_ENDPOINT}/fighters/login`, {
    //         method: 'POST',
    //         headers: {
    //           'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(credentials),
    //       })
    //         .then(res =>
    //           (!res.ok)
    //             ? res.json().then(e => Promise.reject(e))
    //             : res.json()
    //         )
    //     }
    // }
    getOpponent(fighterId) {
        return fetch(`${config.API_ENDPOINT}/fighters/random/${fighterId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getFightingStyle(styleId) {
        return fetch(`${config.API_ENDPOINT}/fighting-styles/${styleId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default FighterApiService