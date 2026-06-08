const fs = require('fs');
const path = require('path');

const NEW_SCENARIOS = {
  day1: [
    {
      id: "d1_mina",
      name: "Mina",
      role: "vulnerable",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "[Küçük bir kız, 8 yaşlarında. Elinde eski bir oyuncak ayı tutuyor.] Amca... Annem burada bekle dedi. Ama sisin içindeki o kırmızı gözler... Benimle konuşuyorlar. Onları duyuyorum.", 
          choices: [
            { text: "Hangi gözler Mina? Siste kimse yok.", nextNode: "ask_eyes" },
            { text: "Annen nerede küçüğüm?", nextNode: "ask_mother" }
          ] 
        },
        "ask_eyes": { 
          text: "Görmüyor musun? [Eliyle sisi işaret eder] 'Bize kapıyı aç' diyorlar. 'İçerisi çok sıcak' diyorlar. Ama ben onlara güvenmiyorum... Gözleri çok... boş.", 
          choices: [{ text: "Pekala, bu durum çok garip. Karar zamanı.", nextNode: "decision_ready" }] 
        },
        "ask_mother": { 
          text: "Dumanın içinde kaldı. 'Kaç Mina' dedi. 'Sakın arkana bakma' dedi. Ama ben korktum... çok korktum. Onu orada bıraktım amca.", 
          choices: [{ text: "Hazırlan, kararımı veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Lütfen... İçeride sıcak süt var mı? Karnım çok aç.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Mina içeri girerken hala fısıldıyor: 'Giremediler amca... şimdilik.'", effect: { safety: -5, morale: +40 } },
        arrest: { text: "Nöbetçiler onu hücreye götürürken halk sana nefretle bakıyor. Bir çocuğu mu hapse atıyorsun?", effect: { safety: +5, morale: -45 } },
        deny: { text: "Kapının önüne büzülüp kalır. Sabah olduğunda sadece oyuncak ayısı oradaydı.", effect: { safety: +5, morale: -30 } },
        shoot: { text: "Bunu gerçekten yaptın. Sektör bugün insanlığını tamamen kaybetti.", effect: { safety: +10, morale: -100 } }
      },
      image: "/src/assets/faces/child.png"
    },
    {
      id: "d1_argo",
      name: "Berke",
      role: "punk",
      type: "suspicious",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Aga be! İçeri alsana ya... Vallahi durumlar sakat dışarıda. Sis mis hikaye, asıl mevzu o arkadaki hırıltılar! Bi' kaçamak yapalım hadi.", 
          choices: [
            { text: "Düzgün konuş Berke! Çandadı ne saklıyorsun?", nextNode: "ask_bag" },
            { text: "Sana neden güveneyim ki?", nextNode: "ask_trust" }
          ] 
        },
        "ask_bag": { 
          text: "Sadece birkaç kutu konserve ve paslı bir emanet aga... Tedbir amaçlı yani. Sen de olsan sen de alırdın, de' mi?", 
          choices: [{ text: "O 'emaneti' hemen yere bırak.", nextNode: "drop_weapon" }] 
        },
        "ask_trust": { 
          text: "Aga kimseye güvenemezsin bu devirde doğru. Ama ben delikanlı adamım, yamuğum olmaz. Söz!", 
          choices: [{ text: "Kararımı veriyorum, hazırlan Berke.", nextNode: "decision_ready" }] 
        },
        "drop_weapon": {
          text: "Tamam tamam! [Bıçağı yere atar] Al işte, çıplak geldim kapına. Daha ne istiyon?",
          choices: [{ text: "Pekala, bu daha iyi. Karar zamanı.", nextNode: "decision_ready" }]
        },
        "decision_ready": { text: "Hadi aga, piller bitiyor, karanlık çöküyor! Bi' el at şu kapıya.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Sinsi bir gülüşle içeri süzülür. 'Doğru karar aga! Pişman olmayacaksın.'", effect: { safety: -15, morale: +5 } },
        arrest: { text: "Kelepçelenirken hala söyleniyor: 'Ayıp ediyon aga! Biz de mülteciyiz burada.'", effect: { safety: +10, morale: -5 } },
        deny: { text: "Küfrederek sise yürür. 'Sektörün de senin de...' diye sesi kesilir.", effect: { safety: +5, morale: -10 } },
        shoot: { text: "Yere düştüğünde cebinden sadece kurumuş bir ekmek ve bir bıçak çıktı. Yazık.", effect: { safety: +5, morale: -20 } }
      },
      image: "/src/assets/characters/punk.png"
    },
    {
      id: "d1_miner",
      name: "Tuncay Amca",
      role: "worker",
      type: "professional",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Sektör bitti evlatlar! Bu sis yukarıdan gelmiyor, yer altından geliyor! Kazdığımız o derinlerde bir şey uyandı... Ben gördüm!", 
          choices: [
            { text: "Ne uyanması Tuncay Amca? Madende ne buldunuz?", nextNode: "ask_mine" },
            { text: "Saçmalamayı kes, sisten aklını kaçırmışsın.", nextNode: "insane_path" }
          ] 
        },
        "ask_mine": { 
          text: "Gri parlak bir damar... Kazma vurduğumuz an fısıldamaya başladı. Sonra makineler sustu, insanlar sadece... bakmaya başladı.", 
          choices: [{ text: "Nereye bakıyorlardı?", nextNode: "ask_where" }] 
        },
        "insane_path": {
          text: "Deli deme bana! [Titrer] Ben o gözleri madende de gördüm, şimdi siste de görüyorum! Bizi izliyorlar!",
          choices: [{ text: "Hazırlan, karar vereceğim Tuncay Amca.", nextNode: "decision_ready" }]
        },
        "ask_where": {
          text: "Hiçliğe... Sektör-7 kurulduğunda o madenlerin üstüne inşa ettiler. Kendi mezarımızda oturuyoruz!",
          choices: [{ text: "Pekala, bu bilgi şüpheli ama değerli. Karar zamanı.", nextNode: "decision_ready" }]
        },
        "decision_ready": { text: "Beni içeri alın, o madenin sırrını sadece ben biliyorum. Yoksa kapılar eriyecek!", isFinal: true }
      },
      outcomes: {
        pass: { text: "İçeri girerken hala 'Aşağıya dikkat edin' diye mırıldanıyor. Halk tedirgin.", effect: { safety: -10, morale: +10 } },
        arrest: { text: "Maden raporları ve 'fısıltılar' için sorguya alınır.", effect: { safety: +15, morale: -5 } },
        deny: { text: "Asansörlere doğru geri döner. 'Hepiniz griye döneceksiniz' der.", effect: { safety: +5, morale: -15 } },
        shoot: { text: "Şehrin son madencisi can verdi. Yer altındaki sırlar onunla gitti.", effect: { safety: +10, morale: -30 } }
      },
      image: "/src/assets/characters/yolcu.png"
    }
  ],
  day2: [
    {
      id: "d2_silent",
      name: "Leyla",
      role: "unknown",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "[Sana sadece bir not kağıdı uzatır: 'İÇERİ ALIN. KONUŞAMIYORUM. GÖLGELER GELİYOR.']", 
          choices: [
            { text: "Kimsin sen? Neden not yazıyorsun?", nextNode: "ask_who" },
            { text: "Buna cevap vermezsen seni içeri alamayız.", nextNode: "ask_threat" }
          ] 
        },
        "ask_who": { 
          text: "[İkinci notu açar: 'ADIM LEYLA. SİS SESİMİ ÇALDI. SİZİNKİLERİ DE ALACAKLAR.']", 
          choices: [{ text: "Bu ne demek Leyla? Detay ver.", nextNode: "ask_details" }] 
        },
        "ask_threat": { 
          text: "[Umutsuzca not yazar: 'SADECE KALEMİM KALDI. LÜTFEN. SESSİZLİK DAHA GÜVENLİ.']", 
          choices: [{ text: "Son kararımı veriyorum Leyla.", nextNode: "decision_ready" }] 
        },
        "ask_details": {
          text: "[Titreyerek çizer: Gri bir dumanın içinde ağızsız insanlar... Ürkütücü görünüyor.]",
          choices: [{ text: "Pekala, bu durum şüpheli. Hazırlan.", nextNode: "decision_ready" }]
        },
        "decision_ready": { text: "[Gözlerinin içine sessizce bakar ve bekler. Gözleri yaşlı.]", isFinal: true }
      },
      outcomes: {
        pass: { text: "Sessizce içeri süzülür. İnsanlar ondan kaçınmaya başlar. Uğursuz buluyorlar.", effect: { safety: -10, morale: +5 } },
        arrest: { text: "Not defterine el konulur. 'Sesimi aramaya çıkacağım' diye yazar son notuna.", effect: { safety: +5, morale: -10 } },
        deny: { text: "Siste bir hayalet gibi kaybolana kadar gözlerini senden ayırmaz. Suçlu hissediyorsun.", effect: { safety: +2, morale: -15 } },
        shoot: { text: "Hiç ses çıkarmadan yere yığıldı. Sadece kalemi taşa vurup kırıldı. O masumdu.", effect: { safety: +10, morale: -45 } }
      },
      image: "/src/assets/characters/silent_woman.png"
    },
    {
      id: "d2_wounded",
      name: "Onur",
      role: "soldier",
      type: "professional",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Sektör-5'ten geliyorum... Bizi geride bıraktılar asker! Komutan kapıları üstümüze kilitledi. Yaralıyım, lütfen!", 
          choices: [
            { text: "Sektör-5 mi? Oranın imha edildiğini sanıyorduk!", nextNode: "ask_fall" },
            { text: "Kim bıraktı seni? Rapor ver!", nextNode: "ask_report" }
          ] 
        },
        "ask_fall": { 
          text: "İmha edilmedi, istila edildi! İçeriden biri kapıları açtı. Her yer griye döndü saniyeler içinde. Ben zor kaçtım.", 
          choices: [{ text: "Karar zamanı, hazırlan asker.", nextNode: "decision_ready" }] 
        },
        "ask_report": { 
          text: "Albay Demir... O pederle konuşuyordu. Sonra sirenler çaldı ve her şey bitti. Bizi bıraktılar.", 
          choices: [{ text: "Pekala, bu önemli bir bilgi. Karar veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Kan kaybım var... Acele et asker! Sektör-7'nin de kaderi aynı olmasın.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Revire kaldırılır. Getirdiği bilgiler güvenlik protokollerini güncelletti.", effect: { safety: +15, morale: +5 } },
        arrest: { text: "Gözetim altına alınır. Albay Demir hakkında sorgulanır.", effect: { safety: +10, morale: -5 } },
        deny: { text: "Kapının önüne yığılır. Sektör bugün bir askerini daha kaybetti.", effect: { safety: +5, morale: -15 } },
        shoot: { text: "Onu vurmak bir lütuftu... Belki de acısını dindirmiş oldun.", effect: { safety: +5, morale: -25 } }
      },
      image: "/src/assets/characters/general.png"
    },
    {
      id: "d2_dogman",
      name: "Selman",
      role: "worker",
      type: "neutral",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Karabaş ve ben... Sadece sığınacak bir yer arıyoruz. O hiçbir zaman yanılmaz, bak nasıl havlıyor! Sisin içindekileri görüyor o!", 
          choices: [
            { text: "Köpek neden kime havlıyor Selman? Bize mi?", nextNode: "ask_dog" }
          ] 
        },
        "ask_dog": { 
          text: "Size havlıyor! İçerideki o fısıltıları o da duyuyor. Ama mamasını verirsen susar, size sadık kalır.", 
          choices: [{ text: "Karar zamanı Selman, hazırlan.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Lütfen... Karabaş çok üşüdü. Sektörün de korumaya ihtiyacı var de' mi?", isFinal: true }
      },
      outcomes: {
        pass: { text: "Köpek içerideki şüpheli mutantları tespit eder. 'Aferin Karabaş!' Halk onu çok sevdi.", effect: { safety: +20, morale: +10 } },
        arrest: { text: "Köpeğe el konulur, adam hapsedilir. Karabaş gece boyu ulur. Vicdanın sızlıyor.", effect: { safety: +5, morale: -10 } },
        deny: { text: "Sisin içine doğru yürürler. Uzaktan havlama sesleri kesilir.", effect: { safety: +2, morale: -10 } },
        shoot: { text: "Adamı vurdun, köpek başucunda beklemeye başladı. Çok acı bir sahne.", effect: { safety: +5, morale: -30 } }
      },
      image: "/src/assets/characters/doctor.png"
    }
  ],
  day3: [
    {
      id: "d3_nightvision",
      name: "Cem",
      role: "unknown",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Işıkları kapatın! Gözlerim yanıyor! Karanlıkta her şey daha net, her şey daha gerçek... Sisin içindeki iplikleri görüyorum.", 
          choices: [
            { text: "Neden ışıktan rahatsız oluyorsun Cem?", nextNode: "ask_eyes" }
          ] 
        },
        "ask_eyes": { 
          text: "Sisin hediyesi... Gece görme yetisi. Karanlıkta o iğrenç parazitleri canlı canlı görebiliyorum. Bizi ipliklerle bağlıyorlar amca!", 
          choices: [{ text: "Hazırlan Cem, kararımı veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Karanlığı içeri alın... tek şansımız bu olabilir.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Gözcü kulesine yerleştirilir. Gece saldırılarını önceden haber verir.", effect: { safety: +30, morale: +5 } },
        arrest: { text: "Gözleri bantlanarak hücreye konur. 'Göremiyorum!' diye bağırır.", effect: { safety: +10, morale: -10 } },
        deny: { text: "Kendi dünyasına, karanlığa geri döner.", effect: { safety: +5, morale: 0 } },
        shoot: { text: "Şehrin en iyi gözcüsünü daha sisten göremeden vurdun.", effect: { safety: +5, morale: -20 } }
      },
      image: "/src/assets/characters/mystery.png"
    },
    {
      id: "d3_cryinggirl",
      name: "Duygu",
      role: "worker",
      type: "vulnerable",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "[Hıçkırarak ağlar] Onları bıraktım... Kapıyı arkalarından ben kapattım. Ben hayattayım ama onlar gri tozlara dönüştü... Suçluyum ben! Affetmeyin beni!", 
          choices: [
            { text: "Neden yaptın bunu Duygu? Sakinleş ve anlat.", nextNode: "ask_why" }
          ] 
        },
        "ask_why": { 
          text: "Korktum! Ellerini bıraktım ve merdivenlere koştum. Şimdi seslerini rüzgarla duyuyorum. Beni yanlarına çağırıyorlar!", 
          choices: [{ text: "Karar zamanı Duygu, hazırlan.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Lütfen içeri alın... belki içeride uykumda onları görmem.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Sektöre girer ama psikolojisi çok bozuktur. İnsanları tedirgin eder. Gece boyu ağlıyor.", effect: { safety: -5, morale: -15 } },
        arrest: { text: "Hücrede kendine zarar vermesini önlemek için gözetim altındadır.", effect: { safety: +5, morale: -10 } },
        deny: { text: "Seslerin geldiği yöne, sise geri koşar.", effect: { safety: 0, morale: -15 } },
        shoot: { text: "Onu vicdan azabından kurtardın... mi? Sektör bugün çok sessiz.", effect: { safety: +5, morale: -25 } }
      },
      image: "/src/assets/faces/old_woman.png"
    },
    {
      id: "d3_trader",
      name: "Salih",
      role: "trader",
      type: "suspicious",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Gerçek viski, mühürlü konserveler... Sektörde bunlar altından değerli asker. Bak burada ne var, senin için bir 'takas' teklifim var.", 
          choices: [
            { text: "Bize rüşvet mi teklif ediyorsun Salih? Haddini bil!", nextNode: "ask_law" },
            { text: "Takas teklifin nedir tüccar?", nextNode: "ask_trade" }
          ] 
        },
        "ask_law": { 
          text: "Aga be! Kanun mu kaldı dışarıda? Her gün gri toz yutuyoruz. Bir şişe keyfin kime ne zararı var? Sektör de canlansın biraz.", 
          choices: [{ text: "Karar veriyorum Salih, hazırlan.", nextNode: "decision_ready" }] 
        },
        "ask_trade": { 
          text: "Beni ve bu çantayı içeri al, her gece senin nöbetine bir paket gerçek sigara bırakayım. Anlaştık mı?", 
          choices: [{ text: "Pekala, bu teklifi düşüneceğim. Karar zamanı.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Zaman nakittir asker, duman yaklaşırken kararını ver!", isFinal: true }
      },
      outcomes: {
        pass: { text: "Sinsi bir gülüşle içeri girer. Sektörde karaborsa başlar.", effect: { safety: -20, morale: +20 } },
        arrest: { text: "Mallarına el konulur. Nöbetçiler o gece viski içer.", effect: { safety: +15, morale: -5 } },
        deny: { text: "Başka bir sığınak arayacağını söyler. 'Fakir kalmaya devam edin!'", effect: { safety: +5, morale: 0 } },
        shoot: { text: "Konserveleri etrafa saçıldı. 'Açgözlü...' diye mırıldandı nöbetçiler.", effect: { safety: +5, morale: -20 } }
      },
      image: "/src/assets/characters/punk.png"
    }
  ],
  day4: [
    {
      id: "d4_healer",
      name: "Arda",
      role: "unknown",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Bakın! [Kolundaki derin yarayı gösterir] Az önce sisin içinden geçerken oldu ama bakın... gözünüzün önünde kapanıyor!", 
          choices: [
            { text: "Bu imkansız! Nasıl bu kadar hızlı iyileşiyorsun?", nextNode: "ask_why" }
          ] 
        },
        "ask_why": { 
          text: "Bilmiyorum! Sis beni öldürmedi, beni değiştirdi. Artık acı bile duymuyorum. Ben bir mucizeyim!", 
          choices: [{ text: "Hazırlan Arda, kararımı veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Beni içeri alın, kanım Sektör-7'yi kurtarabilir!", isFinal: true }
      },
      outcomes: {
        pass: { text: "Deneyler için laboratuvara alınır. Güvenlik riski tavan!", effect: { safety: -30, morale: +10 } },
        arrest: { text: "Karantina odasına kilitlenir. Sürekli kendini yaralayıp izlemesini bekler.", effect: { safety: +10, morale: -10 } },
        deny: { text: "Sisin içine gülerek geri döner. 'Siz ölümlüsünüz!'", effect: { safety: +10, morale: -5 } },
        shoot: { text: "Vurduğunda yarası kapanmadı. O sadece hızlı iyileşen bir insandı, ölümsüz değil.", effect: { safety: +5, morale: -30 } }
      },
      image: "/src/assets/characters/doctor.png"
    },
    {
      id: "d4_teacher",
      name: "Melahat",
      role: "worker",
      type: "vulnerable",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Sektör bitti evlat ama çocuklar... Onları kurtarmalıyız. Kitaplarımı ve kalemlerimi getirdim. Bir okul kurmalıyız.", 
          choices: [
            { text: "Melahat Hanım, dışarıda kıyamet kopuyor. Okul mu?", nextNode: "ask_school" }
          ] 
        },
        "ask_school": { 
          text: "Eğitim her zaman gereklidir evlat. Eğer çocukların ruhunu sise teslim edersek, zaten her şeyi kaybetmişiz demektir.", 
          choices: [{ text: "Pekala Melahat Hanım. Karar zamanı.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Lütfen... Onların geleceği için içeri girmeliyim.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Kütüphane dairesine yerleşir. Moraller inanılmaz artar.", effect: { safety: -2, morale: +50 } },
        arrest: { text: "Hücrede bile nöbetçilere tarih anlatıyor.", effect: { safety: +5, morale: -5 } },
        deny: { text: "Kitaplarına sarılarak uzaklaşır. 'Cahillik sizi öldürecek' der.", effect: { safety: +2, morale: -15 } },
        shoot: { text: "Bilginin ışığı söndü. Sektör bugün daha cahil ve karanlık.", effect: { safety: +5, morale: -50 } }
      },
      image: "/src/assets/faces/old_woman.png"
    },
    {
      id: "d4_priest",
      name: "Peder Thomas",
      role: "priest",
      type: "suspicious",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Sis kutsaldır! O, dünyayı günahlarından arındıran gümüş bir vaftiz suyudur. Kapıları açın, hepimiz yıkanalım!", 
          choices: [
            { text: "Peder, sen sise mi tapıyorsun? Bu sapkınlık!", nextNode: "ask_cult" }
          ] 
        },
        "ask_cult": { 
          text: "Sapkınlık mı? Hayır evlat, bu bir teslimiyet. Sisle savaşmayın, onun parçası olun. O zaman acı sona erecek.", 
          choices: [{ text: "Hazırlan Peder, karar veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Siz de o gümüş ışığı göreceksiniz. Yakında!", isFinal: true }
      },
      outcomes: {
        pass: { text: "İçeride gizli bir kült kurar. Halk yavaş yavaş sisten korkmamaya başlar.", effect: { safety: -40, morale: -20 } },
        arrest: { text: "Hücrede ilahiler söyler. Söylediği kelimeler insanları delirtiyor.", effect: { safety: +15, morale: -10 } },
        deny: { text: "Diz çöküp dua eder ve siste kaybolur.", effect: { safety: +10, morale: -5 } },
        shoot: { text: "Kurşun kitabı delip geçti. 'Son yaklaşıyor...' dedi son nefesinde.", effect: { safety: +10, morale: -15 } }
      },
      image: "/src/assets/characters/yitik.png"
    }
  ],
  day5: [
    {
      id: "d5_chased",
      name: "Can",
      role: "worker",
      type: "vulnerable",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Peşimdeler! 'Toz Yutanlar' çetesi! Sektör-8'i ele geçirdiler, şimdi beni istiyorlar. Lütfen kapıyı açın!", 
          choices: [
            { text: "Toz Yutanlar mı? Kim onlar?", nextNode: "ask_gang" }
          ] 
        },
        "ask_gang": { 
          text: "Sisi soluyup güçlenen deliler ordusu! Kapıları kıracaklar, hepimizi köle yapacaklar! Yalvarırım!", 
          choices: [{ text: "Hazırlan Can, karar zamanı.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Onlar geliyor... Işıklarını görüyorum!", isFinal: true }
      },
      outcomes: {
        pass: { text: "Can içeri dalınca kapılar mühürlenir. Çete dışarıda pusuya yatar.", effect: { safety: -50, morale: +5 } },
        arrest: { text: "Gözaltına alınır ama çete hala dışarıda bekliyor.", effect: { safety: -10, morale: -5 } },
        deny: { text: "Çığlıkları sisin içinde kesildi. Çete onu yakaladı.", effect: { safety: +15, morale: -20 } },
        shoot: { text: "Onu vurarak çeteye bir mesaj verdin mi? Yoksa sadece bir masumu mu harcadın?", effect: { safety: +10, morale: -30 } }
      },
      image: "/src/assets/characters/yolcu.png"
    },
    {
      id: "d5_twins",
      name: "Ece & Ege",
      role: "unknown",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "[Aynı anda konuşurlar] Biz iki kişiyiz ama bir ruhuz. Sis bizi ayırdı ama yine birleşeceğiz. Sektör-7'ye tek bir giriş izni istiyoruz.", 
          choices: [
            { text: "Neden tek bir giriş izni?", nextNode: "ask_why" }
          ] 
        },
        "ask_why": { 
          text: "Çünkü birimiz zaten siste kaldı... Sadece gölgesi bizimle. Görmüyor musun?", 
          choices: [{ text: "Hazırlanın çocuklar, karar zamanı.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "İkimizi birden alın ya da ikimizi birden bırakın.", isFinal: true }
      },
      outcomes: {
        pass: { text: "İçeri girdiklerinde arkalarından gri bir gölge süzüldü. Uğursuz bir hava.", effect: { safety: -20, morale: -10 } },
        arrest: { text: "Ayrı hücrelere kondular, gece boyu duvarlara vurdular.", effect: { safety: +10, morale: -15 } },
        deny: { text: "El ele tutuşup sise geri döndüler.", effect: { safety: +5, morale: -15 } },
        shoot: { text: "Tek kurşun, iki can. Sektör bugün çok soğuk.", effect: { safety: +10, morale: -60 } }
      },
      image: "/src/assets/faces/child.png"
    },
    {
      id: "d5_aunt",
      name: "Fatma Teyze",
      role: "worker",
      type: "vulnerable",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Börek yaptım evlatlar... Sisin içinde ocak tütmüyor artık ama bu son tepsiyi size getirdim. Açsınızdır siz.", 
          choices: [
            { text: "Fatma Teyze, dışarıda canpazarı var, sen börek mi diyorsun?", nextNode: "ask_food" }
          ] 
        },
        "ask_food": { 
          text: "Mideniz boşken sis daha kolay sızar kalbinize. Hadi, içeri alın da sıcak sıcak yiyelim.", 
          choices: [{ text: "Hazırlan Fatma Teyze, karar vereceğim.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Yavrularım benim... Hepiniz çok yorgun görünüyorsunuz.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Börekleri tüm Sektöre dağıtır. Moraller tavan yapar!", effect: { safety: 0, morale: +70 } },
        arrest: { text: "Hücrede bile nöbetçilere kurabiye yedirmeye çalışıyor.", effect: { safety: +5, morale: -5 } },
        deny: { text: "Tepsisini kucağına alıp sessizce gider. Nöbetçiler ağlıyor.", effect: { safety: +2, morale: -30 } },
        shoot: { text: "Bunu gerçekten yaptın mı? Tepsisi kana boyandı. Sektör bitti.", effect: { safety: +5, morale: -90 } }
      },
      image: "/src/assets/faces/old_woman.png"
    }
  ]
};

const scenariosPath = path.join(__dirname, 'src', 'data', 'scenarios.js');
let scenariosContent = fs.readFileSync(scenariosPath, 'utf8');

// Replace TR scenarios day1-5
const startTrMarker = 'tr: {';
const endTrMarker = '  day6: ['; // We replace up to day5

const trContentStart = scenariosContent.indexOf(startTrMarker) + startTrMarker.length;
const trContentEnd = scenariosContent.indexOf(endTrMarker);

let newTrContent = '\n';
for (const day in NEW_SCENARIOS) {
  newTrContent += `    ${day}: ${JSON.stringify(NEW_SCENARIOS[day], null, 2)},\n`;
}

scenariosContent = scenariosContent.substring(0, trContentStart) + newTrContent + scenariosContent.substring(trContentEnd);

fs.writeFileSync(scenariosPath, scenariosContent);
console.log('Scenarios Day 1-5 updated successfully!');
