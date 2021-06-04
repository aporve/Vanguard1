function sendEvent1(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    $("#logoN").text('VEMO 2021');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "VEMO",
             data: clickedButton
            }
        })
   }), '*');
   return;
}

function sendEvent2(btnID) {
    let clickedButton = btnID;
    $("#logoN").text('Active/Passive');

    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "ACTIVE",
             data: clickedButton
            }
        })
   }), '*');
   return;
}

function sendEvent3(btnID) {
    let clickedButton = btnID;
    $("#logoN").text('Popular FAQs');
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "ASSET",
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
             code: "ECON",
             data: clickedButton
            }
        })
   }), '*');
   return;
}


function sendEvent5(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "INVESTOR",
             data: clickedButton
            }
        })
   }), '*');
   return;
}


function sendEvent6(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "POPFAQ",
             data: clickedButton
            }
        })
   }), '*');
   return;
}



function sendEvent7(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "POPFAQ",
             data: clickedButton
            }
        })
   }), '*');
   return;
}


function sendEvent8(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "RETIREMENT",
             data: clickedButton
            }
        })
   }), '*');
   return;
}



function sendEvent8(btnID) {
    let clickedButton = btnID;
    // alert(clickedButton);
    console.log('Testing ----->>>');
    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "VCMM",
             data: clickedButton
            }
        })
   }), '*');
   return;
}



