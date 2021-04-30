// Chain: U2FsdGVkX1+S/Nr+7uXoqGstbWyeYMdhPZdgKnxdGEv6+TtXiCJy3ULFXrZRs0NwVRDtkepTCC0arVRTR+sN9G+GDHYnLjQmQsu7I+jgdS6721Grb3J0Il7DREwDryEfQ1IqNAMmcSKmSqD0rDhnlIQpYysAusKLkXzUyGG6KV8RDTXfeXRFt7NMHYjWgA2/3QB8CwaG5GgbPmqXmn5+wePHmF34v5WIKRRqNZGgS+wH2wExm350MmCN8alAecNocVW9ZBU0efqgsJgJrBvGsRJz9SPjJKQRVcmy7PXdQUdIofiO7lLGVyscIUN4TY+MbJaNZW4iTR4gvZwM3pFUIwynZulU8oXsnRzgt39fLxjJKydQFVH2sruqAl8O8wfV+De/KLbpBCVrqImlrDN8hD5i7Oso/tceexCZ3eeo8SVSXC8qrYTJZRsf9gNq8VQDxVyFWicSTi1O8QnxUHoZtd9mWiqbeKd4SneP+cymubtsLTEHYo1BZvFdYVUVeqwJ/3TflETsaQ5zdh8hWdIxQ6+didFAqV5bn3vC1ZNoKaeBmmHGtR6BuJ2jsD8CgJQsh4KCRKLg3CmOP8B0t5kOs0UP03oQeML6yJLQj3edCSM=

$(function () {
    console.log('Fail');
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
