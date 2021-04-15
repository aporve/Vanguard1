let frame = document.getElementById('vanguard-main-frame');
let icon = document.getElementById('vanguard-icon-wrapper');


function openScreen() {
    if (frame.style.display === "none") {
        frame.style.display = "block";
        icon.style.display = 'none';
    } else {
        frame.style.display = "none";
    }
}

document.getElementById('close').addEventListener('click', () => {
    console.error('Nice');
    frame.style.display = "none";
    icon.style.display = 'block';
});

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


// window.addEventListener('message', function(eventData) {
//     let clickedButton = btnID;
//     try { 
//          if(clickedButton){
           
//          }
//         if (JSON.parse(eventData.data)) {
//             let event = JSON.parse(eventData.data);
//              if (event.event_code == "custom-event" || event.data || event.data.code == "ym-client-event" || event.data.code == "clickedButton") {
//                 app.triggerIntent('vemo-2021-talking-points-asset-class-return-outlooks')
//             }
//             else if (event.event_code == "custom-event" || event.data || event.data.code == "ym-client-event" ||  event.data.code == "clickedButton"){
//                 run_recaptcha();
//                 return;
//             } 
//             else{
//                 return;
//             }
//          }
//     } catch (error) {
//         return;
//     }
// }, false);