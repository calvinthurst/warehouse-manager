const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

// let pounds = document.getElementById('weight');
// let poundValue = pounds.value

function drawPackages() {
  let packageElm = document.getElementById("package-info")
  let template = ''
  packages.forEach(package => { template += `<div class="col-3">${package.to}</div><div class="col-2">${package.weight}</div> <div class="col-2">${package.isFragile}</div> <div class="col-2">${package.priorityLevel}</div> <div class="col-2">${package.trackingNumber}</div>` });
  packageElm.innerHTML = template
  console.log(template)
}


function filterLighter() {
  let pounds = document.getElementById('weight');
  let poundValue = pounds.value
  console.log(poundValue)
  let weightOfBox = packages.filter(packages => packages.weight < poundValue)
  console.log(weightOfBox)
  drawFiltered(weightOfBox)
}

function filterPriority(priorityType) {
  let priorityKind = packages.filter(packages => packages.priorityLevel == priorityType)
  console.log(priorityKind);
  drawFiltered(priorityKind)
}

function filterIsFragile() {
  let fragileIs = packages.filter(packages => packages.isFragile == true)
  drawFiltered(fragileIs)
}

function filterIsNotFragile() {
  let fragileNot = packages.filter(packages => packages.isFragile == false)
  drawFiltered(fragileNot)
}
function drawFiltered(parcel) {
  let packageElm = document.getElementById("package-info")
  let template = ''
  parcel.forEach(box => { template += `<div class="col-3">${box.to}</div><div class="col-2">${box.weight}</div> <div class="col-2">${box.isFragile}</div> <div class="col-2">${box.priorityLevel}</div> <div class="col-2">${box.trackingNumber}</div>` });
  packageElm.innerHTML = template
  console.log(packageElm)
}
drawPackages()