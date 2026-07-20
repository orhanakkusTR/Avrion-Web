# Avrion Service — Design Rules

Bu belge **her UI değişikliğinden önce** okunur ve uygulanır.
Kural ihlali varsa uygulama yapılmaz, önce düzeltilir.

---

## 1. Temel İlkeler (Değiştirilemez)

| İlke | Açıklama |
|------|----------|
| **Okunabilirlik önce gelir** | Hiçbir estetik karar okunabilirliği feda etmez |
| **Hiyerarşi net olmalı** | Kullanıcı 3 saniyede en önemli şeyi bulabilmeli |
| **Renk anlam taşır** | Renk yalnızca görsellik için değil, bilgi iletmek için kullanılır |
| **Boşluk içerik kadar önemlidir** | Sıkışık layout profesyonellik öldürür |
| **Tutarlılık güven verir** | Aynı eleman her yerde aynı görünür |

---

## 2. Tipografi Kuralları

### Boyut Hiyerarşisi

```
H1  → text-4xl lg:text-5xl  font-extrabold  (sayfa başlığı, 1 adet)
H2  → text-3xl               font-bold       (bölüm başlığı)
H3  → text-xl                font-bold       (kart/alt başlık)
H4  → text-lg                font-semibold   (vurgulu satır)
P   → text-base              font-normal     (ana içerik)
sm  → text-sm                               (ikincil bilgi)
xs  → text-xs                               (meta, etiket, tarih)
```

### Ağırlık Kuralları

- **font-extrabold** → yalnızca H1 ve hero başlıkları
- **font-bold** → H2, H3, kart başlıkları, CTA buton metinleri
- **font-semibold** → H4, etiketler, fiyatlar, önemli vurgular
- **font-medium** → navigasyon linkleri, liste başlıkları
- **font-normal** → paragraf içeriği, açıklamalar

### Okunabilirlik Kuralları

- Satır uzunluğu max `max-w-3xl` (≈75 karakter) — daha geniş göz yorar
- Paragraf `leading-relaxed` (1.625) — asla `leading-tight` uzun metinde
- Açık arka plan üzerinde koyu metin: minimum `text-slate-700` (slate-500 ve altı yasak)
- Koyu arka plan üzerinde açık metin: minimum `text-white/80` (white/60 ve altı yasak)
- İtalik yalnızca alıntı ve özel terimler için; genel vurgu için kullanılmaz

---

## 3. Renk Kullanım Kuralları

### Token → Anlam Eşlemesi

| Token | Hex | Kullanım |
|-------|-----|---------|
| `navy-950` | #0a1b3d | Header, footer, hero arka planı |
| `navy-900` | #0e2247 | İç sayfa hero, koyu bölümler |
| `brand` | #1d4fa3 | Birincil CTA, aktif link, ikon vurgu |
| `brand-600` | #1e5bb8 | Hover state (brand üzeri) |
| `accent` | #2563eb | İkincil vurgu, badge |
| `alert` | #dc2626 | Hata, uyarı, kritik bilgi, zorunlu alan |
| `alert-bg` | #fef2f2 | Hata/uyarı kutusu arka planı |
| `highlight` | #f59e0b | Öne çıkan fiyat, promosyon, yeni |
| `highlight-bg` | #fffbeb | Öne çıkan içerik kutusu arka planı |
| `success` | #16a34a | Onay, tamamlandı, garanti |
| `success-bg` | #f0fdf4 | Onay kutusu arka planı |
| `star` | #fbbf24 | Yalnızca yıldız derecelendirmesi |

### Ne Zaman Hangi Renk?

**`alert` (kırmızı) kullan:**
- Form hata mesajları
- "Sınırlı stok", "Bugün son gün" gibi aciliyet yaratan ibareler
- Zorunlu alan işaretleri
- Dikkat gerektiren uyarı kutuları

**`highlight` (amber/sarı) kullan:**
- "En çok tercih edilen" etiketi
- İndirim veya promosyon badgeleri
- "Yeni" veya "Öne Çıkan" etiketleri
- Önemli ama acil olmayan vurgular

**`success` (yeşil) kullan:**
- Checklist öğeleri (dahil olanlar)
- Form gönderim başarısı
- Garanti ve kalite güvencesi
- Tamamlanmış adımlar

**`brand` (mavi) kullan:**
- Tüm CTA butonları
- Aktif navigasyon öğesi
- Linkler ve interaktif öğeler
- İkon rengi (koyu arka plan dışında)

---

## 4. Boşluk ve Düzen Kuralları

### Bölüm İç Boşluğu (Section Padding)

```
Büyük bölüm (hero, CTA)    → py-24
Normal bölüm               → py-16 md:py-24
Kompakt bölüm              → py-12
İç sayfa hero              → pt-24 pb-16
```

### Eleman Arası Boşluk

```
Bölüm başlığı → içerik        → mb-10 lg:mb-14
Kart başlığı → metin           → mb-3
Metin bloğu → sonraki blok     → mb-6
Liste öğeleri                  → space-y-3
Grid kartları                  → gap-6 lg:gap-8
```

### Grid Kuralları

- 1 kart → tam genişlik (`w-full`)
- 2 kart → `grid-cols-1 md:grid-cols-2`
- 3 kart → `grid-cols-1 md:grid-cols-3`
- 4 kart → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- 5+ öğe → liste veya carousel tercih edilir

---

## 5. Buton Kuralları

### Hiyerarşi

```
Primary   → bg-brand text-white          (sayfa başına 1 adet, ana aksiyon)
Secondary → border border-brand text-brand (tamamlayıcı aksiyon)
Dark      → bg-white/10 text-white border  (koyu arka plan üzeri)
Danger    → bg-alert text-white           (silme, iptal — yalnızca onaylı aksiyon)
Ghost     → text-brand hover:underline    (navigasyon, "Daha fazla oku")
```

### Boyut

```
Büyük CTA  → px-6 py-3.5 text-base font-semibold (hero butonları)
Normal     → px-5 py-3   text-sm   font-medium
Küçük      → px-4 py-2   text-sm   font-medium  (kart içi)
```

### Kurallar

- Aynı satırda 3'ten fazla buton olmaz
- Primary buton her sayfada en fazla 2 adet
- İkon + metin kombinasyonu tercih edilir (ikonlar `size={16-18}`)
- Hover state her butonda zorunlu

---

## 6. Kart Tasarımı Kuralları

```
Standart kart:
  rounded-2xl
  border border-slate-200
  bg-white
  shadow-sm hover:shadow-md
  transition-shadow
  overflow-hidden (görsel varsa)
```

- Kart içi padding: `p-6`
- Kart görsel yüksekliği: `h-48` (liste), `h-64` (öne çıkan)
- Her kartın bir birincil aksiyonu (link/buton) olmalı
- Kart hover'ı hafif (`shadow-md` veya `border-brand`) — abartılı transform yok

---

## 7. Görsel Hiyerarşi — Pre-Implementation Kontrol Listesi

Her yeni bölüm veya değişiklik öncesi şu soruları yanıtla:

### 📋 Okunabilirlik Kontrolü
- [ ] H1 sayfada tek mi?
- [ ] Metin rengi contrast oranı yeterli mi? (koyu/açık kural)
- [ ] Paragraf satır uzunluğu max-w-3xl içinde mi?
- [ ] leading-relaxed kullanılıyor mu?

### 🎨 Renk Kontrolü
- [ ] Kullanılan her renk token'dan mı geliyor? (ham hex yok)
- [ ] `alert` rengi gerçekten acil/hata için mi kullanılıyor?
- [ ] `highlight` rengi gerçekten vurgulamak için mi?
- [ ] Koyu arka plan üzerinde metin en az `white/80` mi?

### 📐 Düzen Kontrolü
- [ ] Bölüm padding'i kurallara uygun mu?
- [ ] Grid sütun sayısı içerik miktarıyla orantılı mı?
- [ ] Mobil (375px) tasarım önce yapıldı mı?
- [ ] Container `max-w-7xl mx-auto` ile sınırlandı mı?

### ⚡ Vurgu Kontrolü
- [ ] Sayfanın en önemli aksiyonu net görünüyor mu?
- [ ] Primary CTA sayfa başında 2'den az mı?
- [ ] Öne çıkarılan alan görsel hiyerarşide diğerlerinden ayrışıyor mu?
- [ ] Vurgu için gereksiz `bold` kullanıldı mı? (her şey bold = hiçbir şey bold)

### ♿ Erişilebilirlik Kontrolü
- [ ] Tüm görsellerde `alt` metni var mı?
- [ ] İnteraktif öğelerde `focus-visible` ring var mı?
- [ ] Butonlarda `aria-hidden` ikonlar için eklendi mi?
- [ ] Form alanlarında `label` eşleşmesi var mı?

---

## 8. Bölüm Arka Plan Sıralaması (Zebra Pattern)

Sayfalar boyunca arka planlar ritim yaratmalı:

```
bg-white        → bg-slate-50  → bg-white  → bg-navy-950 (CTA)
bg-navy-950/900 → bg-white     → bg-slate-50 → ...
```

- İki ardışık `bg-white` bölüm yan yana gelemez
- İki ardışık `bg-navy` bölüm yan yana gelemez (footer hariç)
- Her sayfa `bg-navy-950` CTA banner ile kapanır

---

## 9. Responsive Tasarım Kuralları

```
Mobil önce (375px)  → sm: (640px)  → md: (768px)  → lg: (1024px)  → xl: (1280px)
```

- Grid her zaman `grid-cols-1` ile başlar
- `hidden lg:flex` navigasyon — `lg:hidden` mobil menü
- Hero min-yükseklik: mobilde `min-h-[75vh]`, masaüstünde `min-h-[85vh]`
- Font boyutları: mobilde `text-4xl`, masaüstünde `lg:text-5xl lg:text-6xl`

---

## 10. Yasak Listesi

❌ Ham hex renk (`#0b1f3f` gibi) — token kullan  
❌ `text-slate-400` veya altı açık arka planda  
❌ `text-white/60` veya altı koyu arka planda  
❌ `leading-tight` uzun metin bloklarında  
❌ Aynı sayfada 3'ten fazla farklı font boyutu karışımı  
❌ Boşluksuz, nefes almayan layout (`p-0`, `gap-0` section düzeyinde)  
❌ Animasyon kütüphanesi (Framer Motion vb.) — CSS transition yeterli  
❌ İkon olmadan yalnızca buton metni (hero CTAlar için)  
❌ `max-w` kısıtlaması olmayan uzun metin paragrafları  
❌ Görselsiz placeholder div (üretim kodunda)
