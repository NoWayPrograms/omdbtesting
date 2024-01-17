async function search() {
    const term = document.getElementById("fsrch").value;
    console.log(term);
    while (true) {
        console.log(term);
        let url = "www.omdbapi.com/?i=tt3896198&apikey=2f8d7668&t=" + term;
        let fetched = await fetch(url);
        let test = document.createElement("li");
        let text = document.createElement("p");
        text.innerHTML = term;
        test.appendChild(text);
        document.getElementById("search_list").appendChild(test);
        if (Math.random() > 0.5) {
            break;
        }
    }

}