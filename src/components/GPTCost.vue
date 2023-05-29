<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="8">
          <v-textarea rows="20" row-height="10" v-model="text" class="input-area" />
        </v-col>
        <v-col cols="4">
            <v-row>Number of tokens: {{ tokenCount }}</v-row>
            <v-row>Embedding cost: ${{ embedding_cost.toFixed(4) }}</v-row>
            <v-row>GPT-3.5-turbo prompt cost: ${{ gpt_35_cost.toFixed(4) }}</v-row>
            <v-row>GPT-4-8k prompt cost: ${{ gpt_4_8k_cost.toFixed(4) }}</v-row>
            <v-row>GPT-4-32k prompt cost: ${{ gpt_4_32k_cost.toFixed(4) }}</v-row>
        </v-col>
    </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { get_encoding, encoding_for_model } from "@dqbd/tiktoken";
const enc = encoding_for_model("ada");
interface Data {
  text: string;
  tokenCount: number;
}

export default {
  data(): Data {
    return {
      text: '',
      tokenCount: 0
    };
  },
  computed: {
    embedding_cost() {
        return this.tokenCount * 0.0004 / 1000
    },
    gpt_35_cost() {
        return this.tokenCount * 0.002 / 1000
    },
    gpt_4_8k_cost() {
        return this.tokenCount * 0.03 / 1000
    },
    gpt_4_32k_cost() {
        return this.tokenCount * 0.06 / 1000
    }
  },
  methods: {
    
  },
  watch: {
    text(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.tokenCount = enc.encode(this.text).length;
      }
    }
  },
};
</script>

<style scoped>

</style>
  