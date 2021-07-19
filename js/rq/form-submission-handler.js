(function() {  
  function validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }

  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements).filter(function(k) {
          return (elements[k].name !== "honeypot");
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(formData);
    return formData;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var data = getFormData(form);

    if (validateHuman(data.honeypot)) {
      return false;
    }
   
      disableAllButtons(form);

      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements");
      };
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
	  alert("Thanks for contacting us! We will get back to you soon!");
	  window.location.href = "contact.html";
  }
  
  function handleFormSubmit_modal_about(event) {
    event.preventDefault();
    var form = event.target;
    var data = getFormData(form);

    if (validateHuman(data.honeypot)) {
      return false;
    }
   
      disableAllButtons(form);

      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements");
      };
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
	  alert("Thanks for contacting us! We will get back to you soon!");
	  window.location.href = "about.html";
  }
  
    function handleFormSubmit_modal_index(event) {
    event.preventDefault();
    var form = event.target;
    var data = getFormData(form);

    if (validateHuman(data.honeypot)) {
      return false;
    }
   
      disableAllButtons(form);

      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements");
      };
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
	  alert("Thanks for contacting us! We will get back to you soon!");
	  window.location.href = "index.html";
  }
  
  function handleFormSubmit2(event) {
    event.preventDefault();
    var form = event.target;
    var data = getFormData(form);

    if (validateHuman(data.honeypot)) {
      return false;
    }
      disableAllButtons(form);

      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements");
      };
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
	  alert("Thanks for contacting us! We will get back to you soon simple!");
	  var frm = document.getElementsByName('form2')[0];
	  frm.reset();
  }
  


  function loaded() {
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
    var forms = document.querySelectorAll("form.gform2");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit2, false);
    }
    var forms = document.querySelectorAll("form.gform_about");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit_modal_about, false);
    }
    var forms = document.querySelectorAll("form.gform_index");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit_modal_index, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
