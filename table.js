function createTable(data) {
    const jsonData = data
    const dataKeys = Object.keys(jsonData[0]) // [0] because keys are the same for every object.
    let row;
    let columnsCount = dataKeys.length

    for (let key in jsonData) {
        row = document.createElement("tr");
        document.getElementById("main-table").appendChild(row);
        for (let i = 0; i < columnsCount; i++) {
            let cell = document.createElement("td");
            let object = jsonData[key]
            cell.innerHTML = object[dataKeys[i]];
            row.appendChild(cell);
        }
    }
}