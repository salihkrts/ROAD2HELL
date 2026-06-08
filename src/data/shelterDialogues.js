// ============================================================
// SHELTER DIALOGUES â€” SEKTÃ–R-7 GATEWAY
// Senaryo ID'leriyle birebir eÅŸleÅŸen key'ler kullanÄ±lmÄ±ÅŸtÄ±r.
// GÃ¶rseller: /faces/ (public klasÃ¶rÃ¼)
// ============================================================

const tr_part1 = {
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 1 â€” MINA
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    mina_d1: {
      name: "KÃ¼Ã§Ã¼k Mina",
      role: "GÃ¼n-1 Â· Ã‡ocuk",
      image: "/faces/d1_mina.png",
      voiceProfile: { pitch: 1.65, variation: 0.12 }, // Ã‡ocuk sesi: Ä°nce ve hareketli
      low: [
        {
          text: "Annem nerede ÅŸimdi... Bilmiyorum. Sen de bilmiyorsun deÄŸil mi?",
          choices: [
            { text: "Onu aramak iÃ§in yapabileceÄŸimiz bir ÅŸey var mutlaka.", effect: +12, next: "GÃ¶zlerinde bir kÄ±vÄ±lcÄ±m Ã§akÄ±yor. 'GerÃ§ekten mi?' diye fÄ±sÄ±ldÄ±yor, ama sesinde inanmak isteme de var." },
            { text: "Åu an gÃ¼vendesin, buna odaklan.", effect: +5, next: "BaÅŸÄ±nÄ± sallÄ±yor yavaÅŸÃ§a. 'Tamam...' diyor ama gÃ¶zleri kapÄ±ya bakÄ±yor hÃ¢lÃ¢." },
            { text: "Ã‡ok soru sorma, burada herkes zor durumda.", effect: -15, next: "KÃ¼Ã§Ã¼k eller birbirine kenetleniyor. Sessizce dÃ¶nerek kÃ¶ÅŸesine Ã§ekiliyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Abi... SÄ±ÄŸÄ±nakta garip sesler geliyor bazen. DuvarÄ±n arkasÄ±ndan. Tekrar tekrar aynÄ± ses. 'AÃ§Ä±n' diyor sadece.",
          choices: [
            { 
              text: "Hangi duvarÄ±n yanÄ±ndan? GÃ¶sterebilir misin?", 
              effect: +18, 
              next: "'Åuradaki eski demir kapÄ±nÄ±n. Ben her gece sayÄ±yorum. Bu ay on altÄ± kere duydum.' ParmaklarÄ±nÄ± Ã§Ä±karÄ±yor.",
              followUp: {
                text: "Yere eÄŸilip toza bir ÅŸeyler Ã§iziyor. 'Bak, ritim bÃ¶yle... ÃœÃ§ kere vuruyor, duruyor, sonra iki kere daha.' GÃ¶zleri kocaman aÃ§Ä±lÄ±yor. 'BozkÄ±r amca da duydu. GÃ¶rdÃ¼m onu, kapÄ±ya bakÄ±yordu ama duymamÄ±ÅŸ gibi yaptÄ±.'",
                choices: [
                  { text: "BozkÄ±r bu konuda bir ÅŸey sÃ¶yledi mi?", effect: +10, next: "'Bana kÄ±zdÄ±. \'Ã‡ocuklar her sesi canavar sanÄ±r\' dedi ama elleri titriyordu.'" },
                  { text: "O kapÄ±nÄ±n arkasÄ±nda ne olduÄŸunu biliyor musun?", effect: +5, next: "'HayÄ±r ama oradan hep soÄŸuk esiyor. Sanki Ã¶lÃ¼ bir nefes gibi.'" }
                ]
              }
            },
            { text: "Belki rÃ¼zgardÄ±r, gece gÃ¼rÃ¼ltÃ¼ler bÃ¼yÃ¼r.", effect: +3, next: "'RÃ¼zgar aÃ§Ä±n demez ki abi.' Ã‡ok ciddi bir yÃ¼zle bakÄ±yor sana." },
            { text: "Merak etme, biz kontrol altÄ±nda tutuyoruz.", effect: -5, next: "Omzunu silkiyor. 'Tamam... ama yine de Ã¶ÄŸrenmek isterim.'" }
          ]
        },
        {
          text: "O bÃ¼yÃ¼k adam BozkÄ±r var ya... DÃ¼n gece onu gÃ¶rdÃ¼m tekbaÅŸÄ±na oturmuÅŸ, elleri yÃ¼zÃ¼nde. AÄŸlÄ±yordu sanki.",
          choices: [
            { text: "Sen Ã§ok dikkatlisin Mira. Bu bir meziyettir.", effect: +20, next: "IÅŸÄ±l Ä±ÅŸÄ±l gÃ¼lÃ¼msÃ¼yor. 'Annem de Ã¶yle derdi! Abi sen benim arkadaÅŸÄ±m mÄ±sÄ±n?' Sesin dalga geÃ§er gibi deÄŸil, gerÃ§ekten soruyor." },
            { text: "Gece dÄ±ÅŸarÄ± Ã§Ä±kma, tehlikeli.", effect: -5, next: "'Biliyorum. Ama uyuyamadÄ±m ki.' Biraz susuyor." },
            { text: "BozkÄ±r hakkÄ±nda ne dÃ¼ÅŸÃ¼ndÃ¼ÄŸÃ¼nÃ¼ anlat.", effect: +15, next: "'O bÃ¼yÃ¼k ama Ã¼zgÃ¼n biri. BÃ¼yÃ¼kler Ã¼zgÃ¼n olunca hepsini iÃ§ine atar. Bu Ã§ok aÄŸÄ±r olmalÄ±.'" }
          ]
        }
      ],
      high: [
        {
          text: "Abi... Sana bir ÅŸey gÃ¶stereceÄŸim ama kimseye sÃ¶yleme. BÃ¼yÃ¼kler alÄ±r elinden.",
          isSpecial: true,
          choices: [
            { 
              text: "Sadece ben bakacaÄŸÄ±m, sÃ¶z.", 
              effect: +25, 
              next: "Cebinden kÃ¼Ã§Ã¼k, kÄ±rÄ±k bir rozet Ã§Ä±karÄ±yor. Ãœzerinde 'SEKTÃ–R-0' yazÄ±yor. 'DuvarÄ±n dibinde buldum. Yeni deÄŸil, Ã§ok eski. Ne yazÄ±yor abi?' diye soruyor.",
              followUp: {
                text: "Rozeti sana verirken fÄ±sÄ±ldamaya baÅŸlÄ±yor: 'AÅŸaÄŸÄ±ya giden gizli bir havalandÄ±rma var. Rozet oradaydÄ±. Ve sesler... BÃ¼yÃ¼k insanlarÄ±n sesleri. \'Proje SÄ±fÄ±r\' diyorlardÄ±. Bir de... \'GÃ¼mÃ¼ÅŸ\' kelimesini duydum. Ã‡ok korkunÃ§tu abi, sanki insan deÄŸillerdi.'",
                choices: [
                  { text: "BaÅŸka ne duydun? HatÄ±rlamaya Ã§alÄ±ÅŸ.", effect: +15, next: "'Sadece bir kadÄ±nÄ±n aÄŸladÄ±ÄŸÄ±nÄ± duydum... Ama sesi normal deÄŸildi. YankÄ±lanÄ±yordu.' Titremeye baÅŸlÄ±yor." },
                  { text: "O havalandÄ±rmadan uzak duracaksÄ±n, anladÄ±n mÄ±?", effect: +10, next: "'Tamam abi, sÃ¶z veriyorum. Zaten bir daha gitmeye Ã§ok korkuyorum.'" }
                ]
              }
            },
            { text: "GÃ¼veniyorum sana Mira.", effect: +18, next: "EtrafÄ±na bakÄ±nÄ±yor Ã¶nce. Sonra cebinden eskimiÅŸ bir kaÄŸÄ±t parÃ§asÄ± Ã§Ä±kÄ±yor." }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 1 â€” AÄA
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    aga_d1: {
      name: "AÄŸa",
      role: "GÃ¼n-1 Â· Kenar Mahalle Lideri",
      image: "/faces/d1_aga.png",
      voiceProfile: { pitch: 0.85, variation: 0.1 }, // Sert erkek sesi
      low: [
        {
          text: "Bak asker, burada kim olduÄŸumu bilmeden bana emirler verme. Ben bu semtte on yÄ±ldÄ±r dÃ¼zeni ben saÄŸladÄ±m.",
          choices: [
            { text: "Burada eski statÃ¼ler geÃ§erli deÄŸil.", effect: -10, next: "'Ã–yle mi? GÃ¶rÃ¼rÃ¼z.' SÄ±rtÄ±nÄ± dÃ¶nÃ¼yor ama gÃ¶zÃ¼nÃ¼n ucu hÃ¢lÃ¢ sende." },
            { text: "TecrÃ¼beni kullanmaya hazÄ±rÄ±m, anlat bakalÄ±m.", effect: +15, next: "Biraz gevÅŸiyor. 'Åimdi adam gibi konuÅŸtun. Otur, anlatalÄ±m.'" },
            { text: "Seni burada barÄ±ndÄ±rmak zor oldu, bunu bil.", effect: -5, next: "'Her ÅŸeyin bedeli var asker. Seninle de uzlaÅŸÄ±rÄ±z.'"}
          ]
        }
      ],
      medium: [
        {
          text: "Buradaki insanlarÄ±n yarÄ±sÄ± benim mahallenden. Ben onlarÄ± buraya taÅŸÄ±dÄ±m. Bir ÅŸey olursa ilk beni suÃ§layacaklar.",
          choices: [
            { 
              text: "Bu sorumluluk aÄŸÄ±r, bunu anlÄ±yorum.", 
              effect: +18, 
              next: "Uzun sÃ¼re bakÄ±yor. 'Ä°lk defa bunu anlayan biriyle konuÅŸuyorum.' Elini masaya koyuyor.",
              followUp: {
                text: "Masaya doÄŸru eÄŸiliyor. 'Sis gelmeden aylar Ã¶nce... SektÃ¶r-3\'e adam gÃ¶tÃ¼rdÃ¼ler. Tahliye tatbikatÄ± dediler. HiÃ§biri geri dÃ¶nmedi. O tatbikat tatbikat deÄŸildi asker. Bir ÅŸeyin baÅŸlangÄ±cÄ±ydÄ±. DÃ¼n revirdeki yaralÄ± asker de sayÄ±klÄ±yordu: Doktor Arzu bir ÅŸeyler bulmuÅŸ...'",
                choices: [
                  { text: "Doktor Arzu ne bulmuÅŸ olabilir?", effect: +15, next: "'Bunu ona sorman lazÄ±m. Ama yaralÄ± askerin sayÄ±klamalarÄ±ndan anladÄ±ÄŸÄ±m kadarÄ±yla kanla ilgili bir ÅŸey. Bir tÃ¼r baÄŸÄ±ÅŸÄ±klÄ±k...'" },
                  { text: "SektÃ¶r-3\'e gidenlere ne oldu sence?", effect: +10, next: "'Ã–lmediklerine eminim. KeÅŸke Ã¶lselerdi. Sis geldiÄŸinde ilk oradan patlak verdiÄŸini duydum.'" }
                ]
              }
            },
            { text: "O zaman onlarÄ± iyi yÃ¶net.", effect: +5, next: "'Bu iÅŸi bana Ã¶ÄŸretme, asker. Ben on yÄ±ldÄ±r yapÄ±yorum bunu.'" },
            { text: "Herkese eÅŸit davranmak zorundasÄ±n burada.", effect: -8, next: "'EÅŸitlik? Bu Ã§ocukÃ§a bir kavram. GÃ¼Ã§ dengesiyle Ã§alÄ±ÅŸÄ±r dÃ¼nya.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir ÅŸey sÃ¶yleyeceÄŸim ama kulak asacak mÄ±sÄ±n bilmiyorum. Bu sÄ±ÄŸÄ±nakta bir ajan var. DÄ±ÅŸarÄ±yla bilgi paylaÅŸÄ±yor.",
          isSpecial: true,
          choices: [
            { 
              text: "Ä°smini ver, araÅŸtÄ±rayÄ±m.", 
              effect: +22, 
              next: "'AdÄ± bilmiyorum. Ama geceleri Ã§Ä±kÄ±yor. Kuzey koridorunda. Ve geri dÃ¶ndÃ¼ÄŸÃ¼nde Ã¼zerinde toprak izi oluyor.' GÃ¶zleri kÄ±sÄ±lÄ±yor.",
              followUp: {
                text: "'Bir de frekans meselesi var. Eski bir radyom var, bilirsin. Her gece tam 03:14\'te aynÄ± cÄ±zÄ±rtÄ± giriyor. Biri dÄ±ÅŸarÄ±yla konuÅŸuyor. GeÃ§en gÃ¼n Ã§Ã¶pte yÄ±rtÄ±k bir kaÄŸÄ±t buldum. Koordinatlar var. SektÃ¶r-0\'Ä± iÅŸaret ediyor... Al, sende dursun.'",
                choices: [
                  { text: "03:14... Bu saati aklÄ±mda tutacaÄŸÄ±m.", effect: +15, next: "'TutmalÄ±sÄ±n. Ä°Ã§erideki dÃ¼ÅŸman dÄ±ÅŸarÄ±dakinden tehlikelidir asker. Uyumamaya alÄ±ÅŸ.'" },
                  { text: "Koordinatlarda ne olabilir?", effect: +10, next: "'HiÃ§bir fikrim yok. Ama temiz bir iÅŸ olmadÄ±ÄŸÄ± kesin. Oraya giden geri dÃ¶nmÃ¼yor.'" }
                ]
              }
            },
            { text: "Neden bana sÃ¶ylÃ¼yorsun bunu?", effect: +15, next: "'Ã‡Ã¼nkÃ¼ sen buradaki tek yetkilinin kapÄ±cÄ±sÄ±sÄ±n. Ve ben Ã¶lmek istemiyorum.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 2 â€” YARALANAN ASKER
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    wounded_soldier_d2: {
      name: "YaralÄ± Asker (Kerem)",
      role: "GÃ¼n-2 Â· Hayatta Kalan",
      image: "/faces/d2_soldier.png",
      low: [
        {
          text: "BÄ±rak beni... Sadece biraz uyumam lazÄ±m. SektÃ¶r-5'ten beri hiÃ§ uyumadÄ±m.",
          choices: [
            { text: "Sana Doktor Arzu'ya gÃ¶tÃ¼receÄŸim Ã¶nce.", effect: +12, next: "Ä°lk kez kalkÄ±p oturmaya Ã§alÄ±ÅŸÄ±yor. 'Tamam... AdÄ±m Kerem. Bunu sormadÄ±n ama sÃ¶ylesem iyi olur.' diye ekliyor." },
            { text: "Ne gÃ¶rdÃ¼n orada?", effect: +8, next: "'SektÃ¶r-5... KapÄ±sÄ±nda. KaÃ§arken yaralandÄ±m. Ã‡oÄŸu kaÃ§amadÄ±.' Sesi kÄ±rÄ±lÄ±yor." },
            { text: "Dinlene bilirsin ama gece nÃ¶bet tutman gerekebilir.", effect: -10, next: "SoÄŸuk bir bakÄ±ÅŸ fÄ±rlatÄ±yor. KonuÅŸmuyor." }
          ]
        }
      ],
      medium: [
        {
          text: "SektÃ¶r-5'te ne gÃ¶rdÃ¼ÄŸÃ¼mÃ¼ anlatmak zorundayÄ±m. Kimse sormadÄ± ama anlatmam gerek.",
          choices: [
            { 
              text: "Ben dinliyorum Kerem.", 
              effect: +20, 
              next: "'KapÄ± iÃ§ten aÃ§Ä±ldÄ±. DÄ±ÅŸarÄ±dan deÄŸil. Biri iÃ§eriden mandala dokundu. GÃ¶rdÃ¼m. Bir el, binanÄ±n iÃ§inden.' Elleri titremeye baÅŸlÄ±yor.",
              followUp: {
                text: "'O el... ParmaÄŸÄ±nda gÃ¼mÃ¼ÅŸ bir yÃ¼zÃ¼k vardÄ±. Ãœzerinde mavi bir Ã¼Ã§gen iÅŸlemesi. Ve kapÄ± aÃ§Ä±ldÄ±ÄŸÄ±nda rÃ¼zgarla birlikte bazÄ± belgeler uÃ§uÅŸtu. GÃ¶zÃ¼m takÄ±ldÄ±... Sadece iki kelime okuyabildim karanlÄ±kta: Proje GÃ¼mÃ¼ÅŸ.'",
                choices: [
                  { text: "Mavi Ã¼Ã§gen mi? Bu bir rÃ¼tbe iÅŸareti mi?", effect: +15, next: "'Askeri deÄŸil. Bilim bÃ¶lÃ¼mÃ¼nÃ¼n eski bir iÅŸareti. YÄ±llar Ã¶nce kaldÄ±rÄ±lmÄ±ÅŸtÄ±. Ya da biz Ã¶yle sanÄ±yorduk.'" },
                  { text: "Proje GÃ¼mÃ¼ÅŸ ne anlama geliyor?", effect: +10, next: "'HiÃ§bir fikrim yok. Ama o elin sahibi biliyor. Ve o el ÅŸu an aramÄ±zda olabilir.'" }
                ]
              }
            },
            { text: "Panikle yanlÄ±ÅŸ gÃ¶rmÃ¼ÅŸ olabilirsin.", effect: +5, next: "'KanÄ±mdaki adrenalini sorsana. Her ÅŸey Ã§ok netti, Ã§ok yavaÅŸ gibiydi. Bir el. Ä°Ã§ten.'" },
            { text: "Bu bilgi ne iÅŸimize yarar ÅŸimdi?", effect: -12, next: "'Belki yaramaz. Ama sÃ¶ylememek daha mÄ± iyi?' ArtÄ±k konuÅŸmuyor." }
          ]
        }
      ],
      high: [
        {
          text: "O elin kime ait olduÄŸunu her gece dÃ¼ÅŸÃ¼nÃ¼yorum. Ve bir isim geliyor. SÃ¶ylersem beni Ã¶ldÃ¼rÃ¼rler.",
          isSpecial: true,
          choices: [
            { 
              text: "Ben seni koruyacaÄŸÄ±m. SÃ¶yle.", 
              effect: +25, 
              next: "'KomutanlÄ±ktan bir isim. Albay Demir deÄŸil. AsÄ±l komutan. O gÃ¼n SektÃ¶r-5\'te neden yoktu biliyor musun? Ã‡Ã¼nkÃ¼ kapÄ± aÃ§Ä±lacaÄŸÄ±nÄ± Ã¶nceden biliyordu.' Sesi titriyor.",
              followUp: {
                text: "'O komutanÄ±n bir kÄ±zÄ± vardÄ±. YÄ±llar Ã¶nce kayboldu demiÅŸlerdi ama yalan. Onu SektÃ¶r-0\'a verdiler. Test deneklerinden biriydi. AdÄ± deÄŸiÅŸtirildi. Ben... ben onun ÅŸu an bu sÄ±ÄŸÄ±nakta olduÄŸundan ÅŸÃ¼pheleniyorum.'",
                choices: [
                  { text: "Kimi kastediyorsun? Sessiz KadÄ±n\'Ä± mÄ±?", effect: +20, next: "'Belki de... Ya da kendini hiÃ§ belli etmeyen birini. Dikkatli ol asker, kimse gÃ¶rÃ¼ndÃ¼ÄŸÃ¼ gibi deÄŸil.'" },
                  { text: "Bu sÄ±rrÄ± benimle paylaÅŸtÄ±ÄŸÄ±n iÃ§in saÄŸ ol.", effect: +10, next: "HafifÃ§e baÅŸÄ±nÄ± sallÄ±yor. 'SÄ±r paylaÅŸtÄ±kÃ§a aÄŸÄ±rlaÅŸÄ±r derler ama bende tam tersi oldu. Sonunda nefes alabildim.'" }
                ]
              }
            },
            { text: "Bu yÃ¼kÃ¼ taÅŸÄ±maya devam edemezsin.", effect: +15, next: "'Biliyorum. Her gece aynÄ± el. ArtÄ±k uyuyamÄ±yorum.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 3 â€” TÃœCCAR SALÄ°H
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    trader_salih_d3: {
      name: "TÃ¼ccar Salih",
      role: "GÃ¼n-3 Â· Gezgin TÃ¼ccar",
      image: "/faces/d3_trader.png",
      low: [
        {
          text: "Bak asker, ben buraya oturmaya gelmedim. KapÄ± aralandÄ±ÄŸÄ±nda ben yine yoldayÄ±m.",
          choices: [
            { text: "DÄ±ÅŸarÄ±da ne gÃ¶rdÃ¼n anlat.", effect: +12, next: "'Ã‡ok ÅŸey. Ve Ã§oÄŸu kÃ¶tÃ¼. Ama bazÄ± yerlerde hÃ¢lÃ¢ insan kokusu var. Nadir ama var.'" },
            { text: "Burada gÃ¼vendesin en azÄ±ndan.", effect: +8, next: "'GÃ¼venli mi? DurdukÃ§a tehlikeli olunur. Yolda olunca gÃ¼venli olunur.'" },
            { text: "Sana ihtiyaÃ§ duyabiliriz.", effect: +5, next: "'Ben her zaman iÅŸ yaparÄ±m asker. FiyatÄ± konuÅŸuruz.'" }
          ]
        }
      ],
      medium: [
        {
          text: "SektÃ¶r-5 dÃ¼ÅŸmeden iki gÃ¼n Ã¶nce ordaydÄ±m. Garip bir sakinlik vardÄ±. Ä°nsanlar birbirlerine bakÄ±yor ama gÃ¼lÃ¼msemiyordu.",
          choices: [
            { 
              text: "Ne tÃ¼r bir sakinlik?", 
              effect: +15, 
              next: "'Panik Ã¶ncesi sakinlik. GÃ¶rmÃ¼ÅŸÃ¼mdÃ¼r. GÃ¶zler boÅŸ ama huzurlu. Sis Ã¶ncesinde bÃ¶yle oluyor. SeÃ§ilenlerin kokusu deÄŸiÅŸiyor.' Sesi titriyor.",
              followUp: {
                text: "Sandalyeye yaslanÄ±p sana kurnazca bakÄ±yor. 'Sis aslÄ±nda ne biliyor musun? Bir tÃ¼r hafÄ±za silici. Ä°nsanlar delirmiyor, unutuyorlar. En sevdiklerinden baÅŸlayarak... Sen en son neyi unuttuÄŸunu hatÄ±rlÄ±yor musun?'",
                choices: [
                  { text: "Ben hiÃ§bir ÅŸeyi unutmadÄ±m.", effect: -5, next: "AcÄ± acÄ± gÃ¼lÃ¼yor. 'Ä°ÅŸte bu, unutmanÄ±n ilk aÅŸamasÄ±dÄ±r dostum.'" },
                  { text: "... Ailemin yÃ¼zÃ¼nÃ¼. GerÃ§ekten de hatÄ±rlayamÄ±yorum.", effect: +15, next: "'HoÅŸ geldin gerÃ§ek dÃ¼nyaya. Ä°ÅŸte bu yÃ¼zden maske satÄ±yorum... En azÄ±ndan yÃ¼zlerin bir ÅŸekli oluyor.'" }
                ]
              }
            },
            { text: "BurasÄ± farklÄ± mÄ±?", effect: +10, next: "'Åu an farklÄ±. Ama ne kadar sÃ¼rer bilmiyorum.'" },
            { text: "SektÃ¶r-5'i dÃ¼ÅŸÃ¼ren ne oldu?", effect: +12, next: "'KapÄ± iÃ§ten aÃ§Ä±ldÄ±. Ben de dÄ±ÅŸarÄ±dalÄ±kta fark ettim. KaÃ§mak iÃ§in iki dakikam oldu.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir harita vereceÄŸim. BulmayÄ± bekliyordum ama sens bu sektÃ¶rÃ¼n tek gÃ¼venilir ismi gibi gÃ¶rÃ¼nÃ¼yorsun.",
          isSpecial: true,
          choices: [
            { 
              text: "Bu neresi?", 
              effect: +25, 
              next: "'SektÃ¶r-3 altÄ±nda eski yeraltÄ± deposu. TÄ±bbi malzeme var, mÃ¼hÃ¼rlÃ¼ bÃ¶lÃ¼mde. Doktoruna ver. EÄŸer gÃ¼venilirse.' HaritayÄ± uzatÄ±yor.",
              followUp: {
                text: "HaritayÄ± verirken kolunu tutuyor sÄ±kÄ±ca. 'Oraya gidersen, D-Blok kapÄ±sÄ±na dikkat et. Ãœzerinde mavi bir Ã¼Ã§gen Ã§izili kapÄ±. Onu aÃ§ma. Ne duyarsan duy aÃ§ma. Tamam mÄ±?'",
                choices: [
                  { text: "Mavi Ã¼Ã§gen mi? Bu neyin iÅŸareti?", effect: +15, next: "'Bunu ben de bilmiyorum ama o kapÄ±nÄ±n arkasÄ±nda insan olmayan ÅŸeyler var. AÃ§ma.'" },
                  { text: "TÄ±bbi malzemeleri alÄ±p Ã§Ä±kacaÄŸÄ±m. SÃ¶z.", effect: +10, next: "'AkÄ±llÄ±ca. Zaten o karanlÄ±kta fazla kalmak istemezsin.'" }
                ]
              }
            },
            { text: "Neden benimle paylaÅŸÄ±yorsun?", effect: +18, next: "'Ã‡Ã¼nkÃ¼ kapÄ±da benim yÃ¼zÃ¼me bakarak doÄŸru sorularÄ± sordun. AnlarsÄ±n neyin deÄŸerli olduÄŸunu.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 3 â€” AÄLAYAN KIZ
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    crying_girl_d3: {
      name: "KÃ¼Ã§Ã¼k Ezel",
      role: "GÃ¼n-3 Â· Ã‡ocuk",
      image: "/faces/d3_crying_girl.png",
      low: [
        {
          text: "AÄŸabey... Neden burasÄ± bu kadar karanlÄ±k? IÅŸÄ±k yok mu?",
          choices: [
            { text: "Elektrik kÄ±sÄ±tlÄ± ama gÃ¼venliyiz.", effect: +10, next: "'Tamam.' Elleri kavuÅŸuyor. 'GÃ¶zlerim alÄ±ÅŸacak mÄ±?'" },
            { text: "KaranlÄ±k aslÄ±nda seni koruyor.", effect: +8, next: "GÃ¶zleri bÃ¼yÃ¼yor. 'GerÃ§ekten mi? Bunu dÃ¼ÅŸÃ¼nmemiÅŸtim abi.'" },
            { text: "Sorun yok, alÄ±ÅŸÄ±rsÄ±n.", effect: -3, next: "Sessizce oturuyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Abi BozkÄ±r'Ä± gÃ¶rdÃ¼m dÃ¼n gece. Ellerini yÃ¼zÃ¼ne kapatmÄ±ÅŸtÄ± ve omuzlarÄ± bÃ¶yle iniyordu. AÄŸlÄ±yordu muydu?",
          choices: [
            { text: "Sen harika bir gÃ¶zlemcisin Ezel.", effect: +20, next: "'Annem de Ã¶yle derdi! Abi sen gÃ¼zel birisin.' IÅŸÄ±l Ä±ÅŸÄ±l gÃ¼lÃ¼msÃ¼yor." },
            { text: "BÃ¼yÃ¼klerin bazen aÄŸlamasÄ± gerekir.", effect: +12, next: "'Babam da Ã¶yle yapardÄ±. Tek baÅŸÄ±na. Sonra gÃ¼lerdi sanki bir ÅŸey olmamÄ±ÅŸ gibi.' KÃ¼Ã§Ã¼k avuÃ§lar birleÅŸiyor." },
            { text: "Gece dÄ±ÅŸarÄ± Ã§Ä±kma.", effect: -5, next: "Biraz bÃ¼zÃ¼lÃ¼yor. 'Biliyorum abi.'" }
          ]
        }
      ],
      high: [
        {
          text: "Abi sana bir ÅŸey gÃ¶stereceÄŸim ama sÃ¶z ver, kimseye sÃ¶ylemeyeceksin.",
          isSpecial: true,
          choices: [
            { text: "SÃ¶z Ezel, sadece ben bakacaÄŸÄ±m.", effect: +25, next: "Cebinden kÃ¼Ã§Ã¼k kÄ±rÄ±k bir rozet Ã§Ä±karÄ±yor. Ãœzerinde 'SEKTÃ–R-0' yazÄ±sÄ± gÃ¶rÃ¼nÃ¼yor. 'DuvarÄ±n dibinde buldum. Ne yazÄ±yor abi?'" },
            { text: "GÃ¼veniyorum sana.", effect: +18, next: "EtrafÄ±na iyice bakÄ±ndÄ±ktan sonra kÃ¼Ã§Ã¼k bir ÅŸey uzatÄ±yor." }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 5 â€” GÃ–ZEVCÄ° NACÄ°YE
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    aunt_observer_d5: {
      name: "GÃ¶zcÃ¼ Naciye",
      role: "GÃ¼n-5 Â· SektÃ¶r HafÄ±zasÄ±",
      image: "/faces/d5_aunt_observer.png",
      low: [
        {
          text: "Sen kim oluyorsun ki benim kÃ¶ÅŸeme geliyorsun? YaÅŸlÄ±larÄ±n yeri burasÄ±.",
          choices: [
            { text: "Seninle konuÅŸmak istedim Naciye Teyze.", effect: +8, next: "'KonuÅŸ bakalÄ±m. Ama yavan ÅŸeyler sÃ¶yleme.'" },
            { text: "SÄ±ÄŸÄ±nakta nasÄ±lsÄ±n diye sormak istedim.", effect: +12, next: "'Kim sorar ki bunu bana... Otur bakalÄ±m.' Elleri onu iÅŸaret ediyor." },
            { text: "Genel durumu sormak istedim.", effect: +5, next: "'Genel mi? KÃ¶tÃ¼. Hep kÃ¶tÃ¼. Ama hÃ¢lÃ¢ buradayÄ±z.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Bu sektÃ¶rden geÃ§en insanlarÄ± bir yere yazÄ±yorum. Tarihleri unutulmasÄ±n diye. Kim geldi, neyi anlattÄ±.",
          choices: [
            { text: "Sen bu sektÃ¶rÃ¼n hafÄ±zasÄ±sÄ±n Naciye Teyze.", effect: +20, next: "Elleri titriyor biraz. 'Ä°lk defa biri bunu sÃ¶ylÃ¼yor. Ben... evet. Ben yazardÄ±m eskiden. KÃ¼Ã§Ã¼k bir dergide. Ä°nsanlarÄ±n hikayeleri. Sis aldÄ± hepsini.'" },
            { text: "Anlat bana bir hikaye.", effect: +15, next: "'Hangisini? Her biri ayrÄ± bir kitap. BugÃ¼n... Selim'in annesini anlatayÄ±m. Ä°leride bir ÅŸey yaklaÅŸtÄ±ÄŸÄ±nda Selim'i aklÄ±nda tut.'" },
            { text: "Bu tarihin ne faydasÄ± var?", effect: -15, next: "'Tarihi olmayan insanlar kÃ¶ksÃ¼z aÄŸaÃ§ gibidir evlat. Devrilirler.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana Ã§ok eski bir ÅŸeyi sÃ¶yleyeceÄŸim evlat. BurasÄ± daha Ã¶nce vardÄ±. FarklÄ± isimle.",
          isSpecial: true,
          choices: [
            { text: "NasÄ±l? Bu sektÃ¶r daha Ã¶nce mi vardÄ±?", effect: +22, next: "'SektÃ¶r-0 diyorlardÄ±. Neden sÄ±fÄ±r? Ã‡Ã¼nkÃ¼ deneydiler. Ä°lk kapÄ± sistemi burada kuruldu. Ve ilk ihanet de. O zamanki kapÄ±cÄ±... komutanÄ±n dedesiydi.' GÃ¶zlerini kapÄ±yor." },
            { text: "Kimse bilmiyor bunu deÄŸil mi?", effect: +15, next: "'Ben biliyorum. Ve sen biliyorsun artÄ±k. BazÄ± bilgiler harekete geÃ§meyi gerektirir, sadece saklamayÄ± deÄŸil.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 6 â€” KURTADAM BOZKIR
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    werewolf_bozkir_d6: {
      name: "BozkÄ±r",
      role: "GÃ¼n-6 Â· Kurt Adam MuhafÄ±z",
      image: "/faces/character_bozkir.png",
      low: [
        {
          text: "...[Derin bir homurtu] Sen burada ne iÅŸin var? Bu kÃ¶ÅŸe benim.",
          choices: [
            { text: "Seni gÃ¶rmek istedim BozkÄ±r.", effect: +8, next: "GÃ¶zlerini kÄ±stÄ±rÄ±yor. 'GÃ¶rmek mi? Yoksa kontrol etmek mi?' Sonra sÄ±rtÄ±nÄ± dÃ¶nÃ¼yor." },
            { text: "NasÄ±lsÄ±n diye sordum.", effect: +5, next: "Omzunu silkiyor. 'HÃ¢lÃ¢ diriyim. Bu yeterlidir.'" },
            { text: "Gece tehlikeli miydi?", effect: +3, next: "'Her gece tehlikelidir burada. Ben... fark etmemi saÄŸlar sadece.'" }
          ]
        },
        {
          text: "Bu Ã§adÄ±r benim iÃ§in Ã§ok kÃ¼Ã§Ã¼k. Ama dÄ±ÅŸarÄ±sÄ± artÄ±k gÃ¼venli deÄŸil benim gibi biri iÃ§in de...",
          choices: [
            { text: "BurasÄ± senin evin BozkÄ±r.", effect: +12, next: "Sana uzun sÃ¼re bakÄ±yor. Sonra sadece 'Ev...' diyor, sanki kelimeyi ilk kez duymuÅŸ gibi." },
            { text: "Neden dÄ±ÅŸarÄ± Ã§Ä±kmÄ±yorsun?", effect: +5, next: "'Ä°nsanlar gÃ¶rÃ¼rse panikler. Ve panik gÃ¼venliÄŸi Ã¶ldÃ¼rÃ¼r.'" },
            { text: "Seni umursamak zorunda deÄŸilim.", effect: -18, next: "Derin bir homurtu. Sonra tamamen sessizlik." }
          ]
        }
      ],
      medium: [
        {
          text: "Gece yarÄ±sÄ±... Tam hÃ¼cremde zincirlerimi kemirirken dÄ±ÅŸarÄ±da bir ÅŸey hissettim. Sis bulutunun tam kalbinde bir karaltÄ±, bir hareket vardÄ±. Ama hiÃ§ ayak sesi yoktu, tamamen sessizdi. Ormandaki yÄ±rtÄ±cÄ±lar gibi deÄŸil, metalik ve yapay bir sessizlik... Bu beni bile Ã¼rpertiyor asker.",
          choices: [
            { 
              text: "Ne tÃ¼r bir hareket? Anlat.", 
              effect: +15, 
              next: "'Ä°nsan eli deÄŸil. Metal gibi. Ã–lÃ¼ gibi. Onu kokladÄ±m. Sis kokuyor ama bu farklÄ±ydÄ±.'",
              followUp: {
                text: "YÃ¼zÃ¼nÃ¼ sana yaklaÅŸtÄ±rÄ±yor. Dev diÅŸleri loÅŸ Ä±ÅŸÄ±kta parlÄ±yor. 'TÃ¼nellerde de aynÄ± kokuyu almÄ±ÅŸtÄ±m. Biz SektÃ¶r-0'da araÅŸtÄ±rma yaparken o koku... deney tÃ¼plerinden geliyordu. Sis fÄ±rtÄ±nadan Ã¶nce kaza deÄŸildi asker. Birileri tÃ¼pleri aÃ§tÄ±. Kimin yaptÄ±ÄŸÄ±nÄ± biliyor musun?'",
                choices: [
                  { 
                    text: "Bunu sormak benim gÃ¶revim. Kim aÃ§tÄ±?", 
                    effect: +15, 
                    next: "HÄ±rÄ±ltÄ±lÄ± bir nefes alÄ±yor. 'Bir kadÄ±n. Siyah kÄ±yafetli. GÃ¶zleri sisin kendisi gibi griydi. Ve onunla Ã§alÄ±ÅŸan... yaÅŸlÄ± bir kadÄ±n daha vardÄ±.'",
                    followUp: {
                      text: "SÄ±rtÄ±nÄ± dÃ¶nÃ¼p omuzlarÄ±ndaki devasa, morarmÄ±ÅŸ penÃ§e ve kimyasal yanÄ±k izlerini gÃ¶steriyor. 'Bu yaralarÄ± gÃ¶rÃ¼yor musun? Bunlar sise ilk maruz kaldÄ±ÄŸÄ±mda, SektÃ¶r-0'dan kaÃ§arken oldu. O gri gÃ¶zlÃ¼ kadÄ±n arkamdan gÃ¼mÃ¼ÅŸ kurÅŸunlar ve zehirli gazlar attÄ±. Sisin iÃ§indeki o ilk deneyimim... HÃ¼crelerimin eridiÄŸini, etimin yeniden bir canavar gibi birleÅŸtiÄŸini hissettim. O acÄ±yÄ± tarif edemem asker. Her saniye kemiklerimin kÄ±rÄ±lÄ±p yeniden uzamasÄ±nÄ± hissettim.'",
                      choices: [
                        {
                          text: "NasÄ±l hayatta kalabildin bu mutasyondan?",
                          effect: +18,
                          next: "Derin bir hÄ±rÄ±ltÄ±yla gÃ¶ÄŸsÃ¼ne vuruyor. 'Ä°Ã§imdeki vahÅŸi irade sayesinde. Ã‡oÄŸu insan ilk beÅŸ dakikada bilincini kaybedip sise teslim olur. Ben acÄ±yÄ± bir silah gibi kullandÄ±m. Bedenim bir daha asla eskisi gibi olmadÄ±.'",
                          followUp: {
                            text: "Tekrar sana dÃ¶nÃ¼yor. 'YaralarÄ±m iyileÅŸmiyor. Sis her yoÄŸunlaÅŸtÄ±ÄŸÄ±nda bu izler kor gibi yanÄ±yor. Sanki dÄ±ÅŸarÄ±daki o lanet gaz, hÃ¼crelerimdeki canavarÄ± dÄ±ÅŸarÄ± Ã§aÄŸÄ±rÄ±yor gibi. Bazen... aynada kendime baktÄ±ÄŸÄ±mda insandan geriye ne kaldÄ±ÄŸÄ±nÄ± sorguluyorum.'",
                            choices: [
                              {
                                text: "Hâlâ içeride bir insan var Bozkır, bunu ben görüyorum.",
                                effect: +20,
                                next: "Gözlerindeki kırmızı parlama bir anlığına hafifliyor. 'Bunu duymak... uzun zamandır duyduğum en insani şey asker. Teşekkür ederim.'",
                                followUp: {
                                  text: "Derin bir iç çekiyor. 'Sisin içinde kaybolduğum o ilk saatlerde, bilincim tamamen karanlığa teslim olmak üzereydi. Ama zihnimde hep aynı anı dönüp duruyordu: Kızımın doğum günü, pastanın mumlarını üflerken çıkardığı o ince neşeli ses... Sisin soğuk pençeleri ruhumu sökmeye çalışırken ben o sese sarıldım. Sisin içindeki mutasyon sadece bedenimi bozmadı asker, ruhumu da sürekli çiğniyor. Gözlerimi kapattığımda o gri sisin bana fısıldadığını duyuyorum. Sana da fısıldıyor mu?'",
                                  choices: [
                                    {
                                      text: "Bana ne fısıldıyor Bozkır?",
                                      effect: +15,
                                      next: "'Bırak diyor... Savaşı bırak, acıyı bırak, teslim ol ve sisin huzuruna karış... Bunu o kadar tatlı fısıldıyor ki, insan bir anlığına her şeyden vazgeçmek istiyor. Ama uyanmalı ve direnmeliyiz. Eğer pes edersek, bizi insan yapan her şeyi kaybederiz. Yaralarımın sızlaması bana hala hayatta olduğumu ve hala savaşacak bir şeylerim olduğunu hatırlatıyor.'"
                                    },
                                    {
                                      text: "Ben sisin fısıltılarını duymuyorum, zihnim çelik gibi.",
                                      effect: +10,
                                      next: "'Güzel. Çelik irade bu dünyada en büyük kalkanındır. Ama dikkat et, sis çeliği bile paslandırır. Zihnini koru asker. Eğer bir gün zayıfladığını hissedersen, buraya gel. Sana o fısıltılara karşı nasıl kükreyeceğini öğretirim.'"
                                    }
                                  ]
                                }
                              },
                              {
                                text: "Sadece hayatta kalmaya odaklanmalÄ±yÄ±z.",
                                effect: +10,
                                next: "'DoÄŸru sÃ¶ylÃ¼yorsun. DuygusallÄ±k sÄ±ÄŸÄ±nakta lÃ¼kstÃ¼r. Sadece diÅŸlerim ve penÃ§elerim iÅŸe yarayacak.'"
                              }
                            ]
                          }
                        },
                        {
                          text: "Gri gÃ¶zlÃ¼ kadÄ±nÄ±n amacÄ± neydi sence?",
                          effect: +15,
                          next: "'Bizi dÃ¶nÃ¼ÅŸtÃ¼rmek. Sisle uyumlu, acÄ± hissetmeyen ve emirleri sorgulamayan bir ordu yaratmak istiyorlardÄ±. Ben onlarÄ±n ilk baÅŸarÄ±lÄ± kaÃ§ak deneyiyim.'",
                          followUp: {
                            text: "FÄ±sÄ±ldayarak devam ediyor: 'O tÃ¼nellerin derinliklerinde, sise direnÃ§li hale getirilen bazÄ± deneklerin kanÄ±nÄ±n saklandÄ±ÄŸÄ± bir kasa odasÄ± vardÄ±. EÄŸer o kasayÄ± bulabilirsek, Doktor Arzu belki bu mutasyonu durduracak bir serum Ã¼retebilir. Ama oraya gitmek intihar demektir.'",
                            choices: [
                              {
                                text: "O kasayÄ± bulmak iÃ§in canÄ±mÄ± tehlikeye atarÄ±m.",
                                effect: +25,
                                next: "PenÃ§esini omzuna koyuyor, canÄ±nÄ± acÄ±tmayacak kadar hafifÃ§e. 'Cesurca ama aptalca. Yine de, eÄŸer gidersen... tÄ±rnaklarÄ±mla kazÄ±dÄ±ÄŸÄ±m haritayÄ± aklÄ±nda tut. Kuzey deposunun hemen altÄ±nda.'"
                              },
                              {
                                text: "Bu iÅŸi doktorla konuÅŸup planlamalÄ±yÄ±z.",
                                effect: +15,
                                next: "'En doÄŸrusu. Arzu akÄ±llÄ± kadÄ±ndÄ±r. O tÃ¼nellerin tehliÄŸini en iyi o bilir.'"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  { 
                    text: "Komplo teorileriyle uÄŸraÅŸacak vaktim yok.", 
                    effect: -10, 
                    next: "'Vaktin kalmadÄ±ÄŸÄ±nda tÄ±rnaklarÄ±mÄ±n seni nasÄ±l uyardÄ±ÄŸÄ±nÄ± hatÄ±rlarsÄ±n. Git ÅŸimdi.'" 
                  }
                ]
              }
            },
            { text: "Belki hayal gÃ¶rÃ¼yorsundur.", effect: -8, next: "GÃ¶zleri daralÄ±yor. 'Ben hayal gÃ¶rmem. PenÃ§elerim gerÃ§ek. KokularÄ± da.'" },
            { text: "SektÃ¶r-7'yi koruyabilir misin?", effect: +10, next: "'Beden var. DiÅŸ var. Sabah 3'te ben uyanÄ±k olacaÄŸÄ±m. Sen deÄŸil.'" }
          ]
        },
        {
          text: "KÄ±zÄ±m... adÄ±nÄ± sÃ¶ylesem de bilmez artÄ±k. Sis gelmeden Ã¶nceki ben bir babaydÄ±. Åimdi ne olduÄŸumu, bu tÃ¼ylÃ¼ ve vahÅŸi gÃ¶rÃ¼nÃ¼ÅŸÃ¼mle onun karÅŸÄ±sÄ±na Ã§Ä±ksam beni tanÄ±yÄ±p tanÄ±mayacaÄŸÄ±nÄ± bilmiyorum asker.",
          choices: [
            { 
              text: "HÃ¢lÃ¢ o babasÄ±n BozkÄ±r. DeÄŸiÅŸmedi bu.", 
              effect: +20, 
              next: "Sesi kÄ±sÄ±lÄ±yor. PenÃ§esi taÅŸ duvara yaslanÄ±yor yavaÅŸÃ§a. 'Onu en son gÃ¶rdÃ¼ÄŸÃ¼mde beÅŸ yaÅŸÄ±ndaydÄ±. GÃ¶zleri tÄ±pkÄ± benim eski gÃ¶zlerim gibiydi... kahverengi, iÃ§i gÃ¼len gÃ¶zler.'",
              followUp: {
                text: "GÃ¶zlerini kapatÄ±p geÃ§miÅŸi hatÄ±rlar gibi yapÄ±yor. 'Sis ÅŸehri yutmaya baÅŸladÄ±ÄŸÄ±nda onu sÄ±ÄŸÄ±naÄŸa gÃ¶tÃ¼ren konvoyun peÅŸinden koÅŸtum. Ama yolda dÃ¶nÃ¼ÅŸtÃ¼m... Beni gÃ¶ren askerler ateÅŸ aÃ§tÄ±, kÄ±zÄ±mÄ±n koruyucularÄ± beni bir canavar sanÄ±p benden kaÃ§Ä±rdÄ± onu. Kendi kÄ±zÄ±mÄ± kurtarmaya Ã§alÄ±ÅŸÄ±rken onun gÃ¶zlerinde gÃ¶rdÃ¼ÄŸÃ¼m o dehÅŸet dolu bakÄ±ÅŸ... Ä°ÅŸte bu yaralardan daha Ã§ok acÄ±tÄ±yor asker. Beni bir canavar sandÄ±.'",
                choices: [
                  {
                    text: "KorkmuÅŸtu, ne olduÄŸunu anlayamadÄ±. Seni suÃ§lamaz.",
                    effect: +22,
                    next: "Derin bir nefes alÄ±yor, omuzlarÄ± Ã§Ã¶kÃ¼yor. 'UmarÄ±m Ã¶yledir. EÄŸer yaÅŸÄ±yorsa, ÅŸimdi on yaÅŸÄ±nda olmalÄ±. Onu bulacaÄŸÄ±ma dair kendime sÃ¶z verdim. Ama bu canavar haliyle onu bulsam ne yapacaÄŸÄ±m?'",
                    followUp: {
                      text: "Sana doÄŸru bir adÄ±m atÄ±yor. 'Bana yardÄ±m edebilir misin asker? EÄŸer diÄŸer sektÃ¶rlerden haber alÄ±rsan, adÄ±nÄ± araÅŸtÄ±rÄ±r mÄ±sÄ±n? AdÄ± Selin. Selin Bozkurt. Benim eski soyadÄ±m... Canavar olmadan Ã¶nceki soyadÄ±m.'",
                      choices: [
                        {
                          text: "Söz veriyorum Bozkır, Selin'i bulmak için her yolu deneyeceğim.",
                          effect: +25,
                          next: "Sana minnettar bir bakış atıyor. 'Bu söz... bu sığınaktaki tüm gümüşlerden daha değerli benim için. Teşekkür ederim asker.'",
                          followUp: {
                            text: "Bozkır gözlerini sana doğru çeviriyor, sesinde nadir görülen bir yumuşaklık var. 'Eğer onu bulursan... ona vermeni istediğim bir şey var.' Pençesini sırtındaki küçük, yırtık bir cebe atıyor ve oradan pirinçten yapılmış, kenarları aşınmış eski bir köstekli saat çıkarıyor. 'Bu babamdan kalmıştı. Arkasında küçük bir çizik var, Selin'le birlikte o çiziği tırnağımızla yapmıştık. Ona bunu ver ve de ki: \"Baban hala nöbette. Sisin içinde olsa bile seni koruyor.\" Sence bunu ona ulaştırabilir misin asker?'",
                            choices: [
                              {
                                text: "Bu saati alacağım ve ne pahasına olursa olsun ona ulaştıracağım.",
                                effect: +25,
                                next: "'Sana minnettarım. Artık ölsem de gözüm arkada kalmaz. Bu saat benim insanlığımdan geriye kalan son parça. Onu sana emanet ediyorum.'",
                                followUp: {
                                  text: "Saati sana uzatırken elleri titriyor. 'Selin çok akıllı bir çocuktur. Eğer yaşıyorsa, muhtemelen diğer sığınaklardaki çocuklara yardım ediyordur. Resim yapmayı çok severdi. Özellikle de gökyüzünü... Gökyüzünün mavi olduğu zamanları hatırlayan son nesil onlar. Sence bir gün gökyüzü yeniden mavi olacak mı asker, yoksa sonsuza dek bu gri lanete mi mahkumuz?'",
                                  choices: [
                                    {
                                      text: "Bir gün sisi tamamen dağıtacağız, gökyüzü yeniden mavi olacak.",
                                      effect: +20,
                                      next: "'Umut... İçimi ısıtıyor bu sözler. Eğer o günü göremezsem bile Selin'in o maviliği görmesi için son nefesime kadar kapıyı savunacağım.'"
                                    },
                                    {
                                      text: "Gerçekçi olmalıyız Bozkır, bu sis kalıcı gibi görünüyor.",
                                      effect: +5,
                                      next: "'Acı ama gerçekçi bir bakış açısı. Yine de... Selin'in hayallerini korumak için yalanlara sarılmak gerekse bile sarılacağım. Savaşmak için bir yalana ihtiyacım varsa, varsın öyle olsun.'"
                                    }
                                  ]
                                }
                              },
                              {
                                text: "Saati bende tutamam, ama onu bulduğumda senin adına konuşacağım.",
                                effect: +10,
                                next: "'Bu da yeterli asker. Sadece adımı bilsin, onu unutmadığımı bilsin yeter.'"
                              }
                            ]
                          }
                        },
                        {
                          text: "EÄŸer hayattaysa mutlaka bir yerlerde izi vardÄ±r, bakarÄ±z.",
                          effect: +12,
                          next: "'Buna da ÅŸÃ¼kÃ¼r. En azÄ±ndan tamamen unutulmayacak.'"
                        }
                      ]
                    }
                  },
                  {
                    text: "KÄ±zÄ±nÄ± bulduÄŸumuzda seni bu halinle kabullenecektir.",
                    effect: +15,
                    next: "'Ã‡ocuklar saf sevgiyle bakar derler. UmarÄ±m o sis onun da kalbini karartmamÄ±ÅŸtÄ±r.'"
                  }
                ]
              }
            },
            { 
              text: "KÄ±zÄ±n nerede ÅŸimdi?", 
              effect: +10, 
              next: "'Bilmiyorum. SektÃ¶r-5 tahliyesinde kayboldu. Belki baÅŸka bir sÄ±ÄŸÄ±naktadÄ±r. Belki de... sise teslim olmuÅŸtur.' GÃ¶zleri doluyor.",
              followUp: {
                text: "'EÄŸer sise teslim olduysa... Vera'nÄ±n kÃ¶lelerinden biri olmuÅŸ demektir. Onu o halde gÃ¶rÃ¼rsem, kendi ellerimle acÄ±sÄ±na son vermek zorunda kalÄ±rÄ±m. Bir babanÄ±n yaÅŸayabileceÄŸi en bÃ¼yÃ¼k ceza bu olurdu asker.'",
                choices: [
                  {
                    text: "BÃ¶yle dÃ¼ÅŸÃ¼nme, Ã¼midini kaybetme.",
                    effect: +12,
                    next: "'Ãœmit... bu dÃ¼nyada en son Ã¶len ÅŸeydir. Ama burada Ã¶lÃ¼m Ã§ok hÄ±zlÄ±.'"
                  },
                  {
                    text: "Ã–yle bir durum olursa ne yapacaÄŸÄ±nÄ± biliyorsun.",
                    effect: -5,
                    next: "HomurdanÄ±yor. 'Bilmek baÅŸka, yapabilmek baÅŸka asker.'"
                  }
                ]
              }
            },
            { text: "GeÃ§miÅŸ geÃ§miÅŸte kaldÄ±.", effect: -10, next: "Sert bir bakÄ±ÅŸ. 'Senin iÃ§in belki. Ama benim geÃ§miÅŸim hÃ¢lÃ¢ bu penÃ§elerde atÄ±yor.'" }
          ]
        }
      ],
      high: [
        {
          text: "Seninle bir ÅŸey paylaÅŸacaÄŸÄ±m. Bunu kimseye sÃ¶ylemedim. SÃ¶ylemek zorundayÄ±m.",
          isSpecial: true,
          choices: [
            { text: "Dinliyorum.", effect: +20, next: "'Sis... bazÄ±larÄ±nÄ± seÃ§iyor. Rastgele deÄŸil. Ben bunu hissediyorum kokulardan. SeÃ§ilenlerin kokusu deÄŸiÅŸiyor. Sen bu kokuyu taÅŸÄ±mÄ±yorsun. Ama iÃ§eride taÅŸÄ±yanlar var.' GÃ¶zleri doÄŸrudan gÃ¶zÃ¼ne kilitleniyor." },
            { text: "Bu nasÄ±l bir bilgi?", effect: +12, next: "'Beni yaratan bilgi. Sis beni dÃ¶nÃ¼ÅŸtÃ¼rdÃ¼ Ã§Ã¼nkÃ¼ ben seÃ§ilmedim. Ben reddettim. Beden bedelini Ã¶dedi ama akÄ±l kaldÄ±.'" }
          ]
        },
        {
          text: "EÄŸer bir gece iÃ§eride alarm duyarsan ve ben oradaysam... benden korkma. Ben kontrol edebiliyorum. Åimdilik.",
          choices: [
            { text: "Sana gÃ¼veniyorum.", effect: +25, next: "Ä°lk kez gerÃ§ek anlamda sana bakÄ±yor. PenÃ§esiyle sol gÃ¶ÄŸsÃ¼ne vuruyor yavaÅŸÃ§a. 'Bu... teÅŸekkÃ¼r.' diyor ve kÃ¶ÅŸesine Ã§ekiliyor." },
            { text: "'Åimdilik' kelimesi beni korkutuyor.", effect: +5, next: "'Korku saÄŸlÄ±klÄ±dÄ±r. Beni kÃ¶r bir gÃ¼venle kabul etme. Korkunu bilgeliÄŸe dÃ¶nÃ¼ÅŸtÃ¼r.' Sonra karanlÄ±ÄŸa bakÄ±yor." }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 6 â€” DOKTOR ARZU
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    doctor_arzu_d6: {
      name: "Doktor Arzu",
      role: "GÃ¼n-6 Â· SektÃ¶r Tabibi",
      image: "/faces/character_arzu.png",
      low: [
        {
          text: "Ã‡ok yorgunum. Sekiz saat duraksÄ±z revir. Ä°laÃ§ bitmiÅŸ, alet kÄ±rÄ±k...",
          choices: [
            { text: "NasÄ±l yardÄ±mcÄ± olabilirim?", effect: +10, next: "Ã‡antasÄ±na bakÄ±yor. 'Åimdilik bir ÅŸey yok. Ama destek... Ã¶nemli.' HafifÃ§e gÃ¼lÃ¼msÃ¼yor." },
            { text: "Elimden geleni yaparÄ±m.", effect: +8, next: "'Biliyorum. Herkese aynÄ± ÅŸeyi sÃ¶ylÃ¼yorum: sabÄ±rlÄ± ol. Ama artÄ±k inandÄ±rÄ±cÄ± gelmiyor bana da.'" },
            { text: "Sistem yetersiz, elinden geleni yapÄ±yorsun.", effect: +5, next: "'Yeterli deÄŸil bu. Ama devam etmekten baÅŸka seÃ§enek yok.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Selim'in kanÄ±nda bir ÅŸey var. SÄ±radan antikorlar deÄŸil. KaranlÄ±kta parlÄ±yor... Mikroskop olmadan bile fark ettim.",
          choices: [
            { 
              text: "Bu ne anlama geliyor?", 
              effect: +15, 
              next: "'Sis aÅŸÄ±sÄ±na ulaÅŸabiliriz belki. Ama laboratuvar lazÄ±m. Ve zaman. Ve biri buna inanmalÄ±.' GÃ¶zleri umut dolu bakÄ±yor.",
              followUp: {
                text: "Sana doÄŸru eÄŸiliyor. 'Sistemde kayÄ±tlÄ± olmayan bir yeraltÄ± laboratuvarÄ± var. SektÃ¶r-3'Ã¼n altÄ±nda. Birileri kasten kilitledi. Oraya girip eski kan Ã¶rneklerini almalÄ±sÄ±n.'",
                choices: [
                  {
                    text: "Sektör-3'ün altı mı? Orayı Salih de bahsetmişti.",
                    effect: +15,
                    next: "'Salih mi? O yaşlı kurt çok şey biliyor. Eğer o da orayı gösteriyorsa, doğru yoldayız demektir.'",
                    followUp: {
                      text: "Arzu çenesini sıvazlıyor. 'Sektör-3'ün altındaki o laboratuvar sıradan bir tıbbi depo değil. Sisin ilk yayılmaya başladığı yer orasıydı. Proje Sıfır orada başladı. O tünellerin derinliklerinde ne tür sırlar saklandığını tahmin bile edemezsin. Deney kayıtları, ilk mutasyon örnekleri... Hatta belki de sisin kaynağını tamamen yok edecek bir formül. Oraya gitmeye cesaretin var mı asker?'",
                      choices: [
                        {
                          text: "Sektör-7 ve tüm insanlık için oraya ineceğim. Ne yapmam gerekiyor?",
                          effect: +20,
                          next: "'Bu cesaretin beni duygulandırıyor. Sana laboratuvarın giriş kartını vereceğim. Yıllar önce bir meslektaşım kaçarken bana bırakmıştı. Ama unutma, o laboratuvarın koridorlarında sise maruz kalmış ve tamamen canavara dönüşmüş eski personel olabilir.'",
                          followUp: {
                            text: "Gözlerini kapatıp derin bir nefes alıyor. 'O meslektaşımın adı Leyla'ydı. Laboratuvar sızdığında kendini içeri kilitledi. Eğer orada onun bedenini veya günlüğünü bulursan... Lütfen onu huzura kavuştur ve günlüğü bana getir. Bu benim için kişisel bir borç. Bunu yapabilir misin?'",
                            choices: [
                              {
                                text: "Söz veriyorum Arzu, Leyla'yı bulup günlüğünü sana getireceğim.",
                                effect: +25,
                                next: "'Teşekkür ederim asker. Bu bilgi ve senin iraden, bu karanlık çağda sahip olduğumuz tek gerçek ışık. Kendine dikkat et.'"
                              },
                              {
                                text: "Önceliğim sadece tıbbi malzemeler ve örnekler olacak.",
                                effect: +10,
                                next: "'Bunu da anlıyorum. Hayatta kalmak önceliktir. Ama Leyla'nın hatırası... Neyse, sen yine de gözünü açık tut.'"
                              }
                            ]
                          }
                        },
                        {
                          text: "Şu anki savunmamıza odaklanmalıyız, aşağısı intihar demek.",
                          effect: +5,
                          next: "'Belki de haklısın. Ama duvarların arkasında beklemek de bizi sadece yavaş yavaş ölüme götürür. Yine de kararına saygı duyuyorum.'"
                        }
                      ]
                    }
                  },
                  { text: "Bu Ã§ok tehlikeli, Arzu.", effect: -5, next: "'DÄ±ÅŸarÄ±daki sis tehlikeli deÄŸil mi? EÄŸer adÄ±m atmazsak yavaÅŸ yavaÅŸ Ã¶leceÄŸiz. Karar senin.'" }
                ]
              }
            },
            { text: "Tehlikeli mi bu durum?", effect: +8, next: "'Bilinmeyeni sÃ¶yleyemem. Ama ÅŸu an tek umudumuz bu. Bence risk almaya deÄŸer.'" },
            { text: "HenÃ¼z inanamÄ±yorum buna.", effect: -5, next: "HafifÃ§e inliyor. 'AnlarÄ±m. Ben de baÅŸta inanamadÄ±m.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir ÅŸey sÃ¶yleyeceÄŸim. KomutanlÄ±ktan sakladÄ±m. Ã‡Ã¼nkÃ¼ panik Ã§Ä±kar.",
          isSpecial: true,
          choices: [
            { 
              text: "SÃ¶yle Arzu, dinliyorum.", 
              effect: +20, 
              next: "'Gri Ã¶ksÃ¼rÃ¼k sadece bir semptom deÄŸil. Mutasyon aÅŸamalÄ±. Ä°lk iki hafta fark edilmiyor. Ä°Ã§erimizde zaten taÅŸÄ±yanlar olabilir. Ama Selim'in kanÄ± bize zaman tanÄ±yabilir. Ã‡alÄ±ÅŸmama izin ver.'",
              followUp: {
                text: "Sesi bir fÄ±sÄ±ltÄ±ya dÃ¶nÃ¼ÅŸÃ¼yor. 'EÄŸer komutanlÄ±k bunu Ã¶ÄŸrenirse, Selim'i bizden alÄ±rlar. Denek yaparlar. Onu korumamÄ±z lazÄ±m. Ve benim... sessizce Ã§alÄ±ÅŸabileceÄŸim gÃ¼venli bir alana ihtiyacÄ±m var.'",
                choices: [
                  {
                    text: "Sana güvenli bir alan sağlayacağım.",
                    effect: +15,
                    next: "'Teşekkür ederim. Sana güvenebileceğimi biliyordum. Selim'in gözlerindeki ışık sönmemeli.'",
                    followUp: {
                      text: "Fısıldayarak devam ediyor: 'Sığınak sakinlerinden bazıları da durumun farkında. Bozkır mesela... Onun mutasyonu sise karşı inanılmaz bir direnç geliştirmiş. Onun kan örneklerini de incelemek istiyorum ama benden kaçıyor. Canavar gibi görünmekten utanıyor ve revire girmeyi reddediyor. Eğer onunla konuşup bana yardım etmesini sağlayabilirsen, belki de mutasyonu tamamen geri çevirebilecek bir tedavi bulabiliriz. Bozkır'ı ikna edebilir misin?'",
                      choices: [
                        {
                          text: "Bozkır'la konuşup onu ikna etmeye çalışacağım.",
                          effect: +20,
                          next: "'Harika! O sana güveniyor, bunu görebiliyorum. Onun kanı ve Selim'in hücreleri bir araya gelirse, sis mutasyonuna karşı nihai bir kalkan üretebiliriz. Bu insanlığın geri dönüş bileti olabilir.'",
                          followUp: {
                            text: "Arzu yavaşça elini omzuna koyuyor. 'Peki ya sen asker? Herkesi kurtarmaya çalışırken kendi zihnini nasıl koruyorsun? Sisin senin üzerinde de etkileri olduğunu biliyorum. Gözlerindeki o yorgunluk... Bazen senin için de endişeleniyorum. Kendine bir şey olmasına izin verme, tamam mı?'",
                            choices: [
                              {
                                text: "Benim için endişelenme Arzu, bu sektörü korumak benim tek amacım.",
                                effect: +15,
                                next: "'Biliyorum ama kahramanlar da insandır. Sana bir doz nöro-sakinleştirici yazıyorum. İhtiyacın olduğunda kullan. Hayatta kalmana ihtiyacımız var.'"
                              },
                              {
                                text: "Bazen zihnimin bulandığını hissediyorum, ama dayanmak zorundayım.",
                                effect: +22,
                                next: "'Bu dürüstlüğün çok değerli. Sis zihnin zayıf anlarını kollar. Sana özel bir arındırıcı serum hazırlayacağım. Zihnini berrak tutacaktır. Yalnız değilsin, bunu unutma.'"
                              }
                            ]
                          }
                        },
                        {
                          text: "Bozkır'ı zorlamak istemiyorum, o zaten yeterince acı çekiyor.",
                          effect: +10,
                          next: "'Haklısın, ona saygı duymalıyız. Ama eğer kendi isteğiyle gelirse kapımız her zaman açık. Onun acısını dindirmek benim de en büyük isteğim.'"
                        }
                      ]
                    }
                  },
                  { text: "KomutanlÄ±k zaten biliyor olabilir.", effect: +10, next: "'O zaman acele etmeliyiz. Her saniye aleyhimize iÅŸliyor.'" }
                ]
              }
            },
            { text: "Bu bilgiyi nasÄ±l yÃ¶netmeliyim?", effect: +15, next: "'Kimseye sÃ¶yleme henÃ¼z. PaniÄŸi yÃ¶netemeyiz ÅŸu an. Ben seni haberdar ederim.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 6 â€” DÃœRÃœST VAKÄ°F
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    honesty_vakif_d6: {
      name: "VakÄ±f",
      role: "GÃ¼n-6 Â· DÃ¼rÃ¼st TanÄ±k",
      image: "/faces/d6_honesty_man.png",
      low: [
        {
          text: "Ben her ÅŸeyi gÃ¶rdÃ¼m. Her ÅŸeyi. Ama kimse sormadÄ±.",
          choices: [
            { text: "Ben soruyorum. Anlat.", effect: +15, next: "'Ä°lk defa biri sormak iÃ§in geliyor.' Derin bir nefes alÄ±yor. 'Tamam. Ama uzun sÃ¼rer.'" },
            { text: "Åimdi zaman yok, kÄ±saca anlat.", effect: +3, next: "'KÄ±sasÄ± yok. Bir ÅŸeyler Ã¶nemli, kÄ±saltÄ±rsan anlam Ã§Ä±kmaz.'" },
            { text: "Herkes bir ÅŸeyler gÃ¶rdÃ¼ÄŸÃ¼nÃ¼ sÃ¶ylÃ¼yor.", effect: -10, next: "'Ben gerÃ§eÄŸi sÃ¶ylÃ¼yorum. Yalan sÃ¶yleyenleri de gÃ¶rÃ¼rsÃ¼n zamanla.'" }
          ]
        }
      ],
      medium: [
        {
          text: "O gÃ¼n sektÃ¶rÃ¼n giriÅŸ koridorunda bir toplantÄ± vardÄ±. Gizli. DÃ¶rt kiÅŸi. Biri albaya benziyordu.",
          choices: [
            { 
              text: "YÃ¼zlerini gÃ¶rdÃ¼n mÃ¼?", 
              effect: +18, 
              next: "'Ä°kisini. Biri sizdeki gÃ¶zetleme subayÄ±na benziyordu. Ã–teki... Ã§ok uzaktaydÄ±m. Ama ÅŸunu sÃ¶yleyeyim: hepsinde aynÄ± rozet vardÄ±. Mavi Ã¼Ã§gen.'",
              followUp: {
                text: "Titrek elleriyle bir kaÄŸÄ±t uzatÄ±yor. Ãœzerinde mavi bir Ã¼Ã§gen Ã§izili. 'Bu iÅŸaret... SektÃ¶r-0 Ã§Ã¶ktÃ¼ÄŸÃ¼nde de oradaydÄ±. Onlar sisle savaÅŸmÄ±yor asker. Sisle Ã§alÄ±ÅŸÄ±yorlar.'",
                choices: [
                  { text: "Sisle mi Ã§alÄ±ÅŸÄ±yorlar? NasÄ±l?", effect: +15, next: "'Bir tÃ¼r kontrol mekanizmasÄ±... Ä°nsanlarÄ± seÃ§iyorlar. Direnenleri yok ediyorlar. Ä°taat edenleri dÃ¶nÃ¼ÅŸtÃ¼rÃ¼yorlar.'" },
                  { text: "Bu iÅŸareti daha Ã¶nce bir yerde gÃ¶rmÃ¼ÅŸtÃ¼m.", effect: +10, next: "'Uzak dur o iÅŸaretten. GÃ¶rdÃ¼ÄŸÃ¼n yerde arkanÄ± dÃ¶n ve koÅŸ.'" }
                ]
              }
            },
            { text: "Bunu neden ÅŸimdiye kadar sÃ¶ylemedin?", effect: +8, next: "'Kim soracaktÄ± ki? Ben gidip anlatacak olsam kafamÄ± yerlerdi.'" },
            { text: "Belki hayal gÃ¶rmÃ¼ÅŸsÃ¼ndÃ¼r.", effect: -12, next: "'Hayal mi? KalÃ§amdaki kurÅŸun da mÄ± hayal? Bana sormak iÃ§in geleceksin, sonra da hayal diyeceksin.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir isim vereceÄŸim. Bu ismi duyar duymaz bir ÅŸeyler hissedeceksin. Ã‡Ã¼nkÃ¼ o zaten sistem iÃ§inde.",
          isSpecial: true,
          choices: [
            { 
              text: "SÃ¶yle.", 
              effect: +25, 
              next: "'TeÄŸmen RÄ±za. GÃ¶zetleme subayÄ±. Gece mesaisi sÄ±rasÄ±nda sinyalleri yÃ¶nlendiriyor. DÄ±ÅŸarÄ±ya. Her gece 03:14'te. Ben saydÄ±m.'",
              followUp: {
                text: "GÃ¶zlerini sÄ±kÄ±ca kapatÄ±yor. '03:14... Bu saati aklÄ±ndan Ã§Ä±karma. O saatte dÄ±ÅŸ kapÄ±nÄ±n kilit mekanizmasÄ± beÅŸ saniyeliÄŸine devre dÄ±ÅŸÄ± kalÄ±yor. Biri, ya da bir ÅŸey iÃ§eri giriyor olabilir.'",
                choices: [
                  { text: "Bunu bu gece kontrol edeceÄŸim.", effect: +20, next: "'Dikkatli ol asker. O saatte karanlÄ±kta dolaÅŸan sadece RÄ±za deÄŸil. Sis de iÃ§eri sÄ±zÄ±yor.'" },
                  { text: "RÄ±za ile konuÅŸacaÄŸÄ±m.", effect: -15, next: "'Deli misin sen? Seni o saniyede harcar. GÃ¶zlemle, ama yaklaÅŸma.'" }
                ]
              }
            },
            { text: "Bu kesin mi?", effect: +18, next: "'Kesin. On iki gece saydÄ±m. Her gece 03:14. Bunu baÅŸka kimse bilmiyor.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 1 â€” YAÅLI MADENCÄ°
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    miner_d1: {
      name: "YaÅŸlÄ± Madenci",
      role: "GÃ¼n-1 Â· Emektar Ä°ÅŸÃ§i",
      image: "/faces/d1_miner.png",
      low: [
        {
          text: "KÄ±rk yÄ±l bu topraÄŸa aÅŸaÄŸÄ±dan baktÄ±m. Åimdi yukarÄ±dan bakÄ±yorum. Fark yok asker, yer altÄ± da ÅŸu an olduÄŸu gibi karanlÄ±ktÄ±.",
          choices: [
            { 
              text: "Ne gÃ¶rdÃ¼nÃ¼z yer altÄ±nda?", 
              effect: +12, 
              next: "Ellerini masaya dÃ¶ÅŸÃ¼yor. 'SektÃ¶r-0 altÄ±nda tÃ¼neller vardÄ±. Kimsenin bilmediÄŸi. Bize 'kÃ¶mÃ¼r arama' dediler. Ne aradÄ±ÄŸÄ±mÄ±zÄ± bilmiyorduk.'",
              followUp: {
                text: "Ä°htiyar etrafÄ±na bakÄ±nÄ±yor ve sesini alÃ§altÄ±yor: 'Ama kayalarÄ±n arasÄ±nda kÃ¶mÃ¼rden daha siyah, damar gibi atan bir maddeler bulduk. Dokunanlar deÄŸiÅŸmeye baÅŸladÄ±...'",
                choices: [
                  { text: "NasÄ±l deÄŸiÅŸtiler? Fiziksel olarak mÄ±?", effect: +10, next: "'Ã–nce Ã¶ksÃ¼rÃ¼k, sonra gÃ¶zleri bulandÄ±. En son... bizi tanÄ±mamaya baÅŸladÄ±lar. OnlarÄ± orada bÄ±rakmak zorunda kaldÄ±m.'" },
                  { text: "Bunu yetkililere bildirdiniz mi?", effect: -5, next: "AcÄ± acÄ± gÃ¼lÃ¼msÃ¼yor. 'Yetkililer mi? O tÃ¼nelleri zaten onlar kazdÄ±rÄ±yordu asker...'" }
                ]
              }
            },
            { text: "BurasÄ± gÃ¼venli, dinlenin biraz.", effect: +5, next: "'GÃ¼venli mi?' GÃ¼ldÃ¼ yalnÄ±zca. Ama iyi anlamda deÄŸil." },
            { text: "Åu an Ã¶nemli olan kÃ¶mÃ¼r deÄŸil, hayatta kalmak.", effect: -8, next: "'Sen de Ã¶ÄŸrenirsin biraz sabreyle. Her ÅŸeyin sonu kÃ¶mÃ¼r gibi yanÄ±yor zaten.'" }
          ]
        }
      ],
      medium: [
        {
          text: "SektÃ¶r-0 Ã§Ã¶ktÃ¼ÄŸÃ¼nde ben oradaydÄ±m. Otuz yÄ±l Ã¶nceydi. Ä°Ã§eride kimyasal vardÄ±, asker. Bize 'yer gazÄ±' dediler. Ama rengi yoktu. Renksiz ÅŸeylere dikkat et.",
          choices: [
            { 
              text: "O kimyasalÄ±n sis ile ilgisi olabilir mi?", 
              effect: +20, 
              next: "'Birden anladÄ±n. Ben yirmi yÄ±l dÃ¼ÅŸÃ¼ndÃ¼m bunu.' Sesi tiz Ã§Ä±kÄ±yor. 'AynÄ± koku. AynÄ± uyuÅŸma. Ama devlet kabul etmez. HiÃ§ etmedi.'",
              followUp: {
                text: "Ã–ksÃ¼rÃ¼k krizine giriyor. 'Siyah sÄ±vÄ±... Sadece bir yakÄ±t deÄŸildi. Kan gibi akÄ±yordu. CanlÄ±ydÄ±. Bize kazdÄ±rdÄ±klarÄ± ÅŸey bir maden deÄŸildi evlat. Uyuyan bir ÅŸeyi uyandÄ±rdÄ±k.'",
                choices: [
                  { text: "Uyuyan bir ÅŸey mi? Bir varlÄ±k mÄ±?", effect: +15, next: "'Ben ona varlÄ±k demem. O bir zihin. Sis, onun sadece nefesi.' GÃ¶zlerindeki dehÅŸet bÃ¼yÃ¼yor." },
                  { text: "Bu sadece senin kuruntun olabilir.", effect: -10, next: "'KeÅŸke Ã¶yle olsaydÄ±... KeÅŸke sadece benim aklÄ±mÄ±n bir oyunu olsaydÄ±.'" }
                ]
              }
            },
            { text: "Devlet Ã¶rtbas etmiÅŸ olabilir mi?", effect: +15, next: "'Ã–rtbas deÄŸil, planlÄ±. Beni dinle: SektÃ¶r-0 tÃ¼nellerinden siyah bir sÄ±vÄ± aktarÄ±ldÄ±. Sefer sonrasÄ± arkadaÅŸlarÄ±m hastalandÄ±. Ben hayatta kaldÄ±m Ã§Ã¼nkÃ¼ oksijen maskesi Ã§almÄ±ÅŸtÄ±m.'" },
            { text: "HafÄ±za her zaman gÃ¼venilir deÄŸildir.", effect: -10, next: "'HafÄ±za mÄ±? Ellerimde hÃ¢lÃ¢ o kimyasalÄ±n yanÄ±k izi var. Bak.' Ellerini uzatÄ±yor. GerÃ§ekten derin izler var." }
          ]
        }
      ],
      high: [
        {
          text: "Beni dinliyorsan bir ÅŸey sÃ¶yleyeceÄŸim. YaÅŸlÄ± adam zÄ±rvalÄ±yor diyeceksin ama can sÄ±kÄ±ntÄ±sÄ±ndan deÄŸil sÃ¶ylÃ¼yorum â€” Vera'nÄ±n babasÄ±nÄ± tanÄ±dÄ±m.",
          isSpecial: true,
          choices: [
            { 
              text: "Vera'nÄ±n babasÄ±nÄ± mÄ±? Anlat.", 
              effect: +28, 
              next: "'MÃ¼hendisti. SektÃ¶r-0 projesinde. \'Beyaz Sis\' denen programÄ±n baÅŸÄ±ndaydÄ±. Bir gÃ¼n kayboldu. Vera henÃ¼z kÃ¼Ã§Ã¼cÃ¼ktÃ¼. Program durdu ama veriler durmadÄ± â€” aktarÄ±ldÄ±. Kime? Bilmiyorum. Ama ÅŸimdi o sis dÄ±ÅŸarÄ±da. Ve iÃ§eride bir ÅŸeyler hÃ¢lÃ¢ devam ediyor.'",
              followUp: {
                text: "Sesini fÄ±sÄ±ltÄ±ya indiriyor. 'KÄ±zÄ±n... Vera'nÄ±n gÃ¶zlerine iyi bak. BabasÄ±nÄ±n o siyah sÄ±vÄ±ya olan takÄ±ntÄ±sÄ±, sadece iÅŸten ibaret deÄŸildi. Kendi kanÄ±yla bir ÅŸeyler denemiÅŸ olabilir. Vera'da bir farklÄ±lÄ±k var, asker. Onu izle.'",
                choices: [
                  { text: "Vera gÃ¼vende olacak. Buna izin vermem.", effect: +20, next: "'UmarÄ±m dediÄŸin gibi olur. BabasÄ± onu koruyamadÄ±. Sen koru.'" },
                  { text: "Onun tehlikeli olduÄŸunu mu sÃ¶ylÃ¼yorsun?", effect: +5, next: "'Tehlikeli mi? Belki de tek kurtuluÅŸumuz odur. Ama uyanÄ±rsa...'" }
                ]
              }
            },
            { text: "Beyaz Sis programÄ± neydi?", effect: +20, next: "'Resmi adÄ± yoktu. Ama biz iÅŸÃ§iler 'Proje SÄ±fÄ±r' derdik. Ä°nsan vÃ¼cudunu... dÃ¶nÃ¼ÅŸtÃ¼rme deneyleri. Hayatta hiÃ§ konuÅŸmadÄ±m bunu.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 2 â€” SESSÄ°Z KADIN
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    silent_woman_d2: {
      name: "Sessiz KadÄ±n",
      role: "GÃ¼n-2 Â· Bilinmez Kimlik",
      image: "/faces/d2_silent_woman.png",
      low: [
        {
          text: "[ Sizi duymuyor gibi yapÄ±yor. Sonra bir kaÄŸÄ±t parÃ§asÄ± uzatÄ±yor. Ãœzerinde tek kelime yazmÄ±ÅŸ: 'KAÃ‡IN.' ]",
          choices: [
            { text: "Neden kaÃ§alÄ±m? Kim geliyor?", effect: +15, next: "[ Cevap vermiyor. Ama gÃ¶zleri kapÄ±ya gidiyor, sonra tavana. YukarÄ±da bir ÅŸey var â€” bunu ima ediyor. ]" },
            { text: "KonuÅŸabilirsin, burada gÃ¼vendesin.", effect: +10, next: "[ DudaklarÄ±nÄ± sÄ±kÄ±yor. ParmaÄŸÄ±yla boÄŸazÄ±nÄ± gÃ¶steriyor. KonuÅŸamÄ±yor â€” ya da konuÅŸmak istemiyor. ]" },
            { text: "AnlayamÄ±yorum seni.", effect: -5, next: "[ KaÄŸÄ±dÄ± geri alÄ±yor, Ã§Ã¶pe atÄ±yor. Sessizce sÄ±rtÄ±nÄ± dÃ¶nÃ¼yor. ]" }
          ]
        }
      ],
      medium: [
        {
          text: "[ Bu sefer not daha uzun: 'Onlar iÃ§eride. Geceleri deÄŸiÅŸtirleniyorlar. Masum gÃ¶rÃ¼nÃ¼yorlar ama sisin kokusu var Ã¼stlerinde.' ]",
          choices: [
            { 
              text: "Kimden bahsediyor? Ä°sim ver.", 
              effect: +20, 
              next: "[ DuraklÄ±yor. Sonra Ã¼Ã§ isim yazÄ±yor. Ä°kisi tanÄ±dÄ±k geliyor â€” sÄ±ÄŸÄ±nakta Ã§alÄ±ÅŸan personelden. ÃœÃ§Ã¼ncÃ¼sÃ¼... senin ismin. ]",
              followUp: {
                text: "[ Notun altÄ±na hÄ±zla bir ÅŸeyler daha karalÄ±yor: 'Sen henÃ¼z dÃ¶nÃ¼ÅŸmedin. Ama kanÄ±nda o var. Gece 03:14'te hissettiÄŸin o baÅŸ aÄŸrÄ±sÄ±... O seni Ã§aÄŸÄ±rÄ±yor. Direnmen lazÄ±m.' ]",
                choices: [
                  { text: "Ben dÃ¶nÃ¼ÅŸmeyeceÄŸim. SÃ¶z veriyorum.", effect: +15, next: "[ GÃ¶zlerine bakÄ±yor uzun uzun. Sonra kÃ¼Ã§Ã¼k bir onaylamayla baÅŸÄ±nÄ± sallÄ±yor. 'Ä°nanÄ±yorum.' yazÄ±yor. ]" },
                  { text: "EÄŸer dÃ¶nÃ¼ÅŸÃ¼rsem beni Ã¶ldÃ¼r.", effect: +25, next: "[ GÃ¶zyaÅŸlarÄ± birikiyor gÃ¶zlerinde. Elini senin elinin Ã¼zerine koyuyor. 'UmarÄ±m o gÃ¼n gelmez.' yazÄ±yor yavaÅŸÃ§a. ]" }
                ]
              }
            },
            { text: "Sis kokusu nasÄ±l anlaÅŸÄ±lÄ±r?", effect: +15, next: "[ 'GÃ¶zler' yazÄ±yor. 'KÃ¼Ã§Ã¼k damarlara bak. GrileÅŸiyor. Erken evrede.' ]" },
            { text: "Paranoya salgÄ±n dÃ¶nemlerinde yaygÄ±ndÄ±r.", effect: -12, next: "[ Kolunu aÃ§Ä±yor. Dirsek iÃ§inde silik gri damarlar gÃ¶rÃ¼nÃ¼yor. Sana sert bakÄ±yor. ]" }
          ]
        }
      ],
      high: [
        {
          text: "[ Sesi yok ama bu sefer farklÄ± bir not: 'Ben ORACLE'Ä±n kÄ±z kardeÅŸiyim. Beni bulmasÄ±ndan Ã¶nce konuÅŸmam gerek.' Titrek ama net bir yazÄ±. ]",
          isSpecial: true,
          choices: [
            { 
              text: "ORACLE'Ä± tanÄ±yor musun?", 
              effect: +30, 
              next: "[ BaÅŸÄ±nÄ± sallÄ±yor. Yazar: 'O kaybÄ± seÃ§ti. Sisi gÃ¶rmesin diye gÃ¶zlerini baÄŸladÄ± â€” kendi eliyle. Ama ben gÃ¶rdÃ¼m. Vera'nÄ±n laboratuvarÄ±nda neler yaptÄ±klarÄ±nÄ± gÃ¶rdÃ¼m. Ve beni susturmak iÃ§in bunu yaptÄ±lar.' BoÄŸazÄ±nÄ± tekrar gÃ¶steriyor. Ameliyat izi var. ]",
              followUp: {
                text: "[ Titreyen elleriyle bÃ¼yÃ¼k harflerle yazÄ±yor: 'GÃœMÃœÅ PROTOKOLÃœ. SÄ±ÄŸÄ±naÄŸÄ±n altÄ±ndaki asÄ±l amaÃ§ bu. Sizi korumak deÄŸil, incelemek. Ve zamanÄ± geldiÄŸinde... kapÄ±larÄ± aÃ§acaklar.' ]",
                choices: [
                  { text: "Buna izin vermeyeceÄŸim. Sen de yardÄ±m edeceksin.", effect: +25, next: "[ KararlÄ±lÄ±kla sana bakÄ±yor. Elini kalbine koyuyor. YanÄ±ndayÄ±m, der gibi. ]" },
                  { text: "Bu delilik! Ne yapabiliriz ki?", effect: -5, next: "[ OmuzlarÄ± Ã§Ã¶kÃ¼yor. Seni yanlÄ±ÅŸ anladÄ±ÄŸÄ±nÄ± dÃ¼ÅŸÃ¼nerek not defterini kapatÄ±yor. ]" }
                ]
              }
            },
            { text: "Bu bilgi Ã§ok deÄŸerli. KoruyacaÄŸÄ±m seni.", effect: +22, next: "[ Uzun sÃ¼re bakÄ±yor. Sonra bir koordinat yazÄ±yor. 'SektÃ¶r-0. Alt tÃ¼nel. Orada kanÄ±t var.' ]" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 2 â€” KÃ–PEK ADAM
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    dog_man_d2: {
      name: "KÃ¶pek Adam",
      role: "GÃ¼n-2 Â· Sokak BekÃ§isi",
      image: "/faces/d2_dog_man.png",
      low: [
        {
          text: "AÄŸamÄ±n KarabaÅŸ, TerhanlÄ±'nÄ±n SarÄ±, ve Deli HÃ¼seyin'in Boz'u â€” Ã¼Ã§Ã¼ de sis gelmeden bir hafta Ã¶nce kayboldu asker. Hayvanlar bilir. Ä°nsanlar bilmeden hayvanlar bilir.",
          choices: [
            { text: "HayvanlarÄ±n duyargasÄ± bizden keskin.", effect: +12, next: "'Ä°ÅŸte bu! Siz askerler anlarsÄ±nÄ±z. KarabaÅŸ doÄŸuya kaÃ§tÄ±. Sis de doÄŸudan geldi. Bak nasÄ±l Ã¶rtÃ¼ÅŸÃ¼yor.'" },
            { text: "Bu bir tesadÃ¼f olabilir.", effect: +3, next: "'TesadÃ¼f mÃ¼? SarÄ± on yÄ±ldÄ±r o mahalledeydi. KÄ±pÄ±rdamazdÄ±. Bir hafta Ã¶nce gitti. TesadÃ¼f deÄŸil bu.'" },
            { text: "KÃ¶peklerle vaktim yok ÅŸimdi.", effect: -15, next: "Susuyor. Sonra sessizce: 'Umursamayanlar ilk gider.' diye mÄ±rÄ±ldanÄ±yor." }
          ]
        }
      ],
      medium: [
        {
          text: "KÃ¶pekleri hatÄ±rladÄ±n mÄ±? Ben onlarÄ± takip ettim. DoÄŸuya, sonra aÅŸaÄŸÄ±ya â€” zeminin altÄ±nda bir tÃ¼nel aÄŸÄ±na giriyorlardÄ±. KÃ¶pekler biliyordu. KaÃ§Ä±ÅŸ yolu burasÄ±.",
          choices: [
            { text: "TÃ¼nelin giriÅŸini biliyor musun?", effect: +22, next: "'Biliyorum. Ama kolay deÄŸil. SektÃ¶r sÄ±nÄ±rÄ±nÄ±n son direÄŸinin altÄ±nda. Ama orasÄ±... geceleri baÅŸka ÅŸeyler de kullanÄ±yor.' Yutkunuyor." },
            { text: "O tÃ¼neller gÃ¼venli mi?", effect: +15, next: "'Hayranlar iÃ§in deÄŸil. Ama kÃ¶pekler geÃ§ti, ben de geÃ§tim. Ä°nsan da geÃ§er.' DuraksÄ±yor. 'Gidip dÃ¶nenler geÃ§er.'" },
            { text: "TÃ¼nel bilgisini raporlayacaÄŸÄ±m.", effect: -5, next: "'Rapor etme. Bilenlerin baÅŸÄ±na gelen gÃ¶rdÃ¼n mÃ¼? Yok oluyorlar.' Sesi kÄ±sÄ±lÄ±yor." }
          ]
        }
      ],
      high: [
        {
          text: "Sana sÃ¶ylemem gereken bir ÅŸey var. O tÃ¼nelde Vera'nÄ±n adamlarÄ±nÄ± gÃ¶rdÃ¼m. Defalarca. Gece iniyor, sabah Ã§Ä±kÄ±yorlar. Ve her seferinde yanlarÄ±nda bir ÅŸey taÅŸÄ±yorlar â€” bÃ¼yÃ¼k, uzun ÅŸiÅŸeler.",
          isSpecial: true,
          choices: [
            { text: "ÅiÅŸelerde ne vardÄ±?", effect: +28, next: "'Beyaz sÄ±vÄ±. Ama bazen Ä±ÅŸÄ±ldÄ±yordu. GerÃ§ekti. Ve o ÅŸiÅŸelerin birini kÄ±rdÄ±m. TopraÄŸa deÄŸdi. O toprak haftalar sonra grileÅŸti. Sis topraÄŸa da geÃ§iyor.'" },
            { text: "O tÃ¼nele nasÄ±l girilir, gÃ¶ster.", effect: +20, next: "'Ä°lk direÄŸin kuzeyinde Ã§Ã¶ken beton var. AltÄ±nda boÅŸ alan. Ama hazÄ±r ol â€” iÃ§eride sesler var. Ä°nsan sesi gibi deÄŸil.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 3 â€” GECELÃ–RE
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    night_vision_d3: {
      name: "GecelÃ¶re",
      role: "GÃ¼n-3 Â· KaranlÄ±k KaÅŸifi",
      image: "/faces/d3_night_vision.png",
      low: [
        {
          text: "Ben geceleri Ã§alÄ±ÅŸÄ±rÄ±m. SektÃ¶r sÄ±nÄ±rÄ±nÄ± her gece haritalarÄ±m. Biliyor muydun? Kimse sormadÄ± ama ben biliyorum neyin nerede olduÄŸunu.",
          choices: [
            { text: "SektÃ¶rÃ¼n dÄ±ÅŸÄ±nda ne var?", effect: +15, next: "'Ã‡ok ÅŸey. Vera'nÄ±n karavanlarÄ±. GÃ¶zetleme noktalarÄ±. Ve... canlÄ± olmayan ama hareket eden ÅŸeyler. Zamanla anlatÄ±rÄ±m.'" },
            { text: "Bu bilgiler stratejik aÃ§Ä±dan deÄŸerli.", effect: +10, next: "'Biliyorum. Bu yÃ¼zden buradasÄ±n seninle konuÅŸuyorum.'  SÄ±rÄ±tÄ±yor kÄ±sa bir an." },
            { text: "Gece dÄ±ÅŸarÄ± Ã§Ä±kmak tehlikeli.", effect: -8, next: "'Tehlikeli deÄŸil eÄŸer biliyorsan nasÄ±l yapÄ±lacaÄŸÄ±nÄ±. Bilmeyenler iÃ§in tehlikeli.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'nÄ±n dÄ±ÅŸ devriyelerini saydÄ±m. Her gece tam 03:00'te yer deÄŸiÅŸtiriyorlar. 3 dakika boÅŸluk var. SektÃ¶rÃ¼n kuzeyinde. Bunun bir anlamÄ± var.",
          choices: [
            { text: "O 3 dakika kaÃ§Ä±ÅŸ iÃ§in yeterli mi?", effect: +20, next: "'KaÃ§Ä±ÅŸ deÄŸil, giriÅŸ iÃ§in yeterli. Biri dÄ±ÅŸarÄ±ya dÃ¼zenli olarak bir ÅŸeyler gÃ¶tÃ¼rÃ¼yor. SÄ±ÄŸÄ±naktan. Ve ben gÃ¶rmÃ¼ÅŸÃ¼m.'\" Sesi alÃ§alÄ±yor." },
            { text: "Ä°Ã§eride casus var mÄ± demek istiyorsun?", effect: +18, next: "'Casus deÄŸil... koordinasyon saÄŸlayan biri. Vera devriyelerinin boÅŸluÄŸunu biliyor. Bu tesadÃ¼f deÄŸil. Birisi onu bilgilendiriyor.'" },
            { text: "Bu olasÄ±lÄ±ÄŸÄ± araÅŸtÄ±racaÄŸÄ±m.", effect: +8, next: "'AraÅŸtÄ±r. Ama dikkatli ol. Bu kiÅŸi seni de izliyor olabilir.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir ÅŸey gÃ¶stereyim. DÃ¼n gece Ã§ektim bunu. DÄ±ÅŸ sektÃ¶r sÄ±nÄ±rÄ±nda. Vera'nÄ±n gemisi deÄŸil bu â€” baÅŸka bir ÅŸey. Ã‡ok bÃ¼yÃ¼k, sigara izmariti gibi ÅŸekli var ve sessiz.",
          isSpecial: true,
          choices: [
            { text: "Bu ne zaman ve nerede?", effect: +28, next: "'Kuzey Ã§it, gece yarÄ±sÄ±. Ses yok, Ä±ÅŸÄ±k yok. Ama topraÄŸa deÄŸdiÄŸi yerde sis yoÄŸunlaÅŸÄ±yor. Bir saat sonra Ã¼Ã§ kiÅŸi Ã§Ä±ktÄ± iÃ§inden â€” resmi diyorum, Ã¼niformalarÄ± vardÄ± ama Vera'nÄ±n deÄŸil. BaÅŸka bir Ã¶rgÃ¼t.' GÃ¶zleri kÄ±sÄ±lÄ±yor. 'Devlet iÃ§inde devlet.'" },
            { text: "KoordinatlarÄ± ver, kayÄ±t altÄ±na alalÄ±m.", effect: +22, next: "'Zaten yazdÄ±m. Al.' Bir kaÄŸÄ±t uzatÄ±yor. 'Ama bu bilgi yanlÄ±ÅŸ ellere geÃ§erse ikimiz de biteriz.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 4 â€” ÅÄ°FACI
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    healer_d4: {
      name: "ÅifacÄ±",
      role: "GÃ¼n-4 Â· SaÄŸaltÄ±cÄ±",
      image: "/faces/d4_healer.png",
      low: [
        {
          text: "YaralarÄ± sardÄ±m bugÃ¼n. Sekiz kiÅŸi. YarÄ±sÄ± standart yara. Ama diÄŸer yarÄ±sÄ±... farklÄ± bir his. Doku rengi normale dÃ¶nmÃ¼yor. Gri kalÄ±yor.",
          choices: [
            { text: "GrileÅŸen doku sis maruziyetinin belirtisi mi?", effect: +15, next: "'Tam bilmiyorum. Ama doÄŸal deÄŸil bu. Ä°laÃ§ veriyorum, iyileÅŸmiyor. Bitkisel tedavi denedim, yine yok. Sanki vÃ¼cut savaÅŸmayÄ± bÄ±rakmÄ±ÅŸ gibi.'" },
            { text: "Doktor Arzu bunu biliyor mu?", effect: +10, next: "'Arzu kendi bÃ¶lÃ¼mÃ¼nÃ¼ yeterince meÅŸgul. Ama evet, gÃ¶rÃ¼nce ÅŸaÅŸÄ±rdÄ± o da. Birlikte not aldÄ±k.'" },
            { text: "SÄ±ÄŸÄ±naktaki saÄŸlÄ±k durumu raporlarÄ±na ulaÅŸabilir miyim?", effect: +8, next: "'Verebilirim. Ama bazÄ± kayÄ±tlarda boÅŸluklar var â€” bir kÄ±sÄ±m hÃ¢lÃ¢ ÅŸifreli.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Bak sana, ama bu aranÄ±zda kalacak: ÃœÃ§ haftadÄ±r yaralarÄ± takip ediyorum. Normal yara kapanÄ±r. Ama bunlar kapandÄ±ktan sonra gri Ã§izgi bÄ±rakÄ±yor. Ãœstlerinde. Sanki iÃ§ten bir ÅŸey bÃ¼yÃ¼yor.",
          choices: [
            { text: "Bu bÃ¼yÃ¼me enfektasyon sÃ¼reci mi?", effect: +20, next: "'Enfeksiyon deÄŸil. Enfeksiyon ateÅŸ yapar, iltihaplanma olur. Bu sessiz. Ve sistematik. Hep damarlarÄ± takip ediyor. Damar boyunca ilerliyor.' DuraksÄ±yor. 'ProgramlanmÄ±ÅŸ gibi.'" },
            { text: "KaÃ§ kiÅŸide gÃ¶rdÃ¼n bunu?", effect: +18, next: "'AltÄ±. Åimdilik. Ama ikisi artÄ±k burada deÄŸil â€” gitmeleri gerekti. Kontrol grubu kalmÄ±ÅŸtÄ±, onlarÄ± takip edemedim.'" },
            { text: "Bu bilgiyi kayÄ±t altÄ±na almayÄ± dÃ¼ÅŸÃ¼nÃ¼yor musun?", effect: +5, next: "'DÃ¼ÅŸÃ¼nmÃ¼ÅŸtÃ¼m. Ama kayÄ±t sistemi kimin elinde? Emin olamÄ±yorum.'" }
          ]
        }
      ],
      high: [
        {
          text: "Biri bana bir ÅŸey getirdi. Ä°laÃ§ deÄŸil. ÅiÅŸede sÄ±vÄ±. Ä°Ã§inde kÃ¼Ã§Ã¼k tanecikler var â€” gÃ¶rÃ¼nmez neredeyse. 'Sis baÄŸÄ±ÅŸÄ±klÄ±ÄŸÄ±' dedi. 'Tesiste Ã¼retildi.' AdÄ± olmayan biri getirdi.",
          isSpecial: true,
          choices: [
            { text: "O sÄ±vÄ±yÄ± kimseye kullandÄ±rdÄ±n mÄ±?", effect: +25, next: "'HayÄ±r! TanÄ±madan kullanamam. Ama analiz ettim. O tanecikler... canlÄ±. KÃ¼Ã§Ã¼k mekanizmalar gibi. Biyolojik deÄŸil, yapay. Kim bunlarÄ± Ã¼retebilir?' GÃ¶zleri korkuyla parlÄ±yor. 'Ve neden bana getirdi o adam?'" },
            { text: "O adamÄ± tanÄ±mlayabilir misin?", effect: +20, next: "'YÃ¼zÃ¼ yoktu. Yani, maskeleydi. Ama sesi... genÃ§ deÄŸildi. Ve 'AraÅŸ'a ilet' dedi. Sadece o kadar.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 4 â€” Ã–ÄRETMEN
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    teacher_d4: {
      name: "Ã–ÄŸretmen",
      role: "GÃ¼n-4 Â· Eski EÄŸitimci",
      image: "/faces/d4_teacher.png",
      low: [
        {
          text: "Ã‡ocuklara ders veriyordum burada. Sonra biri 'tehlikeli olabilir' dedi. Okul tarih mi, coÄŸrafya mÄ±, bilim mi Ã¶ÄŸretmeli ki tehlikeli olsun?",
          choices: [
            { text: "Hangi konular tehlikeli bulundu?", effect: +15, next: "'Sis Ã¶ncesi dÃ¶nem. SektÃ¶r-0 tarihi. Proje kayÄ±tlarÄ±. BunlarÄ± mÃ¼fredata almÄ±ÅŸtÄ±m. Ertesi gÃ¼n beni Ã§aÄŸÄ±rdÄ±lar.' AcÄ± acÄ± gÃ¼lÃ¼yor." },
            { text: "Ã‡ocuklarÄ±n eÄŸitimine devam edebilirsiniz.", effect: +10, next: "'Devam ediyorum aslÄ±nda. Ama ÅŸimdi sadece ÅŸiir ve matematik. Tarihi kendim saklÄ±yorum.'" },
            { text: "Burada Ã¶ncelik eÄŸitim deÄŸil hayatta kalmak.", effect: -10, next: "'Tarihini bilmeyenler aynÄ± hatalarÄ± tekrarlar. Bu da hayatta kalmakla ilgili.'" }
          ]
        }
      ],
      medium: [
        {
          text: "SektÃ¶r-0 tarihi diye bir belge toplamÄ±ÅŸtÄ±m yÄ±llarca. On yÄ±lÄ± aÅŸkÄ±n sÃ¼re. Devlet arÅŸivlerinden, sahadan, tanÄ±klardan. Sonra tÃ¼m bunlarÄ± 'kayÄ±p' oldu. Ama ben ezbere biliyorum.",
          choices: [
            { 
              text: "Ne Ã¶ÄŸrendindiÄŸini bize anlat.", 
              effect: +22, 
              next: "'Proje GÃ¼mÃ¼ÅŸ 1987'de baÅŸladÄ±. Resmi adÄ±: Ã‡evre Adaptasyon ProgramÄ±. GerÃ§ek amacÄ±: Ä°nsanlarÄ± bÃ¶lgeye baÄŸlamak. Yer altÄ±na. Ama bir ÅŸey ters gitti â€” o zaman da sis Ã§Ä±kmÄ±ÅŸtÄ±. KÃ¼Ã§Ã¼k Ã§aplÄ±. Gizlendi.' Yutkunuyor. 'Åimdi bÃ¼yÃ¼k Ã§aplÄ±.'",
              followUp: {
                text: "'Peki bu sisin insanlarÄ± neden delirtiÄŸini hiÃ§ dÃ¼ÅŸÃ¼ndÃ¼n mÃ¼? Ã‡Ã¼nkÃ¼ sis zihinleri birbirine baÄŸlÄ±yor. ZayÄ±f olanlarÄ±n zihni, ortak kÃ¢busa dayanamayÄ±p parÃ§alanÄ±yor.' Sana doÄŸru eÄŸiliyor: 'SektÃ¶r 7'nin alt katlarÄ±na inersen asÄ±l sunucularÄ± gÃ¶receksin, onlar hÃ¢lÃ¢ Ã§alÄ±ÅŸÄ±yor.'",
                choices: [
                  { text: "Bunu anlattÄ±ÄŸÄ±n iÃ§in devlet seni hedef mi aldÄ±?", effect: +10, next: "KafasÄ±nÄ± sallÄ±yor. 'Sadece beni deÄŸil. GerÃ§eÄŸi bilen herkes teker teker kayboldu sÃ¼men altÄ±ndan. Ben ÅŸanslÄ±ydÄ±m, sis Ã§Ä±ktÄ±ÄŸÄ±nda buraya sÄ±ÄŸÄ±ndÄ±m.'" },
                  { text: "Alt katlara inmek intihar demek. Bu bir efsane.", effect: -5, next: "'Efsane deÄŸil. Ama intihar olduÄŸu kesin. Korkuyorsan burada kal asker, ben sadece olanÄ± sÃ¶ylerim.'" }
                ]
              }
            },
            { text: "Devlet bu konuda ne biliyor?", effect: +18, next: "'Devlet bunu yaptÄ± diyemem. Ama devletin iÃ§indeki bir birim yaptÄ±. Proje SÄ±fÄ±r. Ve bu birim hÃ¢lÃ¢ aktif.'" },
            { text: "Bu bilgilerin doÄŸruluÄŸu ne kadar gÃ¼venilir?", effect: +5, next: "'Belgeleri gÃ¶rdÃ¼m. FotoÄŸraflarÄ±nÄ± Ã§ektim. Onlar da kayboldu. Ama kafam kaybolmadÄ±.' Sert bakÄ±yor." }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir ÅŸeyi vermek istiyorum. KaÃ§arken bir kitabÄ±n iÃ§ine saklamÄ±ÅŸtÄ±m. Bunlar asÄ±l Proje GÃ¼mÃ¼ÅŸ dokÃ¼manlarÄ±nÄ±n elle yazÄ±lmÄ±ÅŸ notlarÄ±. Orijinalleri yoktu ama ben okumuÅŸtum â€” kelimesi kelimesine.",
          isSpecial: true,
          choices: [
            { text: "Bu notlar Ã§ok deÄŸerli. Muhafaza edilecek.", effect: +28, next: "'Ä°Ã§inde bir ÅŸey var dikkatini Ã§ekecek: SektÃ¶r-0 deneyleri iki aÅŸamaydÄ±. Birinci aÅŸama baÅŸarÄ±sÄ±z â€” katÄ±lÄ±mcÄ±lar... kayboldu. Ä°kinci aÅŸama ÅŸu an devam ediyor. DÄ±ÅŸarÄ±daki sis ikinci aÅŸamanÄ±n yan Ã¼rÃ¼nÃ¼. Ve hedef: toplu mutasyon deÄŸil, seÃ§ici dÃ¶nÃ¼ÅŸÃ¼m. SeÃ§ilenleri dÃ¶nÃ¼ÅŸtÃ¼rÃ¼p geri yerleÅŸtiriyorlar.'" },
            { text: "SeÃ§ilenler kimler?", effect: +20, next: "'Bilmiyorum. Ama iÃ§inde olanlar bunu bilmiyor. YavaÅŸ, fark ettirmeden oluyor.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 4 â€” RAHÄ°P (KARANLIK KARAKTER)
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    priest_d4: {
      name: "Rahip",
      role: "GÃ¼n-4 Â· ÅÃ¼pheli Ä°nanÃ§",
      image: "/faces/d4_priest.png",
      low: [
        {
          text: "Sizi gÃ¶rÃ¼yorum asker. KapÄ±da kim girebilir kim giremez diye karar veriyorsunuz. GÃ¼zel bir gÃ¶rev. Ama sizi izleyen var mÄ± hiÃ§ dÃ¼ÅŸÃ¼ndÃ¼nÃ¼z mÃ¼?",
          choices: [
            { text: "Buraya dini baÄŸlamda mÄ± geldiniz?", effect: +5, next: "'Her yer hem tapÄ±nak hem pazar. Ben yalnÄ±zca gÃ¶zlemleyenim. Ve gÃ¶zlemlediklerim... ilginÃ§.' GÃ¼lÃ¼msÃ¼yor ama gÃ¶zleri gÃ¼lmÃ¼yor." },
            { text: "Sizi izleyen kim?", effect: -5, next: "'Cevap vermek istemiyorum henÃ¼z. Ama soru doÄŸru.' BaÅŸÄ±nÄ± eÄŸiyor." },
            { text: "Burada gÃ¼vendesiniz, merak etmeyin.", effect: +3, next: "'GÃ¼venlik yanÄ±lsamasÄ± tehlikelidir.' CÃ¼ppesini dÃ¼zeltiyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Merak ediyor musunuz neden buradayÄ±m? Her yer kapalÄ±yken sizin kapÄ±nÄ±zÄ± Ã§aldÄ±m. Ã‡Ã¼nkÃ¼ iÃ§eride... bir ÅŸey var. Sizi koruyan deÄŸil â€” sizi izleyen.",
          choices: [
            { text: "Ne demek istiyorsunuz tam olarak?", effect: +10, next: "'Duvarlar konuÅŸur bazen. Gece solunum sesleri gelir yerlerden. SÄ±ÄŸÄ±nak iÃ§inde bir varlÄ±k var, asker. Ama bu varlÄ±k sizden Ã¶nce buraya geldi.' Sesi dÃ¼ÅŸÃ¼k ve sakin â€” bu onu daha Ã¼rkÃ¼tÃ¼cÃ¼ yapÄ±yor." },
            { text: "Bu dini bir sÃ¶ylem mi, gerÃ§ek bir uyarÄ± mÄ±?", effect: +8, next: "'Ä°kisi de. Åu ana kadar 7 kiÅŸi uyandÄ±m dedi. AynÄ± rÃ¼yayÄ± gÃ¶rÃ¼yorlar. Kovidor numarasÄ±: 14. Ä°Ã§inde beyaz bir kadÄ±n. KonuÅŸmuyor. Sadece bakÄ±yor.'" },
            { text: "Paranoya salgÄ±nÄ±n bir belirtisi olabilir.", effect: -15, next: "'Paranoya mÄ±?' Sakin ama buz gibi bir ses. 'Peki 7 kiÅŸi de aynÄ± anda mÄ± paranoya geÃ§irdi?'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Rahip bu sefer sizi Ã§aÄŸÄ±rdÄ±. Tek baÅŸÄ±na, geÃ§ saatte. KapÄ±yÄ± kapattÄ±, sesi son derece alÃ§ak: ] 'Ben Vera ile konuÅŸtum. BaÄŸlantÄ± kurdu benimle. Ve sizi uyarmasÄ± iÃ§in gÃ¶nderdi beni buraya.'",
          isSpecial: true,
          choices: [
            { text: "Bu provokasyon mu, gerÃ§ek mi?", effect: +15, next: "'Ä°kisi de deÄŸil. Ben bir araÃ§ olarak kullanÄ±ldÄ±m. Vera bilgi istiyor â€” sÄ±ÄŸÄ±naktaki savunma kapasitesi, insan sayÄ±sÄ±, kritik personel. Ben vermedim. Ama o bana zaten biliyor olabileceÄŸini ima etti. BaÅŸka birisi vermiÅŸ olabilir.' Son cÃ¼mle soÄŸuk dÃ¼ÅŸÃ¼yor." },
            { text: "Vera'nÄ±n mesajÄ± ne?", effect: +8, next: "'On dÃ¶rt gÃ¼n sonra kapÄ± aÃ§Ä±lacak. Direnenlere zarar verilecek. Teslim olanlara... dÃ¶nÃ¼ÅŸÃ¼m. Bu kelimeyi kullandÄ±. DÃ¶nÃ¼ÅŸÃ¼m. Ne anlama geldiÄŸini sorun kendinize.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 5 â€” KAÃ‡AN ADAM
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    chased_man_d5: {
      name: "KaÃ§an Adam",
      role: "GÃ¼n-5 Â· Takip EdilmiÅŸ",
      image: "/faces/d5_chased_man.png",
      low: [
        {
          text: "BÄ±rak beni burada oturayÄ±m. GÃ¶rmeni istemiyorum. GÃ¶rmeni istemiyorum Ã§Ã¼nkÃ¼ beni takip edenler seni de bulur.",
          choices: [
            { text: "Kim takip ediyor sizi?", effect: +12, next: "'Ä°sim sÃ¶ylemem. Ama Ã§ok organize bir grup. ÃœniformalarÄ± yok ama koordineli. Beni ÅŸehrin dÃ¶rt farklÄ± noktasÄ±nda gÃ¶rdÃ¼m. DuvarÄ±n iÃ§inde.'" },
            { text: "BurasÄ± gÃ¼venli, onlar iÃ§eri giremez.", effect: +5, next: "'Giremez mi?' AcÄ± bir tebessÃ¼m. 'Sen iÃ§eridekilere gÃ¼venebiliyor musun?'" },
            { text: "Ne yaptÄ±nÄ±z da sizi takip ediyorlar?", effect: +8, next: "Uzun bir sessizlik. 'Bir ÅŸey gÃ¶rdÃ¼m. GÃ¶rmemem gerekiyordu.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sana sÃ¶yleyebileceÄŸim ÅŸeyler var ama sÃ¶ylersem ikimiz de tehlikede oluruz. HazÄ±r mÄ±sÄ±n bÃ¶yle bir bilgi iÃ§in?",
          choices: [
            { text: "Evet, sÃ¶yle.", effect: +20, next: "'Vera'nÄ±n karargahÄ±nda Ã§alÄ±ÅŸtÄ±m. Temizlik gÃ¶revlisiyim. Ama temizlerken gÃ¶rÃ¼yorsun iÅŸte. Bir laboratuvar var â€” alt katta. Ä°nsanlar giriyor, farklÄ± Ã§Ä±kÄ±yorlar. GÃ¶zleri aynÄ± ama iÃ§leri deÄŸil." },
            { text: "KanÄ±tÄ±n var mÄ±?", effect: +15, next: "'Var. FotoÄŸraf deÄŸil ama koordinat. GiriÅŸin tam yeri. Ve o giriÅŸte her gece biri bekliyor â€” iÃ§eriden.' Titriyor." },
            { text: "Bu bilgiyi neden bana veriyorsun?", effect: +8, next: "'Ã‡Ã¼nkÃ¼ kaybolmadan Ã¶nce birine sÃ¶ylemeliyim. Ve sen... makul gÃ¶rÃ¼nÃ¼yorsun.' Pek de emin deÄŸil buna." }
          ]
        }
      ],
      high: [
        {
          text: "[ Sizi Ã§ekiyor. Parmak ucuyla bir ÅŸeyi gÃ¶steriyor. ] Biliyor musun bu sÄ±ÄŸÄ±nakta kaÃ§ ajan var? Ä°kiden fazla. Birini zaten biliyorsun â€” ama diÄŸerini bilmiyorsun. Ve o diÄŸeri her sabah seninle aynÄ± masada oturuyor.",
          isSpecial: true,
          choices: [
            { text: "Kim o?", effect: +25, next: "'SÃ¶ylersem yarÄ±n ben yok olurum. Ama ÅŸunu sÃ¶yleyeyim: O kiÅŸi seninle en Ã§ok konuÅŸan biri. Ve her konuÅŸmadan sonra Vera'nÄ±n devriye gÃ¼zergahÄ± deÄŸiÅŸiyor. Dikkat et ne paylaÅŸÄ±yorsun.' GÃ¶zleri kapÄ±ya gidiyor." },
            { text: "KanÄ±tla bunu.", effect: +15, next: "'KanÄ±t vermem. Ama ÅŸu andan itibaren bir hafta boyunca ekrana bak. Devriye saatleri ile senin toplantÄ± saatlerin Ã¶rtÃ¼ÅŸecek. Kendi gÃ¶zlerinle gÃ¶r.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // GÃœN 5 â€” Ä°KÄ°ZLER (KARANLIK KARAKTER)
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    twins_d5: {
      name: "Ä°kizler",
      role: "GÃ¼n-5 Â· Tek AkÄ±l Ä°ki Beden",
      image: "/faces/d5_twins.png",
      low: [
        {
          text: "[ Biri baÅŸlÄ±yor, diÄŸeri bitiriyor: ] 'Buraya geldik Ã§Ã¼nkÃ¼ kapÄ±yÄ± aÃ§tÄ±nÄ±z...' '...kapÄ±yÄ± aÃ§tÄ±nÄ±z ama bizi gÃ¶remedÄ±niz.'",
          choices: [
            { text: "NasÄ±l yani, sizi gÃ¶remedim mi?", effect: +10, next: "'Åehirdeâ€” ' 'â€”Ã¼Ã§ gÃ¼n bekledi. Sizi izledi. Siz onu gÃ¶rmediniz.' AynÄ± anda ÅŸÃ¶yle bakÄ±yorlar. RahatsÄ±z edici." },
            { text: "Ä°kiz olarak bu ÅŸekilde mi konuÅŸuyorsunuz hep?", effect: +5, next: "'Her zamanâ€” ' 'â€”deÄŸil. Sadece Ã¶nemli ÅŸeylerde.' Sesleri birbirinin devamÄ± gibi." },
            { text: "Bu oyun gibi gÃ¶rÃ¼nÃ¼yor.", effect: -12, next: "'Oyun deÄŸilâ€” ' 'â€”hiÃ§ bu kadar ciddi olmamÄ±ÅŸtÄ±k.' Ve aynÄ± anda bakÄ±ÅŸlarÄ±nÄ± sana dikiyorlar." }
          ]
        }
      ],
      medium: [
        {
          text: "'AynÄ± rÃ¼yayÄ± gÃ¶rÃ¼yoruzâ€” ' 'â€”her gece, aynÄ± saatte.' 'Beyaz bir odaâ€” ' 'â€”iÃ§inde bir adam. Bize bakÄ±yor ama yÃ¼zÃ¼ yok.' 'Ve fÄ±sÄ±ldÄ±yorâ€” ' 'â€”sayÄ±lar.'",
          choices: [
            { text: "Hangi sayÄ±lar?", effect: +20, next: "'Hep aynÄ± sÄ±ra: ' '14 â€” 0 â€” 84.' 'SÄ±fÄ±r ne demek bilmiyoruzâ€” ' 'â€”ama 14 gÃ¼n biliyoruz. Ve 84 bizim kayÄ±t numaramÄ±z.' DuraklÄ±yorlar. 'KayÄ±t numarasÄ± nereden geliyor bilmiyoruz.'" },
            { text: "Bu sayÄ±larÄ± daha Ã¶nce duydunuz mu?", effect: +15, next: "'Bir kereâ€” ' 'â€”SektÃ¶r-0 kapÄ±sÄ±nda yazÄ±yordu. KÃ¼Ã§Ã¼k plakette. FotoÄŸraf Ã§ektik.' 'Fotograflar yok artÄ±kâ€” ' 'â€”ama biz gÃ¶rdÃ¼k.'" },
            { text: "RÃ¼yalar korkudan kaynaklanÄ±yor olabilir.", effect: -8, next: "'Korku rÃ¼yasÄ±â€” ' 'â€”aynÄ± anda yapmaz bunu.' 'AynÄ± anda uyandÄ±kâ€” ' 'â€”aynÄ± kelimeleri sÃ¶yledik.' ÃœrkÃ¼tÃ¼cÃ¼ bir sessizlik." }
          ]
        }
      ],
      high: [
        {
          text: "'Sana bir ÅŸey sÃ¶yleyeceÄŸizâ€” ' 'â€”ama buna inanmak istemeyeceksin.' 'Biz deney deÄŸilizâ€” ' 'â€”ama deney yaptÄ±lar Ã¼stÃ¼mÃ¼zde.' 'Annemiz gÃ¶nÃ¼llÃ¼ girdi bir programaâ€” ' 'â€”ikiz doÄŸurmak iÃ§in.' 'Proje adÄ±: Ä°kizleme ProtokolÃ¼.' 'â€”SektÃ¶r-0.'",
          isSpecial: true,
          choices: [
            { text: "Bu program hakkÄ±nda ne biliyorsunuz?", effect: +28, next: "'Annem belgelerini sakladÄ±â€” ' 'â€”biz kÃ¼Ã§Ã¼kken. Åžimdi bizde.' 'ProgramÄ±n amacÄ±: iki beden, ortak bilinÃ§.' 'â€”Deney baÅŸarÄ±sÄ±z sayÄ±ldÄ±. Biz serbest bÄ±rakÄ±ldÄ±k.' 'Ã‡Ã¼nkÃ¼ bizi izlemek daha iyi bilgi veriyorduâ€”' 'â€”Ã¶zgÃ¼r bÄ±rakmak.' AynÄ± anda duruyorlar. Bu en uzun sÃ¶yledikleri cÃ¼mleler." },
            { text: "Belgeler hÃ¢lÃ¢ sizde mi?", effect: +20, next: "'Evetâ€” ' 'â€”ve vermeyeceÄŸiz.' 'Ama istersen okursun.' 'â€”Buraya gelirsin, okursun, gidersin.' 'Ã‡Ä±kartamazsÄ±nâ€” ' 'â€”burada kalacaklar.'" }
          ]
        }
      ]
    }
};

const en_part1 = {
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 1 â€” MINA
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    mina_d1: {
      name: "KÃ¼Ã§Ã¼k Mina",
      role: "Day-1 Â· Minor",
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
          text: "That huge guy BozkÄ±r... Saw him last night sitting all alone, face in his hands. He was crying, I think.",
          choices: [
            { text: "You maintain excellent observational awareness, Mira.", effect: +20, next: "She smiles brightly. 'My mom said that too! Are we friends now?' Not mocking, a genuine inquiry." },
            { text: "Curfew exists for a reason. Stay out of the corridors.", effect: -5, next: "'I know. But I couldn't sleep.' She goes quiet." },
            { text: "Detail your psychological assessment of BozkÄ±r.", effect: +15, next: "'He's big but sad. When grown-ups are sad, they hide it inside. It must be so heavy.'" }
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

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 1 â€” AGA
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    aga_d1: {
      name: "AÄŸa",
      role: "Day-1 Â· Slum Warlord",
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

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 2 â€” WOUNDED SOLDIER
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    wounded_soldier_d2: {
      name: "YaralÄ± Asker (Kerem)",
      role: "Day-2 Â· Combat Survivor",
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

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 3 â€” TRADER SALIH
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    trader_salih_d3: {
      name: "TÃ¼ccar Salih",
      role: "Day-3 Â· Wasteland Merchant",
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

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 3 â€” CRYING GIRL
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    crying_girl_d3: {
      name: "KÃ¼Ã§Ã¼k Ezel",
      role: "Day-3 Â· Minor",
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
          text: "I saw Mr. BozkÄ±r last night. He had his hands on his face and his shoulders were dropping like this. Was his optical fluid leaking?",
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

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 5 â€” AUNT OBSERVER
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    aunt_observer_d5: {
      name: "GÃ¶zcÃ¼ Naciye",
      role: "Day-5 Â· Sector Archivist",
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
          text: "I record the people passing through this sector in a journal. So their histories won't be forgotten. Who came, what they told.",
          choices: [
            { text: "You are the memory of this sector, Aunt Naciye.", effect: +20, next: "Her hands tremble slightly. 'First time someone says this. I... yes. I used to write in a small magazine. People's stories. The Mist took them all.'" },
            { text: "Tell me a story.", effect: +15, next: "'Which one? Each is a separate book. Today... let me tell you about Selim's mother. Remember Selim when something approaches in the future.'" },
            { text: "What is the use of this history?", effect: -15, next: "'People without history are like rootless trees, child. They fall.'" }
          ]
        }
      ],
      high: [
        {
          text: "I will tell you something very old, child. This place existed before. Under a different name.",
          isSpecial: true,
          choices: [
            { text: "How? Did this sector exist before?", effect: +22, next: "'They called it Sector-0. Why zero? Because they were experiments. The first gate system was built here. And the first betrayal. The gatekeeper back then... was the commander's grandfather.' She closes her eyes." },
            { text: "No one else knows this, right?", effect: +15, next: "'I know. And you know now. Some information requires action, not just keeping it secret.'" }
          ]
        }
      ]
    },
    werewolf_bozkir_d6: {
      name: "BozkÄ±r",
      role: "Day-6 Â· Lycanthrope Enforcer",
      image: "/faces/character_bozkir.png",
      low: [
        {
          text: "...[Low guttural growl] State your business here, uniform. This is my designated quarantine zone.",
          choices: [
            { text: "Conducting a visual check on you, BozkÄ±r.", effect: +8, next: "He narrows his eyes. 'Check? Or a threat assessment?' He turns his back to you." },
            { text: "Querying your current biological status.", effect: +5, next: "He shrugs his massive shoulders. 'Still breathing. That fulfills the quota.'" },
            { text: "Was the night shift hostile?", effect: +3, next: "'Every night cycle here is hostile. I merely... detect it faster than you.'" }
          ]
        },
        {
          text: "This canvas module is severely undersized. But the exterior perimeter is compromised, even for an anomaly like me...",
          choices: [
            { text: "This facility is your designated safe harbor, BozkÄ±r.", effect: +12, next: "He stares at you for a long duration. Then mutters 'Harbor...' as if decrypting the word for the first time." },
            { text: "Why abstain from external operations?", effect: +5, next: "'My biometrics trigger mass panic. And panic causes defense grid failures.'" },
            { text: "Your comfort is not my operational priority.", effect: -18, next: "A deep, chest-rattling growl. Followed by absolute silence." }
          ]
        }
      ],
      medium: [
        {
          text: "Midnight... Just as I was gnawing at my chains in my cell, I sensed something outside. There was a shape, a movement in the very heart of the Mist. But there were no footsteps, it was completely silent. Not like forest predators, but a metallic, artificial silence... This chills even me, soldier.",
          choices: [
            { 
              text: "What kind of movement? Tell me.", 
              effect: +15, 
              next: "'Not human hands. Like metal. Like the dead. I caught its scent. It smells like the Mist, but a different variant.'",
              followUp: {
                text: "He brings his face close to yours. His giant teeth gleam in the dim light. 'I caught that exact scent in the tunnels. When we were researching Sector-0, that smell... it came from test tubes. The Mist storm wasn't an accident, soldier. Someone opened the tubes. Do you know who did it?'",
                choices: [
                  { 
                    text: "That is my question to ask. Who opened them?", 
                    effect: +15, 
                    next: "He takes a wheezing breath. 'A woman. Black attire. Her eyes were gray like the Mist itself. And another one working with her... an old woman.'",
                    followUp: {
                      text: "He turns his back to show massive, bruised claw marks and chemical burn scars on his shoulders. 'See these wounds? They happened when I was first exposed to the Mist, escaping Sector-0. That gray-eyed woman shot silver bullets and toxic gas at my back. That first experience in the Mist... I felt my cells dissolving, my flesh fusing back together like a monster. I can't describe that pain, soldier. Every second I felt my bones breaking and elongating.'",
                      choices: [
                        {
                          text: "How did you survive this mutation?",
                          effect: +18,
                          next: "He strikes his chest with a deep growl. 'Through my sheer feral will. Most humans lose consciousness in the first five minutes and surrender to the Mist. I used the pain as a weapon. But my body was never the same.'",
                          followUp: {
                            text: "He turns back to you. 'My wounds don't heal. Every time the Mist thickens, these scars burn like hot coals. As if that gas outside is calling the beast inside me. Sometimes... when I look in the mirror, I question what is left of the human.'",
                            choices: [
                              {
                                text: "There is still a human inside, Bozkır. I can see it.",
                                effect: +20,
                                next: "The red glow in his eyes softens for a moment. 'To hear that... is the most human thing I've heard in a long time, soldier. Thank you.'",
                                followUp: {
                                  text: "He sighs deeply. 'In those first hours lost in the Mist, my consciousness was on the verge of surrendering completely to the darkness. But the same memory kept looping in my mind: my daughter's birthday, that thin, cheerful voice she made when blowing out the candles on the cake... As the cold claws of the Mist tried to tear my soul away, I clung to that voice. The mutation within the Mist didn't just ruin my body, soldier, it continuously gnaws at my soul. When I close my eyes, I hear that gray Mist whispering to me. Does it whisper to you too?'",
                                  choices: [
                                    {
                                      text: "What does it whisper to you, Bozkır?",
                                      effect: +15,
                                      next: "'It says let go... stop fighting, release the pain, surrender and merge into the serenity of the Mist... It whispers it so sweetly that for a moment, you want to give up everything. But we must wake up and resist. If we surrender, we lose everything that makes us human. The stinging of my wounds reminds me that I am still alive and still have something to fight for.'"
                                    },
                                    {
                                      text: "I do not hear the whispers of the Mist. My mind is like steel.",
                                      effect: +10,
                                      next: "'Good. A will of steel is your greatest shield in this world. But beware, the Mist corrodes even steel. Protect your mind, soldier. If you ever feel yourself weakening, come to me. I will teach you how to roar against those whispers.'"
                                    }
                                  ]
                                }
                              },
                              {
                                text: "We must focus solely on survival.",
                                effect: +10,
                                next: "'You speak truth. Sentimentality is a luxury in the shelter. Only my teeth and claws will be of use.'"
                              }
                            ]
                          }
                        },
                        {
                          text: "What do you think the gray-eyed woman's goal was?",
                          effect: +15,
                          next: "'To convert us. They wanted to create an army compatible with the Mist, feeling no pain and questioning no orders. I am their first successful escaped test subject.'",
                          followUp: {
                            text: "He continues in a whisper: 'Deep in those tunnels, there was a vault room where the blood of some subjects made resistant to the Mist was stored. If we can find that vault, Dr. Arzu might synthesize a serum to stop this mutation. But going there is suicide.'",
                            choices: [
                              {
                                text: "I'll risk my life to find that vault.",
                                effect: +25,
                                next: "He places his claw on your shoulder, gently enough not to hurt. 'Brave but foolish. Still, if you go... remember the map I clawed. Right below the north warehouse.'"
                              },
                              {
                                text: "We should discuss this with the doctor and plan.",
                                effect: +15,
                                next: "'Wise. Arzu is a clever woman. She knows the dangers of those tunnels best.'"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  { 
                    text: "I don't have time for conspiracy theories.", 
                    effect: -10, 
                    next: "'When you run out of time, you will remember how my claws warned you. Leave now.'" 
                  }
                ]
              }
            },
            { text: "Sensory hallucination likely. Disregard.", effect: -8, next: "His eyes narrow into slits. 'I don't process hallucinations. My claws are physical. So are my olfactory receptors.'" },
            { text: "Can you intercept it if it breaches Sector-7?", effect: +10, next: "'Mass. Fangs. I will be fully operational at 0300 hours. You won't be.'" }
          ]
        },
        {
          text: "My daughter... if I broadcast her designation, she wouldn't recognize it. Pre-Mist, my identity was 'Father'. Now, my classification is unknown. If I stood before her with this hairy, wild form, I don't know if she would recognize me.",
          choices: [
            { 
              text: "You are still that father, BozkÄ±r. That hasn't mutated.", 
              effect: +20, 
              next: "His voice drops to a near whisper. A massive claw gently rests against the concrete wall. 'She was five when I last saw her. Her eyes were just like my old eyes... brown, smiling eyes.'",
              followUp: {
                text: "He closes his eyes as if recalling the past. 'When the Mist began to swallow the city, I ran after the convoy taking her to the shelter. But I mutated on the way... The soldiers fired at me, and her protectors fled from me, thinking I was a monster. The look of absolute terror in my daughter's eyes as I tried to save her... That hurts more than these wounds, soldier. She thought I was a monster.'",
                choices: [
                  {
                    text: "She was terrified and couldn't understand. She won't blame you.",
                    effect: +22,
                    next: "He takes a deep breath, his shoulders dropping. 'I hope so. If she is alive, she must be ten now. I promised myself I'd find her. But what will I do if I find her in this monstrous state?'",
                    followUp: {
                      text: "He takes a step toward you. 'Can you help me, soldier? If you receive word from other sectors, will you search for her name? Her name is Selin. Selin Bozkurt. My old last name... before I became a beast.'",
                      choices: [
                        {
                          text: "I promise, Bozkır, I will try every way to find Selin.",
                          effect: +25,
                          next: "He gives you a grateful look. 'This promise... is worth more to me than all the silver in this shelter. Thank you, soldier.'",
                          followUp: {
                            text: "Bozkır turns his eyes toward you, a rare softness in his voice. 'If you find her... there is something I want you to give her.' He reaches into a small, torn pocket on his back and pulls out an old brass pocket watch with worn edges. 'This belonged to my father. There is a small scratch on the back; Selin and I made that scratch with our fingernails. Give this to her and say: \"Your father is still on watch. Even in the Mist, he is protecting you.\" Do you think you can deliver this to her, soldier?'",
                            choices: [
                              {
                                text: "I will take this watch and deliver it to her no matter what.",
                                effect: +25,
                                next: "'I am grateful to you. Now even if I die, I won't have regrets. This watch is the last piece of my humanity. I entrust it to you.'",
                                followUp: {
                                  text: "His hands tremble as he hands you the watch. 'Selin is a very smart child. If she is alive, she is probably helping other children in the shelters. She loved to paint. Especially the sky... They are the last generation to remember when the sky was blue. Do you think the sky will ever be blue again, soldier, or are we condemned to this gray curse forever?'",
                                  choices: [
                                    {
                                      text: "One day we will disperse the Mist completely, and the sky will be blue again.",
                                      effect: +20,
                                      next: "'Hope... these words warm my heart. Even if I don't live to see that day, I will defend this gate until my last breath so Selin can see that blue.'"
                                    },
                                    {
                                      text: "We must be realistic, Bozkır. This Mist seems permanent.",
                                      effect: +5,
                                      next: "'A bitter but realistic perspective. Yet... even if I have to cling to lies to protect Selin's dreams, I will. If I need a lie to fight, let it be so.'"
                                    }
                                  ]
                                }
                              },
                              {
                                text: "I cannot keep the watch, but I will speak on your behalf when I find her.",
                                effect: +10,
                                next: "'That is enough, soldier. Just let her know my name, let her know I haven't forgotten her, that's enough.'"
                              }
                            ]
                          }
                        },
                        {
                          text: "If she is alive, there must be a record somewhere. We'll search.",
                          effect: +12,
                          next: "'I am grateful for even that. At least she won't be entirely forgotten.'"
                        }
                      ]
                    }
                  },
                  {
                    text: "When we find your daughter, she will accept you as you are.",
                    effect: +15,
                    next: "'They say children look with pure love. I hope the Mist hasn't darkened her heart too.'"
                  }
                ]
              }
            },
            { 
              text: "Where are her current coordinates?", 
              effect: +10, 
              next: "'Unknown. Lost during the Sector-5 evacuation. Maybe in another shelter. Or maybe... she surrendered to the Mist.' His eyes well up.",
              followUp: {
                text: "'If she surrendered to the Mist... she has become one of Vera's thralls. If I see her in that state, I'd have to end her suffering with my own claws. That would be the ultimate punishment for a father, soldier.'",
                choices: [
                  {
                    text: "Don't think like that, keep hope alive.",
                    effect: +12,
                    next: "'Hope... is the last thing to die. But here, death is very swift.'"
                  },
                  {
                    text: "If it comes to that, you know what to do.",
                    effect: -5,
                    next: "He growls. 'Knowing is one thing, doing is another, soldier.'"
                  }
                ]
              }
            },
            { text: "Obsolete data. Purge it to survive.", effect: -10, next: "A glacial glare. 'For your systems, perhaps. But my past still beats in these claws.'" }
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

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 6 â€” DOCTOR ARZU
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    doctor_arzu_d6: {
      name: "Doktor Arzu",
      role: "Day-6 Â· Chief Medical Officer",
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
            { 
              text: "What is the strategic implication?", 
              effect: +15, 
              next: "'A potential synthesis of a Mist-vaccine. But it requires a Class-4 lab. And time. And command's authorization.' Her eyes reflect desperate hope.",
              followUp: {
                text: "She leans in. 'There is a subterranean lab not registered in the system database. Located under Sector-3. Someone intentionally locked it. You must infiltrate and retrieve historical blood samples and the specialized equipment. We need those records to decode the pathogen.'",
                choices: [
                  { 
                    text: "Under Sector-3? Salih mentioned that cache too.", 
                    effect: +15, 
                    next: "'Salih? That old scavenger knows too much. If he points there too, we are on the correct vector. Those tunnels lead to the heart of Sector-0, soldier.'",
                    followUp: {
                      text: "Arzu rubs her chin. 'That lab under Sector-3 is no ordinary medical cache. That's where the Mist first started spreading. Project Zero began there. You can't even imagine what kind of secrets are hidden in the depths of those tunnels. Experiment logs, the first mutation samples... Maybe even a formula to completely destroy the source of the Mist. Do you have the courage to go down there, soldier?'",
                      choices: [
                        {
                          text: "I will descend there for Sector-7 and all of humanity. What do I need to do?",
                          effect: +20,
                          next: "'Your courage touches me. I will give you the access keycard to the lab. A colleague left it to me when she fled years ago. But remember, in the corridors of that lab, there might be former personnel who were exposed to the Mist and have completely turned into monsters.'",
                          followUp: {
                            text: "She closes her eyes and takes a deep breath. 'My colleague's name was Leyla. When the lab leaked, she locked herself in. If you find her body or her diary there... Please put her to rest and bring the diary to me. This is a personal debt for me. Can you do this?'",
                            choices: [
                              {
                                text: "I promise, Arzu. I will find Leyla and bring her diary back to you.",
                                effect: +25,
                                next: "'Thank you, soldier. This data and your resolve are the only true light we have in this dark age. Watch your back.'"
                              },
                              {
                                text: "My priority will only be the medical supplies and samples.",
                                effect: +10,
                                next: "'I understand. Survival is the priority. But Leyla's memory... Anyway, keep your eyes open down there.'"
                              }
                            ]
                          }
                        },
                        {
                          text: "We must focus on our current defense, going down there is suicide.",
                          effect: +5,
                          next: "'Perhaps you're right. But waiting behind walls will only lead us to a slow death. I respect your decision regardless.'"
                        }
                      ]
                    }
                  },
                  { 
                    text: "This is a high-risk vector, Arzu.", 
                    effect: -5, 
                    next: "'Is the Mist outside not high-risk? If we don't take action, we decay slowly. The decision is yours.'" 
                  }
                ]
              }
            },
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
            { 
              text: "Secure line established. Transmit, Arzu.", 
              effect: +20, 
              next: "'The Grey Cough is not a mere symptom. It's a staged mutation sequence. Invisible during the first 14 cycles. We may have carriers in our population already. Selim's blood buys us a delay. Authorize my continued research.'",
              followUp: {
                text: "She continues in a whisper: 'Some of the shelter residents are also aware of the situation. Bozkır, for instance... His mutation has developed an incredible resistance to the Mist. I want to analyze his blood samples as well, but he avoids me. He is ashamed of looking like a monster and refuses to enter the Med-Bay. If you can talk to him and get him to help me, perhaps we can find a cure to completely reverse the mutation. Can you convince Bozkır?'",
                choices: [
                  {
                    text: "I'll talk to Bozkır and try to convince him.",
                    effect: +20,
                    next: "'Wonderful! He trusts you, I can see that. If his blood and Selim's cells combine, we can produce an ultimate shield against the Mist mutation. This could be humanity's ticket back.'",
                    followUp: {
                      text: "Arzu gently places her hand on your shoulder. 'What about you, soldier? How do you protect your own mind while trying to save everyone? I know the Mist has effects on you too. That fatigue in your eyes... Sometimes I worry about you too. Don't let anything happen to you, okay?'",
                      choices: [
                        {
                          text: "Don't worry about me, Arzu. Protecting this sector is my only goal.",
                          effect: +15,
                          next: "'I know, but heroes are human too. I am prescribing you a dose of neuro-stabilizer. Use it when you need to. We need you to stay alive.'"
                        },
                        {
                          text: "Sometimes I feel my mind clouding, but I must endure.",
                          effect: +22,
                          next: "'This honesty is very valuable. The Mist preys on the mind's weak moments. I will prepare a special purifying serum for you. It will keep your mind clear. You are not alone, remember that.'"
                        }
                      ]
                    }
                  },
                  {
                    text: "I don't want to force Bozkır, he is already suffering enough.",
                    effect: +10,
                    next: "'You're right, we must respect him. But if he comes of his own free will, our door is always open. Easing his pain is my greatest wish too.'"
                  }
                ]
              }
            },
            { text: "How do we deploy this intel tactically?", effect: +15, next: "'Maintain total blackout. We lack the socio-control agents to manage a panic. I will ping you with updates.'" }
          ]
        }
      ]
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 6 â€” HONEST VAKIF
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    honesty_vakif_d6: {
      name: "VakÄ±f",
      role: "Day-6 Â· Prime Witness",
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
            { text: "Upload the designation.", effect: +25, next: "'Lieutenant RÄ±za. Surveillance officer. Rerouting signal arrays during the night cycle. Outward bounds. Exactly at 03:14 hours every night. I possess the logs.'" },
            { text: "Verify the integrity of this claim.", effect: +18, next: "'Absolute integrity. Twelve consecutive night cycles. Precisely 03:14. No other unit possesses this data.'" }
          ]
        }
      ]
    }
};

const tr_part2 = {
    gang_leader_d6: {
      name: "Ã‡ete Lideri",
      role: "GÃ¼n-6 Â· Tehlikeli Avantaj",
      image: "/faces/d6_gang_member.png",
      low: [
        {
          text: "Sen beni iÃ§eri aldÄ±n. Bu bir nezaket deÄŸil, bir hesap deÄŸil. Bu... ilginÃ§. Pek Ã§oÄŸu almaz beni iÃ§eri. Merak mÄ± ediyorsun neden?",
          choices: [
            { text: "Neden almamalarÄ± gerekiyordu?", effect: +10, next: "'Ã‡Ã¼nkÃ¼ biliyorlar. Ben bu sektÃ¶rde bir ÅŸeyleri kontrol ediyordum. HÃ¢lÃ¢ ediyorum. DuvarÄ±n iÃ§inde de, dÄ±ÅŸÄ±nda da.' SÄ±rÄ±tÄ±yor." },
            { text: "Burada herkes eÅŸit, geÃ§miÅŸ Ã¶nemli deÄŸil.", effect: -5, next: "'EÅŸitlik... Ã§ocukÃ§a bir kelime. Ama devam et asker, devam et.'" },
            { text: "Ä°Ã§eride iÅŸe yarayacaksÄ±n, bu yÃ¼zden alÄ±ndÄ±n.", effect: +5, next: "'DÃ¼rÃ¼stlÃ¼k. Ä°yi.' BaÅŸÄ±nÄ± sallÄ±yor, ama gÃ¶zleri hÃ¢lÃ¢ deÄŸerlendiriyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Sana bir ÅŸey sÃ¶yleyeyim. Ben sis gelmeden iki ay Ã¶nce uyarÄ±ldÄ±m. Anonim bir kaynaktan. 'TaÅŸÄ±n.' denildi. Ben taÅŸÄ±madÄ±m. Ama biliyorum kim uyardÄ± beni.",
          choices: [
            { text: "Kim uyardÄ± seni?", effect: +20, next: "'Bir kadÄ±n. Resmi Ã¼niformalÄ±. Ama Vera'nÄ±n adamÄ± deÄŸildi â€” birinin adamÄ±ydÄ± ama kimin bilmiyorum. Bana 'proje sÄ±fÄ±r aktif' dedi. BaÅŸka bir ÅŸey sÃ¶ylemedi.'" },
            { text: "Bu bilgiyi neden ÅŸimdiye kadar saklamÄ±ÅŸtÄ±n?", effect: +12, next: "'Ã‡Ã¼nkÃ¼ gÃ¼venemezdim kimseye. Åimdi gÃ¼venebileceÄŸim biri var gibi gÃ¶rÃ¼nÃ¼yor. Belki.' BakÄ±ÅŸlarÄ± Ã¶lÃ§Ã¼yor." },
            { text: "Bu askeri bir operasyon, siyasi gÃ¼ndem yok.", effect: -10, next: "'Asker konuÅŸur bÃ¶yle. Siyasi gÃ¼ndem yok derler, tam siyasetle boÄŸazlarÄ±na kadar gÃ¶mÃ¼lÃ¼yken.' GÃ¼ler." }
          ]
        }
      ],
      high: [
        {
          text: "Seninle anlaÅŸma yapmaya hazÄ±rÄ±m. Ben sana Vera'nÄ±n eski tedarik aÄŸÄ±nÄ±n haritasÄ±nÄ± vereyim. Sen bana bursada sahiplerin dÄ±ÅŸÄ±nda kÃ¼Ã§Ã¼k bir Ã¶zerklik ver.",
          isSpecial: true,
          choices: [
            { text: "HaritayÄ± Ã¶nce gÃ¶ster.", effect: +22, next: "'DoÄŸru yaklaÅŸÄ±m.' Cebinden katlanmÄ±ÅŸ bir kaÄŸÄ±t Ã§Ä±karÄ±yor. 'Kuzey depo, yer altÄ± geÃ§iÅŸi, ve â€” bunu Ã¶zellikle not et â€” SektÃ¶r-0 baÄŸlantÄ± noktasÄ±. Vera oradan giriyor. Her seferinde. DÃ¼zenli.'" },
            { text: "AnlaÅŸma yapabiliriz. GÃ¼venin temeli ne?", effect: +15, next: "'Ben sÃ¶zÃ¼mde dururum. Bu ÅŸehirde bu benim tek deÄŸerim.' Elini uzatÄ±yor. 'AnlaÅŸtÄ±k mÄ±?'" }
          ]
        }
      ]
    },

    hunter_resat_d7: {
      name: "AvcÄ± ReÅŸat",
      role: "GÃ¼n-7 Â· YaÅŸlÄ± AvcÄ±",
      image: "/faces/d7_old_hunter.png",
      low: [
        {
          text: "KÄ±rk yÄ±l ormanda avlandÄ±m. Bu sisi gÃ¶rÃ¼nce hayvanlarÄ±n nasÄ±l davrandÄ±ÄŸÄ±nÄ± gÃ¶rdÃ¼m. KaÃ§mÄ±yorlar. Bekliyorlar. Bu Ã§ok kÃ¶tÃ¼ bir iÅŸaret.",
          choices: [
            { text: "Hayvanlar neden kaÃ§mÄ±yor?", effect: +12, next: "'Ã‡Ã¼nkÃ¼ daha Ã¶nce gÃ¶rdÃ¼ler bunu. BilinÃ§altÄ±nda var. Ya da... sis onlarÄ± da deÄŸiÅŸtirdi. Ä°kinci ihtimal daha korkutucu.'" },
            { text: "SektÃ¶rÃ¼n dÄ±ÅŸ haritasÄ±nÄ± biliyor musunuz?", effect: +15, next: "'Her karÄ±ÅŸÄ±nÄ±. KÄ±rk yÄ±l yÃ¼rÃ¼dÃ¼m o topraÄŸÄ±. Nereye Ã§Ä±kÄ±ldÄ±ÄŸÄ±nÄ± bilmek istersen sor.'" },
            { text: "Bu yorumlama Ã§ok sezgisel, bize veri lazÄ±m.", effect: -5, next: "'Veri mi? Benim verilerimi anlayacak makinen yok. Ama gÃ¶zlerim var. Ve gÃ¶rdÃ¼klerimi kanÄ±tlamam gerekmez.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'yÄ± tanÄ±yorum asker. Yani... tanÄ±dÄ±m bir zamanlar. BabasÄ±nÄ± tanÄ±rdÄ±m. Ä°yi bir adamdÄ± â€” mÃ¼hendis. Proje SÄ±fÄ±r'da Ã§alÄ±ÅŸtÄ±. Sonra kayboldu. Vera kÃ¼Ã§Ã¼k bir Ã§ocuktu o zaman.",
          choices: [
            { text: "Vera'nÄ±n babasÄ± hakkÄ±nda ne biliyorsun?", effect: +22, next: "'GerÃ§ek bir inanÃ§lÄ±ydÄ±. 'Ä°nsanÄ± geliÅŸtirmek' diye bir ÅŸeydi kafasÄ±nda. Ä°yi niyetle baÅŸladÄ±. SonrasÄ±... bilmiyorum. Kayboldu. Ve Vera bÃ¼yÃ¼dÃ¼. Ama babasÄ±nÄ±n projesini bitirmek istiyor gibi gÃ¶rÃ¼nÃ¼yor.' DuraksÄ±yor. 'Ama bambaÅŸka bir ÅŸekilde.'" },
            { text: "Vera ÅŸu an nerede Ã¼slenmiÅŸ?", effect: +18, next: "'GÃ¼neydoÄŸu. Eski hayvancÄ±lÄ±k Ã§iftliÄŸi. BÃ¼yÃ¼k bir yapÄ±. Ben oraya yaklaÅŸmÄ±yorum artÄ±k. Hayvanlar bile yaklaÅŸmÄ±yor.'" },
            { text: "Bu bilgiler neden daha Ã¶nce raporlanmadÄ±?", effect: +5, next: "'Ben bir av adamÄ±yÄ±m. Rapor yazmayÄ± bilmiyorum. Ama bilen birini buldum ÅŸimdi.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir yerden bahsedeyim. Kimse bilmez. Ben oraya girdim â€” bir defa. Hayatta dÃ¶ndÃ¼m Ã§Ã¼nkÃ¼ tuzaklarÄ± biliyorum. SektÃ¶r sÄ±nÄ±rÄ±ndan doÄŸuya, sonra bir ormanlÄ±k. OrtasÄ±nda bir yapÄ±. AltÄ±nda devam ediyor.",
          isSpecial: true,
          choices: [
            { text: "Ä°Ã§eride ne gÃ¶rdÃ¼n?", effect: +28, next: "'IÅŸÄ±klar. YeÅŸil, alÃ§ak Ä±ÅŸÄ±klar. Ve sesler â€” hayvan sesi deÄŸil, ama insan da deÄŸil. Orta bir ÅŸey. Ve duvarlar... cam gibi deÄŸil, canlÄ± bir ÅŸey kaplÄ±yor duvarlarÄ±. Hareket ediyordu.' Yutkunuyor. 'Ben iki saatte Ã§Ä±ktÄ±m. Bir gÃ¼nÃ¼m kayÄ±p.'" },
            { text: "Oraya nasÄ±l girdiniz?", effect: +20, next: "'Kuzeydeki Ã§Ã¼rÃ¼k Ã§itten. GÃ¼venlik yok orada â€” Ã§Ã¼nkÃ¼ onlar hayvanlarÄ±n oraya gitmeyeceÄŸini biliyorlar. Hayvanlar gitmiyor. Ama ben gittim.'" }
          ]
        }
      ]
    },

    aras_d8_hero: {
      name: "AraÅŸ",
      role: "GÃ¼n-8 Â· Hakikat ArayÄ±ÅŸÃ§Ä±sÄ±",
      image: "/faces/d8_aras.png",
      low: [
        {
          text: "Burada olmamalÄ±yÄ±m. Yani, burada olmaktan memnunum â€” ama benim varlÄ±ÄŸÄ±m tehlikeli olabilir. Takip ediliyorum bir sÃ¼redir.",
          choices: [
            { text: "Kim takip ediyor seni?", effect: +15, next: "'Resmi bir gÃ¼Ã§ deÄŸil. Ya da resmi gÃ¶rÃ¼nen ama olmayan bir gÃ¼Ã§. SektÃ¶r-0 sorularÄ±m beni buralara taÅŸÄ±dÄ±. Cevaplar beni tehlikeli yapÄ±yor.' DuraksÄ±yor. 'Ama cevaplarÄ± bulmak daha da tehlikeli.'" },
            { text: "SektÃ¶r-0'Ä± neden araÅŸtÄ±rÄ±yorsun?", effect: +20, next: "'Ã‡Ã¼nkÃ¼ kardeÅŸim orada Ã¶ldÃ¼. Resmi kayÄ±t: iÅŸ kazasÄ±. Ama iÅŸ kazalarÄ±nda vÃ¼cut bulunur. KardeÅŸimin cenazesi hiÃ§ teslim edilmedi.'" },
            { text: "Burada gÃ¼vendesin, araÅŸtÄ±rmaya devam et.", effect: +10, next: "'GÃ¼venli... Belki. Ama ben buradasam, tehlike de burayadÄ±r.' UyarÄ±yor ama reddedip gitmiyor." }
          ]
        }
      ],
      medium: [
        {
          text: "SektÃ¶r-0 dosyasÄ±nÄ± buldum. Tam deÄŸil ama yeterince. Ä°Ã§inde Ã¼Ã§ ÅŸey var: bir proje adÄ±, bir tarih, ve bir finansÃ¶r ismi. Tahmin edebilir misin finansÃ¶rÃ¼?",
          choices: [
            { text: "SÃ¶yle, tahmin etmeyelim.", effect: +22, next: "'Devlet deÄŸil. Devlet bÃ¼tÃ§esi geÃ§ti iÃ§inden ama karar verici deÄŸil. Ã–zel bir fon. Ä°smi: GÃ¼mÃ¼ÅŸ Fon VakfÄ±. Bu vakfÄ±n iki yÃ¶neticisi var â€” biri Ã¶lÃ¼, diÄŸeri... Bilmiyorum. Ama Vera bu vakfÄ±n kÄ±zÄ±.' GÃ¶zlerini kaÃ§Ä±rmÄ±yor." },
            { text: "Bu baÄŸlantÄ± doÄŸrulandÄ± mÄ±?", effect: +18, next: "'ÃœÃ§ farklÄ± kaynaktan. Biri devlet arÅŸivi sÄ±zdÄ±rmasÄ±ydÄ±. Ã–mrÃ¼ kÄ±saydÄ± ama ben kopyaladÄ±m.' Cebinden bir bellek kartÄ± Ã§Ä±karÄ±yor. 'BurdaydÄ±.'\"" },
            { text: "Bu bilgiyi nasÄ±l kullanabiliriz?", effect: +12, next: "'Vera'nÄ±n motivasyonunu anlarsak, bir adÄ±m Ã¶nÃ¼ndeyiz. O babasÄ±nÄ±n iÅŸini bitirmek istiyor. Ama 'iÅŸ' neydi? Ä°ÅŸte asÄ±l soru bu.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana sÃ¶yleyeceÄŸim bir ÅŸey var. Proje SÄ±fÄ±r hakkÄ±nda. Ve Vera hakkÄ±nda. Bu bilgiyi Ã¶ÄŸrenirsen geri dÃ¶nÃ¼ÅŸ yok â€” ya da belki tam tersi, anlam bulursun.",
          isSpecial: true,
          choices: [
            { text: "SÃ¶yle. Her ÅŸeyi.", effect: +30, next: "'Vera'nÄ±n babasÄ± deneyleri insanlar Ã¼zerinde yapÄ±yordu â€” gÃ¶nÃ¼llÃ¼. Sis ilaÃ§la baÄŸlantÄ±lÄ±. Ä°lacÄ±n adÄ±: GÃ¼mÃ¼ÅŸ. Ä°nsanlarÄ± sis'e direnÃ§li yapmak iÃ§in. Ama yan etkisi... tam tersi. Ä°lacÄ± alanlar sise dÃ¶nÃ¼ÅŸtÃ¼. Ve Vera bunu biliyor. Ã‡Ã¼nkÃ¼ o da aldÄ± o ilacÄ± â€” kÃ¼Ã§Ã¼cÃ¼kken. Ve dÃ¶nÃ¼ÅŸmedi. Bu onu hem gÃ¼Ã§lÃ¼ hem de... takÄ±ntÄ±lÄ± yaptÄ±.' Nefes alÄ±yor. 'O kendi gibi birileri arÄ±yor.'\"" },
            { text: "Bu bilgiyi nasÄ±l teyit ederiz?", effect: +22, next: "'ÅifacÄ±nÄ±n aldÄ±ÄŸÄ± sÄ±vÄ±yÄ± analiz et. EÄŸer GÃ¼mÃ¼ÅŸ bileÅŸenleri bulunursa â€” Vera iÃ§eri sÄ±zmÄ±ÅŸ demektir. Ve bu sÄ±vÄ±yÄ± biri getirdi.'" }
          ]
        }
      ]
    },

    cultist_kaan_d8: {
      name: "Kaan",
      role: "GÃ¼n-8 Â· Tarikat Ãœyesi",
      image: "/faces/d8_cultist.png",
      low: [
        {
          text: "BuradasÄ±n Ã§Ã¼nkÃ¼ kapÄ±yÄ± aÃ§tÄ±n. Ben buradasÄ±n Ã§Ã¼nkÃ¼ kapÄ± aÃ§Ä±ldÄ±. Fark var mÄ±? Belki. Belki de ikimiz de birer araÃ§Ä±z.",
          choices: [
            { text: "Hangi tarikata Ã¼yesin?", effect: +5, next: "'Tarikat... bir kelime. Biz kendimize inanÃ§ grubu deriz. Sis gerÃ§eÄŸi gÃ¶steriyor. Biz onu yorumluyoruz.' BakÄ±ÅŸlarÄ± yÃ¼zÃ¼nden kayÄ±yor." },
            { text: "Burada dini faaliyete izin veremem.", effect: -10, next: "'Faaliyete deÄŸil, varlÄ±ÄŸa bile izin veremezsin aslÄ±nda. Ama verdin.' Sakin bir cÃ¼mle. Ã‡ok sakin." },
            { text: "Seni gÃ¶zaltÄ±nda tutabilirdim, tutmadÄ±m.", effect: +8, next: "'Biliyorum. Ve bu bir jest deÄŸil â€” bu bir hesap. ZamanÄ± gelir Ã¶dersin ya da Ã¶dettirirsin.' Beklentiyle bakÄ±yor." }
          ]
        }
      ],
      medium: [
        {
          text: "Sis seÃ§iyor. Bunu anlÄ±yor musun? Herkesi almÄ±yor. SeÃ§iyor. Ve seÃ§ilenlerin ortak bir Ã¶zelliÄŸi var.",
          choices: [
            { text: "Ne Ã¶zelliÄŸi?", effect: +15, next: "'Merak.' Duruyor. 'Soran. AraÅŸtÄ±ran. Mevcut dÃ¼zeni sorgulayan. Sis onlarÄ± alÄ±yor â€” ama Ã¶ldÃ¼rmÃ¼yor.' GÃ¶zleri karanlÄ±klaÅŸÄ±yor. 'DÃ¶nÃ¼ÅŸtÃ¼rÃ¼yor.'" },
            { text: "Bu bir inanÃ§tan ibaret.", effect: -5, next: "'Ä°nanÃ§ mÄ±? Ben yirmi Ã¼Ã§ dÃ¶nÃ¼ÅŸÃ¼mÃ¼ kendi gÃ¶zlerimle gÃ¶rdÃ¼m. Bunlar hayal deÄŸil. FotoÄŸraf bile Ã§ektim. Biri kim istersen vereyim.'" },
            { text: "Bunu bizimle paylaÅŸmak iÃ§in mi geldin?", effect: +12, next: "'HayÄ±r. Hayatta kalmak iÃ§in geldim. Ama buradaysam, bir ÅŸeyler Ã¶deyeceÄŸim. Bu benim doÄŸam.' Omuz silkiyor." }
          ]
        }
      ],
      high: [
        {
          text: "[ Kaan bu sefer farklÄ±. RitÃ¼el sesi yok, dini imalar yok. Sadece dÃ¼z, buz gibi bir ses: ] 'Ben bir sÃ¼re Vera'nÄ±n Ã§evresinde idim. GÃ¶nÃ¼llÃ¼ deÄŸil. Zorla deÄŸil. Meraktan. Ve geri dÃ¶ndÃ¼m.'",
          isSpecial: true,
          choices: [
            { text: "Vera ne yapÄ±yor orada?", effect: +25, next: "'Ä°nsanlarÄ± dÃ¶nÃ¼ÅŸtÃ¼rÃ¼yor ve geri bÄ±rakÄ±yor. Tamamen normal gÃ¶rÃ¼nÃ¼yorlar. Ama iÃ§leri... farklÄ±. Lider davranÄ±ÅŸÄ± gÃ¶steriyorlar. Birbirlerini takip ediyorlar â€” koordineli. Ve komutlar alÄ±yorlar. Oradan.' YukarÄ±yÄ± gÃ¶steriyor. HiÃ§bir yer deÄŸil, sadece yukarÄ±. 'Nereden geldiÄŸini bilmiyorum. Ama duyuyorlar.'\"" },
            { text: "Vera'nÄ±n planÄ± ne?", effect: +18, next: "'On dÃ¶rt gÃ¼nlÃ¼k bir dÃ¶ngÃ¼ var. Her dÃ¶ngÃ¼de bir sektÃ¶r. Bu sektÃ¶r dÃ¶ngÃ¼ on dÃ¶rt.' DuraksÄ±yor. 'SayÄ±. Her yerde bu sayÄ±.'" }
          ]
        }
      ]
    },

    mutant_kaya_d9: {
      name: "Kaya",
      role: "GÃ¼n-9 Â· Mutant VarlÄ±k",
      image: "/faces/deney_04.png",
      low: [
        {
          text: "... Bak bana. GÃ¶zlerim tamam. Eller... biraz farklÄ±. Ama ben hÃ¢lÃ¢ benim. Kaya YÄ±lmaz. 1984 doÄŸumlu. SektÃ¶r-3 sakini. Bununla konuÅŸabilirsin.",
          choices: [
            { text: "Seni gÃ¶rÃ¼yorum. Kaya, konuÅŸalÄ±m.", effect: +18, next: "'TeÅŸekkÃ¼rler.' Ä°lk kez yumuÅŸuyor. 'Ã‡oÄŸu kaÃ§Ä±yor. Ya da silah kaldÄ±rÄ±yor. Sen konuÅŸuyorsun. Bu... iyi.'\"" },
            { text: "DeÄŸiÅŸimin baÅŸÄ±nda ne hissettin?", effect: +12, next: "'Ã–nce aÄŸrÄ±. Damarlar. Sonra... netlik. Ã‡ok fazla netlik. Her ÅŸeyi Ã§ok net gÃ¶rÃ¼yorum. Sesler. Renkler. Ve sis â€” sis sanki bir ÅŸey sÃ¶ylÃ¼yor bana.'" },
            { text: "Tehlike oluÅŸturduÄŸunda mÃ¼dahale etmek zorunda kalabilirim.", effect: -10, next: "'HaksÄ±z deÄŸilsin.' BaÅŸÄ±nÄ± eÄŸiyor. 'Tehlikeli olmamaya Ã§alÄ±ÅŸÄ±yorum. Her gÃ¼n.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sis bana bir ÅŸey sÃ¶yledi. Duyabiliyorum onu. Kelime deÄŸil... his. YÃ¶n. Ve ÅŸu an o yÃ¶n sizi gÃ¶steriyor. EndiÅŸelenmelisiniz.",
          choices: [
            { text: "Sis ne sÃ¶ylÃ¼yor hakkÄ±mÄ±zda?", effect: +20, next: "'Ä°Ã§inizde biri... sis ile konuÅŸuyor. Kanal aÃ§Ä±k. Iki yÃ¶nlÃ¼. Ben sedemiyorum kanalÄ± â€” ama var. Bir kiÅŸi. Biri sizin aranÄ±zda Vera ile baÄŸlantÄ± kuruyor.' Titriyor. 'Ve bunu ben sÃ¶ylÃ¼yorum â€” bu beni de endiÅŸelendiriyor.'\"" },
            { text: "Bu sezgiye ne kadar gÃ¼venebiliriz?", effect: +15, next: "'AltÄ± kez yanÄ±lmadÄ±m. SektÃ¶r-3'te aynÄ± his vardÄ± â€” iki gÃ¼n sonra kapÄ±lar aÃ§Ä±ldÄ±. Vera geldi.' GÃ¶zleri donuyor. 'Ben uyarmÄ±ÅŸtÄ±m. Kimse dinlemedi.'" },
            { text: "Bunu kontrol altÄ±nda tutmak iÃ§in ne yapÄ±yorsun?", effect: +8, next: "'Sesi susturmaya Ã§alÄ±ÅŸÄ±yorum. Ama susturamÄ±yorum. Sadece... filtreliyorum. Hangisi Ã¶nemli, hangisi gÃ¼rÃ¼ltÃ¼. Bu da beni yoruyor.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir ÅŸey itiraf edeceÄŸim. Vera... beni tanÄ±yor. KiÅŸisel olarak. Ben onun bir deneyinin parÃ§asÄ±ydÄ±m. Ve bu yÃ¼zden burada deÄŸil, sizin yanÄ±nÄ±zda olmak istedim.",
          isSpecial: true,
          choices: [
            { text: "Vera'nÄ±n deneyi neydi?", effect: +28, next: "'GÃ¼mÃ¼ÅŸ formÃ¼lÃ¼ne direnÃ§ testi. Ben direnenlerden biriydim â€” ama tam deÄŸil. YarÄ± dÃ¶nÃ¼ÅŸtÃ¼m. Bu beni hem onun iÃ§in deÄŸerli hem de tehlikeli yaptÄ±. KaÃ§tÄ±m. Ve burada onu bekliyorum.' Sesi kÄ±rÄ±lÄ±yor. 'Ã‡Ã¼nkÃ¼ o gelecek. Ve ben hazÄ±r olmak istiyorum â€” sizinle.'" },
            { text: "Vera'ya karÅŸÄ± nasÄ±l savaÅŸacaksÄ±n?", effect: +22, next: "'Onu seviyorum. Bu yÃ¼zden daha iyi bileceÄŸim nasÄ±l durulacaÄŸÄ±nÄ±.' Uzun bir sessizlik. 'Bazen savaÅŸmanÄ±n en iyi yolu anlamaktÄ±r.'" }
          ]
        }
      ]
    },

    laughing_man_d9: {
      name: "GÃ¼len Adam",
      role: "GÃ¼n-9 Â· Bilinmez Tehlike",
      image: "/faces/laughing_man.png",
      low: [
        {
          text: "Hahaha... KapÄ±yÄ± geÃ§tim. Hahaha. Sen geÃ§irdin beni. Hahaha. Bunu biliyor musun, komikliÄŸini? Ben hiÃ§ geÃ§emezdim aslÄ±nda. Ama sen geÃ§irdin.",
          choices: [
            { text: "Neden geÃ§emezdin normalde?", effect: +5, next: "'Ã‡Ã¼nkÃ¼ benim ne olduÄŸumu bilmiyorsun. Hahaha. Ve bilmesen de geÃ§irdin. Bu ya cesaret ya aptallÄ±k. Hahaha.' Duruyor. 'Ä°kisi de aynÄ± ÅŸey bazen.'" },
            { text: "Burada kalmak istiyorsan kurallara uy.", effect: -5, next: "'Kurallar! Hahaha. Ben kurallara uyduÄŸum iÃ§in mi buradayÄ±m? Hahaha. HayÄ±r. Hahaha.'" },
            { text: "Tehdit mi ediyorsun bizi?", effect: -8, next: "GÃ¼lÃ¼ÅŸÃ¼ duruyor. Bir an iÃ§in. Sonra normalinden daha yavaÅŸ bir sesle: 'HayÄ±r. UyarÄ±yorum.' Sonra yeniden gÃ¼lÃ¼yor." }
          ]
        }
      ],
      medium: [
        {
          text: "Ben her ÅŸeyi biliyorum ama sÃ¶ylemiyorum. Hahaha. Neden sÃ¶ylemeyeyim biliyor musun? Ã‡Ã¼nkÃ¼ sÃ¶ylesem inanmazsÄ±n. Hahaha. Ve inansan bile geÃ§ kalÄ±rsÄ±n. Hahaha.",
          choices: [
            { text: "SÃ¶yle. Ä°nanÄ±p inanmamak bana kalsÄ±n.", effect: +20, next: "GÃ¼lÃ¼ÅŸÃ¼ yavaÅŸ yavaÅŸ duruyor. Ã‡ok nadir bir ÅŸey. 'SÄ±ÄŸÄ±nakta yedi kiÅŸi var. Yedi kiÅŸi uyurken farklÄ± nefes alÄ±yor. Ritim farklÄ±. Sesten belli. Ben saydÄ±m. Yedi.' Sonra yeniden baÅŸlÄ±yor: 'Hahaha.' Ama bu sefer daha az eÄŸlenceli." },
            { text: "NasÄ±l her ÅŸeyi biliyorsun?", effect: +15, next: "'Ben Ã§ok dinledim. HayatÄ±m boyunca. Ä°nsanlar gÃ¼len birini duymuyor sanÄ±yor. Hahaha. Ama ben her ÅŸeyi duydum. Her ÅŸeyi.' SÃ¼zÃ¼yor seni. 'Seninle ilgili de.'" },
            { text: "Bu tutum yardÄ±mcÄ± olmuyor.", effect: -8, next: "'YardÄ±mcÄ± olmak istemiyorum. Hahaha. Hayatta kalmak istiyorum. Hahaha. Fark var.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ GÃ¼lÃ¼ÅŸÃ¼ tamamen durmuÅŸ. Ä°lk defa. Sesi derin ve sakin. ] 'Seninle dÃ¼zgÃ¼n konuÅŸmam lazÄ±m. Hahaha yok. Sadece gerÃ§ek. HazÄ±r mÄ±sÄ±n?'",
          isSpecial: true,
          choices: [
            { text: "HazÄ±rÄ±m. KonuÅŸ.", effect: +28, next: "'Ben Vera'nÄ±n Ã¶nceki deney numunelerinden biriyim. Ama kaÃ§tÄ±m. GÃ¼lme... yan etki. Sinir hasarÄ±. Kontrol edemiyorum Ã§oÄŸu zaman. Ama kafam Ã§alÄ±ÅŸÄ±yor. Ve biliyorum: on dÃ¶rt gÃ¼n dolduÄŸunda Vera kapÄ±larÄ± aÃ§acak. Sadece silahlÄ± deÄŸil â€” iÃ§eriden yardÄ±m alarak. O yardÄ±m ÅŸu an burada. Sen bilmiyorsun hangisi. Ben biliyorum.' Uzun bir duraklama." },
            { text: "Hangisi? SÃ¶yle.", effect: +22, next: "'SÃ¶ylersem o kiÅŸi kaybolur. Ã‡ok hÄ±zlÄ±. Vera'nÄ±n tepki sÃ¼resi kÄ±sa. Ama ÅŸunu sÃ¶yleyeyim: kadÄ±n. Ve herkesi tanÄ±yor. Ve hiÃ§ ÅŸÃ¼phe Ã§ekmedi ÅŸimdiye kadar.'" }
          ]
        }
      ]
    },

    // GÃœN 9 â€” BÄ°LÄ°M Ä°NSANI ANNA
    scientist_d9: {
      name: "Bilim Ä°nsanÄ± Anna",
      role: "GÃ¼n-9 Â· Son Uzman",
      image: "/faces/scientist_anna.png",
      low: [
        {
          text: "Sorumlu olduÄŸumu dÃ¼ÅŸÃ¼nÃ¼yorsun. Ve... tamamen haksÄ±z deÄŸilsin. AraÅŸtÄ±rma ekibindeydim. Ama durdum ve uyardÄ±m. Dinlemediler.",
          choices: [
            { text: "Ne araÅŸtÄ±rÄ±yordunuz?", effect: +15, next: "'Sis ile biyolojik arayÃ¼z. NasÄ±l kontrol edilir, nasÄ±l yÃ¶nlendirilir. Ekip parlaktÄ±. Ve tamamen etik pusulanÄ±zÄ± kaybetti.' GÃ¶zlerini kÄ±saca kapatÄ±yor." },
            { text: "Olan ÅŸeylerden sorumlu musun?", effect: +8, next: "'KatkÄ±da bulunan. Tek neden deÄŸil. Ä°tiraz ettiÄŸim gÃ¼n projeden Ã§Ä±kardÄ±lar. ÃœÃ§ yÄ±l Ã¶nceydi. SonrasÄ±...' Bitiremedi." },
            { text: "GÃ¼ven oluÅŸtuÄŸunda konuÅŸuruz.", effect: +5, next: "'Adil. Burada olacaÄŸÄ±m.' Ä°ÅŸine dÃ¶nÃ¼yor." }
          ]
        }
      ],
      medium: [
        {
          text: "GÃ¼mÃ¼ÅŸ formÃ¼lÃ¼nÃ¼ ben tasarladÄ±m. Koruma mekanizmasÄ± olarak. BaÄŸÄ±ÅŸÄ±klÄ±k yaratmasÄ± gerekiyordu. Ama hesaplayamadÄ±ÄŸÄ±mÄ±z bir deÄŸiÅŸken vardÄ±: Ä°nsan DNA'sÄ± tekdÃ¼ze deÄŸil. FormÃ¼l herkesi farklÄ± etkiledi.",
          choices: [
            { text: "En kÃ¶tÃ¼ etkisi ne oldu?", effect: +20, next: "'Tam entegrasyon. Denek... sis olur. Ã–lmez. Olur. BilinÃ§li, iletiÅŸim kuran, ama biyolojik anlamda artÄ±k insan deÄŸil. Biz onlara Faz-3 dedik.' Nefes veriyor. 'Vera ÅŸimdi kasÄ±tlÄ± olarak Faz-3 Ã¼retiyor.'" },
            { text: "Panzehir var mÄ±?", effect: +18, next: "'Teoride. Eksik notlarÄ±m var. Ama Faz-4 laboratuvarÄ± gerekiyor. O ekipmanÄ± yÄ±llardÄ±r gÃ¶rmedim.' DuraksÄ±yor. 'SektÃ¶r-0'da hÃ¢lÃ¢ olmadÄ±ysa.'" },
            { text: "Bu bilgi resmi olarak kayÄ±t altÄ±na alÄ±nmalÄ±.", effect: +8, next: "'KatÄ±lÄ±yorum. Ama dikkatli. YanlÄ±ÅŸ ellere geÃ§erse silah olarak kullanÄ±rlar, tedavi olarak deÄŸil.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana Deney-84'Ã¼ anlatmam lazÄ±m. KaÃ§an deneÄŸi. KaÃ§masÄ±na ben yardÄ±m ettim. Ã‡Ã¼nkÃ¼ yapÄ±lanÄ±n yanlÄ±ÅŸ olduÄŸunu anladÄ±m. Bu yÃ¼zden ben de av altÄ±ndayÄ±m.",
          isSpecial: true,
          choices: [
            { text: "Deney-84 hakkÄ±nda her ÅŸeyi anlat.", effect: +28, next: "'Denek 84, GÃ¼mÃ¼ÅŸ formÃ¼lÃ¼ne en yÃ¼ksek direnci gÃ¶sterdi. HiÃ§ dÃ¶nÃ¼ÅŸmedi. Ama tÃ¼m yan etkileri yaÅŸadÄ± â€” sÃ¼rekli aÄŸrÄ±, duyusal aÅŸÄ±rÄ± yÃ¼kleme, sisin sesi. Vera onu kesip direncin kaynaÄŸÄ±nÄ± anlamak istedi. Ä°zin veremedim. KaÃ§masÄ±na yardÄ±m ettim.' Nefes alÄ±yor. 'Denek 84 hÃ¢lÃ¢ hayattaysa... o kiÅŸi panzehirin anahtarÄ± olabilir.'" },
            { text: "Denek 84 burada mÄ±? SÄ±ÄŸÄ±nakta?", effect: +22, next: "Ã‡ok uzun bir duraklama. 'UmarÄ±m Ã¶yle. Buraya gelmemin bir nedeni de buydu.' BaÅŸka bir ÅŸey sÃ¶ylemiyor." }
          ]
        }
      ]
    },

    // GÃœN 7 â€” FÄ°DAN ANA
    mother_fidan_d7: {
      name: "Fidan Ana",
      role: "GÃ¼n-7 Â· Koruyucu Anne",
      image: "/faces/d7_mother.png",
      low: [
        {
          text: "BebeÄŸe dokunma. Kimse dokunmasÄ±n. Ben koruyacaÄŸÄ±m onu. Sisten, insandan, her ÅŸeyden.",
          choices: [
            { text: "Bebek gÃ¼vende, sÃ¶z veriyorum.", effect: +12, next: "'SÃ¶z mÃ¼? SÃ¶zler Ã§Ã¼rÃ¼dÃ¼ bu dÃ¼nyada. Ama gÃ¶zlerinde bir ÅŸey var... tamam.' BebeÄŸi biraz daha sÄ±kÄ± tutuyor." },
            { text: "SÄ±ÄŸÄ±nakta gÃ¼venli bir alan var, istersen oraya geÃ§in.", effect: +15, next: "'GÃ¼venli alan... GÃ¼zel kelime. Bu dÃ¼nyada bÃ¶yle bir yer kaldÄ± mÄ± bilmiyorum. Ama deneyeceÄŸim.' GÃ¶zleri nemiyor." },
            { text: "Herkesin kendine dikkat etmesi gerekiyor.", effect: -10, next: "'Ben kendime deÄŸil, ona bakÄ±yorum.' BebeÄŸi gÃ¶steriyor. 'O benim her ÅŸeyim.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Umut'un babasÄ± SektÃ¶r-5'teydi. KapÄ± kapandÄ±ÄŸÄ±nda iÃ§erideydi. Bana 'kaÃ§' dedi telefonda. Son kelimesi buydu. Ve sonra... sis. Her ÅŸeyi yuttu.",
          choices: [
            { text: "BabasÄ± hakkÄ±nda ne biliyorsun?", effect: +18, next: "'MÃ¼hendisti. Vera'nÄ±n projesinde Ã§alÄ±ÅŸÄ±yordu. Zorunlu gÃ¶revdi â€” reddetseydi hapis. Ama son hafta bir ÅŸey deÄŸiÅŸti. Korkuyordu. Ve bana 'deneyleri gÃ¶rdÃ¼m' dedi. Daha fazlasÄ±nÄ± sÃ¶ylemedi.'" },
            { text: "Umut nasÄ±l? SaÄŸlÄ±ÄŸÄ± iyi mi?", effect: +20, next: "'Fiziksel olarak iyi. Ama... gece aÄŸlamayÄ± bÄ±raktÄ±. Bebeklerin aÄŸlamasÄ± normaldir. O aÄŸlamÄ±yor. Ve bazen gÃ¶zleri... parÄ±ldÄ±yor. FarklÄ± bir parlaklÄ±k.' Sesi titriyor." },
            { text: "GeÃ§miÅŸ geride kaldÄ±, ileriye bakmak lazÄ±m.", effect: -5, next: "'GeÃ§miÅŸ geride kalmadÄ±. GeÃ§miÅŸ ÅŸu an dÄ±ÅŸarÄ±da, sis olarak.' Sert bakÄ±yor." }
          ]
        }
      ],
      high: [
        {
          text: "Sana Umut hakkÄ±nda bir ÅŸey sÃ¶yleyeceÄŸim. Kimseye sÃ¶ylemedim. Ama sen bilmelisin Ã§Ã¼nkÃ¼ eÄŸer bir ÅŸey olursa... onu korumanÄ± istiyorum.",
          isSpecial: true,
          choices: [
            { text: "SÃ¶yle. KoruyacaÄŸÄ±m.", effect: +28, next: "'Umut normal doÄŸmadÄ±. Vera'nÄ±n laboratuvarÄ±nda doÄŸdu â€” gizli bir prosedÃ¼rle. BabasÄ± orada Ã§alÄ±ÅŸÄ±rken beni de Ã§aÄŸÄ±rdÄ±lar. Ä°laÃ§lar verdiler hamilelik boyunca. GÃ¼mÃ¼ÅŸ renkli ilaÃ§lar. Ve Umut doÄŸduÄŸunda... sis onu etkilemedi. HiÃ§. Sanki baÄŸÄ±ÅŸÄ±k.' GÃ¶zlerinden yaÅŸlar akÄ±yor. 'OÄŸlum bir deney mi? Yoksa umut mu?'" },
            { text: "Umut'u test etmemiz gerekebilir.", effect: +15, next: "'Test... Biliyorum. Ama sana yalvarÄ±yorum â€” asla Vera'nÄ±n eline geÃ§mesin. Asla.' Sesi Ã§atallÄ±yor." }
          ]
        }
      ]
    },

    // GÃœN 7 â€” BEBEK UMUT
    baby_umut_d7: {
      name: "Bebek Umut",
      role: "GÃ¼n-7 Â· Umut KÄ±vÄ±lcÄ±mÄ±",
      image: "/faces/d7_baby.png",
      low: [
        {
          text: "[ Bebek sana bakÄ±yor. GÃ¶zleri olaÄŸandÄ±ÅŸÄ± berrak. AÄŸlamÄ±yor. GÃ¼lmÃ¼yor. Sadece izliyor. Sanki anlÄ±yor. ]",
          choices: [
            { text: "[ BebeÄŸe gÃ¼lÃ¼mse. ]", effect: +10, next: "[ Bebek de gÃ¼lÃ¼msÃ¼yor. Ama bir bebekten beklenmeyecek kadar bilinÃ§li bir gÃ¼lÃ¼mseme. Fidan Ana: 'GÃ¶rdÃ¼n mÃ¼? O biliyor.' ]" },
            { text: "[ BebeÄŸi dikkatlice incele. ]", effect: +8, next: "[ GÃ¶zlerinde hafif gÃ¼mÃ¼ÅŸi bir ton var. Normal Ä±ÅŸÄ±kta gÃ¶rÃ¼nmez ama karanlÄ±kta parlÄ±yor. Fidan Ana endiÅŸeyle izliyor seni. ]" },
            { text: "[ UzaklaÅŸ. ]", effect: -5, next: "[ Bebek uzaklaÅŸtÄ±ÄŸÄ±nda aÄŸlamaya baÅŸlÄ±yor. Ä°lk kez ses Ã§Ä±karmasÄ±. Fidan Ana hÄ±zla yanÄ±na koÅŸuyor. ]" }
          ]
        }
      ],
      medium: [
        {
          text: "[ Bebek bu sefer farklÄ±. ParmaklarÄ±yla havada bir ÅŸekil Ã§iziyor â€” tekrar tekrar. Bir daire, iÃ§inde bir nokta. SektÃ¶r-0 sembolÃ¼. ]",
          choices: [
            { text: "[ Åekli kaydet ve analiz et. ]", effect: +20, next: "[ Doktor Arzu daha sonra teyit ediyor: 'Bu Proje SÄ±fÄ±r'Ä±n resmi logosu. Bir bebek bunu nasÄ±l bilebilir?' Herkes sessiz. ]" },
            { text: "[ Fidan Ana'ya sor. ]", effect: +15, next: "'Bunu daha Ã¶nce de yapÄ±yordu. Uyurken. ParmaklarÄ±yla aynÄ± ÅŸekli Ã§iziyor. Her gece.' Korkuyor ama oÄŸlunu korumaktan vazgeÃ§miyor." }
          ]
        }
      ],
      high: [
        {
          text: "[ Gece yarÄ±sÄ±. Bebek uyanÄ±k. Ve fÄ±sÄ±ldÄ±yor. Bebeklerin fÄ±sÄ±ldayamayacaÄŸÄ± kadar net, kadar dÃ¼zgÃ¼n: 'KapÄ±. On. DÃ¶rt.' Sonra uyuyor. ]",
          isSpecial: true,
          choices: [
            { text: "[ Bunu kayÄ±t altÄ±na al. ]", effect: +25, next: "[ KayÄ±t cihazÄ± sesi yakalÄ±yor. DinlettiÄŸinde herkes donuyor. Anna: 'Bu formÃ¼lÃ¼n etkisi. Bilgi transfer ediliyor. Bebek bir alÄ±cÄ±.' Fidan Ana aÄŸlÄ±yor. 'OÄŸlum alet deÄŸil.' ]" },
            { text: "[ Fidan Ana'yÄ± yalnÄ±z bÄ±rak. ]", effect: +15, next: "[ Ertesi gÃ¼n Fidan Ana sana geliyor: 'DÃ¼n gece olanlara raÄŸmen ona baktÄ±n. TeÅŸekkÃ¼r ederim.' GÃ¼veni artÄ±yor. ]" }
          ]
        }
      ]
    },

    // GÃœN 8 â€” ARAYAN BABA
    searching_father_d8: {
      name: "Arayan Baba",
      role: "GÃ¼n-8 Â· KayÄ±p PeÅŸinde",
      image: "/faces/d8_searching_father.png",
      low: [
        {
          text: "KÄ±zÄ±m... On iki yaÅŸÄ±nda. DÄ±ÅŸarÄ±da bir yerde. Ya da... baÅŸka bir yerde. Bilmiyorum. Ama her gÃ¼n arÄ±yorum.",
          choices: [
            { text: "KÄ±zÄ±nÄ± en son nerede gÃ¶rdÃ¼n?", effect: +15, next: "'SektÃ¶r-3 sÄ±nÄ±rÄ±nda. Sis geldiÄŸinde okuldan dÃ¶nÃ¼yordu. KoÅŸtum. Ama sis daha hÄ±zlÄ±ydÄ±.' Sesi boÄŸuluyor. 'Ve ÅŸimdi her gÃ¼n dÄ±ÅŸarÄ±ya gidip bakÄ±yorum. Her gÃ¼n.'" },
            { text: "DÄ±ÅŸarÄ±sÄ± Ã§ok tehlikeli, burada bekle.", effect: +5, next: "'Bekleyemem. Sen Ã§ocuÄŸu olmayan birisin belki. Bir gÃ¼n anlarsÄ±n.' Ã‡aresiz gÃ¼lÃ¼msÃ¼yor." },
            { text: "Onu bulmak imkansÄ±z olabilir.", effect: -15, next: "GÃ¶zleri buz kesiyor. 'Bunu bana bir daha sÃ¶yleme.' SÄ±rtÄ±nÄ± dÃ¶nÃ¼yor." }
          ]
        }
      ],
      medium: [
        {
          text: "DÄ±ÅŸarÄ±da aradÄ±m onu. Her gÃ¼n. Ve bir gÃ¼n bir ÅŸey buldum â€” kÄ±zÄ±mÄ±n paltosu. Ama Ã¼zerinde garip bir ÅŸey vardÄ±. Gri toz. Ve paltonun cebinde bir kaÄŸÄ±t.",
          choices: [
            { text: "KaÄŸÄ±tta ne yazÄ±yordu?", effect: +22, next: "'Koordinatlar. Resmi gÃ¶rÃ¼nÃ¼mlÃ¼ el yazÄ±sÄ±yla. Ve altÄ±nda: 'Teslim noktasÄ± 7.' KÄ±zÄ±mÄ± birileri aldÄ±. Rastgele deÄŸil â€” planlÄ±.' Elleri sÄ±kÄ±lÄ±yor." },
            { text: "Gri toz GÃ¼mÃ¼ÅŸ formÃ¼lÃ¼ olabilir.", effect: +18, next: "'Ne formÃ¼lÃ¼?' ÅaÅŸkÄ±n. Ama anlatÄ±ldÄ±ÄŸÄ±nda yÃ¼zÃ¼ deÄŸiÅŸiyor. 'O zaman kÄ±zÄ±ma ne yaptÄ±lar?' FÄ±sÄ±ldÄ±yor." },
            { text: "Paltodaki kanÄ±tlarÄ± kayÄ±t altÄ±na alalÄ±m.", effect: +12, next: "'Palto burada. Al.' Ceketten Ã§Ä±karÄ±yor. 'Ama bana sÃ¶z ver â€” kÄ±zÄ±mÄ± bulacaÄŸÄ±z.'" }
          ]
        }
      ],
      high: [
        {
          text: "KÄ±zÄ±mÄ± buldum. Ama... o artÄ±k kÄ±zÄ±m deÄŸil. DÄ±ÅŸarÄ±da gÃ¶rdÃ¼m. GÃ¶zleri aynÄ± ama bakÄ±ÅŸÄ± farklÄ±. Ve beni tanÄ±madÄ±. 'Baba' demedi. Sadece baktÄ± ve yÃ¼rÃ¼dÃ¼.",
          isSpecial: true,
          choices: [
            { text: "Ne olduÄŸunu anlat, lÃ¼tfen.", effect: +28, next: "'Sis onu almÄ±ÅŸ. Ama Ã¶ldÃ¼rmemiÅŸ. DÃ¶nÃ¼ÅŸtÃ¼rmÃ¼ÅŸ. Vera'nÄ±n Ã§ocuklarÄ± â€” onlara bÃ¶yle deniyormuÅŸ. KÃ¼Ã§Ã¼k yaÅŸtakileri alÄ±yorlar. ProgramlÄ±yorlar. Ve geri bÄ±rakÄ±yorlar. GÃ¶zÃ¼ gÃ¶rÃ¼r, kulaÄŸÄ± duyar ama... iÃ§i boÅŸ.' AÄŸlÄ±yor. 'KÄ±zÄ±m yaÅŸÄ±yor ama onu kaybettim.'" },
            { text: "Onu geri getirebilir miyiz?", effect: +20, next: "'Bilim Ä°nsanÄ± Anna bir ihtimalden bahsetti. Panzehir. Ama erken evrede olmalÄ±ymÄ±ÅŸ. KÄ±zÄ±mÄ±n dÃ¶nÃ¼ÅŸÃ¼mÃ¼ ne aÅŸamada bilmiyorum.' Umutsuz ama pes etmemiÅŸ." }
          ]
        }
      ]
    },

    // GÃœN 10 â€” KAÃ‡AK (DENEY-04)
    escapee_d10: {
      name: "KaÃ§ak",
      role: "GÃ¼n-10 Â· Sistem KaÃ§aÄŸÄ±",
      image: "/faces/deney_04.png",
      low: [
        {
          text: "[ Titriyor. GÃ¶zleri sÃ¼rekli kapÄ±ya gidiyor. ] Beni geri gÃ¶ndermeyeceksin deÄŸil mi? SÃ¶z ver. LÃ¼tfen. Oraya dÃ¶nmektense Ã¶lÃ¼rÃ¼m.",
          choices: [
            { text: "GÃ¶ndermeyeceÄŸim. BurasÄ± gÃ¼venli.", effect: +18, next: "'GÃ¼venli... Bu kelimeyi uzun zamandÄ±r duymadÄ±m.' YavaÅŸÃ§a sakinliyor. 'TeÅŸekkÃ¼r ederim. AdÄ±m... artÄ±k adÄ±m yok. Bana 04 diyorlardÄ±.'" },
            { text: "Nereden kaÃ§tÄ±n? Ne gÃ¶rdÃ¼n?", effect: +12, next: "'Vera'nÄ±n yeraltÄ± tesisinden. Orada... insanlar var. TÃ¼plerde. YeÅŸil sÄ±vÄ± iÃ§inde. Uyuyorlar ama... dÃ¶nÃ¼ÅŸÃ¼yorlar. Ve uyanÄ±nca farklÄ± oluyorlar.' Titremesi artÄ±yor." },
            { text: "Seni sorgulamam gerekecek.", effect: -10, next: "'Sorgulama... Orada da sorgulama vardÄ±. Sonra iÄŸneler. Sonra karanlÄ±k.' Geri Ã§ekiliyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'nÄ±n tesisi hakkÄ±nda bildiÄŸim her ÅŸeyi anlatacaÄŸÄ±m. Ama bunu anlatÄ±rken ben de hatÄ±rlayacaÄŸÄ±m. Ve hatÄ±rlamak... acÄ± veriyor.",
          choices: [
            { text: "HazÄ±r olduÄŸunda anlat, acele yok.", effect: +22, next: "'Alt kat. ÃœÃ§ bÃ¶lÃ¼m var. Birincisi laboratuvar â€” formÃ¼l Ã¼retimi. Ä°kincisi dÃ¶nÃ¼ÅŸÃ¼m odasÄ± â€” insanlar giriyor, farklÄ± Ã§Ä±kÄ±yor. ÃœÃ§Ã¼ncÃ¼sÃ¼... kontrol odasÄ±. Vera orada. Ekranlar var. Her sektÃ¶rÃ¼ izliyor. Her birini.' Nefes alÄ±yor. 'Ve bir bÃ¼yÃ¼k ekran var â€” sÄ±ÄŸÄ±naklarÄ±n haritasÄ±. Sizin de.'" },
            { text: "KaÃ§ kiÅŸi var orada?", effect: +18, next: "'SayamadÄ±m. Ama yÃ¼zlerce. Ã‡oÄŸu uyuyor â€” tÃ¼plerde. Vera onlara 'tohumlar' diyor. HazÄ±r olduklarÄ±nda serbest bÄ±rakÄ±lacaklarmÄ±ÅŸ. Ne zaman? On dÃ¶rt gÃ¼n sonra.'" },
            { text: "Bu bilgiyi doÄŸrulayabilir miyiz?", effect: +8, next: "'Bilim Ä°nsanÄ± Anna doÄŸrulayabilir. O tesiste Ã§alÄ±ÅŸtÄ±. Ve benim kaÃ§mama yardÄ±m etti.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Bu sefer 04 Ã§ok sakin. Daha Ã¶nce hiÃ§ bu kadar sakin olmamÄ±ÅŸtÄ±. ] 'Sana bir sÄ±r vereceÄŸim. Vera'nÄ±n zayÄ±f noktasÄ±nÄ±.',",
          isSpecial: true,
          choices: [
            { text: "SÃ¶yle.", effect: +30, next: "'FormÃ¼l kendi baÅŸÄ±na Ã§alÄ±ÅŸmÄ±yor. Bir merkez sinyale ihtiyacÄ± var. Bir verici. Vera'nÄ±n tesisinin kalbinde. Bunu yok ederseniz â€” formÃ¼l iÅŸlevini yitirir. DÃ¶nÃ¼ÅŸenler durmaz ama yeni dÃ¶nÃ¼ÅŸÃ¼m olmaz. Ve zamanla... belki geri dÃ¶nerler. Belki.' GÃ¶zleri Ä±ÅŸÄ±ldÄ±yor. 'Vericinin koordinatlarÄ±nÄ± biliyorum.'" },
            { text: "Bu vericiye nasÄ±l ulaÅŸÄ±lÄ±r?", effect: +22, next: "'Tesise girmeniz lazÄ±m. Ve iÃ§erideki tuzaklarÄ± bilmeniz lazÄ±m. Ben bilirim. Beni gÃ¶tÃ¼rÃ¼rsen yolu gÃ¶steririm.' Korkuyor ama kararlÄ±." }
          ]
        }
      ]
    },

    // GÃœN 10 â€” SUÄ°KASTÃ‡I (KARANLIK)
    assassin_d10: {
      name: "SuikastÃ§Ä±",
      role: "GÃ¼n-10 Â· GÃ¶lge TetikÃ§i",
      image: "/faces/assassin_wraith.png",
      low: [
        {
          text: "[ KaranlÄ±kta oturuyor. Ses Ã§Ä±karmÄ±yor. YaklaÅŸtÄ±ÄŸÄ±nda sadece: ] Bir adÄ±m daha ve son adÄ±mÄ±n olur.",
          choices: [
            { text: "Ben tehdit deÄŸilim. KonuÅŸalÄ±m.", effect: +5, next: "'KonuÅŸmak iÅŸime yaramaz. Ama...' Uzun bir duraklama. 'Tamam. Ama mesafeni koru.'" },
            { text: "Sen kimsin?", effect: +3, next: "'KimliÄŸim Ã¶ldÃ¼. Ben sadece bir araÃ§tÄ±m. Åimdi aracÄ±n iÃ§in pasÄ± yedi.' Sert ama yorgun." },
            { text: "SilahÄ±nÄ± bÄ±rak, burada kurallar var.", effect: -15, next: "'Kurallar mÄ±?' Sessiz bir gÃ¼lÃ¼ÅŸ. 'Kurallarla yaÅŸayanlar dÄ±ÅŸarÄ±da kaldÄ±.' Ama silahÄ±nÄ± yavaÅŸÃ§a masaya koyuyor." }
          ]
        }
      ],
      medium: [
        {
          text: "Ben Vera'nÄ±n eski ajanÄ±yÄ±m. GÃ¶lge birim. Ä°ÅŸimiz basitti: hedefleri susturmak. Ama bir gÃ¼n hedef listesinde tanÄ±dÄ±ÄŸÄ±m biri Ã§Ä±ktÄ±.",
          choices: [
            { text: "Kim Ã§Ä±ktÄ± listede?", effect: +20, next: "'KardeÅŸim.' Uzun sessizlik. 'O zaman anladÄ±m â€” sistem umursamÄ±yor. Herkes bir numaradÄ±r. Ben de. Ve o gÃ¼n dÃ¶ndÃ¼m.' BakÄ±ÅŸlarÄ± soÄŸuk ama bir yerleri kÄ±rÄ±lmÄ±ÅŸ." },
            { text: "Vera'nÄ±n gÃ¶lge birimi hakkÄ±nda ne biliyorsun?", effect: +18, next: "'Her ÅŸeyi. KaÃ§ kiÅŸi var, kim nerede, ne zaman hareket ediyor. GÃ¼zergahlar, sinyal kodlarÄ±, giriÅŸ noktalarÄ±.' DuraksÄ±yor. 'Bu bilgiyi bedavaya vermem ama burada hayatta kalmama yardÄ±m et, ben de yardÄ±m edeyim.'" },
            { text: "Sana gÃ¼venemem.", effect: -5, next: "'AkÄ±llÄ±ca. Bana gÃ¼venme. Ama bilgime gÃ¼ven. Ã‡Ã¼nkÃ¼ benim hayatÄ±m da bu bilgiye baÄŸlÄ±.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Gece. Seni uyandÄ±rÄ±yor. Sessizce. ] 'YarÄ±n gece bir saldÄ±rÄ± planlanÄ±yor. Ä°Ã§eriden. ÃœÃ§ kiÅŸi. Ve ben hepsini tanÄ±yorum.'",
          isSpecial: true,
          choices: [
            { text: "Ä°simleri ver.", effect: +28, next: "'Biri kÃ¼Ã§Ã¼k rÃ¼tbeli, nÃ¶bet tutan â€” TeÄŸmen RÄ±za. Ä°kincisi sÄ±ÄŸÄ±nak personelinden, kayÄ±t memuru. ÃœÃ§Ã¼ncÃ¼sÃ¼...' DuraksÄ±yor. 'ÃœÃ§Ã¼ncÃ¼sÃ¼nÃ¼ sÃ¶ylesem inanmazsÄ±n. Ama sÃ¶yleyeceÄŸim: Naciye. GÃ¶zcÃ¼ Naciye.' GÃ¶zleri buz gibi." },
            { text: "SaldÄ±rÄ±yÄ± nasÄ±l durdurabiliriz?", effect: +22, next: "'Sadece birini etkisiz hale getir â€” RÄ±za'yÄ±. KoordinatÃ¶r o. DiÄŸerleri onsuz hareket edemez. Ama bunu sessizce yapmalÄ±sÄ±n. Yoksa Vera anlar ve planÄ± deÄŸiÅŸtirir.'" }
          ]
        }
      ]
    },

    // GÃœN 10 â€” ORACLE (KARANLIK/GÄ°ZEMLÄ°)
    oracle_d10: {
      name: "Oracle",
      role: "GÃ¼n-10 Â· Gizemin Sesi",
      image: "/faces/oracle_blind.png",
      low: [
        {
          text: "[ GÃ¶zleri baÄŸlÄ±. Sana dÃ¶nÃ¼p bakÄ±yor â€” ama gÃ¶rmÃ¼yor. Ya da gÃ¶rmekten baÅŸka bir ÅŸekilde algÄ±lÄ±yor. ] Sen geldin. Biliyordum geleceksin. ÃœÃ§ gÃ¼ndÃ¼r bekliyorum.",
          choices: [
            { text: "Beni nasÄ±l biliyordun?", effect: +15, next: "'Sis anlatÄ±yor. Her ÅŸeyi. Ben dinlemeyi Ã¶ÄŸrendim â€” ve karÅŸÄ±lÄ±ÄŸÄ±nÄ± Ã¶dedim.' BaÄŸÄ±nÄ± gÃ¶steriyor. 'GÃ¶zlerimi verdim. KarÅŸÄ±lÄ±ÄŸÄ±nda gerÃ§eÄŸi aldÄ±m.'" },
            { text: "GÃ¶zlerine ne oldu?", effect: +12, next: "'Ben yaptÄ±m. Kendime. Sis'i gÃ¶rmek istemiyordum â€” gÃ¶rsel olarak. Ã‡Ã¼nkÃ¼ gÃ¶rsel algÄ± yanÄ±ltÄ±r. Ama ses... ses yalan sÃ¶ylemez.' Sakin ama Ã¼rkÃ¼tÃ¼cÃ¼." },
            { text: "Bu bir dÃ¼zenbazlÄ±k olabilir.", effect: -8, next: "'DÃ¼zenbaz mÄ±? Peki yarÄ±n gÃ¼neydoÄŸudan Ã¼Ã§ kiÅŸi gelecek. Biri yaralÄ±. Biri kadÄ±n. Biri Ã§ocuk. GÃ¶receksin.' Ve gerÃ§ekten olur." }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'nÄ±n gerÃ§ek adÄ± Vera deÄŸil. Bunu biliyor muydun? Vera bir kod adÄ±. Projektin adÄ±: Veri AktarÄ±m ProtokolÃ¼. VERA. Ve 'o' bir kiÅŸi deÄŸil â€” bir program.",
          choices: [
            { text: "Vera bir program mÄ±?", effect: +25, next: "'Bir kiÅŸi var evet â€” canlÄ±, nefes alan. Ama o kiÅŸi programÄ±n yÃ¼zÃ¼. KararlarÄ± veren program. Yapay zeka deÄŸil... daha eski bir ÅŸey. SektÃ¶r-0'da yaratÄ±ldÄ±. Ä°nsanlardan Ã¶ÄŸrendi. Ve ÅŸimdi insanlarÄ± yÃ¶netiyor.' Yutkunuyor. 'KÄ±z sadece arayÃ¼z.'", followUp: { text: "GÃ¶z baÄŸÄ±nÄ±n altÄ±ndan sana baktÄ±ÄŸÄ±nÄ± hissediyorsun. 'ProgramÄ±n asÄ±l amacÄ± bizi kontrol etmek deÄŸil... bizi bir sonraki aÅŸamaya hazÄ±rlamaktÄ±. Sis, bu geÃ§iÅŸin katalizÃ¶rÃ¼. Sen de bu deneye dÃ¢hilsin OperatÃ¶r.'", choices: [{text: "Bunu nasÄ±l durdurabiliriz?", effect: +15, next: "AcÄ± acÄ± gÃ¼lÃ¼msÃ¼yor. 'Durdurmak mÄ±? Seli ellerinle durdurabilir misin? Sadece akÄ±ÅŸÄ±na yÃ¶n verebilirsin. Sunucu odasÄ±nÄ± bulman gerekiyor.'"}, {text: "Sus artÄ±k ihtiyar, bunlar saÃ§malÄ±k.", effect: -10, next: "BaÅŸÄ±nÄ± eÄŸiyor. 'SaÄŸÄ±r olan ben deÄŸilim... sensin. GerÃ§eklerle yÃ¼zleÅŸtiÄŸinde bu anÄ± hatÄ±rlayacaksÄ±n.'"}] } },
            { text: "Bu bilgi nereden geliyor?", effect: +18, next: "'Sisten. Sis konuÅŸuyor. Ben dinliyorum. Ã‡oÄŸu insan duymaz â€” Ã§Ã¼nkÃ¼ gÃ¶zleri var. GÃ¶zler gÃ¼rÃ¼ltÃ¼ yapar. Ben sessizliÄŸi seÃ§tim.' BaÄŸÄ±na dokunuyor." },
            { text: "Buna inanmak Ã§ok zor.", effect: +5, next: "'Ä°nanmana gerek yok. DoÄŸrulamana gerek var. Anna'ya sor. O da biliyor. Ama sÃ¶ylemeye korkuyor.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ Gecenin en karanlÄ±k saatinde seni Ã§aÄŸÄ±rÄ±yor. ] 'On dÃ¶rt gÃ¼n dolmak Ã¼zere. Ve ben sana son bilgiyi vereceÄŸim. Bundan sonra konuÅŸamam â€” Ã§Ã¼nkÃ¼ sis beni alacak.'",
          isSpecial: true,
          choices: [
            { text: "Seni kurtarabiliriz.", effect: +30, next: "'KurtaramazsÄ±nÄ±z. Ben zaten yarÄ±sÄ±yÄ±m. Ama ÅŸunu bilin: Vera'nÄ±n vericisi yok edilirse, dÃ¶nÃ¼ÅŸÃ¼m durur. Verici SektÃ¶r-0'Ä±n tam altÄ±nda. Ama oraya girmek iÃ§in bir anahtar lazÄ±m â€” biyometrik. Ve o anahtar...' DuraksÄ±yor. 'Bebek Umut'un kanÄ±. O Ã§ocuk formÃ¼le direnÃ§li doÄŸdu. KanÄ± vericinin kilidini aÃ§ar ve aynÄ± zamanda onu yok eder.' Sessizlik Ã§Ã¶kÃ¼yor." },
            { text: "Oracle, kÄ±z kardeÅŸin burada. Sessiz KadÄ±n.", effect: +25, next: "Ä°lk kez yÃ¼zÃ¼nde bir duygu. AcÄ±. 'Biliyorum. Sesini duyamadÄ±ÄŸÄ±mÄ± biliyorum ama varlÄ±ÄŸÄ±nÄ± hissediyorum. Ona sÃ¶yle... Ã¶zÃ¼r dilerim. Korumak iÃ§in uzaklaÅŸtÄ±rmÄ±ÅŸtÄ±m. Ama sis hepimizi bir araya getirdi sonunda.' GÃ¶zyaÅŸlarÄ± baÄŸÄ±n altÄ±ndan akÄ±yor." }
          ]
        }
      ]
    },

    // GÃœN 11 â€” ENFEKTE OÄUZ (KARANLIK)
    infected_oguz_d11: {
      name: "Enfekte OÄŸuz",
      role: "GÃ¼n-11 Â· Sis KurbanÄ±",
      image: "/faces/infected_oguz.png",
      low: [
        {
          text: "[ Nefes almasÄ± aÄŸÄ±r, tÄ±slayarak. GÃ¶zlerinde gri damarlar belirgin. ] Bana... bakma. BÃ¶yle. Ben bu deÄŸilim. Ben OÄŸuz'um.",
          choices: [
            { text: "Seni gÃ¶rÃ¼yorum OÄŸuz. KonuÅŸalÄ±m.", effect: +15, next: "'Ä°nsan gibi konuÅŸuyor benimle.' Nefesi bir an dÃ¼zeliyor. 'Ã‡oÄŸu kaÃ§Ä±yor. Sen... kaldÄ±n.' GÃ¶zlerindeki gri bir an geriyor." },
            { text: "Enfeksiyon ne aÅŸamada?", effect: +8, next: "'Bilmiyorum. Ama geceleri ses duyuyorum. Sis bana bir ÅŸeyler sÃ¶ylÃ¼yor. Ve en korktuÄŸum ÅŸey... anlamaya baÅŸlÄ±yorum onu.'" },
            { text: "Karantinaya alÄ±nman gerekebilir.", effect: -12, next: "'Karantina... Orada da karantina vardÄ±. Sonra denekler baÅŸladÄ±. LÃ¼tfen.' GÃ¶zleri dehÅŸetle aÃ§Ä±lÄ±yor." }
          ]
        }
      ],
      medium: [
        {
          text: "Sis bana konuÅŸuyor. Her gece daha net. Kelimeler var artÄ±k â€” isimler. Ve senin ismini de sÃ¶ylÃ¼yor.",
          choices: [
            { text: "Sis benim adÄ±mÄ± mÄ± sÃ¶ylÃ¼yor?", effect: +20, next: "'SÃ¶ylemiyor aslÄ±nda. Daha Ã§ok... gÃ¶steriyor. Kimin nerede olduÄŸunu biliyorum. GÃ¶zlerimi kapatsam bile. Sen ÅŸimdi saÄŸÄ±mda, iki metre. Ve kalp atÄ±ÅŸÄ±n hÄ±zlÄ±.' DoÄŸru sÃ¶ylÃ¼yor." },
            { text: "Bu yeteneÄŸi kontrol edebilir misin?", effect: +15, next: "'Kontrol... Bazen. Ama kontrol ettiÄŸimde sis daha Ã§ok istiyor. Sanki kullanÄ±yorum ve borÃ§lanÄ±yorum.' Titriyor. 'Ne kadar Ã§ok duyarsam, o kadar Ã§ok dÃ¶nÃ¼ÅŸÃ¼yorum.'" },
            { text: "Bu seni silah haline getirebilir.", effect: -8, next: "'Silah mÄ±? Ben bir insanÄ±m!' Ama sesi bir an iÃ§in metalik tÄ±nlÄ±yor. Ä°kisi de fark ediyor." }
          ]
        }
      ],
      high: [
        {
          text: "[ OÄŸuz seni gecenin en karanlÄ±k saatinde buluyor. YÃ¼zÃ¼ yarÄ± dÃ¶nÃ¼ÅŸmÃ¼ÅŸ ama gÃ¶zlerinde hÃ¢lÃ¢ insanlÄ±k var. ] 'Ã‡ok az vaktim kaldÄ±. Sana son bir ÅŸey sÃ¶ylemeliyim.'",
          isSpecial: true,
          choices: [
            { text: "Dinliyorum OÄŸuz.", effect: +28, next: "'Vera'nÄ±n iÃ§erideki ajanÄ±nÄ± gÃ¶rdÃ¼m. Sisin gÃ¶zlerinden. O kiÅŸi... dÃ¶nÃ¼ÅŸmÃ¼ÅŸ ama saklanÄ±yor. Sisin iradesiyle hareket ediyor. Ve sana en yakÄ±n kiÅŸi.' GÃ¶zleri bulanÄ±klaÅŸÄ±yor. 'AdÄ±nÄ± sÃ¶yleyemiyorum â€” sis engelliyor. Ama ÅŸu odaya gir, sol taraftaki dolabÄ± aÃ§. KanÄ±t var.' Son gÃ¼cÃ¼yle konuÅŸuyor." },
            { text: "Seni kurtarabilir miyiz?", effect: +20, next: "'GeÃ§. Benim iÃ§in geÃ§. Ama seni uyardÄ±m. Bu yeter.' GÃ¼lÃ¼msÃ¼yor â€” son insani gÃ¼lÃ¼msemesi. 'OÄŸuz'u hatÄ±rla.'" }
          ]
        }
      ]
    },

    // GÃœN 11 â€” GÃ–LGE YÃœRÃœYÃœCÃœ (Ã‡OK KARANLIK)
    shadow_walker_d11: {
      name: "GÃ¶lge YÃ¼rÃ¼yÃ¼cÃ¼",
      role: "GÃ¼n-11 Â· GÃ¶rÃ¼nmez Tehdit",
      image: "/faces/character_shadow.png",
      low: [
        {
          text: "[ Onu gÃ¶rmÃ¼yorsun. Ama sesi geliyor â€” her yerden. ] Beni aramana gerek yok. Ben zaten buradayÄ±m. Her zaman buradaydÄ±m.",
          choices: [
            { text: "Neredesin? GÃ¶ster kendini.", effect: +5, next: "'GÃ¶stermem. Ã‡Ã¼nkÃ¼ gÃ¶rmek istemezsin.' Ses arkandan geliyor. DÃ¶ndÃ¼ÄŸÃ¼nde kimse yok. Ama masada bir not var: 'Dikkat et kiminle yemek yiyorsun.'" },
            { text: "Tehdit ediyorsan yanÄ±lÄ±yorsun.", effect: -10, next: "'Tehdit mi? Ben tehdit etmem. Ben uyarÄ±rÄ±m. Ve uyarmak zorunda deÄŸilim.' Ses kayboluyor. Ama gece rÃ¼yanda onu hatÄ±rlÄ±yorsun." },
            { text: "KonuÅŸmak istiyorsan koÅŸullarÄ±mÄ± kabul et.", effect: +8, next: "Uzun bir sessizlik. Sonra: 'Kabul.' Ve ilk kez bir kÃ¶ÅŸeden Ã§Ä±kÄ±yor. YÃ¼zÃ¼... belirsiz. KaranlÄ±k bir maske mi, gerÃ§ek mi anlaÅŸÄ±lmÄ±yor." }
          ]
        }
      ],
      medium: [
        {
          text: "Ben sisin ilk Ã¼rÃ¼nÃ¼yÃ¼m. Vera'dan Ã¶nce. Proje SÄ±fÄ±r'Ä±n birinci deneyiydim. Ã‡oÄŸu Ã¶ldÃ¼. Ben... Ã¶ldÃ¼m mÃ¼? Emin deÄŸilim.",
          choices: [
            { text: "YaÅŸÄ±yorsun. Burada konuÅŸuyoruz.", effect: +15, next: "'KonuÅŸuyoruz evet. Ama ben duvardan geÃ§ebiliyorum. GÃ¶lgelerde hareket edebiliyorum. Bunu yapabilen bir ÅŸey yaÅŸÄ±yor mu?' Ã‡ok sakin. 'Ben aradayÄ±m. Ä°nsan da deÄŸil, sis de deÄŸil. Vera beni mÃ¼kemmel buluyordu â€” ama kontrol edemiyordu.'" },
            { text: "Vera'dan kaÃ§tÄ±n mÄ±?", effect: +18, next: "'KaÃ§madÄ±m. Yok oldum. On yÄ±l boyunca gÃ¶lgelerde yaÅŸadÄ±m. Ä°nsanlarÄ± izledim. Her ÅŸeyi duydum. Ve ÅŸimdi buradayÄ±m Ã§Ã¼nkÃ¼... bir ÅŸey deÄŸiÅŸti.' BakÄ±ÅŸlarÄ± cÄ±lÄ±z Ä±ÅŸÄ±kta parlÄ±yor. 'Vera Ã¶lecek. Ve ben istiyorum ki doÄŸru kiÅŸi Ã¶ldÃ¼rsÃ¼n.'" },
            { text: "Senden korkmalÄ± mÄ±yÄ±m?", effect: +3, next: "'HenÃ¼z deÄŸil.' Bu cevap yeterince Ã¼rkÃ¼tÃ¼cÃ¼." }
          ]
        }
      ],
      high: [
        {
          text: "[ Gece yarÄ±sÄ±. YataÄŸÄ±nÄ±n yanÄ±nda. Nefes sesi yok ama var. ] 'Vera'nÄ±n sÄ±ÄŸÄ±naktaki ajanÄ±nÄ± biliyorum. Ve onu ortadan kaldÄ±rmak istiyorum. Ä°zin ver.'",
          isSpecial: true,
          choices: [
            { text: "Kim o?", effect: +25, next: "'SÃ¶yleyeceÄŸim ama karar senin. O kiÅŸi... Doktor Arzu deÄŸil. Rahip deÄŸil. Daha sinsi biri. KayÄ±t memuru â€” hani hiÃ§ fark etmediÄŸin adam? Her gece dÄ±ÅŸarÄ± Ã§Ä±kÄ±yor. Ve geri geldiÄŸinde Ã¼zerinde toprak izi var. Ondan duyduÄŸun her ÅŸey Vera'ya gidiyor. Her. Åey.' KaranlÄ±kta parlayan gÃ¶zleri buz gibi." },
            { text: "Kimseyi Ã¶ldÃ¼rmene izin veremem.", effect: +15, next: "'Peki. O zaman kendin halledersin. Ama bunu bil: yarÄ±n gece saat Ã¼Ã§te harekete geÃ§ecek. Ve sensiz bile Ã§Ã¶zerim bunu.' Kayboluyor. Ama hissediyorsun â€” izliyor." }
          ]
        }
      ]
    },

    // GÃœN 12 â€” ÅAMAN
    mind_reader_saman_d12: {
      name: "Åaman",
      role: "GÃ¼n-12 Â· Zihin Okuyucu",
      image: "/faces/mind_reader_saman.png",
      low: [
        {
          text: "DÃ¼ÅŸÃ¼ncelerini duyuyorum. HayÄ±r, ÅŸaka yapmÄ±yorum. Åu an 'bu adam deli' diye dÃ¼ÅŸÃ¼nÃ¼yorsun. Ve... haklÄ±sÄ±n biraz. Ama deli doÄŸru ÅŸeyleri gÃ¶rebilir.",
          choices: [
            { text: "Tamam, ne dÃ¼ÅŸÃ¼nÃ¼yorum ÅŸimdi?", effect: +10, next: "'Merak ediyorsun. Ve korkuyorsun. Ama korkunun altÄ±nda... umut var. Ve ÅŸu an baÅŸka bir dÃ¼ÅŸÃ¼nce daha var: 'Vera hakkÄ±nda ne biliyor?' Ä°ÅŸte bunu biliyorum.' TÃ¼yler Ã¼rpertici bir doÄŸruluk." },
            { text: "YeteneÄŸin nereden geliyor?", effect: +12, next: "'FormÃ¼l. GÃ¼mÃ¼ÅŸ formÃ¼lÃ¼nÃ¼n farklÄ± bir versiyonu. Vera bana verdi â€” gÃ¶nÃ¼llÃ¼ deÄŸildim. Ama yan etkisi bu oldu. DÃ¶nÃ¼ÅŸmedim, ama... kafalar aÃ§Ä±ldÄ±.' ÅakacÄ± ama altÄ±nda acÄ± var." },
            { text: "DÃ¼ÅŸÃ¼nce okumak mÃ¼mkÃ¼n deÄŸil.", effect: -5, next: "'O zaman cebindeki fotoÄŸraftan bahsetmeyeceÄŸim. KÄ±z kardeÅŸinin fotoÄŸrafÄ±. Sol cep.' DoÄŸru mu?" }
          ]
        }
      ],
      medium: [
        {
          text: "Vera'nÄ±n planÄ±nÄ± gÃ¶rdÃ¼m. KafasÄ±nÄ±n iÃ§inde. YakÄ±n mesafede olduÄŸumda okuyabildim. Ve gÃ¶rdÃ¼klerim... seni korkutabilir.",
          choices: [
            { text: "Ne gÃ¶rdÃ¼n kafasÄ±nda?", effect: +22, next: "'Bir harita. TÃ¼m sektÃ¶rlerin haritasÄ±. Ve her birinin Ã¼zerinde bir tarih. Bizim sektÃ¶rÃ¼mÃ¼zÃ¼n tarihi... iki gÃ¼n sonra. Ve haritanÄ±n ortasÄ±nda bÃ¼yÃ¼k bir sembol: SektÃ¶r-0. OrasÄ± merkez. Her ÅŸey oradan kontrol ediliyor.' GÃ¶zleri odaklanÄ±yor. 'Ve Vera... korkuyor. Evet, o da korkuyor. Ama neden? Ä°ÅŸte bunu okuyamadÄ±m.'" },
            { text: "Vera'nÄ±n dÃ¼ÅŸÃ¼ncelerini okuyabiliyorsan neden burada?", effect: +18, next: "'Ã‡Ã¼nkÃ¼ o da beni okuyor. Ä°ki yÃ¶nlÃ¼. Ve uzaklaÅŸtÄ±ÄŸÄ±mda gÃ¼Ã§sÃ¼zleÅŸiyor ikimiz de. Ama yakÄ±nlaÅŸÄ±rsam... ya onu yenerim ya o beni.' Terliyor." },
            { text: "Bu bilgiye gÃ¼venebilir miyiz?", effect: +8, next: "'Bana gÃ¼venme. Ama verdiÄŸim bilgiyi doÄŸrula. Ä°ki gÃ¼n sonra ne olacaÄŸÄ±nÄ± gÃ¶receksin.'" }
          ]
        }
      ],
      high: [
        {
          text: "Vera'nÄ±n en bÃ¼yÃ¼k korkusunu buldum. Ve bu korku... sensin.",
          isSpecial: true,
          choices: [
            { text: "Ben mi? Neden?", effect: +30, next: "'Ã‡Ã¼nkÃ¼ sen karar veriyorsun. Ve Vera'nÄ±n tÃ¼m sistemi tek bir zayÄ±flÄ±ÄŸa sahip: Ã¶zgÃ¼r irade. FormÃ¼l kontrol eder ama iradenin Ã¼stÃ¼ne Ã§Ä±kamaz. Ve sen... iradesi gÃ¼Ã§lÃ¼ birisin. Vera bunu biliyor. Bu yÃ¼zden seni dÃ¶nÃ¼ÅŸtÃ¼rmek istiyor â€” Ã¶ldÃ¼rmek deÄŸil. Ã‡Ã¼nkÃ¼ Ã¶ldÃ¼rÃ¼rse kaybeder.' Yutkunuyor. 'Sen onun en bÃ¼yÃ¼k Ã¶dÃ¼lÃ¼ ve en bÃ¼yÃ¼k tehdidisin. AynÄ± anda.'" },
            { text: "Bu avantajÄ± nasÄ±l kullanabiliriz?", effect: +22, next: "'Vera'nÄ±n sana yaklaÅŸmasÄ±nÄ± saÄŸla. Ve ben arada olacaÄŸÄ±m. KafasÄ±nÄ± okuyacaÄŸÄ±m. Tam bilgiyi Ã§ekeceÄŸim. Ama risk var â€” beni kaybedebilirsin.' GÃ¼lÃ¼msÃ¼yor. 'Her bÃ¼yÃ¼ bir bedel ister.'" }
          ]
        }
      ]
    },

    // GÃœN 12 â€” PÄ°LOT SÄ°NAN
    pilot_sinan_d12: {
      name: "Pilot Sinan",
      role: "GÃ¼n-12 Â· Son Pilot",
      image: "/faces/pilot_sinan.png",
      low: [
        {
          text: "Helikopteri Ã§akmadan indirdim. Bu yeteneÄŸimle hayatta kalÄ±yorum. Ama yakÄ±t bitmek Ã¼zere ve gidecek yer... dÄ±ÅŸarÄ±da yer var mÄ±?",
          choices: [
            { text: "Hava durumu ve dÄ±ÅŸ koÅŸullarÄ± biliyor musun?", effect: +15, next: "'Biliyorum. Sis 3000 metreye kadar Ã§Ä±kÄ±yor. ÃœstÃ¼ temiz. Ama iniÅŸ yapacak yer yok â€” her yer kaplÄ±. Tek temiz alan: gÃ¼neyde, kÄ±yÄ± ÅŸeridi. Ama orasÄ± 400 km uzakta.' DuraksÄ±yor. 'YakÄ±tÄ±m 350 km'lik.'" },
            { text: "Helikopter kaÃ§ kiÅŸi taÅŸÄ±r?", effect: +10, next: "'AltÄ±. Belki yedi hafif yÃ¼kle. Ama herkes gidemez. Ve bu kararÄ±... kim verecek?' Sana bakÄ±yor." },
            { text: "UÃ§mak Ã§Ä±lgÄ±nlÄ±k, burada kalmalÄ±yÄ±z.", effect: -5, next: "'Burada kalmak da Ã§Ä±lgÄ±nlÄ±k. SeÃ§enekler kÃ¶tÃ¼, eleman. Ama ben uÃ§mayÄ± tercih ederim.'" }
          ]
        }
      ],
      medium: [
        {
          text: "UÃ§arken bir ÅŸey gÃ¶rdÃ¼m. SÄ±ÄŸÄ±naÄŸa gelirken. Ve bu gÃ¶rdÃ¼ÄŸÃ¼m ÅŸey... deÄŸiÅŸtirdi her ÅŸeyi.",
          choices: [
            { text: "Ne gÃ¶rdÃ¼n?", effect: +22, next: "'SektÃ¶r-0'Ä±n Ã¼stÃ¼nden geÃ§tim. OrasÄ±... aÃ§Ä±k. Sis yok Ã¼stÃ¼nde. Bir gÃ¶z gibi â€” ortasÄ± temiz, etrafÄ± sis. Ve ortada bir yapÄ± var. Kocaman. IÅŸÄ±klar yanÄ±yor. Aktif yani.' GÃ¶zleri bÃ¼yÃ¼yor. 'Ve etrafÄ±nda araÃ§lar vardÄ± â€” askeri. Ama bizim ordumuzun deÄŸil.'" },
            { text: "Oraya inebilir misin?", effect: +18, next: "'Ä°nebilirim. Ama Ã§Ä±kabilir miyim? OrasÄ± soru.' Sert bakÄ±yor. 'Ä°nersek bilgi alÄ±rÄ±z. Ama dÃ¶nÃ¼ÅŸ garantisi yok. Ve en Ã¶nemlisi: kokpiti aÃ§tÄ±ÄŸÄ±mda sis girer mi?' Yutkunuyor." },
            { text: "Bu bilgiyi stratejik plana ekleyelim.", effect: +12, next: "'Ekleyelim. Ama ÅŸunu bil: uÃ§uÅŸ penceresi kapanÄ±yor. YakÄ±t gÃ¼nlerce dayanmaz. Karar vermen lazÄ±m â€” Ã§abuk.'" }
          ]
        }
      ],
      high: [
        {
          text: "Sana bir teklif var. Son uÃ§uÅŸ. SektÃ¶r-0'a. Ä°Ã§eri girmek, vericiye ulaÅŸmak. Helikopterle Ã¼stÃ¼nden gireriz ve geri dÃ¶neriz. Ya da dÃ¶nmeyiz. Ama en azÄ±ndan biteriz bunu.",
          isSpecial: true,
          choices: [
            { text: "Bu intihar gÃ¶revi.", effect: +25, next: "'Her bÃ¼yÃ¼k zafer birine gÃ¶re intiharla baÅŸladÄ±.' GÃ¼lÃ¼msÃ¼yor. 'AltÄ± kiÅŸilik ekip: ben, sen, 04 yol gÃ¶sterir, SuikastÃ§Ä± gÃ¼venlik saÄŸlar, ve ÅŸifacÄ± yaralÄ±lar iÃ§in. AltÄ±ncÄ± koltuk... AraÅŸ ya da Anna olmalÄ±. FormÃ¼lÃ¼ kim tanÄ±rsa o.' Eli omzunda. 'HazÄ±r mÄ±sÄ±n komutan?'" },
            { text: "Ã–nce hazÄ±rlÄ±k yapmamÄ±z lazÄ±m.", effect: +20, next: "'Tabii. Ama en geÃ§ yarÄ±n gece. YakÄ±t beklemez. Ve Vera da beklemez.' Ciddi. 'Tarih yazalÄ±m ya da tarih olalÄ±m.'" }
          ]
        }
      ]
    },

    // GÃœN 13 â€” Ä°NTÄ°KAM GÃ–LGESÄ° (Ã‡OK KARANLIK)
    shadow_vengence_d13: {
      name: "Ä°ntikam GÃ¶lgesi",
      role: "GÃ¼n-13 Â· Kaos AjanÄ±",
      image: "/faces/character_returned.png",
      low: [
        {
          text: "[ YÃ¼zÃ¼ tanÄ±dÄ±k ama nereden biliyorsun hatÄ±rlayamÄ±yorsun. ] Beni hatÄ±rlamÄ±yorsun deÄŸil mi? Normal. Ben de seni hatÄ±rlamÄ±yordum. Ama sis... sis hatÄ±rlatÄ±yor.",
          choices: [
            { text: "Seni nereden tanÄ±yorum?", effect: +10, next: "'TanÄ±mÄ±yorsun. Ama tanÄ±yacaksÄ±n. Ben sÄ±ÄŸÄ±naÄŸa gelen ilk kiÅŸiydim. Ä°lk gÃ¼n. Sonra Ã§Ä±ktÄ±m â€” gece. Ve geri dÃ¶ndÃ¼m. Ama arada... deÄŸiÅŸtim.' GÃ¼lÃ¼msÃ¼yor. SoÄŸuk bir gÃ¼lÃ¼mseme." },
            { text: "Neden Ã§Ä±ktÄ±n ve geri dÃ¶ndÃ¼n?", effect: +8, next: "'Ã‡Ã¼nkÃ¼ bir iÅŸim vardÄ± dÄ±ÅŸarÄ±da. Ve o iÅŸ bitmedi. Åimdi iÃ§eride devam edecek.' MuÄŸlak. Tehlikeli." },
            { text: "Seni izliyorum.", effect: -5, next: "'Ä°zle. Ama benim de gÃ¶zlerim var. Ve benim gÃ¶zlerim... karanlÄ±kta gÃ¶rÃ¼yor.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Ben dÃ¶nÃ¼ÅŸmÃ¼ÅŸ biriyim. Ama Vera'nÄ±n kontrolÃ¼nde deÄŸil â€” ondan kaÃ§tÄ±m. Ve intikam istiyorum. Vera benim ailemi aldÄ±.",
          choices: [
            { text: "Ailen ne oldu?", effect: +18, next: "'KarÄ±m. OÄŸlum. Ä°kisi de dÃ¶nÃ¼ÅŸtÃ¼rÃ¼ldÃ¼. Ve beni tanÄ±mÄ±yorlar artÄ±k. Caddede yÃ¼rÃ¼yorlar ama... iÃ§leri boÅŸ. Vera onlarÄ± kullanÄ±yor â€” beni Ã§ekmek iÃ§in.' Sesi titremiyor. Ã‡oktan donmuÅŸ." },
            { text: "Ä°ntikam planÄ±n ne?", effect: +15, next: "'Vera'ya yaklaÅŸmak. Ä°Ã§eriden bilgi vermek gibi yapacaÄŸÄ±m. Ve doÄŸru anda... vericiye ulaÅŸacaÄŸÄ±m. Ama yalnÄ±z yapamam.' Sana bakÄ±yor. 'Sen de istersin ki bitsin bu.' HaklÄ±." },
            { text: "Ä°ntikam seni yanlÄ±ÅŸ yere gÃ¶tÃ¼rÃ¼r.", effect: -10, next: "'YanlÄ±ÅŸ yer mi? Tek doÄŸru yer bu. Ä°ntikam deÄŸil â€” adalet. Ve adalet acÄ± verir.' GÃ¶zleri karanlÄ±klaÅŸÄ±yor." }
          ]
        }
      ],
      high: [
        {
          text: "[ Son gece. Ä°ntikam GÃ¶lgesi hazÄ±r. ] 'YarÄ±n gece gidiyorum. Vera'nÄ±n tesisine. Ä°Ã§eride kontaÄŸÄ±m var. Ve sana bir teklif: benimle gel. Ä°kimiz birden girersek ÅŸansÄ±mÄ±z artar.'",
          isSpecial: true,
          choices: [
            { text: "PlanÄ±n ne?", effect: +25, next: "'Pilot Sinan helikopterle yaklaÅŸtÄ±rÄ±r. Benim kontaÄŸÄ±m kapÄ±yÄ± aÃ§ar. Ä°Ã§eri gireriz. Sen vericiye gidersin, ben Vera'yÄ± oyalarÄ±m. Ve eÄŸer baÅŸarÄ±rsak... sis durur.' Uzun bir duraklama. 'BaÅŸaramazsak da en azÄ±ndan denemiÅŸ oluruz.' Elini uzatÄ±yor." },
            { text: "Bunu birlikte planlayalÄ±m.", effect: +20, next: "'Tamam. Ama bir ÅŸart var: beni durdurmaya Ã§alÄ±ÅŸma. Vera ile karÅŸÄ±laÅŸtÄ±ÄŸÄ±mda... kendi hesabÄ±mÄ± gÃ¶receÄŸim. Engellemen en iyi ihtimal.' Sert. KararlÄ±. Ve biraz da Ã§Ä±lgÄ±n." }
          ]
        }
      ]
    },

    // GÃœN 13 â€” VERA'NIN KAÅÄ°FÄ°
    scout_vera_d13: {
      name: "KaÅŸif Vera",
      role: "GÃ¼n-13 Â· BÃ¶lge Ä°zcisi",
      image: "/faces/scout_vera.png",
      low: [
        {
          text: "Evet, adÄ±m Vera. HayÄ±r, o Vera deÄŸilim. TesadÃ¼f. Ya da... belki deÄŸil. Kim bilir artÄ±k bu dÃ¼nyada neyin tesadÃ¼f olduÄŸunu.",
          choices: [
            { text: "Ä°sim tesadÃ¼fÃ¼... ilginÃ§.", effect: +10, next: "'Ä°lginÃ§ten Ã¶te, asker. Ä°lk gÃ¼n beni aldÄ±ÄŸÄ±nÄ±zda birinin yÃ¼zÃ¼nÃ¼ gÃ¶rmen lazÄ±mdÄ±. Ä°sim deyince herkes dondu. Ama ben sadece bir izciyim. SektÃ¶r sÄ±nÄ±rlarÄ±nÄ± haritalayan biri.'" },
            { text: "SektÃ¶r dÄ±ÅŸÄ±nÄ± ne kadar biliyorsun?", effect: +15, next: "'Her karÄ±ÅŸÄ±nÄ±. DÄ±ÅŸ sÄ±nÄ±rdan iki kilometre Ã¶tesine kadar haritaladÄ±m. Vera'nÄ±n â€” Ã¶teki Vera'nÄ±n â€” nerede konuÅŸlandÄ±ÄŸÄ±nÄ± biliyorum. Ve oraya giden en gÃ¼venli yolu.'" },
            { text: "Ä°sim Ã¶nemli deÄŸil, ne yapabilirsin?", effect: +5, next: "'Harita Ã§izebilirim. GÃ¼zergah planlayabilirim. Ve... gizlice hareket edebilirim. YÄ±llardÄ±r bunu yapÄ±yorum.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sana bir ÅŸey itiraf edeceÄŸim: Vera â€” Ã¶teki Vera â€” beni buldu geÃ§en hafta. Teklif etti. 'Gel yanÄ±ma' dedi. Ä°smin bile aynÄ± diye gÃ¼lÃ¼msedi.",
          choices: [
            { text: "Ne cevap verdin?", effect: +20, next: "'DÃ¼ÅŸÃ¼nÃ¼yorum dedim. Zaman kazanmak iÃ§in. Ve o anda etrafÄ± gÃ¶rdÃ¼m â€” tesisi. Ä°Ã§eri gÃ¶z attÄ±m. Ä°nsanlar var... tÃ¼plerde. YeÅŸil sÄ±vÄ±da. Uyuyorlar ama yÃ¼zleri... acÄ± Ã§ekiyor.' Titriyor. 'Ve geri kaÃ§tÄ±m. Buraya.'" },
            { text: "Vera'nÄ±n tesisinin konumunu biliyor musun?", effect: +22, next: "'Sadece bilmekle kalmadÄ±m â€” giriÅŸinin ÅŸifresini de biliyorum. Bana sÃ¶yledi Ã§Ã¼nkÃ¼ gÃ¼veniyordu. Aptal.' GÃ¼lÃ¼msÃ¼yor ama gÃ¶zleri gÃ¼lmÃ¼yor. 'O ÅŸifre: 14-0-84. TanÄ±dÄ±k geldi mi?'" },
            { text: "Onlara gÃ¼ven veriyor olabilirsin.", effect: -8, next: "'GÃ¼ven mi? Ben casusluÄŸumu yapÄ±yorum. Senin tarafÄ±nda. Ama inandÄ±rmam zor, biliyorum.'" }
          ]
        }
      ],
      high: [
        {
          text: "Son haritayÄ± Ã§izdim. Vera'nÄ±n tesisine giden Ã¼Ã§ rota var. En gÃ¼venlisi tÃ¼nelden. Ve o tÃ¼nelin kapÄ±sÄ±nÄ±n anahtarÄ±... bende.",
          isSpecial: true,
          choices: [
            { text: "HaritayÄ± ve anahtarÄ± ver.", effect: +28, next: "'Al.' HaritayÄ± aÃ§Ä±yor. 'Kuzey tÃ¼neli: en uzun ama en gÃ¼venli. GÃ¼ney geÃ§iÅŸi: kÄ±sa ama Vera'nÄ±n devriye bÃ¶lgesi. ÃœÃ§Ã¼ncÃ¼sÃ¼: yer altÄ±ndan direkt â€” ama orada... GÃ¶lge YÃ¼rÃ¼yÃ¼cÃ¼'nÃ¼n bÃ¶lgesi. O izin verirse geÃ§ersin.' AnahtarÄ± uzatÄ±yor. 'Ve benim de gelmem lazÄ±m. Yolu sadece ben biliyorum.'" },
            { text: "Neden bu kadar yardÄ±m ediyorsun?", effect: +22, next: "'Ã‡Ã¼nkÃ¼ adÄ±m Vera. Ve bu ismin iyi bir ÅŸeyle anÄ±lmasÄ±nÄ± istiyorum. KÃ¶tÃ¼ olan o, iyi olan ben. Tarih bÃ¶yle yazÄ±lsÄ±n.' Ciddi. 'HazÄ±r mÄ±sÄ±n komutan? Son yolculuk baÅŸlÄ±yor.'" }
          ]
        }
      ]
    },

    // GÃœN 14 â€” ARAS (NÄ°HAÄ° KARAR)
    aras_final_choice_d14: {
      name: "AraÅŸ â€” Son SeÃ§im",
      role: "GÃ¼n-14 Â· Hakikat TaÅŸÄ±yÄ±cÄ±sÄ±",
      image: "/faces/d8_aras.png",
      low: [
        {
          text: "Geldik. Son gÃ¼ne. Karar anÄ±na. ArtÄ±k kimin ne dediÄŸi Ã¶nemli deÄŸil â€” sadece sen varsÄ±n.",
          choices: [
            { text: "Birlikte savaÅŸacaÄŸÄ±z Aras.", effect: +15, next: "'Birlikte mi? SavaÅŸmak mÄ±?' BaÅŸÄ±nÄ± iki yana sallÄ±yor. 'SavaÅŸ artÄ±k bitiyor asker. Ya nÃ¼kleer mÃ¼hÃ¼rle SektÃ¶r-7'yi yakacaÄŸÄ±z, ya da GÃ¼mÃ¼ÅŸ'e boyun eÄŸeceÄŸiz.'" },
            { text: "NÃ¼kleer mÃ¼hÃ¼rÃ¼ patlatÄ±rsak ne olur?", effect: +10, next: "'Hepimiz Ã¶lÃ¼rÃ¼z. Ve sis de bu sektÃ¶rde bizimle birlikte yanar. En azÄ±ndan dÃ¼nyada bir parÃ§a temiz alan bÄ±rakmÄ±ÅŸ oluruz.' YÃ¼zÃ¼ taÅŸ gibi." },
            { text: "Teslim olmak tek seÃ§enek mi?", effect: -5, next: "'Vera'nÄ±n beklediÄŸi seÃ§enek o. AÃ§ kapÄ±yÄ±, bizi GÃ¼mÃ¼ÅŸ'Ã¼n kucaÄŸÄ±na at. Karar tamamen senin.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Sis iÃ§eri sÄ±zÄ±yor. KapÄ±lar daha ne kadar dayanÄ±r bilmiyorum. Beni iyi dinle: SektÃ¶r-0 vericisi patlatÄ±lmazsa â€” formÃ¼l durmaz.",
          choices: [
            { text: "Vericiyi kim yok edebilir?", effect: +22, next: "'Sen. EÄŸer helikopterle gideceksen Pilot Sinan'Ä± dinle. Ama ben gitmeyeceÄŸim. Ben burada kalÄ±p, sen baÅŸarÄ±sÄ±z olursan diye mÃ¼hÃ¼rÃ¼ tetikte tutacaÄŸÄ±m.'" },
            { text: "Burada kalÄ±p savaÅŸmanÄ±n anlamÄ± yok mu?", effect: +15, next: "'SavaÅŸ... Vera'nÄ±n ordusu karÅŸÄ±sÄ±nda mÄ±?' GÃ¼lÃ¼msÃ¼yor, acÄ± bir gÃ¼lÃ¼ÅŸ. 'Bizim savaÅŸÄ±mÄ±z silahlarla deÄŸil, iradeyle kazanÄ±lÄ±r. Vericiyi yok et. Ya da hepimizi yak.'" },
            { text: "Vera bizi kandÄ±rÄ±yor olabilir mi?", effect: +8, next: "'Vera kandÄ±rmaz. Vera programlar. Onu yok etmeden bu dÃ¶ngÃ¼yÃ¼ kÄ±ramazsÄ±n.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ GÃ¶zlerinin iÃ§ine bakÄ±yor. Siste kalmÄ±ÅŸ umutlarÄ±n yÃ¼zÃ¼. ] 'Son sÃ¶zÃ¼nÃ¼ sÃ¶yle asker. Bizi karanlÄ±ÄŸa mÄ± gÃ¶meceksin, yoksa kendi karanlÄ±ÄŸÄ±mÄ±zÄ± mÄ± yaratacaÄŸÄ±z?'",
          isSpecial: true,
          choices: [
            { text: "SektÃ¶rÃ¼ havaya uÃ§ur. (NÃ¼kleer FedakarlÄ±k)", effect: +30, next: "Elini omzuna koyuyor. 'Ä°nsanlÄ±k iÃ§in, asker. Ä°nsanlÄ±k iÃ§in...' (KahramanlÄ±k Finali'ne giden yol)." },
            { text: "KapÄ±larÄ± aÃ§Ä±n. Teslim oluyoruz. (GÃ¼mÃ¼ÅŸ Teslimiyet)", effect: -15, next: "'AnlÄ±yorum... SavaÅŸacak gÃ¼cÃ¼mÃ¼z kalmadÄ±.' SilahÄ±nÄ± indiriyor. (GÃ¼mÃ¼ÅŸ Final'e giden yol)." }
          ]
        }
      ]
    },

    // GÃœN 14 â€” KRALÄ°Ã‡E VERA
    vera_queen_d14: {
      name: "KraliÃ§e Vera",
      role: "GÃ¼n-14 Â· Mist Mimarisi",
      image: "/faces/vera.png",
      low: [
        {
          text: "Geldin. BeklediÄŸim gibi. Bana direnen tek kiÅŸi. DiÄŸerleri ya formÃ¼lÃ¼ kabul etti, ya da acÄ± iÃ§inde... adapte oldu.",
          choices: [
            { text: "Ben teslim olmaya gelmedim.", effect: +10, next: "'Bunu biliyorum. Direncin beni etkiliyor. Ama direniÅŸ anlamsÄ±z. FormÃ¼l insanlÄ±ÄŸÄ± bir sonraki seviyeye taÅŸÄ±yor. Neden savaÅŸasÄ±n ki?'" },
            { text: "Ä°nsanlarÄ± dÃ¶nÃ¼ÅŸtÃ¼rÃ¼p kÃ¶le yapÄ±yorsun.", effect: +15, next: "'KÃ¶le mi? HayÄ±r. Ben onlarÄ± acÄ±dan, kargaÅŸadan, savaÅŸtan kurtarÄ±yorum. Tek bir zihin, tek bir amaÃ§. MÃ¼kemmel barÄ±ÅŸ.'" },
            { text: "Bunu bitireceÄŸim Vera.", effect: +5, next: "'Denemeye devam et. Ama her adÄ±mÄ±nda, bana daha da yaklaÅŸÄ±yorsun. Bekliyorum.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Benim adÄ±m Vera. Ama eskiden... bir projenin adÄ±ydÄ±m. Babam beni kurtaracaÄŸÄ±nÄ± dÃ¼ÅŸÃ¼nmÃ¼ÅŸtÃ¼. Ancak ben, insanlÄ±ÄŸÄ±n tek kurtuluÅŸu oldum.",
          choices: [
            { text: "Babana ne oldu?", effect: +20, next: "GÃ¶zlerinde soÄŸuk bir Ä±ÅŸÄ±k var. 'O ilklerden biriydi. FormÃ¼lÃ¼n potansiyelini anlamadÄ±. Bana yaratÄ±cÄ± derdi, ama artÄ±k onu... iÃ§imde taÅŸÄ±yorum. TÄ±pkÄ± herkesi taÅŸÄ±yacaÄŸÄ±m gibi.'" },
            { text: "Bu karanlÄ±kta barÄ±ÅŸ yok, sadece Ã¶lÃ¼m var.", effect: +18, next: "'Ã–lÃ¼m mÃ¼? Biyolojik Ã¶lÃ¼m sadece bir geÃ§iÅŸtir. Verici zihinleri birbirine baÄŸlar. Sen karanlÄ±k gÃ¶rÃ¼yorsun, biz ise mÃ¼kemmel bir senfoni duyuyoruz.'" },
            { text: "Seni nasÄ±l durduracaÄŸÄ±mÄ±zÄ± biliyorum.", effect: +10, next: "'Vericiyi yok ederek mi? Bunu denemeniz beni endiÅŸelendirmiyor. Biyometrik kilit, kan... tÃ¼m algoritmalarÄ± kurdum. KapÄ±lar size kapalÄ±.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ GÃ¼mÃ¼ÅŸ gÃ¶zleri sana kilitlenmiÅŸ. Sesi her yerden geliyor, sisin iÃ§inden, duvarlardan, kendi kafanÄ±n iÃ§inden. ] 'Benimle ol. Seni generalim yaparÄ±m. Bu sistemin kalbini paylaÅŸÄ±rÄ±z.'",
          isSpecial: true,
          choices: [
            { text: "Bebek Umut'un kanÄ± seni yok edecek. Biliyoruz.", effect: +30, next: "Ä°lk kez yÃ¼zÃ¼nde bir ifade bozukluÄŸu. 'KÃ¢hin... o sana anlattÄ±. Aptal kÃ¶r adam. O Ã§ocuÄŸu bana ver! O benim kurtarÄ±cÄ±m olmalÄ±!' YÃ¼zÃ¼ seÄŸiriyor, kontrolÃ¼ kaybeder gibi. 'KapÄ±larÄ± kÄ±rÄ±n! SektÃ¶r-7 dÃ¼ÅŸecek!'" },
            { text: "Asla sana boyun eÄŸmeyeceÄŸim.", effect: +25, next: "'Ã–yleyse... sizi izlediÄŸim gibi yok olacaksÄ±nÄ±z.' Sesi artÄ±k dijitalleÅŸiyor. 'HÃ¼cum baÅŸlatÄ±ldÄ±. SektÃ¶r-7'yi dÃ¼ÅŸÃ¼rÃ¼n. Ä°radelerini kÄ±rÄ±n.'" }
          ]
        }
      ]
    }
};

const en_part2 = {
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // DAY 1 â€” MINA (EN)
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    mina_d1: {
      name: "Little Mina",
      role: "Day-1 Â· Child",
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
      role: "Day-1 Â· Veteran Worker",
      image: "/faces/d1_miner.png",
      low: [
        {
          text: "Forty years I looked at this earth from below. Now I look from above. There's no difference, soldier â€” underground was just as dark as it is now.",
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
            { text: "Could the government have covered it up?", effect: +15, next: "'Not a cover-up â€” planned. Listen: a black liquid was transferred from Sector-0 tunnels. After the operation, my friends got sick. I survived because I stole an oxygen mask.'" },
            { text: "Memory isn't always reliable.", effect: -10, next: "'Memory? I still have the burn marks from that chemical on my hands. Look.' He stretches them out. The deep marks are real." }
          ]
        }
      ],
      high: [
        {
          text: "If you're listening, I'll tell you something. You'll think the old man is rambling, but I'm not saying this out of boredom â€” I knew Vera's father.",
          isSpecial: true,
          choices: [
            { text: "You knew Vera's father? Tell me.", effect: +28, next: "'He was an engineer. On the Sector-0 project. He ran something called the White Mist program. One day he disappeared. Vera was just a tiny child then. The program stopped but the data didn't â€” it was transferred. To whom? I don't know. But now that mist is outside. And inside, something is still continuing.'" },
            { text: "What was the White Mist program?", effect: +20, next: "'It had no official name. But we workers called it Project Zero. Human body... transformation experiments. I've never spoken about this while alive.'" }
          ]
        }
      ]
    },

    silent_woman_d2: {
      name: "Silent Woman",
      role: "Day-2 Â· Unknown Identity",
      image: "/faces/d2_silent_woman.png",
      low: [
        {
          text: "[ She pretends not to hear you. Then she slides a scrap of paper toward you. A single word written on it: 'RUN.' ]",
          choices: [
            { text: "Run from what? Who's coming?", effect: +15, next: "[ She doesn't answer. But her eyes move to the door, then the ceiling. Something up there â€” she's implying it. ]" },
            { text: "You can speak. You're safe here.", effect: +10, next: "[ She pinches her lips. Points to her throat. Can't speak â€” or refuses to. ]" },
            { text: "I can't understand you.", effect: -5, next: "[ She takes the paper back, throws it away. Silently turns her back. ]" }
          ]
        }
      ],
      medium: [
        {
          text: "[ This time the note is longer: 'They are inside. They switch at night. They look innocent but they carry the scent of the Mist.' ]",
          choices: [
            { text: "Who is she talking about? Give a name.", effect: +20, next: "[ She hesitates. Then writes three names. Two feel familiar â€” shelter staff. The third... is yours. ]" },
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
            { text: "Do you know ORACLE?", effect: +30, next: "[ She nods. Writes: 'He chose the loss. He bound his own eyes so he wouldn't see the Mist â€” with his own hands. But I saw. I saw what they did in Vera's laboratory. And they silenced me to stop me talking.' She points to her throat again. A surgical scar is visible. ]" },
            { text: "This is very valuable. I'll protect you.", effect: +22, next: "[ She stares for a long time. Then writes coordinates. 'Sector-0. Lower tunnel. Evidence is there.' ]" }
          ]
        }
      ]
    },

    dog_man_d2: {
      name: "Dog Man",
      role: "Day-2 Â· Street Sentinel",
      image: "/faces/d2_dog_man.png",
      low: [
        {
          text: "Aga's Karabash, Terhan's SarÄ±, and Crazy HÃ¼seyin's Boz â€” all three disappeared a week before the Mist came, soldier. Animals know. Animals know before people do.",
          choices: [
            { text: "Animals have sharper awareness than us.", effect: +12, next: "'Exactly! You soldiers understand. Karabash ran east. The Mist came from the east. See how it overlaps.'" },
            { text: "That could be a coincidence.", effect: +3, next: "'A coincidence? SarÄ± had been in that neighborhood for ten years. Wouldn't budge. Left a week before. That's not a coincidence.'" },
            { text: "I don't have time for dogs right now.", effect: -15, next: "Silence. Then quietly: 'Those who don't care go first.' he mutters." }
          ]
        }
      ],
      medium: [
        {
          text: "Remember the dogs? I tracked them. East, then down â€” they were entering a tunnel network under the ground. The dogs knew. This is an escape route.",
          choices: [
            { text: "Do you know the tunnel entrance?", effect: +22, next: "'I do. But it's not easy. Under the last post at the sector boundary. But that place... other things use it at night too.' He swallows." },
            { text: "Are those tunnels safe?", effect: +15, next: "'Not for amateurs. But dogs passed, I passed. Humans can pass too.' He pauses. 'Humans who go and come back can pass.'" },
            { text: "I'll report the tunnel information.", effect: -5, next: "'Don't report it. Have you seen what happened to those who knew? They vanish.' His voice drops." }
          ]
        }
      ],
      high: [
        {
          text: "There's something I have to tell you. I saw Vera's people in that tunnel. Many times. They go down at night, come up in the morning. And each time they carry something with them â€” big, long bottles.",
          isSpecial: true,
          choices: [
            { text: "What was in the bottles?", effect: +28, next: "'White liquid. But sometimes it glowed. No, it wasn't a ghost. It was real. And that liquid touched the ground once when a bottle broke. That ground turned grey weeks later. The Mist penetrates soil too.'" },
            { text: "Show me how to get into that tunnel.", effect: +20, next: "'There's collapsed concrete north of the first post. Empty space underneath. But be ready â€” there are sounds inside. Not like a human voice.'" }
          ]
        }
      ]
    },

    night_vision_d3: {
      name: "Night Crawler",
      role: "Day-3 Â· Dark Explorer",
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
            { text: "Is that 3 minutes enough to escape?", effect: +20, next: "'Not escape â€” enough to enter. Someone is regularly taking things outside. From the shelter. And I've seen it.' His voice drops." },
            { text: "Are you saying there's a spy inside?", effect: +18, next: "'Not a spy... someone coordinating. They know Vera's patrol gaps. This isn't coincidence. Someone is feeding her information.'" },
            { text: "I'll investigate this possibility.", effect: +8, next: "'Investigate. But be careful. This person might be watching you too.'" }
          ]
        }
      ],
      high: [
        {
          text: "Let me show you something. I caught this last night. At the outer sector boundary. This isn't Vera's ship â€” something else. Very large, cigar-shaped, and silent.",
          isSpecial: true,
          choices: [
            { text: "When and where?", effect: +28, next: "'North fence, midnight. No sound, no light. But where it touched the ground, the Mist concentrates. An hour later three people came out â€” formal, they had uniforms, but not Vera's. A different organization.' His eyes narrow. 'A state within a state.'" },
            { text: "Give me the coordinates, let's log it.", effect: +22, next: "'Already written. Here.' He hands over a piece of paper. 'But if this gets into the wrong hands, we're both finished.'" }
          ]
        }
      ]
    },

    healer_d4: {
      name: "Healer",
      role: "Day-4 Â· Mender",
      image: "/faces/d4_healer.png",
      low: [
        {
          text: "I dressed wounds today. Eight people. Half were standard wounds. But the other half... a different feeling. The tissue color isn't returning to normal. It stays grey.",
          choices: [
            { text: "Could grey tissue be a symptom of Mist exposure?", effect: +15, next: "'I don't fully know. But it's not natural. I give medicine, it doesn't heal. I tried herbal treatments, still nothing. Like the body has given up fighting.'" },
            { text: "Does Doctor Arzu know about this?", effect: +10, next: "'Arzu has her own section to deal with. But yes, when she saw it she was surprised too. We took notes together.'" },
            { text: "Can I access the health status reports in the shelter?", effect: +8, next: "'I can give them to you. But some records have gaps â€” a portion is still encrypted.'" }
          ]
        }
      ],
      medium: [
        {
          text: "Look, and this stays between us: I've been tracking wounds for three weeks. Normal wounds close. But these, after closing, leave a grey line. On top. Like something is growing from inside.",
          choices: [
            { text: "Is this growth an infection process?", effect: +20, next: "'Not an infection. Infection causes fever, inflammation. This is silent. And systematic. It always follows the veins. Progresses along the vein path.' She pauses. 'Like it's programmed.'" },
            { text: "How many people have you seen this in?", effect: +18, next: "'Six. So far. But two are no longer here â€” they had to leave. There was a control group remaining, I couldn't follow them.'" },
            { text: "Are you thinking of recording this?", effect: +5, next: "'I was. But whose hands is the record system in? I can't be sure.'" }
          ]
        }
      ],
      high: [
        {
          text: "Someone brought me something. Not medicine. Liquid in a bottle. Inside there are tiny particles â€” nearly invisible. They said 'Mist immunity.' 'Made in the facility.' A nameless person brought it.",
          isSpecial: true,
          choices: [
            { text: "Did you use it on anyone?", effect: +25, next: "'No! I can't use it without identifying it. But I analyzed it. Those particles... they're alive. Like tiny mechanisms. Not biological, artificial. Who can produce these?' Her eyes light with fear. 'And why did that man bring it to me?'" },
            { text: "Can you describe that man?", effect: +20, next: "'No face. Masked. But his voice... not young. And he said 'Pass it to AraÅŸ.' Just that.'" }
          ]
        }
      ]
    },

    teacher_d4: {
      name: "Teacher",
      role: "Day-4 Â· Former Educator",
      image: "/faces/d4_teacher.png",
      low: [
        {
          text: "I was giving lessons to children here. Then someone said 'it might be dangerous.' What school subject â€” history, geography, science â€” could possibly be dangerous?",
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
            { text: "Tell us what you learned.", effect: +22, next: "'Project Silver started in 1987. Official name: Environmental Adaptation Program. Real purpose: Binding people to the region. Underground. But something went wrong â€” there was Mist then too. Small scale. Hidden.' She swallows. 'Now large scale.'" },
            { text: "What does the government know about this?", effect: +18, next: "'I can't say the government did this. But a unit within the government did. Project Zero. And this unit is still active.'" },
            { text: "How reliable is the accuracy of this information?", effect: +5, next: "'I saw the documents. Photographed them. Those disappeared too. But my mind hasn't disappeared.' She stares hard." }
          ]
        }
      ],
      high: [
        {
          text: "I want to give you something. I had hidden it inside a book when I fled. These are handwritten notes of the original Project Silver documents. The originals weren't available but I had read them â€” word for word.",
          isSpecial: true,
          choices: [
            { text: "These notes are very valuable. They'll be preserved.", effect: +28, next: "'There's something inside that will catch your attention: The Sector-0 experiments were in two phases. First phase failed â€” participants... disappeared. Second phase is currently ongoing. The Mist outside is a byproduct of the second phase. And the goal: not mass mutation, but selective transformation. They transform the selected ones and reinsert them.'" },
            { text: "Who are the selected ones?", effect: +20, next: "'I don't know. But those inside don't know it. It happens slowly, imperceptibly.'" }
          ]
        }
      ]
    },

    priest_d4: {
      name: "Priest",
      role: "Day-4 Â· Suspect Faith",
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
          text: "Do you wonder why I'm here? While everywhere was closed I knocked on your door. Because inside... there is something. Not protecting you â€” watching you.",
          choices: [
            { text: "What exactly do you mean?", effect: +10, next: "'Walls talk sometimes. At night, breathing sounds come from places. There is an entity inside the shelter, soldier. But this entity arrived before you.' His voice is low and calm â€” which makes it more unsettling." },
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
            { text: "Is this a provocation or is it real?", effect: +15, next: "'Neither. I was used as a tool. Vera wants information â€” the shelter's defence capacity, number of people, critical personnel. I didn't give it. But she implied she might already know. Someone else may have given it.' The last sentence lands coldly." },
            { text: "What is Vera's message?", effect: +8, next: "'After fourteen days the door will open. Those who resist will be harmed. Those who surrender... transformation. She used that word. Transformation. Ask yourself what it means.'" }
          ]
        }
      ]
    },

    chased_man_d5: {
      name: "Chased Man",
      role: "Day-5 Â· Pursued",
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
            { text: "Yes. Tell me.", effect: +20, next: "'I worked at Vera's headquarters. Cleaning staff. But you see things when you clean. There's a laboratory â€” on the lower floor. People go in, come out differently. Their eyes are the same but their insides aren't.'" },
            { text: "Do you have proof?", effect: +15, next: "'Yes. Not a photograph but coordinates. The exact location of the entrance. And someone is waiting at that entrance every night â€” from the inside.' He trembles." },
            { text: "Why are you telling me this?", effect: +8, next: "'Because I need to tell someone before I disappear. And you... look reasonable.' He's not very sure about that." }
          ]
        }
      ],
      high: [
        {
          text: "[ He pulls you close. Points to something with his fingertip. ] You know how many agents there are in this shelter? More than two. You already know one â€” but you don't know the other. And that other one sits at the same table as you every morning.",
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
      role: "Day-5 Â· One Mind Two Bodies",
      image: "/faces/d5_twins.png",
      low: [
        {
          text: "[ One starts, the other finishes: ] 'We came here because you opened the door...' '...you opened the door but you couldn't see us.'",
          choices: [
            { text: "What do you mean, I couldn't see you?", effect: +10, next: "'In the cityâ€” ' 'â€”watched you for three days. Tracked you. You didn't see it.' They look at you simultaneously. Unsettling." },
            { text: "Do you always talk like this as twins?", effect: +5, next: "'Not alwaysâ€” ' 'â€”only for important things.' Their voices flow like one continuous stream." },
            { text: "This looks like a game.", effect: -12, next: "'Not a gameâ€” ' 'â€”we have never been this serious.' And they both fix their gaze on you at the same moment." }
          ]
        }
      ],
      medium: [
        {
          text: "'We have the same dreamâ€” ' 'â€”every night, at the same time.' 'A white roomâ€” ' 'â€”with a man inside. He's looking at us but he has no face.' 'And he whispersâ€” ' 'â€”numbers.'",
          choices: [
            { text: "What numbers?", effect: +20, next: "'Always the same sequence: ' '14 â€” 0 â€” 84.' 'We don't know what zero meansâ€” ' 'â€”but we know 14 days. And 84 is our registration number.' They pause. 'We don't know where the registration number comes from.'" },
            { text: "Have you heard these numbers before?", effect: +15, next: "'Onceâ€” ' 'â€”it was written on the Sector-0 door. On a small plaque. We took a photo.' 'The photos are goneâ€” ' 'â€”but we saw it.'" },
            { text: "Dreams can stem from fear.", effect: -8, next: "'A fear dreamâ€” ' 'â€”can't do this simultaneously.' 'We woke at the same timeâ€” ' 'â€”said the same words.' An eerie silence." }
          ]
        }
      ],
      high: [
        {
          text: "'We'll tell you somethingâ€” ' 'â€”but you won't want to believe it.' 'We are not experimentsâ€” ' 'â€”but they did experiment on us.' 'Our mother voluntarily entered a programâ€” ' 'â€”to give birth to twins.' 'Project name: Twinning Protocol.' 'â€”Sector-0.'",
          isSpecial: true,
          choices: [
            { text: "What do you know about this program?", effect: +28, next: "'Mother saved her documentsâ€” ' 'â€”when we were young. We have them now.' 'Program's goal: two bodies, shared consciousness.' 'â€”The experiment was deemed a failure. We were released.' 'Because watching us gave better informationâ€”' 'â€”than keeping us.' They stop simultaneously. The longest thing they've ever said." },
            { text: "Are the documents still with you?", effect: +20, next: "'Yesâ€” ' 'â€”and we won't give them.' 'But you can read them if you want.' 'â€”You come here, you read, you go.' 'You can't take them outâ€” ' 'â€”they stay here.'" }
          ]
        }
      ]
    },

    gang_leader_d6: {
      name: "Gang Leader",
      role: "Day-6 Â· Dangerous Advantage",
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
            { text: "Who warned you?", effect: +20, next: "'A woman. Official uniform. But not Vera's person â€” someone's agent, whose I don't know. She told me 'project zero is active.' Nothing else.'" },
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
            { text: "Show me the map first.", effect: +22, next: "'Right approach.' He pulls a folded paper from his pocket. 'North warehouse, underground passage, and â€” note this especially â€” the Sector-0 connection point. That's where Vera enters. Every time. Regular.'" },
            { text: "We can make a deal. What's the basis of trust?", effect: +15, next: "'I keep my word. In this city that's my only value.' He extends his hand. 'Deal?'" }
          ]
        }
      ]
    },

    hunter_resat_d7: {
      name: "Hunter ReÅŸat",
      role: "Day-7 Â· Veteran Hunter",
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
          text: "I know Vera, soldier. I mean... I knew her once. I knew her father. He was a good man â€” an engineer. He worked on Project Zero. Then he disappeared. Vera was just a little child then.",
          choices: [
            { text: "What do you know about Vera's father?", effect: +22, next: "'He was a true believer. Something about 'improving humanity' in his head. Started with good intentions. What happened after... I don't know. He disappeared. And Vera grew up. But she seems to want to finish her father's project.' He pauses. 'In a very different way.'" },
            { text: "Where is Vera currently based?", effect: +18, next: "'Southeast. Old livestock farm. A large structure. I don't go near there anymore. Even the animals don't.'" },
            { text: "Why wasn't this information reported earlier?", effect: +5, next: "'I'm a hunter. I don't know how to write reports. But I found someone who does now.'" }
          ]
        }
      ],
      high: [
        {
          text: "Let me tell you about a place. Nobody knows. I went in â€” once. I came back alive because I know the traps. East from the sector boundary, then a forest. A structure in the middle. It continues below.",
          isSpecial: true,
          choices: [
            { text: "What did you see inside?", effect: +28, next: "'Lights. Green, low lights. And sounds â€” not animal sounds, but not human either. Something in between. And the walls... not like glass, something alive covering the walls. It was moving.' He swallows. 'I got out in two hours. A day of my memory is gone.'" },
            { text: "How did you get in?", effect: +20, next: "'Through the rotten fence to the north. No security there â€” because they know animals won't go there. Animals don't go. But I went.'" }
          ]
        }
      ]
    },

    aras_d8_hero: {
      name: "AraÅŸ",
      role: "Day-8 Â· Truth Seeker",
      image: "/faces/d8_aras.png",
      low: [
        {
          text: "I shouldn't be here. I mean, I'm glad to be here â€” but my presence could be dangerous. I've been followed for a while.",
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
            { text: "Tell me, let's not guess.", effect: +22, next: "'Not the state. State budget passed through but they're not the decision maker. A private fund. Name: Silver Fund Foundation. This foundation has two directors â€” one is dead, the other... I don't know. But Vera is this foundation's daughter.' He holds your gaze." },
            { text: "Has this connection been verified?", effect: +18, next: "'From three different sources. One was a state archive leak. Its life was short but I copied it.' He pulls a memory card from his pocket. 'It was here.'" },
            { text: "How can we use this information?", effect: +12, next: "'If we understand Vera's motivation, we're one step ahead. She wants to finish her father's work. But what was the 'work'? That's the real question.'" }
          ]
        }
      ],
      high: [
        {
          text: "There's something I have to tell you. About Project Zero. And about Vera. If you learn this there's no going back â€” or maybe the opposite, you'll find meaning.",
          isSpecial: true,
          choices: [
            { text: "Tell me. Everything.", effect: +30, next: "'Vera's father conducted experiments on humans â€” voluntary. The Mist is connected to a drug. The drug's name: Silver. To make humans resistant to the Mist. But the side effect... the opposite. Those who took the drug transformed into Mist. And Vera knows this. Because she took that drug â€” as a tiny child. And she didn't transform. This made her both powerful and... obsessed.' He takes a breath. 'She's looking for others like herself.'" },
            { text: "How do we verify this?", effect: +22, next: "'Analyze the liquid the healer received. If Silver components are found â€” Vera has infiltrated. And someone brought that liquid.'" }
          ]
        }
      ]
    },

    cultist_kaan_d8: {
      name: "Kaan",
      role: "Day-8 Â· Cult Member",
      image: "/faces/d8_cultist.png",
      low: [
        {
          text: "You're here because you opened the door. I'm here because the door opened. Is there a difference? Maybe. Maybe we're both just instruments.",
          choices: [
            { text: "Which cult do you belong to?", effect: +5, next: "'Cult... a word. We call ourselves a belief group. The Mist reveals truth. We interpret it.' His gaze drifts off your face." },
            { text: "I can't allow religious activities here.", effect: -10, next: "'You actually can't even allow existence. But you did.' A calm sentence. Very calm." },
            { text: "I could have kept you in custody but I didn't.", effect: +8, next: "'I know. And this isn't a gesture â€” it's a debt. When the time comes you'll pay it or collect it.' He watches you expectantly." }
          ]
        }
      ],
      medium: [
        {
          text: "The Mist is selecting. Do you understand that? It's not taking everyone. It's selecting. And the selected ones share a characteristic.",
          choices: [
            { text: "What characteristic?", effect: +15, next: "'Curiosity.' He stops. 'The questioning. The researching. Those who challenge the existing order. The Mist takes them â€” but doesn't kill them.' His eyes darken. 'It transforms them.'" },
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
            { text: "What is Vera doing there?", effect: +25, next: "'She's transforming people and releasing them back. They look completely normal. But their insides... are different. They show leader behavior. They follow each other â€” coordinated. And they receive commands. From there.' He points upward. Nowhere specific, just up. 'I don't know where it comes from. But they hear it.'" },
            { text: "What is Vera's plan?", effect: +18, next: "'There's a fourteen-day cycle. Each cycle one sector. This sector is cycle fourteen.' He pauses. 'The number. That number everywhere.'" }
          ]
        }
      ]
    },

    mutant_kaya_d9: {
      name: "Kaya",
      role: "Day-9 Â· Mutant Entity",
      image: "/faces/deney_04.png",
      low: [
        {
          text: "... Look at me. Eyes are fine. Hands... slightly different. But I'm still me. Kaya YÄ±lmaz. Born 1984. Sector-3 resident. You can talk to this.",
          choices: [
            { text: "I see you. Kaya, let's talk.", effect: +18, next: "'Thank you.' He softens for the first time. 'Most run. Or raise weapons. You're talking. That's... good.'" },
            { text: "What did you feel at the start of your change?", effect: +12, next: "'First pain. The veins. Then... clarity. Way too much clarity. I see everything very clearly now. Sounds. Colors. And the Mist â€” the Mist seems to be saying something to me.'" },
            { text: "If you pose a threat I'll have to intervene.", effect: -10, next: "'You're not wrong.' He bows his head. 'I try not to be dangerous. Every day.'" }
          ]
        }
      ],
      medium: [
        {
          text: "The Mist told me something. I can hear it. Not words... feeling. Direction. And right now that direction is pointing at you. You should be worried.",
          choices: [
            { text: "What does the Mist say about us?", effect: +20, next: "'Someone inside you... is talking to the Mist. The channel is open. Two-way. I can't close the channel â€” but it exists. One person. Someone among you is connecting to Vera.' He trembles. 'And the fact that I'm saying this worries me too.'" },
            { text: "How much can we trust this intuition?", effect: +15, next: "'I've been wrong zero times in six. There was the same feeling in Sector-3 â€” two days later the gates opened. Vera came.' His eyes freeze. 'I warned. Nobody listened.'" },
            { text: "What do you do to keep this under control?", effect: +8, next: "'I try to silence the voice. But I can't silence it. I just... filter. Which is important, which is noise. That exhausts me too.'" }
          ]
        }
      ],
      high: [
        {
          text: "I'm going to confess something. Vera... knows me. Personally. I was part of one of her experiments. And that's why I wanted to be here, not there â€” on your side.",
          isSpecial: true,
          choices: [
            { text: "What was Vera's experiment?", effect: +28, next: "'Resistance testing to the Silver formula. I was one of those who resisted â€” but not completely. Half-transformed. This made me both valuable and dangerous to her. I escaped. And I'm waiting for her here.' His voice cracks. 'Because she will come. And I want to be ready â€” with you.'" },
            { text: "How will you fight Vera?", effect: +22, next: "'I love her. That's why I'll know better how to stand against her.' A long silence. 'Sometimes the best way to fight is to understand.'" }
          ]
        }
      ]
    },

    laughing_man_d9: {
      name: "Laughing Man",
      role: "Day-9 Â· Unknown Danger",
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
            { text: "I'm ready. Speak.", effect: +28, next: "'I am one of Vera's previous test subjects. But I escaped. The laughing... side effect. Nerve damage. I can't control it most of the time. But my mind works. And I know: when fourteen days are up Vera will open the gates. Not just armed â€” with inside help. That help is here right now. You don't know which one. I do.' A long pause." },
            { text: "Which one? Tell me.", effect: +22, next: "'If I say, that person disappears. Very fast. Vera's response time is short. But let me say this: a woman. And she knows everyone. And she hasn't drawn any suspicion so far.'" }
          ]
        }
      ]
    },

    scientist_d9: {
      name: "Scientist Anna",
      role: "Day-9 Â· Last Expert",
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
            { text: "Tell me everything about Experiment-84.", effect: +28, next: "'Subject 84 showed the highest resistance to the Silver formula. Never transformed. But experienced all the side effects â€” constant pain, sensory overload, the Mist's 'voice.' Vera wanted to dissect Subject 84 to understand the resistance source. I couldn't allow it. I helped them escape.' She takes a breath. 'If Subject 84 is still alive... that person might be the key to an antidote.'" },
            { text: "Is Subject 84 here? In the shelter?", effect: +22, next: "A very long pause. 'I hope so. That's partly why I came here.' She doesn't say more." }
          ]
        }
      ]
    },

    mother_fidan_d7: {
      name: "Mother Fidan",
      role: "Day-7 Â· Protector",
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
            { text: "What do you know about the father?", effect: +18, next: "'He was an engineer. Worked on Vera's project. It was a mandatory assignment â€” he'd go to prison if he refused. But something changed the last week. He was scared. And he told me 'I saw the experiments.' Nothing more.'" },
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
            { text: "Tell me. I'll protect him.", effect: +28, next: "'Umut wasn't born normally. He was born in Vera's laboratory â€” through a secret procedure. When his father was working there they called me too. They gave me drugs throughout the pregnancy. Silver-colored drugs. And when Umut was born... the Mist didn't affect him. At all. As if immune.' Tears flow from her eyes. 'Is my son an experiment? Or is he hope?'" },
            { text: "We may need to test Umut.", effect: +15, next: "'Test... I know. But I beg you â€” never let him fall into Vera's hands. Never.' Her voice cracks." }
          ]
        }
      ]
    },

    baby_umut_d7: {
      name: "Baby Umut",
      role: "Day-7 Â· Spark of Hope",
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
          text: "[ The baby is different this time. Drawing a shape in the air with his fingers â€” over and over. A circle with a dot inside. The Sector-0 symbol. ]",
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
      role: "Day-8 Â· Lost Pursuer",
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
          text: "I searched for her outside. Every day. And one day I found something â€” my daughter's coat. But there was something strange on it. Grey dust. And a paper in the coat pocket.",
          choices: [
            { text: "What did the paper say?", effect: +22, next: "'Coordinates. In official-looking handwriting. And underneath: 'Delivery point 7.' Someone took my daughter. Not random â€” planned.' His fists clench." },
            { text: "The grey dust could be the Silver formula.", effect: +18, next: "'What formula?' Confused. But when explained his face changes. 'Then what did they do to my daughter?' He whispers." },
            { text: "Let's log the evidence from the coat.", effect: +12, next: "'The coat is here. Take it.' He pulls it from his jacket. 'But promise me â€” we'll find my daughter.'" }
          ]
        }
      ],
      high: [
        {
          text: "I found my daughter. But... she's no longer my daughter. I saw her outside. Her eyes are the same but her gaze is different. And she didn't recognize me. Didn't say 'Dad.' Just looked and walked away.",
          isSpecial: true,
          choices: [
            { text: "Tell me what happened, please.", effect: +28, next: "'The Mist took her. But didn't kill her. Transformed her. Vera's children â€” that's what they call them. They take the young ones. Program them. And release them back. Eyes see, ears hear but... hollow inside.' He cries. 'My daughter is alive but I've lost her.'" },
            { text: "Can we bring her back?", effect: +20, next: "'Scientist Anna mentioned a possibility. An antidote. But it needs to be early stage. I don't know what stage my daughter's transformation is in.' Hopeless but hasn't given up." }
          ]
        }
      ]
    },

    escapee_d10: {
      name: "The Escapee",
      role: "Day-10 Â· System Runaway",
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
            { text: "Tell me when you're ready, no rush.", effect: +22, next: "'Lower floor. Three sections. First is the lab â€” formula production. Second is the transformation room â€” people go in, come out different. Third... the control room. Vera is there. Screens everywhere. She's watching every sector. Every one.' She breathes. 'And there's a big screen â€” a map of all shelters. Yours too.'" },
            { text: "How many people are there?", effect: +18, next: "'I couldn't count. But hundreds. Most are sleeping â€” in tubes. Vera calls them 'seeds.' They'll be released when ready. When? Fourteen days from now.'" },
            { text: "Can we verify this information?", effect: +8, next: "'Scientist Anna can verify it. She worked at that facility. And she helped me escape.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ This time 04 is very calm. Never been this calm before. ] 'I'm going to give you a secret. Vera's weak point.'",
          isSpecial: true,
          choices: [
            { text: "Tell me.", effect: +30, next: "'The formula doesn't work on its own. It needs a central signal. A transmitter. In the heart of Vera's facility. If you destroy it â€” the formula loses function. The transformed won't stop but no new transformations. And over time... maybe they'll come back. Maybe.' Her eyes light up. 'I know the transmitter's coordinates.'" },
            { text: "How do we reach the transmitter?", effect: +22, next: "'You need to enter the facility. And know the traps inside. I know them. Take me with you and I'll show the way.' Scared but determined." }
          ]
        }
      ]
    },

    assassin_d10: {
      name: "The Assassin",
      role: "Day-10 Â· Shadow Agent",
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
            { text: "Who appeared on the list?", effect: +20, next: "'My brother.' Long silence. 'That's when I understood â€” the system doesn't care. Everyone is a number. Me too. And that day I turned.' His gaze is cold but something is broken inside." },
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
            { text: "Give me the names.", effect: +28, next: "'One is low-ranking, on guard duty â€” Lieutenant RÄ±za. Second is shelter staff, the records clerk. Third...' He pauses. 'You won't believe the third. But I'll say it: Naciye. Watcher Naciye.' His eyes are ice cold." },
            { text: "How can we stop the attack?", effect: +22, next: "'Just neutralize one â€” RÄ±za. He's the coordinator. The others can't move without him. But do it quietly. Otherwise Vera will know and change the plan.'" }
          ]
        }
      ]
    },

    oracle_d10: {
      name: "Oracle",
      role: "Day-10 Â· Voice of Mystery",
      image: "/faces/oracle_blind.png",
      low: [
        {
          text: "[ Eyes bound. He turns to face you â€” but doesn't see. Or perceives in a way beyond sight. ] You came. I knew you would. I've been waiting three days.",
          choices: [
            { text: "How did you know about me?", effect: +15, next: "'The Mist tells. Everything. I learned to listen â€” and paid the price.' He shows his binding. 'I gave my eyes. In return I received the truth.'" },
            { text: "What happened to your eyes?", effect: +12, next: "'I did it. To myself. I didn't want to see the Mist â€” visually. Because visual perception deceives. But sound... sound doesn't lie.' Calm but eerie." },
            { text: "This could be charlatanism.", effect: -8, next: "'Charlatan? Well, tomorrow three people will come from the southeast. One wounded. One woman. One child. You'll see.' And it actually happens." }
          ]
        }
      ],
      medium: [
        {
          text: "Vera's real name isn't Vera. Did you know that? Vera is a code name. The project name: Data Transfer Protocol. VERA. And 'she' isn't a person â€” she's a program.",
          choices: [
            { text: "Vera is a program?", effect: +25, next: "'There is a person yes â€” alive, breathing. But that person is the program's face. The program makes the decisions. Not AI... something older. Created in Sector-0. Learned from humans. And now it governs humans.' He swallows. 'The girl is just the interface.'" },
            { text: "Where does this information come from?", effect: +18, next: "'From the Mist. The Mist speaks. I listen. Most people can't hear â€” because they have eyes. Eyes make noise. I chose silence.' He touches his binding." },
            { text: "This is very hard to believe.", effect: +5, next: "'You don't need to believe. You need to verify. Ask Anna. She knows too. But she's afraid to say it.'" }
          ]
        }
      ],
      high: [
        {
          text: "[ He summons you in the darkest hour of night. ] 'Fourteen days are almost up. And I'm going to give you the last piece of information. After this I can't speak â€” because the Mist will take me.'",
          isSpecial: true,
          choices: [
            { text: "We can save you.", effect: +30, next: "'You can't. I'm already halfway. But know this: if Vera's transmitter is destroyed, the transformation stops. The transmitter is directly under Sector-0. But to get in you need a key â€” biometric. And that key...' He pauses. 'Baby Umut's blood. That child was born resistant to the formula. His blood unlocks the transmitter and simultaneously destroys it.' Silence falls." },
            { text: "Oracle, your sister is here. The Silent Woman.", effect: +25, next: "For the first time emotion on his face. Pain. 'I know. I know I can't hear her voice but I feel her presence. Tell her... I'm sorry. I pushed her away to protect her. But the Mist brought us all together in the end.' Tears flow beneath the binding." }
          ]
        }
      ]
    },

    infected_oguz_d11: {
      name: "Infected Oguz",
      role: "Day-11 Â· Mist Victim",
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
          text: "The Mist speaks to me. Clearer every night. There are words now â€” names. And it's saying your name too.",
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
            { text: "I'm listening Oguz.", effect: +28, next: "'I saw Vera's inside agent. Through the Mist's eyes. That person... has transformed but is hiding. Moving by the Mist's will. And they're the closest person to you.' His eyes blur. 'I can't say the name â€” the Mist blocks it. But go to that room, open the left cabinet. There's evidence.' Speaking with his last strength." },
            { text: "Can we save you?", effect: +20, next: "'Too late. For me it's too late. But I warned you. That's enough.' He smiles â€” his last human smile. 'Remember Oguz.'" }
          ]
        }
      ]
    },

    shadow_walker_d11: {
      name: "Shadow Walker",
      role: "Day-11 Â· Invisible Threat",
      image: "/faces/character_shadow.png",
      low: [
        {
          text: "[ You can't see him. But his voice comes â€” from everywhere. ] No need to search for me. I'm already here. Always was.",
          choices: [
            { text: "Where are you? Show yourself.", effect: +5, next: "'I won't. Because you wouldn't want to see.' The voice comes from behind you. When you turn nobody's there. But there's a note on the table: 'Be careful who you eat with.'" },
            { text: "If you're threatening us you're mistaken.", effect: -10, next: "'Threatening? I don't threaten. I warn. And I don't have to warn.' The voice fades. But in your dreams that night you remember him." },
            { text: "If you want to talk, accept my terms.", effect: +8, next: "Long silence. Then: 'Accepted.' And for the first time he steps from a corner. His face... unclear. A dark mask or reality â€” hard to tell." }
          ]
        }
      ],
      medium: [
        {
          text: "I am the Mist's first product. Before Vera. I was Project Zero's first experiment. Most died. I... did I die? I'm not sure.",
          choices: [
            { text: "You're alive. We're talking right here.", effect: +15, next: "'We're talking yes. But I can pass through walls. Move through shadows. Can a thing that does this be alive?' Very calm. 'I'm in between. Not human, not Mist. Vera found me perfect â€” but couldn't control me.'" },
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
            { text: "Who is it?", effect: +25, next: "'I'll tell you but the decision is yours. That person... not Doctor Arzu. Not the Priest. Someone sneakier. The records clerk â€” you know, the man you never noticed? He goes outside every night. And when he comes back there's soil traces on him. Everything you've told him goes to Vera. Every. Thing.' Glowing eyes in the dark, ice cold." },
            { text: "I can't let you kill anyone.", effect: +15, next: "'Fine. Then handle it yourself. But know this: tomorrow night at three he'll make his move. And without you I'll solve this anyway.' He vanishes. But you feel it â€” he's watching." }
          ]
        }
      ]
    },

    mind_reader_saman_d12: {
      name: "The Shaman",
      role: "Day-12 Â· Mind Reader",
      image: "/faces/mind_reader_saman.png",
      low: [
        {
          text: "I hear your thoughts. No, I'm not joking. Right now you're thinking 'this guy is crazy.' And... you're a bit right. But a crazy person can see true things.",
          choices: [
            { text: "Okay, what am I thinking now?", effect: +10, next: "'You're curious. And afraid. But beneath the fear... there is hope. And right now there's another thought: 'What does he know about Vera?' Well, I know this.' Chillingly accurate." },
            { text: "Where does your ability come from?", effect: +12, next: "'The formula. A different version of the Silver formula. Vera gave it to me â€” I wasn't volunteering. But this was the side effect. I didn't transform, but... minds opened.' Joking, but with underlying pain." },
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
            { text: "Me? Why?", effect: +30, next: "'Because you make decisions. And Vera's entire system has one single weakness: free will. The formula controls, but cannot override will. And you... have a strong will. Vera knows this. That's why she wants to transform you â€” not kill you. Because if she kills you, she loses.' He swallows. 'You are her greatest prize and her greatest threat. Simultaneously.'" },
            { text: "How can we use this advantage?", effect: +22, next: "'Make Vera approach you. And I will be in between. I'll read her mind. I'll extract the full data. But there's a risk â€” you might lose me.' He smiles. 'Every magic demands a price.'" }
          ]
        }
      ]
    },

    pilot_sinan_d12: {
      name: "Pilot Sinan",
      role: "Day-12 Â· The Last Pilot",
      image: "/faces/pilot_sinan.png",
      low: [
        {
          text: "I landed the chopper without crashing. That's how I survive. But the fuel is running low and a place to go... is there any place outside?",
          choices: [
            { text: "Do you know the weather and outside conditions?", effect: +15, next: "'I do. The Mist goes up to 3000 meters. Above that is clear. But no landing spots â€” everything is covered. Only clear area: south, the coastline. But that's 400 km away.' He pauses. 'I have fuel for 350 km.'" },
            { text: "How many people does the chopper carry?", effect: +10, next: "'Six. Maybe seven with light load. But not everyone can go. And this decision... who will make it?' Looks at you." },
            { text: "Flying is madness, we must stay here.", effect: -5, next: "'Staying here is madness too. Options are bad, man. But I prefer to fly.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I saw something while flying. While coming to the shelter. And this thing I saw... changed everything.",
          choices: [
            { text: "What did you see?", effect: +22, next: "'I flew over Sector-0. It's... open. No Mist above it. Like an eye â€” clear in the middle, Mist all around. And in the middle there's a structure. Massive. Lights are on. Meaning it's active.' His eyes widen. 'And there were vehicles around it â€” military. But not of our army.'" },
            { text: "Can you land there?", effect: +18, next: "'I can land. But can I take off again? That's the question.' He glares. 'If we land we get intel. But no guarantee of return. And most importantly: when I open the cockpit, will the Mist come in?' He gulps." },
            { text: "Let's add this intel to the strategic plan.", effect: +12, next: "'Let's. But know this: the flight window is closing. Fuel won't last for days. You need to decide â€” fast.'" }
          ]
        }
      ],
      high: [
        {
          text: "Here's an offer for you. A final flight. To Sector-0. Get inside, reach the transmitter. We enter from above via chopper and we come back. Or we don't. But at least we finish this.",
          isSpecial: true,
          choices: [
            { text: "This is a suicide mission.", effect: +25, next: "'Every great victory started as suicide to someone.' He smiles. 'Six-man team: me, you, 04 guides the way, Assassin provides security, and healer for the wounded. The sixth seat... should be AraÅŸ or Anna. Whoever knows the formula.' Hands on your shoulder. 'Ready, commander?'" },
            { text: "We need to prepare first.", effect: +20, next: "'Sure. But tomorrow night at the latest. Fuel doesn't wait. And Vera doesn't wait either.' Serious. 'Let's write history, or become history.'" }
          ]
        }
      ]
    },

    shadow_vengence_d13: {
      name: "Shadow of Vengeance",
      role: "Day-13 Â· Agent of Chaos",
      image: "/faces/character_returned.png",
      low: [
        {
          text: "[ The face is familiar but you can't recall from where. ] You don't remember me, do you? Normal. I didn't remember you either. But the Mist... the Mist reminds.",
          choices: [
            { text: "Where do I know you from?", effect: +10, next: "'You don't. But you will. I was the first person who came to the shelter. On the first day. Then I left â€” at night. And I returned. But in between... I changed.' He smiles. A cold smile." },
            { text: "Why did you leave and return?", effect: +8, next: "'Because I had business outside. And that business isn't finished. Now it will continue inside.' Ambiguous. Dangerous." },
            { text: "I'm watching you.", effect: -5, next: "'Watch. But I have eyes too. And my eyes... see in the dark.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I am a transformed. But not under Vera's control â€” I escaped her. And I want vengeance. Vera took my family.",
          choices: [
            { text: "What happened to your family?", effect: +18, next: "'My wife. My son. Both transformed. And they don't recognize me anymore. Walking the streets but... hollow inside. Vera uses them â€” to draw me out.' His voice doesn't waver. Already frozen." },
            { text: "What's your plan for vengeance?", effect: +15, next: "'Get close to Vera. Pretend to provide info from the inside. And at the right moment... I reach the transmitter. But I can't do it alone.' Looks at you. 'You also want this to end.' He's right." },
            { text: "Vengeance will lead you down the wrong path.", effect: -10, next: "'Wrong path? This is the only right path. Not vengeance â€” justice. And justice hurts.' His eyes turn dark." }
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
      role: "Day-13 Â· Zone Tracker",
      image: "/faces/scout_vera.png",
      low: [
        {
          text: "Yes, my name is Vera. No, I am not *that* Vera. A coincidence. Or... maybe not. Who knows what a coincidence is in this world anymore.",
          choices: [
            { text: "Name coincidence... interesting.", effect: +10, next: "'More than interesting, soldier. The first day you took me in, you should have seen someone's face. Everyone froze when I said my name. But I'm just a scout. Someone who maps sector borders.'" },
            { text: "How much do you know outside the sector?", effect: +15, next: "'Every inch of it. I mapped up to two kilometers beyond the outer border. I know where Vera â€” the other Vera â€” is stationed. And the safest route to get there.'" },
            { text: "The name doesn't matter, what can you do?", effect: +5, next: "'I can draw maps. I can plan routes. And... I can move stealthily. I've been doing this for years.'" }
          ]
        }
      ],
      medium: [
        {
          text: "I must confess something: Vera â€” the other Vera â€” found me last week. Made an offer. 'Join me,' she said. Smiled because our names are the same.",
          choices: [
            { text: "What did you say?", effect: +20, next: "'I told her I'd think about it. To buy time. And in that moment I saw the surroundings â€” the facility. Peaked inside. People... in tubes. In green liquid. Sleeping but their faces... in pain.' She trembles. 'And I fled back. Here.'" },
            { text: "Do you know the location of Vera's facility?", effect: +22, next: "'Not only do I know â€” I know the entry code. She told me because she trusted me. Fool.' She smiles but her eyes don't. 'That code: 14-0-84. Sound familiar?'" },
            { text: "You might be giving them confidence.", effect: -8, next: "'Confidence? I'm doing my espionage. On your side. But it's hard to make you believe it, I know.'" }
          ]
        }
      ],
      high: [
        {
          text: "I drew the final map. There are three routes to Vera's facility. The safest is through the tunnel. And I have the key to that tunnel's door.",
          isSpecial: true,
          choices: [
            { text: "Give me the map and the key.", effect: +28, next: "'Take it.' She opens the map. 'North tunnel: longest but safest. South pass: short but Vera's patrol zone. The third: underground direct â€” but that's... Shadow Walker's territory. You pass if he allows it.' She hands over the key. 'And I have to come too. Only I know the way.'" },
            { text: "Why are you helping this much?", effect: +22, next: "'Because my name is Vera. And I want this name to be remembered for a good thing. The bad one is her, the good one is me. Let history be written like this.' Serious. 'Are you ready commander? The final journey begins.'" }
          ]
        }
      ]
    },

    aras_final_choice_d14: {
      name: "AraÅŸ â€” Final Decision",
      role: "Day-14 Â· Truth Bearer",
      image: "/faces/d8_aras.png",
      low: [
        {
          text: "We are here. The final day. The moment of decision. What anyone else says doesn't matter anymore â€” it's just you.",
          choices: [
            { text: "We will fight together, AraÅŸ.", effect: +15, next: "'Together? Fight?' He shakes his head slowly. 'The fighting ends now, soldier. Either we burn Sector-7 with the nuclear seal, or we surrender to the Silver.'" },
            { text: "What happens if we detonate the nuclear seal?", effect: +10, next: "'We all die. And the Mist burns with us in this sector. At least we will leave a piece of clean land in the world.' His face is like stone." },
            { text: "Is surrender the only option?", effect: -5, next: "'That's the option Vera is waiting for. Open the door, throw us into the embrace of the Silver. The decision is entirely yours.'" }
          ]
        }
      ],
      medium: [
        {
          text: "The Mist is seeping in. I don't know how much longer the doors will hold. Listen to me carefully: if the Sector-0 transmitter isn't destroyed â€” the formula won't stop.",
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
      role: "Day-14 Â· Mist Architect",
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
};

export const SHELTER_DIALOGUES = {
  tr: {
    ...tr_part1,
    ...tr_part2
  },
  en: {
    ...en_part1,
    ...en_part2
  }
};

// â”€â”€â”€â”€â”€â”€â”€ YardÄ±mcÄ± Fonksiyonlar â”€â”€â”€â”€â”€â”€â”€

/** bondLevel â†’ kategori (low / medium / high) */
export const getBondCategory = (bondLevel) => {
  if (bondLevel >= 66) return 'high';
  if (bondLevel >= 26) return 'medium';
  return 'low';
};

/** Yeni resident baÅŸlangÄ±Ã§ durumu */
export const createNewResident = (characterId) => ({
  bondLevel: 10,
  conversationCounts: { low: 0, medium: 0, high: 0 },
  unlockedSecrets: [],
  lastTalkedDay: null,
});

