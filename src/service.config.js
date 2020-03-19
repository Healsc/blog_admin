const SERVERURL = 'http://localhost:3000/' 

const URL = {
    loginUser: SERVERURL + 'user/loginUser',
    getAbout: SERVERURL + "about/getAbout",
    delAboutMe:SERVERURL + 'about/delAboutMe',
    addAboutMe:SERVERURL + 'about/addAboutMe',
    delSkill:SERVERURL + 'about/delSkill',
    addSkill:SERVERURL + 'about/addSkill',
    delPerson:SERVERURL + 'about/delPerson',
    delProject:SERVERURL + 'about/delProject',
    addPerson:SERVERURL + 'about/addPerson',
    addProject:SERVERURL + 'about/addProject',
    updataName:SERVERURL + 'about/updataName',
    updataEmail:SERVERURL + 'about/updataEmail',
    updataQq:SERVERURL + "about/updataQq",
    updataTel:SERVERURL + 'about/updataTel',
    updataSchool:SERVERURL + "about/updataSchool",
    updataSchoolEN:SERVERURL + "about/updataSchoolEN",
    updataMajor:SERVERURL + "about/updataMajor"
};

export default URL;