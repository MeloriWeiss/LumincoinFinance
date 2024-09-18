export type ChartDataType = {
    labels: string[],
    datasets: Array<{
        label: string,
        data: number[],
        backgroundColor: string[],
        hoverOffset: number,
        options: {
            responsive: boolean,
            maintainAspectRatio: boolean,
        },
    }>
}