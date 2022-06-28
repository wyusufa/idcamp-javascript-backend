import os
folder="oop\\object_composition"
for count, filename in enumerate(os.listdir(folder)):
    lama=f"{folder}/{filename}"
    update=f"code_{str(count)}.js"
    baru=f"{folder}/{update}"

    os.rename(lama,baru)