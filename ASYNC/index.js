function enviarEmail(corpo, para, callback){
	setTimeout(() => {

		//console.log(' Para: ${para} | ${corpo}');

		var deuErro = false:

		if(deuErro){
			callback("O envio do e-mail deu erro");
		}else{
			callback();
		}
		//callback("OK",5,"8s");
	},8000)
}

console.log("Seu email esta sendo enviado");
enviarEmail("Ola","alisson.315@hotmail.com", (erro) =>{
	//console.log(' Status ${status}| contatos: ${amount} | time: ${time}')

	if(erro == undefined){//não deu erro
		console.log("TUDO OK");
	}else{//deu erro
		console.log("Teve um erro" + erro );
	}
});
console.log("Deve chegar em alguns instantes");