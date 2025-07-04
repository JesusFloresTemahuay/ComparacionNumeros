document.getElementById("num_values").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let value = document.getElementById("num_values").value;
        let ul = document.querySelector(".values");
        let div = document.querySelector(".values");
        ul.innerHTML = "";

        for (let index = 0; index < value; index++) {
            let element_input = document.createElement("input");
            ul.innerHTML = ul.innerHTML + 
            `<li>
                <input type="number"  placeholder="valor ${index + 1}">
            </li>`;
            console.log(index);
        }
        let input = document.createElement("input");
        input.type = "button"
        input.className = "calcular";
        input.value = "calcular";
        div.append(input);
    }
});



document.querySelector("calcular").addEventListener("keypress", (e) => {
    let lit_values = 
});