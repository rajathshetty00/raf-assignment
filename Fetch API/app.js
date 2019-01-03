document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getJson').addEventListener('click', getJson);
document.getElementById('getPostsAPI').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost)




function getText() {
     fetch('sample.txt').then(function (res) {
          return res.text()
     }).then(function (data) {
          document.getElementById('output').innerHTML = data
     }).catch(function (err) {
          console.log(err)
     })
}


function getJson() {
     fetch('sample.json')
          .then(res => res.json())
          .then(data => {
               let output = "<h2>Users</h2>"
               data.forEach(item => {
                    output += `<ul class="list">
                         <li>ID: ${item.id}</li>
                         <li>Name: ${item.name}</li>
                         <li>email: ${item.email}</li>
                         </ul>`
               })
               document.getElementById('output').innerHTML = output
          })
          .catch(err => console.log(err))
}


function getPosts() {
     fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => {
               let output = "<h2>References</h2>"
               data.forEach(item => {
                         output += `<div>
                         <h3>Title: ${item.title}</h3>
                         <p> ${item.body}</p>
                         </div>`
                    },
                    console.log(data)
               )
               document.getElementById('output').innerHTML = output
          })
          .catch(err => console.log(err))

}


function addPost(event) {
     let title = document.getElementById('title').value;
     let body = document.getElementById('body').value;

     event.preventDefault();
     fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
               'Accept': 'application/json text/plain  */*',
               'Content-type': 'application/json'
          },
          body: JSON.stringify({
               title: title,
               body: body
          })
     }).then(res => res.json()).then(data => console.log(data))
}