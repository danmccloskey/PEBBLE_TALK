function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    var resultContainer = document.getElementById('qr-reader-results');
    var lastResult, countResults = 0;
    
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 30, qrbox: 800 });
    
  function onScanSuccess(qrCodeMessage) {



 if (qrCodeMessage !== lastResult) {


        // ++countResults;
     lastResult = qrCodeMessage;
      // resultContainer.innerHTML
       //  += `<div class="box stack-top" div style="float:center" id= "block"> </div>`;
         var ifrm = document.createElement("iframe");
        ifrm.setAttribute( "src", qrCodeMessage);
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
       // ifrm.style.top = "550px";  
        //ifrm.style.left = "550px";  
        //ifrm.style.zIndex = "+100";  
        document.getElementById("block").appendChild(ifrm);

       document.getElementById('ifrm').contentDocument.location.reload(true);  
   }
        document.getElementById('ifrm').contentWindow.location.replace(lastResult);
       
        html5QrCode.stop();
    // check to make sure the message is a url - example: validURL(qrCodeMessage) below
//// var iDiv = document.createElement('div');
  //      iDiv.id = 'block';
   //     iDiv.className = 'block';
   //     iDiv.style.width = "640px";
   //     iDiv.style.height = "480px";
   //      iDiv.style.zIndex= "9";
//document.getElementsByTagName("qr-reader")[0].appendChild(iDiv) 



      window.location.href = qrCodeMessage;
}
    


    // Optional callback for error, can be ignored.
    function onScanError(qrCodeError) {
        // This callback would be called in case of qr code scan error or setup error.
        // You can avoid this callback completely, as it can be very verbose in nature.
    }
    
    html5QrcodeScanner.render(onScanSuccess, onScanError);
});