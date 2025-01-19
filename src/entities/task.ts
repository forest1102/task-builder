import { BuildingType } from './buildingType'
import { TaskStatus } from './status'

export type Task = {
  name: string
  status: TaskStatus
  position: { x: number; y: number }
  buildingType: BuildingType
}

export type TaskSubmissionData = Pick<
  Task,
  'name' | 'status' | 'buildingType'
> & {
  index: number
}
