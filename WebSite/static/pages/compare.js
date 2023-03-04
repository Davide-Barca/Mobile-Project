
/**
 * Phone Info Settings
 * 
 *  Position 0 -> Brand
 *  Position 1 -> Model
 *  Position 2 -> Color
 *  Position 3 -> Memory
 *  Position 4 -> Storage
 *  Position 5 -> Rating
 *  Position 6 -> Selling Price
 *  Position 7 -> Original Price
 *  Position 8 -> Name
 * 
 */

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
}

stackData()

/* Phone Settings */
/* Phone One */
let phoneOneTitle = document.querySelector('.compare-row-one .phoneOne h1')
let phoneOneBrand = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .brand p')
let phoneOneModel = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .model p')
let phoneOneMemory = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .memory p')
let phoneOneStorage = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .storage p')
let phoneOnePrice = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .price p')
let phoneOneRating = document.querySelector('.compare-row-one .phoneOne .phoneSpecs .rating p')
/* Phone Two */
let phoneTwoTitle = document.querySelector('.compare-row-two .phoneTwo h1')
let phoneTwoBrand = document.querySelector('.compare-row-two .phoneTwo .phoneSpecs .brand p')
let phoneTwoModel = document.querySelector('.compare-row-two .phoneTwo .phoneSpecs .model p')
let phoneTwoMemory = document.querySelector('.compare-row-two .phoneTwo .phoneSpecs .memory p')
let phoneTwoStorage = document.querySelector('.compare-row-two .phoneTwo .phoneSpecs .storage p')
let phoneTwoPrice = document.querySelector('.compare-row-two .phoneTwo .phoneSpecs .price p')
let phoneTwoRating = document.querySelector('.compare-row-two .phoneTwo .phoneSpecs .rating p')

let searchBarOne = document.querySelector('.compare-row-one .search-box input')
let searchBarTwo = document.querySelector('.compare-row-two .search-box input')

function checkPhone(name, searchBarNumber){
    phoneInfo.every((el) => {
        if(el[8] == name.toLowerCase() || el[1] == name.toLowerCase()){
            showData(el, searchBarNumber)
            return false;
        }
        return true;
    })
}

function showData(phone, barNum){
    if(barNum == 1){
        phoneOneTitle.innerHTML = phone[8]
        phoneOneBrand.innerHTML = phone[0]
        phoneOneModel.innerHTML = phone[1]
        phoneOneMemory.innerHTML = phone[3]
        phoneOneStorage.innerHTML = phone[4]
        phoneOnePrice.innerHTML = (phone[7] * 0.011) + " €"
        phoneOneRating.innerHTML = phone[5]
    }
    else if(barNum == 2){
        phoneTwoTitle.innerHTML = phone[8]
        phoneTwoBrand.innerHTML = phone[0]
        phoneTwoModel.innerHTML = phone[1]
        phoneTwoMemory.innerHTML = phone[3]
        phoneTwoStorage.innerHTML = phone[4]
        phoneTwoPrice.innerHTML = (phone[7] * 0.011) + " €"
        phoneTwoRating.innerHTML = phone[5]
    }
    checkHigher()
}

searchBarOne.addEventListener('keypress', (k) => {
    if(k.key == 'Enter'){
        if(!checkPhone(searchBarOne.value, 1)){
            // window.alert("telefono non torvato tra l'elenco")
        }
    }
})

searchBarTwo.addEventListener('keypress', (k) => {
    if(k.key == 'Enter'){
        if(!checkPhone(searchBarTwo.value, 2)){
            // window.alert("telefono non torvato tra l'elenco")
        }
    }
})