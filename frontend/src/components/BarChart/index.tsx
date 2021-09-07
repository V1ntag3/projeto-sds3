import Chart from "react-apexcharts"
function BarChart() {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true, //orientação do grafico
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'] // elementos
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]       // valores             
            }
        ]
    };
    return (
        <Chart
            options={{ ...options, xaxis: mockData.labels }}//referencia o objeto options acima // 3 pontos indica que pode colocar mais referencias depois da virgula
            series={mockData.series}
            type="bar"
            height="240"
        />  //xaxis chama o eixo x que recebe o objeto mockData.lavels
    );
}

export default BarChart;
//Site do apexcharts react