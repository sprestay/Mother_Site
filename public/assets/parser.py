import os, sys
from PIL import Image

catalog = sys.argv[1]
if (catalog.lower().find("живопись") != -1):
    output = "jivopis"
elif (catalog.lower().find("дпи") != -1):
    output = 'dpi'
elif (catalog.lower().find("рисунок") != -1):
    output = "risunok"
elif (catalog.lower().find("польш") != -1):
    output = "poland"
elif (catalog.lower().find("словак") != -1):
    output = "slovak"
elif (catalog.lower().find("ярослав") != -1):
    output = 'yaroslavl'
else:
    output = "composition"

files = os.listdir("./" + catalog)

start = 0
result = []

for f in files:

    b = Image.open("./" + catalog + "/" + f)
    width, height = b.size
    b = b.resize((width // 2, height // 2))
    b.save("./" + catalog + "/" + f, quality=40,optimize=True)

    ind = f.find("$")

    if ind != -1:
        feat = 1
    else:
        feat = 0

    current = {
        "id": start,
        "name": " ".join((f[:ind] + f[ind + 1:]).split(".")[:-1]),
        "image": str(start) + "." + (f.split(".")[-1]),
        'width': str(width // 2),
        'height': str(height // 2),
        'featured': feat
    }
    os.rename('./' + catalog + "/" + f, './' + catalog + "/" + current['image'])
    start += 1
    result.append(current)
os.rename("./" + catalog, './' + output)
fd = open('../../../src/shared/data/' + output + '.js', 'w', encoding='utf-8')
fd.write("export const " + output.upper() + "=" + str(result))
fd.close()
print("OK!")

