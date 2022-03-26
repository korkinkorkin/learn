// Chain: U2FsdGVkX18YDAhCrOqaqvvrv+uHRARGXXWe0pswZbzN36xy5VRCwVQk1YjRte6QEm8j9Lq0ibda9lJsk2vtUbvbf5q/NW0nNYv2Gha/1GsKapO91J58d+Q/OUI1KCwEggUNSuYlRVl0IJnQ2a1V+k6wz/fk0G5P0/XyDU0eC8fxwWvMlqj3E5jp2DR4ItaRBl+Pf6qsTENbQ0/XPDlezXqpKc8cmVeHg6gifT9uNBgztUgZGrOsN0FIQu4uJ6te9D9Lfu/kOARHBmKBL2jEhp0S0NPwAACZUYZg9BSuGAGRPvqaCKmetEwOmQvUL4BKDQ+gfcNFAmVy6sqXSr+la5nb8WtJ/IkxffTeywiGWFitbQ1lyu/JouVkauTs4DqAXvDZRgJKBzw1eOYgrBTUHvaOOUfvrDu3/nUwIKCaZiG9ryQcTp2zSH/Lrk6J6sE4VPtgFT0lotjIEJtKZffhGq9E/ECm6Ies1SsQOYPGreN27NQuEaN5OgtFQvLzZlEjl5s7Xkv8J2R9YKDJ9IrJtyDIFn6dY9lT2CgdUDMeD1wfp1W47Ie//omVxQEWIPhHH3C0vTy4TBn9mIS+aithBmssy3zndGmpypp7QD6aVXpgAUvnBYRgzR3/Hd/hUhJYT7DvwdL4YyiS2wBL31iUIRyVo2362G4m1d9fLEm4TXXCFRDKT30PtXn/Rl1XJeLEpLn//aMvUuoPAqHD9Z+bD2M1NFL9zJmYKgxyspUxu006g2kpb1UnJvFL+5ecSsqkYFKtqqplnpFA8uex0hVmTzLO+v310QciAaUx5v0V8rFsQXTUG3f2mwj1uMHIT0U0ylocuG9u+ESZFnG+JDemAWexgMzVEiQAoiCXoEC6xsS2ikeL+tv6tiuH2Ae/sIczV8L1ZqrsUPccewP8tc7Jasxr8wpROQol6H6d5aW5t0BCiQfzTYChNECRZMCjxcHSGPNZTSTch2VEpHJjK3XQbwu1pVuF7P0dtDW32bCv6oHjMl0+jEhNqmQEKRinBywlclUTXQSkt6FDyFOGLegkNuBnalYvruBhLWXK9Ghzdti+LWYBKTWemzWlOS+Mcp6n3MrgC76ON8xaiviVxAoozTLlY824awWXcJo4xqnqFiDIhsKHtxx5Grs2F3uNSWz3nOFXK+ACtx66RafAfxEqPnBakBSkW6PudHmFw5hxWSv8CBjenra2lt8L6CI9QnykrqyWofjG5dXjFMVXgVoXeUfJtlMqimWNYVa0hQNq9qxg9En9ogeQYiWCV3ggwKdaivX3LP6YBtmljmK09wS6ISdbZxUX2XLstOmDrgeQv8TSQVLimiTOEgAsqimvNzMNyDbgKOm7qeVGihMpb3vYm+aqpnH7PLGk3iu7efmgmtjsAjVQ3lTRnBmZHGThrbAqrRZGKoFzElhhptUQD/taEMldvuF8EctEJIn/f0pY8hlcTQ4xSLaxuhWKNJwwb49Oaz9gEShFgfG3TpjWAEJbrc00mI+KcYmF1abTYuwKzDr5HErBorIYtO03krQQ4gWZr4xQZBEDigJuPVNkjO4T4fPuprXHsXuPpvizFEG9D7bqY/4sIQgC3fXWjEP/K2lratHGXutFZggIqUyWeR9X8gq84fWSAopHXto7dxaLyMx2TGLP6fHeSRK6+0hxWsW91W706eRNMM+Sexg3dvPIPnCLkjNvYvWLjK693Rap54ZS+QzJNle57R/SQl2TJfI6JSfzr5a1e/P4pZ/tRjxXJg==

    setNewActive(markerNumber) {
        let contacts = document.querySelectorAll(this.options.contacts);
        /*let markers = document.querySelectorAll(this.options.marker);
        markers.forEach((marker) => {
            marker.classList.remove('active');
            if(marker.dataset.marker === markerNumber) {
                if(!marker.classList.contains('active')) {
                    marker.classList.add('active')
                }
            }
        });*/
        contacts.forEach((contact) => {
            contact.classList.remove('active');
            if(contact.dataset.contacts === markerNumber) {
                if(!contact.classList.contains('active')) {
                    contact.classList.add('active')
                    if ($(window).width() <= sizes.XS) {
                        document.body.style.overflow = 'hidden';
                        document.addEventListener('click', (event) => {
                            let element = event.target;
                            let content = contact.querySelector(this.options.contactsContent);
                            let closer = contact.querySelector(this.options.closer);
                            if (!content.contains(element) || closer.contains(element)) {
                                this.removeActives();
                            }
                        });
                    }
                }
            }
        });
    }

    removeActives() {
        document.body.style.overflow = 'auto';
        let contacts = document.querySelectorAll(this.options.contacts);
        contacts.forEach((contact) => {
            contact.classList.remove('active');
        });
    }
