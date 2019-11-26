var category = {
  show: function (callback) {
    $.get(APIURLS.category_show,function (res) {
      callback(res);
    });
  }
};