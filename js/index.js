document.querySelector('.page-loaded').innerText =
      (new Date()).toLocaleTimeString();
    
    
    document.querySelector('.get-html-ajax')
      .addEventListener('click', getHtmlAjax);
      
    function getHtmlAjax() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.querySelector('.html-placeholder').innerHTML 
                 = xhr.responseText;
            }
        }
        xhr.open('GET', 'client-data.html', true);
        xhr.send();
    }
    
    // document.querySelector('.get-html-fetch')
    //   .addEventListener('click', getHtmlFetch);
     
    // function getHtmlFetch() {
    //     fetch('client-data.html')
    //         .then( response => response.text() )
    //         .then( html => document.querySelector('.html-placeholder').innerHTML 
    //              = html);
    // }  
    
    document.querySelector('.get-json-ajax')
      .addEventListener('click', getJsonAjax);
      
    function getJsonAjax() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const clientData = JSON.parse(xhr.responseText);
                document.querySelector('.client-name').innerText = clientData.name;
                document.querySelector('.balance').innerText = clientData.balance;
            }
        }
        xhr.open('GET', 'client-data.json', true);
        xhr.send();
    }
    
    // document.querySelector('.get-json-fetch')
    //   .addEventListener('click', getJsonFetch);
    
    // function getJsonFetch() {
    //     fetch('client-data.json')
    //         .then( response => response.json() )
    //         .then( clientData => {
    //                  document.querySelector('.client-name').innerText = clientData.name;
    //                  document.querySelector('.balance').innerText = clientData.balance;
    //         })
    // }
    
    document.querySelector('.login-form input[type=submit]')
        .addEventListener('click', submitForm);
        
    function submitForm(ev) {
        if (document.querySelector('.login-form').checkValidity()) {
            ev.preventDefault();
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    document.querySelector('.message').innerHTML 
                     = xhr.responseText;
                }
            }
            xhr.open('POST', 'form.php', true);
            const formData = new FormData(document.querySelector('.login-form'));
            xhr.send(formData);
        }
    }

