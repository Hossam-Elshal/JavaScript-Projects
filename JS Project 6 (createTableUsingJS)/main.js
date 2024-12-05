let box = document.querySelector(".box");
let rows = document.querySelector(".rows");
let columns = document.querySelector(".columns");
let data = document.querySelector(".data");
let btn = document.querySelector(".btn");


btn.addEventListener('click', createTable);

function createTable() {
    let table = document.createElement('table');
    box.appendChild(table);
    
    for(let i=0;i< +rows.value;i++){
        let tr = document.createElement('tr');
        table.appendChild(tr)
        
        for(let j=0;j< +columns.value;j++){
            let td = document.createElement('td');
            tr.appendChild(td)
            td.innerHTML = data.value;
        }
    }
}


// <table>
    // <tr>
    //     <td>Hossam</td>
    //     <td>Hossam</td>
    //     <td>Hossam</td>
    //     <td>Hossam</td>
    // </tr>
    // <tr>
    //     <td>Hossam</td>
    //     <td>Hossam</td>
    //     <td>Hossam</td>
    //     <td>Hossam</td>
    //     <td>Hossam</td>
// </tr>
// </table> 
