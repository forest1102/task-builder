import Phaser from 'phaser'
import { TaskEventBus } from './eventBus'
import { TaskSubmissionData } from '../../entities/task'
class Menu extends Phaser.GameObjects.Container {
  private closeButton: Phaser.GameObjects.Text

  private static readonly MENU_WIDTH = 300
  private static readonly MENU_HEIGHT = 600

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y)
    this.setDepth(1000) // 最前面に表示するための高いデプス値を設定

    const menuBg = scene.add
      .rectangle(0, 0, Menu.MENU_WIDTH, Menu.MENU_HEIGHT, 0x808080)
      .setOrigin(0)
      .setInteractive()
      .on('pointerdown', (event: Phaser.Input.Pointer) => {
        event.event.stopPropagation()
      })
    menuBg.setDepth(1000) // 背景も最前面に表示
    this.add(menuBg)

    this.closeButton = scene.add.text(10, 10, 'Close Menu', {
      fontSize: '16px',
    })
    this.closeButton
      .setInteractive()
      .on('pointerdown', (event: Phaser.Input.Pointer) => {
        event.event.stopPropagation()
        event.event.preventDefault()
        TaskEventBus.emit('taskClosed')
        this.setVisible(false)
      })
    this.add(this.closeButton)

    scene.add.existing(this)
    this.setVisible(false)
  }

  showTaskDetail(task: TaskSubmissionData) {
    this.setVisible(true)
    const taskForm = document.getElementById('task-form')
    if (taskForm) {
      const rect = this.scene.game.canvas.getBoundingClientRect()
      taskForm.style.display = 'block'
      taskForm.style.position = 'absolute'
      taskForm.style.left = `${rect.left + this.x}px`
      taskForm.style.top = `${rect.top + this.y + this.closeButton.height + 10}px`
      taskForm.style.width = `${Menu.MENU_WIDTH}px` // Match the width of the menu
      taskForm.style.height = `${Menu.MENU_HEIGHT}px` // Match the height of the menu
      taskForm.style.zIndex = '1000' // フォームも最前面に表示
    }

    TaskEventBus.emit('taskSelected', task)
  }
}

export default Menu
