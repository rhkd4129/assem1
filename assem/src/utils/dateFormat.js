const makeLength2 = (val) => {
    return val.toString().length > 1 ? val.toString() : "0" + val.toString();
  };
  
  const dateFormat = (date, format) => {
    const target = new Date(date);
    const weekName = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    return format.replace(
      /(yyyy|yy|MM|dd|DD|E|e|hh|mm|ss|a\/p)/gi,
      function ($1) {
        switch ($1) {
          case "yyyy":
            return target.getFullYear();
          case "yy":
            return makeLength2(target.getFullYear() % 1000);
          case "MM":
            return makeLength2(target.getMonth() + 1);
          case "dd":
            return makeLength2(target.getDate());
          case "DD":
            return target.getDate();
          case "E":
            return weekName[target.getDay()];
          case "e":
            return weekName[target.getDay()].substring(0, 1);
          case "HH":
            return makeLength2(target.getHours());
          case "hh":
            return makeLength2(
              target.getHours() % 12 ? target.getHours() % 12 : 12
            );
          case "mm":
            return makeLength2(target.getMinutes());
          case "ss":
            return makeLength2(target.getSeconds());
          case "a/p":
            return target.getHours() < 12 ? "오전" : "오후";
          default:
            return $1;
        }
      }
    );
  };
  
  export default dateFormat;  