const inputVal = document.querySelector('.inputValue')
const submitBtn = document.querySelector('.btn');
// input data to here
const inputData = document.querySelector('.fetchData');

// handle click event
submitBtn.addEventListener('click', handleClick)


// handle click function
function handleClick(){
    // inputData.innerHTML = inputVal.value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid=2d8ece167f0c7fe7353cdfe5c0f7d3fa')
    .then(res => res.json())
    .then(data => {
        var newData = data['main']['temp'];
        inputData.innerHTML = newData
    })
  
}


