import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TaskSubmissionData } from '../entities/task'
import { TaskStatus } from '../entities/status'
import { BuildingType } from '../entities/buildingType'

interface TaskFormProps {
  task?: TaskSubmissionData
  onSubmit: (data: TaskSubmissionData) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<TaskSubmissionData>({
    defaultValues: task,
  })

  useEffect(() => {
    reset(task)
  }, [task, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Status:</label>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value={TaskStatus.DRAFT}>Draft</option>
              <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
              <option value={TaskStatus.DONE}>Done</option>
            </select>
          )}
        />
      </div>
      <div>
        <label>Building Type:</label>
        <Controller
          name="buildingType"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value={BuildingType.House}>House</option>
              <option value={BuildingType.Castle}>Castle</option>
            </select>
          )}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default TaskForm
