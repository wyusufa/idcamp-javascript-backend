import os
folder="struktur_data\\1_object"
for count, filename in enumerate(os.listdir(folder)):
    lama=f"{folder}/{filename}"
    update=f"code_{str(count)}.js"
    baru=f"{folder}/{update}"

    os.rename(lama,baru)