<template>
  <div class="about">
    <div class="part">
      <span class="part-name">name:</span>
      <span class="part-before">{{aboutInfo.name}}</span>
      <input
        class="part-after"
        v-model="name"
        type="text"
        placeholder="请输入修改后内容"
        @change="changVal"
      />
    </div>
    <div class="part">
      <span class="part-name">email:</span>
      <span class="part-before">{{aboutInfo.email}}</span>
      <input
        class="part-after"
        v-model="email"
        type="text"
        placeholder="请输入修改后内容"
        @change="changVal"
      />
    </div>
    <div class="part">
      <span class="part-name">qq:</span>
      <span class="part-before">{{aboutInfo.qq}}</span>
      <input class="part-after" v-model="qq" type="text" placeholder="请输入修改后内容" @change="changVal" />
    </div>
    <div class="part">
      <span class="part-name">tel:</span>
      <span class="part-before">{{aboutInfo.tel}}</span>
      <input class="part-after" v-model="tel" type="text" placeholder="请输入修改后内容" @change="changVal" />
    </div>
    <div class="part">
      <span class="part-name">school:</span>
      <span class="part-before">{{aboutInfo.school}}</span>
      <input
        class="part-after"
        v-model="school"
        type="text"
        placeholder="请输入修改后内容"
        @change="changVal"
      />
    </div>
    <div class="part">
      <span class="part-name">schoolEN:</span>
      <span class="part-before">{{aboutInfo.schoolEN}}</span>
      <input
        class="part-after"
        v-model="schoolEN"
        type="text"
        placeholder="请输入修改后内容"
        @change="changVal"
      />
    </div>
    <div class="part">
      <span class="part-name">major:</span>
      <span class="part-before">{{aboutInfo.major}}</span>
      <input
        class="part-after"
        v-model="major"
        type="text"
        placeholder="请输入修改后内容"
        @change="changVal"
      />
    </div>
    <div>
      <h3>aboutMe</h3>
      <ul>
        <li v-for="(item,index) in aboutMe" :key="index">{{item}}</li>
      </ul>
    </div>
    <div>
      <h3>skill</h3>
      <ul>
        <li v-for="(item,index) in skill" :key="index">{{item}}</li>
      </ul>
    </div>
    <div>
      <h3>projectExperience</h3>
      <ul></ul>
    </div>
    <div>
      <h3>personExperience</h3>
      <ul></ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      aboutInfo: "",
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
      projectExperience: ""
    };
  },
  created() {
    this.getAbout();
  },
  methods: {
    getAbout() {
      axios({
        url: url.getAbout,
        method: "get"
      })
        .then(res => {
          this.aboutInfo = res.data;
          this.skill = res.data.skill;
          this.aboutMe = res.data.aboutMe;
          console.log(this.aboutInfo);
        })
        .catch(() => {});
    },
    changVal() {
      console.log(this.name);
    }
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
  margin-bottom: 2px;
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
</style>