document.addEventListener("DOMContentLoaded", function(){
    ativarAnimacoes();
});

function ativarAnimacoes(){
    const elementos = document.querySelectorAll(".reveal");

    const observador = new IntersectionObserver(function(entradas){
        entradas.forEach(function(entrada){
            if(entrada.isIntersecting){
                entrada.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1
    });

    elementos.forEach(function(el){
        observador.observe(el);
    });
}
