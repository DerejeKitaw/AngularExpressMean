
import * as mongoose from 'mongoose';

const panelSchema = new mongoose.Schema({
    panelName : String,
    powerRating : Number,
    Imp : Number,
    Vmp : Number,
    Isc : Number,
    Voc : Number,
    tempCoefficientofIsc : Number,
    tempCoefficientofVoc : Number,
    TempCoefficientofPower : Number,
    maximumSytemVoltage : Number,
    length : Number,
    width : Number,
    depth : Number,
    weight : Number
});

const Panel = mongoose.model('Panel', panelSchema);

export default Panel;
