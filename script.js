//espera a que la pagina estigui carregada
$(document).ready(function () {

    $("#search").click(function () {

        let username = $("#username").val(); //guardem username

        let url = "https://api.github.com/users/" + username + "/repos"; //creem url

        $.get(url, function (data) {

            $("#repositories").empty();

            data.forEach(function (repo) {

                //creem fila amb dades del repos.
                let row =
                    "<tr>" +
                    "<td>" + repo.name + "</td>" +
                    "<td>" + (repo.description || "") + "</td>" +
                    "<td>" + repo.watchers_count + "</td>" +
                    "</tr>";

                $("#repositories").append(row);
            });

            //si usuari no existeix
        }).fail(function () {

            $("#repositories").empty();

            let row =
                "<tr>" +
                "<td colspan='3'>User not found</td>" +
                "</tr>";

            //mostrem missatge a la taula
            $("#repositories").append(row);

        });

    });

});