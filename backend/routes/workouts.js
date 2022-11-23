const express=require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')

const router=express.Router()
//all
router.get('/', getWorkouts)
//single 
router.get('/:id',getWorkout)
//post a new  workout 
router.post('/',createWorkout)



//delete a workout 
router.delete('/:id',deleteWorkout)
//update 
router.patch('/:id',updateWorkout)

module.exports=router