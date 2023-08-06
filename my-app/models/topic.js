import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true, //input kismisi
    }
);
const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;//api itopics route da kullaniyoruz 