// ============================================================
// SHELTER DIALOGUES — SEKTÖR-7 GATEWAY
// Senaryo ID'leriyle birebir eşleşen key'ler kullanılmıştır.
// Görseller: /faces/ (public klasörü)
// ============================================================

export const SHELTER_DIALOGUES = {
  tr: {
    // ─────────────────────────────────────────────
    // GÜN 1 — MINA
    // ─────────────────────────────────────────────
    mina_d1: {
      name: "Küçük Mina",
      role: "Gün-1 · Çocuk",
      image: "/faces/d1_mina.png",
      voiceProfile: { pitch: 1.65, variation: 0.12 }, // Çocuk sesi: İnce ve hareketli
      low: [
        {
          text: "Annem nerede şimdi... Bilmiyorum. Sen de bilmiyorsun değil mi?",
          choices: [
            { text: "Onu aramak için yapabileceğimiz bir şey var mutlaka.", effect: +12, next: "Gözlerinde bir kıvılcım çakıyor. 'Gerçekten mi?' diye fısıldıyor, ama sesinde inanmak isteme de var." },
            { text: "Şu an güvendesin, buna odaklan.", effect: +5, next: "Başını sallıyor yavaşça. 'Tamam...' diyor ama gözleri kapıya bakıyor hâlâ." },
            { text: "Çok soru sorma, burada herkes zor durumda.", effect: -15, next: "Küçük eller birbirine kenetleniyor. Sessizce dönerek köşesine çekiliyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Abi... Sığınakta garip sesler geliyor bazen. Duvarın arkasından. Tekrar tekrar aynı ses. 'Açın' diyor sadece.",
          choices: [
            { 
              text: "Hangi duvarın yanından? Gösterebilir misin?", 
              effect: +18, 
              next: "'Şuradaki eski demir kapının. Ben her gece sayıyorum. Bu ay on altı kere duydum.' Parmaklarını çıkarıyor.",
              followUp: {
                text: "Yere eğilip toza bir şeyler çiziyor. 'Bak, ritim böyle... Üç kere vuruyor, duruyor, sonra iki kere daha.' Gözleri kocaman açılıyor. 'Bozkır amca da duydu. Gördüm onu, kapıya bakıyordu ama duymamış gibi yaptı.'",
                choices: [
                  { text: "Bozkır bu konuda bir şey söyledi mi?", effect: +10, next: "'Bana kızdı. \'Çocuklar her sesi canavar sanır\' dedi ama elleri titriyordu.'" },
                  { text: "O kapının arkasında ne olduğunu biliyor musun?", effect: +5, next: "'Hayır ama oradan hep soğuk esiyor. Sanki ölü bir nefes gibi.'" }
                ]
              }
            },
            { text: "Belki rüzgardır, gece gürültüler büyür.", effect: +3, next: "'Rüzgar açın demez ki abi.' Çok ciddi bir yüzle bakıyor sana." },
            { text: "Merak etme, biz kontrol altında tutuyoruz.", effect: -5, next: "Omzunu silkiyor. 'Tamam... ama yine de öğrenmek isterim.'" }
          ]
        },
        {
          text: "O büyük adam Bozkır var ya... Dün gece onu gördüm tekbaşına oturmuş, elleri yüzünde. Ağlıyordu sanki.",
          choices: [
            { text: "Sen çok dikkatlisin Mira. Bu bir meziyettir.", effect: +20, next: "Işıl ışıl gülümsüyor. 'Annem de öyle derdi! Abi sen benim arkadaşım mısın?' Sesin dalga geçer gibi değil, gerçekten soruyor." },
            { text: "Gece dışarı çıkma, tehlikeli.", effect: -5, next: "'Biliyorum. Ama uyuyamadım ki.' Biraz susuyor." },
            { text: "Bozkır hakkında ne düşündüğünü anlat.", effect: +15, next: "'O büyük ama üzgün biri. Büyükler üzgün olunca hepsini içine atar. Bu çok ağır olmalı.'" }
          ]
        }
      ],
      high: [
        {
          text: "Abi... Sana bir şey göstereceğim ama kimseye söyleme. Büyükler alır elinden.",
          isSpecial: true,
          choices: [
            { 
              text: "Sadece ben bakacağım, söz.", 
              effect: +25, 
              next: "Cebinden küçük, kırık bir rozet çıkarıyor. Üzerinde 'SEKTÖR-0' yazıyor. 'Duvarın dibinde buldum. Yeni değil, çok eski. Ne yazıyor abi?' diye soruyor.",
              followUp: {
                text: "Rozeti sana verirken fısıldamaya başlıyor: 'Aşağıya giden gizli bir havalandırma var. Rozet oradaydı. Ve sesler... Büyük insanların sesleri. \'Proje Sıfır\' diyorlardı. Bir de... \'Gümüş\' kelimesini duydum. Çok korkunçtu abi, sanki insan değillerdi.'",
                choices: [
                  { text: "Başka ne duydun? Hatırlamaya çalış.", effect: +15, next: "'Sadece bir kadının ağladığını duydum... Ama sesi normal değildi. Yankılanıyordu.' Titremeye başlıyor." },
                  { text: "O havalandırmadan uzak duracaksın, anladın mı?", effect: +10, next: "'Tamam abi, söz veriyorum. Zaten bir daha gitmeye çok korkuyorum.'" }
                ]
              }
            },
            { text: "Güveniyorum sana Mira.", effect: +18, next: "Etrafına bakınıyor önce. Sonra cebinden eskimiş bir kağıt parçası çıkıyor." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 1 — AĞA
    // ─────────────────────────────────────────────
    aga_d1: {
      name: "Ağa",
      role: "Gün-1 · Kenar Mahalle Lideri",
      image: "/faces/d1_aga.png",
      voiceProfile: { pitch: 0.85, variation: 0.1 }, // Sert erkek sesi
      low: [
        {
          text: "Bak asker, burada kim olduğumu bilmeden bana emirler verme. Ben bu semtte on yıldır düzeni ben sağladım.",
          choices: [
            { text: "Burada eski statüler geçerli değil.", effect: -10, next: "'Öyle mi? Görürüz.' Sırtını dönüyor ama gözünün ucu hâlâ sende." },
            { text: "Tecrübeni kullanmaya hazırım, anlat bakalım.", effect: +15, next: "Biraz gevşiyor. 'Şimdi adam gibi konuştun. Otur, anlatalım.'" },
            { text: "Seni burada barındırmak zor oldu, bunu bil.", effect: -5, next: "'Her şeyin bedeli var asker. Seninle de uzlaşırız.'"}
          ]
        }
      ],
      medium: [
        {
          text: "Buradaki insanların yarısı benim mahallenden. Ben onları buraya taşıdım. Bir şey olursa ilk beni suçlayacaklar.",
          choices: [
            { 
              text: "Bu sorumluluk ağır, bunu anlıyorum.", 
              effect: +18, 
              next: "Uzun süre bakıyor. 'İlk defa bunu anlayan biriyle konuşuyorum.' Elini masaya koyuyor.",
              followUp: {
                text: "Masaya doğru eğiliyor. 'Sis gelmeden aylar önce... Sektör-3\'e adam götürdüler. Tahliye tatbikatı dediler. Hiçbiri geri dönmedi. O tatbikat tatbikat değildi asker. Bir şeyin başlangıcıydı. Dün revirdeki yaralı asker de sayıklıyordu: Doktor Arzu bir şeyler bulmuş...'",
                choices: [
                  { text: "Doktor Arzu ne bulmuş olabilir?", effect: +15, next: "'Bunu ona sorman lazım. Ama yaralı askerin sayıklamalarından anladığım kadarıyla kanla ilgili bir şey. Bir tür bağışıklık...'" },
                  { text: "Sektör-3\'e gidenlere ne oldu sence?", effect: +10, next: "'Ölmediklerine eminim. Keşke ölselerdi. Sis geldiğinde ilk oradan patlak verdiğini duydum.'" }
                ]
              }
            },
            { text: "O zaman onları iyi yönet.", effect: +5, next: "'Bu işi bana öğretme, asker. Ben on yıldır yapıyorum bunu.'" },
            { text: "Herkese eşit davranmak zorundasın burada.", effect: -8, next: "'Eşitlik? Bu çocukça bir kavram. Güç dengesiyle çalışır dünya.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir şey söyleyeceğim ama kulak asacak mısın bilmiyorum. Bu sığınakta bir ajan var. Dışarıyla bilgi paylaşıyor.",
          isSpecial: true,
          choices: [
            { 
              text: "İsmini ver, araştırayım.", 
              effect: +22, 
              next: "'Adı bilmiyorum. Ama geceleri çıkıyor. Kuzey koridorunda. Ve geri döndüğünde üzerinde toprak izi oluyor.' Gözleri kısılıyor.",
              followUp: {
                text: "'Bir de frekans meselesi var. Eski bir radyom var, bilirsin. Her gece tam 03:14\'te aynı cızırtı giriyor. Biri dışarıyla konuşuyor. Geçen gün çöpte yırtık bir kağıt buldum. Koordinatlar var. Sektör-0\'ı işaret ediyor... Al, sende dursun.'",
                choices: [
                  { text: "03:14... Bu saati aklımda tutacağım.", effect: +15, next: "'Tutmalısın. İçerideki düşman dışarıdakinden tehlikelidir asker. Uyumamaya alış.'" },
                  { text: "Koordinatlarda ne olabilir?", effect: +10, next: "'Hiçbir fikrim yok. Ama temiz bir iş olmadığı kesin. Oraya giden geri dönmüyor.'" }
                ]
              }
            },
            { text: "Neden bana söylüyorsun bunu?", effect: +15, next: "'Çünkü sen buradaki tek yetkilinin kapıcısısın. Ve ben ölmek istemiyorum.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 2 — YARALANAN ASKER
    // ─────────────────────────────────────────────
    wounded_soldier_d2: {
      name: "Yaralı Asker (Kerem)",
      role: "Gün-2 · Hayatta Kalan",
      image: "/faces/d2_soldier.png",
      low: [
        {
          text: "Bırak beni... Sadece biraz uyumam lazım. Sektör-5'ten beri hiç uyumadım.",
          choices: [
            { text: "Sana Doktor Arzu'ya götüreceğim önce.", effect: +12, next: "İlk kez kalkıp oturmaya çalışıyor. 'Tamam... Adım Kerem. Bunu sormadın ama söylesem iyi olur.' diye ekliyor." },
            { text: "Ne gördün orada?", effect: +8, next: "'Sektör-5... Kapısında. Kaçarken yaralandım. Çoğu kaçamadı.' Sesi kırılıyor." },
            { text: "Dinlene bilirsin ama gece nöbet tutman gerekebilir.", effect: -10, next: "Soğuk bir bakış fırlatıyor. Konuşmuyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Sektör-5'te ne gördüğümü anlatmak zorundayım. Kimse sormadı ama anlatmam gerek.",
          choices: [
            { 
              text: "Ben dinliyorum Kerem.", 
              effect: +20, 
              next: "'Kapı içten açıldı. Dışarıdan değil. Biri içeriden mandala dokundu. Gördüm. Bir el, binanın içinden.' Elleri titremeye başlıyor.",
              followUp: {
                text: "'O el... Parmağında gümüş bir yüzük vardı. Üzerinde mavi bir üçgen işlemesi. Ve kapı açıldığında rüzgarla birlikte bazı belgeler uçuştu. Gözüm takıldı... Sadece iki kelime okuyabildim karanlıkta: Proje Gümüş.'",
                choices: [
                  { text: "Mavi üçgen mi? Bu bir rütbe işareti mi?", effect: +15, next: "'Askeri değil. Bilim bölümünün eski bir işareti. Yıllar önce kaldırılmıştı. Ya da biz öyle sanıyorduk.'" },
                  { text: "Proje Gümüş ne anlama geliyor?", effect: +10, next: "'Hiçbir fikrim yok. Ama o elin sahibi biliyor. Ve o el şu an aramızda olabilir.'" }
                ]
              }
            },
            { text: "Panikle yanlış görmüş olabilirsin.", effect: +5, next: "'Kanımdaki adrenalini sorsana. Her şey çok netti, çok yavaş gibiydi. Bir el. İçten.'" },
            { text: "Bu bilgi ne işimize yarar şimdi?", effect: -12, next: "'Belki yaramaz. Ama söylememek daha mı iyi?' Artık konuşmuyor." }
          ]
        }
      ],
      high: [
        {
          text: "O elin kime ait olduğunu her gece düşünüyorum. Ve bir isim geliyor. Söylersem beni öldürürler.",
          isSpecial: true,
          choices: [
            { 
              text: "Ben seni koruyacağım. Söyle.", 
              effect: +25, 
              next: "'Komutanlıktan bir isim. Albay Demir değil. Asıl komutan. O gün Sektör-5\'te neden yoktu biliyor musun? Çünkü kapı açılacağını önceden biliyordu.' Sesi titriyor.",
              followUp: {
                text: "'O komutanın bir kızı vardı. Yıllar önce kayboldu demişlerdi ama yalan. Onu Sektör-0\'a verdiler. Test deneklerinden biriydi. Adı değiştirildi. Ben... ben onun şu an bu sığınakta olduğundan şüpheleniyorum.'",
                choices: [
                  { text: "Kimi kastediyorsun? Sessiz Kadın\'ı mı?", effect: +20, next: "'Belki de... Ya da kendini hiç belli etmeyen birini. Dikkatli ol asker, kimse göründüğü gibi değil.'" },
                  { text: "Bu sırrı benimle paylaştığın için sağ ol.", effect: +10, next: "Hafifçe başını sallıyor. 'Sır paylaştıkça ağırlaşır derler ama bende tam tersi oldu. Sonunda nefes alabildim.'" }
                ]
              }
            },
            { text: "Bu yükü taşımaya devam edemezsin.", effect: +15, next: "'Biliyorum. Her gece aynı el. Artık uyuyamıyorum.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 3 — TÜCCAR SALİH
    // ─────────────────────────────────────────────
    trader_salih_d3: {
      name: "Tüccar Salih",
      role: "Gün-3 · Gezgin Tüccar",
      image: "/faces/d3_trader.png",
      low: [
        {
          text: "Bak asker, ben buraya oturmaya gelmedim. Kapı aralandığında ben yine yoldayım.",
          choices: [
            { text: "Dışarıda ne gördün anlat.", effect: +12, next: "'Çok şey. Ve çoğu kötü. Ama bazı yerlerde hâlâ insan kokusu var. Nadir ama var.'" },
            { text: "Burada güvendesin en azından.", effect: +8, next: "'Güvenli mi? Durdukça tehlikeli olunur. Yolda olunca güvenli olunur.'" },
            { text: "Sana ihtiyaç duyabiliriz.", effect: +5, next: "'Ben her zaman iş yaparım asker. Fiyatı konuşuruz.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sektör-5 düşmeden iki gün önce ordaydım. Garip bir sakinlik vardı. İnsanlar birbirlerine bakıyor ama gülümsemiyordu.",
          choices: [
            { 
              text: "Ne tür bir sakinlik?", 
              effect: +15, 
              next: "'Panik öncesi sakinlik. Görmüşümdür. Gözler boş ama huzurlu. Sis öncesinde böyle oluyor. Seçilenlerin kokusu değişiyor.' Sesi titriyor.",
              followUp: {
                text: "Sandalyeye yaslanıp sana kurnazca bakıyor. 'Sis aslında ne biliyor musun? Bir tür hafıza silici. İnsanlar delirmiyor, unutuyorlar. En sevdiklerinden başlayarak... Sen en son neyi unuttuğunu hatırlıyor musun?'",
                choices: [
                  { text: "Ben hiçbir şeyi unutmadım.", effect: -5, next: "Acı acı gülüyor. 'İşte bu, unutmanın ilk aşamasıdır dostum.'" },
                  { text: "... Ailemin yüzünü. Gerçekten de hatırlayamıyorum.", effect: +15, next: "'Hoş geldin gerçek dünyaya. İşte bu yüzden maske satıyorum... En azından yüzlerin bir şekli oluyor.'" }
                ]
              }
            },
            { text: "Burası farklı mı?", effect: +10, next: "'Şu an farklı. Ama ne kadar sürer bilmiyorum.'" },
            { text: "Sektör-5'i düşüren ne oldu?", effect: +12, next: "'Kapı içten açıldı. Ben de dışarıdalıkta fark ettim. Kaçmak için iki dakikam oldu.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir harita vereceğim. Bulmayı bekliyordum ama sens bu sektörün tek güvenilir ismi gibi görünüyorsun.",
          isSpecial: true,
          choices: [
            { 
              text: "Bu neresi?", 
              effect: +25, 
              next: "'Sektör-3 altında eski yeraltı deposu. Tıbbi malzeme var, mühürlü bölümde. Doktoruna ver. Eğer güvenilirse.' Haritayı uzatıyor.",
              followUp: {
                text: "Haritayı verirken kolunu tutuyor sıkıca. 'Oraya gidersen, D-Blok kapısına dikkat et. Üzerinde mavi bir üçgen çizili kapı. Onu açma. Ne duyarsan duy açma. Tamam mı?'",
                choices: [
                  { text: "Mavi üçgen mi? Bu neyin işareti?", effect: +15, next: "'Bunu ben de bilmiyorum ama o kapının arkasında insan olmayan şeyler var. Açma.'" },
                  { text: "Tıbbi malzemeleri alıp çıkacağım. Söz.", effect: +10, next: "'Akıllıca. Zaten o karanlıkta fazla kalmak istemezsin.'" }
                ]
              }
            },
            { text: "Neden benimle paylaşıyorsun?", effect: +18, next: "'Çünkü kapıda benim yüzüme bakarak doğru soruları sordun. Anlarsın neyin değerli olduğunu.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 3 — AĞLAYAN KIZ
    // ─────────────────────────────────────────────
    crying_girl_d3: {
      name: "Küçük Ezel",
      role: "Gün-3 · Çocuk",
      image: "/faces/d3_crying_girl.png",
      low: [
        {
          text: "Ağabey... Neden burası bu kadar karanlık? Işık yok mu?",
          choices: [
            { text: "Elektrik kısıtlı ama güvenliyiz.", effect: +10, next: "'Tamam.' Elleri kavuşuyor. 'Gözlerim alışacak mı?'" },
            { text: "Karanlık aslında seni koruyor.", effect: +8, next: "Gözleri büyüyor. 'Gerçekten mi? Bunu düşünmemiştim abi.'" },
            { text: "Sorun yok, alışırsın.", effect: -3, next: "Sessizce oturuyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Abi Bozkır'ı gördüm dün gece. Ellerini yüzüne kapatmıştı ve omuzları böyle iniyordu. Ağlıyordu muydu?",
          choices: [
            { text: "Sen harika bir gözlemcisin Ezel.", effect: +20, next: "'Annem de öyle derdi! Abi sen güzel birisin.' Işıl ışıl gülümsüyor." },
            { text: "Büyüklerin bazen ağlaması gerekir.", effect: +12, next: "'Babam da öyle yapardı. Tek başına. Sonra gülerdi sanki bir şey olmamış gibi.' Küçük avuçlar birleşiyor." },
            { text: "Gece dışarı çıkma.", effect: -5, next: "Biraz büzülüyor. 'Biliyorum abi.'" }
          ]
        }
      ],
      high: [
        {
          text: "Abi sana bir şey göstereceğim ama söz ver, kimseye söylemeyeceksin.",
          isSpecial: true,
          choices: [
            { text: "Söz Ezel, sadece ben bakacağım.", effect: +25, next: "Cebinden küçük kırık bir rozet çıkarıyor. Üzerinde 'SEKTÖR-0' yazısı görünüyor. 'Duvarın dibinde buldum. Ne yazıyor abi?'" },
            { text: "Güveniyorum sana.", effect: +18, next: "Etrafına iyice bakındıktan sonra küçük bir şey uzatıyor." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 5 — GÖZEVCİ NACİYE
    // ─────────────────────────────────────────────
    aunt_observer_d5: {
      name: "Gözcü Naciye",
      role: "Gün-5 · Sektör Hafızası",
      image: "/faces/d5_aunt_observer.png",
      low: [
        {
          text: "Sen kim oluyorsun ki benim köşeme geliyorsun? Yaşlıların yeri burası.",
          choices: [
            { text: "Seninle konuşmak istedim Naciye Teyze.", effect: +8, next: "'Konuş bakalım. Ama yavan şeyler söyleme.'" },
            { text: "Sığınakta nasılsın diye sormak istedim.", effect: +12, next: "'Kim sorar ki bunu bana... Otur bakalım.' Elleri onu işaret ediyor." },
            { text: "Genel durumu sormak istedim.", effect: +5, next: "'Genel mi? Kötü. Hep kötü. Ama hâlâ buradayız.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Bu sektörden geçen insanları bir yere yazıyorum. Tarihleri unutulmasın diye. Kim geldi, neyi anlattı.",
          choices: [
            { text: "Sen bu sektörün hafızasısın Naciye Teyze.", effect: +20, next: "Elleri titriyor biraz. 'İlk defa biri bunu söylüyor. Ben... evet. Ben yazardım eskiden. Küçük bir dergide. İnsanların hikayeleri. Sis aldı hepsini.'" },
            { text: "Anlat bana bir hikaye.", effect: +15, next: "'Hangisini? Her biri ayrı bir kitap. Bugün... Selim'in annesini anlatayım. İleride bir şey yaklaştığında Selim'i aklında tut.'" },
            { text: "Bu tarihin ne faydası var?", effect: -15, next: "'Tarihi olmayan insanlar köksüz ağaç gibidir evlat. Devrilirler.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana çok eski bir şeyi söyleyeceğim evlat. Burası daha önce vardı. Farklı isimle.",
          isSpecial: true,
          choices: [
            { text: "Nasıl? Bu sektör daha önce mi vardı?", effect: +22, next: "'Sektör-0 diyorlardı. Neden sıfır? Çünkü deneydiler. İlk kapı sistemi burada kuruldu. Ve ilk ihanet de. O zamanki kapıcı... komutanın dedesiydi.' Gözlerini kapıyor." },
            { text: "Kimse bilmiyor bunu değil mi?", effect: +15, next: "'Ben biliyorum. Ve sen biliyorsun artık. Bazı bilgiler harekete geçmeyi gerektirir, sadece saklamayı değil.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 6 — KURTADAM BOZKIR
    // ─────────────────────────────────────────────
    werewolf_bozkir_d6: {
      name: "Bozkır",
      role: "Gün-6 · Kurt Adam Muhafız",
      image: "/faces/character_bozkir.png",
      low: [
        {
          text: "...[Derin bir homurtu] Sen burada ne işin var? Bu köşe benim.",
          choices: [
            { text: "Seni görmek istedim Bozkır.", effect: +8, next: "Gözlerini kıstırıyor. 'Görmek mi? Yoksa kontrol etmek mi?' Sonra sırtını dönüyor." },
            { text: "Nasılsın diye sordum.", effect: +5, next: "Omzunu silkiyor. 'Hâlâ diriyim. Bu yeterlidir.'" },
            { text: "Gece tehlikeli miydi?", effect: +3, next: "'Her gece tehlikelidir burada. Ben... fark etmemi sağlar sadece.'" }
          ]
        },
        {
          text: "Bu çadır benim için çok küçük. Ama dışarısı artık güvenli değil benim gibi biri için de...",
          choices: [
            { text: "Burası senin evin Bozkır.", effect: +12, next: "Sana uzun süre bakıyor. Sonra sadece 'Ev...' diyor, sanki kelimeyi ilk kez duymuş gibi." },
            { text: "Neden dışarı çıkmıyorsun?", effect: +5, next: "'İnsanlar görürse panikler. Ve panik güvenliği öldürür.'" },
            { text: "Seni umursamak zorunda değilim.", effect: -18, next: "Derin bir homurtu. Sonra tamamen sessizlik." }
          ]
        }
      ],
      medium: [
        {
          text: "Gece bir şey hissettim. Sisin içinde hareket vardı. Ama sessiz. Çok sessiz. Bu beni korkutuyor.",
          choices: [
            { 
              text: "Ne tür bir hareket? Anlat.", 
              effect: +15, 
              next: "'İnsan eli değil. Metal gibi. Ölü gibi. Onu kokladım. Sis kokuyor ama bu farklıydı.'",
              followUp: {
                text: "Yüzünü sana yaklaştırıyor. Dev dişleri loş ışıkta parlıyor. 'Tünellerde de aynı kokuyu almıştım. Biz Sektör-0'da araştırma yaparken o koku... deney tüplerinden geliyordu. Sis fırtınadan önce kaza değildi asker. Birileri tüpleri açtı. Kimin yaptığını biliyor musun?'",
                choices: [
                  { text: "Bunu sormak benim görevim. Kim açtı?", effect: +10, next: "Hırıltılı bir nefes alıyor. 'Bir kadın. Siyah kıyafetli. Gözleri sisin kendisi gibi griydi. Ve onunla çalışan... yaşlı bir kadın daha vardı.'" },
                  { text: "Komplo teorileriyle uğraşacak vaktim yok.", effect: -10, next: "'Vaktin kalmadığında tırnaklarımın seni nasıl uyardığını hatırlarsın.'" }
                ]
              }
            },
            { text: "Belki hayal görüyorsundur.", effect: -8, next: "Gözleri daralıyor. 'Ben hayal görmem. Pençelerim gerçek. Kokuları da.'" },
            { text: "Sektör-7'yi koruyabilir misin?", effect: +10, next: "'Beden var. Diş var. Sabah 3'te ben uyanık olacağım. Sen değil.'" }
          ]
        },
        {
          text: "Kızım... adını söylesem de bilmez artık. Sis gelmeden önceki ben bir babaydı. Şimdi ne olduğumu bilmiyorum.",
          choices: [
            { text: "Hâlâ o babasın Bozkır. Değişmedi bu.", effect: +20, next: "Sesi kısılıyor. Pençesi taş duvara yaslanıyor yavaşça. Uzun bir sessizlik." },
            { text: "Kızın nerede şimdi?", effect: +8, next: "'Bilmiyorum. Kaçtılar sis gelince. Belki başka bir sektör. Belki...' Cümlesini bitiremiyor." },
            { text: "Geçmiş geçmişte kaldı.", effect: -10, next: "Sert bir bakış. 'Senin için belki.'" }
          ]
        }
      ],
      high: [
        {
          text: "Seninle bir şey paylaşacağım. Bunu kimseye söylemedim. Yemek için değil... söylemek zorundayım.",
          isSpecial: true,
          choices: [
            { text: "Dinliyorum.", effect: +20, next: "'Sis... bazılarını seçiyor. Rastgele değil. Ben bunu hissediyorum kokulardan. Seçilenlerin kokusu değişiyor. Tatlı ama çürük. Sen bu kokuyu taşımıyorsun. Ama içeride taşıyanlar var.' Gözleri doğrudan gözüne kilitleniyor." },
            { text: "Bu nasıl bir bilgi?", effect: +12, next: "'Beni yaratan bilgi. Sis beni dönüştürdü çünkü ben seçilmedim. Ben reddettim. Beden bedelini ödedi ama akıl kaldı.'" }
          ]
        },
        {
          text: "Eğer bir gece içeride alarm duyarsan ve ben oradaysam... benden korkma. Ben kontrol edebiliyorum. Şimdilik.",
          choices: [
            { text: "Sana güveniyorum.", effect: +25, next: "İlk kez gerçek anlamda sana bakıyor. Pençesiyle sol göğsüne vuruyor yavaşça. 'Bu... teşekkür.' diyor ve köşesine çekiliyor." },
            { text: "'Şimdilik' kelimesi beni korkutuyor.", effect: +5, next: "'Korku sağlıklıdır. Beni kör bir güvenle kabul etme. Korkunu bilgeliğe dönüştür.' Sonra karanlığa bakıyor." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 6 — DOKTOR ARZU
    // ─────────────────────────────────────────────
    doctor_arzu_d6: {
      name: "Doktor Arzu",
      role: "Gün-6 · Sektör Tabibi",
      image: "/faces/character_arzu.png",
      low: [
        {
          text: "Çok yorgunum. Sekiz saat duraksız revir. İlaç bitmiş, alet kırık...",
          choices: [
            { text: "Nasıl yardımcı olabilirim?", effect: +10, next: "Çantasına bakıyor. 'Şimdilik bir şey yok. Ama destek... önemli.' Hafifçe gülümsüyor." },
            { text: "Elimden geleni yaparım.", effect: +8, next: "'Biliyorum. Herkese aynı şeyi söylüyorum: sabırlı ol. Ama artık inandırıcı gelmiyor bana da.'" },
            { text: "Sistem yetersiz, elinden geleni yapıyorsun.", effect: +5, next: "'Yeterli değil bu. Ama devam etmekten başka seçenek yok.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Selim'in kanında bir şey var. Sıradan antikorlar değil. Karanlıkta parlıyor... Mikroskop olmadan bile fark ettim.",
          choices: [
            { 
              text: "Bu ne anlama geliyor?", 
              effect: +15, 
              next: "'Sis aşısına ulaşabiliriz belki. Ama laboratuvar lazım. Ve zaman. Ve biri buna inanmalı.' Gözleri umut dolu bakıyor.",
              followUp: {
                text: "Sana doğru eğiliyor. 'Sistemde kayıtlı olmayan bir yeraltı laboratuvarı var. Sektör-3'ün altında. Birileri kasten kilitledi. Oraya girip eski kan örneklerini almalısın.'",
                choices: [
                  { text: "Sektör-3'ün altı mı? Orayı Salih de bahsetmişti.", effect: +15, next: "'Salih mi? O yaşlı kurt çok şey biliyor. Eğer o da orayı gösteriyorsa, doğru yoldayız demektir.'" },
                  { text: "Bu çok tehlikeli, Arzu.", effect: -5, next: "'Dışarıdaki sis tehlikeli değil mi? Eğer adım atmazsak yavaş yavaş öleceğiz. Karar senin.'" }
                ]
              }
            },
            { text: "Tehlikeli mi bu durum?", effect: +8, next: "'Bilinmeyeni söyleyemem. Ama şu an tek umudumuz bu. Bence risk almaya değer.'" },
            { text: "Henüz inanamıyorum buna.", effect: -5, next: "Hafifçe inliyor. 'Anlarım. Ben de başta inanamadım.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir şey söyleyeceğim. Komutanlıktan sakladım. Çünkü panik çıkar.",
          isSpecial: true,
          choices: [
            { 
              text: "Söyle Arzu, dinliyorum.", 
              effect: +20, 
              next: "'Gri öksürük sadece bir semptom değil. Mutasyon aşamalı. İlk iki hafta fark edilmiyor. İçerimizde zaten taşıyanlar olabilir. Ama Selim'in kanı bize zaman tanıyabilir. Çalışmama izin ver.'",
              followUp: {
                text: "Sesi bir fısıltıya dönüşüyor. 'Eğer komutanlık bunu öğrenirse, Selim'i bizden alırlar. Denek yaparlar. Onu korumamız lazım. Ve benim... sessizce çalışabileceğim güvenli bir alana ihtiyacım var.'",
                choices: [
                  { text: "Sana güvenli bir alan sağlayacağım.", effect: +15, next: "'Teşekkür ederim. Sana güvenebileceğimi biliyordum. Selim'in gözlerindeki ışık sönmemeli.'" },
                  { text: "Komutanlık zaten biliyor olabilir.", effect: +10, next: "'O zaman acele etmeliyiz. Her saniye aleyhimize işliyor.'" }
                ]
              }
            },
            { text: "Bu bilgiyi nasıl yönetmeliyim?", effect: +15, next: "'Kimseye söyleme henüz. Paniği yönetemeyiz şu an. Ben seni haberdar ederim.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 6 — DÜRÜST VAKİF
    // ─────────────────────────────────────────────
    honesty_vakif_d6: {
      name: "Vakıf",
      role: "Gün-6 · Dürüst Tanık",
      image: "/faces/d6_honesty_man.png",
      low: [
        {
          text: "Ben her şeyi gördüm. Her şeyi. Ama kimse sormadı.",
          choices: [
            { text: "Ben soruyorum. Anlat.", effect: +15, next: "'İlk defa biri sormak için geliyor.' Derin bir nefes alıyor. 'Tamam. Ama uzun sürer.'" },
            { text: "Şimdi zaman yok, kısaca anlat.", effect: +3, next: "'Kısası yok. Bir şeyler önemli, kısaltırsan anlam çıkmaz.'" },
            { text: "Herkes bir şeyler gördüğünü söylüyor.", effect: -10, next: "'Ben gerçeği söylüyorum. Yalan söyleyenleri de görürsün zamanla.'" }
          ]
        }
      ],
      medium: [
        {
          text: "O gün sektörün giriş koridorunda bir toplantı vardı. Gizli. Dört kişi. Biri albaya benziyordu.",
          choices: [
            { 
              text: "Yüzlerini gördün mü?", 
              effect: +18, 
              next: "'İkisini. Biri sizdeki gözetleme subayına benziyordu. Öteki... çok uzaktaydım. Ama şunu söyleyeyim: hepsinde aynı rozet vardı. Mavi üçgen.'",
              followUp: {
                text: "Titrek elleriyle bir kağıt uzatıyor. Üzerinde mavi bir üçgen çizili. 'Bu işaret... Sektör-0 çöktüğünde de oradaydı. Onlar sisle savaşmıyor asker. Sisle çalışıyorlar.'",
                choices: [
                  { text: "Sisle mi çalışıyorlar? Nasıl?", effect: +15, next: "'Bir tür kontrol mekanizması... İnsanları seçiyorlar. Direnenleri yok ediyorlar. İtaat edenleri dönüştürüyorlar.'" },
                  { text: "Bu işareti daha önce bir yerde görmüştüm.", effect: +10, next: "'Uzak dur o işaretten. Gördüğün yerde arkanı dön ve koş.'" }
                ]
              }
            },
            { text: "Bunu neden şimdiye kadar söylemedin?", effect: +8, next: "'Kim soracaktı ki? Ben gidip anlatacak olsam kafamı yerlerdi.'" },
            { text: "Belki hayal görmüşsündür.", effect: -12, next: "'Hayal mi? Kalçamdaki kurşun da mı hayal? Bana sormak için geleceksin, sonra da hayal diyeceksin.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir isim vereceğim. Bu ismi duyar duymaz bir şeyler hissedeceksin. Çünkü o zaten sistem içinde.",
          isSpecial: true,
          choices: [
            { 
              text: "Söyle.", 
              effect: +25, 
              next: "'Teğmen Rıza. Gözetleme subayı. Gece mesaisi sırasında sinyalleri yönlendiriyor. Dışarıya. Her gece 03:14'te. Ben saydım.'",
              followUp: {
                text: "Gözlerini sıkıca kapatıyor. '03:14... Bu saati aklından çıkarma. O saatte dış kapının kilit mekanizması beş saniyeliğine devre dışı kalıyor. Biri, ya da bir şey içeri giriyor olabilir.'",
                choices: [
                  { text: "Bunu bu gece kontrol edeceğim.", effect: +20, next: "'Dikkatli ol asker. O saatte karanlıkta dolaşan sadece Rıza değil. Sis de içeri sızıyor.'" },
                  { text: "Rıza ile konuşacağım.", effect: -15, next: "'Deli misin sen? Seni o saniyede harcar. Gözlemle, ama yaklaşma.'" }
                ]
              }
            },
            { text: "Bu kesin mi?", effect: +18, next: "'Kesin. On iki gece saydım. Her gece 03:14. Bunu başka kimse bilmiyor.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 1 — YAŞLI MADENCİ
    // ─────────────────────────────────────────────
    miner_d1: {
      name: "Yaşlı Madenci",
      role: "Gün-1 · Emektar İşçi",
      image: "/faces/d1_miner.png",
      low: [
        {
          text: "Kırk yıl bu toprağa aşağıdan baktım. Şimdi yukarıdan bakıyorum. Fark yok asker, yer altı da şu an olduğu gibi karanlıktı.",
          choices: [
            { 
              text: "Ne gördünüz yer altında?", 
              effect: +12, 
              next: "Ellerini masaya döşüyor. 'Sektör-0 altında tüneller vardı. Kimsenin bilmediği. Bize 'kömür arama' dediler. Ne aradığımızı bilmiyorduk.'",
              followUp: {
                text: "İhtiyar etrafına bakınıyor ve sesini alçaltıyor: 'Ama kayaların arasında kömürden daha siyah, damar gibi atan bir maddeler bulduk. Dokunanlar değişmeye başladı...'",
                choices: [
                  { text: "Nasıl değiştiler? Fiziksel olarak mı?", effect: +10, next: "'Önce öksürük, sonra gözleri bulandı. En son... bizi tanımamaya başladılar. Onları orada bırakmak zorunda kaldım.'" },
                  { text: "Bunu yetkililere bildirdiniz mi?", effect: -5, next: "Acı acı gülümsüyor. 'Yetkililer mi? O tünelleri zaten onlar kazdırıyordu asker...'" }
                ]
              }
            },
            { text: "Burası güvenli, dinlenin biraz.", effect: +5, next: "'Güvenli mi?' Güldü yalnızca. Ama iyi anlamda değil." },
            { text: "Şu an önemli olan kömür değil, hayatta kalmak.", effect: -8, next: "'Sen de öğrenirsin biraz sabreyle. Her şeyin sonu kömür gibi yanıyor zaten.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sektör-0 çöktüğünde ben oradaydım. Otuz yıl önceydi. İçeride kimyasal vardı, asker. Bize 'yer gazı' dediler. Ama rengi yoktu. Renksiz şeylere dikkat et.",
          choices: [
            { 
              text: "O kimyasalın sis ile ilgisi olabilir mi?", 
              effect: +20, 
              next: "'Birden anladın. Ben yirmi yıl düşündüm bunu.' Sesi tiz çıkıyor. 'Aynı koku. Aynı uyuşma. Ama devlet kabul etmez. Hiç etmedi.'",
              followUp: {
                text: "Öksürük krizine giriyor. 'Siyah sıvı... Sadece bir yakıt değildi. Kan gibi akıyordu. Canlıydı. Bize kazdırdıkları şey bir maden değildi evlat. Uyuyan bir şeyi uyandırdık.'",
                choices: [
                  { text: "Uyuyan bir şey mi? Bir varlık mı?", effect: +15, next: "'Ben ona varlık demem. O bir zihin. Sis, onun sadece nefesi.' Gözlerindeki dehşet büyüyor." },
                  { text: "Bu sadece senin kuruntun olabilir.", effect: -10, next: "'Keşke öyle olsaydı... Keşke sadece benim aklımın bir oyunu olsaydı.'" }
                ]
              }
            },
            { text: "Devlet örtbas etmiş olabilir mi?", effect: +15, next: "'Örtbas değil, planlı. Beni dinle: Sektör-0 tünellerinden siyah bir sıvı aktarıldı. Sefer sonrası arkadaşlarım hastalandı. Ben hayatta kaldım çünkü oksijen maskesi çalmıştım.'" },
            { text: "Hafıza her zaman güvenilir değildir.", effect: -10, next: "'Hafıza mı? Ellerimde hâlâ o kimyasalın yanık izi var. Bak.' Ellerini uzatıyor. Gerçekten derin izler var." }
          ]
        }
      ],
      high: [
        {
          text: "Beni dinliyorsan bir şey söyleyeceğim. Yaşlı adam zırvalıyor diyeceksin ama can sıkıntısından değil söylüyorum — Vera'nın babasını tanıdım.",
          isSpecial: true,
          choices: [
            { 
              text: "Vera'nın babasını mı? Anlat.", 
              effect: +28, 
              next: "'Mühendisti. Sektör-0 projesinde. \'Beyaz Sis\' denen programın başındaydı. Bir gün kayboldu. Vera henüz küçücüktü. Program durdu ama veriler durmadı — aktarıldı. Kime? Bilmiyorum. Ama şimdi o sis dışarıda. Ve içeride bir şeyler hâlâ devam ediyor.'",
              followUp: {
                text: "Sesini fısıltıya indiriyor. 'Kızın... Vera'nın gözlerine iyi bak. Babasının o siyah sıvıya olan takıntısı, sadece işten ibaret değildi. Kendi kanıyla bir şeyler denemiş olabilir. Vera'da bir farklılık var, asker. Onu izle.'",
                choices: [
                  { text: "Vera güvende olacak. Buna izin vermem.", effect: +20, next: "'Umarım dediğin gibi olur. Babası onu koruyamadı. Sen koru.'" },
                  { text: "Onun tehlikeli olduğunu mu söylüyorsun?", effect: +5, next: "'Tehlikeli mi? Belki de tek kurtuluşumuz odur. Ama uyanırsa...'" }
                ]
              }
            },
            { text: "Beyaz Sis programı neydi?", effect: +20, next: "'Resmi adı yoktu. Ama biz işçiler 'Proje Sıfır' derdik. İnsan vücudunu... dönüştürme deneyleri. Hayatta hiç konuşmadım bunu.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 2 — SESSİZ KADIN
    // ─────────────────────────────────────────────
    silent_woman_d2: {
      name: "Sessiz Kadın",
      role: "Gün-2 · Bilinmez Kimlik",
      image: "/faces/d2_silent_woman.png",
      low: [
        {
          text: "[ Sizi duymuyor gibi yapıyor. Sonra bir kağıt parçası uzatıyor. Üzerinde tek kelime yazmış: 'KAÇIN.' ]",
          choices: [
            { text: "Neden kaçalım? Kim geliyor?", effect: +15, next: "[ Cevap vermiyor. Ama gözleri kapıya gidiyor, sonra tavana. Yukarıda bir şey var — bunu ima ediyor. ]" },
            { text: "Konuşabilirsin, burada güvendesin.", effect: +10, next: "[ Dudaklarını sıkıyor. Parmağıyla boğazını gösteriyor. Konuşamıyor — ya da konuşmak istemiyor. ]" },
            { text: "Anlayamıyorum seni.", effect: -5, next: "[ Kağıdı geri alıyor, çöpe atıyor. Sessizce sırtını dönüyor. ]" }
          ]
        }
      ],
      medium: [
        {
          text: "[ Bu sefer not daha uzun: 'Onlar içeride. Geceleri değiştirleniyorlar. Masum görünüyorlar ama sisin kokusu var üstlerinde.' ]",
          choices: [
            { 
              text: "Kimden bahsediyor? İsim ver.", 
              effect: +20, 
              next: "[ Duraklıyor. Sonra üç isim yazıyor. İkisi tanıdık geliyor — sığınakta çalışan personelden. Üçüncüsü... senin ismin. ]",
              followUp: {
                text: "[ Notun altına hızla bir şeyler daha karalıyor: 'Sen henüz dönüşmedin. Ama kanında o var. Gece 03:14'te hissettiğin o baş ağrısı... O seni çağırıyor. Direnmen lazım.' ]",
                choices: [
                  { text: "Ben dönüşmeyeceğim. Söz veriyorum.", effect: +15, next: "[ Gözlerine bakıyor uzun uzun. Sonra küçük bir onaylamayla başını sallıyor. 'İnanıyorum.' yazıyor. ]" },
                  { text: "Eğer dönüşürsem beni öldür.", effect: +25, next: "[ Gözyaşları birikiyor gözlerinde. Elini senin elinin üzerine koyuyor. 'Umarım o gün gelmez.' yazıyor yavaşça. ]" }
                ]
              }
            },
            { text: "Sis kokusu nasıl anlaşılır?", effect: +15, next: "[ 'Gözler' yazıyor. 'Küçük damarlara bak. Grileşiyor. Erken evrede.' ]" },
            { text: "Paranoya salgın dönemlerinde yaygındır.", effect: -12, next: "[ Kolunu açıyor. Dirsek içinde silik gri damarlar görünüyor. Sana sert bakıyor. ]" }
          ]
        }
      ],
      high: [
        {
          text: "[ Sesi yok ama bu sefer farklı bir not: 'Ben ORACLE'ın kız kardeşiyim. Beni bulmasından önce konuşmam gerek.' Titrek ama net bir yazı. ]",
          isSpecial: true,
          choices: [
            { 
              text: "ORACLE'ı tanıyor musun?", 
              effect: +30, 
              next: "[ Başını sallıyor. Yazar: 'O kaybı seçti. Sisi görmesin diye gözlerini bağladı — kendi eliyle. Ama ben gördüm. Vera'nın laboratuvarında neler yaptıklarını gördüm. Ve beni susturmak için bunu yaptılar.' Boğazını tekrar gösteriyor. Ameliyat izi var. ]",
              followUp: {
                text: "[ Titreyen elleriyle büyük harflerle yazıyor: 'GÜMÜŞ PROTOKOLÜ. Sığınağın altındaki asıl amaç bu. Sizi korumak değil, incelemek. Ve zamanı geldiğinde... kapıları açacaklar.' ]",
                choices: [
                  { text: "Buna izin vermeyeceğim. Sen de yardım edeceksin.", effect: +25, next: "[ Kararlılıkla sana bakıyor. Elini kalbine koyuyor. Yanındayım, der gibi. ]" },
                  { text: "Bu delilik! Ne yapabiliriz ki?", effect: -5, next: "[ Omuzları çöküyor. Seni yanlış anladığını düşünerek not defterini kapatıyor. ]" }
                ]
              }
            },
            { text: "Bu bilgi çok değerli. Koruyacağım seni.", effect: +22, next: "[ Uzun süre bakıyor. Sonra bir koordinat yazıyor. 'Sektör-0. Alt tünel. Orada kanıt var.' ]" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 2 — KÖPEK ADAM
    // ─────────────────────────────────────────────
    dog_man_d2: {
      name: "Köpek Adam",
      role: "Gün-2 · Sokak Bekçisi",
      image: "/faces/d2_dog_man.png",
      low: [
        {
          text: "Ağamın Karabaş, Terhanlı'nın Sarı, ve Deli Hüseyin'in Boz'u — üçü de sis gelmeden bir hafta önce kayboldu asker. Hayvanlar bilir. İnsanlar bilmeden hayvanlar bilir.",
          choices: [
            { text: "Hayvanların duyargası bizden keskin.", effect: +12, next: "'İşte bu! Siz askerler anlarsınız. Karabaş doğuya kaçtı. Sis de doğudan geldi. Bak nasıl örtüşüyor.'" },
            { text: "Bu bir tesadüf olabilir.", effect: +3, next: "'Tesadüf mü? Sarı on yıldır o mahalledeydi. Kıpırdamazdı. Bir hafta önce gitti. Tesadüf değil bu.'" },
            { text: "Köpeklerle vaktim yok şimdi.", effect: -15, next: "Susuyor. Sonra sessizce: 'Umursamayanlar ilk gider.' diye mırıldanıyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Köpekleri hatırladın mı? Ben onları takip ettim. Doğuya, sonra aşağıya — zeminin altında bir tünel ağına giriyorlardı. Köpekler biliyordu. Kaçış yolu burası.",
          choices: [
            { text: "Tünelin girişini biliyor musun?", effect: +22, next: "'Biliyorum. Ama kolay değil. Sektör sınırının son direğinin altında. Ama orası... geceleri başka şeyler de kullanıyor.' Yutkunuyor." },
            { text: "O tüneller güvenli mi?", effect: +15, next: "'Hayranlar için değil. Ama köpekler geçti, ben de geçtim. İnsan da geçer.' Duraksıyor. 'Gidip dönenler geçer.'" },
            { text: "Tünel bilgisini raporlayacağım.", effect: -5, next: "'Rapor etme. Bilenlerin başına gelen gördün mü? Yok oluyorlar.' Sesi kısılıyor." }
          ]
        }
      ],
      high: [
        {
          text: "Sana söylemem gereken bir şey var. O tünelde Vera'nın adamlarını gördüm. Defalarca. Gece iniyor, sabah çıkıyorlar. Ve her seferinde yanlarında bir şey taşıyorlar — büyük, uzun şişeler.",
          isSpecial: true,
          choices: [
            { text: "Şişelerde ne vardı?", effect: +28, next: "'Beyaz sıvı. Ama bazen ışıldıyordu. Gerçekti. Ve o şişelerin birini kırdım. Toprağa değdi. O toprak haftalar sonra grileşti. Sis toprağa da geçiyor.'" },
            { text: "O tünele nasıl girilir, göster.", effect: +20, next: "'İlk direğin kuzeyinde çöken beton var. Altında boş alan. Ama hazır ol — içeride sesler var. İnsan sesi gibi değil.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 3 — GECELÖRE
    // ─────────────────────────────────────────────
    night_vision_d3: {
      name: "Gecelöre",
      role: "Gün-3 · Karanlık Kaşifi",
      image: "/faces/d3_night_vision.png",
      low: [
        {
          text: "Ben geceleri çalışırım. Sektör sınırını her gece haritalarım. Biliyor muydun? Kimse sormadı ama ben biliyorum neyin nerede olduğunu.",
          choices: [
            { text: "Sektörün dışında ne var?", effect: +15, next: "'Çok şey. Vera'nın karavanları. Gözetleme noktaları. Ve... canlı olmayan ama hareket eden şeyler. Zamanla anlatırım.'" },
            { text: "Bu bilgiler stratejik açıdan değerli.", effect: +10, next: "'Biliyorum. Bu yüzden buradasın seninle konuşuyorum.'  Sırıtıyor kısa bir an." },
            { text: "Gece dışarı çıkmak tehlikeli.", effect: -8, next: "'Tehlikeli değil eğer biliyorsan nasıl yapılacağını. Bilmeyenler için tehlikeli.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'nın dış devriyelerini saydım. Her gece tam 03:00'te yer değiştiriyorlar. 3 dakika boşluk var. Sektörün kuzeyinde. Bunun bir anlamı var.",
          choices: [
            { text: "O 3 dakika kaçış için yeterli mi?", effect: +20, next: "'Kaçış değil, giriş için yeterli. Biri dışarıya düzenli olarak bir şeyler götürüyor. Sığınaktan. Ve ben görmüşüm.'\" Sesi alçalıyor." },
            { text: "İçeride casus var mı demek istiyorsun?", effect: +18, next: "'Casus değil... koordinasyon sağlayan biri. Vera devriyelerinin boşluğunu biliyor. Bu tesadüf değil. Birisi onu bilgilendiriyor.'" },
            { text: "Bu olasılığı araştıracağım.", effect: +8, next: "'Araştır. Ama dikkatli ol. Bu kişi seni de izliyor olabilir.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir şey göstereyim. Dün gece çektim bunu. Dış sektör sınırında. Vera'nın gemisi değil bu — başka bir şey. Çok büyük, sigara izmariti gibi şekli var ve sessiz.",
          isSpecial: true,
          choices: [
            { text: "Bu ne zaman ve nerede?", effect: +28, next: "'Kuzey çit, gece yarısı. Ses yok, ışık yok. Ama toprağa değdiği yerde sis yoğunlaşıyor. Bir saat sonra üç kişi çıktı içinden — resmi diyorum, üniformaları vardı ama Vera'nın değil. Başka bir örgüt.' Gözleri kısılıyor. 'Devlet içinde devlet.'" },
            { text: "Koordinatları ver, kayıt altına alalım.", effect: +22, next: "'Zaten yazdım. Al.' Bir kağıt uzatıyor. 'Ama bu bilgi yanlış ellere geçerse ikimiz de biteriz.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 4 — ŞİFACI
    // ─────────────────────────────────────────────
    healer_d4: {
      name: "Şifacı",
      role: "Gün-4 · Sağaltıcı",
      image: "/faces/d4_healer.png",
      low: [
        {
          text: "Yaraları sardım bugün. Sekiz kişi. Yarısı standart yara. Ama diğer yarısı... farklı bir his. Doku rengi normale dönmüyor. Gri kalıyor.",
          choices: [
            { text: "Grileşen doku sis maruziyetinin belirtisi mi?", effect: +15, next: "'Tam bilmiyorum. Ama doğal değil bu. İlaç veriyorum, iyileşmiyor. Bitkisel tedavi denedim, yine yok. Sanki vücut savaşmayı bırakmış gibi.'" },
            { text: "Doktor Arzu bunu biliyor mu?", effect: +10, next: "'Arzu kendi bölümünü yeterince meşgul. Ama evet, görünce şaşırdı o da. Birlikte not aldık.'" },
            { text: "Sığınaktaki sağlık durumu raporlarına ulaşabilir miyim?", effect: +8, next: "'Verebilirim. Ama bazı kayıtlarda boşluklar var — bir kısım hâlâ şifreli.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Bak sana, ama bu aranızda kalacak: Üç haftadır yaraları takip ediyorum. Normal yara kapanır. Ama bunlar kapandıktan sonra gri çizgi bırakıyor. Üstlerinde. Sanki içten bir şey büyüyor.",
          choices: [
            { text: "Bu büyüme enfektasyon süreci mi?", effect: +20, next: "'Enfeksiyon değil. Enfeksiyon ateş yapar, iltihaplanma olur. Bu sessiz. Ve sistematik. Hep damarları takip ediyor. Damar boyunca ilerliyor.' Duraksıyor. 'Programlanmış gibi.'" },
            { text: "Kaç kişide gördün bunu?", effect: +18, next: "'Altı. Şimdilik. Ama ikisi artık burada değil — gitmeleri gerekti. Kontrol grubu kalmıştı, onları takip edemedim.'" },
            { text: "Bu bilgiyi kayıt altına almayı düşünüyor musun?", effect: +5, next: "'Düşünmüştüm. Ama kayıt sistemi kimin elinde? Emin olamıyorum.'" }
          ]
        }
      ],
      high: [
        {
          text: "Biri bana bir şey getirdi. İlaç değil. Şişede sıvı. İçinde küçük tanecikler var — görünmez neredeyse. 'Sis bağışıklığı' dedi. 'Tesiste üretildi.' Adı olmayan biri getirdi.",
          isSpecial: true,
          choices: [
            { text: "O sıvıyı kimseye kullandırdın mı?", effect: +25, next: "'Hayır! Tanımadan kullanamam. Ama analiz ettim. O tanecikler... canlı. Küçük mekanizmalar gibi. Biyolojik değil, yapay. Kim bunları üretebilir?' Gözleri korkuyla parlıyor. 'Ve neden bana getirdi o adam?'" },
            { text: "O adamı tanımlayabilir misin?", effect: +20, next: "'Yüzü yoktu. Yani, maskeleydi. Ama sesi... genç değildi. Ve 'Araş'a ilet' dedi. Sadece o kadar.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 4 — ÖĞRETMEN
    // ─────────────────────────────────────────────
    teacher_d4: {
      name: "Öğretmen",
      role: "Gün-4 · Eski Eğitimci",
      image: "/faces/d4_teacher.png",
      low: [
        {
          text: "Çocuklara ders veriyordum burada. Sonra biri 'tehlikeli olabilir' dedi. Okul tarih mi, coğrafya mı, bilim mi öğretmeli ki tehlikeli olsun?",
          choices: [
            { text: "Hangi konular tehlikeli bulundu?", effect: +15, next: "'Sis öncesi dönem. Sektör-0 tarihi. Proje kayıtları. Bunları müfredata almıştım. Ertesi gün beni çağırdılar.' Acı acı gülüyor." },
            { text: "Çocukların eğitimine devam edebilirsiniz.", effect: +10, next: "'Devam ediyorum aslında. Ama şimdi sadece şiir ve matematik. Tarihi kendim saklıyorum.'" },
            { text: "Burada öncelik eğitim değil hayatta kalmak.", effect: -10, next: "'Tarihini bilmeyenler aynı hataları tekrarlar. Bu da hayatta kalmakla ilgili.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sektör-0 tarihi diye bir belge toplamıştım yıllarca. On yılı aşkın süre. Devlet arşivlerinden, sahadan, tanıklardan. Sonra tüm bunları 'kayıp' oldu. Ama ben ezbere biliyorum.",
          choices: [
            { 
              text: "Ne öğrendindiğini bize anlat.", 
              effect: +22, 
              next: "'Proje Gümüş 1987'de başladı. Resmi adı: Çevre Adaptasyon Programı. Gerçek amacı: İnsanları bölgeye bağlamak. Yer altına. Ama bir şey ters gitti — o zaman da sis çıkmıştı. Küçük çaplı. Gizlendi.' Yutkunuyor. 'Şimdi büyük çaplı.'",
              followUp: {
                text: "'Peki bu sisin insanları neden delirtiğini hiç düşündün mü? Çünkü sis zihinleri birbirine bağlıyor. Zayıf olanların zihni, ortak kâbusa dayanamayıp parçalanıyor.' Sana doğru eğiliyor: 'Sektör 7'nin alt katlarına inersen asıl sunucuları göreceksin, onlar hâlâ çalışıyor.'",
                choices: [
                  { text: "Bunu anlattığın için devlet seni hedef mi aldı?", effect: +10, next: "Kafasını sallıyor. 'Sadece beni değil. Gerçeği bilen herkes teker teker kayboldu sümen altından. Ben şanslıydım, sis çıktığında buraya sığındım.'" },
                  { text: "Alt katlara inmek intihar demek. Bu bir efsane.", effect: -5, next: "'Efsane değil. Ama intihar olduğu kesin. Korkuyorsan burada kal asker, ben sadece olanı söylerim.'" }
                ]
              }
            },
            { text: "Devlet bu konuda ne biliyor?", effect: +18, next: "'Devlet bunu yaptı diyemem. Ama devletin içindeki bir birim yaptı. Proje Sıfır. Ve bu birim hâlâ aktif.'" },
            { text: "Bu bilgilerin doğruluğu ne kadar güvenilir?", effect: +5, next: "'Belgeleri gördüm. Fotoğraflarını çektim. Onlar da kayboldu. Ama kafam kaybolmadı.' Sert bakıyor." }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir şeyi vermek istiyorum. Kaçarken bir kitabın içine saklamıştım. Bunlar asıl Proje Gümüş dokümanlarının elle yazılmış notları. Orijinalleri yoktu ama ben okumuştum — kelimesi kelimesine.",
          isSpecial: true,
          choices: [
            { text: "Bu notlar çok değerli. Muhafaza edilecek.", effect: +28, next: "'İçinde bir şey var dikkatini çekecek: Sektör-0 deneyleri iki aşamaydı. Birinci aşama başarısız — katılımcılar... kayboldu. İkinci aşama şu an devam ediyor. Dışarıdaki sis ikinci aşamanın yan ürünü. Ve hedef: toplu mutasyon değil, seçici dönüşüm. Seçilenleri dönüştürüp geri yerleştiriyorlar.'" },
            { text: "Seçilenler kimler?", effect: +20, next: "'Bilmiyorum. Ama içinde olanlar bunu bilmiyor. Yavaş, fark ettirmeden oluyor.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 4 — RAHİP (KARANLIK KARAKTER)
    // ─────────────────────────────────────────────
    priest_d4: {
      name: "Rahip",
      role: "Gün-4 · Şüpheli İnanç",
      image: "/faces/d4_priest.png",
      low: [
        {
          text: "Sizi görüyorum asker. Kapıda kim girebilir kim giremez diye karar veriyorsunuz. Güzel bir görev. Ama sizi izleyen var mı hiç düşündünüz mü?",
          choices: [
            { text: "Buraya dini bağlamda mı geldiniz?", effect: +5, next: "'Her yer hem tapınak hem pazar. Ben yalnızca gözlemleyenim. Ve gözlemlediklerim... ilginç.' Gülümsüyor ama gözleri gülmüyor." },
            { text: "Sizi izleyen kim?", effect: -5, next: "'Cevap vermek istemiyorum henüz. Ama soru doğru.' Başını eğiyor." },
            { text: "Burada güvendesiniz, merak etmeyin.", effect: +3, next: "'Güvenlik yanılsaması tehlikelidir.' Cüppesini düzeltiyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Merak ediyor musunuz neden buradayım? Her yer kapalıyken sizin kapınızı çaldım. Çünkü içeride... bir şey var. Sizi koruyan değil — sizi izleyen.",
          choices: [
            { text: "Ne demek istiyorsunuz tam olarak?", effect: +10, next: "'Duvarlar konuşur bazen. Gece solunum sesleri gelir yerlerden. Sığınak içinde bir varlık var, asker. Ama bu varlık sizden önce buraya geldi.' Sesi düşük ve sakin — bu onu daha ürkütücü yapıyor." },
            { text: "Bu dini bir söylem mi, gerçek bir uyarı mı?", effect: +8, next: "'İkisi de. Şu ana kadar 7 kişi uyandım dedi. Aynı rüyayı görüyorlar. Kovidor numarası: 14. İçinde beyaz bir kadın. Konuşmuyor. Sadece bakıyor.'" },
            { text: "Paranoya salgının bir belirtisi olabilir.", effect: -15, next: "'Paranoya mı?' Sakin ama buz gibi bir ses. 'Peki 7 kişi de aynı anda mı paranoya geçirdi?'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Rahip bu sefer sizi çağırdı. Tek başına, geç saatte. Kapıyı kapattı, sesi son derece alçak: ] 'Ben Vera ile konuştum. Bağlantı kurdu benimle. Ve sizi uyarması için gönderdi beni buraya.'",
          isSpecial: true,
          choices: [
            { text: "Bu provokasyon mu, gerçek mi?", effect: +15, next: "'İkisi de değil. Ben bir araç olarak kullanıldım. Vera bilgi istiyor — sığınaktaki savunma kapasitesi, insan sayısı, kritik personel. Ben vermedim. Ama o bana zaten biliyor olabileceğini ima etti. Başka birisi vermiş olabilir.' Son cümle soğuk düşüyor." },
            { text: "Vera'nın mesajı ne?", effect: +8, next: "'On dört gün sonra kapı açılacak. Direnenlere zarar verilecek. Teslim olanlara... dönüşüm. Bu kelimeyi kullandı. Dönüşüm. Ne anlama geldiğini sorun kendinize.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 5 — KAÇAN ADAM
    // ─────────────────────────────────────────────
    chased_man_d5: {
      name: "Kaçan Adam",
      role: "Gün-5 · Takip Edilmiş",
      image: "/faces/d5_chased_man.png",
      low: [
        {
          text: "Bırak beni burada oturayım. Görmeni istemiyorum. Görmeni istemiyorum çünkü beni takip edenler seni de bulur.",
          choices: [
            { text: "Kim takip ediyor sizi?", effect: +12, next: "'İsim söylemem. Ama çok organize bir grup. Üniformaları yok ama koordineli. Beni şehrin dört farklı noktasında gördüm. Duvarın içinde.'" },
            { text: "Burası güvenli, onlar içeri giremez.", effect: +5, next: "'Giremez mi?' Acı bir tebessüm. 'Sen içeridekilere güvenebiliyor musun?'" },
            { text: "Ne yaptınız da sizi takip ediyorlar?", effect: +8, next: "Uzun bir sessizlik. 'Bir şey gördüm. Görmemem gerekiyordu.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sana söyleyebileceğim şeyler var ama söylersem ikimiz de tehlikede oluruz. Hazır mısın böyle bir bilgi için?",
          choices: [
            { text: "Evet, söyle.", effect: +20, next: "'Vera'nın karargahında çalıştım. Temizlik görevlisiyim. Ama temizlerken görüyorsun işte. Bir laboratuvar var — alt katta. İnsanlar giriyor, farklı çıkıyorlar. Gözleri aynı ama içleri değil." },
            { text: "Kanıtın var mı?", effect: +15, next: "'Var. Fotoğraf değil ama koordinat. Girişin tam yeri. Ve o girişte her gece biri bekliyor — içeriden.' Titriyor." },
            { text: "Bu bilgiyi neden bana veriyorsun?", effect: +8, next: "'Çünkü kaybolmadan önce birine söylemeliyim. Ve sen... makul görünüyorsun.' Pek de emin değil buna." }
          ]
        }
      ],
      high: [
        {
          text: "[ Sizi çekiyor. Parmak ucuyla bir şeyi gösteriyor. ] Biliyor musun bu sığınakta kaç ajan var? İkiden fazla. Birini zaten biliyorsun — ama diğerini bilmiyorsun. Ve o diğeri her sabah seninle aynı masada oturuyor.",
          isSpecial: true,
          choices: [
            { text: "Kim o?", effect: +25, next: "'Söylersem yarın ben yok olurum. Ama şunu söyleyeyim: O kişi seninle en çok konuşan biri. Ve her konuşmadan sonra Vera'nın devriye güzergahı değişiyor. Dikkat et ne paylaşıyorsun.' Gözleri kapıya gidiyor." },
            { text: "Kanıtla bunu.", effect: +15, next: "'Kanıt vermem. Ama şu andan itibaren bir hafta boyunca ekrana bak. Devriye saatleri ile senin toplantı saatlerin örtüşecek. Kendi gözlerinle gör.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // GÜN 5 — İKİZLER (KARANLIK KARAKTER)
    // ─────────────────────────────────────────────
    twins_d5: {
      name: "İkizler",
      role: "Gün-5 · Tek Akıl İki Beden",
      image: "/faces/d5_twins.png",
      low: [
        {
          text: "[ Biri başlıyor, diğeri bitiriyor: ] 'Buraya geldik çünkü kapıyı açtınız...' '...kapıyı açtınız ama bizi göremedıniz.'",
          choices: [
            { text: "Nasıl yani, sizi göremedim mi?", effect: +10, next: "'Şehirde— ' '—üç gün bekledi. Sizi izledi. Siz onu görmediniz.' Aynı anda şöyle bakıyorlar. Rahatsız edici." },
            { text: "İkiz olarak bu şekilde mi konuşuyorsunuz hep?", effect: +5, next: "'Her zaman— ' '—değil. Sadece önemli şeylerde.' Sesleri birbirinin devamı gibi." },
            { text: "Bu oyun gibi görünüyor.", effect: -12, next: "'Oyun değil— ' '—hiç bu kadar ciddi olmamıştık.' Ve aynı anda bakışlarını sana dikiyorlar." }
          ]
        }
      ],
      medium: [
        {
          text: "'Aynı rüyayı görüyoruz— ' '—her gece, aynı saatte.' 'Beyaz bir oda— ' '—içinde bir adam. Bize bakıyor ama yüzü yok.' 'Ve fısıldıyor— ' '—sayılar.'",
          choices: [
            { text: "Hangi sayılar?", effect: +20, next: "'Hep aynı sıra: ' '14 — 0 — 84.' 'Sıfır ne demek bilmiyoruz— ' '—ama 14 gün biliyoruz. Ve 84 bizim kayıt numaramız.' Duraklıyorlar. 'Kayıt numarası nereden geliyor bilmiyoruz.'" },
            { text: "Bu sayıları daha önce duydunuz mu?", effect: +15, next: "'Bir kere— ' '—Sektör-0 kapısında yazıyordu. Küçük plakette. Fotoğraf çektik.' 'Fotograflar yok artık— ' '—ama biz gördük.'" },
            { text: "Rüyalar korkudan kaynaklanıyor olabilir.", effect: -8, next: "'Korku rüyası— ' '—aynı anda yapmaz bunu.' 'Aynı anda uyandık— ' '—aynı kelimeleri söyledik.' Ürkütücü bir sessizlik." }
          ]
        }
      ],
      high: [
        {
          text: "'Sana bir şey söyleyeceğiz— ' '—ama buna inanmak istemeyeceksin.' 'Biz deney değiliz— ' '—ama deney yaptılar üstümüzde.' 'Annemiz gönüllü girdi bir programa— ' '—ikiz doğurmak için.' 'Proje adı: İkizleme Protokolü.' '—Sektör-0.'",
          isSpecial: true,
          choices: [
            { text: "Bu program hakkında ne biliyorsunuz?", effect: +28, next: "'Annem belgelerini sakladı— ' '—biz küçükken. Şimdi bizde.' 'Programın amacı: iki beden, ortak bilinç.' '—Deney başarısız sayıldı. Biz serbest bırakıldık.' 'Çünkü bizi izlemek daha iyi bilgi veriyordu—' '—özgür bırakmak.' Aynı anda duruyorlar. Bu en uzun söyledikleri cümleler." },
            { text: "Belgeler hâlâ sizde mi?", effect: +20, next: "'Evet— ' '—ve vermeyeceğiz.' 'Ama istersen okursun.' '—Buraya gelirsin, okursun, gidersin.' 'Çıkartamazsın— ' '—burada kalacaklar.'" }
          ]
        }
      ]
    }
  },

  en: {

  en: {
    // ─────────────────────────────────────────────
    // DAY 1 — MINA
    // ─────────────────────────────────────────────
    mina_d1: {
      name: "Küçük Mina",
      role: "Day-1 · Minor",
      image: "/faces/d1_mina.png",
      low: [
        {
          text: "Where's my mom... I don't know. You don't know either, do you?",
          choices: [
            { text: "There's still a protocol to find her. We'll try.", effect: +12, next: "A spark of hope in her eyes. 'Really?' she whispers, though doubt lingers." },
            { text: "Your immediate safety is secured. Focus on that.", effect: +5, next: "She nods slowly. 'Okay...' but her eyes remain fixed on the reinforced gate." },
            { text: "Cease inquiries. Everyone here suffered losses.", effect: -15, next: "She clasps her small hands together. Retreats to the corner in complete silence." }
          ]
        }
      ],
      medium: [
        {
          text: "Hey... I hear weird noises in the shelter sometimes. Behind the wall. Over and over. It just says 'open it'.",
          choices: [
            { text: "Which sector wall? Point it out.", effect: +18, next: "'The old iron hatch over there. I count every night. Heard it sixteen times this month.' She traces it with her fingers." },
            { text: "Wind resonance. Nights amplify structural shifts.", effect: +3, next: "'Wind doesn't verbally request entry.' She stares at you with absolute seriousness." },
            { text: "Disregard it. Security has the perimeter stabilized.", effect: -5, next: "She shrugs. 'Okay... but I still want to know what it is.'" }
          ]
        },
        {
          text: "That huge guy Bozkır... Saw him last night sitting all alone, face in his hands. He was crying, I think.",
          choices: [
            { text: "You maintain excellent observational awareness, Mira.", effect: +20, next: "She smiles brightly. 'My mom said that too! Are we friends now?' Not mocking, a genuine inquiry." },
            { text: "Curfew exists for a reason. Stay out of the corridors.", effect: -5, next: "'I know. But I couldn't sleep.' She goes quiet." },
            { text: "Detail your psychological assessment of Bozkır.", effect: +15, next: "'He's big but sad. When grown-ups are sad, they hide it inside. It must be so heavy.'" }
          ]
        }
      ],
      high: [
        {
          text: "Hey... I gotta show you something, but don't tell. The guards will confiscated it.",
          isSpecial: true,
          choices: [
            { text: "Visual inspection only. You have my word.", effect: +25, next: "She pulls out a cracked, archaic badge. It reads 'SECTOR-0'. 'Found it near the wall. It's really old. What does it mean?'" },
            { text: "I trust your discretion, Mira. Proceed.", effect: +18, next: "She checks her periphery first, then slowly produces an ancient, degraded piece of parchment." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // DAY 1 — AGA
    // ─────────────────────────────────────────────
    aga_d1: {
      name: "Ağa",
      role: "Day-1 · Slum Warlord",
      image: "/faces/d1_aga.png",
      low: [
        {
          text: "Listen closely, grunt. Don't bark orders without knowing who you're speaking to. I ran order in these slums for a decade.",
          choices: [
            { text: "Past hierarchies hold zero jurisdiction here.", effect: -10, next: "'Is that so? We'll see about that.' He turns his back, but keeps you in his peripheral vision." },
            { text: "Your operational experience is an asset. Debrief me.", effect: +15, next: "He relaxes his posture. 'Finally, someone speaking sense. Sit down, let's talk logistics.'" },
            { text: "Housing you is a liability. Acknowledge that.", effect: -5, next: "'Everything has a price, grunt. We'll negotiate eventually.'"}
          ]
        }
      ],
      medium: [
        {
          text: "Half the assets in this bunker belong to my territory. I relocated them. If the infrastructure fails, they'll blame me first.",
          choices: [
            { text: "Acknowledged. The burden of command is heavy.", effect: +18, next: "He studies you. 'First time I met someone in uniform who understands that.' He rests his hands on the table." },
            { text: "Then maintain strict discipline among your ranks.", effect: +5, next: "'Don't lecture me on leadership, grunt. I've been doing this for ten years.'" },
            { text: "Universal equality is mandatory within these walls.", effect: -8, next: "'Equality? A child's concept. The world runs purely on power dynamics.'" }
          ]
        }
      ],
      high: [
        {
          text: "I've got intel, not sure if you've got the clearance for it. There's a mole in the bunker. Transmitting encrypted data outward.",
          isSpecial: true,
          choices: [
            { text: "Provide a designation. I will initiate a purge.", effect: +22, next: "'No name yet. But he operates at night. North corridor. And when he returns, there's fallout ash on his boots.' His eyes narrow." },
            { text: "Why expose this asset to me?", effect: +15, next: "'Because you're the gatekeeper. And I have zero intention of dying in a compromised facility.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // DAY 2 — WOUNDED SOLDIER
    // ─────────────────────────────────────────────
    wounded_soldier_d2: {
      name: "Yaralı Asker (Kerem)",
      role: "Day-2 · Combat Survivor",
      image: "/faces/d2_soldier.png",
      low: [
        {
          text: "Get off me... I just need REM sleep. Haven't closed my eyes since Sector-5 fell.",
          choices: [
            { text: "Medical evaluation by Dr. Arzu is mandatory first.", effect: +12, next: "He struggles to sit up. 'Fine... Designation is Kerem. You didn't ask, but you should know.' he adds." },
            { text: "File a brief on what occurred at Sector-5.", effect: +8, next: "'Sector-5... right at the gates. Caught shrapnel during the rout. Most didn't make the extraction.' His voice cracks." },
            { text: "You may rest, but standby for night watch duties.", effect: -10, next: "He shoots you a freezing glare. Refuses to communicate further." }
          ]
        }
      ],
      medium: [
        {
          text: "I have to declassify what I witnessed at Sector-5. Command didn't ask, but someone needs to know.",
          choices: [
            { text: "I'm logging your report, Kerem. Proceed.", effect: +20, next: "'The gate opened from the inside. Not externally breached. Someone touched the internal override. I saw a hand, from inside the facility.' His hands begin to tremble violently." },
            { text: "Combat stress causes severe visual hallucinations.", effect: +5, next: "'Ask the adrenaline in my blood. Everything was hyper-clear, moving in slow motion. A hand. Internal.'" },
            { text: "How is this tactical data useful to us now?", effect: -12, next: "'Maybe it isn't. But is burying it any better?' He falls silent." }
          ]
        }
      ],
      high: [
        {
          text: "I calculate the origin of that hand every night. A single name keeps surfacing. To speak it is a death sentence.",
          isSpecial: true,
          choices: [
            { text: "I offer protective custody. Disclose the target.", effect: +25, next: "'High command operative. Not Colonel Demir. The Supreme Commander. You know why he wasn't at Sector-5 that cycle? Because he pre-authorized the breach.' His voice shakes." },
            { text: "You cannot carry this psychological load alone.", effect: +15, next: "'I know. Same hand, every night. Sleep is gone forever.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // DAY 3 — TRADER SALIH
    // ─────────────────────────────────────────────
    trader_salih_d3: {
      name: "Tüccar Salih",
      role: "Day-3 · Wasteland Merchant",
      image: "/faces/d3_trader.png",
      low: [
        {
          text: "Look guard, I ain't here to lay roots. The second that gate cracks open, I'm hitting the asphalt.",
          choices: [
            { text: "Provide recon on the external environment.", effect: +12, next: "'A lot of things. Mostly bad. But in some pockets, you can still smell humanity. Rare, but it's out there.'" },
            { text: "Your vitals are secure for now. Acknowledge it.", effect: +8, next: "'Secure? Remaining static is lethal. Mobility equals survival out there.'" },
            { text: "We may requisition your services.", effect: +5, next: "'I'm always open for commerce, guard. We'll negotiate the rates.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I was camped near Sector-5 two days prior to its collapse. An anomalous calm blanketed the area. Eye contact, but no smiles.",
          choices: [
            { 
              text: "Define this 'anomalous calm'.", 
              effect: +15, 
              next: "'Pre-panic suppression. I've seen it. Eyes blank, but perfectly peaceful. Happens right before the Mist rolls in. The pheromones of the chosen change.' He shivers.",
              followUp: {
                text: "He leans back and looks at you slyly. 'Do you know what the mist really is? A kind of memory eraser. People don't go crazy, they just forget. Starting with the ones they love most... Do you remember the last thing you forgot?'",
                choices: [
                  { text: "I have not forgotten anything.", effect: -5, next: "He laughs bitterly. 'That, my friend, is the first stage of forgetting.'" },
                  { text: "... My family's faces. I really can't remember.", effect: +15, next: "'Welcome to the real world. That is exactly why I sell masks... At least the faces have a shape.'" }
                ]
              }
            },
            { text: "Is our current sector exhibiting similar anomalies?", effect: +10, next: "'Right now, it's clear. But for how long? Nobody knows.'" },
            { text: "What catalyzed the fall of Sector-5?", effect: +12, next: "'Internal override. I noticed it from the perimeter. Gave me a two-minute head start to evacuate.'" }
          ]
        }
      ],
      high: [
        {
          text: "I'm transferring coordinate data to you. Was going to fence it, but you seem to be the only reliable operative in this grid.",
          isSpecial: true,
          choices: [
            { text: "Identify the coordinates.", effect: +25, next: "'Pre-war subterranean cache below Sector-3. Medical supplies, sealed sector. Hand it to your medic. If she's vetted.' He slides over a map." },
            { text: "Why authorize this transfer to me?", effect: +18, next: "'Because at the gate, you looked me in the eye and asked the right queries. You understand intrinsic value.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // DAY 3 — CRYING GIRL
    // ─────────────────────────────────────────────
    crying_girl_d3: {
      name: "Küçük Ezel",
      role: "Day-3 · Minor",
      image: "/faces/d3_crying_girl.png",
      low: [
        {
          text: "Mister... why is the facility so dark? Are there no lights?",
          choices: [
            { text: "Power is strictly rationed for our survival.", effect: +10, next: "'Okay.' She folds her hands. 'Will my eyes adjust soon?'" },
            { text: "The darkness acts as optical camouflage. It protects you.", effect: +8, next: "Her eyes widen. 'Really? I didn't calculate that, mister.'" },
            { text: "Operational standard. You'll adapt.", effect: -3, next: "She sits quietly." }
          ]
        }
      ],
      medium: [
        {
          text: "I saw Mr. Bozkır last night. He had his hands on his face and his shoulders were dropping like this. Was his optical fluid leaking?",
          choices: [
            { text: "Your diagnostic observation skills are exceptional, Ezel.", effect: +20, next: "'My mother evaluated me the same way! You are a good unit, mister.' She beams." },
            { text: "Adult units require emotional venting procedures.", effect: +12, next: "'My father did that too. In isolation. Then he'd smile like all systems were nominal.' Small palms join together." },
            { text: "Curfew violations are strictly forbidden.", effect: -5, next: "She shrinks back slightly. 'I know, mister.'" }
          ]
        }
      ],
      high: [
        {
          text: "Mister, I will transmit something to you, but you must encrypt it. Don't tell anyone.",
          isSpecial: true,
          choices: [
            { text: "Encrypted. Visual inspection only, Ezel.", effect: +25, next: "She pulls out a cracked, archaic badge. It reads 'SECTOR-0'. 'Acquired it near the foundation. What data does it hold, mister?'" },
            { text: "My operative trust is absolute.", effect: +18, next: "She scans the perimeter thoroughly before handing over a small object." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // DAY 5 — AUNT OBSERVER
    // ─────────────────────────────────────────────
    aunt_observer_d5: {
      name: "Gözcü Naciye",
      role: "Day-5 · Sector Archivist",
      image: "/faces/d5_aunt_observer.png",
      low: [
        {
          text: "Who authorizes you to encroach on my perimeter? The elderly require their space.",
          choices: [
            { text: "Requesting a verbal debrief, Aunt Naciye.", effect: +8, next: "'Proceed. But omit the standard bureaucratic drivel.'" },
            { text: "Checking on your vitals and shelter integration.", effect: +12, next: "'Who bothers to query that anymore... Take a seat.' She gestures with a frail hand." },
            { text: "Requesting a general sector status report.", effect: +5, next: "'General? Catastrophic. Always catastrophic. Yet, our life signs persist.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I archive every subject that processes through this sector. So their timelines aren't erased. Arrival codes, debrief summaries.",
          choices: [
            { text: "You are the primary memory drive of this sector, Naciye.", effect: +20, next: "Her hands shake slightly. 'First time an operative acknowledged that. I... yes. Used to write. Small publications. Human data. The Mist corrupted it all.'" },
            { text: "Access an archive for me. Tell a story.", effect: +15, next: "'Which file? Each is a volume. Today... let me log Selim's mother. Remember Selim when the next threat approaches.'" },
            { text: "Archival data holds no tactical advantage.", effect: -15, next: "'A populace without an archive is an unrooted syntax tree, boy. They crash.'" }
          ]
        }
      ],
      high: [
        {
          text: "I will decrypt ancient intel for you, boy. This facility pre-dates the records. Under a different designation.",
          isSpecial: true,
          choices: [
            { text: "Clarify. Pre-existing sector architecture?", effect: +22, next: "'They designated it Sector-0. Why zero? Ground zero for the experiment. First prototype gate system. And the first treason. That era's gatekeeper... was the Commander's grandfather.' She closes her eyes." },
            { text: "This data is completely undocumented, correct?", effect: +15, next: "'I hold the only backup. And now it has been transferred to you. Some data demands execution, not just storage.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // DAY 6 — WEREWOLF BOZKIR
    // ─────────────────────────────────────────────
    werewolf_bozkir_d6: {
      name: "Bozkır",
      role: "Day-6 · Lycanthrope Enforcer",
      image: "/faces/character_bozkir.png",
      low: [
        {
          text: "...[Low guttural growl] State your business here, uniform. This is my designated quarantine zone.",
          choices: [
            { text: "Conducting a visual check on you, Bozkır.", effect: +8, next: "He narrows his eyes. 'Check? Or a threat assessment?' He turns his back to you." },
            { text: "Querying your current biological status.", effect: +5, next: "He shrugs his massive shoulders. 'Still breathing. That fulfills the quota.'" },
            { text: "Was the night shift hostile?", effect: +3, next: "'Every night cycle here is hostile. I merely... detect it faster than you.'" }
          ]
        },
        {
          text: "This canvas module is severely undersized. But the exterior perimeter is compromised, even for an anomaly like me...",
          choices: [
            { text: "This facility is your designated safe harbor, Bozkır.", effect: +12, next: "He stares at you for a long duration. Then mutters 'Harbor...' as if decrypting the word for the first time." },
            { text: "Why abstain from external operations?", effect: +5, next: "'My biometrics trigger mass panic. And panic causes defense grid failures.'" },
            { text: "Your comfort is not my operational priority.", effect: -18, next: "A deep, chest-rattling growl. Followed by absolute silence." }
          ]
        }
      ],
      medium: [
        {
          text: "My sensors picked up an anomaly last night. Movement within the Mist. Completely silent. Synthetically silent. It spikes my cortisol.",
          choices: [
            { 
              text: "Define the movement pattern. Debrief.", 
              effect: +15, 
              next: "'Not human biomechanics. Metallic. Deceased. I acquired its scent. Smells like the Mist, but an artificial variant.'",
              followUp: {
                text: "He brings his face close to yours. His giant teeth gleam in the dim light. 'I caught that exact scent in the tunnels. When we were researching Sector-0, that smell... it came from test tubes. The Mist storm wasn't an accident, soldier. Someone opened the tubes. Do you know who did it?'",
                choices: [
                  { text: "That is my question to ask. Who opened them?", effect: +10, next: "He takes a wheezing breath. 'A woman. Black attire. Her eyes were gray like the Mist itself. And another one working with her... an old woman.'" },
                  { text: "I don't have time for conspiracy theories.", effect: -10, next: "'When you run out of time, you will remember how my claws warned you.'" }
                ]
              }
            },
            { text: "Sensory hallucination likely. Disregard.", effect: -8, next: "His eyes narrow into slits. 'I don't process hallucinations. My claws are physical. So are my olfactory receptors.'" },
            { text: "Can you intercept it if it breaches Sector-7?", effect: +10, next: "'Mass. Fangs. I will be fully operational at 0300 hours. You won't be.'" }
          ]
        },
        {
          text: "My daughter... if I broadcast her designation, she wouldn't recognize it. Pre-Mist, my identity was 'Father'. Now, my classification is unknown.",
          choices: [
            { text: "That core identity remains intact, Bozkır. It has not mutated.", effect: +20, next: "His voice drops to a near whisper. A massive claw gently rests against the concrete wall. A prolonged silence." },
            { text: "Track her current coordinates.", effect: +8, next: "'Unknown. Evacuated during the first wave. Maybe a neighboring sector. Maybe...' His vocal processor fails to finish." },
            { text: "Obsolete data. Purge it to survive.", effect: -10, next: "A glacial glare. 'For your systems, perhaps.'" }
          ]
        }
      ],
      high: [
        {
          text: "I'm initiating an unencrypted transfer with you. Undisclosed until now. Not for sustenance... but survival logic demands it.",
          isSpecial: true,
          choices: [
            { text: "Receiving transmission. Speak.", effect: +20, next: "'The Mist... algorithms select targets. It's not randomized. I detect it through olfactory shifts. The selected emit a different pheromone. Sweet, but necrotic. You lack this scent. But subjects within our walls possess it.' His eyes lock onto yours." },
            { text: "What is the tactical value of this data?", effect: +12, next: "'It is my origin code. The Mist augmented me because I wasn't selected. I rejected the protocol. Form paid the price, but the neural network survived.'" }
          ]
        },
        {
          text: "If proximity alarms trigger during the night cycle and I am engaged... do not designate me as hostile. I retain manual override. For now.",
          choices: [
            { text: "My trust in your parameters is absolute.", effect: +25, next: "He looks at you, truly processing your face. He slowly strikes his left chest cavity with his claw. 'That is... gratitude.' he states, retreating into the shadows." },
            { text: "The variable 'For now' is a severe security risk.", effect: +5, next: "'Fear is an optimal defense mechanism. Do not accept me with blind faith. Compile your fear into tactical wisdom.' He stares into the void." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // DAY 6 — DOCTOR ARZU
    // ─────────────────────────────────────────────
    doctor_arzu_d6: {
      name: "Doktor Arzu",
      role: "Day-6 · Chief Medical Officer",
      image: "/faces/character_arzu.png",
      low: [
        {
          text: "System fatigue reaching critical levels. Eight consecutive hours in Med-Bay. Med-stims depleted, surgical tools fractured...",
          choices: [
            { text: "How can I allocate support resources?", effect: +10, next: "She checks her kit. 'Nothing physical right now. But the psychological backup... is vital.' She offers a weary smile." },
            { text: "I will optimize whatever protocols I can.", effect: +8, next: "'Acknowledged. I broadcast the same directive to everyone: maintain patience. But even I doubt the authenticity now.'" },
            { text: "The infrastructure is failing, your output is sufficient.", effect: +5, next: "'Sufficiency is a myth. But terminating the operation is not an option.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Blood analysis on Selim flagged an anomaly. Not standard antibodies. They emit localized luminescence... Detected it without a microscope.",
          choices: [
            { text: "What is the strategic implication?", effect: +15, next: "'A potential synthesis of a Mist-vaccine. But it requires a Class-4 lab. And time. And command's authorization.' Her eyes reflect desperate hope." },
            { text: "Is the pathogen volatile?", effect: +8, next: "'Variables are undocumented. But it's our sole probability of survival. The risk matrix allows it.'" },
            { text: "My logic centers reject this probability.", effect: -5, next: "She sighs slightly. 'Expected. I ran diagnostics thrice to believe it myself.'" }
          ]
        }
      ],
      high: [
        {
          text: "I am transmitting classified medical data. Concealed from High Command. To prevent mass hysteria protocols.",
          isSpecial: true,
          choices: [
            { text: "Secure line established. Transmit, Arzu.", effect: +20, next: "'The Grey Cough is not a mere symptom. It's a staged mutation sequence. Invisible during the first 14 cycles. We may have carriers in our population already. Selim's blood buys us a delay. Authorize my continued research.'" },
            { text: "How do we deploy this intel tactically?", effect: +15, next: "'Maintain total blackout. We lack the socio-control agents to manage a panic. I will ping you with updates.'" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────
    // DAY 6 — HONEST VAKIF
    // ─────────────────────────────────────────────
    honesty_vakif_d6: {
      name: "Vakıf",
      role: "Day-6 · Prime Witness",
      image: "/faces/d6_honesty_man.png",
      low: [
        {
          text: "I logged everything. Full visual confirmation. But command never initiated an inquiry.",
          choices: [
            { text: "I am initiating the inquiry now. Debrief.", effect: +15, next: "'First operative to formally request the data.' He takes a deep breath. 'Authorized. But the file is extensive.'" },
            { text: "Time is a scarce resource. Summarize.", effect: +3, next: "'No compression possible. Critical data points will be lost in truncation.'" },
            { text: "Masses claim to possess 'critical intel'.", effect: -10, next: "'I transmit raw truth. You will learn to filter the anomalies in time.'" }
          ]
        }
      ],
      medium: [
        {
          text: "That cycle, an unsanctioned rendezvous occurred in the primary designated access corridor. Four hostiles. One matched the Colonel's biometrics.",
          choices: [
            { text: "Did you achieve facial recognition?", effect: +18, next: "'On two of them. One matched your surveillance lieutenant's profile. The other... out of optical range. But note this: all wore identical insignia. Blue delta symbols.'" },
            { text: "Why delay this report until now?", effect: +8, next: "'Who was I supposed to ping? If I uploaded this to the mainframe, I'd end up in the incinerator.'" },
            { text: "Likely a stress-induced hallucination.", effect: -12, next: "'Hallucination? Is the 9mm round in my hip a hallucination? You initiate the inquiry, then invalidate the data.'" }
          ]
        }
      ],
      high: [
        {
          text: "I'm transferring a high-value designation to your local drive. Your threat sensors will spike upon reading it. Because the threat is internal.",
          isSpecial: true,
          choices: [
            { text: "Upload the designation.", effect: +25, next: "'Lieutenant Rıza. Surveillance officer. Rerouting signal arrays during the night cycle. Outward bounds. Exactly at 03:14 hours every night. I possess the logs.'" },
            { text: "Verify the integrity of this claim.", effect: +18, next: "'Absolute integrity. Twelve consecutive night cycles. Precisely 03:14. No other unit possesses this data.'" }
          ]
        }
      ]
    }
    },

    gang_leader_d6: {
      name: "Çete Lideri",
      role: "Gün-6 · Tehlikeli Avantaj",
      image: "/faces/d6_gang_member.png",
      low: [
        {
          text: "Sen beni içeri aldın. Bu bir nezaket değil, bir hesap değil. Bu... ilginç. Pek çoğu almaz beni içeri. Merak mı ediyorsun neden?",
          choices: [
            { text: "Neden almamaları gerekiyordu?", effect: +10, next: "'Çünkü biliyorlar. Ben bu sektörde bir şeyleri kontrol ediyordum. Hâlâ ediyorum. Duvarın içinde de, dışında da.' Sırıtıyor." },
            { text: "Burada herkes eşit, geçmiş önemli değil.", effect: -5, next: "'Eşitlik... çocukça bir kelime. Ama devam et asker, devam et.'" },
            { text: "İçeride işe yarayacaksın, bu yüzden alındın.", effect: +5, next: "'Dürüstlük. İyi.' Başını sallıyor, ama gözleri hâlâ değerlendiriyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Sana bir şey söyleyeyim. Ben sis gelmeden iki ay önce uyarıldım. Anonim bir kaynaktan. 'Taşın.' denildi. Ben taşımadım. Ama biliyorum kim uyardı beni.",
          choices: [
            { text: "Kim uyardı seni?", effect: +20, next: "'Bir kadın. Resmi üniformalı. Ama Vera'nın adamı değildi — birinin adamıydı ama kimin bilmiyorum. Bana 'proje sıfır aktif' dedi. Başka bir şey söylemedi.'" },
            { text: "Bu bilgiyi neden şimdiye kadar saklamıştın?", effect: +12, next: "'Çünkü güvenemezdim kimseye. Şimdi güvenebileceğim biri var gibi görünüyor. Belki.' Bakışları ölçüyor." },
            { text: "Bu askeri bir operasyon, siyasi gündem yok.", effect: -10, next: "'Asker konuşur böyle. Siyasi gündem yok derler, tam siyasetle boğazlarına kadar gömülüyken.' Güler." }
          ]
        }
      ],
      high: [
        {
          text: "Seninle anlaşma yapmaya hazırım. Ben sana Vera'nın eski tedarik ağının haritasını vereyim. Sen bana bursada sahiplerin dışında küçük bir özerklik ver.",
          isSpecial: true,
          choices: [
            { text: "Haritayı önce göster.", effect: +22, next: "'Doğru yaklaşım.' Cebinden katlanmış bir kağıt çıkarıyor. 'Kuzey depo, yer altı geçişi, ve — bunu özellikle not et — Sektör-0 bağlantı noktası. Vera oradan giriyor. Her seferinde. Düzenli.'" },
            { text: "Anlaşma yapabiliriz. Güvenin temeli ne?", effect: +15, next: "'Ben sözümde dururum. Bu şehirde bu benim tek değerim.' Elini uzatıyor. 'Anlaştık mı?'" }
          ]
        }
      ]
    },

    hunter_resat_d7: {
      name: "Avcı Reşat",
      role: "Gün-7 · Yaşlı Avcı",
      image: "/faces/d7_old_hunter.png",
      low: [
        {
          text: "Kırk yıl ormanda avlandım. Bu sisi görünce hayvanların nasıl davrandığını gördüm. Kaçmıyorlar. Bekliyorlar. Bu çok kötü bir işaret.",
          choices: [
            { text: "Hayvanlar neden kaçmıyor?", effect: +12, next: "'Çünkü daha önce gördüler bunu. Bilinçaltında var. Ya da... sis onları da değiştirdi. İkinci ihtimal daha korkutucu.'" },
            { text: "Sektörün dış haritasını biliyor musunuz?", effect: +15, next: "'Her karışını. Kırk yıl yürüdüm o toprağı. Nereye çıkıldığını bilmek istersen sor.'" },
            { text: "Bu yorumlama çok sezgisel, bize veri lazım.", effect: -5, next: "'Veri mi? Benim verilerimi anlayacak makinen yok. Ama gözlerim var. Ve gördüklerimi kanıtlamam gerekmez.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'yı tanıyorum asker. Yani... tanıdım bir zamanlar. Babasını tanırdım. İyi bir adamdı — mühendis. Proje Sıfır'da çalıştı. Sonra kayboldu. Vera küçük bir çocuktu o zaman.",
          choices: [
            { text: "Vera'nın babası hakkında ne biliyorsun?", effect: +22, next: "'Gerçek bir inançlıydı. 'İnsanı geliştirmek' diye bir şeydi kafasında. İyi niyetle başladı. Sonrası... bilmiyorum. Kayboldu. Ve Vera büyüdü. Ama babasının projesini bitirmek istiyor gibi görünüyor.' Duraksıyor. 'Ama bambaşka bir şekilde.'" },
            { text: "Vera şu an nerede üslenmiş?", effect: +18, next: "'Güneydoğu. Eski hayvancılık çiftliği. Büyük bir yapı. Ben oraya yaklaşmıyorum artık. Hayvanlar bile yaklaşmıyor.'" },
            { text: "Bu bilgiler neden daha önce raporlanmadı?", effect: +5, next: "'Ben bir av adamıyım. Rapor yazmayı bilmiyorum. Ama bilen birini buldum şimdi.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir yerden bahsedeyim. Kimse bilmez. Ben oraya girdim — bir defa. Hayatta döndüm çünkü tuzakları biliyorum. Sektör sınırından doğuya, sonra bir ormanlık. Ortasında bir yapı. Altında devam ediyor.",
          isSpecial: true,
          choices: [
            { text: "İçeride ne gördün?", effect: +28, next: "'Işıklar. Yeşil, alçak ışıklar. Ve sesler — hayvan sesi değil, ama insan da değil. Orta bir şey. Ve duvarlar... cam gibi değil, canlı bir şey kaplıyor duvarları. Hareket ediyordu.' Yutkunuyor. 'Ben iki saatte çıktım. Bir günüm kayıp.'" },
            { text: "Oraya nasıl girdiniz?", effect: +20, next: "'Kuzeydeki çürük çitten. Güvenlik yok orada — çünkü onlar hayvanların oraya gitmeyeceğini biliyorlar. Hayvanlar gitmiyor. Ama ben gittim.'" }
          ]
        }
      ]
    },

    aras_d8_hero: {
      name: "Araş",
      role: "Gün-8 · Hakikat Arayışçısı",
      image: "/faces/d8_aras.png",
      low: [
        {
          text: "Burada olmamalıyım. Yani, burada olmaktan memnunum — ama benim varlığım tehlikeli olabilir. Takip ediliyorum bir süredir.",
          choices: [
            { text: "Kim takip ediyor seni?", effect: +15, next: "'Resmi bir güç değil. Ya da resmi görünen ama olmayan bir güç. Sektör-0 sorularım beni buralara taşıdı. Cevaplar beni tehlikeli yapıyor.' Duraksıyor. 'Ama cevapları bulmak daha da tehlikeli.'" },
            { text: "Sektör-0'ı neden araştırıyorsun?", effect: +20, next: "'Çünkü kardeşim orada öldü. Resmi kayıt: iş kazası. Ama iş kazalarında vücut bulunur. Kardeşimin cenazesi hiç teslim edilmedi.'" },
            { text: "Burada güvendesin, araştırmaya devam et.", effect: +10, next: "'Güvenli... Belki. Ama ben buradasam, tehlike de burayadır.' Uyarıyor ama reddedip gitmiyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Sektör-0 dosyasını buldum. Tam değil ama yeterince. İçinde üç şey var: bir proje adı, bir tarih, ve bir finansör ismi. Tahmin edebilir misin finansörü?",
          choices: [
            { text: "Söyle, tahmin etmeyelim.", effect: +22, next: "'Devlet değil. Devlet bütçesi geçti içinden ama karar verici değil. Özel bir fon. İsmi: Gümüş Fon Vakfı. Bu vakfın iki yöneticisi var — biri ölü, diğeri... Bilmiyorum. Ama Vera bu vakfın kızı.' Gözlerini kaçırmıyor." },
            { text: "Bu bağlantı doğrulandı mı?", effect: +18, next: "'Üç farklı kaynaktan. Biri devlet arşivi sızdırmasıydı. Ömrü kısaydı ama ben kopyaladım.' Cebinden bir bellek kartı çıkarıyor. 'Burdaydı.'\"" },
            { text: "Bu bilgiyi nasıl kullanabiliriz?", effect: +12, next: "'Vera'nın motivasyonunu anlarsak, bir adım önündeyiz. O babasının işini bitirmek istiyor. Ama 'iş' neydi? İşte asıl soru bu.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana söyleyeceğim bir şey var. Proje Sıfır hakkında. Ve Vera hakkında. Bu bilgiyi öğrenirsen geri dönüş yok — ya da belki tam tersi, anlam bulursun.",
          isSpecial: true,
          choices: [
            { text: "Söyle. Her şeyi.", effect: +30, next: "'Vera'nın babası deneyleri insanlar üzerinde yapıyordu — gönüllü. Sis ilaçla bağlantılı. İlacın adı: Gümüş. İnsanları sis'e dirençli yapmak için. Ama yan etkisi... tam tersi. İlacı alanlar sise dönüştü. Ve Vera bunu biliyor. Çünkü o da aldı o ilacı — küçücükken. Ve dönüşmedi. Bu onu hem güçlü hem de... takıntılı yaptı.' Nefes alıyor. 'O kendi gibi birileri arıyor.'\"" },
            { text: "Bu bilgiyi nasıl teyit ederiz?", effect: +22, next: "'Şifacının aldığı sıvıyı analiz et. Eğer Gümüş bileşenleri bulunursa — Vera içeri sızmış demektir. Ve bu sıvıyı biri getirdi.'" }
          ]
        }
      ]
    },

    cultist_kaan_d8: {
      name: "Kaan",
      role: "Gün-8 · Tarikat Üyesi",
      image: "/faces/d8_cultist.png",
      low: [
        {
          text: "Buradasın çünkü kapıyı açtın. Ben buradasın çünkü kapı açıldı. Fark var mı? Belki. Belki de ikimiz de birer araçız.",
          choices: [
            { text: "Hangi tarikata üyesin?", effect: +5, next: "'Tarikat... bir kelime. Biz kendimize inanç grubu deriz. Sis gerçeği gösteriyor. Biz onu yorumluyoruz.' Bakışları yüzünden kayıyor." },
            { text: "Burada dini faaliyete izin veremem.", effect: -10, next: "'Faaliyete değil, varlığa bile izin veremezsin aslında. Ama verdin.' Sakin bir cümle. Çok sakin." },
            { text: "Seni gözaltında tutabilirdim, tutmadım.", effect: +8, next: "'Biliyorum. Ve bu bir jest değil — bu bir hesap. Zamanı gelir ödersin ya da ödettirirsin.' Beklentiyle bakıyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Sis seçiyor. Bunu anlıyor musun? Herkesi almıyor. Seçiyor. Ve seçilenlerin ortak bir özelliği var.",
          choices: [
            { text: "Ne özelliği?", effect: +15, next: "'Merak.' Duruyor. 'Soran. Araştıran. Mevcut düzeni sorgulayan. Sis onları alıyor — ama öldürmüyor.' Gözleri karanlıklaşıyor. 'Dönüştürüyor.'" },
            { text: "Bu bir inançtan ibaret.", effect: -5, next: "'İnanç mı? Ben yirmi üç dönüşümü kendi gözlerimle gördüm. Bunlar hayal değil. Fotoğraf bile çektim. Biri kim istersen vereyim.'" },
            { text: "Bunu bizimle paylaşmak için mi geldin?", effect: +12, next: "'Hayır. Hayatta kalmak için geldim. Ama buradaysam, bir şeyler ödeyeceğim. Bu benim doğam.' Omuz silkiyor." }
          ]
        }
      ],
      high: [
        {
          text: "[ Kaan bu sefer farklı. Ritüel sesi yok, dini imalar yok. Sadece düz, buz gibi bir ses: ] 'Ben bir süre Vera'nın çevresinde idim. Gönüllü değil. Zorla değil. Meraktan. Ve geri döndüm.'",
          isSpecial: true,
          choices: [
            { text: "Vera ne yapıyor orada?", effect: +25, next: "'İnsanları dönüştürüyor ve geri bırakıyor. Tamamen normal görünüyorlar. Ama içleri... farklı. Lider davranışı gösteriyorlar. Birbirlerini takip ediyorlar — koordineli. Ve komutlar alıyorlar. Oradan.' Yukarıyı gösteriyor. Hiçbir yer değil, sadece yukarı. 'Nereden geldiğini bilmiyorum. Ama duyuyorlar.'\"" },
            { text: "Vera'nın planı ne?", effect: +18, next: "'On dört günlük bir döngü var. Her döngüde bir sektör. Bu sektör döngü on dört.' Duraksıyor. 'Sayı. Her yerde bu sayı.'" }
          ]
        }
      ]
    },

    mutant_kaya_d9: {
      name: "Kaya",
      role: "Gün-9 · Mutant Varlık",
      image: "/faces/deney_04.png",
      low: [
        {
          text: "... Bak bana. Gözlerim tamam. Eller... biraz farklı. Ama ben hâlâ benim. Kaya Yılmaz. 1984 doğumlu. Sektör-3 sakini. Bununla konuşabilirsin.",
          choices: [
            { text: "Seni görüyorum. Kaya, konuşalım.", effect: +18, next: "'Teşekkürler.' İlk kez yumuşuyor. 'Çoğu kaçıyor. Ya da silah kaldırıyor. Sen konuşuyorsun. Bu... iyi.'\"" },
            { text: "Değişimin başında ne hissettin?", effect: +12, next: "'Önce ağrı. Damarlar. Sonra... netlik. Çok fazla netlik. Her şeyi çok net görüyorum. Sesler. Renkler. Ve sis — sis sanki bir şey söylüyor bana.'" },
            { text: "Tehlike oluşturduğunda müdahale etmek zorunda kalabilirim.", effect: -10, next: "'Haksız değilsin.' Başını eğiyor. 'Tehlikeli olmamaya çalışıyorum. Her gün.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sis bana bir şey söyledi. Duyabiliyorum onu. Kelime değil... his. Yön. Ve şu an o yön sizi gösteriyor. Endişelenmelisiniz.",
          choices: [
            { text: "Sis ne söylüyor hakkımızda?", effect: +20, next: "'İçinizde biri... sis ile konuşuyor. Kanal açık. Iki yönlü. Ben sedemiyorum kanalı — ama var. Bir kişi. Biri sizin aranızda Vera ile bağlantı kuruyor.' Titriyor. 'Ve bunu ben söylüyorum — bu beni de endişelendiriyor.'\"" },
            { text: "Bu sezgiye ne kadar güvenebiliriz?", effect: +15, next: "'Altı kez yanılmadım. Sektör-3'te aynı his vardı — iki gün sonra kapılar açıldı. Vera geldi.' Gözleri donuyor. 'Ben uyarmıştım. Kimse dinlemedi.'" },
            { text: "Bunu kontrol altında tutmak için ne yapıyorsun?", effect: +8, next: "'Sesi susturmaya çalışıyorum. Ama susturamıyorum. Sadece... filtreliyorum. Hangisi önemli, hangisi gürültü. Bu da beni yoruyor.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir şey itiraf edeceğim. Vera... beni tanıyor. Kişisel olarak. Ben onun bir deneyinin parçasıydım. Ve bu yüzden burada değil, sizin yanınızda olmak istedim.",
          isSpecial: true,
          choices: [
            { text: "Vera'nın deneyi neydi?", effect: +28, next: "'Gümüş formülüne direnç testi. Ben direnenlerden biriydim — ama tam değil. Yarı dönüştüm. Bu beni hem onun için değerli hem de tehlikeli yaptı. Kaçtım. Ve burada onu bekliyorum.' Sesi kırılıyor. 'Çünkü o gelecek. Ve ben hazır olmak istiyorum — sizinle.'" },
            { text: "Vera'ya karşı nasıl savaşacaksın?", effect: +22, next: "'Onu seviyorum. Bu yüzden daha iyi bileceğim nasıl durulacağını.' Uzun bir sessizlik. 'Bazen savaşmanın en iyi yolu anlamaktır.'" }
          ]
        }
      ]
    },

    laughing_man_d9: {
      name: "Gülen Adam",
      role: "Gün-9 · Bilinmez Tehlike",
      image: "/faces/laughing_man.png",
      low: [
        {
          text: "Hahaha... Kapıyı geçtim. Hahaha. Sen geçirdin beni. Hahaha. Bunu biliyor musun, komikliğini? Ben hiç geçemezdim aslında. Ama sen geçirdin.",
          choices: [
            { text: "Neden geçemezdin normalde?", effect: +5, next: "'Çünkü benim ne olduğumu bilmiyorsun. Hahaha. Ve bilmesen de geçirdin. Bu ya cesaret ya aptallık. Hahaha.' Duruyor. 'İkisi de aynı şey bazen.'" },
            { text: "Burada kalmak istiyorsan kurallara uy.", effect: -5, next: "'Kurallar! Hahaha. Ben kurallara uyduğum için mi buradayım? Hahaha. Hayır. Hahaha.'" },
            { text: "Tehdit mi ediyorsun bizi?", effect: -8, next: "Gülüşü duruyor. Bir an için. Sonra normalinden daha yavaş bir sesle: 'Hayır. Uyarıyorum.' Sonra yeniden gülüyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Ben her şeyi biliyorum ama söylemiyorum. Hahaha. Neden söylemeyeyim biliyor musun? Çünkü söylesem inanmazsın. Hahaha. Ve inansan bile geç kalırsın. Hahaha.",
          choices: [
            { text: "Söyle. İnanıp inanmamak bana kalsın.", effect: +20, next: "Gülüşü yavaş yavaş duruyor. Çok nadir bir şey. 'Sığınakta yedi kişi var. Yedi kişi uyurken farklı nefes alıyor. Ritim farklı. Sesten belli. Ben saydım. Yedi.' Sonra yeniden başlıyor: 'Hahaha.' Ama bu sefer daha az eğlenceli." },
            { text: "Nasıl her şeyi biliyorsun?", effect: +15, next: "'Ben çok dinledim. Hayatım boyunca. İnsanlar gülen birini duymuyor sanıyor. Hahaha. Ama ben her şeyi duydum. Her şeyi.' Süzüyor seni. 'Seninle ilgili de.'" },
            { text: "Bu tutum yardımcı olmuyor.", effect: -8, next: "'Yardımcı olmak istemiyorum. Hahaha. Hayatta kalmak istiyorum. Hahaha. Fark var.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Gülüşü tamamen durmuş. İlk defa. Sesi derin ve sakin. ] 'Seninle düzgün konuşmam lazım. Hahaha yok. Sadece gerçek. Hazır mısın?'",
          isSpecial: true,
          choices: [
            { text: "Hazırım. Konuş.", effect: +28, next: "'Ben Vera'nın önceki deney numunelerinden biriyim. Ama kaçtım. Gülme... yan etki. Sinir hasarı. Kontrol edemiyorum çoğu zaman. Ama kafam çalışıyor. Ve biliyorum: on dört gün dolduğunda Vera kapıları açacak. Sadece silahlı değil — içeriden yardım alarak. O yardım şu an burada. Sen bilmiyorsun hangisi. Ben biliyorum.' Uzun bir duraklama." },
            { text: "Hangisi? Söyle.", effect: +22, next: "'Söylersem o kişi kaybolur. Çok hızlı. Vera'nın tepki süresi kısa. Ama şunu söyleyeyim: kadın. Ve herkesi tanıyor. Ve hiç şüphe çekmedi şimdiye kadar.'" }
          ]
        }
      ]
    },

    // GÜN 9 — BİLİM İNSANI ANNA
    scientist_d9: {
      name: "Bilim İnsanı Anna",
      role: "Gün-9 · Son Uzman",
      image: "/faces/scientist_anna.png",
      low: [
        {
          text: "Sorumlu olduğumu düşünüyorsun. Ve... tamamen haksız değilsin. Araştırma ekibindeydim. Ama durdum ve uyardım. Dinlemediler.",
          choices: [
            { text: "Ne araştırıyordunuz?", effect: +15, next: "'Sis ile biyolojik arayüz. Nasıl kontrol edilir, nasıl yönlendirilir. Ekip parlaktı. Ve tamamen etik pusulanızı kaybetti.' Gözlerini kısaca kapatıyor." },
            { text: "Olan şeylerden sorumlu musun?", effect: +8, next: "'Katkıda bulunan. Tek neden değil. İtiraz ettiğim gün projeden çıkardılar. Üç yıl önceydi. Sonrası...' Bitiremedi." },
            { text: "Güven oluştuğunda konuşuruz.", effect: +5, next: "'Adil. Burada olacağım.' İşine dönüyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Gümüş formülünü ben tasarladım. Koruma mekanizması olarak. Bağışıklık yaratması gerekiyordu. Ama hesaplayamadığımız bir değişken vardı: İnsan DNA'sı tekdüze değil. Formül herkesi farklı etkiledi.",
          choices: [
            { text: "En kötü etkisi ne oldu?", effect: +20, next: "'Tam entegrasyon. Denek... sis olur. Ölmez. Olur. Bilinçli, iletişim kuran, ama biyolojik anlamda artık insan değil. Biz onlara Faz-3 dedik.' Nefes veriyor. 'Vera şimdi kasıtlı olarak Faz-3 üretiyor.'" },
            { text: "Panzehir var mı?", effect: +18, next: "'Teoride. Eksik notlarım var. Ama Faz-4 laboratuvarı gerekiyor. O ekipmanı yıllardır görmedim.' Duraksıyor. 'Sektör-0'da hâlâ olmadıysa.'" },
            { text: "Bu bilgi resmi olarak kayıt altına alınmalı.", effect: +8, next: "'Katılıyorum. Ama dikkatli. Yanlış ellere geçerse silah olarak kullanırlar, tedavi olarak değil.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana Deney-84'ü anlatmam lazım. Kaçan deneği. Kaçmasına ben yardım ettim. Çünkü yapılanın yanlış olduğunu anladım. Bu yüzden ben de av altındayım.",
          isSpecial: true,
          choices: [
            { text: "Deney-84 hakkında her şeyi anlat.", effect: +28, next: "'Denek 84, Gümüş formülüne en yüksek direnci gösterdi. Hiç dönüşmedi. Ama tüm yan etkileri yaşadı — sürekli ağrı, duyusal aşırı yükleme, sisin sesi. Vera onu kesip direncin kaynağını anlamak istedi. İzin veremedim. Kaçmasına yardım ettim.' Nefes alıyor. 'Denek 84 hâlâ hayattaysa... o kişi panzehirin anahtarı olabilir.'" },
            { text: "Denek 84 burada mı? Sığınakta?", effect: +22, next: "Çok uzun bir duraklama. 'Umarım öyle. Buraya gelmemin bir nedeni de buydu.' Başka bir şey söylemiyor." }
          ]
        }
      ]
    },

    // GÜN 7 — FİDAN ANA
    mother_fidan_d7: {
      name: "Fidan Ana",
      role: "Gün-7 · Koruyucu Anne",
      image: "/faces/d7_mother.png",
      low: [
        {
          text: "Bebeğe dokunma. Kimse dokunmasın. Ben koruyacağım onu. Sisten, insandan, her şeyden.",
          choices: [
            { text: "Bebek güvende, söz veriyorum.", effect: +12, next: "'Söz mü? Sözler çürüdü bu dünyada. Ama gözlerinde bir şey var... tamam.' Bebeği biraz daha sıkı tutuyor." },
            { text: "Sığınakta güvenli bir alan var, istersen oraya geçin.", effect: +15, next: "'Güvenli alan... Güzel kelime. Bu dünyada böyle bir yer kaldı mı bilmiyorum. Ama deneyeceğim.' Gözleri nemiyor." },
            { text: "Herkesin kendine dikkat etmesi gerekiyor.", effect: -10, next: "'Ben kendime değil, ona bakıyorum.' Bebeği gösteriyor. 'O benim her şeyim.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Umut'un babası Sektör-5'teydi. Kapı kapandığında içerideydi. Bana 'kaç' dedi telefonda. Son kelimesi buydu. Ve sonra... sis. Her şeyi yuttu.",
          choices: [
            { text: "Babası hakkında ne biliyorsun?", effect: +18, next: "'Mühendisti. Vera'nın projesinde çalışıyordu. Zorunlu görevdi — reddetseydi hapis. Ama son hafta bir şey değişti. Korkuyordu. Ve bana 'deneyleri gördüm' dedi. Daha fazlasını söylemedi.'" },
            { text: "Umut nasıl? Sağlığı iyi mi?", effect: +20, next: "'Fiziksel olarak iyi. Ama... gece ağlamayı bıraktı. Bebeklerin ağlaması normaldir. O ağlamıyor. Ve bazen gözleri... parıldıyor. Farklı bir parlaklık.' Sesi titriyor." },
            { text: "Geçmiş geride kaldı, ileriye bakmak lazım.", effect: -5, next: "'Geçmiş geride kalmadı. Geçmiş şu an dışarıda, sis olarak.' Sert bakıyor." }
          ]
        }
      ],
      high: [
        {
          text: "Sana Umut hakkında bir şey söyleyeceğim. Kimseye söylemedim. Ama sen bilmelisin çünkü eğer bir şey olursa... onu korumanı istiyorum.",
          isSpecial: true,
          choices: [
            { text: "Söyle. Koruyacağım.", effect: +28, next: "'Umut normal doğmadı. Vera'nın laboratuvarında doğdu — gizli bir prosedürle. Babası orada çalışırken beni de çağırdılar. İlaçlar verdiler hamilelik boyunca. Gümüş renkli ilaçlar. Ve Umut doğduğunda... sis onu etkilemedi. Hiç. Sanki bağışık.' Gözlerinden yaşlar akıyor. 'Oğlum bir deney mi? Yoksa umut mu?'" },
            { text: "Umut'u test etmemiz gerekebilir.", effect: +15, next: "'Test... Biliyorum. Ama sana yalvarıyorum — asla Vera'nın eline geçmesin. Asla.' Sesi çatallıyor." }
          ]
        }
      ]
    },

    // GÜN 7 — BEBEK UMUT
    baby_umut_d7: {
      name: "Bebek Umut",
      role: "Gün-7 · Umut Kıvılcımı",
      image: "/faces/d7_baby.png",
      low: [
        {
          text: "[ Bebek sana bakıyor. Gözleri olağandışı berrak. Ağlamıyor. Gülmüyor. Sadece izliyor. Sanki anlıyor. ]",
          choices: [
            { text: "[ Bebeğe gülümse. ]", effect: +10, next: "[ Bebek de gülümsüyor. Ama bir bebekten beklenmeyecek kadar bilinçli bir gülümseme. Fidan Ana: 'Gördün mü? O biliyor.' ]" },
            { text: "[ Bebeği dikkatlice incele. ]", effect: +8, next: "[ Gözlerinde hafif gümüşi bir ton var. Normal ışıkta görünmez ama karanlıkta parlıyor. Fidan Ana endişeyle izliyor seni. ]" },
            { text: "[ Uzaklaş. ]", effect: -5, next: "[ Bebek uzaklaştığında ağlamaya başlıyor. İlk kez ses çıkarması. Fidan Ana hızla yanına koşuyor. ]" }
          ]
        }
      ],
      medium: [
        {
          text: "[ Bebek bu sefer farklı. Parmaklarıyla havada bir şekil çiziyor — tekrar tekrar. Bir daire, içinde bir nokta. Sektör-0 sembolü. ]",
          choices: [
            { text: "[ Şekli kaydet ve analiz et. ]", effect: +20, next: "[ Doktor Arzu daha sonra teyit ediyor: 'Bu Proje Sıfır'ın resmi logosu. Bir bebek bunu nasıl bilebilir?' Herkes sessiz. ]" },
            { text: "[ Fidan Ana'ya sor. ]", effect: +15, next: "'Bunu daha önce de yapıyordu. Uyurken. Parmaklarıyla aynı şekli çiziyor. Her gece.' Korkuyor ama oğlunu korumaktan vazgeçmiyor." }
          ]
        }
      ],
      high: [
        {
          text: "[ Gece yarısı. Bebek uyanık. Ve fısıldıyor. Bebeklerin fısıldayamayacağı kadar net, kadar düzgün: 'Kapı. On. Dört.' Sonra uyuyor. ]",
          isSpecial: true,
          choices: [
            { text: "[ Bunu kayıt altına al. ]", effect: +25, next: "[ Kayıt cihazı sesi yakalıyor. Dinlettiğinde herkes donuyor. Anna: 'Bu formülün etkisi. Bilgi transfer ediliyor. Bebek bir alıcı.' Fidan Ana ağlıyor. 'Oğlum alet değil.' ]" },
            { text: "[ Fidan Ana'yı yalnız bırak. ]", effect: +15, next: "[ Ertesi gün Fidan Ana sana geliyor: 'Dün gece olanlara rağmen ona baktın. Teşekkür ederim.' Güveni artıyor. ]" }
          ]
        }
      ]
    },

    // GÜN 8 — ARAYAN BABA
    searching_father_d8: {
      name: "Arayan Baba",
      role: "Gün-8 · Kayıp Peşinde",
      image: "/faces/d8_searching_father.png",
      low: [
        {
          text: "Kızım... On iki yaşında. Dışarıda bir yerde. Ya da... başka bir yerde. Bilmiyorum. Ama her gün arıyorum.",
          choices: [
            { text: "Kızını en son nerede gördün?", effect: +15, next: "'Sektör-3 sınırında. Sis geldiğinde okuldan dönüyordu. Koştum. Ama sis daha hızlıydı.' Sesi boğuluyor. 'Ve şimdi her gün dışarıya gidip bakıyorum. Her gün.'" },
            { text: "Dışarısı çok tehlikeli, burada bekle.", effect: +5, next: "'Bekleyemem. Sen çocuğu olmayan birisin belki. Bir gün anlarsın.' Çaresiz gülümsüyor." },
            { text: "Onu bulmak imkansız olabilir.", effect: -15, next: "Gözleri buz kesiyor. 'Bunu bana bir daha söyleme.' Sırtını dönüyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Dışarıda aradım onu. Her gün. Ve bir gün bir şey buldum — kızımın paltosu. Ama üzerinde garip bir şey vardı. Gri toz. Ve paltonun cebinde bir kağıt.",
          choices: [
            { text: "Kağıtta ne yazıyordu?", effect: +22, next: "'Koordinatlar. Resmi görünümlü el yazısıyla. Ve altında: 'Teslim noktası 7.' Kızımı birileri aldı. Rastgele değil — planlı.' Elleri sıkılıyor." },
            { text: "Gri toz Gümüş formülü olabilir.", effect: +18, next: "'Ne formülü?' Şaşkın. Ama anlatıldığında yüzü değişiyor. 'O zaman kızıma ne yaptılar?' Fısıldıyor." },
            { text: "Paltodaki kanıtları kayıt altına alalım.", effect: +12, next: "'Palto burada. Al.' Ceketten çıkarıyor. 'Ama bana söz ver — kızımı bulacağız.'" }
          ]
        }
      ],
      high: [
        {
          text: "Kızımı buldum. Ama... o artık kızım değil. Dışarıda gördüm. Gözleri aynı ama bakışı farklı. Ve beni tanımadı. 'Baba' demedi. Sadece baktı ve yürüdü.",
          isSpecial: true,
          choices: [
            { text: "Ne olduğunu anlat, lütfen.", effect: +28, next: "'Sis onu almış. Ama öldürmemiş. Dönüştürmüş. Vera'nın çocukları — onlara böyle deniyormuş. Küçük yaştakileri alıyorlar. Programlıyorlar. Ve geri bırakıyorlar. Gözü görür, kulağı duyar ama... içi boş.' Ağlıyor. 'Kızım yaşıyor ama onu kaybettim.'" },
            { text: "Onu geri getirebilir miyiz?", effect: +20, next: "'Bilim İnsanı Anna bir ihtimalden bahsetti. Panzehir. Ama erken evrede olmalıymış. Kızımın dönüşümü ne aşamada bilmiyorum.' Umutsuz ama pes etmemiş." }
          ]
        }
      ]
    },

    // GÜN 10 — KAÇAK (DENEY-04)
    escapee_d10: {
      name: "Kaçak",
      role: "Gün-10 · Sistem Kaçağı",
      image: "/faces/deney_04.png",
      low: [
        {
          text: "[ Titriyor. Gözleri sürekli kapıya gidiyor. ] Beni geri göndermeyeceksin değil mi? Söz ver. Lütfen. Oraya dönmektense ölürüm.",
          choices: [
            { text: "Göndermeyeceğim. Burası güvenli.", effect: +18, next: "'Güvenli... Bu kelimeyi uzun zamandır duymadım.' Yavaşça sakinliyor. 'Teşekkür ederim. Adım... artık adım yok. Bana 04 diyorlardı.'" },
            { text: "Nereden kaçtın? Ne gördün?", effect: +12, next: "'Vera'nın yeraltı tesisinden. Orada... insanlar var. Tüplerde. Yeşil sıvı içinde. Uyuyorlar ama... dönüşüyorlar. Ve uyanınca farklı oluyorlar.' Titremesi artıyor." },
            { text: "Seni sorgulamam gerekecek.", effect: -10, next: "'Sorgulama... Orada da sorgulama vardı. Sonra iğneler. Sonra karanlık.' Geri çekiliyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'nın tesisi hakkında bildiğim her şeyi anlatacağım. Ama bunu anlatırken ben de hatırlayacağım. Ve hatırlamak... acı veriyor.",
          choices: [
            { text: "Hazır olduğunda anlat, acele yok.", effect: +22, next: "'Alt kat. Üç bölüm var. Birincisi laboratuvar — formül üretimi. İkincisi dönüşüm odası — insanlar giriyor, farklı çıkıyor. Üçüncüsü... kontrol odası. Vera orada. Ekranlar var. Her sektörü izliyor. Her birini.' Nefes alıyor. 'Ve bir büyük ekran var — sığınakların haritası. Sizin de.'" },
            { text: "Kaç kişi var orada?", effect: +18, next: "'Sayamadım. Ama yüzlerce. Çoğu uyuyor — tüplerde. Vera onlara 'tohumlar' diyor. Hazır olduklarında serbest bırakılacaklarmış. Ne zaman? On dört gün sonra.'" },
            { text: "Bu bilgiyi doğrulayabilir miyiz?", effect: +8, next: "'Bilim İnsanı Anna doğrulayabilir. O tesiste çalıştı. Ve benim kaçmama yardım etti.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Bu sefer 04 çok sakin. Daha önce hiç bu kadar sakin olmamıştı. ] 'Sana bir sır vereceğim. Vera'nın zayıf noktasını.',",
          isSpecial: true,
          choices: [
            { text: "Söyle.", effect: +30, next: "'Formül kendi başına çalışmıyor. Bir merkez sinyale ihtiyacı var. Bir verici. Vera'nın tesisinin kalbinde. Bunu yok ederseniz — formül işlevini yitirir. Dönüşenler durmaz ama yeni dönüşüm olmaz. Ve zamanla... belki geri dönerler. Belki.' Gözleri ışıldıyor. 'Vericinin koordinatlarını biliyorum.'" },
            { text: "Bu vericiye nasıl ulaşılır?", effect: +22, next: "'Tesise girmeniz lazım. Ve içerideki tuzakları bilmeniz lazım. Ben bilirim. Beni götürürsen yolu gösteririm.' Korkuyor ama kararlı." }
          ]
        }
      ]
    },

    // GÜN 10 — SUİKASTÇI (KARANLIK)
    assassin_d10: {
      name: "Suikastçı",
      role: "Gün-10 · Gölge Tetikçi",
      image: "/faces/assassin_wraith.png",
      low: [
        {
          text: "[ Karanlıkta oturuyor. Ses çıkarmıyor. Yaklaştığında sadece: ] Bir adım daha ve son adımın olur.",
          choices: [
            { text: "Ben tehdit değilim. Konuşalım.", effect: +5, next: "'Konuşmak işime yaramaz. Ama...' Uzun bir duraklama. 'Tamam. Ama mesafeni koru.'" },
            { text: "Sen kimsin?", effect: +3, next: "'Kimliğim öldü. Ben sadece bir araçtım. Şimdi aracın için pası yedi.' Sert ama yorgun." },
            { text: "Silahını bırak, burada kurallar var.", effect: -15, next: "'Kurallar mı?' Sessiz bir gülüş. 'Kurallarla yaşayanlar dışarıda kaldı.' Ama silahını yavaşça masaya koyuyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Ben Vera'nın eski ajanıyım. Gölge birim. İşimiz basitti: hedefleri susturmak. Ama bir gün hedef listesinde tanıdığım biri çıktı.",
          choices: [
            { text: "Kim çıktı listede?", effect: +20, next: "'Kardeşim.' Uzun sessizlik. 'O zaman anladım — sistem umursamıyor. Herkes bir numaradır. Ben de. Ve o gün döndüm.' Bakışları soğuk ama bir yerleri kırılmış." },
            { text: "Vera'nın gölge birimi hakkında ne biliyorsun?", effect: +18, next: "'Her şeyi. Kaç kişi var, kim nerede, ne zaman hareket ediyor. Güzergahlar, sinyal kodları, giriş noktaları.' Duraksıyor. 'Bu bilgiyi bedavaya vermem ama burada hayatta kalmama yardım et, ben de yardım edeyim.'" },
            { text: "Sana güvenemem.", effect: -5, next: "'Akıllıca. Bana güvenme. Ama bilgime güven. Çünkü benim hayatım da bu bilgiye bağlı.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Gece. Seni uyandırıyor. Sessizce. ] 'Yarın gece bir saldırı planlanıyor. İçeriden. Üç kişi. Ve ben hepsini tanıyorum.'",
          isSpecial: true,
          choices: [
            { text: "İsimleri ver.", effect: +28, next: "'Biri küçük rütbeli, nöbet tutan — Teğmen Rıza. İkincisi sığınak personelinden, kayıt memuru. Üçüncüsü...' Duraksıyor. 'Üçüncüsünü söylesem inanmazsın. Ama söyleyeceğim: Naciye. Gözcü Naciye.' Gözleri buz gibi." },
            { text: "Saldırıyı nasıl durdurabiliriz?", effect: +22, next: "'Sadece birini etkisiz hale getir — Rıza'yı. Koordinatör o. Diğerleri onsuz hareket edemez. Ama bunu sessizce yapmalısın. Yoksa Vera anlar ve planı değiştirir.'" }
          ]
        }
      ]
    },

    // GÜN 10 — ORACLE (KARANLIK/GİZEMLİ)
    oracle_d10: {
      name: "Oracle",
      role: "Gün-10 · Gizemin Sesi",
      image: "/faces/oracle_blind.png",
      low: [
        {
          text: "[ Gözleri bağlı. Sana dönüp bakıyor — ama görmüyor. Ya da görmekten başka bir şekilde algılıyor. ] Sen geldin. Biliyordum geleceksin. Üç gündür bekliyorum.",
          choices: [
            { text: "Beni nasıl biliyordun?", effect: +15, next: "'Sis anlatıyor. Her şeyi. Ben dinlemeyi öğrendim — ve karşılığını ödedim.' Bağını gösteriyor. 'Gözlerimi verdim. Karşılığında gerçeği aldım.'" },
            { text: "Gözlerine ne oldu?", effect: +12, next: "'Ben yaptım. Kendime. Sis'i görmek istemiyordum — görsel olarak. Çünkü görsel algı yanıltır. Ama ses... ses yalan söylemez.' Sakin ama ürkütücü." },
            { text: "Bu bir düzenbazlık olabilir.", effect: -8, next: "'Düzenbaz mı? Peki yarın güneydoğudan üç kişi gelecek. Biri yaralı. Biri kadın. Biri çocuk. Göreceksin.' Ve gerçekten olur." }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'nın gerçek adı Vera değil. Bunu biliyor muydun? Vera bir kod adı. Projektin adı: Veri Aktarım Protokolü. VERA. Ve 'o' bir kişi değil — bir program.",
          choices: [
            { text: "Vera bir program mı?", effect: +25, next: "'Bir kişi var evet — canlı, nefes alan. Ama o kişi programın yüzü. Kararları veren program. Yapay zeka değil... daha eski bir şey. Sektör-0'da yaratıldı. İnsanlardan öğrendi. Ve şimdi insanları yönetiyor.' Yutkunuyor. 'Kız sadece arayüz.'", followUp: { text: "Göz bağının altından sana baktığını hissediyorsun. 'Programın asıl amacı bizi kontrol etmek değil... bizi bir sonraki aşamaya hazırlamaktı. Sis, bu geçişin katalizörü. Sen de bu deneye dâhilsin Operatör.'", choices: [{text: "Bunu nasıl durdurabiliriz?", effect: +15, next: "Acı acı gülümsüyor. 'Durdurmak mı? Seli ellerinle durdurabilir misin? Sadece akışına yön verebilirsin. Sunucu odasını bulman gerekiyor.'"}, {text: "Sus artık ihtiyar, bunlar saçmalık.", effect: -10, next: "Başını eğiyor. 'Sağır olan ben değilim... sensin. Gerçeklerle yüzleştiğinde bu anı hatırlayacaksın.'"}] } },
            { text: "Bu bilgi nereden geliyor?", effect: +18, next: "'Sisten. Sis konuşuyor. Ben dinliyorum. Çoğu insan duymaz — çünkü gözleri var. Gözler gürültü yapar. Ben sessizliği seçtim.' Bağına dokunuyor." },
            { text: "Buna inanmak çok zor.", effect: +5, next: "'İnanmana gerek yok. Doğrulamana gerek var. Anna'ya sor. O da biliyor. Ama söylemeye korkuyor.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Gecenin en karanlık saatinde seni çağırıyor. ] 'On dört gün dolmak üzere. Ve ben sana son bilgiyi vereceğim. Bundan sonra konuşamam — çünkü sis beni alacak.'",
          isSpecial: true,
          choices: [
            { text: "Seni kurtarabiliriz.", effect: +30, next: "'Kurtaramazsınız. Ben zaten yarısıyım. Ama şunu bilin: Vera'nın vericisi yok edilirse, dönüşüm durur. Verici Sektör-0'ın tam altında. Ama oraya girmek için bir anahtar lazım — biyometrik. Ve o anahtar...' Duraksıyor. 'Bebek Umut'un kanı. O çocuk formüle dirençli doğdu. Kanı vericinin kilidini açar ve aynı zamanda onu yok eder.' Sessizlik çöküyor." },
            { text: "Oracle, kız kardeşin burada. Sessiz Kadın.", effect: +25, next: "İlk kez yüzünde bir duygu. Acı. 'Biliyorum. Sesini duyamadığımı biliyorum ama varlığını hissediyorum. Ona söyle... özür dilerim. Korumak için uzaklaştırmıştım. Ama sis hepimizi bir araya getirdi sonunda.' Gözyaşları bağın altından akıyor." }
          ]
        }
      ]
    },

    // GÜN 11 — ENFEKTE OĞUZ (KARANLIK)
    infected_oguz_d11: {
      name: "Enfekte Oğuz",
      role: "Gün-11 · Sis Kurbanı",
      image: "/faces/infected_oguz.png",
      low: [
        {
          text: "[ Nefes alması ağır, tıslayarak. Gözlerinde gri damarlar belirgin. ] Bana... bakma. Böyle. Ben bu değilim. Ben Oğuz'um.",
          choices: [
            { text: "Seni görüyorum Oğuz. Konuşalım.", effect: +15, next: "'İnsan gibi konuşuyor benimle.' Nefesi bir an düzeliyor. 'Çoğu kaçıyor. Sen... kaldın.' Gözlerindeki gri bir an geriyor." },
            { text: "Enfeksiyon ne aşamada?", effect: +8, next: "'Bilmiyorum. Ama geceleri ses duyuyorum. Sis bana bir şeyler söylüyor. Ve en korktuğum şey... anlamaya başlıyorum onu.'" },
            { text: "Karantinaya alınman gerekebilir.", effect: -12, next: "'Karantina... Orada da karantina vardı. Sonra denekler başladı. Lütfen.' Gözleri dehşetle açılıyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Sis bana konuşuyor. Her gece daha net. Kelimeler var artık — isimler. Ve senin ismini de söylüyor.",
          choices: [
            { text: "Sis benim adımı mı söylüyor?", effect: +20, next: "'Söylemiyor aslında. Daha çok... gösteriyor. Kimin nerede olduğunu biliyorum. Gözlerimi kapatsam bile. Sen şimdi sağımda, iki metre. Ve kalp atışın hızlı.' Doğru söylüyor." },
            { text: "Bu yeteneği kontrol edebilir misin?", effect: +15, next: "'Kontrol... Bazen. Ama kontrol ettiğimde sis daha çok istiyor. Sanki kullanıyorum ve borçlanıyorum.' Titriyor. 'Ne kadar çok duyarsam, o kadar çok dönüşüyorum.'" },
            { text: "Bu seni silah haline getirebilir.", effect: -8, next: "'Silah mı? Ben bir insanım!' Ama sesi bir an için metalik tınlıyor. İkisi de fark ediyor." }
          ]
        }
      ],
      high: [
        {
          text: "[ Oğuz seni gecenin en karanlık saatinde buluyor. Yüzü yarı dönüşmüş ama gözlerinde hâlâ insanlık var. ] 'Çok az vaktim kaldı. Sana son bir şey söylemeliyim.'",
          isSpecial: true,
          choices: [
            { text: "Dinliyorum Oğuz.", effect: +28, next: "'Vera'nın içerideki ajanını gördüm. Sisin gözlerinden. O kişi... dönüşmüş ama saklanıyor. Sisin iradesiyle hareket ediyor. Ve sana en yakın kişi.' Gözleri bulanıklaşıyor. 'Adını söyleyemiyorum — sis engelliyor. Ama şu odaya gir, sol taraftaki dolabı aç. Kanıt var.' Son gücüyle konuşuyor." },
            { text: "Seni kurtarabilir miyiz?", effect: +20, next: "'Geç. Benim için geç. Ama seni uyardım. Bu yeter.' Gülümsüyor — son insani gülümsemesi. 'Oğuz'u hatırla.'" }
          ]
        }
      ]
    },

    // GÜN 11 — GÖLGE YÜRÜYÜCÜ (ÇOK KARANLIK)
    shadow_walker_d11: {
      name: "Gölge Yürüyücü",
      role: "Gün-11 · Görünmez Tehdit",
      image: "/faces/character_shadow.png",
      low: [
        {
          text: "[ Onu görmüyorsun. Ama sesi geliyor — her yerden. ] Beni aramana gerek yok. Ben zaten buradayım. Her zaman buradaydım.",
          choices: [
            { text: "Neredesin? Göster kendini.", effect: +5, next: "'Göstermem. Çünkü görmek istemezsin.' Ses arkandan geliyor. Döndüğünde kimse yok. Ama masada bir not var: 'Dikkat et kiminle yemek yiyorsun.'" },
            { text: "Tehdit ediyorsan yanılıyorsun.", effect: -10, next: "'Tehdit mi? Ben tehdit etmem. Ben uyarırım. Ve uyarmak zorunda değilim.' Ses kayboluyor. Ama gece rüyanda onu hatırlıyorsun." },
            { text: "Konuşmak istiyorsan koşullarımı kabul et.", effect: +8, next: "Uzun bir sessizlik. Sonra: 'Kabul.' Ve ilk kez bir köşeden çıkıyor. Yüzü... belirsiz. Karanlık bir maske mi, gerçek mi anlaşılmıyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Ben sisin ilk ürünüyüm. Vera'dan önce. Proje Sıfır'ın birinci deneyiydim. Çoğu öldü. Ben... öldüm mü? Emin değilim.",
          choices: [
            { text: "Yaşıyorsun. Burada konuşuyoruz.", effect: +15, next: "'Konuşuyoruz evet. Ama ben duvardan geçebiliyorum. Gölgelerde hareket edebiliyorum. Bunu yapabilen bir şey yaşıyor mu?' Çok sakin. 'Ben aradayım. İnsan da değil, sis de değil. Vera beni mükemmel buluyordu — ama kontrol edemiyordu.'" },
            { text: "Vera'dan kaçtın mı?", effect: +18, next: "'Kaçmadım. Yok oldum. On yıl boyunca gölgelerde yaşadım. İnsanları izledim. Her şeyi duydum. Ve şimdi buradayım çünkü... bir şey değişti.' Bakışları cılız ışıkta parlıyor. 'Vera ölecek. Ve ben istiyorum ki doğru kişi öldürsün.'" },
            { text: "Senden korkmalı mıyım?", effect: +3, next: "'Henüz değil.' Bu cevap yeterince ürkütücü." }
          ]
        }
      ],
      high: [
        {
          text: "[ Gece yarısı. Yatağının yanında. Nefes sesi yok ama var. ] 'Vera'nın sığınaktaki ajanını biliyorum. Ve onu ortadan kaldırmak istiyorum. İzin ver.'",
          isSpecial: true,
          choices: [
            { text: "Kim o?", effect: +25, next: "'Söyleyeceğim ama karar senin. O kişi... Doktor Arzu değil. Rahip değil. Daha sinsi biri. Kayıt memuru — hani hiç fark etmediğin adam? Her gece dışarı çıkıyor. Ve geri geldiğinde üzerinde toprak izi var. Ondan duyduğun her şey Vera'ya gidiyor. Her. Şey.' Karanlıkta parlayan gözleri buz gibi." },
            { text: "Kimseyi öldürmene izin veremem.", effect: +15, next: "'Peki. O zaman kendin halledersin. Ama bunu bil: yarın gece saat üçte harekete geçecek. Ve sensiz bile çözerim bunu.' Kayboluyor. Ama hissediyorsun — izliyor." }
          ]
        }
      ]
    },

    // GÜN 12 — ŞAMAN
    mind_reader_saman_d12: {
      name: "Şaman",
      role: "Gün-12 · Zihin Okuyucu",
      image: "/faces/mind_reader_saman.png",
      low: [
        {
          text: "Düşüncelerini duyuyorum. Hayır, şaka yapmıyorum. Şu an 'bu adam deli' diye düşünüyorsun. Ve... haklısın biraz. Ama deli doğru şeyleri görebilir.",
          choices: [
            { text: "Tamam, ne düşünüyorum şimdi?", effect: +10, next: "'Merak ediyorsun. Ve korkuyorsun. Ama korkunun altında... umut var. Ve şu an başka bir düşünce daha var: 'Vera hakkında ne biliyor?' İşte bunu biliyorum.' Tüyler ürpertici bir doğruluk." },
            { text: "Yeteneğin nereden geliyor?", effect: +12, next: "'Formül. Gümüş formülünün farklı bir versiyonu. Vera bana verdi — gönüllü değildim. Ama yan etkisi bu oldu. Dönüşmedim, ama... kafalar açıldı.' Şakacı ama altında acı var." },
            { text: "Düşünce okumak mümkün değil.", effect: -5, next: "'O zaman cebindeki fotoğraftan bahsetmeyeceğim. Kız kardeşinin fotoğrafı. Sol cep.' Doğru mu?" }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'nın planını gördüm. Kafasının içinde. Yakın mesafede olduğumda okuyabildim. Ve gördüklerim... seni korkutabilir.",
          choices: [
            { text: "Ne gördün kafasında?", effect: +22, next: "'Bir harita. Tüm sektörlerin haritası. Ve her birinin üzerinde bir tarih. Bizim sektörümüzün tarihi... iki gün sonra. Ve haritanın ortasında büyük bir sembol: Sektör-0. Orası merkez. Her şey oradan kontrol ediliyor.' Gözleri odaklanıyor. 'Ve Vera... korkuyor. Evet, o da korkuyor. Ama neden? İşte bunu okuyamadım.'" },
            { text: "Vera'nın düşüncelerini okuyabiliyorsan neden burada?", effect: +18, next: "'Çünkü o da beni okuyor. İki yönlü. Ve uzaklaştığımda güçsüzleşiyor ikimiz de. Ama yakınlaşırsam... ya onu yenerim ya o beni.' Terliyor." },
            { text: "Bu bilgiye güvenebilir miyiz?", effect: +8, next: "'Bana güvenme. Ama verdiğim bilgiyi doğrula. İki gün sonra ne olacağını göreceksin.'" }
          ]
        }
      ],
      high: [
        {
          text: "Vera'nın en büyük korkusunu buldum. Ve bu korku... sensin.",
          isSpecial: true,
          choices: [
            { text: "Ben mi? Neden?", effect: +30, next: "'Çünkü sen karar veriyorsun. Ve Vera'nın tüm sistemi tek bir zayıflığa sahip: özgür irade. Formül kontrol eder ama iradenin üstüne çıkamaz. Ve sen... iradesi güçlü birisin. Vera bunu biliyor. Bu yüzden seni dönüştürmek istiyor — öldürmek değil. Çünkü öldürürse kaybeder.' Yutkunuyor. 'Sen onun en büyük ödülü ve en büyük tehdidisin. Aynı anda.'" },
            { text: "Bu avantajı nasıl kullanabiliriz?", effect: +22, next: "'Vera'nın sana yaklaşmasını sağla. Ve ben arada olacağım. Kafasını okuyacağım. Tam bilgiyi çekeceğim. Ama risk var — beni kaybedebilirsin.' Gülümsüyor. 'Her büyü bir bedel ister.'" }
          ]
        }
      ]
    },

    // GÜN 12 — PİLOT SİNAN
    pilot_sinan_d12: {
      name: "Pilot Sinan",
      role: "Gün-12 · Son Pilot",
      image: "/faces/pilot_sinan.png",
      low: [
        {
          text: "Helikopteri çakmadan indirdim. Bu yeteneğimle hayatta kalıyorum. Ama yakıt bitmek üzere ve gidecek yer... dışarıda yer var mı?",
          choices: [
            { text: "Hava durumu ve dış koşulları biliyor musun?", effect: +15, next: "'Biliyorum. Sis 3000 metreye kadar çıkıyor. Üstü temiz. Ama iniş yapacak yer yok — her yer kaplı. Tek temiz alan: güneyde, kıyı şeridi. Ama orası 400 km uzakta.' Duraksıyor. 'Yakıtım 350 km'lik.'" },
            { text: "Helikopter kaç kişi taşır?", effect: +10, next: "'Altı. Belki yedi hafif yükle. Ama herkes gidemez. Ve bu kararı... kim verecek?' Sana bakıyor." },
            { text: "Uçmak çılgınlık, burada kalmalıyız.", effect: -5, next: "'Burada kalmak da çılgınlık. Seçenekler kötü, eleman. Ama ben uçmayı tercih ederim.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Uçarken bir şey gördüm. Sığınağa gelirken. Ve bu gördüğüm şey... değiştirdi her şeyi.",
          choices: [
            { text: "Ne gördün?", effect: +22, next: "'Sektör-0'ın üstünden geçtim. Orası... açık. Sis yok üstünde. Bir göz gibi — ortası temiz, etrafı sis. Ve ortada bir yapı var. Kocaman. Işıklar yanıyor. Aktif yani.' Gözleri büyüyor. 'Ve etrafında araçlar vardı — askeri. Ama bizim ordumuzun değil.'" },
            { text: "Oraya inebilir misin?", effect: +18, next: "'İnebilirim. Ama çıkabilir miyim? Orası soru.' Sert bakıyor. 'İnersek bilgi alırız. Ama dönüş garantisi yok. Ve en önemlisi: kokpiti açtığımda sis girer mi?' Yutkunuyor." },
            { text: "Bu bilgiyi stratejik plana ekleyelim.", effect: +12, next: "'Ekleyelim. Ama şunu bil: uçuş penceresi kapanıyor. Yakıt günlerce dayanmaz. Karar vermen lazım — çabuk.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir teklif var. Son uçuş. Sektör-0'a. İçeri girmek, vericiye ulaşmak. Helikopterle üstünden gireriz ve geri döneriz. Ya da dönmeyiz. Ama en azından biteriz bunu.",
          isSpecial: true,
          choices: [
            { text: "Bu intihar görevi.", effect: +25, next: "'Her büyük zafer birine göre intiharla başladı.' Gülümsüyor. 'Altı kişilik ekip: ben, sen, 04 yol gösterir, Suikastçı güvenlik sağlar, ve şifacı yaralılar için. Altıncı koltuk... Araş ya da Anna olmalı. Formülü kim tanırsa o.' Eli omzunda. 'Hazır mısın komutan?'" },
            { text: "Önce hazırlık yapmamız lazım.", effect: +20, next: "'Tabii. Ama en geç yarın gece. Yakıt beklemez. Ve Vera da beklemez.' Ciddi. 'Tarih yazalım ya da tarih olalım.'" }
          ]
        }
      ]
    },

    // GÜN 13 — İNTİKAM GÖLGESİ (ÇOK KARANLIK)
    shadow_vengence_d13: {
      name: "İntikam Gölgesi",
      role: "Gün-13 · Kaos Ajanı",
      image: "/faces/character_returned.png",
      low: [
        {
          text: "[ Yüzü tanıdık ama nereden biliyorsun hatırlayamıyorsun. ] Beni hatırlamıyorsun değil mi? Normal. Ben de seni hatırlamıyordum. Ama sis... sis hatırlatıyor.",
          choices: [
            { text: "Seni nereden tanıyorum?", effect: +10, next: "'Tanımıyorsun. Ama tanıyacaksın. Ben sığınağa gelen ilk kişiydim. İlk gün. Sonra çıktım — gece. Ve geri döndüm. Ama arada... değiştim.' Gülümsüyor. Soğuk bir gülümseme." },
            { text: "Neden çıktın ve geri döndün?", effect: +8, next: "'Çünkü bir işim vardı dışarıda. Ve o iş bitmedi. Şimdi içeride devam edecek.' Muğlak. Tehlikeli." },
            { text: "Seni izliyorum.", effect: -5, next: "'İzle. Ama benim de gözlerim var. Ve benim gözlerim... karanlıkta görüyor.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Ben dönüşmüş biriyim. Ama Vera'nın kontrolünde değil — ondan kaçtım. Ve intikam istiyorum. Vera benim ailemi aldı.",
          choices: [
            { text: "Ailen ne oldu?", effect: +18, next: "'Karım. Oğlum. İkisi de dönüştürüldü. Ve beni tanımıyorlar artık. Caddede yürüyorlar ama... içleri boş. Vera onları kullanıyor — beni çekmek için.' Sesi titremiyor. Çoktan donmuş." },
            { text: "İntikam planın ne?", effect: +15, next: "'Vera'ya yaklaşmak. İçeriden bilgi vermek gibi yapacağım. Ve doğru anda... vericiye ulaşacağım. Ama yalnız yapamam.' Sana bakıyor. 'Sen de istersin ki bitsin bu.' Haklı." },
            { text: "İntikam seni yanlış yere götürür.", effect: -10, next: "'Yanlış yer mi? Tek doğru yer bu. İntikam değil — adalet. Ve adalet acı verir.' Gözleri karanlıklaşıyor." }
          ]
        }
      ],
      high: [
        {
          text: "[ Son gece. İntikam Gölgesi hazır. ] 'Yarın gece gidiyorum. Vera'nın tesisine. İçeride kontağım var. Ve sana bir teklif: benimle gel. İkimiz birden girersek şansımız artar.'",
          isSpecial: true,
          choices: [
            { text: "Planın ne?", effect: +25, next: "'Pilot Sinan helikopterle yaklaştırır. Benim kontağım kapıyı açar. İçeri gireriz. Sen vericiye gidersin, ben Vera'yı oyalarım. Ve eğer başarırsak... sis durur.' Uzun bir duraklama. 'Başaramazsak da en azından denemiş oluruz.' Elini uzatıyor." },
            { text: "Bunu birlikte planlayalım.", effect: +20, next: "'Tamam. Ama bir şart var: beni durdurmaya çalışma. Vera ile karşılaştığımda... kendi hesabımı göreceğim. Engellemen en iyi ihtimal.' Sert. Kararlı. Ve biraz da çılgın." }
          ]
        }
      ]
    },

    // GÜN 13 — VERA'NIN KAŞİFİ
    scout_vera_d13: {
      name: "Kaşif Vera",
      role: "Gün-13 · Bölge İzcisi",
      image: "/faces/scout_vera.png",
      low: [
        {
          text: "Evet, adım Vera. Hayır, o Vera değilim. Tesadüf. Ya da... belki değil. Kim bilir artık bu dünyada neyin tesadüf olduğunu.",
          choices: [
            { text: "İsim tesadüfü... ilginç.", effect: +10, next: "'İlginçten öte, asker. İlk gün beni aldığınızda birinin yüzünü görmen lazımdı. İsim deyince herkes dondu. Ama ben sadece bir izciyim. Sektör sınırlarını haritalayan biri.'" },
            { text: "Sektör dışını ne kadar biliyorsun?", effect: +15, next: "'Her karışını. Dış sınırdan iki kilometre ötesine kadar haritaladım. Vera'nın — öteki Vera'nın — nerede konuşlandığını biliyorum. Ve oraya giden en güvenli yolu.'" },
            { text: "İsim önemli değil, ne yapabilirsin?", effect: +5, next: "'Harita çizebilirim. Güzergah planlayabilirim. Ve... gizlice hareket edebilirim. Yıllardır bunu yapıyorum.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sana bir şey itiraf edeceğim: Vera — öteki Vera — beni buldu geçen hafta. Teklif etti. 'Gel yanıma' dedi. İsmin bile aynı diye gülümsedi.",
          choices: [
            { text: "Ne cevap verdin?", effect: +20, next: "'Düşünüyorum dedim. Zaman kazanmak için. Ve o anda etrafı gördüm — tesisi. İçeri göz attım. İnsanlar var... tüplerde. Yeşil sıvıda. Uyuyorlar ama yüzleri... acı çekiyor.' Titriyor. 'Ve geri kaçtım. Buraya.'" },
            { text: "Vera'nın tesisinin konumunu biliyor musun?", effect: +22, next: "'Sadece bilmekle kalmadım — girişinin şifresini de biliyorum. Bana söyledi çünkü güveniyordu. Aptal.' Gülümsüyor ama gözleri gülmüyor. 'O şifre: 14-0-84. Tanıdık geldi mi?'" },
            { text: "Onlara güven veriyor olabilirsin.", effect: -8, next: "'Güven mi? Ben casusluğumu yapıyorum. Senin tarafında. Ama inandırmam zor, biliyorum.'" }
          ]
        }
      ],
      high: [
        {
          text: "Son haritayı çizdim. Vera'nın tesisine giden üç rota var. En güvenlisi tünelden. Ve o tünelin kapısının anahtarı... bende.",
          isSpecial: true,
          choices: [
            { text: "Haritayı ve anahtarı ver.", effect: +28, next: "'Al.' Haritayı açıyor. 'Kuzey tüneli: en uzun ama en güvenli. Güney geçişi: kısa ama Vera'nın devriye bölgesi. Üçüncüsü: yer altından direkt — ama orada... Gölge Yürüyücü'nün bölgesi. O izin verirse geçersin.' Anahtarı uzatıyor. 'Ve benim de gelmem lazım. Yolu sadece ben biliyorum.'" },
            { text: "Neden bu kadar yardım ediyorsun?", effect: +22, next: "'Çünkü adım Vera. Ve bu ismin iyi bir şeyle anılmasını istiyorum. Kötü olan o, iyi olan ben. Tarih böyle yazılsın.' Ciddi. 'Hazır mısın komutan? Son yolculuk başlıyor.'" }
          ]
        }
      ]
    },

    // GÜN 14 — ARAS (NİHAİ KARAR)
    aras_final_choice_d14: {
      name: "Araş — Son Seçim",
      role: "Gün-14 · Hakikat Taşıyıcısı",
      image: "/faces/d8_aras.png",
      low: [
        {
          text: "Geldik. Son güne. Karar anına. Artık kimin ne dediği önemli değil — sadece sen varsın.",
          choices: [
            { text: "Birlikte savaşacağız Aras.", effect: +15, next: "'Birlikte mi? Savaşmak mı?' Başını iki yana sallıyor. 'Savaş artık bitiyor asker. Ya nükleer mühürle Sektör-7'yi yakacağız, ya da Gümüş'e boyun eğeceğiz.'" },
            { text: "Nükleer mühürü patlatırsak ne olur?", effect: +10, next: "'Hepimiz ölürüz. Ve sis de bu sektörde bizimle birlikte yanar. En azından dünyada bir parça temiz alan bırakmış oluruz.' Yüzü taş gibi." },
            { text: "Teslim olmak tek seçenek mi?", effect: -5, next: "'Vera'nın beklediği seçenek o. Aç kapıyı, bizi Gümüş'ün kucağına at. Karar tamamen senin.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sis içeri sızıyor. Kapılar daha ne kadar dayanır bilmiyorum. Beni iyi dinle: Sektör-0 vericisi patlatılmazsa — formül durmaz.",
          choices: [
            { text: "Vericiyi kim yok edebilir?", effect: +22, next: "'Sen. Eğer helikopterle gideceksen Pilot Sinan'ı dinle. Ama ben gitmeyeceğim. Ben burada kalıp, sen başarısız olursan diye mühürü tetikte tutacağım.'" },
            { text: "Burada kalıp savaşmanın anlamı yok mu?", effect: +15, next: "'Savaş... Vera'nın ordusu karşısında mı?' Gülümsüyor, acı bir gülüş. 'Bizim savaşımız silahlarla değil, iradeyle kazanılır. Vericiyi yok et. Ya da hepimizi yak.'" },
            { text: "Vera bizi kandırıyor olabilir mi?", effect: +8, next: "'Vera kandırmaz. Vera programlar. Onu yok etmeden bu döngüyü kıramazsın.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Gözlerinin içine bakıyor. Siste kalmış umutların yüzü. ] 'Son sözünü söyle asker. Bizi karanlığa mı gömeceksin, yoksa kendi karanlığımızı mı yaratacağız?'",
          isSpecial: true,
          choices: [
            { text: "Sektörü havaya uçur. (Nükleer Fedakarlık)", effect: +30, next: "Elini omzuna koyuyor. 'İnsanlık için, asker. İnsanlık için...' (Kahramanlık Finali'ne giden yol)." },
            { text: "Kapıları açın. Teslim oluyoruz. (Gümüş Teslimiyet)", effect: -15, next: "'Anlıyorum... Savaşacak gücümüz kalmadı.' Silahını indiriyor. (Gümüş Final'e giden yol)." }
          ]
        }
      ]
    },

    // GÜN 14 — KRALİÇE VERA
    vera_queen_d14: {
      name: "Kraliçe Vera",
      role: "Gün-14 · Mist Mimarisi",
      image: "/faces/vera.png",
      low: [
        {
          text: "Geldin. Beklediğim gibi. Bana direnen tek kişi. Diğerleri ya formülü kabul etti, ya da acı içinde... adapte oldu.",
          choices: [
            { text: "Ben teslim olmaya gelmedim.", effect: +10, next: "'Bunu biliyorum. Direncin beni etkiliyor. Ama direniş anlamsız. Formül insanlığı bir sonraki seviyeye taşıyor. Neden savaşasın ki?'" },
            { text: "İnsanları dönüştürüp köle yapıyorsun.", effect: +15, next: "'Köle mi? Hayır. Ben onları acıdan, kargaşadan, savaştan kurtarıyorum. Tek bir zihin, tek bir amaç. Mükemmel barış.'" },
            { text: "Bunu bitireceğim Vera.", effect: +5, next: "'Denemeye devam et. Ama her adımında, bana daha da yaklaşıyorsun. Bekliyorum.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Benim adım Vera. Ama eskiden... bir projenin adıydım. Babam beni kurtaracağını düşünmüştü. Ancak ben, insanlığın tek kurtuluşu oldum.",
          choices: [
            { text: "Babana ne oldu?", effect: +20, next: "Gözlerinde soğuk bir ışık var. 'O ilklerden biriydi. Formülün potansiyelini anlamadı. Bana yaratıcı derdi, ama artık onu... içimde taşıyorum. Tıpkı herkesi taşıyacağım gibi.'" },
            { text: "Bu karanlıkta barış yok, sadece ölüm var.", effect: +18, next: "'Ölüm mü? Biyolojik ölüm sadece bir geçiştir. Verici zihinleri birbirine bağlar. Sen karanlık görüyorsun, biz ise mükemmel bir senfoni duyuyoruz.'" },
            { text: "Seni nasıl durduracağımızı biliyorum.", effect: +10, next: "'Vericiyi yok ederek mi? Bunu denemeniz beni endişelendirmiyor. Biyometrik kilit, kan... tüm algoritmaları kurdum. Kapılar size kapalı.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Gümüş gözleri sana kilitlenmiş. Sesi her yerden geliyor, sisin içinden, duvarlardan, kendi kafanın içinden. ] 'Benimle ol. Seni generalim yaparım. Bu sistemin kalbini paylaşırız.'",
          isSpecial: true,
          choices: [
            { text: "Bebek Umut'un kanı seni yok edecek. Biliyoruz.", effect: +30, next: "İlk kez yüzünde bir ifade bozukluğu. 'Kâhin... o sana anlattı. Aptal kör adam. O çocuğu bana ver! O benim kurtarıcım olmalı!' Yüzü seğiriyor, kontrolü kaybeder gibi. 'Kapıları kırın! Sektör-7 düşecek!'" },
            { text: "Asla sana boyun eğmeyeceğim.", effect: +25, next: "'Öyleyse... sizi izlediğim gibi yok olacaksınız.' Sesi artık dijitalleşiyor. 'Hücum başlatıldı. Sektör-7'yi düşürün. İradelerini kırın.'" }
          ]
        }
      ]
    }
  },

  en: {
    // ─────────────────────────────────────────────
    // DAY 1 — MINA (EN)
    // ─────────────────────────────────────────────
    mina_d1: {
      name: "Little Mina",
      role: "Day-1 · Child",
      image: "/faces/d1_mina.png",
      low: [
        {
          text: "Where is my mom now... I don't know. Do you know?",
          choices: [
            { text: "There must be something we can do to find her.", effect: +12, next: "A spark lights in her eyes. 'Really?' she whispers, but there's a desperate need to believe in her voice." },
            { text: "For now, you're safe. Focus on that.", effect: +5, next: "She nods slowly. 'Okay...' but her eyes keep drifting to the door." },
            { text: "Don't ask so many questions, everyone here is struggling.", effect: -15, next: "Small hands clasp together. She silently turns and retreats to her corner." }
          ]
        }
      ],
      medium: [
        {
          text: "Hey... sometimes there are strange sounds in the shelter. From behind the wall. The same sound over and over. It just says 'Open.'",
          choices: [
            { text: "Which wall? Can you show me?", effect: +18, next: "'That old iron door over there. I count them every night. This month I heard it sixteen times.' She holds out her fingers." },
            { text: "Maybe it's just the wind, sounds get bigger at night.", effect: +3, next: "'Wind doesn't say open.' She stares at you with a very serious face." },
            { text: "Don't worry, we have it under control.", effect: -5, next: "She shrugs. 'Okay... but I'd still like to know.'" }
          ]
        }
      ],
      high: [
        {
          text: "Hey... I'm going to show you something but don't tell the grown-ups. They'll take it.",
          isSpecial: true,
          choices: [
            { text: "Only I'll look, I promise.", effect: +25, next: "She pulls a small, broken badge from her pocket. 'SECTOR-0' is written on it. 'I found it at the base of the wall. It's not new, it's very old. What does it say?' she asks." },
            { text: "I trust you, Mina.", effect: +18, next: "She looks around first. Then a worn piece of paper emerges from her pocket." }
          ]
        }
      ]
    },

    miner_d1: {
      name: "Old Miner",
      role: "Day-1 · Veteran Worker",
      image: "/faces/d1_miner.png",
      low: [
        {
          text: "Forty years I looked at this earth from below. Now I look from above. There's no difference, soldier — underground was just as dark as it is now.",
          choices: [
            { text: "What did you see underground?", effect: +12, next: "He spreads his hands on the table. 'There were tunnels under Sector-0. Ones nobody knew about. They told us to 'look for coal.' We didn't know what we were really looking for.'" , followUp: { text: "The old man looks around and lowers his voice: 'But between the rocks, we found something blacker than coal, pulsing like a vein. Those who touched it started changing...'", choices: [{text: "Changed how? Physically?", effect: +10, next: "'First the cough, then blurred vision. In the end... they stopped recognizing us. I had to leave them behind.'"}, {text: "Did you report this to the authorities?", effect: -5, next: "He smiles bitterly. 'Authorities? They were the ones who ordered those tunnels dug, soldier...'"}] } },
            { text: "You're safe here, rest a little.", effect: +5, next: "'Safe?' He just laughed. But not in a good way." },
            { text: "Right now what matters is survival, not coal.", effect: -8, next: "'You'll learn with patience. Everything ends up burning like coal anyway.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I was there when Sector-0 collapsed. Thirty years ago. There were chemicals inside, soldier. They called it 'ground gas.' But it had no color. Watch out for things without color.",
          choices: [
            { text: "Could that chemical be related to the Mist?", effect: +20, next: "'You figured it out fast. I thought about it for twenty years.' His voice rises. 'Same smell. Same numbness. But the state won't admit it. Never has.'" },
            { text: "Could the government have covered it up?", effect: +15, next: "'Not a cover-up — planned. Listen: a black liquid was transferred from Sector-0 tunnels. After the operation, my friends got sick. I survived because I stole an oxygen mask.'" },
            { text: "Memory isn't always reliable.", effect: -10, next: "'Memory? I still have the burn marks from that chemical on my hands. Look.' He stretches them out. The deep marks are real." }
          ]
        }
      ],
      high: [
        {
          text: "If you're listening, I'll tell you something. You'll think the old man is rambling, but I'm not saying this out of boredom — I knew Vera's father.",
          isSpecial: true,
          choices: [
            { text: "You knew Vera's father? Tell me.", effect: +28, next: "'He was an engineer. On the Sector-0 project. He ran something called the White Mist program. One day he disappeared. Vera was just a tiny child then. The program stopped but the data didn't — it was transferred. To whom? I don't know. But now that mist is outside. And inside, something is still continuing.'" },
            { text: "What was the White Mist program?", effect: +20, next: "'It had no official name. But we workers called it Project Zero. Human body... transformation experiments. I've never spoken about this while alive.'" }
          ]
        }
      ]
    },

    silent_woman_d2: {
      name: "Silent Woman",
      role: "Day-2 · Unknown Identity",
      image: "/faces/d2_silent_woman.png",
      low: [
        {
          text: "[ She pretends not to hear you. Then she slides a scrap of paper toward you. A single word written on it: 'RUN.' ]",
          choices: [
            { text: "Run from what? Who's coming?", effect: +15, next: "[ She doesn't answer. But her eyes move to the door, then the ceiling. Something up there — she's implying it. ]" },
            { text: "You can speak. You're safe here.", effect: +10, next: "[ She pinches her lips. Points to her throat. Can't speak — or refuses to. ]" },
            { text: "I can't understand you.", effect: -5, next: "[ She takes the paper back, throws it away. Silently turns her back. ]" }
          ]
        }
      ],
      medium: [
        {
          text: "[ This time the note is longer: 'They are inside. They switch at night. They look innocent but they carry the scent of the Mist.' ]",
          choices: [
            { text: "Who is she talking about? Give a name.", effect: +20, next: "[ She hesitates. Then writes three names. Two feel familiar — shelter staff. The third... is yours. ]" },
            { text: "How can you detect the Mist scent?", effect: +15, next: "[ She writes 'Eyes.' Then: 'Look at the small veins. They turn grey. In the early stage.' ]" },
            { text: "Paranoia is common in epidemic situations.", effect: -12, next: "[ She pulls up her sleeve. Faint grey veins visible inside her elbow. She stares at you hard. ]" }
          ]
        }
      ],
      high: [
        {
          text: "[ No voice, but a different note this time: 'I am ORACLE's sister. I need to speak before he finds me.' Shaky but clear handwriting. ]",
          isSpecial: true,
          choices: [
            { text: "Do you know ORACLE?", effect: +30, next: "[ She nods. Writes: 'He chose the loss. He bound his own eyes so he wouldn't see the Mist — with his own hands. But I saw. I saw what they did in Vera's laboratory. And they silenced me to stop me talking.' She points to her throat again. A surgical scar is visible. ]" },
            { text: "This is very valuable. I'll protect you.", effect: +22, next: "[ She stares for a long time. Then writes coordinates. 'Sector-0. Lower tunnel. Evidence is there.' ]" }
          ]
        }
      ]
    },

    dog_man_d2: {
      name: "Dog Man",
      role: "Day-2 · Street Sentinel",
      image: "/faces/d2_dog_man.png",
      low: [
        {
          text: "Aga's Karabash, Terhan's Sarı, and Crazy Hüseyin's Boz — all three disappeared a week before the Mist came, soldier. Animals know. Animals know before people do.",
          choices: [
            { text: "Animals have sharper awareness than us.", effect: +12, next: "'Exactly! You soldiers understand. Karabash ran east. The Mist came from the east. See how it overlaps.'" },
            { text: "That could be a coincidence.", effect: +3, next: "'A coincidence? Sarı had been in that neighborhood for ten years. Wouldn't budge. Left a week before. That's not a coincidence.'" },
            { text: "I don't have time for dogs right now.", effect: -15, next: "Silence. Then quietly: 'Those who don't care go first.' he mutters." }
          ]
        }
      ],
      medium: [
        {
          text: "Remember the dogs? I tracked them. East, then down — they were entering a tunnel network under the ground. The dogs knew. This is an escape route.",
          choices: [
            { text: "Do you know the tunnel entrance?", effect: +22, next: "'I do. But it's not easy. Under the last post at the sector boundary. But that place... other things use it at night too.' He swallows." },
            { text: "Are those tunnels safe?", effect: +15, next: "'Not for amateurs. But dogs passed, I passed. Humans can pass too.' He pauses. 'Humans who go and come back can pass.'" },
            { text: "I'll report the tunnel information.", effect: -5, next: "'Don't report it. Have you seen what happened to those who knew? They vanish.' His voice drops." }
          ]
        }
      ],
      high: [
        {
          text: "There's something I have to tell you. I saw Vera's people in that tunnel. Many times. They go down at night, come up in the morning. And each time they carry something with them — big, long bottles.",
          isSpecial: true,
          choices: [
            { text: "What was in the bottles?", effect: +28, next: "'White liquid. But sometimes it glowed. No, it wasn't a ghost. It was real. And that liquid touched the ground once when a bottle broke. That ground turned grey weeks later. The Mist penetrates soil too.'" },
            { text: "Show me how to get into that tunnel.", effect: +20, next: "'There's collapsed concrete north of the first post. Empty space underneath. But be ready — there are sounds inside. Not like a human voice.'" }
          ]
        }
      ]
    },

    night_vision_d3: {
      name: "Night Crawler",
      role: "Day-3 · Dark Explorer",
      image: "/faces/d3_night_vision.png",
      low: [
        {
          text: "I work nights. I map the sector boundary every night. Did you know? Nobody asked but I know where everything is.",
          choices: [
            { text: "What's outside the sector?", effect: +15, next: "'Lots. Vera's convoys. Surveillance points. And... things that aren't alive but move. I'll tell you over time.'" },
            { text: "This information is strategically valuable.", effect: +10, next: "'I know. That's why you're here talking to me.' A brief grin." },
            { text: "Going out at night is dangerous.", effect: -8, next: "'Not dangerous if you know how. Dangerous for those who don't.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I counted Vera's outer patrols. Every night at exactly 03:00 they rotate. 3 minute gap. North of the sector. This means something.",
          choices: [
            { text: "Is that 3 minutes enough to escape?", effect: +20, next: "'Not escape — enough to enter. Someone is regularly taking things outside. From the shelter. And I've seen it.' His voice drops." },
            { text: "Are you saying there's a spy inside?", effect: +18, next: "'Not a spy... someone coordinating. They know Vera's patrol gaps. This isn't coincidence. Someone is feeding her information.'" },
            { text: "I'll investigate this possibility.", effect: +8, next: "'Investigate. But be careful. This person might be watching you too.'" }
          ]
        }
      ],
      high: [
        {
          text: "Let me show you something. I caught this last night. At the outer sector boundary. This isn't Vera's ship — something else. Very large, cigar-shaped, and silent.",
          isSpecial: true,
          choices: [
            { text: "When and where?", effect: +28, next: "'North fence, midnight. No sound, no light. But where it touched the ground, the Mist concentrates. An hour later three people came out — formal, they had uniforms, but not Vera's. A different organization.' His eyes narrow. 'A state within a state.'" },
            { text: "Give me the coordinates, let's log it.", effect: +22, next: "'Already written. Here.' He hands over a piece of paper. 'But if this gets into the wrong hands, we're both finished.'" }
          ]
        }
      ]
    },

    healer_d4: {
      name: "Healer",
      role: "Day-4 · Mender",
      image: "/faces/d4_healer.png",
      low: [
        {
          text: "I dressed wounds today. Eight people. Half were standard wounds. But the other half... a different feeling. The tissue color isn't returning to normal. It stays grey.",
          choices: [
            { text: "Could grey tissue be a symptom of Mist exposure?", effect: +15, next: "'I don't fully know. But it's not natural. I give medicine, it doesn't heal. I tried herbal treatments, still nothing. Like the body has given up fighting.'" },
            { text: "Does Doctor Arzu know about this?", effect: +10, next: "'Arzu has her own section to deal with. But yes, when she saw it she was surprised too. We took notes together.'" },
            { text: "Can I access the health status reports in the shelter?", effect: +8, next: "'I can give them to you. But some records have gaps — a portion is still encrypted.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Look, and this stays between us: I've been tracking wounds for three weeks. Normal wounds close. But these, after closing, leave a grey line. On top. Like something is growing from inside.",
          choices: [
            { text: "Is this growth an infection process?", effect: +20, next: "'Not an infection. Infection causes fever, inflammation. This is silent. And systematic. It always follows the veins. Progresses along the vein path.' She pauses. 'Like it's programmed.'" },
            { text: "How many people have you seen this in?", effect: +18, next: "'Six. So far. But two are no longer here — they had to leave. There was a control group remaining, I couldn't follow them.'" },
            { text: "Are you thinking of recording this?", effect: +5, next: "'I was. But whose hands is the record system in? I can't be sure.'" }
          ]
        }
      ],
      high: [
        {
          text: "Someone brought me something. Not medicine. Liquid in a bottle. Inside there are tiny particles — nearly invisible. They said 'Mist immunity.' 'Made in the facility.' A nameless person brought it.",
          isSpecial: true,
          choices: [
            { text: "Did you use it on anyone?", effect: +25, next: "'No! I can't use it without identifying it. But I analyzed it. Those particles... they're alive. Like tiny mechanisms. Not biological, artificial. Who can produce these?' Her eyes light with fear. 'And why did that man bring it to me?'" },
            { text: "Can you describe that man?", effect: +20, next: "'No face. Masked. But his voice... not young. And he said 'Pass it to Araş.' Just that.'" }
          ]
        }
      ]
    },

    teacher_d4: {
      name: "Teacher",
      role: "Day-4 · Former Educator",
      image: "/faces/d4_teacher.png",
      low: [
        {
          text: "I was giving lessons to children here. Then someone said 'it might be dangerous.' What school subject — history, geography, science — could possibly be dangerous?",
          choices: [
            { text: "Which subjects were deemed dangerous?", effect: +15, next: "'The pre-Mist era. The history of Sector-0. Project records. I had put these in the curriculum. Next day they called me in.' She laughs bitterly." },
            { text: "You can continue the children's education.", effect: +10, next: "'I'm continuing actually. But now only poetry and math. I'm keeping history to myself.'" },
            { text: "Here the priority is survival not education.", effect: -10, next: "'Those who don't know their history repeat the same mistakes. That's also about survival.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I gathered documents about Sector-0 history for years. Over ten years. From state archives, from the field, from witnesses. Then all of it 'disappeared.' But I know it by heart.",
          choices: [
            { text: "Tell us what you learned.", effect: +22, next: "'Project Silver started in 1987. Official name: Environmental Adaptation Program. Real purpose: Binding people to the region. Underground. But something went wrong — there was Mist then too. Small scale. Hidden.' She swallows. 'Now large scale.'" },
            { text: "What does the government know about this?", effect: +18, next: "'I can't say the government did this. But a unit within the government did. Project Zero. And this unit is still active.'" },
            { text: "How reliable is the accuracy of this information?", effect: +5, next: "'I saw the documents. Photographed them. Those disappeared too. But my mind hasn't disappeared.' She stares hard." }
          ]
        }
      ],
      high: [
        {
          text: "I want to give you something. I had hidden it inside a book when I fled. These are handwritten notes of the original Project Silver documents. The originals weren't available but I had read them — word for word.",
          isSpecial: true,
          choices: [
            { text: "These notes are very valuable. They'll be preserved.", effect: +28, next: "'There's something inside that will catch your attention: The Sector-0 experiments were in two phases. First phase failed — participants... disappeared. Second phase is currently ongoing. The Mist outside is a byproduct of the second phase. And the goal: not mass mutation, but selective transformation. They transform the selected ones and reinsert them.'" },
            { text: "Who are the selected ones?", effect: +20, next: "'I don't know. But those inside don't know it. It happens slowly, imperceptibly.'" }
          ]
        }
      ]
    },

    priest_d4: {
      name: "Priest",
      role: "Day-4 · Suspect Faith",
      image: "/faces/d4_priest.png",
      low: [
        {
          text: "I see you, soldier. You decide who can enter at the door and who can't. A fine duty. But have you ever thought about who's watching you?",
          choices: [
            { text: "Did you come here in a religious context?", effect: +5, next: "'Every place is both temple and marketplace. I am merely the observer. And what I observe... is interesting.' He smiles but his eyes don't." },
            { text: "Who is watching us?", effect: -5, next: "'I don't want to answer yet. But the question is right.' He bows his head." },
            { text: "You're safe here, don't worry.", effect: +3, next: "'The illusion of safety is dangerous.' He straightens his robe." }
          ]
        }
      ],
      medium: [
        {
          text: "Do you wonder why I'm here? While everywhere was closed I knocked on your door. Because inside... there is something. Not protecting you — watching you.",
          choices: [
            { text: "What exactly do you mean?", effect: +10, next: "'Walls talk sometimes. At night, breathing sounds come from places. There is an entity inside the shelter, soldier. But this entity arrived before you.' His voice is low and calm — which makes it more unsettling." },
            { text: "Is this a religious statement or a real warning?", effect: +8, next: "'Both. So far 7 people said I woke up. They're all having the same dream. Corridor number: 14. Inside is a woman in white. She doesn't speak. Just watches.'" },
            { text: "Paranoia can be a symptom of the epidemic.", effect: -15, next: "'Paranoia?' Calm but icy. 'Did 7 people all have paranoia at the same time?'" }
          ]
        }
      ],
      high: [
        {
          text: "[ The Priest summoned you this time. Alone, late at night. He closed the door, his voice extremely low: ] 'I spoke with Vera. She made contact with me. And she sent me here to warn you.'",
          isSpecial: true,
          choices: [
            { text: "Is this a provocation or is it real?", effect: +15, next: "'Neither. I was used as a tool. Vera wants information — the shelter's defence capacity, number of people, critical personnel. I didn't give it. But she implied she might already know. Someone else may have given it.' The last sentence lands coldly." },
            { text: "What is Vera's message?", effect: +8, next: "'After fourteen days the door will open. Those who resist will be harmed. Those who surrender... transformation. She used that word. Transformation. Ask yourself what it means.'" }
          ]
        }
      ]
    },

    chased_man_d5: {
      name: "Chased Man",
      role: "Day-5 · Pursued",
      image: "/faces/d5_chased_man.png",
      low: [
        {
          text: "Let me just sit here. I don't want you to see me. I don't want you to see me because those chasing me will find you too.",
          choices: [
            { text: "Who is chasing you?", effect: +12, next: "'I won't say names. But a very organized group. No uniforms but coordinated. I've seen them in four different spots around the city. Inside the walls.'" },
            { text: "This is safe, they can't get in.", effect: +5, next: "'Can't get in?' A bitter smile. 'Can you trust the people already inside?'" },
            { text: "What did you do that makes them chase you?", effect: +8, next: "A long silence. 'I saw something. I wasn't supposed to see it.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I have things I can tell you but if I do we'll both be in danger. Are you ready for that kind of information?",
          choices: [
            { text: "Yes. Tell me.", effect: +20, next: "'I worked at Vera's headquarters. Cleaning staff. But you see things when you clean. There's a laboratory — on the lower floor. People go in, come out differently. Their eyes are the same but their insides aren't.'" },
            { text: "Do you have proof?", effect: +15, next: "'Yes. Not a photograph but coordinates. The exact location of the entrance. And someone is waiting at that entrance every night — from the inside.' He trembles." },
            { text: "Why are you telling me this?", effect: +8, next: "'Because I need to tell someone before I disappear. And you... look reasonable.' He's not very sure about that." }
          ]
        }
      ],
      high: [
        {
          text: "[ He pulls you close. Points to something with his fingertip. ] You know how many agents there are in this shelter? More than two. You already know one — but you don't know the other. And that other one sits at the same table as you every morning.",
          isSpecial: true,
          choices: [
            { text: "Who is it?", effect: +25, next: "'If I say, I'll be gone tomorrow. But let me say this: That person talks to you the most. And after every conversation, Vera's patrol routes change. Be careful what you share.' His eyes drift to the door." },
            { text: "Prove it.", effect: +15, next: "'I won't give proof. But from now on, watch the screen for a week. Patrol times and your meeting times will overlap. See it with your own eyes.'" }
          ]
        }
      ]
    },

    twins_d5: {
      name: "The Twins",
      role: "Day-5 · One Mind Two Bodies",
      image: "/faces/d5_twins.png",
      low: [
        {
          text: "[ One starts, the other finishes: ] 'We came here because you opened the door...' '...you opened the door but you couldn't see us.'",
          choices: [
            { text: "What do you mean, I couldn't see you?", effect: +10, next: "'In the city— ' '—watched you for three days. Tracked you. You didn't see it.' They look at you simultaneously. Unsettling." },
            { text: "Do you always talk like this as twins?", effect: +5, next: "'Not always— ' '—only for important things.' Their voices flow like one continuous stream." },
            { text: "This looks like a game.", effect: -12, next: "'Not a game— ' '—we have never been this serious.' And they both fix their gaze on you at the same moment." }
          ]
        }
      ],
      medium: [
        {
          text: "'We have the same dream— ' '—every night, at the same time.' 'A white room— ' '—with a man inside. He's looking at us but he has no face.' 'And he whispers— ' '—numbers.'",
          choices: [
            { text: "What numbers?", effect: +20, next: "'Always the same sequence: ' '14 — 0 — 84.' 'We don't know what zero means— ' '—but we know 14 days. And 84 is our registration number.' They pause. 'We don't know where the registration number comes from.'" },
            { text: "Have you heard these numbers before?", effect: +15, next: "'Once— ' '—it was written on the Sector-0 door. On a small plaque. We took a photo.' 'The photos are gone— ' '—but we saw it.'" },
            { text: "Dreams can stem from fear.", effect: -8, next: "'A fear dream— ' '—can't do this simultaneously.' 'We woke at the same time— ' '—said the same words.' An eerie silence." }
          ]
        }
      ],
      high: [
        {
          text: "'We'll tell you something— ' '—but you won't want to believe it.' 'We are not experiments— ' '—but they did experiment on us.' 'Our mother voluntarily entered a program— ' '—to give birth to twins.' 'Project name: Twinning Protocol.' '—Sector-0.'",
          isSpecial: true,
          choices: [
            { text: "What do you know about this program?", effect: +28, next: "'Mother saved her documents— ' '—when we were young. We have them now.' 'Program's goal: two bodies, shared consciousness.' '—The experiment was deemed a failure. We were released.' 'Because watching us gave better information—' '—than keeping us.' They stop simultaneously. The longest thing they've ever said." },
            { text: "Are the documents still with you?", effect: +20, next: "'Yes— ' '—and we won't give them.' 'But you can read them if you want.' '—You come here, you read, you go.' 'You can't take them out— ' '—they stay here.'" }
          ]
        }
      ]
    },

    gang_leader_d6: {
      name: "Gang Leader",
      role: "Day-6 · Dangerous Advantage",
      image: "/faces/d6_gang_member.png",
      low: [
        {
          text: "You let me in. This isn't courtesy, it's not a debt. It's... interesting. Most don't let me in. Are you curious why?",
          choices: [
            { text: "Why shouldn't they have let you in?", effect: +10, next: "'Because they know. I was controlling things in this sector. Still am. Inside the wall and out.' He grins." },
            { text: "Everyone's equal here, the past doesn't matter.", effect: -5, next: "'Equality... a childish word. But carry on, soldier, carry on.'" },
            { text: "You were let in because you'll be useful inside.", effect: +5, next: "'Honesty. Good.' He nods, but his eyes are still evaluating." }
          ]
        }
      ],
      medium: [
        {
          text: "Let me tell you something. Two months before the Mist came I was warned. From an anonymous source. 'Move out.' I didn't move. But I know who warned me.",
          choices: [
            { text: "Who warned you?", effect: +20, next: "'A woman. Official uniform. But not Vera's person — someone's agent, whose I don't know. She told me 'project zero is active.' Nothing else.'" },
            { text: "Why did you keep this to yourself until now?", effect: +12, next: "'Because I couldn't trust anyone. Now it seems there might be someone I can trust. Maybe.' His gaze measures." },
            { text: "This is a military operation, no political agenda.", effect: -10, next: "'Soldier talk. They say no political agenda, up to their necks in politics.' He laughs." }
          ]
        }
      ],
      high: [
        {
          text: "I'm ready to make a deal with you. I'll give you the map of Vera's old supply network. You give me a small autonomy here, outside of what the owners say.",
          isSpecial: true,
          choices: [
            { text: "Show me the map first.", effect: +22, next: "'Right approach.' He pulls a folded paper from his pocket. 'North warehouse, underground passage, and — note this especially — the Sector-0 connection point. That's where Vera enters. Every time. Regular.'" },
            { text: "We can make a deal. What's the basis of trust?", effect: +15, next: "'I keep my word. In this city that's my only value.' He extends his hand. 'Deal?'" }
          ]
        }
      ]
    },

    hunter_resat_d7: {
      name: "Hunter Reşat",
      role: "Day-7 · Veteran Hunter",
      image: "/faces/d7_old_hunter.png",
      low: [
        {
          text: "I hunted in the forest for forty years. When I saw this Mist I watched how the animals behaved. They don't run. They wait. That's a very bad sign.",
          choices: [
            { text: "Why aren't the animals running?", effect: +12, next: "'Because they've seen this before. It's in their subconscious. Or... the Mist changed them too. The second possibility is scarier.'" },
            { text: "Do you know the external map of the sector?", effect: +15, next: "'Every inch of it. Walked that ground for forty years. Ask if you want to know where exits are.'" },
            { text: "This interpretation is too intuitive, we need data.", effect: -5, next: "'Data? You don't have a machine that can read my data. But I have eyes. And I don't need to prove what I see.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I know Vera, soldier. I mean... I knew her once. I knew her father. He was a good man — an engineer. He worked on Project Zero. Then he disappeared. Vera was just a little child then.",
          choices: [
            { text: "What do you know about Vera's father?", effect: +22, next: "'He was a true believer. Something about 'improving humanity' in his head. Started with good intentions. What happened after... I don't know. He disappeared. And Vera grew up. But she seems to want to finish her father's project.' He pauses. 'In a very different way.'" },
            { text: "Where is Vera currently based?", effect: +18, next: "'Southeast. Old livestock farm. A large structure. I don't go near there anymore. Even the animals don't.'" },
            { text: "Why wasn't this information reported earlier?", effect: +5, next: "'I'm a hunter. I don't know how to write reports. But I found someone who does now.'" }
          ]
        }
      ],
      high: [
        {
          text: "Let me tell you about a place. Nobody knows. I went in — once. I came back alive because I know the traps. East from the sector boundary, then a forest. A structure in the middle. It continues below.",
          isSpecial: true,
          choices: [
            { text: "What did you see inside?", effect: +28, next: "'Lights. Green, low lights. And sounds — not animal sounds, but not human either. Something in between. And the walls... not like glass, something alive covering the walls. It was moving.' He swallows. 'I got out in two hours. A day of my memory is gone.'" },
            { text: "How did you get in?", effect: +20, next: "'Through the rotten fence to the north. No security there — because they know animals won't go there. Animals don't go. But I went.'" }
          ]
        }
      ]
    },

    aras_d8_hero: {
      name: "Araş",
      role: "Day-8 · Truth Seeker",
      image: "/faces/d8_aras.png",
      low: [
        {
          text: "I shouldn't be here. I mean, I'm glad to be here — but my presence could be dangerous. I've been followed for a while.",
          choices: [
            { text: "Who is following you?", effect: +15, next: "'Not an official force. Or a force that looks official but isn't. My questions about Sector-0 have brought me here. The answers make me dangerous.' He pauses. 'But finding the answers is even more dangerous.'" },
            { text: "Why are you investigating Sector-0?", effect: +20, next: "'Because my brother died there. Official record: work accident. But you find a body in work accidents. My brother's remains were never delivered.'" },
            { text: "You're safe here, continue researching.", effect: +10, next: "'Safe... Maybe. But if I'm here, the danger is here too.' He warns but doesn't refuse and leave." }
          ]
        }
      ],
      medium: [
        {
          text: "I found the Sector-0 file. Not complete but enough. Inside are three things: a project name, a date, and a financier name. Can you guess the financier?",
          choices: [
            { text: "Tell me, let's not guess.", effect: +22, next: "'Not the state. State budget passed through but they're not the decision maker. A private fund. Name: Silver Fund Foundation. This foundation has two directors — one is dead, the other... I don't know. But Vera is this foundation's daughter.' He holds your gaze." },
            { text: "Has this connection been verified?", effect: +18, next: "'From three different sources. One was a state archive leak. Its life was short but I copied it.' He pulls a memory card from his pocket. 'It was here.'" },
            { text: "How can we use this information?", effect: +12, next: "'If we understand Vera's motivation, we're one step ahead. She wants to finish her father's work. But what was the 'work'? That's the real question.'" }
          ]
        }
      ],
      high: [
        {
          text: "There's something I have to tell you. About Project Zero. And about Vera. If you learn this there's no going back — or maybe the opposite, you'll find meaning.",
          isSpecial: true,
          choices: [
            { text: "Tell me. Everything.", effect: +30, next: "'Vera's father conducted experiments on humans — voluntary. The Mist is connected to a drug. The drug's name: Silver. To make humans resistant to the Mist. But the side effect... the opposite. Those who took the drug transformed into Mist. And Vera knows this. Because she took that drug — as a tiny child. And she didn't transform. This made her both powerful and... obsessed.' He takes a breath. 'She's looking for others like herself.'" },
            { text: "How do we verify this?", effect: +22, next: "'Analyze the liquid the healer received. If Silver components are found — Vera has infiltrated. And someone brought that liquid.'" }
          ]
        }
      ]
    },

    cultist_kaan_d8: {
      name: "Kaan",
      role: "Day-8 · Cult Member",
      image: "/faces/d8_cultist.png",
      low: [
        {
          text: "You're here because you opened the door. I'm here because the door opened. Is there a difference? Maybe. Maybe we're both just instruments.",
          choices: [
            { text: "Which cult do you belong to?", effect: +5, next: "'Cult... a word. We call ourselves a belief group. The Mist reveals truth. We interpret it.' His gaze drifts off your face." },
            { text: "I can't allow religious activities here.", effect: -10, next: "'You actually can't even allow existence. But you did.' A calm sentence. Very calm." },
            { text: "I could have kept you in custody but I didn't.", effect: +8, next: "'I know. And this isn't a gesture — it's a debt. When the time comes you'll pay it or collect it.' He watches you expectantly." }
          ]
        }
      ],
      medium: [
        {
          text: "The Mist is selecting. Do you understand that? It's not taking everyone. It's selecting. And the selected ones share a characteristic.",
          choices: [
            { text: "What characteristic?", effect: +15, next: "'Curiosity.' He stops. 'The questioning. The researching. Those who challenge the existing order. The Mist takes them — but doesn't kill them.' His eyes darken. 'It transforms them.'" },
            { text: "This is nothing but belief.", effect: -5, next: "'Belief? I witnessed twenty-three transformations with my own eyes. These aren't hallucinations. I even photographed some. I'll give you one you name.'" },
            { text: "Did you come here to share this with us?", effect: +12, next: "'No. I came to survive. But if I'm here I'll pay something. That's my nature.' He shrugs." }
          ]
        }
      ],
      high: [
        {
          text: "[ Kaan is different this time. No ritual voice, no religious implications. Just a flat, icy voice: ] 'I was around Vera for a while. Not voluntarily. Not by force. Out of curiosity. And I came back.'",
          isSpecial: true,
          choices: [
            { text: "What is Vera doing there?", effect: +25, next: "'She's transforming people and releasing them back. They look completely normal. But their insides... are different. They show leader behavior. They follow each other — coordinated. And they receive commands. From there.' He points upward. Nowhere specific, just up. 'I don't know where it comes from. But they hear it.'" },
            { text: "What is Vera's plan?", effect: +18, next: "'There's a fourteen-day cycle. Each cycle one sector. This sector is cycle fourteen.' He pauses. 'The number. That number everywhere.'" }
          ]
        }
      ]
    },

    mutant_kaya_d9: {
      name: "Kaya",
      role: "Day-9 · Mutant Entity",
      image: "/faces/deney_04.png",
      low: [
        {
          text: "... Look at me. Eyes are fine. Hands... slightly different. But I'm still me. Kaya Yılmaz. Born 1984. Sector-3 resident. You can talk to this.",
          choices: [
            { text: "I see you. Kaya, let's talk.", effect: +18, next: "'Thank you.' He softens for the first time. 'Most run. Or raise weapons. You're talking. That's... good.'" },
            { text: "What did you feel at the start of your change?", effect: +12, next: "'First pain. The veins. Then... clarity. Way too much clarity. I see everything very clearly now. Sounds. Colors. And the Mist — the Mist seems to be saying something to me.'" },
            { text: "If you pose a threat I'll have to intervene.", effect: -10, next: "'You're not wrong.' He bows his head. 'I try not to be dangerous. Every day.'" }
          ]
        }
      ],
      medium: [
        {
          text: "The Mist told me something. I can hear it. Not words... feeling. Direction. And right now that direction is pointing at you. You should be worried.",
          choices: [
            { text: "What does the Mist say about us?", effect: +20, next: "'Someone inside you... is talking to the Mist. The channel is open. Two-way. I can't close the channel — but it exists. One person. Someone among you is connecting to Vera.' He trembles. 'And the fact that I'm saying this worries me too.'" },
            { text: "How much can we trust this intuition?", effect: +15, next: "'I've been wrong zero times in six. There was the same feeling in Sector-3 — two days later the gates opened. Vera came.' His eyes freeze. 'I warned. Nobody listened.'" },
            { text: "What do you do to keep this under control?", effect: +8, next: "'I try to silence the voice. But I can't silence it. I just... filter. Which is important, which is noise. That exhausts me too.'" }
          ]
        }
      ],
      high: [
        {
          text: "I'm going to confess something. Vera... knows me. Personally. I was part of one of her experiments. And that's why I wanted to be here, not there — on your side.",
          isSpecial: true,
          choices: [
            { text: "What was Vera's experiment?", effect: +28, next: "'Resistance testing to the Silver formula. I was one of those who resisted — but not completely. Half-transformed. This made me both valuable and dangerous to her. I escaped. And I'm waiting for her here.' His voice cracks. 'Because she will come. And I want to be ready — with you.'" },
            { text: "How will you fight Vera?", effect: +22, next: "'I love her. That's why I'll know better how to stand against her.' A long silence. 'Sometimes the best way to fight is to understand.'" }
          ]
        }
      ]
    },

    laughing_man_d9: {
      name: "Laughing Man",
      role: "Day-9 · Unknown Danger",
      image: "/faces/laughing_man.png",
      low: [
        {
          text: "Hahaha... I made it through the door. Hahaha. You let me through. Hahaha. Do you know how funny this is? I never could have gotten through actually. But you let me.",
          choices: [
            { text: "Why couldn't you normally get through?", effect: +5, next: "'Because you don't know what I am. Hahaha. And not knowing, you still let me through. That's either courage or stupidity. Hahaha.' He stops. 'Sometimes they're the same thing.'" },
            { text: "If you want to stay here, follow the rules.", effect: -5, next: "'Rules! Hahaha. Am I here because I followed rules? Hahaha. No. Hahaha.'" },
            { text: "Are you threatening us?", effect: -8, next: "The laughter stops. For a moment. Then in a slower voice than usual: 'No. Warning.' Then he starts laughing again." }
          ]
        }
      ],
      medium: [
        {
          text: "I know everything but I don't say it. Hahaha. You know why I don't say it? Because if I do you won't believe it. Hahaha. And if you believe it, it'll be too late. Hahaha.",
          choices: [
            { text: "Say it. Whether I believe it or not is up to me.", effect: +20, next: "The laughing slowly dies. A very rare thing. 'In the shelter there are seven people. Seven people breathe differently when they sleep. Different rhythm. You can tell from the sound. I counted. Seven.' Then it starts again: 'Hahaha.' But this time less amusing." },
            { text: "How do you know everything?", effect: +15, next: "'I listened a lot. My whole life. People think someone laughing doesn't hear them. Hahaha. But I heard everything. Everything.' He studies you. 'About you too.'" },
            { text: "This attitude isn't helping.", effect: -8, next: "'I don't want to help. Hahaha. I want to survive. Hahaha. There's a difference.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ His laugh has completely stopped. First time. His voice deep and calm. ] 'I need to talk to you properly. No hahaha. Just the truth. Are you ready?'",
          isSpecial: true,
          choices: [
            { text: "I'm ready. Speak.", effect: +28, next: "'I am one of Vera's previous test subjects. But I escaped. The laughing... side effect. Nerve damage. I can't control it most of the time. But my mind works. And I know: when fourteen days are up Vera will open the gates. Not just armed — with inside help. That help is here right now. You don't know which one. I do.' A long pause." },
            { text: "Which one? Tell me.", effect: +22, next: "'If I say, that person disappears. Very fast. Vera's response time is short. But let me say this: a woman. And she knows everyone. And she hasn't drawn any suspicion so far.'" }
          ]
        }
      ]
    },

    scientist_d9: {
      name: "Scientist Anna",
      role: "Day-9 · Last Expert",
      image: "/faces/scientist_anna.png",
      low: [
        {
          text: "I know what you're thinking. That I'm responsible for this. And... you're not entirely wrong. I was part of the research team. But I stopped and tried to warn them. They didn't listen.",
          choices: [
            { text: "What were you researching?", effect: +15, next: "'Biological interface with the Mist. How to control it. How to direct it. The team was brilliant. And completely lost their ethical compass.' She closes her eyes briefly." },
            { text: "Are you responsible for what happened?", effect: +8, next: "'Contributer. Not the sole cause. The day I raised objections they removed me from the project. That was three years ago. What happened after...' She can't finish." },
            { text: "We can talk when more trust is established.", effect: +5, next: "'Fair. I'll be here.' She returns to her work." }
          ]
        }
      ],
      medium: [
        {
          text: "The Silver formula... I designed it originally. As a protection mechanism. It was supposed to create immunity. But there was a variable we couldn't account for: Human DNA is not uniform. The formula affected each person differently.",
          choices: [
            { text: "What was the worst effect?", effect: +20, next: "'Complete integration. The subject... becomes the Mist. Not dies. Becomes. Conscious, communicating, but no longer human in the biological sense. We called them Phase-3.' She exhales. 'Vera is deliberately producing Phase-3s now.'" },
            { text: "Is there an antidote?", effect: +18, next: "'In theory. I have incomplete notes. But we need a Phase-4 lab. I haven't seen that equipment in years.' She pauses. 'Unless it's in Sector-0 still.'" },
            { text: "This information needs to be formally recorded.", effect: +8, next: "'Agreed. But carefully. If this reaches the wrong hands they'll use it as a weapon not a cure.'" }
          ]
        }
      ],
      high: [
        {
          text: "I have to tell you about Experiment-84. The one that escaped. I'm the one who helped them escape. Because I realized what was being done to them was wrong. And because of that I'm also being hunted.",
          isSpecial: true,
          choices: [
            { text: "Tell me everything about Experiment-84.", effect: +28, next: "'Subject 84 showed the highest resistance to the Silver formula. Never transformed. But experienced all the side effects — constant pain, sensory overload, the Mist's 'voice.' Vera wanted to dissect Subject 84 to understand the resistance source. I couldn't allow it. I helped them escape.' She takes a breath. 'If Subject 84 is still alive... that person might be the key to an antidote.'" },
            { text: "Is Subject 84 here? In the shelter?", effect: +22, next: "A very long pause. 'I hope so. That's partly why I came here.' She doesn't say more." }
          ]
        }
      ]
    },

    mother_fidan_d7: {
      name: "Mother Fidan",
      role: "Day-7 · Protector",
      image: "/faces/d7_mother.png",
      low: [
        {
          text: "Don't touch the baby. Nobody touches him. I'll protect him. From the Mist, from people, from everything.",
          choices: [
            { text: "The baby is safe, I promise.", effect: +12, next: "'Promise? Promises rotted in this world. But there's something in your eyes... okay.' She holds the baby tighter." },
            { text: "There's a safe area in the shelter, would you like to move there?", effect: +15, next: "'Safe area... Nice words. I don't know if such a place exists anymore. But I'll try.' Her eyes become moist." },
            { text: "Everyone needs to look after themselves.", effect: -10, next: "'I'm not looking after myself, I'm looking after him.' She shows the baby. 'He's my everything.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Umut's father was in Sector-5. When the door closed he was inside. He said 'run' on the phone. That was his last word. And then... the Mist. It swallowed everything.",
          choices: [
            { text: "What do you know about the father?", effect: +18, next: "'He was an engineer. Worked on Vera's project. It was a mandatory assignment — he'd go to prison if he refused. But something changed the last week. He was scared. And he told me 'I saw the experiments.' Nothing more.'" },
            { text: "How is Umut? Is he healthy?", effect: +20, next: "'Physically fine. But... he stopped crying at night. Babies crying is normal. He doesn't cry. And sometimes his eyes... glow. A different kind of brightness.' Her voice trembles." },
            { text: "The past is behind us, we need to look forward.", effect: -5, next: "'The past isn't behind us. The past is outside right now, as Mist.' She stares hard." }
          ]
        }
      ],
      high: [
        {
          text: "I'm going to tell you something about Umut. I haven't told anyone. But you should know because if something happens... I want you to protect him.",
          isSpecial: true,
          choices: [
            { text: "Tell me. I'll protect him.", effect: +28, next: "'Umut wasn't born normally. He was born in Vera's laboratory — through a secret procedure. When his father was working there they called me too. They gave me drugs throughout the pregnancy. Silver-colored drugs. And when Umut was born... the Mist didn't affect him. At all. As if immune.' Tears flow from her eyes. 'Is my son an experiment? Or is he hope?'" },
            { text: "We may need to test Umut.", effect: +15, next: "'Test... I know. But I beg you — never let him fall into Vera's hands. Never.' Her voice cracks." }
          ]
        }
      ]
    },

    baby_umut_d7: {
      name: "Baby Umut",
      role: "Day-7 · Spark of Hope",
      image: "/faces/d7_baby.png",
      low: [
        {
          text: "[ The baby looks at you. Eyes unusually clear. Not crying. Not smiling. Just watching. As if understanding. ]",
          choices: [
            { text: "[ Smile at the baby. ]", effect: +10, next: "[ The baby smiles back. But a smile too conscious for a baby. Mother Fidan: 'Did you see? He knows.' ]" },
            { text: "[ Carefully examine the baby. ]", effect: +8, next: "[ There's a faint silvery tone in his eyes. Invisible in normal light but glows in darkness. Mother Fidan watches you anxiously. ]" },
            { text: "[ Step away. ]", effect: -5, next: "[ The baby starts crying as you move away. First time making a sound. Mother Fidan rushes to his side. ]" }
          ]
        }
      ],
      medium: [
        {
          text: "[ The baby is different this time. Drawing a shape in the air with his fingers — over and over. A circle with a dot inside. The Sector-0 symbol. ]",
          choices: [
            { text: "[ Record and analyze the shape. ]", effect: +20, next: "[ Doctor Arzu later confirms: 'This is the official logo of Project Zero. How can a baby know this?' Everyone falls silent. ]" },
            { text: "[ Ask Mother Fidan. ]", effect: +15, next: "'He was doing this before too. In his sleep. Drawing the same shape with his fingers. Every night.' She's scared but won't stop protecting her son." }
          ]
        }
      ],
      high: [
        {
          text: "[ Midnight. The baby is awake. And whispering. Too clear, too precise for a baby to whisper: 'Door. Four. Teen.' Then sleeps. ]",
          isSpecial: true,
          choices: [
            { text: "[ Record this. ]", effect: +25, next: "[ The recorder captures the sound. When played back everyone freezes. Anna: 'This is the formula's effect. Information is being transferred. The baby is a receiver.' Mother Fidan cries. 'My son is not a tool.' ]" },
            { text: "[ Leave Mother Fidan alone. ]", effect: +15, next: "[ Next day Mother Fidan comes to you: 'Despite what happened last night you watched over him. Thank you.' Her trust grows. ]" }
          ]
        }
      ]
    },

    searching_father_d8: {
      name: "Searching Father",
      role: "Day-8 · Lost Pursuer",
      image: "/faces/d8_searching_father.png",
      low: [
        {
          text: "My daughter... Twelve years old. Somewhere outside. Or... somewhere else. I don't know. But I search every day.",
          choices: [
            { text: "Where did you last see her?", effect: +15, next: "'At the Sector-3 boundary. She was coming back from school when the Mist came. I ran. But the Mist was faster.' His voice chokes. 'And now I go outside and look every day. Every day.'" },
            { text: "Outside is too dangerous, stay here.", effect: +5, next: "'I can't wait. Maybe you don't have children. One day you'll understand.' A helpless smile." },
            { text: "Finding her might be impossible.", effect: -15, next: "His eyes turn to ice. 'Don't ever say that to me again.' He turns his back." }
          ]
        }
      ],
      medium: [
        {
          text: "I searched for her outside. Every day. And one day I found something — my daughter's coat. But there was something strange on it. Grey dust. And a paper in the coat pocket.",
          choices: [
            { text: "What did the paper say?", effect: +22, next: "'Coordinates. In official-looking handwriting. And underneath: 'Delivery point 7.' Someone took my daughter. Not random — planned.' His fists clench." },
            { text: "The grey dust could be the Silver formula.", effect: +18, next: "'What formula?' Confused. But when explained his face changes. 'Then what did they do to my daughter?' He whispers." },
            { text: "Let's log the evidence from the coat.", effect: +12, next: "'The coat is here. Take it.' He pulls it from his jacket. 'But promise me — we'll find my daughter.'" }
          ]
        }
      ],
      high: [
        {
          text: "I found my daughter. But... she's no longer my daughter. I saw her outside. Her eyes are the same but her gaze is different. And she didn't recognize me. Didn't say 'Dad.' Just looked and walked away.",
          isSpecial: true,
          choices: [
            { text: "Tell me what happened, please.", effect: +28, next: "'The Mist took her. But didn't kill her. Transformed her. Vera's children — that's what they call them. They take the young ones. Program them. And release them back. Eyes see, ears hear but... hollow inside.' He cries. 'My daughter is alive but I've lost her.'" },
            { text: "Can we bring her back?", effect: +20, next: "'Scientist Anna mentioned a possibility. An antidote. But it needs to be early stage. I don't know what stage my daughter's transformation is in.' Hopeless but hasn't given up." }
          ]
        }
      ]
    },

    escapee_d10: {
      name: "The Escapee",
      role: "Day-10 · System Runaway",
      image: "/faces/deney_04.png",
      low: [
        {
          text: "[ Trembling. Eyes constantly darting to the door. ] You won't send me back right? Promise. Please. I'd rather die than go back there.",
          choices: [
            { text: "I won't send you back. This is safe.", effect: +18, next: "'Safe... Haven't heard that word in a long time.' Slowly calming. 'Thank you. My name... I don't have a name anymore. They called me 04.'" },
            { text: "Where did you escape from? What did you see?", effect: +12, next: "'Vera's underground facility. There are... people there. In tubes. In green liquid. They sleep but... they're transforming. And when they wake up they're different.' Trembling intensifies." },
            { text: "I'll need to interrogate you.", effect: -10, next: "'Interrogation... There was interrogation there too. Then needles. Then darkness.' She pulls back." }
          ]
        }
      ],
      medium: [
        {
          text: "I'll tell you everything I know about Vera's facility. But while telling it I'll remember too. And remembering... hurts.",
          choices: [
            { text: "Tell me when you're ready, no rush.", effect: +22, next: "'Lower floor. Three sections. First is the lab — formula production. Second is the transformation room — people go in, come out different. Third... the control room. Vera is there. Screens everywhere. She's watching every sector. Every one.' She breathes. 'And there's a big screen — a map of all shelters. Yours too.'" },
            { text: "How many people are there?", effect: +18, next: "'I couldn't count. But hundreds. Most are sleeping — in tubes. Vera calls them 'seeds.' They'll be released when ready. When? Fourteen days from now.'" },
            { text: "Can we verify this information?", effect: +8, next: "'Scientist Anna can verify it. She worked at that facility. And she helped me escape.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ This time 04 is very calm. Never been this calm before. ] 'I'm going to give you a secret. Vera's weak point.'",
          isSpecial: true,
          choices: [
            { text: "Tell me.", effect: +30, next: "'The formula doesn't work on its own. It needs a central signal. A transmitter. In the heart of Vera's facility. If you destroy it — the formula loses function. The transformed won't stop but no new transformations. And over time... maybe they'll come back. Maybe.' Her eyes light up. 'I know the transmitter's coordinates.'" },
            { text: "How do we reach the transmitter?", effect: +22, next: "'You need to enter the facility. And know the traps inside. I know them. Take me with you and I'll show the way.' Scared but determined." }
          ]
        }
      ]
    },

    assassin_d10: {
      name: "The Assassin",
      role: "Day-10 · Shadow Agent",
      image: "/faces/assassin_wraith.png",
      low: [
        {
          text: "[ Sitting in darkness. Silent. When you approach: ] One more step and it's your last.",
          choices: [
            { text: "I'm not a threat. Let's talk.", effect: +5, next: "'Talking doesn't serve me. But...' A long pause. 'Fine. But keep your distance.'" },
            { text: "Who are you?", effect: +3, next: "'My identity is dead. I was just a tool. Now the tool has rusted.' Harsh but tired." },
            { text: "Put your weapon down, there are rules here.", effect: -15, next: "'Rules?' A silent laugh. 'Those who lived by rules stayed outside.' But he slowly places his weapon on the table." }
          ]
        }
      ],
      medium: [
        {
          text: "I'm a former agent of Vera's. Shadow unit. Our job was simple: silence targets. But one day someone I knew appeared on the target list.",
          choices: [
            { text: "Who appeared on the list?", effect: +20, next: "'My brother.' Long silence. 'That's when I understood — the system doesn't care. Everyone is a number. Me too. And that day I turned.' His gaze is cold but something is broken inside." },
            { text: "What do you know about Vera's shadow unit?", effect: +18, next: "'Everything. How many people, who's where, when they move. Routes, signal codes, entry points.' He pauses. 'I won't give this information for free but help me survive here, and I'll help you.'" },
            { text: "I can't trust you.", effect: -5, next: "'Smart. Don't trust me. But trust my information. Because my life depends on it too.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Night. He wakes you. Silently. ] 'An attack is planned tomorrow night. From inside. Three people. And I know all of them.'",
          isSpecial: true,
          choices: [
            { text: "Give me the names.", effect: +28, next: "'One is low-ranking, on guard duty — Lieutenant Rıza. Second is shelter staff, the records clerk. Third...' He pauses. 'You won't believe the third. But I'll say it: Naciye. Watcher Naciye.' His eyes are ice cold." },
            { text: "How can we stop the attack?", effect: +22, next: "'Just neutralize one — Rıza. He's the coordinator. The others can't move without him. But do it quietly. Otherwise Vera will know and change the plan.'" }
          ]
        }
      ]
    },

    oracle_d10: {
      name: "Oracle",
      role: "Day-10 · Voice of Mystery",
      image: "/faces/oracle_blind.png",
      low: [
        {
          text: "[ Eyes bound. He turns to face you — but doesn't see. Or perceives in a way beyond sight. ] You came. I knew you would. I've been waiting three days.",
          choices: [
            { text: "How did you know about me?", effect: +15, next: "'The Mist tells. Everything. I learned to listen — and paid the price.' He shows his binding. 'I gave my eyes. In return I received the truth.'" },
            { text: "What happened to your eyes?", effect: +12, next: "'I did it. To myself. I didn't want to see the Mist — visually. Because visual perception deceives. But sound... sound doesn't lie.' Calm but eerie." },
            { text: "This could be charlatanism.", effect: -8, next: "'Charlatan? Well, tomorrow three people will come from the southeast. One wounded. One woman. One child. You'll see.' And it actually happens." }
          ]
        }
      ],
      medium: [
        {
          text: "Vera's real name isn't Vera. Did you know that? Vera is a code name. The project name: Data Transfer Protocol. VERA. And 'she' isn't a person — she's a program.",
          choices: [
            { text: "Vera is a program?", effect: +25, next: "'There is a person yes — alive, breathing. But that person is the program's face. The program makes the decisions. Not AI... something older. Created in Sector-0. Learned from humans. And now it governs humans.' He swallows. 'The girl is just the interface.'" },
            { text: "Where does this information come from?", effect: +18, next: "'From the Mist. The Mist speaks. I listen. Most people can't hear — because they have eyes. Eyes make noise. I chose silence.' He touches his binding." },
            { text: "This is very hard to believe.", effect: +5, next: "'You don't need to believe. You need to verify. Ask Anna. She knows too. But she's afraid to say it.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ He summons you in the darkest hour of night. ] 'Fourteen days are almost up. And I'm going to give you the last piece of information. After this I can't speak — because the Mist will take me.'",
          isSpecial: true,
          choices: [
            { text: "We can save you.", effect: +30, next: "'You can't. I'm already halfway. But know this: if Vera's transmitter is destroyed, the transformation stops. The transmitter is directly under Sector-0. But to get in you need a key — biometric. And that key...' He pauses. 'Baby Umut's blood. That child was born resistant to the formula. His blood unlocks the transmitter and simultaneously destroys it.' Silence falls." },
            { text: "Oracle, your sister is here. The Silent Woman.", effect: +25, next: "For the first time emotion on his face. Pain. 'I know. I know I can't hear her voice but I feel her presence. Tell her... I'm sorry. I pushed her away to protect her. But the Mist brought us all together in the end.' Tears flow beneath the binding." }
          ]
        }
      ]
    },

    infected_oguz_d11: {
      name: "Infected Oguz",
      role: "Day-11 · Mist Victim",
      image: "/faces/infected_oguz.png",
      low: [
        {
          text: "[ Breathing heavy, hissing. Grey veins visible in his eyes. ] Don't... look at me. Like this. I'm not this. I'm Oguz.",
          choices: [
            { text: "I see you Oguz. Let's talk.", effect: +15, next: "'He talks to me like a human.' His breathing steadies for a moment. 'Most run. You... stayed.' The grey in his eyes recedes briefly." },
            { text: "What stage is the infection at?", effect: +8, next: "'I don't know. But I hear sounds at night. The Mist is telling me things. And what scares me most... I'm starting to understand it.'" },
            { text: "You may need to be quarantined.", effect: -12, next: "'Quarantine... There was quarantine there too. Then the experiments started. Please.' His eyes open with horror." }
          ]
        }
      ],
      medium: [
        {
          text: "The Mist speaks to me. Clearer every night. There are words now — names. And it's saying your name too.",
          choices: [
            { text: "The Mist is saying my name?", effect: +20, next: "'It doesn't say it exactly. More like... shows. I know where everyone is. Even with my eyes closed. You're to my right now, two meters. And your heartbeat is fast.' He's right." },
            { text: "Can you control this ability?", effect: +15, next: "'Control... Sometimes. But when I control it the Mist wants more. Like I'm using it and going into debt.' He trembles. 'The more I hear, the more I transform.'" },
            { text: "This could turn you into a weapon.", effect: -8, next: "'A weapon? I'm a person!' But his voice has a metallic ring for a moment. They both notice." }
          ]
        }
      ],
      high: [
        {
          text: "[ Oguz finds you in the darkest hour. His face half-transformed but humanity still in his eyes. ] 'I have very little time left. I need to tell you one last thing.'",
          isSpecial: true,
          choices: [
            { text: "I'm listening Oguz.", effect: +28, next: "'I saw Vera's inside agent. Through the Mist's eyes. That person... has transformed but is hiding. Moving by the Mist's will. And they're the closest person to you.' His eyes blur. 'I can't say the name — the Mist blocks it. But go to that room, open the left cabinet. There's evidence.' Speaking with his last strength." },
            { text: "Can we save you?", effect: +20, next: "'Too late. For me it's too late. But I warned you. That's enough.' He smiles — his last human smile. 'Remember Oguz.'" }
          ]
        }
      ]
    },

    shadow_walker_d11: {
      name: "Shadow Walker",
      role: "Day-11 · Invisible Threat",
      image: "/faces/character_shadow.png",
      low: [
        {
          text: "[ You can't see him. But his voice comes — from everywhere. ] No need to search for me. I'm already here. Always was.",
          choices: [
            { text: "Where are you? Show yourself.", effect: +5, next: "'I won't. Because you wouldn't want to see.' The voice comes from behind you. When you turn nobody's there. But there's a note on the table: 'Be careful who you eat with.'" },
            { text: "If you're threatening us you're mistaken.", effect: -10, next: "'Threatening? I don't threaten. I warn. And I don't have to warn.' The voice fades. But in your dreams that night you remember him." },
            { text: "If you want to talk, accept my terms.", effect: +8, next: "Long silence. Then: 'Accepted.' And for the first time he steps from a corner. His face... unclear. A dark mask or reality — hard to tell." }
          ]
        }
      ],
      medium: [
        {
          text: "I am the Mist's first product. Before Vera. I was Project Zero's first experiment. Most died. I... did I die? I'm not sure.",
          choices: [
            { text: "You're alive. We're talking right here.", effect: +15, next: "'We're talking yes. But I can pass through walls. Move through shadows. Can a thing that does this be alive?' Very calm. 'I'm in between. Not human, not Mist. Vera found me perfect — but couldn't control me.'" },
            { text: "Did you escape from Vera?", effect: +18, next: "'I didn't escape. I disappeared. Lived in shadows for ten years. Watched people. Heard everything. And I'm here now because... something changed.' His gaze glimmers in faint light. 'Vera will die. And I want the right person to do it.'" },
            { text: "Should I be afraid of you?", effect: +3, next: "'Not yet.' That answer is unsettling enough." }
          ]
        }
      ],
      high: [
        {
          text: "[ Midnight. Beside your bed. No breathing sound but present. ] 'I know Vera's agent in the shelter. And I want to eliminate them. Let me.'",
          isSpecial: true,
          choices: [
            { text: "Who is it?", effect: +25, next: "'I'll tell you but the decision is yours. That person... not Doctor Arzu. Not the Priest. Someone sneakier. The records clerk — you know, the man you never noticed? He goes outside every night. And when he comes back there's soil traces on him. Everything you've told him goes to Vera. Every. Thing.' Glowing eyes in the dark, ice cold." },
            { text: "I can't let you kill anyone.", effect: +15, next: "'Fine. Then handle it yourself. But know this: tomorrow night at three he'll make his move. And without you I'll solve this anyway.' He vanishes. But you feel it — he's watching." }
          ]
        }
      ]
    },

    mind_reader_saman_d12: {
      name: "The Shaman",
      role: "Day-12 · Mind Reader",
      image: "/faces/mind_reader_saman.png",
      low: [
        {
          text: "I hear your thoughts. No, I'm not joking. Right now you're thinking 'this guy is crazy.' And... you're a bit right. But a crazy person can see true things.",
          choices: [
            { text: "Okay, what am I thinking now?", effect: +10, next: "'You're curious. And afraid. But beneath the fear... there is hope. And right now there's another thought: 'What does he know about Vera?' Well, I know this.' Chillingly accurate." },
            { text: "Where does your ability come from?", effect: +12, next: "'The formula. A different version of the Silver formula. Vera gave it to me — I wasn't volunteering. But this was the side effect. I didn't transform, but... minds opened.' Joking, but with underlying pain." },
            { text: "Reading minds is impossible.", effect: -5, next: "'Then I won't mention the photo in your pocket. Your sister's photo. Left pocket.' Is he right?" }
          ]
        }
      ],
      medium: [
        {
          text: "I saw Vera's plan. Inside her head. I was able to read it when I was at close range. And what I saw... might scare you.",
          choices: [
            { text: "What did you see in her head?", effect: +22, next: "'A map. Map of all sectors. And a date on each one. The date for our sector is... in two days. And right in the middle of the map, a giant symbol: Sector-0. That's the center. Everything is controlled from there.' His eyes focus. 'And Vera... is afraid. Yes, she's afraid too. But why? That I couldn't read.'" },
            { text: "If you can read Vera's thoughts, why are you here?", effect: +18, next: "'Because she reads me too. Two-way street. And when I move away, we both weaken. But if I get close... either I beat her, or she beats me.' He's sweating." },
            { text: "Can we trust this information?", effect: +8, next: "'Don't trust me. But verify the information I gave. You'll see what happens in two days.'" }
          ]
        }
      ],
      high: [
        {
          text: "I found Vera's greatest fear. And this fear... is you.",
          isSpecial: true,
          choices: [
            { text: "Me? Why?", effect: +30, next: "'Because you make decisions. And Vera's entire system has one single weakness: free will. The formula controls, but cannot override will. And you... have a strong will. Vera knows this. That's why she wants to transform you — not kill you. Because if she kills you, she loses.' He swallows. 'You are her greatest prize and her greatest threat. Simultaneously.'" },
            { text: "How can we use this advantage?", effect: +22, next: "'Make Vera approach you. And I will be in between. I'll read her mind. I'll extract the full data. But there's a risk — you might lose me.' He smiles. 'Every magic demands a price.'" }
          ]
        }
      ]
    },

    pilot_sinan_d12: {
      name: "Pilot Sinan",
      role: "Day-12 · The Last Pilot",
      image: "/faces/pilot_sinan.png",
      low: [
        {
          text: "I landed the chopper without crashing. That's how I survive. But the fuel is running low and a place to go... is there any place outside?",
          choices: [
            { text: "Do you know the weather and outside conditions?", effect: +15, next: "'I do. The Mist goes up to 3000 meters. Above that is clear. But no landing spots — everything is covered. Only clear area: south, the coastline. But that's 400 km away.' He pauses. 'I have fuel for 350 km.'" },
            { text: "How many people does the chopper carry?", effect: +10, next: "'Six. Maybe seven with light load. But not everyone can go. And this decision... who will make it?' Looks at you." },
            { text: "Flying is madness, we must stay here.", effect: -5, next: "'Staying here is madness too. Options are bad, man. But I prefer to fly.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I saw something while flying. While coming to the shelter. And this thing I saw... changed everything.",
          choices: [
            { text: "What did you see?", effect: +22, next: "'I flew over Sector-0. It's... open. No Mist above it. Like an eye — clear in the middle, Mist all around. And in the middle there's a structure. Massive. Lights are on. Meaning it's active.' His eyes widen. 'And there were vehicles around it — military. But not of our army.'" },
            { text: "Can you land there?", effect: +18, next: "'I can land. But can I take off again? That's the question.' He glares. 'If we land we get intel. But no guarantee of return. And most importantly: when I open the cockpit, will the Mist come in?' He gulps." },
            { text: "Let's add this intel to the strategic plan.", effect: +12, next: "'Let's. But know this: the flight window is closing. Fuel won't last for days. You need to decide — fast.'" }
          ]
        }
      ],
      high: [
        {
          text: "Here's an offer for you. A final flight. To Sector-0. Get inside, reach the transmitter. We enter from above via chopper and we come back. Or we don't. But at least we finish this.",
          isSpecial: true,
          choices: [
            { text: "This is a suicide mission.", effect: +25, next: "'Every great victory started as suicide to someone.' He smiles. 'Six-man team: me, you, 04 guides the way, Assassin provides security, and healer for the wounded. The sixth seat... should be Araş or Anna. Whoever knows the formula.' Hands on your shoulder. 'Ready, commander?'" },
            { text: "We need to prepare first.", effect: +20, next: "'Sure. But tomorrow night at the latest. Fuel doesn't wait. And Vera doesn't wait either.' Serious. 'Let's write history, or become history.'" }
          ]
        }
      ]
    },

    shadow_vengence_d13: {
      name: "Shadow of Vengeance",
      role: "Day-13 · Agent of Chaos",
      image: "/faces/character_returned.png",
      low: [
        {
          text: "[ The face is familiar but you can't recall from where. ] You don't remember me, do you? Normal. I didn't remember you either. But the Mist... the Mist reminds.",
          choices: [
            { text: "Where do I know you from?", effect: +10, next: "'You don't. But you will. I was the first person who came to the shelter. On the first day. Then I left — at night. And I returned. But in between... I changed.' He smiles. A cold smile." },
            { text: "Why did you leave and return?", effect: +8, next: "'Because I had business outside. And that business isn't finished. Now it will continue inside.' Ambiguous. Dangerous." },
            { text: "I'm watching you.", effect: -5, next: "'Watch. But I have eyes too. And my eyes... see in the dark.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I am a transformed. But not under Vera's control — I escaped her. And I want vengeance. Vera took my family.",
          choices: [
            { text: "What happened to your family?", effect: +18, next: "'My wife. My son. Both transformed. And they don't recognize me anymore. Walking the streets but... hollow inside. Vera uses them — to draw me out.' His voice doesn't waver. Already frozen." },
            { text: "What's your plan for vengeance?", effect: +15, next: "'Get close to Vera. Pretend to provide info from the inside. And at the right moment... I reach the transmitter. But I can't do it alone.' Looks at you. 'You also want this to end.' He's right." },
            { text: "Vengeance will lead you down the wrong path.", effect: -10, next: "'Wrong path? This is the only right path. Not vengeance — justice. And justice hurts.' His eyes turn dark." }
          ]
        }
      ],
      high: [
        {
          text: "[ The final night. Shadow of Vengeance is ready. ] 'Tomorrow night I go. To Vera's facility. I have a contact inside. And an offer for you: come with me. If we both enter, our chances increase.'",
          isSpecial: true,
          choices: [
            { text: "What's your plan?", effect: +25, next: "'Pilot Sinan drops us close with the chopper. My contact opens the door. We enter. You head to the transmitter, I distract Vera. And if we succeed... the Mist stops.' A long pause. 'If we fail, at least we tried.' He extends his hand." },
            { text: "Let's plan this together.", effect: +20, next: "'Fine. But one condition: don't try to stop me. When I face Vera... I'll settle my own score. Interference is a best-case scenario.' Harsh. Determined. And a bit mad." }
          ]
        }
      ]
    },

    scout_vera_d13: {
      name: "Scout Vera",
      role: "Day-13 · Zone Tracker",
      image: "/faces/scout_vera.png",
      low: [
        {
          text: "Yes, my name is Vera. No, I am not *that* Vera. A coincidence. Or... maybe not. Who knows what a coincidence is in this world anymore.",
          choices: [
            { text: "Name coincidence... interesting.", effect: +10, next: "'More than interesting, soldier. The first day you took me in, you should have seen someone's face. Everyone froze when I said my name. But I'm just a scout. Someone who maps sector borders.'" },
            { text: "How much do you know outside the sector?", effect: +15, next: "'Every inch of it. I mapped up to two kilometers beyond the outer border. I know where Vera — the other Vera — is stationed. And the safest route to get there.'" },
            { text: "The name doesn't matter, what can you do?", effect: +5, next: "'I can draw maps. I can plan routes. And... I can move stealthily. I've been doing this for years.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I must confess something: Vera — the other Vera — found me last week. Made an offer. 'Join me,' she said. Smiled because our names are the same.",
          choices: [
            { text: "What did you say?", effect: +20, next: "'I told her I'd think about it. To buy time. And in that moment I saw the surroundings — the facility. Peaked inside. People... in tubes. In green liquid. Sleeping but their faces... in pain.' She trembles. 'And I fled back. Here.'" },
            { text: "Do you know the location of Vera's facility?", effect: +22, next: "'Not only do I know — I know the entry code. She told me because she trusted me. Fool.' She smiles but her eyes don't. 'That code: 14-0-84. Sound familiar?'" },
            { text: "You might be giving them confidence.", effect: -8, next: "'Confidence? I'm doing my espionage. On your side. But it's hard to make you believe it, I know.'" }
          ]
        }
      ],
      high: [
        {
          text: "I drew the final map. There are three routes to Vera's facility. The safest is through the tunnel. And I have the key to that tunnel's door.",
          isSpecial: true,
          choices: [
            { text: "Give me the map and the key.", effect: +28, next: "'Take it.' She opens the map. 'North tunnel: longest but safest. South pass: short but Vera's patrol zone. The third: underground direct — but that's... Shadow Walker's territory. You pass if he allows it.' She hands over the key. 'And I have to come too. Only I know the way.'" },
            { text: "Why are you helping this much?", effect: +22, next: "'Because my name is Vera. And I want this name to be remembered for a good thing. The bad one is her, the good one is me. Let history be written like this.' Serious. 'Are you ready commander? The final journey begins.'" }
          ]
        }
      ]
    },

    aras_final_choice_d14: {
      name: "Araş — Final Decision",
      role: "Day-14 · Truth Bearer",
      image: "/faces/d8_aras.png",
      low: [
        {
          text: "We are here. The final day. The moment of decision. What anyone else says doesn't matter anymore — it's just you.",
          choices: [
            { text: "We will fight together, Araş.", effect: +15, next: "'Together? Fight?' He shakes his head slowly. 'The fighting ends now, soldier. Either we burn Sector-7 with the nuclear seal, or we surrender to the Silver.'" },
            { text: "What happens if we detonate the nuclear seal?", effect: +10, next: "'We all die. And the Mist burns with us in this sector. At least we will leave a piece of clean land in the world.' His face is like stone." },
            { text: "Is surrender the only option?", effect: -5, next: "'That's the option Vera is waiting for. Open the door, throw us into the embrace of the Silver. The decision is entirely yours.'" }
          ]
        }
      ],
      medium: [
        {
          text: "The Mist is seeping in. I don't know how much longer the doors will hold. Listen to me carefully: if the Sector-0 transmitter isn't destroyed — the formula won't stop.",
          choices: [
            { text: "Who can destroy the transmitter?", effect: +22, next: "'You. If you are going by chopper, listen to Pilot Sinan. But I won't go. I will stay here and keep the seal on trigger in case you fail.'" },
            { text: "Is there no point in staying here and fighting?", effect: +15, next: "'Fight... against Vera's army?' He smiles, a bitter smile. 'Our war is won with will, not weapons. Destroy the transmitter. Or burn us all.'" },
            { text: "Could Vera be deceiving us?", effect: +8, next: "'Vera doesn't deceive. Vera programs. You cannot break this cycle without destroying her.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ He looks deep into your eyes. The face of hopes lost in the Mist. ] 'Say your final word, soldier. Will you bury us in the dark, or will we create our own darkness?'",
          isSpecial: true,
          choices: [
            { text: "Blow up the sector. (Nuclear Sacrifice)", effect: +30, next: "He puts his hand on your shoulder. 'For humanity, soldier. For humanity...' (Path to Hero Ending)." },
            { text: "Open the doors. We surrender. (Silver Surrender)", effect: -15, next: "'I understand... We have no strength left to fight.' He lowers his weapon. (Path to Silver Ending)." }
          ]
        }
      ]
    },

    vera_queen_d14: {
      name: "Queen Vera",
      role: "Day-14 · Mist Architect",
      image: "/faces/vera.png",
      low: [
        {
          text: "You came. As I expected. The only one resisting me. The others either accepted the formula, or in pain... adapted.",
          choices: [
            { text: "I didn't come to surrender.", effect: +10, next: "'I know that. Your resistance intrigues me. But resistance is futile. The formula is taking humanity to the next level. Why fight it?'" },
            { text: "You are transforming people and making them slaves.", effect: +15, next: "'Slaves? No. I am saving them from pain, chaos, war. One mind, one purpose. Perfect peace.'" },
            { text: "I will end this Vera.", effect: +5, next: "'Keep trying. But with every step, you come closer to me. I'm waiting.'" }
          ]
        }
      ],
      medium: [
        {
          text: "My name is Vera. But I used to be... the name of a project. My father thought he would save me. Instead, I became the only salvation for humanity.",
          choices: [
            { text: "What happened to your father?", effect: +20, next: "There is a cold light in her eyes. 'He was one of the first. He didn't understand the potential of the formula. He called me creator, but now I... carry him within me. Just as I will carry everyone.'" },
            { text: "There is no peace in this darkness, only death.", effect: +18, next: "'Death? Biological death is just a transition. The transmitter connects minds. You see darkness, we hear a perfect symphony.'" },
            { text: "I know how to stop you.", effect: +10, next: "'By destroying the transmitter? Your attempt doesn't worry me. Biometric locks, blood... I built all the algorithms. The doors are closed to you.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Her silver eyes lock onto yours. Her voice comes from everywhere, from the Mist, the walls, from inside your own head. ] 'Be with me. I will make you my general. We will share the heart of this system.'",
          isSpecial: true,
          choices: [
            { text: "Baby Umut's blood will destroy you. We know.", effect: +30, next: "For the first time, her expression breaks. 'The Oracle... he told you. Foolish blind man. Give me that child! He must be my savior!' Her face twitches, as if losing control. 'Break the doors! Sector-7 will fall!'" },
            { text: "I will never bow to you.", effect: +25, next: "'Then... you will disappear, just as I have watched you.' Her voice becomes digital. 'Assault initiated. Take down Sector-7. Break their will.'" }
          ]
        }
      ]
    }
  }
};

// ─────── Yardımcı Fonksiyonlar ───────

/** bondLevel → kategori (low / medium / high) */
export const getBondCategory = (bondLevel) => {
  if (bondLevel >= 66) return 'high';
  if (bondLevel >= 26) return 'medium';
  return 'low';
};

/** Yeni resident başlangıç durumu */
export const createNewResident = (characterId) => ({
  bondLevel: 10,
  conversationCounts: { low: 0, medium: 0, high: 0 },
  unlockedSecrets: [],
  lastTalkedDay: null,
});

