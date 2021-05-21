const Pet = require('../models/Pet');
const status = require('http-status');

module.exports = {
    async Index (req, res, next){
        Pet.findAll({
            limit: 10,
        }) .then(pet => {
            if (pet) {
                res.status(status.OK).send(pet);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
    },

    async Insert(req, res, next) {
        
        const {NAME, DATA_NASC, TYPE, RACA, IMAGE, OWNER, TELEPHONE } = req.body;
    
        Pet.create({
            NAME,
            DATA_NASC,
            TYPE,
            RACA,
            IMAGE,
            OWNER,
            TELEPHONE
        })

        .then(pet => {
            if (pet) {
                res.status(status.OK).send(pet);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        
        .catch(error => next(error));
    },

    
    async Update(req, res, next){
        const {IDPET, NAME, DATA_NASC, TYPE, RACA, IMAGE, OWNER, TELEPHONE } = req.body;

        Pet.update({NAME, DATA_NASC, TYPE, RACA, IMAGE, OWNER, TELEPHONE}, 
            {where: {
                IDPET: IDPET
            }
        })
        .then(result => 
            res.status(status.OK).send(result)
        )
        .catch(err =>
            res.status(status.NOT_FOUND).send(err)
        )
    },
    

    async Delete(req, res, next) {
        const IDPET = req.params.IDPET;
        
        const response = await Pet.destroy({
            where: {
                IDPET: IDPET,
            }
        });
        
       console.log(`${IDPET} Deletado!`)

       res.status(status.OK).send('recebido!');
    }
}