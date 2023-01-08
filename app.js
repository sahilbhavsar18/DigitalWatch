// var hour = document.getElementById('hh');
// var minutes = document.getElementById('mm');
// var seconds = document.getElementById('ss');
// var sec = 0;
// var min = 0;
// var hou = 0;
// const Stable = 0;
// var Interval;
// window.onload = () => {
//     Interval = setInterval(Timer,1) ;
// }
// function Timer() {
//     sec++;
//     if(sec<10)
//     {
//         seconds.innerHTML = '0' + sec;
//     }
//     if(sec>10 && sec<=59)
//     {
//         seconds.innerHTML = sec;
//     }
//     if(sec>59)
//     {
//         ++min;
//         if(min<10)
//         {
            
//             minutes.innerHTML = '0' + min;
//             sec = 0;
//         }
//         if(min>=10 && min<=59)
//         {
            
//             minutes.innerHTML =  min;
//             sec = 0;
//         }
//     }
//     if(minutes.innerHTML>59)
//     {
//         hour.innerHTML++;
//         hour.innerHTML = '0' + hour.innerHTML;
//         minutes.innerHTML = Stable;
//         if(min<10)
//             {
//                 min++;
//                 minutes.innerHTML = '0' + min;
//                 sec = 0;
//             }
//         else
//         {
//             minutes.innerHTML = min;
//             sec = 0;
//         }
//         //  minutes.innerHTML = Stable;
//         //  seconds.textContent = Stable;
//     }
// }
window.onload = function currentTime (){
let date = new Date();
let hhh = date.getHours();
let mmm = date.getMinutes();
let sss = date.getSeconds();
let session = "AM";
        if(hhh == 0)
{
    hhh=12;
}
if(hhh>12)
{
    hhh=hhh-12;
    session = "PM";
}
// hhh = (hhh<12) ? "0"+hhh:hhh;
// mmm = (mmm<12) ? "0"+mmm:mmm;
// sss = (sss<10) ? "0"+sss:sss;
if(sss<10)
{
     let ss = document.getElementById('ss').innerHTML = "0" + sss;
}
if(sss>=10)
{
     let ss = document.getElementById('ss').innerHTML = sss;
     if(mmm<10)
     {
        let mm = document.getElementById('mm').innerHTML = "0" + mmm;
     }
     if(mmm>=10){
        let mm = document.getElementById('mm').innerHTML = mmm;
        if(hhh<10)
        {
            let hh = document.getElementById('hh').innerHTML = "0" + hhh;  
        }
        if(hhh>=10)
        {
            let hh = document.getElementById('hh').innerHTML = hhh;
        }
     }
}
// let mm = document.getElementById('mm').innerHTML = mmm;
let ses = document.querySelector('.session').innerHTML = session;
setInterval(currentTime,1000);
}
// currentTime();