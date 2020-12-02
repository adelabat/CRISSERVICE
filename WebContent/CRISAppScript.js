/**
 * 
 */

$(document).ready(function(){
    $.ajax({
        url: '/CRISSERVICE/rest/Researchers',
        type: 'get',
        dataType: 'JSON',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var lastname = response[i].lastname;
                var name = response[i].name;
                var email = response[i].email;
                var scopusURL = response[i].scopusURL;

                var tr_str = "<tr>" +
                    "<td align='center'>" + id + "</td>" +
                    "<td align='center'>" + name + "</td>" +
                    "<td align='center'>" + lastname + "</td>" +
                    "<td align='center'>" + email + "</td>" +
                    "<td align='center'><a href='" + scopusURL + "'>Scopus URL</a></td>" +
                    "</tr>";

                $("#userTable tbody").append(tr_str);
            }

        }
    });
});
