
import * as mongoose from 'mongoose';

const countySchema = new mongoose.Schema({
    username: String,
    groundSnowLoad: Number,
    rapidShutdown: Boolean,
    windSpeed: String
});

const County = mongoose.model('County', countySchema);

