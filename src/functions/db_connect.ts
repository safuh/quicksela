import pg from 'pg'
const {Pool} =pg

const pool=new Pool({
	connectionString:'postgresql://yousir:iFWCBsnLO0AMrqDT6M8AOAGe2SijqY3t@dpg-cs4hlhjtq21c73fts8vg-a.oregon-postgres.render.com/selasql'

})
export default pool
/*const {Client}=pg
const client=new Client({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password: 'Stinkme4ner08!',
    port: 5432,
})*/