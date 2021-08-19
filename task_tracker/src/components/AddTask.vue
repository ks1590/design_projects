<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>タスク名</label>
      <input type="text" v-model="text" name="text" />
    </div>
    <div class="form-control">
      <label>日時</label>
      <input type="text" v-model="day" name="day" />
    </div>
    <div class="form-control form-control-check">
      <label>リマインダー</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("タスクを入力してくだいさい。");
        return;
      }

      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      };

      this.$emit("add-task", newTask);

      (this.text = ""), (this.day = ""), (this.reminder = false);
    }
  }
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-contorl {
  margin: 20px;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>