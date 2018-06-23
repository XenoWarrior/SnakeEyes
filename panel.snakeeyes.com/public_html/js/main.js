function runTest(t) { 
    switch(t) {
        case "cpu":
            $.ajax({
                url: "./api/cpuload.php",
                method: "GET",
                success: function(r) {
                    $("#cpu-report-target").text("Done running.");
                },
                error: function(r) {
                    $("#cpu-report-target").text("Failed to call API serivce for 'cpuload.php'.");
                }
            });
            break;
        default:
            break;
    }
}