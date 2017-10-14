
import * as mongoose from 'mongoose';

const inverterSchema = new mongoose.Schema({
    inverterName: String,
    maxAcPowerOutput: Number,
    maxContinuousOutputCurrent: Number,
    maxInputVoltage: Number,
    cecWeightedEfficiency: Number
});

const Inverter = mongoose.model('Inverter', inverterSchema);

export default Inverter;
