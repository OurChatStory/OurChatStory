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
dark_base_export_path = "./public/static/dark/"

for i in range(len(onlyfiles)):


    if onlyfiles[i].endswith(".svg"):
        continue

    if onlyfiles[i] == "blur" or onlyfiles[i] == "dark":
        continue

    print(onlyfiles[i])

    # load the input image and display it to our screen
    image = cv2.imread(mypath + onlyfiles[i])

    # gaussian blur the image a lot like a lott
    blurred = cv2.GaussianBlur(image, (101, 101), 0)

    # decrease exposure
    dark_blurred = cv2.addWeighted(blurred, 0.5, blurred, 0, 0)

    # convert to webp
    cv2.imwrite(
        base_export_path + onlyfiles[i], blurred, [cv2.IMWRITE_WEBP_QUALITY, 100]
    )

    cv2.imwrite(
        dark_base_export_path + onlyfiles[i], dark_blurred, [cv2.IMWRITE_WEBP_QUALITY, 100]
    )
