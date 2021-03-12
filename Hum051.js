// Chain: U2FsdGVkX1+HvmQcfSV4jE0yCV67gnjfvDnG42B5oOwbY2yFHoH6uUODErGCMwVnzY0X9VR4hSWnSjrUHiIcKMcyjxeVWdx73TEa9Z8WwkKTMP7VK1I5nTms/LamlSYEKRg/dDvEyc9/p80K6Q4Q9ObXforOqxoU+UyFNPYH4h8=

import "inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js";
import Inputmask from "inputmask/dist/inputmask/inputmask";

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
