function createDownloadChart(data) {
    const dataKeys = Object.keys(data[0])
    const creationDelay = 500
    let downloadsSum = 0
    for (let record of data) {
        downloadsSum += record['downloads']
    }
    dataSortedByDownloads = data.slice(0).sort(function(a, b) {
        return b['downloads'] - a['downloads']
    })
    top5 = dataSortedByDownloads.slice(0, 5)
    const chart = bb.generate({
        "data": {
            "columns": [
                [top5[0]['app_name'], 0],
                [top5[1]['app_name'], 0],
                [top5[2]['app_name'], 0],
                [top5[3]['app_name'], 0],
                [top5[4]['app_name'], 0],
            ],
            "type": "pie"
        },
        size: {
            width: 800,
        },
        "legend": {
            "show": true
        },
        "pie": {
            "label": {
                show: true
            }
        },
        interaction: {
            enabled: true
        },
        bindto: "#pie-chart"

    });

    setTimeout(() => {
        chart.load({
            "columns": [
                [top5[0]['app_name'], parseInt(top5[0]['downloads'])],
                [top5[1]['app_name'], parseInt(top5[1]['downloads'])],
                [top5[2]['app_name'], parseInt(top5[2]['downloads'])],
                [top5[3]['app_name'], parseInt(top5[3]['downloads'])],
                [top5[4]['app_name'], parseInt(top5[4]['downloads'])],
            ],
        });
    }, creationDelay);

}