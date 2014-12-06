Web Application Security Challenge
======================

<b>Challenge:</b>

I was given a link to a website. When visiting the website there was a button at the top that read "Generate Key", a textfield labeled "Message", and a button underneath the textfield labeled "Send Message". Upon clicking "Generate Key", I was redirected to another page that read "Only an admin can generate keys. Message an admin below." After filling out the textfield and clicking "Send Message", it says "Message successfully sent." 

<b>Initial Thoughts & Ideas</b>

1. Ask the admin nicely for the key
2. XSS (Session/cookie hijacking)
3. CSRF  
4. SQL Injection. 
	(A) Steal key from the database or
	(B) Steal admin creditials from the database
5. Proxy everything through Burp Suit

<b>Dead Ends: </b>

1. What does the admin's page look like? How do I know how to craft an XSS attack.
2. After forcing the admin to generate a key through XSS, I didn't know how to exfiltrate the key. The key is given to the admin on a differnt page so synchronous javascript execution haults.  
3. Stealing the admin's session cookie and nonce value and sending those with my generate key request caused an internal server error.
4. The application crashed (unrelated to my attack) so it stopped sending me any feedback. Eventually I emailed the CTF organizer and got the web application rebooted.

<b>Solution: </b>

<i>File on my server: post.php</i>

<i>XSS attackes: xss.js</i>

1. I created a PHP file to capture the headers and body of a post request and uploaded this to my server.
2. (xxs.js 1) I then used XSS to modity the key generation form's action to send its POST to my PHP file on my server. Then the XSS submitted the form. Now I had the entire request stored in a file.
3. (xxs.js 2) After that I crafted another XSS attack to test if I could attach an image to the admin's page with javascript and it would request the image (that did not actually exist) from my server. This technique worked, and the request was logged in my servers 'error.log' file.
4. (xxs.js 3) Now I crafting a third XSS attack. This one used AJAX to execute javascript asynchronously. First, it sent the request for a key to be generated, and then captured the response. It then appended the response to my server's URL, and generated an 'image' with this URL. 
5. I checked my 'error.log' file and the key was appened to the URL in the most recent error message.   

