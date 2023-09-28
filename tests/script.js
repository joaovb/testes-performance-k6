import http from 'k6/http'
import { sleep } from 'k6'

export default function () {
    http.get('https://viacep.com.br/ws/09920450/json/')
    sleep(1)
}