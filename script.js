var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var quantidade = document.getElementById('quantidade');
var escola = document.getElementById('escola');
var submitBtn = document.getElementById('submit');

function sendReq(nome, cpf, quantidade, escola){
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzRqNX9iOKWOElaKTrAhoV-jgC08SPJAQdLbTMijTquk0ysKify4RY6v9PsGAq2Kbds/exec",
        type: "POST",
        data: {name: nome, documento: cpf, quant: quantidade, esc: escola},
        success: function (response){
            processResponse(response)
        },
        error: function (xhr, status, error){
            console.log("Erro na solicitação: " + error);
        }
    })
}
