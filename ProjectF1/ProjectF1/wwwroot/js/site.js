// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
document.querySelector('.mercedes-ferrari-redbull').addEventListener('click', function (e) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Race', 'HAM', 'BOT', 'LEC', 'VET', 'VER', 'GAS'],
            ['Australia', 2, 1, 5, 4, 3, 11],
            ['Bahrain', 1, 2, 3, 5, 4, 8],
            ['China', 1, 2, 5, 3, 4, 6],
            ['Azerbaijan', 2, 1, 5, 3, 4, 21],
            ['Spain', 1, 2, 5, 4, 3, 6],
            ['Monaco', 1, 3, 21, 2, 4, 5],
            ['Canada', 1, 4, 3, 2, 5, 8]
        ]);

        var options = {
            title: 'Driver Performance: Mercedes, Ferrari, Red Bull',
            /*curveType: 'function',*/
            legend: { position: 'bottom' },
            vAxis: { direction: -1, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
            pointSize: 5
        };

        var chart = new google.visualization.LineChart(document.querySelector('.driver-chart'));
        chart.draw(data, options);
    }
});
document.querySelector('.mclaren-force-haas').addEventListener('click', function (e) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Race', 'SAI', 'NOR', 'PER', 'STR', 'GRO', 'MAG'],
            ['Australia', 21, 12, 13, 9, 21, 6],
            ['Bahrain', 21, 6, 10, 14, 21, 13],
            ['China', 14, 21, 8, 12, 11, 13],
            ['Azerbaijan', 7, 8, 6, 9, 21, 13],
            ['Spain', 8, 21, 15, 21, 10, 7],
            ['Monaco', 6, 11, 12, 16, 10, 14],
            ['Canada', 11, 21, 12, 9, 14, 17]
        ]);

        var options = {
            title: 'Driver Performance: McLaren, Force India, Haas',
            /*curveType: 'function',*/
            legend: { position: 'bottom' },
            vAxis: { direction: -1, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
            pointSize: 5
        };

        var chart = new google.visualization.LineChart(document.querySelector('.driver-chart'));
        chart.draw(data, options);
    }
});
document.querySelector('.alfa-renault-torro-williams').addEventListener('click', function (e) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Race', 'RAI', 'GIO', 'HUL', 'RIC', 'KYV', 'ALB', 'KUB', 'RUS'],
            ['Australia', 8, 15, 7, 21, 10, 14, 17, 16],
            ['Bahrain', 7, 11, 21, 21, 12, 9, 16, 15],
            ['China', 9, 15, 21, 7, 21, 10, 17, 16],
            ['Azerbaijan', 10, 12, 14, 21, 21, 11, 16, 15],
            ['Spain', 14, 16, 13, 12, 9, 11, 18, 17],
            ['Monaco', 17, 19, 13, 9, 7, 8, 18, 15],
            ['Canada', 15, 13, 7, 6, 10, 21, 18, 16]
        ]);

        var options = {
            title: 'Driver Performance: Alfa Romeo, Renault, Torro Rosso, Williams',
            /*curveType: 'function',*/
            legend: { position: 'bottom' },
            vAxis: { direction: -1, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
            pointSize: 5
        };

        var chart = new google.visualization.LineChart(document.querySelector('.driver-chart'));
        chart.draw(data, options);
    }
});
document.querySelector('.all').addEventListener('click', function (e) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Race', 'HAM', 'BOT', 'LEC', 'VET', 'VER', 'GAS', 'SAI', 'NOR', 'PER', 'STR', 'GRO', 'MAG', 'RAI', 'GIO', 'HUL', 'RIC', 'KYV', 'ALB', 'KUB', 'RUS'],
            ['Australia', 2, 1, 5, 4, 3, 11, 21, 12, 13, 9, 21, 6, 8, 15, 7, 21, 10, 14, 17, 16],
            ['Bahrain', 1, 2, 3, 5, 4, 8, 21, 6, 10, 14, 21, 13, 7, 11, 21, 21, 12, 9, 16, 15],
            ['China', 1, 2, 5, 3, 4, 6, 14, 21, 8, 12, 11, 13, 9, 15, 21, 7, 21, 10, 17, 16],
            ['Azerbaijan', 2, 1, 5, 3, 4, 21, 7, 8, 6, 9, 21, 13, 10, 12, 14, 21, 21, 11, 16, 15],
            ['Spain', 1, 2, 5, 4, 3, 6, 8, 21, 15, 21, 10, 7, 14, 16, 13, 12, 9, 11, 18, 17],
            ['Monaco',1, 3,21, 2, 4, 5, 6, 11, 12, 16, 10, 14, 17, 19, 13, 9, 7, 8, 18, 15],
            ['Canada', 1, 4, 3, 2, 5, 8, 11, 21, 12, 9, 14, 17, 15, 13, 7, 6, 10, 21, 18, 16]
        ]);

        var options = {
            title: 'Driver Performance: All Drivers',
            /*curveType: 'function',*/
            legend: { position: 'bottom' },
            vAxis: { direction: -1, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
            pointSize: 5
        };

        var chart = new google.visualization.LineChart(document.querySelector('.driver-chart'));
        chart.draw(data, options);
    }
});

