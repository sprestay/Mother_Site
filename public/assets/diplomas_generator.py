import os, sys
from PIL import Image

catalog = sys.argv[1]
if(catalog.lower().find("Диплом") != 1):
    output = "diplomas"
else:
    print("Only diplomas converter!")
    exit()

files = os.listdir("./" + catalog)

start = 0
result = []

for f in files:
    b = Image.open('./' + catalog + "/" + f)
    width, height = b.size
    if (width >= 1500):
        new_width, new_height = width // 4, height // 4
    else:
        new_width, new_height = width // 2, height // 2
    b = b.resize((new_width, new_height))
    b.save("./" + catalog + "/" + f, quality=25, optimize=True)

    current = {
        "id": start,
        "src": str(start) + "." + (f.split(".")[-1]),
        "width": new_width,
        "height": new_height,
    }

    os.rename('./' + catalog + "/" + f, './' + catalog + "/" + current['src'])
    start += 1
    result.append(current)

os.rename("./" + catalog, './' + output)
fd = open('../../../src/shared/data/' + output + '.js', 'w', encoding='utf-8')
fd.write("export const " + output.upper() + "=" + str(result))
fd.close()
print("OK!")