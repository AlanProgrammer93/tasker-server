import Task from "../models/task";

export const create = async (req, res) => {
    try {
        const task = new Task({
            task: req.body.content,
            postedBy: req.user._id
        }).save();
        const data = await Task.findById(task._id)
            .populate("postedBy", "name");
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

export const tasks = async (req, res) => {
    try {
        const perPage = 6;
        const page = req.params.page ? req.params.page : 1;

        const tasks = await Task.find()
            .skip((page - 1) * perPage)
            .populate('postedBy', "name")
            .sort({ createdAt: -1 })
            .limit(perPage);
        res.json(tasks)
    } catch (error) {
        console.log(error);
    }
}

export const update = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
            new: true
        }).populate("postedBy", "name")
        res.json(task)
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.taskId);
        res.json(task);
    } catch (error) {
        console.log(error);
    }
}

export const taskCount = async (req, res) => {
    try {
        const count = await Task.countDocuments();
        res.json(count)
    } catch (error) {
        console.log(error);
    }
}
