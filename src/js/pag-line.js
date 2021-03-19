const pagLine = (function () {
    if(!document.getElementById('pagination-demo1')) {
        return;
    }
    function simpleTemplating(data) {
        let html = '<ul>';
        $.each(data, function(index, item){
            html += '<li>'+ item +'</li>';
        });
        html += '</ul>';
        return html;
    }

    let pS = 6;

    $("#showMoreDate").on("click", function() {
        pS*=2;
        $('#pagination-demo1').pagination({
            dataSource: function(done){
                var result = [];
                for (var i = 1; i < 595; i++) {
                    result.push(i);
                }
                done(result);
            },
            pageSize: pS,
            // showPrevious: false,
            // showNext: false,
            callback: function(data, pagination) {
                // template method of yourself
                let html = simpleTemplating(data);
                $('#data-container').html(html);
            }
        })
    });


    $('#pagination-demo1').pagination({
        dataSource: function(done){
            var result = [];
            for (var i = 1; i < 595; i++) {
                result.push(i);
            }
            done(result);
        },
        pageSize: pS,
        // showPrevious: false,
        // showNext: false,
        callback: function(data, pagination) {
            // template method of yourself
            let html = simpleTemplating(data);
            $('#data-container').html(html);
        }
    })
})();