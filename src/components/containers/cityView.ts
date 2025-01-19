import TaskBuilding from './taskBuilding'
import Phaser from 'phaser'
import { Task, TaskSubmissionData } from '../../entities/task'
import { TaskStatus } from '../../entities/status'
import MainScene from '../scenes/main'
import { BuildingType } from '../../entities/buildingType'

class CityView extends Phaser.GameObjects.Container {
  static readonly TILE_SIZE = 100
  static readonly BUILDING_SIZE = 100
  private backgroundTiles: Phaser.GameObjects.Image[] = []

  private static readonly INITIAL_TASKS: Task[] = [
    {
      name: 'Design Creation',
      status: TaskStatus.DRAFT,
      position: { x: 2, y: 3 },
      buildingType: BuildingType.House,
    },
    {
      name: 'Coding',
      status: TaskStatus.IN_PROGRESS,
      position: { x: 5, y: 1 },
      buildingType: BuildingType.House,
    },
    {
      name: 'Run Tests',
      status: TaskStatus.DONE,
      position: { x: 1, y: 4 },
      buildingType: BuildingType.House,
    },
  ]

  private tasks: Task[] = []
  private buildingGroup?: Phaser.GameObjects.Group

  private loadTasks(): Task[] {
    const savedTasks = localStorage.getItem('tasks')
    if (!savedTasks) {
      localStorage.setItem('tasks', JSON.stringify(CityView.INITIAL_TASKS))
      return CityView.INITIAL_TASKS
    }
    return JSON.parse(savedTasks)
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  constructor(scene: MainScene) {
    super(scene, 0, 0)

    // 画面サイズに基づいてタイル数を計算
    const { width, height } = scene.scale
    const columns = Math.ceil(width / CityView.TILE_SIZE)
    const rows = Math.ceil(height / CityView.TILE_SIZE)

    // 背景タイルの作成
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const tile = scene.add
          .image(
            x * CityView.TILE_SIZE + CityView.TILE_SIZE / 2,
            y * CityView.TILE_SIZE + CityView.TILE_SIZE / 2,
            'tile'
          )
          .setDepth(-1)
        tile.setDisplaySize(CityView.TILE_SIZE, CityView.TILE_SIZE)
        this.backgroundTiles.push(tile)
      }
    }

    this.tasks = this.loadTasks()

    this.buildingGroup = this.scene.add.group([], {
      runChildUpdate: true,
    })

    this.tasks.forEach((task, index) => {
      const building = new TaskBuilding(
        this.scene,
        index,
        task,
        CityView.TILE_SIZE,
        CityView.BUILDING_SIZE
      )
      this.buildingGroup?.add(building)
    })

    scene.game.events.on('taskUpdated', (task: TaskSubmissionData) => {
      this.tasks[task.index].name = task.name
      this.tasks[task.index].status = task.status
      this.tasks[task.index].buildingType = task.buildingType
      this.saveTasks()
    })

    let isDragging = false

    this.scene.input.on('pointerdown', () => {
      isDragging = false
    })

    this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      if (pointer.isDown) {
        isDragging = true
      }
    })

    this.scene.input.on('pointerup', (pointer: Phaser.Input.Pointer) => {
      if (!isDragging && pointer.event.detail === 2) {
        // Check for double click
        const x = Math.floor(pointer.worldX / CityView.TILE_SIZE)
        const y = Math.floor(pointer.worldY / CityView.TILE_SIZE)

        const tileOccupied = this.tasks.some(
          (task) => task.position.x === x && task.position.y === y
        )
        if (tileOccupied) {
          return
        }

        const newTask: Task = {
          name: '',
          status: TaskStatus.DRAFT,
          position: { x, y },
          buildingType: BuildingType.House,
        }

        const index = this.tasks.push(newTask) - 1
        const building = new TaskBuilding(
          this.scene,
          this.tasks.length - 1,
          newTask,
          CityView.TILE_SIZE,
          CityView.BUILDING_SIZE
        )
        this.buildingGroup?.add(building)
        scene.showTaskDetail({ ...newTask, index })
        this.saveTasks()
      }
    })
  }
}

export default CityView
