//promise
function pegarId(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(5)
		},1500)
	})
}

function buscarEmail(id){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("alisson@hotmail.com")
		},2000)
	})
}

function enviarEmail(corpo, para){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			var deuErro = false;
			if(!deuErro){
				resolve({time: 4, to: "alisson@hotmail.com"})//promessa cumprida
			}else{
				reject("Filha cheia") // promessa falha
			}
		},4000)
	});
}

pegarId().then((id) => {
	buscarEmail(id).then((email) => {
		enviarEmail("Olá", email).then(() => {

		}).catch(err => {
			console.log(err);
		})
	})
})
/*
enviarEmail("Olá","alisson.315@hotmail.com").then((time, to) =>{
	console.log('time: ${dados.time}| to: ${dados.to}');
}).catch(() => {
	console.log("Não deu para enviar email:" + erro);
});*/
