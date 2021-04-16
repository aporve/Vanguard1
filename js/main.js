function sendEvent(btnID) {
    let clickedButton = btnID;
    alert(clickedButton);
    console.log('Testing ----->>>');

    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "clickedButton",
             data: clickedButton
            }
        })
   }), '*');
   return;


}

