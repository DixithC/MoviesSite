import axios from 'axios';

export default axios.create({
    baseURL:'https://ecd5-2402-e280-2130-5e0-494d-1fd-5926-4d25.ngrok-free.app',
    headers:{
             "ngrok-skip-browser-warning":"true"
    }
});
