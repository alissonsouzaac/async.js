//Async/Await
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
function pegarUsuarios(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{name:"Alisson", lang:"js"},
				{name:"DANIEL", lang: "JAVA"}
			])
		},3000)

		
	})
}

async function principal(){
	var id = await pegarId();
	var email = await buscarEmail(id);		

	try{
		await enviarEmail("Ola", email);
		console.log("Email enviado com sucesso!");
	}catch(erro){
		console.log(erro);
	}
}

principal();


/*
pegarUsuarios().then((usuarios) => {
	console.log(usuarios);
});
*/
/*
pegarId().then((id) => {
	buscarEmail(id).then((email) => {
		enviarEmail("Olá", email).then(() => {

		}).catch(err => {
			console.log(err);
		})
	})
})
*/

