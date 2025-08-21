const CrudRepository = require('./crud-repostiory');
const { Airplane } = require('../models')

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;

