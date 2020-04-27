const { validationResult } = require("express-validator");

const resOperator = (minuendo, sustraendo) => minuendo - sustraendo;

exports.resta = (req, res, nest) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const resta =  resOperator(+req.body.minuendo, +req.body.substraendo);

    const params = {
        body: req.body,
        result: resta
    }

    try{
        res.status(201).json({ message: 'resta', params });
    } catch(err){

         const error = new Error('Error');
         error.statusCode = 500;
         error.data = err;
         throw error;
    }
}