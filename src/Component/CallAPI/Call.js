import axios from 'axios';
import * as Config from './Config';

export default function Call(enpont, method, data) {
    return (
        axios({
            method: method,
            url: `${Config.API_NODEJS}/${enpont}`,
            data: data
        }).catch(err => {
            console.log(err);
        })
    )
}