const display = document.getElementById('display');

// appendValue('7') → menambahkan angka 7 ke tampilan
// appendValue('+') → menambahkan tanda tambah ke tampilan
  function appendValue(value) {
    display.value += value;
  }

  // Mengosongkan seluruh isi layar kalkulator.
  // Dipanggil ketika tombol "C" ditekan.
  function clearDisplay() {
    display.value = '';
  }

  function calculate() {
    // Digunakan untuk menangani error jika ekspresi tidak valid (misalnya 2++3).
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }

  // Fungsi persen: bagi nilai display dengan 100
function percent() {
  try {
    display.value = parseFloat(display.value) / 100;
  } catch {
    display.value = 'Error';
  }
}

// Fungsi akar kuadrat
function squareRoot() {
  try {
    display.value = Math.sqrt(parseFloat(display.value));
  } catch {
    display.value = 'Error';
  }
}
