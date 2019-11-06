/**
  * This class used to record flux for sharing with chatbot webhook
  */

export class Storage {
  static instance

  actions: any[]

  constructor () {
    if (Storage.instance) {
      return Storage.instance
    }

    this.actions = []
  }

  register (message) {
    this.actions.push(message)
  }

  drop () {
    const actions = this.actions
    this.actions = []
    return actions
  }
}
