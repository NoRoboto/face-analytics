import config from './config'
import superagent from "superagent"

export const kairosPost = (url, payload, cb) => {
  superagent
    .post(url)
    .set('Content-Type', 'application/json')
    .set('app_id', config.appId)
    .set('app_key', config.appKey)
    .send(payload)
    .accept("json")    
    .end(cb)
}
