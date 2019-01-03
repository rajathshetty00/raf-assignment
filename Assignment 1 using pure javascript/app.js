         var jsonData = [{
                   "ID": "801",
                   "Name": "Triranjan",
                   "City": "Bangalore",
                   "Loc": "Malleshwaram",
                   "Price": 8100000
              }, {
                   "ID": "809",
                   "Name": "Roddam",
                   "City": "Chennai",
                   "Loc": "Palani",
                   "Price": 5600000
              }, {
                   "ID": "810",
                   "Name": "Shatrughna",
                   "City": "Delhi",
                   "Loc": "South end",
                   "Price": 7700000

              },
              {
                   "ID": "816",
                   "Name": "Shatrughna",
                   "City": "Cochin",
                   "Loc": "Vannar",
                   "Price": 4400000
              },
              {
                   "ID": "942",
                   "Name": "Simba",
                   "City": "Chandigrah",
                   "Loc": "Bhagatsingh nagar",
                   "Price": 3800000
              },
              {
                   "ID": "980",
                   "Name": "Nizamuddin",
                   "City": "Hyderabad",
                   "Loc": "Filmnagar",
                   "Price": 9990000
              }
         ]
         var container = document.getElementById("container");
         container.innerHTML = `
          <table>
               
               <thead>
                    <tr>
                         <th>ID</th>
                         <th>Name</th>
                         <th>City</th>
                         <th>Location</th>
                         <th>Price</th>
                    </tr>
               </thead>

               <tbody>

                   ${jsonData.map(function(item){
                        
                   return `
               <tr>
                    <td>${item.ID }</td>
                    <td>${item.Name}</td>
                    <td>${item.City}</td>
                    <td>${item.Loc}</td>
                    <td>${item.Price}</td>
                    
               </tr>`
                    
                   })}
               </tbody>
          </table>`