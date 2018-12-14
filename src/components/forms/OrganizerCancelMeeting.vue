<template>
    <div style="height: 100%; float: left; padding-left: 10px; padding-top: 10px">
        <el-form label-position="left">
            <el-form-item label="Schedule ID">
                <el-input v-model="form.schedule_id"></el-input>
            </el-form-item>
            <el-form-item label="Time Slot ID">
                <el-input v-model="form.time_slot_id"></el-input>
            </el-form-item>
            <el-form-item label="Secret Code">
                <el-input v-model="form.secret_code"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitCancelMeeting">
                    Submit
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "organizer-cancel_meeting",
    data () {
      return {
        base_url: "https://7r780ch9oh.execute-api.us-east-2.amazonaws.com/beta/",
        form: {
          schedule_id: '',
          time_slot_id: '',
          secret_code: ''
        }
      }
    },
    methods: {
      submitCancelMeeting: function() {
        let formdata = new FormData();
        formdata.append("scheduleID", this.form.schedule_id);
        formdata.append("slotID", this.form.time_slot_id);
        formdata.append("code", this.form.secret_code);
        let config = {
          headers: {}
        };
        axios.post(this.base_url + 'schedule', formdata, config).then((res)=>{
          console.log("result: " + res);
          this.$message(res.message);
        }).catch((res)=>{
          this.$message({
            showClose: true,
            message: res.message,
            type: 'error'
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>