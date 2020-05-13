export class Matrix {
  constructor(values) {
    this.values = values.split(/\n/)
  }

  get rows() {
    return this.values.map(row => row.split(" ").map(row => +row))
  }

  get columns() {
    return this.rows[0].map((_, index) => this.rows.map(row => row[index]))
  }
}
