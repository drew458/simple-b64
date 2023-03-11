const encode = document.getElementById("encode-string");
const decode = document.getElementById("decode-string");

function encodeBase64() {
    var textToEncode = encode.value;

    var encodedText = btoa(encodeURIComponent(textToEncode));

    document.getElementById("encoded-string").value = encodedText;
}

function decodeBase64() {
    var textToDecode = decode.value;

    var decodedText = decodeURIComponent(atob(textToDecode));

    document.getElementById("decoded-string").value = decodedText;
}