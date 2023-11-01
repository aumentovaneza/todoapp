<template>
  <v-card class="mx-auto mb-3" variant="outlined">
    <v-card-actions class="d-flex justify-space-between">
      <div class="d-flex">
        <v-btn @click="toggleDone" icon>
          <v-icon
            size="large"
            :color="`${task.done ? 'grey' : 'green'}`"
            class="mr-3"
            >mdi-check-circle</v-icon
          >
        </v-btn>
        <div
          :class="`task ${task.done ? 'complete' : ''}`"
          class="text-overline"
        >
          {{ task.content }}
        </div>
      </div>

      <v-btn @click="removeTask" depressed color="error">
        <v-icon size="large" color="white">mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    toggleDone() {
      this.$store.commit("DONE_TASK", this.task);
    },
    removeTask() {
      this.$store.commit("REMOVE_TASK", this.task);
    },
  },
};
</script>

<style></style>
