$("#sukses").css('display', 'none');

function success() {
	$("#form").fadeOut();
	$("#sukses").fadeIn();
}

function submit() {
	var data = {
		"entry.1493879580" : $("#nim").val(),
		"entry.1406564454" : $("#firstName").val(),
		"entry.1132547616" : $("#lastName").val(),
		"entry.979964275"  : $("#email").val(),
		"entry.795590846"  : $("#nama-barang").val(),
		"entry.248108895"  : $("#tanggal-peminjaman").val(),
		"entry.1617995749" : $("#tanggal-dikembalikan").val(),
	};
	console.log(data);
	var url = 'https://docs.google.com/forms/d/e/1FAIpQLSc9ZnnOycBVGu4XQhAbVUXz4Nt8wmD2bf8GrBCtMbHE6tuqKg/formResponse'
	$.post(url, data)
	
	success()''
}
