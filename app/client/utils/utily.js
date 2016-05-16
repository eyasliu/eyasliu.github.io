
export default {
  setTitle(str = ''){
    if(str){
      document.title = str
    } else {
      console.error('title can not be empty');
    }
  }
}