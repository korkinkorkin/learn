// Chain: U2FsdGVkX19icLJO5vTkskXcFh6aycZPVTyfWtGmU60T5g8VMxhC7Ko2FWBfrHQWfMIUlEHtquVvAm+QMr7hpMOZzwvGzEOLou3If402B8iuDKECWUGu1iD20LzmfomdGdfr1R0Y5syhzKm3naKpQQ/4a8CMKW3ZOk1Of6uM3jzHplANWg1hGsKEdcbVmdPjridBjxYOzThlNkOINIgJyqe7Mr+UYDnZQi2B3m7jWAgatJy9PfP2R2mYa3sxo7plYUwlE4rXXM/gchvl1nsys35spdQ4SqF2pRe2dpnP2kc9/Z5DAXZvcaAYkjDECBwnRBkM2Jgj3qzbsG+8xQaPrRJpXYFASiHKRjr3S5lLOV3bf6JlbWFoCy5YHTk4QTpVat24uT0LJ2pHGNWwNWU8Hh/qO0KBtI7WmzJyVOTFGyUaDAfGEjWnhsXFDMyJaxL89l0XeKSCX7NL3ji0kqw+Zo0fZlqi2XxDqR9IhH0ksfo0F8ebdeehot0W1RbqKF/ZvPL5y48PoINcJlaGzOT4H6kWi9QjRqduq0KKJ/YguCpVPQXfYSkkHxaYPBLf/bvwA8/YfuGPz2aWIdNHkeFCcU2qejSro8/nsbR6qYmG227RBMCNjdCPavVHLHMbAHeN4LXVm7bv2lEY9r0h9lGiuTfVoE2XAkzh60fassvMDdWWbO+F++UG/xy+G0Mc/qBX0qhlgxWiwng0jqomz5WTPcVMRw3O2NoL5zUe/89Skwbgb727V9KFYI1Q1hs09D+NGItkl62xXSyeAipbbL52ZwNz06z7gQnL/cGxgBH+KO/r1oKGhJ5mD2qROPbhaLv9Y8VzAxflS+kTTx90h51lBgGdwvtYDgRmdKbjoI4wsiL+I4FAw6oguhUtR/1ST5gX6pJUlG6P5nnJWJeFUQmw1IDAvOZq+jYJEvC9IBoH8EhkROqato1n6F9IYsIeV43o8E9nLGF6+cbPQldPSkRjhp73FNVKJ3wR9OacFy6ulLLyTYpr9bJb77YDHTmaRkwLWYlpa0PVMEg7goa8kQPJ8XV6qI0WEdmdmzMsH8E8QiSS5kFIJEXOeXbkzWs43Q6VLj5fTgJO2M1cyFqttbVCoOnrdC4ytl1JH8X3r0i+o8d+2cRAnQKTtI12hlHo7z/0a18m3hjd/lQkoHGM8ozL5dH1XYdgp01tldmmP/8qmf+1Yi1g+zNsOs9XyYkbx3zKMYAaYJF9+N0AjULrBrUwU/ZMXfpcpkytpF9TNDn6TwWwUkNXxSs+xnbUkbdPoMRduPUut92Jl2S9ELXiw3KdL5i+bW1ncxuvIuNSD/xWeTpUwXs0iSEYe9W/tUFROju2FJLk9D7UdRZZL5VV0Jrx6KFZxiCVlSLgMSSLRjejK6tj+iDqEVFmtHZrY5ZjG1ZfFx1gQlRAj7wZepOpFddV0wOPdPmbDwLHvbPCAd8rVhlPlMHD8TFijofI6J9q1O/joJdUXOhDJxC3uKjNgHMJLPuGm7zfKxpjUNrHDT9ZWZw1TEdss0JdLapv+tiTDvuOSdrVC6AS2YLr3TKlfKIzd279WNDlAjZcqfstNinbw0WXh8sbFVdmO71/vC1rF0rPbOCCNSPZRW+krs930YJLaZf0Gk7wMv4JPwLU8EXC9WuOeLm+WpYpoxGizUy3agRbN03MCfr7dkJ7oEjJ07ffPhWjNWNLvKPBNPyDiGIDGuVQpJ1aE4pr6dSbxqw+zDDsT3dymxH6GZv86i+GsQzNQQ==

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
