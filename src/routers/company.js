const express =  require('express');
const router = express.Router();

const Company = require('../models/company');

const {
    getCompanies,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/companyController');
/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       required:
 *         - name
 *         - city
 *         - state
 *         - street
 *         - foundedDate
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the compant
 *         name:
 *           type: string
 *           description: Company name
 *         city:
 *           type: string
 *           description: City name
 *         state:
 *           type: string
 *           description: State name
 *         foundedDate:
 *           type: date
 *           description: Company founded date
 *         description:
 *           type: string
 *           description: Company description
 *       example:
 *         name: My awesome new company
 *         city: New York
 *         state: New York
 *         street: 5th Avenue 42nd Street, Bryant Park
 *         foundedDate: 1900-01-01
 */


/**
 * @swagger
 * /api/v1/companies:
 *   get:
 *     summary: Returns the list of all the companies
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: The list of the companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 */
router.get('/', getCompanies);

/**
 * @swagger
 * /api/v1/companies/{id}:
 *   get:
 *     summary: Get the company by id
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The company id
 *     responses:
 *       200:
 *         description: The company description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: The company was not found
 */

router.get('/:id', getCompany);
/**
 * @swagger
 * /api/v1/companies:
 *   post:
 *     summary: Create a new company
 *     tags: [Company]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'

 *     responses:
 *       200:
 *         description: The company was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/', createCompany);

/**
 * @swagger
 * /api/v1/companies/{id}:
 *  patch:
 *    summary: Update the company by the id
 *    tags: [Company]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The company id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Company'
 *    responses:
 *      200:
 *        description: The company was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Company'
 *      404:
 *        description: The company was not found
 *      500:
 *        description: Some error happened
 */

router.patch('/:id', updateCompany);

/**
 * @swagger
 * //api/v1/companies/{id}:
 *   delete:
 *     summary: Remove the company by id
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The company id
 * 
 *     responses:
 *       200:
 *         description: The company was deleted
 *       404:
 *         description: The company was not found
 */
router.delete('/:id', deleteCompany);

module.exports = router;
