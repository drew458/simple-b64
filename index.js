function encodeBase64() {
    var textToEncode = document.getElementById("encode-string").value;

    var encodedText = btoa(encodeURIComponent(textToEncode));

    document.getElementById("encoded-string").value = encodedText;
}

function decodeBase64() {
    var textToDecode = document.getElementById("decode-string").value;

    var decodedText = decodeURIComponent(atob(textToDecode));

    document.getElementById("decoded-string").value = decodedText;
}