let frame = document.getElementById('vanguard-main-frame');
let icon = document.getElementById('vanguard-icon-wrapper');
let close = document.getElementById('close');

function openScreen() {
    if (frame.style.display === "none") {
        frame.style.display = "block";
        icon.style.display = 'none';
    } else {
        frame.style.display = "none";
    }
}

close.addEventListener('click', () => {
    console.error('Nice');
    frame.style.display = "none";
    icon.style.display = 'block';
});

function sendEvent(btnID) {
    let clickedButton = btnID;
    alert(clickedButton);
    console.log('Testing ----->>>');

    document.getElementById('vanguard-iframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "recaptcha_token",
             data: clickedButton
            }
        })
   }), '*');
   return;


}
