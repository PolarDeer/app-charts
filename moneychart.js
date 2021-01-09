function createMoneyChart(data) {
    const chart = bb.generate({
        data: {
            json: data,
            keys: {
                x: "app_name",
                value: ["downloads"]
            },
            type: "bar",
        },
        bar: {
            width: 7,
            padding: 7
        },
        axis: {
            x: {
                type: "category",
            },
            y: {
                max: 55000,
                min: 0,
                padding: 0
            },
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
                }]
            },
            lines: {
                front: false
            }
        },
        bindto: "#chart"
    });
}