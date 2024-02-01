$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoLi = $(`<li>${novaTarefa}</li>`);
        console.log(novaTarefa);

        $(novoLi).appendTo('ul');
        $('#nova-tarefa').val('');

        $('ul').on('click','li',function(){
            $(this).css('text-decoration', 'line-through');
        });
    })
})