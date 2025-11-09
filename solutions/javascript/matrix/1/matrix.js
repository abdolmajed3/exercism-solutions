export class Matrix {
  constructor(matrixString) {
    this._rows = matrixString
      .trim()
      .split('\n')
      .map(line => line.trim().split(' ').map(Number));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._rows[0].map((_, colIndex) =>
      this._rows.map(row => row[colIndex])
    );
  }
}
