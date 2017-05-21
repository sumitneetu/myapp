var stayUp = 10;
var shouldClose = false;
var timer, runner = '';

function close_popup(status, redirect, respDesc, txRef, respCode, clientOrigin) {
    var responseData = {};
    responseData.status = status;
    responseData.redirectUrl = redirect;
    responseData.resp_desc = respDesc;
    responseData.tx_ref = txRef;
    responseData.resp_code = respCode;
    parent.postMessage(responseData, clientOrigin);
}

function closeBtnClicked(btn, status, redirect, respDesc, txRef, respCode, clientOrigin) {
    if (!shouldClose) {
        clearInterval(timer);
        clearTimeout(runner);
        $('#' + btn).text('Close');
        $('#close_msg').text('Click "Close" button to close pop-up');
        shouldClose = true;
    } else {
        close_popup(status, redirect, respDesc, txRef, respCode, clientOrigin);
    }
}

function runTimeoutTicker(status, redirect, respDesc, txRef, respCode, clientOrigin) {
    runner = setTimeout(function () { close_popup(status, redirect, respDesc, txRef, respCode, clientOrigin); }, stayUp * 1000);
    $('#close_period').text(stayUp);
    timer = setInterval(function () {
        stayUp = stayUp - 1;
        if (stayUp <= 0) {
            clearInterval(timer);
            clearTimeout(runner);
        }
        $('#close_period').text(stayUp);
    }, 1000);
}