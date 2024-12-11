let p = console.log;
/*
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.
*/

function fridayThe13ths(year){
  let count = 0

  for (let month = 1; month <=12; month ++){
    let newDate = new Date(`${year}-${month}-13`);
    let day = newDate.getDay()
    if(day === 5) count ++;
  }
return count;
}



p(fridayThe13ths(1986));      // 1
p(fridayThe13ths(2015));      // 3
p(fridayThe13ths(2017));      // 2