import MainScene from '../scenes/main'
import Phaser from 'phaser'
import { Task } from '../../entities/task'
import { TaskStatus } from '../../entities/status'

class Building extends Phaser.GameObjects.Container {
  private task: Task
  private buildingImage: Phaser.GameObjects.Image
  private lastValidPosition = { x: 0, y: 0 }

  constructor(
    scene: Phaser.Scene,
    index: number,
    task: Task,
    tileSize: number,
    buildingSize: number
  ) {
    super(
      scene,
      task.position.x * tileSize + buildingSize / 2,
      task.position.y * tileSize + buildingSize / 2
    )

    console.log('Building created', task, index)
    this.task = task

    this.lastValidPosition = {
      x: task.position.x * tileSize + buildingSize / 2,
      y: task.position.y * tileSize + buildingSize / 2,
    }

    const imageKey = this.getImageKeyForStatus(task.status)
    this.buildingImage = scene.add.image(0, 0, imageKey)
    this.buildingImage.setDisplaySize(buildingSize, buildingSize)
    this.add(this.buildingImage)

    this.setSize(buildingSize, buildingSize)
    this.setInteractive({ draggable: true })
    // scene.input.enableDebug(this)

    scene.input.setDraggable(this)

    this.on('drag', (_pointer: PointerEvent, dragX: number, dragY: number) => {
      const snappedX =
        Math.round(dragX / tileSize) * tileSize + buildingSize / 2
      const snappedY =
        Math.round(dragY / tileSize) * tileSize + buildingSize / 2

      const buildings = scene.children.list.filter(
        (obj) => obj instanceof Building && obj !== this
      ) as Building[]

      const hasCollision = buildings.some(
        (building) => building.x === snappedX && building.y === snappedY
      )

      if (hasCollision) {
        this.x = this.lastValidPosition.x
        this.y = this.lastValidPosition.y
      } else {
        this.x = snappedX
        this.y = snappedY
        this.lastValidPosition = { x: snappedX, y: snappedY }
        task.position.x = (snappedX - buildingSize / 2) / tileSize
        task.position.y = (snappedY - buildingSize / 2) / tileSize
      }
    })

    this.on('pointerdown', () => {
      const mainScene = scene.scene.get('Main') as MainScene
      mainScene.showTaskDetail({ ...task, index })
    })

    scene.add.existing(this)
  }

  private getImageKeyForStatus(status: TaskStatus): string {
    const baseKey = this.task.buildingType
    switch (status) {
      case TaskStatus.DONE:
        return `${baseKey}_done`
      case TaskStatus.IN_PROGRESS:
        return `${baseKey}_in_progress`
      case TaskStatus.DRAFT:
      default:
        return `${baseKey}_draft`
    }
  }

  update(): void {
    const imageKey = this.getImageKeyForStatus(this.task.status)
    this.buildingImage.setTexture(imageKey)
  }
}

export default Building
