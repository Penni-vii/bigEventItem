// 定义一个全局变量，用来保存请求的地址。
var qingqiuUrl = 'http://localhost:8000';

// 给user对象减负，让他里面的方法功能更纯粹，就是用来发请求，获取数据。并不用操作数据。
var user = {
  login : function (myName,myPassword,callback) {
    $.post(
      qingqiuUrl + '/admin/login', 
      {
        user_name:myName,
        password:myPassword
      },
      function (res) {
        // console.log(res);
        callback(res);
      }
    )
  },
  logout : function (callback) {
    $.post(qingqiuUrl + '/admin/logout',function (res) {
      callback(res);
    });
  },
  getInfo : function (callback) {
    $.get(qingqiuUrl + '/admin/getuser',function (res) {
      // console.log(res);
      callback(res);

    });
  }




}