import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    filepath: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

export default mongoose.model("Image", ImageSchema);
