import http from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6'

export const options = {
    stages: [
        {
            duration: '30s',
            target: 20
        },
       
        {
            duration: '15s',
            target: 0
        }
    ]
};

export default function(){
    const response = http.get('https://test.k6.io');
    check(response, {
        'HTTP status is 200': (r) => r.status === 200,
        'Description text is present': (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
    });
    sleep(1);
}