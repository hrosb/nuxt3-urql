import { createClient } from "@urql/vue";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxt) => {
  const { vueApp } = nuxt;

  const client = createClient({
    url: "https://fruits-api.netlify.app/graphql"
  });

  nuxt.provide("urql", client);
  vueApp.provide("$urql", client);
});
