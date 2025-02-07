document.addEventListener("DOMContentLoaded", function () {
    let password = "";
    const passwordDisplay = document.getElementById("password-display");
    const enterButton = document.getElementById("enter-button");

    // Cek apakah elemen ditemukan
    if (!passwordDisplay || !enterButton) {
        console.error("Error: Element tidak ditemukan!");
        return; // Menghentikan script agar tidak error lebih lanjut
    }

    // Menambahkan event listener untuk tombol angka
    document.querySelectorAll(".keys button").forEach(button => {
        button.addEventListener("click", () => {
            if (password.length < 6) {
                password += button.textContent;
                passwordDisplay.textContent = "*".repeat(password.length);

                // Jika password sudah 6 karakter, tombol enter bisa diklik
                if (password.length === 6) {
                    enterButton.disabled = false;
                }
            }
        });
    });

    // Event listener untuk tombol Enter
    enterButton.addEventListener("click", () => {
        if (password.length === 6) {
            if (password === "123456") { // Ubah sesuai password yang diinginkan
                window.location.href = "hal1.html";
            } else {
                alert("Incorrect password!");
                password = "";
                passwordDisplay.textContent = "Enter your password";
                enterButton.disabled = true; // Disable kembali tombol enter
            }
        }
    });

    // Memastikan tombol enter awalnya tidak bisa diklik
    enterButton.disabled = true;
});
