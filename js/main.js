function sendEvent1(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');

    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "Home",
             data: clickedButton
            }
        })
   }), '*');
   return;


}

function sendEvent2(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "About",
             data: clickedButton
            }
        })
   }), '*');
   return;
}

function sendEvent3(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "ContactUs",
             data: clickedButton
            }
        })
   }), '*');
   return;
}

function sendEvent4(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "Exit",
             data: clickedButton
            }
        })
   }), '*');
   return;
}



