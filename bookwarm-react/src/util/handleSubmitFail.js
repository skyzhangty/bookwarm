export default function handleSubmitFail(errors) {
	let stageKeys = {};
	Object.keys(errors).forEach(k => {
		if (document.getElementsByName(k).length) {
			stageKeys[k] = document.getElementsByName(k);
		}
	});
	let key = Object.keys(stageKeys).reduce((k,l) => {
		return (document.getElementsByName(k)[0].offsetTop < document.getElementsByName(l)[0].offsetTop) ? k : l;
	});
	document.getElementsByName(key)[0].scrollIntoView({block: 'start',  behaviour: 'smooth'});
}