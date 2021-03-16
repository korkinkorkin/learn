// Chain: U2FsdGVkX1+LNhIppW2LLShsVK4t2Zwt+vuF2X0vn8brsZou8Jrd5ZEyvqmA+OchoKDeMH7X9ZB30nGER+4NrwPL6VEDd8ogp2uW9gQEfeHtUjXrPq0MtEITxtJFLSQXzA9oqVYurwcDRTZggMG8MilsYW5vaTUWuxQ5i8u6kD0=
$(function () {
    $(document).on('click', 'a[data-prevention]', function (e) {
        e.preventDefault();
        var $this = $(this);
        var data = $this.data();
        var url = $this.attr('href');
        var type = data.type ? data.type : 'post';
        var trigger = data.trigger ? data.trigger : null;
        var text = data.text ? data.text : null;
        var title = data.title ? data.title : null;
        $.confirm({
            title: title,
            text: text,
            confirm: function () {
                $.ajax({
                    url: url,
                    type: type,
                    dataType: 'json',
                    success: function (data) {
                        $('.modal-closer').click();
                    }
                });
            }
        });
        return false;
    });
});
