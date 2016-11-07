/**
 * Created by Eyas on 2016/4/18.
 * set variable to global var
 * @param globalVars
 */
export default function setGlobal(globalVars = {}, forceGlobalVars = {}) {
  /* eslint-disable */
  for(let key in globalVars) {
    if(!window[key]){
      if(!globalVars[key] == null) throw new Error('key:' + key + ' is undefined');
      window[key] = globalVars[key]
    } else {
      console.error('Sorry, the global variable [window.' + key + '] already exits');
    }
  }
  for(let key in forceGlobalVars) {
  	window[key] = forceGlobalVars[key]
  }
}