<template>
    <div id="exportDialog">
        <el-dialog
            title="导出提示"
            :visible.sync="exportFlag"
            :before-close="handleClose"
            width="45%">
            <div class="export-box">
                <div class="export-name">
                    <span>任务名称：</span>
                    <el-input v-model="exportName" oninput="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')" placeholder="必填且不能重复" style="width:80%;"></el-input>
                </div>
                <div class="export-tip" style="margin-top:10px;color:red;">注意：任务名称为必填项且不能重复，只能输入汉字、英文、数字！</div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleToDownload" style="width:100px;">保 存</el-button>
                <el-button @click="handleClose" style="width:100px;margin-left:25px;">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "ExportDialog",
    data(){
        return{
            exportName:''
        }
    },
    props:{
        exportFlag:{
            type:Boolean,
            default:false
        },
        type:{
            type:Number,
            default:1
        }
    },
    methods:{
        handleToDownload(){
            var that = this;
            var Reg = /[\u4E00-\u9FA5A-Za-z0-9]+/g;
            if(Reg.test(that.exportName)){
                that.$https.publicExportNameCheck(this.type==1?{
                    name:that.exportName
                }:{
                    activityName:that.exportName
                }).then(res=>{
                    console.log(res)
                    if(res && res.data.result == 'success'){
                        if(res.data.isExist == '1'){
                            this.$emit('closeExport',{exportFlag:true,name:that.exportName})
                        }else{
                            that.$message({message:"该名称已经存在，不能添加重复",type:'warning'})
                        }
                    }
                })
            }else{
                that.$message({message:"请输入中文或数字、英文",type:'warning'})
            }
        },
        handleClose(){
            this.$emit('closeExport',{exportFlag:false})
        }
    }
}
</script>

<style lang="scss">
    #exportDialog{
        .el-dialog__wrapper{
            .el-dialog{
                .el-dialog__header{
                    border-bottom: 1px solid #e5e5e5;
                    .el-dialog__title{
                        font-size:14px;
                        color:#616161;
                    }
                }
                .export-box{
                    .export-name{
                        .el-input{
                            .el-input__inner{
                                height:28px;
                                border-radius: 0 !important;
                            }
                        }
                    }
                    .export-tip{
                        margin-left:69px;
                    }
                }
                .effectDataContent{
                    .el-table td {
                        padding: 8px;
                    }
                }
                .dialog-footer{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
</style>