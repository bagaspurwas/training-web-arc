$("#sukses").css('display', 'none');

function submit() {
	var data = {
		"nim" : $("#nim").val(),
		"firstName" : $("#firstName").val(),
		"lastName" : $("#lastName").val(),
		"email" : $("#email").val(),
		"nama-barang" : $("#nama-barang").val(),
		"tanggal-peminjaman" : $("#tanggal-peminjaman").val(),
		"tanggal-dikembalikan" : $("#tanggal-dikembalikan").val(),
	};
	console.log(data);
	$.post("http://oprec.arc.itb.ac.id/api/submit.php", data, function(result) {
		console.log(result);
		$("#form").fadeOut();
		$("#sukses").fadeIn();
	});
}