document.addEventListener("DOMContentLoaded", function(){
    ativarAnimacoesRolagem();
});

function ativarAnimacoesRolagem(){
    const observador = new IntersectionObserver(function(entradas){
        entradas.forEach(function(entrada){
            if(entrada.isIntersecting){
                entrada.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1
    });

    const elementos = document.querySelectorAll(".hidden");
    elementos.forEach(function(elemento){
        observador.observe(elemento);
    });
}
