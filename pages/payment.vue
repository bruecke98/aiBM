<template>
  <div v-if="user">
    <form action="/api/stripe/subscribe" method="POST">
      <input type="hidden" name="priceID" value="price_1MxFaKFHj02KA3j1qFETbu35" />
      <input type="hidden" name="customerID" :value="ID" />
      <input type="hidden" name="customerMail" :value="mail" />
      <button type="submit" title="Submit"
        class="block w-full py-3 px-6 text-center rounded-xl transition duration-500 hover:scale-110 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600">
        <span class="text-white font-semibold"> Subscribe Now </span>
      </button>
    </form>
  </div>
</template>

<script setup >
const user = useSupabaseUser();
const mail = ref(user.value.email)
const ID = ref(user.value.customerID)

definePageMeta({
    middleware: ['check-subscription'],
});
</script>