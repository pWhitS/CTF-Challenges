Scripting Challenge
==============

<b>Challenge:</b>

I was given an ip address and port number to connect to an application on a remote server. Using netcat to connect to the server it returned a message 'Decode these and tell me what they say' and a 800 - 1000 byte string. After waiting for about 1 second it output 'too slow' or after entering some characters it output 'nope'. Upon further inspection, after decodeing and returning the solution, the application sends you another string to decode, and this seems to go on indefinetly. 

		~$ nc 123.456.78.910 1234
		Decode these and tell me what they say
		iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyAQAAAADAX2ykAAACfklEQVR4nO2bQW6kMBBFXw1IvTRSDtBHgZvN1fBR+gCRYNmS0Z+FDXQyM+qJhpBYqlqgbniLL5XK5foGEx+J+ONDODjvvPPOO++883/jrUQL0cyAxcy6xWBenw0n6nH+YL6XJE1ArwTQSLpdZAONJElv+c/W4/zB/Fwq1AYa2TC32BBSfpYL+1w9zh/Dt+9vRGuSIEHsJsR8rh7nP5nvpyX3W+m2dd0v1OP8IXyQNALEa/llw3pPUjpbj/OH8tHMzDqgv7XYz6kRzC02UMr5XD3OH8SjtwE0gpCQpkbvY/xu+p3/F96Gucy/ZUi6tRAf5l/fP1fOB0ljSJhd7wYhYT8lETug1939jTr5XJiK3WsLGIrDpSzSsZuA8NrC/OL+Rp187r/Fv1LKThb91JQLNNIYvP9Wypf8Eras7nupoN92Wp7fyvitfhMaQyIPvCOsWV1znhPv+a2MX+sX0Mi+KrOmOyTop3WO8vxWxj/W7zb/5tRqgvx3a8ye39r4Nb9Ts3qR03oZgdx/R7x+K+W3/VViN6GL4RxU+i/B67dSvhhT/bgg5jbZ9kTMbYJwNwE+/1bPm13vpjGf71+Uz/ejrYcMw9l6nD+A34zlRsZ8kREmBAlFa0o5R9sK+Lvpd/5J/On8qExK7+ws778V8rl+167bJDF3+f1JRWtkzC97Ez5Bj/OfwmdXcirv1+2uRtlYn67H+YP4bf6FYl2FkunsSb/lfH2unu8nMLsmpFubJ+HdwqxAv/PP+KV049gB0S4qXzJ8lR7n/4Nf56MgYAaVWWiBXoup12KP/HfT7/yTeFx89/OjvL/aJiU//62VNz1nHsK/73beeeedd975A/hfrW/0owyyPkUAAAAASUVORK5CYII=
		Too slow

<b>Initial Thoughts: </b>

1. Hashed Strings (md5, sha1, sha1, etc...)
2. Encoded Strings (Hex, base64, etc...)
3. Weak Encryption 

<b>Solution:</b>

<i>The script I used to complete the challenge is in this repository: scripting.py</i>

1. The string is base64 encoded. 
2. The decoded string describes a PNG image that when constructed is a QR code.
3. The pyqrcode library was downloaded and included in the scrupt to decode the QR codes. After decoding it was an 32 byte string. 
4. Sending this string to the application caused it to give you another encode string.
5. Continue the process of decoding the base64 string, turning it into a QR code PNG, decoding the QR code, and sending the result to the application.
6. After solving some number of challenges, the application sends the CTF key.


