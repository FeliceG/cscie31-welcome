var h=require('http');
h.get('http://www.google.com/', 
  function(r){
    r.setEncoding('utf8')  
    r.on('data', function(d){
      console.log(d);
    });
});

