$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown(); 
})
    $('#botao-cancelar').click(function(){
            $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#url-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDaNovaImagem}" />` ).appendTo(novoItem);
        $(`<div class="overlay-img-link">
            <a href="${enderecoDaNovaImagem}" target="_blank"></a>
            </div>
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');

    })
})


