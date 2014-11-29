import sys, qrcode
import socket
import time
import os

IP_ADDR = '' #excluded
PORT_NUM = '' #excluded

s = socket.socket()
s.connect((IP_ADDR, PORT_NUM))

while (1):
	data = s.recv(0x400)
	time.sleep(.2) #wait for all data to be received
	
	if (len(data) < 100): #Found the key was under 100 bytes
		break

	code = data.split("\n")
	if (code[0][:5] == 'iVBOR'): #check for intro message
		codeStr = code[0]
	else:
		codeStr = code[1]

	ofl = open("qrcode.png", "wb")
	ofl.write(codeStr.decode('base64'))
	ofl.close()

	d = qrcode.Decoder()
	if d.decode("qrcode.png"):
		decodeStr = d.result

	print decodeStr

	os.remove('qrcode.png')
	s.send(decodeStr.strip())

print data #This will be the key


