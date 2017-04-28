
const ageFilter = (id) => {
    if (id  && !(id.length == 18 || id.length == 15)) return ''
      var myDate = new Date();
      var month = myDate.getMonth() + 1;
      var day = myDate.getDate();
      var age = myDate.getFullYear() - id.substring(6, 10) - 1;
        if (id.substring(10, 12) < month || id.substring(10, 12) == month && id.substring(12, 14) <= day) {
            age++;
        }
  return age;
}

const timeFilter  = function(time, format){ 
            if(!time) return '未知时间'; 
          var t = new Date(time);  
          var tf = function(i){return (i < 10 ? '0' : '') + i};  
          if(!format) format = 'yyyy/MM/dd'
          return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){  
              switch(a){  
                  case 'yyyy':  
                      return tf(t.getFullYear());  
                      break;  
                  case 'MM':  
                      return tf(t.getMonth() + 1);  
                      break;  
                  case 'mm':  
                      return tf(t.getMinutes());  
                      break;  
                  case 'dd':  
                      return tf(t.getDate());  
                      break;  
                  case 'HH':  
                      return tf(t.getHours());  
                      break;  
                  case 'ss':  
                      return tf(t.getSeconds());  
                      break;  
              }  
          })  
      }; 
export default {
    ageFilter,
    timeFilter
}