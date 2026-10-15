const URL = "https://catfact.ninja/fact";
const fact = document.querySelector("#fact")
const factBtn = document.querySelector("#factbtn")

let getFacts = async () =>{
    console.log("Getting data ....");
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data.fact);
    fact.innerText = data.fact;
}

factBtn.addEventListener("click",() => {
    getFacts();
})

// getFacts();