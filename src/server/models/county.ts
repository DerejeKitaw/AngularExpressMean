
import * as mongoose from 'mongoose';

const countySchema = new mongoose.Schema({
    countyName: String,
    groundSnowLoad: Number,
    rapidShutdown: Boolean,
    windSpeed: Number
});

const County = mongoose.model('County', countySchema);

export default County;
