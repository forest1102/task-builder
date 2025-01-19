import CityView from '../containers/cityView'
import Menu from '../containers/menu'
import { TaskSubmissionData } from '../../entities/task'
import Phaser from 'phaser'

/**
 * Main Scene
 */
class MainScene extends Phaser.Scene {
  private Menu: Menu | undefined
  private CityView: CityView | undefined

  constructor() {
    super({
      key: 'Main',
    })
  }

  /**
   * Initialization
   */
  init(): void {
    console.log('init')
  }

  /**
   * Preload assets
   */
  preload(): void {
    console.log('preload')
    this.load.image('tile', 'assets/tile.png')

    this.load.image('house_draft', 'assets/house_draft.png')
    this.load.image('house_in_progress', 'assets/house_in_progress.png')
    this.load.image('house_done', 'assets/house_done.png')

    this.load.image('castle_draft', 'assets/castle_draft.png')
    this.load.image('castle_in_progress', 'assets/castle_in_progress.png')
    this.load.image('castle_done', 'assets/castle_done.png')
  }

  /**
   * Create game objects and set up event actions
   */
  create(): void {
    const { width } = this.scale

    this.CityView = new CityView(this)
    this.Menu = new Menu(this, width - 200, 0)
  }

  /**
   * Main loop
   */
  update(): void {}

  showTaskDetail(task: TaskSubmissionData) {
    this.Menu?.showTaskDetail(task)
  }
}

export default MainScene
