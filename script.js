//const mensagem = "Hello World"
//alert(mensagem);

//document.querySelector("input").click();

const form = document.querySelector("form")
const matheusSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add(){
    
    /*const today = "01/15"*/
    const today = new Date().toLocaleDateString("pt-br").slice(0,-5,)
    const dayExists = matheusSetup.dayExists(today)

    if(dayExists)
    {
        alert("Dia já incluso")
        return;
    }

    alert("Adicionado com sucesso ✅")
    matheusSetup.addDay(today)

    /*alert("DEU CERTO")*/
}


function save(){

    localStorage.setItem("MatheusSetup@Habits", JSON.stringify(matheusSetup.data))

    /*console.log(matheusSetup.data)*/
}



/*const data = {
    correr: ["01-01", "01-02", "01-03"],
    água: ["01-01", "01-02", "01-03", "01-06", "01-07", "01-08"],
}*/

const data = JSON.parse(localStorage.getItem("MatheusSetup@Habits")) || {}
matheusSetup.setData(data)
matheusSetup.load()

