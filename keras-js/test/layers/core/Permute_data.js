// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function() {
  var DATA = {
    'core.Permute.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [3, 2] },
      expected: { data: [0, 0.5, 1, 0.2, -0.1, 2], shape: [2, 3] }
    },
    'core.Permute.1': {
      input: {
        data: [0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2],
        shape: [2, 3, 4]
      },
      expected: {
        data: [0, 0, 1, 1, 0.5, 0.5, 0.2, 0.2, 2, 2, -0.1, -0.1, 0.5, 0.5, 0, 0, 1, 1, -0.1, -0.1, 0.2, 0.2, 2, 2],
        shape: [4, 3, 2]
      }
    }
  };

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA);
})();
