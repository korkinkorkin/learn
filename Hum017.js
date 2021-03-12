// Chain: U2FsdGVkX1/FRbyD+gT0c8fPa07VwLDa2uwDTW4RWSzg2vzISWn59XHnpmwJadJUp5LQtj5j44K/vXP+nkNNXzALwISE/KJLckQFhz6dt/neWSRRl9h8k8tCMeHALv5rQWHi1MiD1ha/GoTUxox1HQvvJzv0J7ctNosA+TTdAUo=

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
