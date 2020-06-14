const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        //buscar todos incidents atraves de connection a tabela incidents
        const incidents = await connection('incidents')
            .where('ong_id', ong_id) //buscanto todos incidents que essa ong criou ('ong_id)
            .select('*'); //buscar todos
            

        return response.json(incidents);
    }
}