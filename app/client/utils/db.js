import low from 'lowdb';
import storage from 'lowdb/browser';

const db = low('db', {storage});

db._.mixin({
  pushAll(origin, source){
    this.each(source, item => {
      origin.push(item);
    })
    return origin;
  },
  clearAll(origin){
    return this.remove(origin, x => true);
  },
  replaceAll(origin, source){
    this.remove(origin, x => true)
    this.each(source, item => {
      origin.push(item);
    })
    return origin;
  }
})

export default db;
