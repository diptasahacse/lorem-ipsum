// document.getElementById('input').addEventListener('keyup', function(event) {
//     let text = document.getElementById('input').value;
//     let times = "";
//     for (let index = 0; index < text.length; index++) {
//         if (typeof parseInt(text[index]) == Number) {
//             console.log(true)
//         } else {
//             console.log(false)

//         }


//     }
//     // console.log(event.key)
// })
const showFromApi = (data, times) => {
    const loremTextData = data[0].text;
    let loremArrayData = loremTextData.split(" ");
    document.getElementById('output').textContent = "";
    if (loremArrayData.length < times) {
        document.getElementById('output').innerText = "Enter numbers between 1 to 10000";
    } else {
        let displayText = "";
        for (let index = 0; index < times; index++) {
            displayText += loremArrayData[index] + " ";
        }
        document.getElementById('output').innerText = displayText;
    }
}
const getText = async(times) => {
    let jsonData = await fetch("../data/data.json");
    let data = await jsonData.json();
    showFromApi(data, times)

}
document.getElementById('enter').addEventListener('click', () => {
    let times = document.getElementById('input').value;
    const displayText = getText(times);

});