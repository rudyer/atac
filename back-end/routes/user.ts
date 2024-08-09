import Router from 'express-promise-router'
import { query } from '../config/db';
import { getUserIdSQL, insertUserSQL, getAllUserSQL, getUserSearchSQL } from '../helpers/helpers';
import { Locale } from '../interface/interface';
import { getRouteUsers } from '../helpers/get_route_user_helper';


const router = Router()

export default router

router.get('/', async (req, res) => {
    const { rows } = await query(getAllUserSQL, null)
    res.send(rows)
})
router.get('/search', async (req, res) => {
    const { name } = req.query
    const { rows } = await query(getUserSearchSQL, [name])
    res.send(rows)
})
router.get("/route", async (req, res) => {
    try {
        const { rows } = await query(getAllUserSQL, null);
        const usersLocale: Locale[] = []
        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];
            const location: Locale = { x: element["x"], y: element["y"] };
            usersLocale.push(location)
        }
        const order = getRouteUsers(usersLocale)
        res.json(



            order.map((x) => rows[x - 1] ?? {
                "id": 0,
                "username": "Sede Atac",
                "email": "atac@atac.com",
                "phone": "+55983236.1595",
                "created_at": "2006-05-17T12:00:00.215Z",
                "x": 0,
                "y": 0,
            },)

        )
    } catch (error) {

    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await query(getUserIdSQL, [id])
    res.send(rows[0])
})



router.post('/addUser', async (req, res) => {
    const { username, email, phone, x, y } = req.body;
    try {
        const result = await query(insertUserSQL, [username, email, phone, x, y]);
        const createdUser = result.rows[0];
        return res.json(createdUser);
    } catch (err) {
        res.status(400).json({ "Erro": err })
    }
});

