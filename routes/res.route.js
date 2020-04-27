const express = require("express");
const { body } = require("express-validator");
const calculator = require("../controller/resta.controller");

const router = express.Router();

router.post(
    '/resta', [
      body('minuendo')
        .exists()
        .withMessage('El paramatro Uno es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro Uno debe ser numerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro Uno debe ser entre 1-3 caractes')
        .trim()
        .escape(),
      body('substraendo')
        .exists()
        .withMessage('El paramatro Dos es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro Dos debe ser numerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro Dos debe ser entre 1-3 caractes')
        .trim()
        .escape()
    ] , 
    calculator.resta
);

module.exports = router;
