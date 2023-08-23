function registro1() {
        let miFormulario = document.getElementById('cuenta');
        let nombreApellido = document.getElementById('nombreApellido');
        let fecha = document.getElementById('fecha');
        let edad = document.getElementById('edad');
        miFormulario.onsubmit = (e) => {
            e.preventDefault();
            console.log(e.target.children)
            console.log(e.target.children[0].value)
            console.log(e.target.children[1].value)
            console.log(e.target.children[2].value)
            console.log(e.target.children[3].value)
            console.log(e.target.children[4].value)
            console.log(e.target.children[5].value)
            console.log(e.target.children[6].value)
            console.log(e.target.children[7].value)
            console.log(e.target.children[8].value)
        }
    }
