var category = {
  show: function (callback) {
    $.get(APIURLS.category_show,function (res) {
      callback(res);
    });
  },
  del: function (id,callback) {
    $.post(APIURLS.category_del, {id:id}, function (res) {
      callback(res);
    });
  },
  edit: function (id,name,slug,callback) {
    $.post(APIURLS.category_edit,{id:id,name:name,slug:slug},function (res) {
      callback(res);
    })
  }

};