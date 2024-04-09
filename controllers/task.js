const Task = require("../models/task");
const getAllTask = async (req, res, next) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};
const postTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description, completed: false });
    res.json(task);
  } catch (error) {
    res.send(error);
  }
};
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } catch (error) {
    res.send(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id: id,
      },
    });
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.send(error);
  }
};

module.exports={getAllTask,updateTask,postTask,deleteTask}