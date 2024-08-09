import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv';

dotenv.config();
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: parseInt(process.env.PGPORT || ""),
    idleTimeoutMillis: 30000,
})

export const query = async (text: string, params: string | any) => {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('executed query', { text, duration, rows: res.rowCount })
    return res
}