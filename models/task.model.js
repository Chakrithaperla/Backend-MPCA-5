const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
        index: true
    },

    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium",
        index: true
    }
},
{
    timestamps: true
}
);

taskSchema.index({ status: 1, priority: 1 });

module.exports = mongoose.model("Task", taskSchema);