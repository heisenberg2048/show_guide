const button = document.querySelector('#searchbutton')
const input = document.querySelector('#searchinput')
const wholepage = document.querySelector('#wholepage')
const search = async (term) => {
    await axios.get(`https://api.tvmaze.com/search/shows?q=${term}`,)
        .then(res => {
            for (let element of res.data) {

                const card = document.createElement("div")
                card.classList.add("card",)
                card.style.width = '400px'
                const resultimage = document.createElement("img")
                resultimage.src = element.show.image.medium;
                resultimage.classList.add("card-img-top")
                const cardbody = document.createElement("div")
                cardbody.classList.add("card-body")
                const searchresult = document.createElement("h3")
                searchresult.classList.add("card-title")
                searchresult.innerText = element.show.name;
                const summary = document.createElement("p")
                summary.classList.add("card-text")
                summary.innerHTML = element.show.summary

                card.append(resultimage)
                card.append(cardbody)
                cardbody.append(searchresult)
                cardbody.append(summary)
                wholepage.append(card)
                console.log(element)
            }
        })
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    const searchterm = input.value;
    search(searchterm);
})