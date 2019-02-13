#!/usr/bin/env python
# coding: utf-8

# from scipy import misc
import imageio
from PIL import Image
import os, sys

########################################## How to use ############################################
## 1. pip install imageio
## 2. python convert_color.py <file_name> <output_name> R G B
##    ex) python convert_color.py E:/iTaxi/src/assets/img/empty_data.png output_name.png 63 137 201  (At Windows) 
##    if you use it at Linux, you should consider about path problem such as  '\' or '\\'
## Created by Yang Jin Hyeok (CRA President)
################################################################################################## 

def convert_color(img_path, output_name, rgb):
	assert os.path.exists(img_path), 'File does not exist'
	img = imageio.imread(img_path)
	print('File size: {}'.format(img.shape))
	r, g, b = rgb
	mask = img[:, :, 3]!=0
	img[:,:,0][mask] = r
	img[:,:,1][mask] = g
	img[:,:,2][mask] = b
	Image.fromarray(img).save(output_name)
	print('Completed. Check' + output_name)

if __name__ == '__main__':
	assert len(sys.argv) == 6
	fname = sys.argv[1]
	oname = sys.argv[2]
	rgb = (sys.argv[3], sys.argv[4], sys.argv[5])
	convert_color(fname, oname, rgb)