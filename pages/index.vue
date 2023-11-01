<template>
  <div>
    <v-container>
      <v-row no-gutters class="h-50">
        <v-col> </v-col>

        <v-col align-self="center" cols="8">
          <h1 class="text-center text-h3 mb-2">Vue ToDo List</h1>
          <v-card class="card-height-md">
            <v-card-actions class="h-25 grey lighten-2 justify-end">
              <v-chip
                variant="flat"
                size="large"
                class="ma-2 p-5"
                color="blue"
                text-color="white"
              >
                Tasks
                <v-avatar class="white ml-3">
                  <span class="blue--text">
                    {{ $store.state.tasks.length }}
                  </span>
                </v-avatar>
              </v-chip>

              <v-chip
                variant="flat"
                size="large"
                class="ma-2 p-5"
                color="blue"
                text-color="white"
              >
                Tasks Done
                <v-avatar class="white ml-3">
                  <span class="blue--text">
                    {{ doneTasks }}
                  </span>
                </v-avatar>
              </v-chip>
              <v-btn
                depressed
                color="error"
                v-show="doneTasks > 0"
                @click="removeDoneTasks"
              >
                <v-icon size="large" color="white">mdi-delete</v-icon>
                Tasks Done
              </v-btn>
              <v-btn
                depressed
                color="error"
                v-show="$store.state.tasks.length > 0"
                @click="removeAllTasks"
              >
                <v-icon size="large" color="white">mdi-delete</v-icon>
                Tasks
              </v-btn>
            </v-card-actions>
            <div class="h-50 pa-md-10">
              <div v-show="$store.state.tasks.length <= 0">No Tasks Added</div>
              <Task
                v-for="(task, i) in $store.state.tasks"
                :key="i"
                :task="task"
              />
            </div>
            <div class="d-flex auto pa-md-2 grey lighten-2">
              <v-text-field
                label="New Task"
                variant="outlined"
                class="rounded-xl"
                v-model="newTask"
                @keypress.enter="addTask"
              ></v-text-field>
              <v-btn icon @click="addTask">
                <v-icon size="large" color="blue">mdi-plus-circle</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>

        <v-col> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
    removeDoneTasks() {
      this.$store.commit("REMOVE_DONE_TASKS", this.task);
    },
    removeAllTasks() {
      this.$store.commit("REMOVE_ALL_TASKS", this.task);
    },
  },
  computed: {
    doneTasks: function () {
      let count = 0;

      this.$store.state.tasks.forEach((element) => {
        if (element.done === true) {
          count++;
        }
      });

      return count;
    },
  },
};
</script>
