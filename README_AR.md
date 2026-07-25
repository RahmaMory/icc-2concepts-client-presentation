# ICC Client Presentation — دليل الاستخدام

هذا مشروع جديد بالكامل مبني بـ React + TypeScript + Vite.

## ما الذي تم تنفيذه؟

- نسخة مستقلة لعميل واحد في كل مرة.
- لا يوجد Navbar تقليدي.
- عند فتح الصفحة يظهر لوجو ICC كبيرًا في المنتصف، ثم يتحرك ناحية أعلى اليسار ويظهر الهيدر الصغير.
- الصفحة الرئيسية قصيرة وتحتوي على 3 اختيارات فقط:
  1. العرض والسعر ومدة التسليم.
  2. رابط الموقع الجاهز الذي أرسله المصمم.
  3. Related Digital Experiences.
- المشاريع المشابهة ليست موجودة في الصفحة الرئيسية؛ الضغط على الكارت يفتح صفحة React داخلية `/related` بدون Reload.
- كل مشروع مشابه يفتح في Viewer داخلي داخل نفس الموقع باستخدام iframe.
- العرض Gamma أو PDF والموقع الأساسي يفتحان أيضًا داخل Viewer داخلي.
- يوجد زر Open directly كحل احتياطي لو الموقع الخارجي يمنع iframe.
- Footer بسيط مع لوجو ICC والسوشيال وPrivacy وTerms.
- متجاوب مع الموبايل والتابلت والكمبيوتر.

## أهم ملف: غيري هذا الملف فقط لكل عميل

```text
src/data/client.ts
```

داخله غيري:

- `clientName`: اسم العميل.
- `industry`: مجال العميل.
- `headline` و `intro`: النصوص المختصرة.
- `accent` و `accentRgb`: لون الثيم.
- `proposal.url`: رابط Gamma Embed أو `/proposal.pdf`.
- `proposal.price`: السعر.
- `proposal.delivery`: مدة التسليم.
- `mainDemo.url`: رابط Vercel الذي يرسله المصمم.
- `mainDemo.image`: Screenshot الموقع.
- `related`: أسماء وروابط وصور المواقع المشابهة.
- `companyWebsite` والسوشيال: روابط ICC الصحيحة.

## الصور

ضعي الصور داخل:

```text
public/assets/projects/
```

ثم استخدمي مسارًا مثل:

```ts
image: "/assets/projects/restaurant-demo.webp"
```

## إضافة PDF

ضعي الملف هنا:

```text
public/proposal.pdf
```

ثم اكتبي في `client.ts`:

```ts
url: "/proposal.pdf"
```

## رابط Gamma

من Gamma خذي رابط Embed، ثم ضعيه في:

```ts
proposal: {
  url: "https://gamma.app/embed/..."
}
```

## التشغيل

```bash
npm install
npm run dev
```

## الفحص والبناء

```bash
npm run typecheck
npm run build
```

## النشر على Vercel

ارفعي المجلد على GitHub ثم Import من Vercel، أو:

```bash
npx vercel
npx vercel --prod
```

ملف `vercel.json` موجود حتى تعمل Routes مثل `/related` بعد Refresh بدون 404.

## عمل نسخة لعميل جديد

1. احتفظي بنسخة أصلية باسم `icc-client-template`.
2. انسخي المجلد وسمّيه باسم العميل، مثل `icc-client-burger-zone`.
3. غيري `src/data/client.ts`.
4. استبدلي الصور داخل `public/assets/projects`.
5. شغلي واختبري.
6. ارفعي النسخة كمشروع Vercel مستقل.

## ملاحظة مهمة عن iframe

بعض المواقع تضيف حماية تمنع عرضها داخل iframe (`X-Frame-Options` أو `frame-ancestors`). لذلك أضفت زر **Open directly** تلقائيًا في كل صفحة Viewer. لو أنتِ متحكمة في موقع Vercel الجاهز، خلي المطور يسمح بفتحه داخل دومين صفحة العرض.

## ملاحظة TypeScript
المشروع يحتوي على `src/vite-env.d.ts` لتعريف استيراد ملفات CSS داخل TypeScript، وأيقونات السوشيال ميديا مرسومة داخل المشروع بدل الاعتماد على Brand Icons غير الموجودة في Lucide.
