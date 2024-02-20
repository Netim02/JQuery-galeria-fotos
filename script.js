$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $("form").on('submit', function(e){
        e.preventDefault();

        const EnderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none;"></li>');

        $(`<img src=${EnderecoNovaImagem}>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href=${EnderecoNovaImagem} target="_blank">Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(800);
        $("#endereco-imagem-nova").val("");
    })
})
