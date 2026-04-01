import base64
import os
from io import BytesIO
from PIL import Image

pics_dir = 'pics'
pic_files = [
    '01_eva_lin.png',
    '02_luka_weiss.png',
    '03_luna_qiao.png',
    '04_adrian_park..png',
    '05_nora_feld.png',
    '06_min_seo.png',
    '07_rafael_moreno.png',
    '08_yuki_ahn.png',
    '09_sienna_cole.png',
    '10_kenji_mori..png',
    '11_camille_renard.png',
    '12_theo_zhang.png',
]

result = []
for f in pic_files:
    path = os.path.join(pics_dir, f)
    print(f'Processing {f}...')
    img = Image.open(path)
    buf = BytesIO()
    img.save(buf, format='PNG', optimize=True, quality=40)
    buf.seek(0)
    encoded = base64.b64encode(buf.read()).decode('utf-8')
    result.append(f'data:image/png;base64,{encoded}')

with open('base64_compressed.txt', 'w') as out:
    out.write('\n'.join(result))

print('Done!')
total_size = sum(len(line) for line in result)
print(f'Total size: {total_size / 1024 / 1024:.2f} MB')
