
/* 
    Event Routes 
    '/api/events'

*/


const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, actualizarEvento, eliminarEvento, crearEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Todas tiene que pasar por la validadación JWT

router.use( validarJWT );


// Obtener eventos

router.get('/', getEventos);

// Crear eventos

router.post(
    '/', 
    [ // middlewares
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom( isDate),
    check('end', 'Fecha de finalización es obligatorio').custom( isDate),
    validarCampos
    ],crearEvento);

// Actualizar eventos

router.put(
    '/:id', 
    [ // middlewares
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom( isDate),
    check('end', 'Fecha de finalización es obligatorio').custom( isDate),
    validarCampos
    ],actualizarEvento);

// Eliminar eventos

router.delete('/:id', eliminarEvento);

module.exports = router;