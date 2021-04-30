// Chain: U2FsdGVkX19wp58PUAGEghfCAYD1QCAmlPxt3q3iOkrcZs04/ZjSnrlbB8AMTIoNqes2GmpkhRp9cGuw08qtNtM5wb0DazftGFn+9Btt0loJMaNchI65CLJFQTjE/nT8uIGHI8/IBEZ5zMh/dfG37+0w2aCOOQGzI/idfkbPNq8MtElUrHqc6Bk21X4vhkWwXmoxQftMghOOOwyKE53Oph3lYb1zLl6WGm8WMy8Pir8Qrnh33a0znYJ8gRc9rYVmiHpBfN2U7O3ckpfaXu4NU5LAuLSNMusP268iW9UKAjWxpRyzmDQ2g8cohD2PBwK5KBAxAEoY+KJKEhFB3ouYlmVvSdw/BcNeA5sqSONuFMreSOH2KfXjVgGLoQq7uLKxr0iuhAizuKAZdYT6g4EGdpslWVlmxlKYZHA7xJGXGzKZG2bB2FtWdoAWHG7fDEXAyF2b1o5q2aQ0CeEKoZHTR/bX5PlQ+h4GcLJuG2aV3jYDyEogfZgPNqMGX+wPe93izOKMvAMWCIKRgy/hPB4NU4TYuvJJPDOeOFRtUBr843sDcApxuyvJQbkt5fVr8z8TP634+dTxkpTpqLcLc/pAEDRSdSOuR203oRIwQq02Om8=

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
