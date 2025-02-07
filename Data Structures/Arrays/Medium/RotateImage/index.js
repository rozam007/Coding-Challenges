
const rotate = (matrix) => {
    const n = matrix.length;

    for(let i = 0; i < Math.floor(n / 2); i++) {
        for(let j = i; j < n-1-i; j++) {

            const temp = matrix[n-1-j][i];

            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];

            matrix[n-1-i][n-1-j] = matrix[j][n-1-i];

            matrix[j][n-1-i] = matrix[i][j];

            matrix[i][j] = temp;
        }
    }
};