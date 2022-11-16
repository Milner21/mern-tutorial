const asyncHandler = require("express-async-handler");

//@desc Get goals
//@route GET/ api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Obtener Goles" });
});

//@desc Set goal
//@route POST/ api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Por favor agregar un texto");
  }

  res.status(200).json({ message: "Establecer Gol" });
});

//@desc Update goal
//@route PUT/ api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Actualizar Gol ${req.params.id}` });
});
//@desc Delete goal
//@route DELETE/ api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Eliminar Gol ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
