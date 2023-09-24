chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		"id": "review",
		"title": "review-URL",
		"contexts": ["link"]
	})
})


chrome.contextMenus.onClicked.addListener(async (clickData) => {
	var protocolHTTP = 'http://'
	var urlToScan = (clickData.linkUrl)
	var listOfDomains = ['.zip', '.review', '.country', '.kim', '.cricket', '.science', '.work', '.party', '.gq', '.link']
	var listOfChar = ['<', '>', '"', '#', '%', '{', '}', '^', '~', '[', ']']
	var bool = (urlToScan.startsWith(protocolHTTP))
	console.log(urlToScan.startsWith(protocolHTTP))
	chrome.storage.sync.set({"protocolDangerous":bool}).then(() => {
	})
	if(listOfDomains.some(i => urlToScan.includes(i))){
		chrome.storage.sync.set({"domainDangerous": true}).then(() => {
		})
	}else{
		chrome.storage.sync.set({"domainDangerous": false}).then(() => {
		})
	}

	if(listOfChar.some(i => urlToScan.includes(i))){
		chrome.storage.sync.set({"charDangerous": true}).then(() => {
		})
	}else{
		chrome.storage.sync.set({"charDangerous": true}).then(() => {
		})
	}


	async function getCurrentTab(){
		const queryOptions = { active: true, currentWindow: true };
		const [tab] = await chrome.tabs.query(queryOptions);
		return tab;
	}
	const tab = await getCurrentTab();
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['cdnjs/jquery.min.js','scriptInject.js']
	});
	chrome.scripting.insertCSS({
		target: { tabId: tab.id },
		files: ['stylesInject.css']
	})
	
})