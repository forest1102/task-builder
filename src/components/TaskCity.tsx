import { useLayoutEffect, useRef, useState } from 'react'
import TaskForm from './TaskForm'
import { TaskSubmissionData } from '../entities/task'
import { TaskEventBus } from './containers/eventBus'
import { config, MainGame } from './games/MainGame'

export const TaskCity = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [task, setTask] = useState<TaskSubmissionData>()
  const gameRef = useRef<MainGame | null>(null)

  const onTaskSubmit = (data: TaskSubmissionData) => {
    gameRef.current?.events.emit('taskUpdated', data)
  }

  useLayoutEffect(() => {
    if (!gameRef.current) {
      gameRef.current = new MainGame(config)
    }

    return () => {
      gameRef.current?.destroy(true)
      gameRef.current = null
    }
  }, [])
  useLayoutEffect(() => {
    TaskEventBus.on('taskSelected', (task: TaskSubmissionData) => {
      setTask(task)
      setIsMenuOpen(true)
    })
    TaskEventBus.on('taskClosed', () => {
      setIsMenuOpen(false)
    })
  }, [])

  return (
    <>
      <div id="game"></div>
      <div id="task-form">
        {isMenuOpen && <TaskForm task={task} onSubmit={onTaskSubmit} />}
      </div>
    </>
  )
}
