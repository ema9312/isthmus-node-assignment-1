import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import Hospital from '../models/hospital';
import { ErrorHandler, handleError } from '../error';
import bodyValidator from '../middlewares/validators/hospital/hospital.validator';
import validationsHandler from '../middlewares/validators/validator';
const router = Router();

// =============================
// @route      POST api/hopital
// @desc       Register an Hospital
// @access     Public
// =============================

router.post('/',bodyValidator, validationsHandler, async (req: Request, res: Response) => {
  const { 
        name,
        patientsCapacity,
        activePatients,
        employeeCapacity
    } = req.body;
  try {
    let hospital = await Hospital.findOne({ name });
    if (hospital) {
      const custom = new ErrorHandler(400, 'Hospital already exists');
      handleError(custom, req, res);
    }
    hospital = new Hospital({
        name,
        patientsCapacity,
        activePatients,
        employeeCapacity
    });

    await hospital.save();

    res.status(200).json({
        msj: 'Hospital Created',
      });

  } catch (err) {
    console.log(err);
    const custom = new ErrorHandler(500, 'Server Error');
    handleError(custom, req, res);
  }
});

export default router;