const knex = require('knex')

class Contenedor{
    constructor(bd,tablename){
        this.knex = knex(bd)
        this.tablename = tablename
    }
    list(){
        return this.knex(this.tablename).select('*')
    }
    single(params = {}){
        return this.knex(this.tablename).where(params).select('*')
    }
    store(obj){
        return this.knex(this.tablename).insert(obj)
    }
    update(id,obj){
        return this.knex(this.tablename).where('id',id).update(obj);
    }
    destroy(params){
        return this.knex(this.tablename).where(params).delete();
    }
    close(){
        this.knex.destroy()
    }
}

/* const list = () => bd(process.env.T_PRODUCTOS).select('*') */



module.exports = Contenedor;