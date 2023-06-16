//Get the value in the search field

const searchTerm = document.getElementById("search");
searchTerm.addEventListener("keyup", logValue);

function logValue() {
    console.log(searchTerm.value.toLowerCase());
}


//Target the captions
const dataCaptions = document.querySelectorAll('a[data-caption]');

//Loop through the captions and log to the console
for (let i = 0; i < dataCaptions.length; i++) {
    const element = dataCaptions[i];
    const captions = element.getAttribute('data-caption');
    console.log(captions.toLowerCase());
  }

//Check if current value of search input is included within caption
searchTerm.addEventListener("keyup", logVariables);

function logVariables() {
    const searchValue = searchTerm.value.toLowerCase();
    console.log(searchValue);
    console.log(captionValue);
}



// if(captionValue.includes(searchValue)){
//     console.log("yes this worked");
// }


// const result = searchValue.includes(dataCaptions);
// console.log(result);

// console.log //the image to the console

//If match, show. If not, hide.
// searchTerm.addEventListener("keyup", logResult);

// function logResult(){
//     if(result){
//         console.log("yes");
//     } else {
//         console.log("no");
//     }    
// }
