export class HighScores {
  constructor(values) {
    this.values = values
  }

  get scores() {
    return this.values
  }

  get latest() {
    return this.values[this.values.length - 1]
  }

  get personalBest() {
    return Math.max(...this.values)
  }

  get personalTopThree() {
    return this.values.sort((first, second) => first - second).slice(-3).reverse()
  }
}
