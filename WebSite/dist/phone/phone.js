let phoneInfo=[],dataLoaded=!1;async function stackData(){const e=await fetch("/files/phoneInfo.csv");onArray(await e.text())}function onArray(e){e.split("\n").forEach((e=>{phoneInfo.push(e.split(","))})),addPhoneName()}function addPhoneName(){phoneInfo.forEach((e=>{let n=e[0]+" "+e[1];e.push(n.toLowerCase().trim())})),console.log(phoneInfo)}stackData();let phoneOneTitle=document.querySelector(".compare-row-one .phoneOne h1"),phoneOneBrand=document.querySelector(".compare-row-one .phoneOne .phoneSpecs .brand p"),phoneOneModel=document.querySelector(".compare-row-one .phoneOne .phoneSpecs .model p"),phoneOneMemory=document.querySelector(".compare-row-one .phoneOne .phoneSpecs .memory p"),phoneOneStorage=document.querySelector(".compare-row-one .phoneOne .phoneSpecs .storage p"),phoneOnePrice=document.querySelector(".compare-row-one .phoneOne .phoneSpecs .price p"),phoneOneRating=document.querySelector(".compare-row-one .phoneOne .phoneSpecs .rating p"),searchBarOne=document.querySelector(".container .header .search-box input");function checkPhone(e,n){for(let o of phoneInfo)if(o[8]==e.toLowerCase()||o[1]==e.toLowerCase())return showData(o,n),!0;return!1}function showData(e,n){phoneOneTitle.innerHTML=e[8],phoneOneBrand.innerHTML=e[0],phoneOneModel.innerHTML=e[1],phoneOneMemory.innerHTML=e[3],phoneOneStorage.innerHTML=e[4],phoneOnePrice.innerHTML=.011*e[7]+" €",phoneOneRating.innerHTML=e[5]}searchBarOne.addEventListener("keypress",(e=>{"Enter"==e.key&&(checkPhone(searchBarOne.value,1)||swal("Attenzione!","Telefono non trovato nella lista.\nAssicurati di aver scritto secondo il formato che segue:\n\nBRAND MODELLO","error"))}));