Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();
Days = Data.getDay();
Dni = Data.getDay();


switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}
switch(Days)
{
    case 0: fDays="воскресенье"; break;
    case 1: fDays="понедельник"; break;
    case 2: fDays="вторник"; break;
    case 3: fDays="среда"; break;
    case 4: fDays="четверг"; break;
    case 5: fDays="пятница"; break;
    case 6: fDays="суббота"; break;
}
switch(Dni)
{
    case 0: fDni="музей работает"; break;
    case 1: fDni="музей не работает"; break;
    case 2: fDni="музей не работает"; break;
    case 3: fDni="музей не работает"; break;
    case 4: fDni="музей не работает"; break;
    case 5: fDni="музей работает"; break;
    case 6: fDni="музей работает"; break;
}
document.getElementById("data").innerHTML = ("Сегодня "+ fDays+ " " + Day + " " + fMonth + " " + Year + " года" + "<br/>" + "И сегодня "+ fDni);
