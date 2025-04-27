<script lang="ts" setup>
import { redirects } from "@/data.json"

const route = (useRoute().params.route as string[]).join("/");

let redirectTo = undefined;

for (let [from, to] of redirects) {
  if (from == route) {
    redirectTo = to;
  }
}

if (!redirectTo) {
  showError({ statusCode: 404, statusMessage: "Page not found" });
} else {
  onMounted(() => window.location.replace(redirectTo))
}
</script>
<template>
  <div class="m-5">
    Du wirst weitergeleitet auf <a class="text-link" :href="redirectTo">{{ redirectTo }}</a>...
  </div>
</template>
<style></style>