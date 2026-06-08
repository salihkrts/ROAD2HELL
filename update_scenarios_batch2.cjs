const fs = require('fs');
const path = require('path');

const NEW_SCENARIOS = {
  day6: [
    {
      id: "d6_demir",
      name: "Albay Demir",
      role: "soldier",
      type: "professional",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Disiplin! Sektör-7'de disiplin laçkalaşmış! Duvarlar zayıf, nöbetçilerin gözleri açık ama zihinleri uyuyor. Ordunun son onurunu kurtarmaya geldim.", 
          choices: [
            { text: "Siz kimsiniz Albayım? Yetki belgeleriniz nerede?", nextNode: "ask_id" },
            { text: "Bize ne yapacağımızı mı öğreteceksiniz?", nextNode: "ask_orders" }
          ] 
        },
        "ask_id": { 
          text: "12. Özel Alay'dan Albay Demir. Sektör-5 düştüğünde oradaydım. Şimdi burayı gerçek bir kaleye çevireceğiz. Belgelerim bu üniformadır asker!", 
          choices: [{ text: "Pekala Albayım. Karar zamanı.", nextNode: "decision_ready" }] 
        },
        "ask_orders": { 
          text: "Hayır evlat. Size hayatta kalmayı öğreteceğim. Sisle savaşamazsın, sadece onun nefes almasına izin vermezsin.", 
          choices: [{ text: "Hazırlanın, karar veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Beni içeri alın, Sektör-7'yi gerçek bir kaleye dönüştürelim. Yoksa hepimiz bu gri tozun içinde boğulacağız.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Albay sert adımlarla içeri girer. Güvenlik protokollerini hemen denetlemeye başlar.", effect: { safety: +35, morale: -10 } },
        arrest: { text: "Hücrede bile sert duruşunu bozmuyor. 'Zaman harcıyorsunuz!' diye bağırır.", effect: { safety: +15, morale: -5 } },
        deny: { text: "Sana tiksinerek bakıp sisin içine, eski birliğinin izlerini aramaya gider.", effect: { safety: +10, morale: -2 } },
        shoot: { text: "Ordunun son onuru da burada can verdi. Artık gerçek bir kaos başlayabilir.", effect: { safety: +5, morale: -35 } }
      },
      image: "/src/assets/characters/general.png"
    },
    {
      id: "d6_kaan",
      name: "Kaan",
      role: "spy",
      type: "suspicious",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Sektör-8 ve 9'dan haber getirdim... Onlar artık sisin uşağı oldular. Yarın buraya saldırmayı planlıyorlar. Bilgilerim hayatınızı kurtarabilir.", 
          choices: [
            { text: "Uşak mı? Sisle mi işbirliği yapıyorlar?", nextNode: "ask_servants" },
            { text: "Buna neden inanmalıyız Kaan?", nextNode: "ask_proof" }
          ] 
        },
        "ask_servants": { 
          text: "Sisin içinde nefes alabilen 'yeni insanlar' ordusu kurmuşlar. Sektör-7'yi istiyorlar çünkü burası hala 'insan' kokuyor.", 
          choices: [{ text: "Karar zamanı, hazırlan.", nextNode: "decision_ready" }] 
        },
        "ask_proof": { 
          text: "Bak! [Cebinden armalı bir üniforma parçası çıkarır, üzeri gri parlak lekelerle dolu] Bu Sektör-8 komutanınındı. Artık bir mutant.", 
          choices: [{ text: "Pekala, bu durum ciddi. Karar veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "İçeri almazsanız yarın çok geç olacak. Onlar sessizce, rüzgarla geliyorlar.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Korku içinde içeri girer. Getirdiği haberler halkı paniğe sürükler.", effect: { safety: -15, morale: -20 } },
        arrest: { text: "Sorgulanmak üzere derin hücrelere alınır. Bilgiler teyit edilir.", effect: { safety: +25, morale: -10 } },
        deny: { text: "Kapının önünde bağırarak beklemeye başlar. 'Öleceksiniz!' diye sesi sisten duyulur.", effect: { safety: +10, morale: -5 } },
        shoot: { text: "Mezarına götürdüğü sırlar asla çözülemedi ama bir casusu susturdun.", effect: { safety: +10, morale: -20 } }
      },
      image: "/src/assets/characters/casus.png"
    },
    {
      id: "d6_elif",
      name: "Elif",
      role: "unknown",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Mina'yı gördünüz mü?! [Ses tellerinden yaşlar akar] Ablasıyım ben. Onu siste kaybettim. Küçük, elinde bir oyuncak ayısı vardı...", 
          choices: [
            { text: "Mina mı? Evet, o burada/buradaydı.", nextNode: "mina_context" },
            { text: "Üzgünüm, burada hiç çocuk yok.", nextNode: "mina_deny" }
          ] 
        },
        "mina_context": { 
          text: "Allah'a şükür! Lütfen beni yanına alın. Onu bir daha asla bırakmayacağım. O benim hayattaki tek varlığım.", 
          choices: [{ text: "Hazırlan Elif, karar vereceğim.", nextNode: "decision_ready" }] 
        },
        "mina_deny": { 
          text: "Hayır! Hayır! Onu bu kapıya getirdiğimi hatırlıyorum. 'Kaç' demiştim ona... Lütfen, bir daha bakın!", 
          choices: [{ text: "Son kararımı veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Ablamı bulmadan hiçbir yere gitmem! Eğer o içerideyse ben de girmeliyim.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Mina ile Elif'in kavuşması Sektörde haftalar sonra görülen ilk gerçek mutluluk oldu.", effect: { safety: -5, morale: +60 } },
        arrest: { text: "Hücreye atılırken hala bağırıyor: 'Minaaa!'", effect: { safety: +5, morale: -30 } },
        deny: { text: "Kapının önünde sabahlayana kadar bekler. Sisten bir elin ona uzandığını kimse görmedi.", effect: { safety: +2, morale: -15 } },
        shoot: { text: "Sektör-7'nin en hüzünlü ölümü. Artık Mina sonsuza dek yalnız.", effect: { safety: +5, morale: -50 } }
      },
      image: "/src/assets/faces/child.png"
    }
  ],
  day7: [
    {
      id: "d7_golge",
      name: "Gölge",
      role: "mutant",
      type: "suspicious",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Biz düşman değiliz asker. Biz sadece... evrim geçirmiş insanlarız. Sisle barış içindeyiz. Sektör-7 bizim için de bir yuva olabilir.", 
          choices: [
            { text: "Siz birer canavarsınız! Neden bu hale geldiniz?", nextNode: "ask_monster" },
            { text: "Sektörde size yer yok. Amacınız ne?", nextNode: "ask_goal" }
          ] 
        },
        "ask_monster": { 
          text: "Canavarlık bakış açısına bağlıdır. Biz sisle nefes alabiliyoruz asker. Siz ise o maskelere mahkümsunuz. Gelecek biziz.", 
          choices: [{ text: "Hadsiz! Kararımı vereceğim.", nextNode: "decision_ready" }] 
        },
        "ask_goal": { 
          text: "Güvenli bir yer... Sektör-7'nin bir kısmını bize verin. Sisi dışarıda tutmanıza yardım edelim. Bizim ciğerlerimiz onunla dost.", 
          choices: [{ text: "Son karar, hazırlan Gölge.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Barış mı istiyorsun yoksa yıkım mı? Bu kapıyı açmazsan yarın çok daha kalabalık geleceğiz.", isFinal: true }
      },
      outcomes: {
        pass: { text: "İçeri alınır ve bir kargaşa başlar. Halk dehşet içinde ondan uzaklaşır.", effect: { safety: -50, morale: -30 } },
        arrest: { text: "Güçlükle etkisiz hale getirilir. 'Geleceği hapsedemezsiniz!' diye bağırır.", effect: { safety: +20, morale: -15 } },
        deny: { text: "Savaş ilan ederek uzaklaşır. Sisin içinde hırıltılar duyulur.", effect: { safety: -25, morale: -15 } },
        shoot: { text: "Onun ölümü mutant saldırılarını tetikledi. Sektör bugün büyük bir tehdit altında.", effect: { safety: -40, morale: -15 } }
      },
      image: "/src/assets/characters/enfekte.png"
    },
    {
      id: "d7_baby",
      name: "Gizemli Sepet",
      role: "vulnerable",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "[Kapıda bir bebek sepeti... Bebek sessizce uyuyor. Üzerinde bir not var: 'ONU KURTARIN. O GRİYE DÖNMEDİ.']", 
          choices: [
            { text: "Bebeği hemen içeri al!", nextNode: "accept_baby" },
            { text: "Dur! Bu bir tuzak olabilir, tarama yap.", nextNode: "scan_baby" }
          ] 
        },
        "accept_baby": { 
          text: "[Bebek ılık, nefes alıyor. Gözlerini açtığında masmavi baktı. Sektörde mucize gibi görünüyor.]", 
          choices: [{ text: "Onu korumalıyız. Karar mühürlendi.", nextNode: "decision_ready" }] 
        },
        "scan_baby": { 
          text: "[Tarama sonuçları: Nabız normal ama bebekten hafif bir statik elektrik/sis sızıntısı yayılıyor.]", 
          choices: [{ text: "Pekala, bu riskli ama... Karar zamanı.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "[Küçük elini terminal kamerasına doğru uzatır... Sessizce bekler.]", isFinal: true }
      },
      outcomes: {
        pass: { text: "Bebeğin girişi Sektöre inanılmaz bir umut taşıdı. Herkes ona bakmak istiyor.", effect: { safety: -10, morale: +80 } },
        arrest: { text: "Bebeği karantinaya aldın. Halk 'Vahşi!' diye bağırıyor.", effect: { safety: +10, morale: -40 } },
        deny: { text: "Sepeti dışarıda bıraktın. Sabah olduğunda sepetin içinden gri bir duman yükseliyordu.", effect: { safety: +10, morale: -60 } },
        shoot: { text: "Sen bir canavarsın. Sektör bugün kendi ruhunu vurdu.", effect: { safety: +5, morale: -100 } }
      },
      image: "/src/assets/faces/child.png"
    },
    {
      id: "d7_nihan",
      name: "Nihan",
      role: "unknown",
      type: "vulnerable",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Bebeğimi... Az önce buraya bir sepet bıraktım. Sisin içindeydim, onu korumanın tek yolu buydu. Onu gördünüz mü?!", 
          choices: [
            { text: "Evet Nihan, bebek içeride güvende.", nextNode: "baby_safe" },
            { text: "Neden onu ölüme terk ettin Nihan?", nextNode: "ask_why" }
          ] 
        },
        "baby_safe": { 
          text: "Şükürler olsun! Lütfen beni de yanına alın. Onun annesine ihtiyacı var. Ciğerlerim yanıyor, daha fazla dışarıda kalamam.", 
          choices: [{ text: "Karar zamanı, hazırlan.", nextNode: "decision_ready" }] 
        },
        "ask_why": { 
          text: "Ölüm değil! Kurtuluş! Sis benim peşimden geliyordu, onu benden uzaklaştırmalıydım.", 
          choices: [{ text: "Son kararımı veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Lütfen... Eğer o yaşıyorsa benim yaşamamın bir anlamı var.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Bebeğiyle kavuşur. Ama Nihan'ın öksürüğü grileşmeye başlar.", effect: { safety: -20, morale: +30 } },
        arrest: { text: "Ayrı koğuşlara alınırlar. Ağlama sesleri koridorları doldurur.", effect: { safety: +10, morale: -15 } },
        deny: { text: "Kapının önüne yığılır. Sektör bir can daha kaybetti.", effect: { safety: +5, morale: -20 } },
        shoot: { text: "Anneyi vurdun, bebek içeride ağlamaya başladı. Bu ses seni asla terk etmeyecek.", effect: { safety: +5, morale: -50 } }
      },
      image: "/src/assets/faces/old_woman.png"
    }
  ],
  day8: [
    {
      id: "aras_intro",
      name: "Aras",
      role: "truth_seeker",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Kapıyı çalmaya gelmedim nöbetçi, içeri sızmaya geldim... Ama senin dürüstlüğünü test etmek niyetindeyim. Ben Aras. Gerçeği arayan son kişiyim.", 
          choices: [
            { text: "Telsizden mırıldanan o fısıltı sendin?! Kimsin sen?!", nextNode: "ask_identity" },
            { text: "Gerçek mi? Sektör-7 yalanlarla örülü bir kale mi?", nextNode: "ask_truth" }
          ] 
        },
        "ask_identity": { 
          text: "Ben Sektörlerin hafızasıyım. Duvarların ardındaki yalanları, sahte maskeleri ve sısın içindeki o kadim varlığı biliyorum.", 
          choices: [{ text: "Bize yardım edebilir misin Aras?", nextNode: "ask_help" }] 
        },
        "ask_truth": { 
          text: "Gerçek, kapının dışındaki sisin kendisidir. O yalan söylemez, sadece değiştirir. Sektör-7 ise sadece bir gecikme.", 
          choices: [{ text: "Korkutucu birisin. Kararımı vereceğim.", nextNode: "decision_ready" }] 
        },
        "ask_help": { 
          text: "İçerideki yalanları ayıklayabilirim. Kimin mutant, kimin müttefik olduğunu benden iyi kimse bilemez asker.", 
          choices: [{ text: "Son karar.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "İçeri girmeme izin ver. Sektörü temiz tutmana ve o kadim sırrı çözmene yardım edebilirim.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Aras içeri adımlar. 'Doğru kararı verdin asker. Ya da en azından eğlenceli olanı.'", effect: { safety: +15, morale: +10 } },
        arrest: { text: "Zorlanmadan kelepçeleri kabul eder. 'İçeride daha çok yalan var asker.'", effect: { safety: +5, morale: -10 } },
        deny: { text: "Siste kaybolmadan önce: 'Kendi yalanlarında boğulacaksın nöbetçi.'", effect: { safety: +5, morale: -15 } },
        shoot: { text: "Aras yere düşerken tek kelime etti: 'Göremedin...' ve bedeni sise karıştı.", effect: { safety: +5, morale: -30 } }
      },
      image: "/src/assets/faces/businessman.png"
    },
    {
      id: "d8_traveler",
      name: "Sis Gezgini",
      role: "trader",
      type: "neutral",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Yorulmak nedir bilmem... Sis benim için sadece gümüş bir deniz. Elinde takas edecek neyin var asker? Kaliteli ekipmanlarım var.", 
          choices: [
            { text: "Sen nasıl sisten etkilenmiyorsun?", nextNode: "ask_secret" },
            { text: "Ne satıyorsun tüccar?", nextNode: "ask_wares" }
          ] 
        },
        "ask_secret": { 
          text: "Kadim bir ritüel... ya da sadece genetik bir şans. Kim bilir? Hayatta kalmak sırım, ticaret ise hobim.", 
          choices: [{ text: "Karar zamanı, hazırlan.", nextNode: "decision_ready" }] 
        },
        "ask_wares": { 
          text: "Gelişmiş filtreler, gece görüş dürbünleri... Ve bir de şu 'gri toz' detektörü. Hayat kurtarır.", 
          choices: [{ text: "Pekala, bu ilgi çekici. Hazırlan.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "İçeri mi girelim yoksa başka bir Sektöre mi yelken açalım?", isFinal: true }
      },
      outcomes: {
        pass: { text: "Sektöre yeni ekipmanlar sağlar. Güvenlik bariz artar.", effect: { safety: +25, morale: +10 } },
        arrest: { text: "Ekipmanlarına el konulur. 'Ticaret ruhunuz kalmamış' diye söylenir.", effect: { safety: +15, morale: -5 } },
        deny: { text: "Fısıldayarak sise gömülür. 'Sektör-8 daha iyi teklifler verirdi.'", effect: { safety: +5, morale: 0 } },
        shoot: { text: "Üzerinden çıkan eşyalar bozuk çıktı. Adamı boşuna vurmuş olabilirsin.", effect: { safety: +5, morale: -20 } }
      },
      image: "/src/assets/characters/mystery.png"
    },
    {
      id: "d8_friend",
      name: "Eski Dost (Metin)",
      role: "unknown",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Olamaz... Sen misin?! Yıllar sonra bu kapıda pusu mı kuracaktık Metin? Hatırladın mı beni?! Akademi yıllarımızı?!", 
          choices: [
            { text: "Metin?! Öldüğünü sanıyorduk! Neredeydin?!", nextNode: "ask_where" },
            { text: "Tanıyamadım... Kimsin sen?!", nextNode: "ask_who" }
          ] 
        },
        "ask_where": { 
          text: "Sektör-1'den beri kaçıyorum... Oraya ilk sis sızdığında her şeyimi kaybettim. Sadece senin buraya atandığını duydum ve geldim.", 
          choices: [{ text: "Pekala Metin. Bu çok duygusal ama... Karar zamanı.", nextNode: "decision_ready" }] 
        },
        "ask_who": { 
          text: "Sesimi de mi unuttun?! Ben Metin! Beraber kaçtığımız o bodrum katını hatırla... Lütfen, beni yabancı biriymişim gibi izleme.", 
          choices: [{ text: "Son kararımı veriyorum Metin.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Beni içeri al... eski dostun olarak yalvarıyorum. Dışarısı artık bitti.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Dostun içeri girer. Aranızdaki bağ nöbetçilere ilham verir.", effect: { safety: -5, morale: +50 } },
        arrest: { text: "Onu kelepçelerken gözlerindeki hayal kırıklığını asla unutmayacaksın.", effect: { safety: +10, morale: -30 } },
        deny: { text: "Gözyaşları içinde sise yürür. 'Yazıklar olsun sana' sesi kulaklarında çınlar.", effect: { safety: +5, morale: -40 } },
        shoot: { text: "Kendi ellerinle geçmişini vurdun. Sektör-7 artık bir hapishane değil, bir mezarlık.", effect: { safety: +10, morale: -100 } }
      },
      image: "/src/assets/characters/yolcu.png"
    }
  ]
};

const scenariosPath = path.join(__dirname, 'src', 'data', 'scenarios.js');
let scenariosContent = fs.readFileSync(scenariosPath, 'utf8');

// Replace TR scenarios day6-8
const startTrMarker = '  day6: [';
const endTrMarker = '  day9: [';

const trContentStart = scenariosContent.indexOf(startTrMarker);
const trContentEnd = scenariosContent.indexOf(endTrMarker);

let newTrContent = '';
for (const day in NEW_SCENARIOS) {
  newTrContent += `    ${day}: ${JSON.stringify(NEW_SCENARIOS[day], null, 2)},\n`;
}

scenariosContent = scenariosContent.substring(0, trContentStart) + newTrContent + scenariosContent.substring(trContentEnd);

fs.writeFileSync(scenariosPath, scenariosContent);
console.log('Scenarios Day 6-8 updated successfully!');
