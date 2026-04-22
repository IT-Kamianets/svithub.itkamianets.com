import urllib.request
import re

url = "https://planetofhotels.com/ukraine/kamenets-podol-skiy/svit-hub"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'href="(https://[^"]+\.jpg)"', html)
    print("Images:")
    for img in set(images):
        print(img)
except Exception as e:
    print(e)
