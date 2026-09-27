$(document).ready(function () {

    $("#search").click(function () {

        let username = $("#username").val();

        let url = "https://api.github.com/users/" + username + "/repos";

        $.get(url, function (data) {

            $("#repositories").empty();

            data.forEach(function (repo) {

                let row =
                    "<tr>" +
                    "<td>" + repo.name + "</td>" +
                    "<td>" + (repo.description || "") + "</td>" +
                    "<td>" + repo.watchers_count + "</td>" +
                    "</tr>";

                $("#repositories").append(row);
            });

        }).fail(function () {

            $("#repositories").empty();

            let row =
                "<tr>" +
                "<td colspan='3'>User not found</td>" +
                "</tr>";

            $("#repositories").append(row);

        });

    });

});