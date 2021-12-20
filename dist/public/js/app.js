$(document).ready(function () {

    /* $("#btnDone").click(function (e) { 
        e.preventDefault();
        
    }); */

   
    $(document).on('click', '.btnDone', function (e) {
        // console.log("Doste click");  
        e.preventDefault();

        let celda = $(this)[0].parentElement.parentElement.parentElement;
        let btn = $(this)[0]; 

        let id = this.dataset.id;

        $.ajax({
            type: "put",
            url: `/toogleDone/${id}`,                    
            success: function (response) {
                console.log(response);

                if(response.data) {

                    celda.children[3].innerHTML = "Realizada";
                    $(btn).removeClass('btn-success');                    
                    $(btn).addClass('btn-danger');                    
                } else {
                    celda.children[3].innerHTML = "Pendiente";                    
                    $(btn).removeClass('btn-danger');                    
                    $(btn).addClass('btn-success');
                }                         
            }
        });
    });
});