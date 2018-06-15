import { Router }  from 'express';
import client from '../database/db';
import { getUsers, insertUsers, editUsers, deleteUsers, getUser } from '../controller/users';
 const router = Router();

router.get('/all', async (req, res) => {
    let queryResult = null
    try {
        queryResult = await getUsers(client)
    } catch (error) {
        console.log(error);
        res.status(500).send(new Error("Erreur dans l'acquisition des utilisateurs", error))
    }
    return res.status(200).send(queryResult.rows);
});

router.get('/:id', async (req, res) => {
    let getOneResult = null
    try {
        getOneResult = await getUser(req.params.id);
    } catch (error) {
        console.log(error);
        res.status(500).send(new Error("Erreur dans l'acquisition d'un utilisateur'", error))
    }
    return res.status(200).send(getOneResult.rows);
});

router.post('/add', async (req, res) => {
    let insertUserResult = null
    try {
        insertUserResult = await insertUsers(client, {firstname : req.body.firstname, lastname: req.body.lastname})
    } catch (error) {
        console.log(error);
        res.status(500).send(new Error("Erreur dans l'insertion d'un user", error))
    }
    return res.status(200).send(insertUserResult.rows);
});

router.put('/edit/:id', async (req, res) => {
    let editUserResult = null
    try {
        // assign 
        editUserResult = await editUsers(req.params.id, { firstname: req.body.firstname, lastname: req.body.lastname })
    } catch (error) {
        console.log(error);
        res.status(500).send(new Error("Erreur dans l'édition d'un user", error))
    }
    return res.status(200).send(editUserResult.rows);
});

router.delete('/delete/:id', async (req, res) => {
    let deleteUserResult = null
    try {
        deleteUserResult = await deleteUsers(req.params.id)
    } catch (error) {
        console.log(error);
        res.status(500).send(new Error("Erreur dans la suppression d'un user", error))
    }
    return res.status(200).send(deleteUserResult);
})

export default router;
