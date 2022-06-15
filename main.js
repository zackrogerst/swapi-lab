

let residentsBtn = document.getElementById("residents-button");
let myDiv = document.getElementById("myDiv")

let myUrl = "https://swapi.dev/api/planets/?search=Alderaan"

const clickHandler = () => {
    // console.log("button clicked");
    axios.get(`${myUrl}`)
        .then(res => {
            let residentArr = res.data.results[0].residents
            for (let i = 0; i < residentArr.length; i++) {
                axios.get(residentArr[i])
                    .then(res => {
                        let newH2 = document.createElement("h2");
                        newH2.textContent = res.data.name;
                        myDiv.appendChild(newH2);
                    })
            }
        })
}

residentsBtn.addEventListener("click", clickHandler)