function encryptAndSend(){

    let nomor =
    document.getElementById("nomor").value;

    let pesan =
    document.getElementById("plaintext").value;

    let key =
    parseInt(document.getElementById("key").value);

    if(!nomor || !pesan || !key){

        alert("Lengkapi semua data");

        return;
    }

    let cipher =
    encryptTransposition(
        pesan,
        key
    );

    let data =
    JSON.parse(
        localStorage.getItem("history")
    ) || [];

    data.push({

        tanggal:
        new Date().toLocaleString(),

        nomor,
        plaintext:pesan,
        ciphertext:cipher

    });

    localStorage.setItem(
        "history",
        JSON.stringify(data)
    );

    let url =
    `https://wa.me/${nomor}?text=${encodeURIComponent(cipher)}`;

    window.open(url,"_blank");
}