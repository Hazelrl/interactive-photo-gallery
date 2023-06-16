// Event listener for search bar input

document.getElementById("search").addEventListener("keyup", searchFunction);

// Function to search through captions and display matches

function searchFunction(){

    // Declare variables for search term and images, log to console to check
   
    const searchTerm = document.getElementById("search").value.toLowerCase();
    console.log(searchTerm);
    const images = document.getElementsByClassName("grid-item");
    console.log(images);

    // Loop through captions and look for search input, display image if match

    for(let i = 0; i < images.length; i++) {
        const captionText = images[i].getAttribute('data-caption').toLowerCase();
        if (captionText.includes(searchTerm)) {
            images[i].style.display = "";
        } else
            images[i].style.display = "none";
    } 

}