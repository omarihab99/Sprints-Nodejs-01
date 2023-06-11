const {writeFile, readFileSync} = require("fs");
const readJsonFile = (file)=>{
    return JSON.parse(readFileSync(file, "utf8"));
}
const writeJsonFile = (file, data)=>{
    writeFile(file, JSON.stringify(data), "utf8", err => {
        if(err) throw err;
    });
}
const addHW = (data,height,weight)=>{
    data.height = height;
    data.weight = weight;
}
const updateName = (data)=>{
    data.name = 'Fluffyy';
}
const catFriendsData = (data)=>{
    const activities = new Array();
    const names = new Array();
    let totalWeight = 0;
    for(const catFriend of data.catFriends) {
        activities.push(...catFriend.activities);
        names.push(catFriend.name);
        totalWeight += catFriend.weight;
    }
    return {activities, names, totalWeight};
}
const allActivities = (data, friendsActivities)=>{
    return data.activities.concat(friendsActivities);
}
const updateFur = (data)=>{
    data.catFriends[0].furcolor = "blue";
}
const addActivites = (data)=>{
    const newActivities = ['eat', 'play'];
    let i=0;
    for(const catFriend of data.catFriends){
        catFriend.activities.push(newActivities[i++]);
    }
}
file = 'problem1.json';
const data = readJsonFile(file);
console.log(data);
addHW(data, 100,50);
updateName(data);
const {activities, names, totalWeight} = catFriendsData(data);
console.log(activities, names, totalWeight);
console.log(allActivities(data, activities));
updateFur(data);
addActivites(data);
console.log(data);
writeJsonFile(file,data);
console.log('Success');