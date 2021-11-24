crypt = {
    a: "B41D",
    b: "K24s",
    c: "8D3d",
    d: "u6Hs",
    e: "u6sr",
    f: "jyys",
    g: "72sj",
    h: "j3sg",
    i: "t2sg",
    j: "u2sg",
    k: "z62r",
    l: "y2cv",
    m: "p2ts",
    n: "st32",
    o: "ksf3",
    p: "qo34",
    q: "hw2r",
    r: "o2fd",
    s: "o2dg",
    t: "u28d",
    u: "8702",
    v: "92rf",
    w: "82sg",
    x: "uwch",
    y: "j2dg",
    z: "h2cg",
    " " : "N2dS"
}
var lenght = 4;
function Encrypt(){
    var encoderText = "";
    var cipherText = $("#encrypt-text-in").val();
    for(var i=0;i<cipherText.length;i++){
        for(const [key,value] of Object.entries(crypt)){
            if(cipherText[i].toLowerCase() == key) encoderText += value;
            console.log(encoderText);
        }
    }
     $("#decrypted-text-out").text(encoderText);
}

function Decrypt(){
    var decoderText = "";
    var cipherText = $("#decrypted-text-in").val();
    var cipherMass = [];
    while(cipherText.length > lenght-1){
        cipherMass.push(cipherText.substr(0,lenght));
        cipherText = cipherText.substr(lenght);
    }
    for(var i=0;i<cipherMass.length;i++){
        for(const [key,value] of Object.entries(crypt)){
            if(cipherMass[i] == value) decoderText += key;
            console.log(decoderText);
        }
    }
    $("#encrypt-text-out").text(decoderText);
}