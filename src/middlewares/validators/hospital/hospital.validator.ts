import { body } from 'express-validator';

const validations = [
  body('name').exists().withMessage('Name is required'),
  body('name').if(body('name').exists()).isLength({min: 8}).withMessage('Name min lenght is 8'),
];

export default validations;
