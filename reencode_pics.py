import base64
import os
from io import BytesIO
from PIL import Image

pics_dir = 'pics'
pic_files = [
    '01_eva_lin小.jpeg',
    '02_luka_weiss小.jpeg',
    '03_luna_qiao小.jpeg',
    '04_adrian_park.小.jpeg',
    '05_nora_feld小.jpeg',
    '06_min_seo小.jpeg',
    '07_rafael_moreno小.jpeg',
    '08_yuki_ahn小.jpeg',
    '09_sienna_cole小.jpeg',
    '10_kenji_mori.小.jpeg',
    '11_camille_renard小.jpeg',
    '12_theo_zhang小.jpeg',
]

result = []
for f in pic_files:
    path = os.path.join(pics_dir, f)
    print(f'Processing {f}...')
    img = Image.open(path)
    buf = BytesIO()
    img.save(buf, format='JPEG', quality=60, optimize=True)
    buf.seek(0)
    encoded = base64.b64encode(buf.read()).decode('utf-8')
    result.append(f'data:image/jpeg;base64,{encoded}')

with open('base64_compressed.txt', 'w') as out:
    out.write('\n'.join(result))

print('Done!')
total_size = sum(len(line) for line in result)
print(f'Total size: {total_size / 1024 / 1024:.2f} MB')
