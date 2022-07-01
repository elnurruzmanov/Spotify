import {v4 as uuidv4}from "uuid";
function chillHop(){
    return [
      {
        name: "Full Circle",
        cover:
          "https://chillhop.com/wp-content/uploads/2022/05/3aaa079444cf9c1d4e0a1f53947321b29ff554c0-1024x1024.jpg",
        artist: "Moods",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=35507",
        color: ["#567941", ["#4D698E"]],
        id: uuidv4(),
        active: true,
      },
      {
        name: "Sleepy Fish coa",
        cover:
          "https://chillhop.com/wp-content/uploads/2022/05/c0c6175640eb9aa14b955ae91e255b3175de1c32-1024x1024.jpg",
        artist: "A Reminder",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        color: ["#EAB268", ["#6A230B"]],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Keep Going",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-150x150.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
        color: ["#CD607D", ["#c94043"]],
        id: uuidv4(),
        active: false,
      },
    ];
}

export default chillHop