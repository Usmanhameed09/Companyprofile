# Google Business Profile — Setup Kit for NMJ Shades

Claude cannot create this for you: it requires signing in to **your** Google
account and Google verifying that you really are the business (SMS, video call,
or postcard to the shop). It takes about 20 minutes plus verification wait.
Everything below is ready to copy-paste.

**Why this matters:** for searches like "مظلات سيارات الدمام" or
"car parking shades near me", the map results at the top come from Business
Profiles, not websites. This will do more for local ranking than anything in
this repository.

---

## Steps

1. Go to https://business.google.com and sign in with the Google account you
   want to own the listing (use a business account you won't lose access to).
2. "Add your business" → enter the name below.
3. Choose "Yes" for a location customers can visit, and enter the address.
4. Add the service areas listed below.
5. Category: set the primary and additional categories below.
6. Add phone + website.
7. Complete verification when Google asks (SMS or video are fastest).
8. After verification: fill in Description, Services, Hours, and upload photos.
9. Ask happy customers (ISG, contractors you work with) for Google reviews —
   reviews are the strongest local ranking factor you control.

---

## Copy-paste values

**Business name**
```
NMJ Shades | إن إم جيه للمظلات
```
(Google allows one name; use the bilingual form, or plain "NMJ Shades".)

**Primary category:** Awning supplier
**Additional categories:** Steel fabricator · Metal fabricator · Construction company

**Address**
```
Street 14, AlAdamah Tent Market, Dammam, Saudi Arabia
```

**Service areas**
```
Dammam, Khobar, Dhahran, Jubail, Riyadh, Al Ahsa, Ras Tanura, Ras Al Khair
```

**Phone:** +966 55 307 7471
**Website:** https://www.nmjshades.com

**Description (English, under 750 chars)**
```
NMJ Shades (Nabilah Mohammed Jameel Ali Bati Est.) designs, fabricates and
installs car parking shades, playground shades, PEB warehouses, warehouse
curtains, steel structures and tarpaulin covers across Saudi Arabia. Based in
Dammam since 2014, we have delivered projects for Saudi Aramco facilities,
Saudi Railways, the Royal Saudi Naval Forces, Almarai, Tamimi Group and
international schools including ISG and BISAK. HDPE Australian fabric,
galvanized steel, full fabrication and installation by one contractor.
Call +966 55 307 7471 for a free quote.
```

**Description (Arabic)**
```
إن إم جيه للمظلات (مؤسسة نبيلة محمد جميل علي باتي) — تصميم وتصنيع وتركيب
مظلات مواقف السيارات ومظلات المدارس والملاعب والمستودعات سابقة الهندسة
وستائر المستودعات والهياكل الحديدية وأغطية المشمع في جميع أنحاء المملكة.
مقرنا الدمام منذ 2014، ونفّذنا مشاريع لمنشآت أرامكو السعودية والخطوط
الحديدية السعودية والقوات البحرية الملكية السعودية والمراعي ومجموعة التميمي
ومدارس عالمية منها ISG وBISAK. قماش HDPE أسترالي وحديد مجلفن، تصنيع وتركيب
متكامل من مقاول واحد. اتصل 0553077471 لعرض سعر مجاني.
```

**Services to add** (each with its website link)
| Service | Link |
|---|---|
| Car Parking Shades — مظلات مواقف السيارات | https://www.nmjshades.com/services/car-parking-shades |
| Playground Shades — مظلات الملاعب والمدارس | https://www.nmjshades.com/services/playground-shades |
| PEB Warehouses — المستودعات سابقة الهندسة | https://www.nmjshades.com/services/peb-warehouses |
| Warehouse Curtains — ستائر المستودعات | https://www.nmjshades.com/services/warehouse-curtains |
| Steel Structures — الهياكل الحديدية | https://www.nmjshades.com/services/steel-structures |
| Tarpaulin Covers — أغطية المشمع | https://www.nmjshades.com/services/tarpaulin-covers |

**Photos to upload** (from `public/images/` — use the originals)
- Logo: your NMJ logo file (not in the repo — use your original)
- Cover: `carpark.jpeg` (Aramco parking shades at night)
- Work photos: `ras.jpeg`, `Bisak.png`, `n4.jpeg`, `tent.jpeg`, `rail.jpeg`,
  `isgdammam.jpeg`, `slfe.jpg`, `warehouse.jpeg` — Google listings with 10+
  real photos get significantly more calls.

---

## Also do: Google Search Console (10 minutes)

1. Go to https://search.google.com/search-console → "Add property" →
   Domain → `nmjshades.com`.
2. Google gives you a DNS TXT record — add it where your domain DNS is managed
   (or use the URL-prefix method and give Claude the HTML verification code to
   add to the site).
3. Once verified, submit the sitemap: `https://www.nmjshades.com/sitemap.xml`.
4. Within a few days you will see exactly which search terms show your site.
