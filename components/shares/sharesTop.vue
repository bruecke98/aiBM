<template>
    <div class="container mx-auto flex flex-col md:flex-row xl:sticky top-16 md:top-14 lg:top-12 text-center z-40 dark:text-slate-300">
    <div class="overview_card " :class="{'scroll_css': onTop}">
        <p class="md:text-xl" >{{long_name(String(companyOutlook.profile.companyName), companyOutlook.profile.symbol)}}</p>
            <p class="text-xs">Name</p>
    </div>
    <div class="overview_card " :class="{'scroll_css': onTop}">
        <p class="md:text-xl" > {{companyOutlook.profile.price}}{{currency_symbol(companyOutlook.profile.currency)}} ({{changePercentage(companyOutlook.profile.price,(companyOutlook.profile.price-companyOutlook.profile.changes))}}%)</p>
            <p class="text-xs">Preis</p>
    </div> 
    <div class="share_link" :class="{'trans_top': onTop}">
         
    </div>
   

    <div class="overview_card " :class="{'scroll_css': onTop}">
        <p class="md:text-xl " >{{long_branche(String(companyOutlook.profile.industry))}}</p>
            <p class="text-xs">Branche</p>
    </div>
    <div class="overview_card " :class="{'scroll_css': onTop}" >
        <p class="md:text-xl" > {{shorten( ( companyOutlook.financialsAnnual_0.weightedAverageShsOut *  companyOutlook.profile.price) )}} {{currency_symbol(companyOutlook.profile.currency)}}  </p>
            <p class="text-xs transition">Marktkapitalisierung </p>
    </div>
    </div>
    {{ }}
</template>

<script setup>
import { useCompanyOutlook } from '../../stores/companyOutlook'

let onTop = false
const companyOutlook = useCompanyOutlook()

function onScroll(e) {
  if (Math.round(window.scrollY) === 0) {
    onTop = false
  } else {
    onTop = true
  }
  setTimeout(() => onScroll == false, 1000)
}

function changePercentage(old, neu) {
  return ((old - neu) / old * 100).toFixed(2)
}

function shorten(big_number) {
  if (big_number > 1000000000) return (big_number / 1000000000).toFixed(2) + ' Mrd.'
  if (big_number > 1000000) return (big_number / 1000000).toFixed(2) + ' Mil.'
  if (big_number > 1000) return (big_number / 1000).toFixed(2) + ' Tsd.'
}

function currency_symbol(currency) {
  if (currency == 'USD') return '$'
  if (currency == 'EUR') return '€'
}

function long_name(name, symbol) {
  if (name.length > 15) {
    return symbol
  }
  return name
}

function long_branche(name) {
  if (name.length > 20) {
    return name.split(/[^A-Za-z]/)[0]
  }
  return name
}
</script>


<style scoped>
.share_link{
    @apply w-0;
    transition: all 0.5s !important;
}
.trans_top{
    @apply w-0 lg:w-1/3;
    transition: all 0.5s !important;
}
.overview_card{
    @apply basis-1/4 bg-slate-300 dark:bg-gray-700 md:p-5 md:m-5 rounded-lg p-1 m-1 text-sm min-h-full;
    transition: all 0.4s !important;

}

.scroll_css{
    @apply lg:p-1 !important;
    transition: all 0.4s !important;
}



.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(100px);
  
}


</style>