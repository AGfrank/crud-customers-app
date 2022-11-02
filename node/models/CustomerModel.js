import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const Schema = mongoose.Schema

const customerSchema = new Schema(
    {
        id: { type: Number, required: true },
        email: { type: String },
        first: { type: String },
        last: { type: String },
        company: { type: String },
        created_at: { type: Date, default: Date.now },
        country: { type: String }
    },
    {
        versionKey: false,
        collection: 'customers'
    }
)

customerSchema.plugin(autoIncrement.plugin, {
    model: 'customers',
    field: 'id',
    startAt: 10000,
    incrementBy: 1
})

export default mongoose.model('CustomerModel', customerSchema)