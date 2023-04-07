// get from the html
const btn = document.querySelector("button")
const joke = document.querySelector("span")

btn.addEventListener("click", async () => {
     const jokeText = await getJoke()
     joke.innerText = jokeText
})








// function that calls the dad joke api

const getJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/",
    {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })

    const jsonJokeResponse = await response.json()
    return jsonJokeResponse.joke
}