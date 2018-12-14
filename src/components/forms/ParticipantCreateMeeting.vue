<template>
    <div style="height: 100%; float: left; padding-left: 10px; padding-top: 10px">
        <el-form label-position="left">
            <el-form-item label="Time Slot ID">
                <el-input v-model="form.time_slot_id"></el-input>
            </el-form-item>
            <el-form-item label="Participant Name">
                <el-input v-model="form.participant_name"></el-input>
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
    name: "participant-create_meeting",
    data () {
      return {
        form: {
          time_slot_id: '',
          participant_name: '',
        }
      }
    }
  }
</script>

<style scoped>

</style>