var dropzone = document.getElementById('file-drop-area');

// Prevents browser default behaviour during drag and drop
dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
});
  
dropzone.addEventListener('drop', async (e) => {
    e.preventDefault();
    var file = e.dataTransfer.files[0];

    console.log('File released: ', file.name);

    try {
        document.getElementById("encoded-file").value = await toBase64(file);
    } catch(error) {
        console.error(error);
        return;
    }  
});

const encodeBase64 = () => {
    const encode = document.getElementById("encode-string");
    var textToEncode = encode.value;

    var encodedText = btoa(encodeURIComponent(textToEncode));

    document.getElementById("encoded-string").value = encodedText;
}

const decodeBase64 = () => {
    const decode = document.getElementById("decode-string");
    var textToDecode = decode.value;

    var decodedText = decodeURIComponent(atob(textToDecode));

    document.getElementById("decoded-string").value = decodedText;
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
});

const handleFile = async () => {
    const file = document.getElementById("file-chosen").files[0];

    document.getElementById("encoded-file").value = await toBase64(file);       
}