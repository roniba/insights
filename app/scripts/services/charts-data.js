angular.module('insightsApp')
  .service('chartsData', function () {
    var orders = {
      week: {
        data: [3, 2, 0, 0, 0, 4, 0],
        labels: ['Jan 1st', 'Jan 2nd', 'Jan 3rd', 'Jan 4th', 'Jan 5th', 'Jan 6th', 'Jan 7th']
      },
      month: {
        data: [10, 3, 7, 15, 14, 30, 24, 26, 33, 44, 25, 11],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      year: {
        data: [89, 59, 115, 23],
        labels: ['2013', '2014', '2015', '2016']
      }
    };

    var revenue = {
      week: {
        data: [35, 20, 0, 0, 0, 89, 0],
        labels: ['Jan 1st', 'Jan 2nd', 'Jan 3rd', 'Jan 4th', 'Jan 5th', 'Jan 6th', 'Jan 7th']
      },
      month: {
        data: [33, 97, 140, 664, 455, 99, 140, 89, 90, 131, 153, 256],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      year: {
        data: [467, 859, 1247, 165],
        labels: ['2013', '2014', '2015', '2016']
      }
    }

    this.getData = function(chart) {
      switch (chart) {
        case 'orders':
          return orders;
        case 'revenue':
          return revenue;
      }
    };
  });
