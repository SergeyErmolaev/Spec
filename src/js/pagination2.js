$('.pagination').pagination({
        items: 100,
        itemOnPage: 8,
        currentPage: 1,
        // cssStyle: '',
        // prevText: '<span aria-hidden="true">&laquo;</span>',
        // nextText: '<span aria-hidden="true">&raquo;</span>',
        onInit: function () {
            // fire first page loading
        },
        onPageClick: function (page, evt) {
            // some code
        }
    });

    // $('.pagination').twbsPagination({
    //   totalPages: 100,
    //   visiblePages: 7,
    //   onPageClick: function (event, page) {
    //     $('#page-content').text('Page ' + page);
    //   }
    // });