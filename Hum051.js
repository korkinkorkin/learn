// Chain: U2FsdGVkX19jl6TgTpiW8ojfzEaaz5NL8f+Z9UWtq6HaD3huVqBH0AekjRzdpHzju1vu2A+lec9pu6bhMsJF3lYhzkyp0INWzOM0hVgdPAhgf2bPPZ52aJwjE2oaa3kDqaFsjaxSzXO680czirUOKfShjxSO/uQTjVfzrwuTo6dmAG69REKpLHaqHDQc1/+CVfVd0rdUrBQ8N7MCF7xUbR1FUmHofG7nX/SjuzrWLPEv0ZKXoYt5to1pYSTAezG4dnwVA6pmGTfs3Bkf3pRMIX26h3YhGh2dPuUIybbqsLrkj7MAV7iUdneM7zGpguFfhw8eOfM3VvnmpFlCl/75Q4uZxDMKtB9gyITyOUMbjBeSx2EXpCgXCkD+olqTDrZ9Ib77fPXgvjDF8e5l8YONt8mT7V22QDwkqN0VWQkHjPXHTZIeCEzl3vMj5SFxGuuuJcP9nVHq/zfhc8p2D8+wcLe++cfbDklHZue7O/eaSICoY8O9apvKjLC2RGdXrA6ueN3WsMeDDMvHMg0xq5cOzpXvdSBy3S62Z/di7zipErLsBWPtCI5DojEh6K0cwPhgoO7s6b7vAnVidyi6bSFJczomu9kzhpxZnYTrLn2B+r1egN43iX57eBMhiq/nRutn1p2B4CydsLbAAj7OvB0bVZO/MB5/vswt/gqNX4dyrwh09pmJLOS2z3n8aZ66dgj1HmC7OGYqygxK/zLSonUl+NlnLEOg+w+C2p217WGCdJMLqpQjAlzGcFQXGcgxLJ7VNz5gOBLA6Jk0lTbCjhXQqCzEuL9XdI5O87NMyWFOFwknPmffOhnTrbaXO81DiixfWTO5pNlsWRqi+vJkyn2SR1Def3nUu/8udwRuhlLG700bKfpMOBGmaNg1nOIOfnNtCuN6UwjP4xdASuV92cO2h4KBUOy6B084AkQoq0WIy5gFEP5p0k1y+Q1TIFXtfX/S4i07BgOG660Snou4hfE7YEsCovydCzRbrg7WF4w1Mjy5hDosv2HGVkrqU7a/R63LrmEyGTASqC1LIGum6+1NbaszZe0I/pWeiMQGDkGMSgWW8rWbC9JMQXuexux/Sg1gfaTYIML3f4T6JuAWLIXCDwIRdYL12xSCB1BHaLs0EVwtiXoCEhgll0OdlclHTK9vGwDFbcGR2XQc38vf6wUrJaXamlVITrxv8B/RNVXhw1qD4e2f68+usxA+ALTKRfcC7sAwSXT4X3zJfACcEc3McPPpwGJ2rj8oZ6nX4+qMWfTE5MjmiomlG5kJEOATFIrTsRutyIy3dSCNEzLVJPsZgpx6OPJepsqKskyymFRnd2heKx/7jZ6qrTr2/Ha1VigFXIFHHwhPZku8VipM9SoPjhnc952aSQK0Pe6IXWXvonlVsgjlaTIlF1ULwKjdVuWtKlrZ5LKQuPox9Uo+KsNO7phVDyVBUkWduPjlDQQNW2P7+r7+BjkblSI+1bTj9T5cCA+fxznUi/lMRqWEnbgL4x9FhX7puDTXNLMTNQYlm1PQ85FtZI0XLA+ytBfyowat1Bih46++6n70caPOKrduAcauGxJyuCLRrGILs1I1U9vzDfTRYP8d7B6YkvnrAaAjgqCdmw+5D+ulUs2wH4TWy8VWnoxFFb2nA95CEuROcjEtZMH4JMeDsfYoDKIMEEuAoTALXQJd9/6w2JGYnEuQIfAzu6YqweYg3jazQHJXAoLa+Ph6wGY1++FQeaq7N9MRxhxkeYuC4/CZeztpSwdarw==

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
