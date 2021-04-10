const express =  require('express');
const router = express.Router();

const Founder = require('../models/founder');

const {
   getFounders,
   getFounder,
   createFounder,
   updateFounder, 
   deleteFounder
} = require('../controllers/founderController');
/**
 * @swagger
 * components:
 *   schemas:
 *     Founder:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - position
 *         - company
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the founder
 *         firstName:
 *           type: string
 *           description: Founder Firstname
 *         lastName:
 *           type: string
 *           description: Founder Lastname
 *         position:
 *           type: string
 *           description: Position
 *         company:
 *           type: string
 *           description: Company id
 *       example:
 *         firstName: John
 *         lastName: Doe
 *         position: Software Engineer
 *         company: 6070f52e0a33d24e80c14987
 */



/**
 * @swagger
 * /api/v1/founders:
 *   get:
 *     summary: Returns the list of all the founders
 *     tags: [Founder]
 *     responses:
 *       200:
 *         description: The list of the founders
 */
router.get('/', getFounders);

/**
 * @swagger
 * /api/v1/founders/{id}:
 *   get:
 *     summary: Get the founder by id
 *     tags: [Founder]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The founder id
 *     responses:
 *       200:
 *         description: The founder description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Founder'
 *       404:
 *         description: The founder was not found
 */
router.get('/:id', getFounder)

/**
 * @swagger
 * /api/v1/founders:
 *   post:
 *     summary: Create a new founder
 *     tags: [Founder]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Founder'

 *     responses:
 *       200:
 *         description: The founder was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/', createFounder);

/**
 * @swagger
 * /api/v1/founders/{id}:
 *  patch:
 *    summary: Update the founder by the id
 *    tags: [Founder]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The founder id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Founder'
 *    responses:
 *      200:
 *        description: The founder was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Founder'
 *      404:
 *        description: The founder was not found
 *      500:
 *        description: Some error happened
 */
router.patch('/:id', updateFounder);

/**
 * @swagger
 * //api/v1/founders/{id}:
 *   delete:
 *     summary: Remove the founder by id
 *     tags: [Founder]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The founder id
 * 
 *     responses:
 *       200:
 *         description: The founder was deleted
 *       404:
 *         description: The founder was not found
 */
router.delete('/:id', deleteFounder);

module.exports = router;
