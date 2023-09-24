chrome.storage.sync.get(["protocolDangerous"]).then((dangerOfProtocol) => {
    chrome.storage.sync.get(["domainDangerous"]).then((dangerOfDomain) => {
        chrome.storage.sync.get(["charDangerous"]).then((dangerOfChar) => {
            var dangerOfProtocolBool = dangerOfProtocol.protocolDangerous
            var dangerOfDomainBool = dangerOfDomain.domainDangerous
            var dangerOfCharBool = dangerOfChar.charDangerous
            var theLink = document.activeElement

            if(dangerOfProtocolBool === false){
                theLink.style.color = 'lightGreen'
            }
            if(dangerOfProtocolBool === true){
                theLink.style.color = 'red'
                theLink.setAttribute('class', 'http')
            }
            if(dangerOfDomainBool === true && dangerOfCharBool === true){
                theLink.style.color = 'purple'
                theLink.setAttribute('class', 'fairlyUnsafe')
            }
            if(dangerOfDomainBool === true && dangerOfCharBool === true && dangerOfProtocolBool === true){
                theLink.style.color = 'red'
                theLink.setAttribute('class', 'inactive')
                theLink.setAttribute("href", "javascript:void(0)")
            }
            if(dangerOfDomainBool === true){
                theLink.style.color = 'red'
                theLink.setAttribute('class', 'inactive')
                theLink.setAttribute("href", "javascript:void(0)")
            }
        })  
    })  
})
