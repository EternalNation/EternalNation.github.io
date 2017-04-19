// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function() {
  var DATA = {
    'convolutional.UpSampling1D.0': {
      input: {
        data: [
          0.262,
          0.764609,
          -0.482897,
          -0.371755,
          0.871769,
          0.490033,
          -0.986894,
          -0.960468,
          0.373039,
          0.911356,
          0.00298,
          0.270652,
          0.749006,
          0.692235,
          0.471778
        ],
        shape: [3, 5]
      },
      expected: {
        data: [
          0.262,
          0.764609,
          -0.482897,
          -0.371755,
          0.871769,
          0.262,
          0.764609,
          -0.482897,
          -0.371755,
          0.871769,
          0.490033,
          -0.986894,
          -0.960468,
          0.373039,
          0.911356,
          0.490033,
          -0.986894,
          -0.960468,
          0.373039,
          0.911356,
          0.00298,
          0.270652,
          0.749006,
          0.692235,
          0.471778,
          0.00298,
          0.270652,
          0.749006,
          0.692235,
          0.471778
        ],
        shape: [6, 5]
      }
    },
    'convolutional.UpSampling1D.1': {
      input: {
        data: [
          0.562988,
          0.168418,
          -0.14658,
          -0.369311,
          0.653777,
          0.806859,
          -0.922124,
          0.830445,
          -0.878989,
          -0.638546,
          -0.855401,
          -0.082476,
          0.416718,
          -0.03353,
          -0.949107,
          -0.866195
        ],
        shape: [4, 4]
      },
      expected: {
        data: [
          0.562988,
          0.168418,
          -0.14658,
          -0.369311,
          0.562988,
          0.168418,
          -0.14658,
          -0.369311,
          0.562988,
          0.168418,
          -0.14658,
          -0.369311,
          0.653777,
          0.806859,
          -0.922124,
          0.830445,
          0.653777,
          0.806859,
          -0.922124,
          0.830445,
          0.653777,
          0.806859,
          -0.922124,
          0.830445,
          -0.878989,
          -0.638546,
          -0.855401,
          -0.082476,
          -0.878989,
          -0.638546,
          -0.855401,
          -0.082476,
          -0.878989,
          -0.638546,
          -0.855401,
          -0.082476,
          0.416718,
          -0.03353,
          -0.949107,
          -0.866195,
          0.416718,
          -0.03353,
          -0.949107,
          -0.866195,
          0.416718,
          -0.03353,
          -0.949107,
          -0.866195
        ],
        shape: [12, 4]
      }
    }
  };

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA);
})();
