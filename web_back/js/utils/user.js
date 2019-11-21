
// 给user对象减负，让他里面的方法功能更纯粹，就是用来发请求，获取数据。并不用操作数据。
var user = {
  login : function (myName,myPassword,callback) {
    $.post(
      APIURLS.user_login, 
      {
        user_name:myName,
        password:myPassword
      },
      function (res) {
        callback(res);
      }
    )
  },
  logout : function (callback) {
    $.post(APIURLS.user_logout,function (res) {
      callback(res);
    });
  },
  getInfo : function (callback) {
    $.get(APIURLS.user_getInfo,function (res) {
      callback(res);
    });
  }




}