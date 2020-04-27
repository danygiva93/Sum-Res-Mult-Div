const { validationResult } = require("express-validator");

const sumOperator = (param1, param2) => (+param1) + (+param2);

const multiOperator = (factorone, factortwo) => factorone * factortwo;
const divOperator = (dividendo, divisor) => dividendo / divisor;


exports.sum = (req, res, nest) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const sum =  sumOperator(+req.body.paramone, +req.body.paramtwo);

    const params = {
        body: req.body,
        result: sum
    }

    try{
        res.status(201).json({ message: 'sum', params });
    } catch(err){

         const error = new Error('Error');
         error.statusCode = 500;
         error.data = err;
         throw error;
    }
}




exports.multi = (req, res, nest) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const multi =  multiOperator(+req.body.factorone, +req.body.factortwo);

    const params = {
        body: req.body,
        result: multi
    }

    try{
        res.status(201).json({ message: 'multi', params });
    } catch(err){

         const error = new Error('Error');
         error.statusCode = 500;
         error.data = err;
         throw error;
    }
}

exports.div = (req, res, nest) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const div =  divOperator(+req.body.dividendo, +req.body.divisor);

    const params = {
        body: req.body,
        result: div
    }

    try{
        res.status(201).json({ message: 'div', params });
    } catch(err){

         const error = new Error('Error');
         error.statusCode = 500;
         error.data = err;
         throw error;
    }
}