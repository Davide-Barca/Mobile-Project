let phoneInfo = []
let dataLoaded = false
async function stackData(){
    const url = '/files/phoneInfo.csv'
    const response = await fetch(url)
    const tabledata = await response.text()
    onArray(tabledata)
}

function onArray(data){
    data.split('\n').forEach((el) => {
        phoneInfo.push(el.split(','))
    })
    addPhoneName()
}

function addPhoneName(){
    phoneInfo.forEach((el) => {
        let phoneName = el[0] + " " + el[1]
        el.push(phoneName.toLowerCase().trim())
    })

    console.log(phoneInfo)
}

stackData()




/* Phone One */
let phoneOneTitle = document.querySelector('.compare-row-one .phoneOne h1')
let phoneOneBrand = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .brand p')
let phoneOneModel = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .model p')
let phoneOneMemory = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .memory p')
let phoneOneStorage = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .storage p')
let phoneOnePrice = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .price p')
let phoneOneRating = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .rating p')

let searchBarOne = document.querySelector('.container .header .search-box input')

function checkPhone(name, searchBarNumber){
    for (let el of phoneInfo) {
        if(el[8] == name.toLowerCase() || el[1] == name.toLowerCase()){
            showData(el, searchBarNumber)
            return true
            break;
        }
    }
    return false
}

function showData(phone, barNum){
    phoneOneTitle.innerHTML = phone[8]
    phoneOneBrand.innerHTML = phone[0]
    phoneOneModel.innerHTML = phone[1]
    phoneOneMemory.innerHTML = phone[3]
    phoneOneStorage.innerHTML = phone[4]
    phoneOnePrice.innerHTML = (phone[7] * 0.011) + " €"
    phoneOneRating.innerHTML = phone[5]
}

searchBarOne.addEventListener('keypress', (k) => {
    if(k.key == 'Enter'){
        if(!checkPhone(searchBarOne.value, 1)){
            swal("Attenzione!", "Telefono non trovato nella lista.\nAssicurati di aver scritto secondo il formato che segue:\n\nBRAND MODELLO", "error")
        }
    }
})