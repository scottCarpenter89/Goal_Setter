/**
 * @desc Get goals
 * @route Get /api/goals
 * @access Private
 */

const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'});
}

/**
 * @desc Set goals
 * @route Post /api/goals
 * @access Private
 */

const setGoals = (req, res) => {
    if(!(req.body.text)) {
        res.status(400).json({message: 'Please add a text field'})
    }
    res.status(200).json({message: 'Set goals'});
}

/**
 * @desc Update goals
 * @route Put /api/goals/id
 * @access Private
 */

const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
}

/**
 * @desc Delete goals
 * @route Delete /api/goals/id
 * @access Private
 */

const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
}
module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}