/**
  * This class used to record flux for sharing with chatbot webhook
  */

export class Storage {
  static instance

  private actions: any[]

  constructor () {
    if (!Storage.instance) {
      Storage.instance = this
    }

    this.actions = []

    return Storage.instance
  }

  register (message) {
    this.actions.push(message)
  }

  drop () {
    const actions = this.actions
    this.actions = []
    return actions
  }

  getActions () {
    return this.actions
  }
}
