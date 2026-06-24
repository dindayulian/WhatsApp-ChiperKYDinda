function decryptMessage(){

    let cipher =
    document.getElementById(
        "ciphertext"
    ).value;

    let key =
    parseInt(
        document.getElementById(
            "key"
        ).value
    );

    if(!cipher || !key){

        alert(
            "Lengkapi data terlebih dahulu"
        );

        return;
    }

    let plain =
    decryptTransposition(
        cipher,
        key
    );

    document.getElementById(
        "plaintext"
    ).value = plain;
}