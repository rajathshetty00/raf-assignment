const uri = "http://qa.roofandfloor.com/collection/";
document.getElementById("click").addEventListener("click", getJson);

function getJson() {
     fetch(uri)
          .then(res => res.json())
          .then(data => {
               console.log(data.data.result);
               document.getElementById('heading').innerHTML = "Response from API"
               document.getElementById("table").innerHTML = `
<thead >
     <tr>
          <th>Place</th>
          <th>Total</th>
          <th>Active</th>
     </tr>
</thead>
 `;
               for (var key in data.data.result) {
                    // console.log(data.data.result[key]);

                    document.getElementById("table").innerHTML += `
<tbody>

<tr>
     <td>${key}</td>
     <td>${data.data.result[key].total}</td>
     <td>${data.data.result[key].active}</td>
</tr>

</tbody>

`;
                    //   console.log(data.data.result[key]);
               }
               // console.log(data.data.result)
          })
          .catch(err => console.log(err));
}