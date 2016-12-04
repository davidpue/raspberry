import os
import time
cmd = '/home/pi/raspberry-remote/send '
on = cmd + ' 1 1'
off = cmd + ' 0'

for i in range(32):
	toexec = cmd + '{0:05b}'.format(i) + ' 1 1'
	print toexec
	os.system(toexec)


#os.system(off)

