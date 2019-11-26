var article = {
  getDetail: function (id,callback) {
    $.get(APIURLS.article_show,{id:id},
      function (res) {
      callback(res);
    })
  },
  getFiveFocus: function (callback) {
    $.get(APIURLS.article_show,
      {
        perpage: 5, // 总显示的文章数
        state: '已发布'   // 文章状态
      },
      function (res) {
      callback(res);
    })
  }
}