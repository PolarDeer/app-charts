function createMoneyChart(data) {
    const chart = bb.generate({
        data: {
            json: data,
            keys: {
                x: "app_name",
                value: ["profit"]
            },
            type: "bar",
            colors: {
                profit: "black"
            },
            names: {
                profit: "Money earned (€)"
            }
        },
        bar: {
            width: 7,
            padding: 7
        },
        background: {
            color: "lightcyan"
        },
        axis: {
            x: {
                type: "category",
            },
            y: {
                max: 60000,
                min: 0,
                padding: 0
            },
            rotated: true
        },
        size: {
            width: 1600,
            height: 1500
        },
        grid: {
            y: {
                lines: [{
                    value: 10000
                }, {
                    value: 20000
                }, {
                    value: 30000
                }, {
                    value: 40000
                }, {
                    value: 50000
                }, {
                    value: 60000
                }]
            },
            lines: {
                front: false
            }
        },
        bindto: "#money-chart"
    });
}