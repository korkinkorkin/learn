// Chain: U2FsdGVkX182CHqAjhmXmLoeHewJuadWp2fgDPL4N46JBOKM0MmFSaejqq+ZCPbsQTjvTkMB7YAjXuOWt/YsY5HfY+8O6wb5YGJ+RJeSMFnovyrwOhYF7xYcH7GdgkWOaxRKEj8lZfoD5252OACw0k0XE4gpLkZr6HycWBsosKLN5Dhx1NjQwphpZFP1Rktc8oJ6g5dNJEPK0GpYo1Fe97Z8/ppzL6CsDJaddh0rDwozRbPmZttKciwKu+DoNpo6L/iVlZXFJ1glGAA4jCk8EH0FI1WJnv+siIg9OdWyddbrpnzslCf1eWbv9yM3gyh3+y2n/1TuhcVp5Gv8qlrfLOVgwZ0j5zT43NFkENZ25OEeVE05gnzvc8lVupsWmOVPvPvon7FDSMcCTObKCSDTyfKHYNjdXMO2KTwvNxnYNIlJEftXRY5A5GrkC3QM32GQKdFaBHLTHntmYAkC1A5uubnhY/UCx+Q149gZPsP87kz4bGq0l9TVJ3bZvNKFnYOTt0PYGiWeCByo7j1J5annItp9PL4wWRS4smihmpSmToxxDaKW4ufR2FgDEAvV3bR/RXiO2w8YJGQTNzSdqlotGi9/IVfZCtxdg2O/6D7N3lE=

// import "inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js";
// import Inputmask from "inputmask/dist/inputmask/inputmask";

function initPhoneField() {
  document.querySelectorAll('[data-phone]:not([data-init])').forEach((input) => {
    input.dataset.initialized = "true";
    let inputmask = new Inputmask({
      mask: '+7 (999) 999-99-99',
      clearIncomplete: true,
      oncomplete: function () {
        if (this.dataset.leadUrl) {
          // ...
        }
      }
    });
    inputmask.mask(input);
  });
}

document.addEventListener("DOMContentLoaded", initPhoneField);
document.addEventListener("DOMContentMutated", initPhoneField);
