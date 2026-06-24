let data =
JSON.parse(
    localStorage.getItem("history")
) || [];

let historyList =
document.getElementById("historyList");

renderHistory();

function renderHistory(){

    historyList.innerHTML = "";

    if(data.length === 0){

        historyList.innerHTML = `
        <div class="history-card">
            <h3>Belum Ada Riwayat</h3>
            <p>Riwayat enkripsi masih kosong.</p>
        </div>
        `;

        return;
    }

    data
    .slice()
    .reverse()
    .forEach(item => {

        historyList.innerHTML += `

        <div class="history-card">

            <h3>${item.tanggal}</h3>

            <p>
                <b>Nomor :</b>
                ${item.nomor}
            </p>

            <p>
                <b>Plaintext :</b>
                ${item.plaintext}
            </p>

            <p>
                <b>Ciphertext :</b>
                ${item.ciphertext}
            </p>

        </div>

        `;
    });
}

function deleteAllHistory(){

    if(confirm("Yakin ingin menghapus semua riwayat?")){

        localStorage.removeItem("history");

        data = [];

        renderHistory();
    }
}