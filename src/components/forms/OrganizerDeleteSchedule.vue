<template>
    <div style="height: 100%; float: left; padding-left: 10px; padding-top: 10px">
        <el-form label-position="left">
            <el-form-item label="Schedule ID">
                <el-input v-model="form.schedule_id"></el-input>
            </el-form-item>
            <el-form-item label="Secret Code">
                <el-input v-model="form.secret_code"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">
                    Submit
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "organizer-delete-schedule",
    data () {
      return {
        form: {
          schedule_id: '',
          secret_code: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>