import { Router }  from 'express';
import client from '../database/db';
import { getUsers } from '../controller/getUsers';
 const router = Router();

router.get('/', async (req, res) => {
    let queryResult = null
    try {
        queryResult = await getUsers(client)
    } catch (error) {
        console.log(error);
        res.status(500).send(new Error("Erreur dans l'acquisition des utilisateurs", error))
    }
    return res.status(200).send(queryResult.rows);
});

export default router;
//controller getUsers