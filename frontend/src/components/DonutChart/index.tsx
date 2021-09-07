import Chart from "react-apexcharts"
function DonutChart() {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}//referencia o objeto options acima // 3 pontos indica que pode colocar mais referencias depois da virgula
            series={mockData.series}
            type="donut"
            height="240"
        />  //xaxis chama o eixo x que recebe o objeto mockData.lavels
    );
}

export default  DonutChart;
//Site do apexcharts react