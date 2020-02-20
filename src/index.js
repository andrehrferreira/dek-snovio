import { $ } from "@dekproject/scope";
import SnovIO from 'snovio-api';

export default () => {
    try{
        if(!process.env.hasOwnProperty('SNOVIO_USERID') || !process.env.hasOwnProperty('SNOVIO_SECRET')){
            console.log('[ Snov.io ] - There is no SNOVIO_USERID or SNOVIO_SECRET variable in the .env file.');
        }
        else{
            $.set("snovio", new SnovIO(process.env.SNOVIO_USERID, process.env.SNOVIO_SECRET));
        }
    }
    catch (e) {
        console.log(`[ Snov.io ] - ${e.message}`);
    }
}
