var article = {
  show: function (curPage,type,state,callback) {
    $.get(APIURLS.article_show,{page:curPage,type:type,state:state},function (res) {
      callback(res);
    });
  },
  del: function (id,callback) {
    $.get(APIURLS.article_del,{id:id},function (res) {
      callback(res);
    })
  },
  add: function (fd,callback) {
    // 因为请求方式是formdata，所以不能用$get()或者$post()方式了。要用$.ajax();
    $.ajax({
      url: APIURLS.article_add,
      type: 'post',
      data: fd,
      processData: false,  // 不要让jquery自动去处理formdata数据
      contentType: false,   // 不要让jqeury自动去设置请求头
      success: function (res) {
        callback(res);
      }
    })
  },
  edit: function (fd,callback) {
    $.ajax({
      url: APIURLS.article_edit,
      type: 'post',
      data: fd,
      processData: false,  // 不要让jquery自动去处理formdata数据
      contentType: false,   // 不要让jqeury自动去设置请求头
      success: function (res) {
        callback(res);
      }
    })
  },
  getDetail: function (id,callback) {
    $.get(APIURLS.article_show,{id:id},
      function (res) {
      callback(res);
    })
  },
}