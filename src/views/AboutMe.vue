<template>
  <div class="about">
    <div class="part">
      <span class="part-name">name:</span>
      <span class="part-before">{{aboutInfo.name}}</span>
      <input class="part-after" v-model="name" type="text" placeholder="请输入修改后内容" />
      <el-button @click="updataName(aboutInfo.name,name)" type="success" size="mini">保存</el-button>
    </div>
    <div class="part">
      <span class="part-name">email:</span>
      <span class="part-before">{{aboutInfo.email}}</span>
      <input class="part-after" v-model="email" type="text" placeholder="请输入修改后内容" />
      <el-button @click="updataEmail(aboutInfo.email,email)" type="success" size="mini">保存</el-button>
    </div>
    <div class="part">
      <span class="part-name">qq:</span>
      <span class="part-before">{{aboutInfo.qq}}</span>
      <input class="part-after" v-model="qq" type="text" placeholder="请输入修改后内容" />
      <el-button @click="updataQq(aboutInfo.qq,qq)" type="success" size="mini">保存</el-button>
    </div>
    <div class="part">
      <span class="part-name">tel:</span>
      <span class="part-before">{{aboutInfo.tel}}</span>
      <input class="part-after" v-model="tel" type="text" placeholder="请输入修改后内容"  />
   <el-button @click="updataTel(aboutInfo.tel,tel)" type="success" size="mini">保存</el-button>
    </div>
    <div class="part">
      <span class="part-name">school:</span>
      <span class="part-before">{{aboutInfo.school}}</span>
      <input
        class="part-after"
        v-model="school"
        type="text"
        placeholder="请输入修改后内容"
       
      />
      <el-button @click="updataSchool(aboutInfo.school,school)" type="success" size="mini">保存</el-button>
    </div>
    <div class="part">
      <span class="part-name">schoolEN:</span>
      <span class="part-before">{{aboutInfo.schoolEN}}</span>
      <input
        class="part-after"
        v-model="schoolEN"
        type="text"
        placeholder="请输入修改后内容"
      />
       <el-button @click="updataSchoolEN(aboutInfo.schoolEN,schoolEN)" type="success" size="mini">保存</el-button>
    </div>
    <div class="part">
      <span class="part-name">major:</span>
      <span class="part-before">{{aboutInfo.major}}</span>
      <input
        class="part-after"
        v-model="major"
        type="text"
        placeholder="请输入修改后内容"
      />
       <el-button @click="updataMajor(aboutInfo.major,major)" type="success" size="mini">保存</el-button>
    </div>
    <div class="aboutMe">
      <h3>aboutMe</h3>
      <ul class="aboutMe-info">
        <li v-for="(item,index) in aboutMe" :key="index">
          {{item}}
          <el-button
            class="aboutMe-info-del"
            @click="delAboutMe(item,index)"
            type="danger"
            size="mini"
          >删除</el-button>
        </li>
      </ul>
      <div class="add-bout">
        <input class="add-bout-info" type="text" v-model="addAboutMeInfo" />
        <el-button class="add-bout-btn" @click="addAboutMe()" type="success" size="mini">添加</el-button>
      </div>
    </div>

    <div class="skill">
      <h3>skill</h3>
      <ul>
        <li v-for="(item,index) in skill" :key="index">
          {{item}}
          <el-button class="skill-del" @click="delSkill(item)" type="danger" size="mini">删除</el-button>
        </li>
      </ul>
      <div class="add-skill">
        <input class="add-skill-info" type="text" v-model="addSkillInfo" />
        <el-button class="add-skill-btn" @click="addSkill()" type="success" size="mini">添加</el-button>
      </div>
    </div>
    <div class="person">
      <h3>personExperience</h3>
      <ul>
        <li v-for="(item,index) in personExperience" :key="index">
          {{item}}
          <el-button class="person-del" @click="delPerson(item)" type="danger" size="mini">删除</el-button>
        </li>
      </ul>
      <div class="person-add">
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="addPersonInfo" />
        <el-button class="person-add-btn" @click="addPerson()" type="success" size="medium">添加</el-button>
      </div>
    </div>

    <div class="project">
      <h3>projectExperience</h3>
      <ul>
        <li v-for="(item,index) in projectExperience" :key="index">
          {{item}}
          <el-button class="project-del" @click="delProject(item)" type="danger" size="mini">删除</el-button>
        </li>
      </ul>
      <div class="project-add">
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="addProjectInfo"></el-input>
        <el-button class="project-add-btn" @click="addProject()" type="success" size="medium">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      aboutInfo: "",
      id: "",
      name: "",
      email: "",
      qq: "",
      tel: "",
      school: "",
      schoolEN: "",
      major: "",
      aboutMe: "",
      skill: "",
      personExperience: "",
      projectExperience: "",
      addAboutMeInfo: "",
      addSkillInfo: "",
      addProjectInfo: "",
      addPersonInfo: ""
    };
  },
  created() {
    this.getAbout();
  },
  methods: {
    updataName(before,after){
      axios({
        url:url.updataName,
        method:'post',
        data:{
          before:before,
          after:after
        }
      }).then(()=>{
        this.name = "";
        this.getAbout();
      }).catch(err=>{
        console.log(err)
      })
    },
    updataEmail(before,after){
      axios({
        url:url.updataEmail,
        method:'post',
        data:{
          before:before,
          after:after
        }
      }).then(()=>{
        this.email = "";
        this.getAbout();
      }).catch(err=>{
         MessageBox.alert("更新失败");
        console.log(err)
      })
    },
     updataQq(before,after){
      axios({
        url:url.updataQq,
        method:'post',
        data:{
          before:before,
          after:after
        }
      }).then(()=>{
        this.qq = "";
        this.getAbout();
      }).catch(err=>{
         MessageBox.alert("更新失败");
        console.log(err)
      })
    },
     updataTel(before,after){
      axios({
        url:url.updataTel,
        method:'post',
        data:{
          before:before,
          after:after
        }
      }).then(()=>{
        this.tel = "";
        this.getAbout();
      }).catch(err=>{
         MessageBox.alert("更新失败");
        console.log(err)
      })
    },
    updataSchool(before,after){
      axios({
        url:url.updataSchool,
        method:'post',
        data:{
          before:before,
          after:after
        }
      }).then(()=>{
        this.school = "";
        this.getAbout();
      }).catch(err=>{
         MessageBox.alert("更新失败");
        console.log(err)
      })
    },
      updataSchoolEN(before,after){
      axios({
        url:url.updataSchoolEN,
        method:'post',
        data:{
          before:before,
          after:after
        }
      }).then(()=>{
        this.schoolEN = "";
        this.getAbout();
      }).catch(err=>{
         MessageBox.alert("更新失败");
        console.log(err)
      })
    },
       updataMajor(before,after){
      axios({
        url:url.updataMajor,
        method:'post',
        data:{
          before:before,
          after:after
        }
      }).then(()=>{
        this.major = "";
        this.getAbout();
      }).catch(err=>{
         MessageBox.alert("更新失败");
        console.log(err)
      })
    },
    getAbout() {
      axios({
        url: url.getAbout,
        method: "get"
      })
        .then(res => {
          this.aboutInfo = res.data;
          this.skill = res.data.skill;
          this.aboutMe = res.data.aboutMe;
          this.personExperience = res.data.personExperience;
          this.projectExperience = res.data.projectExperience;
          this.id = res.data._id;
          //console.log(this.id)
          //console.log(this.aboutInfo);
        })
        .catch(() => {});
    },
    
    /* 删除abouMe信息开始 */
    delAboutMe(item, index) {
      axios({
        url: url.delAboutMe,
        method: "post",
        data: {
          item: item,
          index: index
        }
      }).then(res => {
        if (res.data.n == 1) {
          MessageBox.alert("删除成功");
          this.getAbout();
        } else {
          MessageBox.alert("删除失败");
        }
      });
    },
    /* 删除abouMe信息结束 */
    /* 添加aboutMe信息开始 */
    addAboutMe() {
      axios({
        url: url.addAboutMe,
        method: "post",
        data: {
          id: this.id,
          aboutMeInfo: this.addAboutMeInfo
        }
      })
        .then(res => {
          if (res.data.n == 1) {
            MessageBox.alert("添加成功");
            this.getAbout();
            this.addAboutMeInfo = "";
          } else {
            MessageBox.alert("添加失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    /* 添加aboutMe信息结束 */
    /* 删除skill开始 */
    delSkill(info) {
      axios({
        url: url.delSkill,
        method: "post",
        data: {
          info: info
        }
      })
        .then(res => {
          if (res.data.n == 1) {
            MessageBox.alert("删除成功");
            this.getAbout();
          } else {
            MessageBox.alert("删除失败");
          }
        })
        .catch(() => {
          MessageBox.alert("删除失败");
        });
    },
    /* 删除skill结束 */
    /* 添加skill开始 */
    addSkill() {
      axios({
        url: url.addSkill,
        method: "post",
        data: {
          info: this.addSkillInfo,
          id: this.id
        }
      })
        .then(res => {
          if (res.data.n == 1) {
            this.getAbout();
            this.addSkillInfo = "";
          } else {
            MessageBox.alert("添加失败");
          }
        })
        .catch(() => {
          MessageBox.alert("添加失败");
        });
    },
    /* 添加skill结束 */
    /* 删除PersonExperience开始 */
    delPerson(info) {
      axios({
        url: url.delPerson,
        method: "post",
        data: {
          info: info
        }
      })
        .then(res => {
          if (res.data.n == 1) {
            this.getAbout();
          } else {
            MessageBox.alert("删除失败");
          }
        })
        .catch(() => {
          MessageBox.alert("删除失败");
        });
    },
    /* 删除PersonExperience结束 */
    /* 添加Person开始 */
    addPerson() {
      axios({
        url: url.addPerson,
        method: "post",
        data: {
          id: this.id,
          info: this.addPersonInfo
        }
      })
        .then(res => {
          if (res.data.n == 1) {
            this.getAbout();
            this.addPersonInfo = "";
          } else {
            MessageBox.alert("添加失败");
          }
        })
        .catch(() => {
          MessageBox.alert("添加失败");
        });
    },
    /* 添加Person结束 */
    /* 删除ProjectExperience开始 */
    delProject(info) {
      axios({
        url: url.delProject,
        method: "post",
        data: {
          info: info
        }
      })
        .then(res => {
          if (res.data.n == 1) {
            this.getAbout();
          } else {
            MessageBox.alert("删除失败");
          }
        })
        .catch(() => {
          MessageBox.alert("删除失败");
        });
    },
    /* 删除ProjectExperience结束*/
    /* 添加Project开始 */
    addProject() {
      axios({
        url: url.addProject,
        method: "post",
        data: {
          id: this.id,
          info: this.addProjectInfo
        }
      })
        .then(res => {
          if (res.data.n == 1) {
            this.getAbout();
            this.addProjectInfo = "";
          } else {
            MessageBox.alert("添加失败");
          }
        })
        .catch(() => {
          MessageBox.alert("添加失败");
        });
    }
    /* 添加Project结束 */
  }
};
</script>

<style lang="scss" scoped>
.about {
  margin-left: 1rem;
  padding: 0.1rem;
}
.part {
  display: flex;
  margin-right: 1.4rem;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba($color: #333, $alpha: 0.2);
  &-name {
    flex-grow: 1;
  }
  &-before {
    flex-grow: 1;
  }
  &-after {
    width: 1.6rem;
  }
}

.aboutMe {
  margin-bottom: 0.1rem;
  &-info {
    li {
      width: 60%;
      .aboutMe-info-del {
        position: absolute;
        right: 2rem;
      }
      border-bottom: 1px solid rgba($color: #333, $alpha: 0.2);
      margin-bottom: 5px;
    }
  }
  .add-bout {
    width: 60%;
    border-bottom: 1px solid rgba($color: #333, $alpha: 0.2);
    &-info {
      width: 90%;
      height: 0.1rem;
    }
    &-btn {
      position: absolute;
      right: 2rem;
    }
  }
}

.skill {
  margin-bottom: 0.1rem;
  li {
    margin-bottom: 4px;
    border-bottom: 1px solid rgba($color: #333, $alpha: 0.2);
    width: 60%;
  }
  &-del {
    position: absolute;
    right: 2rem;
  }
  .add-skill {
    &-info {
      width: 50%;
      height: 0.1rem;
    }
    &-btn {
      position: absolute;
      right: 2rem;
    }
  }
}
.project {
  ul {
    li {
      margin-bottom: 20px;
      border-bottom: 1px solid rgba($color: #333, $alpha: 0.2);
    }
  }
  .project-del {
    margin-left: 0.4rem;
  }
  .project-add {
    &-btn {
      margin-top: 6px;
      margin-left: 50%;
    }
  }
}

.person {
  ul {
    li {
      margin-bottom: 20px;
      border-bottom: 1px solid rgba($color: #333, $alpha: 0.2);
    }
  }
  .person-del {
    margin-left: 0.4rem;
  }
  .person-add {
    &-btn {
      margin-top: 6px;
      margin-left: 50%;
    }
  }
}
</style>