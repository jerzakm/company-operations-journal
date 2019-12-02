import * as sql from 'mssql'
import * as envLoad from 'dotenv'

envLoad.config()

const insertDbHost = process.env.INSERT_DB_SERVER;
const insertDbUser = process.env.INSERT_DB_USER;
const insertDbPassword = process.env.INSERT_DB_PASSWORD;
const insertDbName = process.env.INSERT_DB_NAME;
const insertDbPort: number = parseInt(process.env.INSERT_DB_PORT,10);
const subiektDbName = process.env.SUBIEKT_DB_NAME;

let subiektPool: sql.ConnectionPool | undefined

export const subiektConnection = async () => {
    return new Promise<sql.ConnectionPool>((resolve, reject) => {
        if(subiektPool) {
            resolve(subiektPool)
        } else {
            subiektPool = new sql.ConnectionPool({
                user: insertDbUser,
                password: insertDbPassword,
                server: insertDbHost,
                database: subiektDbName,
                port: insertDbPort
            })
            subiektPool.connect().then(()=> {
                resolve(subiektPool)
            }).catch((err)=> {
                reject(err)
            })
        }
    });
}

export const sendQuery = async (pool: sql.ConnectionPool, query: string) => {
    return new Promise<sql.IResult<any>>((resolve, reject) => {
        const request = pool.request()
    	request.query(query).then((response)=> {
            resolve(response)
        })
        .catch((err)=> {
            reject(err)
        })
    });
}