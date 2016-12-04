import os
import time
cmd = '/home/pi/raspberry-remote/send 11111 4'
on = cmd + ' 1'
off = cmd + ' 0'
os.system(on)

