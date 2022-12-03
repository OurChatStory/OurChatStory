import cv2
import numpy as np

# get a list of files in a folder
import os
from os import listdir
from os.path import isfile, join

# get a list of files in a folder
mypath = "./public/static/"
onlyfiles = listdir(mypath)
base_export_path = "./public/static/blur/"

for i in range(len(onlyfiles)):

    print(onlyfiles[i])

    if onlyfiles[i].endswith(".svg"):
        continue

    if onlyfiles[i] == "blur":
        continue

    # load the input image and display it to our screen
    image = cv2.imread(mypath + onlyfiles[i])

    # gaussian blur the image a lot
    blurred = cv2.GaussianBlur(image, (51, 51), 0)

    # decrease exposure
    blurred = cv2.addWeighted(blurred, 0.5, blurred, 0, 0)

    # convert to webp
    cv2.imwrite(base_export_path + onlyfiles[i], blurred, [cv2.IMWRITE_WEBP_QUALITY, 100])

    # # write the image to disk
    # cv2.imwrite(base_export_path + onlyfiles[i], blurred)



