

//         fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json()) // Parse JSON response
//   .then(json => {
//     console.log(json); // Log the parsed JSON data
//     document.getElementById('wp-ahad').innerHTML = json; // Manipulate the parsed JSON data
//   })
//   .catch(error => console.error('Error fetching data:', error)); // Handle any errors that occur during fetching or parsing
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json()) // Parse JSON response
//   .then(json => {
//     console.log(json); // Log the entire JSON object
//     const title = json.0.title; // Extract title from JSON object
//     console.log(title); // Log the title
//     document.getElementById('wp-ahad').innerHTML = title; // Display the title in the specified HTML element
//   })
//   .catch(error => console.error('Error fetching data:', error)); // Handle any errors that occur during fetching or parsing
function ahad(){
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.text())
    .then(result => {
        let val = parseFloat(document.getElementById('wp-val').value);
        const ahad = JSON.parse(result)
        document.getElementById('wp-id').innerHTML= `ID = ${ahad[val].id-1}`;
        document.getElementById('wp-ahad').innerHTML= `Title:  ${ahad[val]["title"]}`;
        document.getElementById('wp-dis').innerHTML= `Discription:  ${ahad[val].body}`;

})
    .catch(error => {
        
        console.error(error)

    });
}