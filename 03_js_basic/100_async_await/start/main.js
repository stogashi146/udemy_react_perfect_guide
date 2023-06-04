// 非同期処理（Promise）
let a = 0;
init();
async function init() {
	try {
	const result = await new Promise((resolve, reject) => {
			setTimeout(() => {
					a = 1;
					resolve(a)
			}, 2000);
	})
	console.log(result);
	} catch(e){

	}

	// }).catch((c) => {
	// 		console.log('catchが実行', c)
	// })
}


