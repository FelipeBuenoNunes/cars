let print = document.getElementById("result");


const pedro = [150, 230, 0.97, 0];
const juca = [120, 260, 0.95, 0];
const edna = [180, 220, 0.99, 0];

function teste(){
    const nUser = parseInt(document.querySelector("input:checked").value);
    console.log(nUser);
    //const nUser = 10;
    let results = [0,0,0];
    for(i = 0; i < nUser; i++){
        let result = [
            aleatorio(pedro),
            aleatorio(juca),
            aleatorio(edna)
        ];

        results[result.indexOf(result.reduce((a,b) => Math.max(a,b)))]++;

        console.log(result.indexOf(result.reduce((a,b) => Math.max(a,b))));
    }
    const x = results.indexOf(results.reduce((a,b) => Math.max(a,b)));
    if(x == 0)
        print.innerText = "Pedro";
    else if(x == 1)
        print.innerText = "Juca"
    else
        print.innerText = "Edna"
}

function aleatorio(teste){
    return (Math.random() * (teste[1] - teste[0]) + teste[0]) * teste[2];
}