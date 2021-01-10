function createMoneyChart(data) {
    dataSortedByProfit = data.slice(0).sort(function(a, b) {
        return b['profit'] - a['profit']
    })
    topTenAppsByProfit = dataSortedByProfit.slice(0, 5)
    const chart = bb.generate({
        data: {
            json: topTenAppsByProfit,
            keys: {
                x: "app_name",
                value: ["profit"],
            },
            type: "bar",
            colors: {
                profit: "#FFAB00",
                text: "black"
            },
            names: {
                profit: "Money earned (€)"
            },
            labels: {
                show: true,
                colors: "black",
                bindto: "#money-chart-labels"

            }
        },
        bar: {
            width: 35,
        },
        background: {},

        axis: {
            x: {
                type: "category",
            },
            y: {
                max: 54000,
                min: 0,
                padding: 0
            },
            rotated: false,

        },
        size: {
            width: 450,
            height: 350
        },

        bindto: "#money-chart"
    });
}