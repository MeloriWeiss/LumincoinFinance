export class Main {
    constructor() {
        const incomesChart = document.getElementById('incomes-chart');
        const expensesChart = document.getElementById('expenses-chart');

        this.setChartsData();

        this.createChart(incomesChart, this.incomesChartData);
        this.createChart(expensesChart, this.expensesChartData);
    }

    setChartsData() {
        this.incomesChartData = {
            labels: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue',
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100, 40, 140],
                backgroundColor: [
                    'rgb(220 53 69)',
                    'rgb(255 114 0)',
                    'rgb(255 193 7)',
                    'rgb(25 135 84)',
                    'rgb(13 110 253)',
                ],
                hoverOffset: 4,
                options: {
                    responsive: true,
                },
            }]
        };
        this.expensesChartData = {
            labels: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue',
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100, 40, 140],
                backgroundColor: [
                    'rgb(220 53 69)',
                    'rgb(255 114 0)',
                    'rgb(255 193 7)',
                    'rgb(25 135 84)',
                    'rgb(13 110 253)',
                ],
                hoverOffset: 4,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                },
            }]
        };
    }

    createChart(chartElement, data) {
        new Chart(chartElement, {
            type: 'pie',
            data: data,
            options: {
                plugins: {
                    legend: {
                        maxWidth: 40
                    }
                }
            }
        });
    }
}