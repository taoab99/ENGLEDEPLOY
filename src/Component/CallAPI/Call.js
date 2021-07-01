import axios from 'axios';
import * as Config from './Config';

export default function (enpont, method, data) {
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