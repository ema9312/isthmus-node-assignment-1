import { Schema, model, Document } from 'mongoose';

const HospitalSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  patientsCapacity: {
    type: Number,
    required: true,
  },
  activePatients: {
    type: Number,
    required: true,
  },
  employeeCapacity: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  }
});

interface IHospitalSchema extends Document {
  name: string;
  patientsCapacity: number;
  activePatients: number;
  employeeCapacity: number;
  createdDate: Date;
  updatedDate: Date;
}

export default model<IHospitalSchema>('Hospital', HospitalSchema);
