module.exports = (express, connection) => {
    var router = express.Router();

    router.use((req, res, next) => {
        console.log("Route fonctionelle /api");

        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();
    });

    //route des apprenants***********************************************************************
    router.route('/apprenants')
    //DEFINITION DE L'API
        //méthode GET 
        .get((req, res) => {
            var query = connection.query('SELECT * FROM tb_apprenant', (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                res.jsonp(rows);
            });
            console.log(query.sql)
        })

        //methode POST
        .post((req, res) => {
            var data = req.body;
            var query = connection.query('INSERT INTO tb_apprenant SET ?', [data], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404);
                } else {
                    res.status(200);
                    res.location('/api/tb_apprenant' + result.insertId);
                    res.end();
                }
            });
            console.log(query.sql)
        })

    //methode PUT
    router.route('/apprenants/:id')
        .put((req, res) => {
            var id = req.params.id;
            var data = req.body;
            var query = connection.query('UPDATE tb_apprenant SET ? WHERE ID= ' + id, [data], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404);
                } else {
                    res.status(200);
                    res.location('/api/tb_apprenant' + result.insertId);
                    res.end();
                }
            });
            console.log(query.sql)
        })

    //methode DELETE
    router.route('/apprenants/:id')
        .delete((req, res) => {
            var id = req.params.id;
            var query = connection.query('DELETE FROM tb_apprenant WHERE ID = ' + id, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.end();
            });
            console.log(query.sql)
        })

    //route des formateurs****************************************************************************************
    router.route('/formateurs')
    //DEFINITION DE L'API
    //méthode GET 
        .get((req, res) => {
            var query = connection.query('SELECT * FROM tb_formateur', (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                res.jsonp(rows);
            });
            console.log(query.sql)
        })

    //methode POST
        .post((req, res) => {
            var data = req.body;
            var query = connection.query('INSERT INTO tb_formateur SET ?', [data], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404);
                } else {
                    res.status(200);
                    res.location('/api/tb_formateur' + result.insertId);
                    res.end();
                }
            });
            console.log(query.sql)
        })

    //methode PUT
    router.route('/formateurs/:id')
        .put((req, res) => {
            var id = req.params.id;
            var data = req.body;
            var query = connection.query('UPDATE tb_formateur SET ? WHERE ID= ' + id, [data], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404);
                } else {
                    res.status(200);
                    res.location('/api/tb_formateur' + result.insertId);
                    res.end();
                }
            });
            console.log(query.sql)
        })

    //methode DELETE
    router.route('/formateurs/:id')
        .delete((req, res) => {
            var id = req.params.id;
            var query = connection.query('DELETE FROM tb_formateur WHERE ID = ' + id, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.end();
            });
            console.log(query.sql)
        })

    //route des sessions*******************************************************************************************
    router.route('/sessions')
    //DEFINITION DE L'API
    //méthode GET
        .get((req, res) => {
            var query = connection.query('SELECT * FROM tb_session', (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                res.jsonp(rows);
            });
            console.log(query.sql)
        })

     //methode POST
        .post((req, res) => {
            var data = req.body;
            var query = connection.query('INSERT INTO tb_session SET ?', [data], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404);
                } else {
                    res.status(200);
                    res.location('/api/tb_session' + result.insertId);
                    res.end();
                }
            });
            console.log(query.sql)
        })

    //methode PUT
    router.route('/sessions/:id')
        .put((req, res) => {
            var id = req.params.id;
            var data = req.body;
            var query = connection.query('UPDATE tb_session SET ? WHERE ID= ' + id, [data], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404);
                } else {
                    res.status(200);
                    res.location('/api/tb_session' + result.insertId);
                    res.end();
                }
            });
            console.log(query.sql)
        })

    //methode DELETE
    router.route('/sessions/:id')
        .delete((req, res) => {
            var id = req.params.id;
            var query = connection.query('DELETE FROM tb_session WHERE ID = ' + id, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.end();
            });
            console.log(query.sql)
        })

    //route des specialites***************************************************************************************
    router.route('/specialites')
    //DEFINITION DE L'API
    //méthode GET
        .get((req, res) => {
            var query = connection.query('SELECT * FROM tb_specialite', (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                res.jsonp(rows);
            });
            console.log(query.sql)
        })

    //methode POST
        .post((req, res) => {
            var data = req.body;
            var query = connection.query('INSERT INTO tb_specialite SET ?', [data], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404);
                } else {
                    res.status(200);
                    res.location('/api/tb_specialite' + result.insertId);
                    res.end();
                }
            });
            console.log(query.sql)
        })

    //methode PUT
    router.route('/specialites/:id')
        .put((req, res) => {
            var id = req.params.id;
            var data = req.body;
            var query = connection.query('UPDATE tb_specialite SET ? WHERE ID= ' + id, [data], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404);
                } else {
                    res.status(200);
                    res.location('/api/tb_specialite' + result.insertId);
                    res.end();
                }
            });
            console.log(query.sql)
        })

    //methode DELETE
    router.route('/speciliates/:id')
        .delete((req, res) => {
            var id = req.params.id;
            var query = connection.query('DELETE FROM tb_specialite WHERE ID = ' + id, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.end();
            });
            console.log(query.sql)
        })

    return router;

}