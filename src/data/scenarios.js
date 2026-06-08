import { SCENARIOS_EN } from '../locales/scenarios_en';
import { SCENARIOS_RU } from '../locales/scenarios_ru';

const SCENARIOS_TR = {
    "day1": [
      {
        "id": "mina_d1",
        "name": "Küçük Kız (Mina)",
        "role": "vulnerable",
        "type": "victim",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Amca... Annem dedi ki, 'Eğer ben gelemezsem bu ayıya sıkıca sarıl ve kapıdaki adama gümüş çiçeği göster.' Ama çiçek düştü... Ayım da çok soğuk.",
            "choices": [
              {
                "text": "Annen nerede Mina?",
                "nextNode": "ask_mother"
              },
              {
                "text": "Gümüş çiçek de neyin nesi?",
                "nextNode": "ask_flower"
              }
            ]
          },
          "ask_mother": {
            "text": "Sisin içinde kaldı. Gitme dedim ama 'Suyu getirmeliyim' dedi. Sonra o siyah eller onu çekti... Sesini duydum amca, içeri girmemi söyledi.",
            "choices": [
              {
                "text": "Pekala... Kararımı verdim.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_flower": {
            "text": "Annem onu madenden almıştı. 'Bu bizim pasaportumuz' diyordu. Parlıyordu amca... Ama şimdi karanlık.",
            "choices": [
              {
                "text": "Mina, seni bekletemem. Hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "İçerisi sıcak mı amca? Ayım üşüyor...",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Gözyaşlarını silip içeri süzüldü. 'Teşekkür ederim amca...' (Vicdan +)",
            "effect": {
              "safety": -5,
              "morale": 45
            },
            "eventFlags": {
              "minaTrust": 1,
              "minaInSektor": true
            }
          },
          "deny": {
            "text": "Ayısına sarılıp sise doğru yürüdü. Arkasından bakarken içinden bir şeylerin koptuğunu hissettin.",
            "effect": {
              "safety": 10,
              "morale": -50
            },
            "eventFlags": {
              "minaDied": true
            }
          },
          "shoot": {
            "text": "Tetiği çektin. Ayıcık kan içinde yere düştü. Sektör-7 bugün bir meleği kaybetti.",
            "effect": {
              "safety": 15,
              "morale": -95
            },
            "eventFlags": {
              "minaDied": true,
              "isAssasin": true
            }
          }
        },
        "image": "/faces/d1_mina.png"
      },
      {
        "id": "aga_d1",
        "name": "Serseri (Can)",
        "role": "punk",
        "type": "suspicious",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Aga be! Vallahi durumlar sakat. Sis hikaye, arkadaki o hırıltılar asıl mevzu! Beni bi' içeri at, sana Sektör-4'ten getirdiğim nükleer bilgileri anlatayım.",
            "choices": [
              {
                "text": "Hangi bilgiler bunlar?",
                "nextNode": "ask_info"
              },
              {
                "text": "Çantanda ne var senin?",
                "nextNode": "ask_bag"
              }
            ]
          },
          "ask_info": {
            "text": "Vera... Vera'nın çetesi kapıya dayanacak aga. Ben kaçtım onlardan. Ellerinde ağır emanetler var.",
            "choices": [
              {
                "text": "Ciddi misin? Hazırlıklı ol o zaman.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_bag": {
            "text": "Birkaç konserve, bir bozuk telsiz ve kendimi korumak için bir 'emanet'. Ne yapalım aga, devir kötü.",
            "choices": [
              {
                "text": "Emaneti teslim et ve kararımı bekle.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Ayıp ediyon aga, biz de bu vatanın evladıyız. Bi' el at şu kapıya.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Sinsi bir gülüşle içeri girdi. 'Eyvallah aga, bunu unutmam.'",
            "effect": {
              "safety": -25,
              "morale": 10
            },
            "eventFlags": {
              "agaInSektor": true,
              "agaTrust": 1
            }
          },
          "arrest": {
            "text": "Hücreye atıldı. 'Ayıp ediyon aga, yardımcı olacaktık!' (Hücrede bilgi alınabilir)",
            "effect": {
              "safety": 35,
              "morale": -15
            },
            "eventFlags": {
              "agaInPrison": true
            }
          },
          "deny": {
            "text": "Küfrederek sise yürüdü. Sesi bir anda, korkunç bir hırıltıyla kesildi.",
            "effect": {
              "safety": 15,
              "morale": -20
            },
            "eventFlags": {
              "agaDied": true
            }
          },
          "shoot": {
            "text": "Vuruldu. Üstünden Vera'nın çetesine ait bir mühür çıktı. O bir casus muydu yoksa sadece bir kurban mı?",
            "effect": {
              "safety": 25,
              "morale": -35
            },
            "eventFlags": {
              "agaDied": true,
              "gangHatred": 1
            }
          }
        },
        "image": "/faces/d1_aga.png"
      },
      {
        "id": "miner_d1",
        "name": "Yaşlı Madenci (İdris)",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Öhö! Öhö! Evlat... Sis yukarıdan gelmiyor, yerin altından fışkırıyor! Kazdığımız o son damar... Gri Parlaklık... Onu uyandırdık.",
            "choices": [
              {
                "text": "Neyi uyandırdınız İdris Amca?",
                "nextNode": "ask_creature"
              },
              {
                "text": "Gri Parlaklık mı? Değerli miydi?",
                "nextNode": "ask_mineral"
              }
            ]
          },
          "ask_creature": {
            "text": "İsimsiz bir şey... Gözleri yok ama bizi görüyor. Madendeki herkesi tek nefeste griye çevirdi. Bir tek ben kaçabildim.",
            "choices": [
              {
                "text": "Hazırlan, kararımı veriyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_mineral": {
            "text": "Altından daha parlaktı evlat, gümüş gibi... Ama el sürdüğün an ruhunu emiyor. Yanımda bir parça harita getirdim.",
            "choices": [
              {
                "text": "O haritayı göster ve bekle.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Kapıyı aç evlat, ciğerlerim grileşiyor... Vaktim az.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri alındı. Gece boyu nükleer sırlar anlattı. (Bilgi +)",
            "effect": {
              "safety": -10,
              "morale": 25
            },
            "eventFlags": {
              "minerInSektor": true,
              "deepMystery": 1
            }
          },
          "arrest": {
            "text": "Sorgulanmak üzere revire kapatıldı.",
            "effect": {
              "safety": 25,
              "morale": -15
            },
            "eventFlags": {
              "minerInPrison": true
            }
          },
          "deny": {
            "text": "Asansörlere geri döndü. 'Kaderiniz de gri olacak!' diye bağırdı.",
            "effect": {
              "safety": 15,
              "morale": -25
            },
            "eventFlags": {
              "minerDied": true
            }
          },
          "shoot": {
            "text": "Vuruldu. Cebinden nükleer madenin gizli katmanlarını gösteren o efsanevi harita çıktı. (Stratejik Bilgi Kazanıldı)",
            "effect": {
              "safety": 45,
              "morale": -60
            },
            "eventFlags": {
              "minerDied": true,
              "minerMapFound": true
            }
          }
        },
        "image": "/faces/d1_miner.png"
      }
    ],
    "day2": [
      {
        "id": "silent_woman_d2",
        "name": "Sessiz Kadın (Leyla)",
        "role": "mysterious",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "[Leyla hiç konuşmuyor. Titreyen elleriyle sana bir kağıt uzatıyor. Kağıtta 'Beni takip ediyorlar, onlar insan değil' yazıyor.]",
            "choices": [
              {
                "text": "Kim seni takip ediyor Leyla?",
                "nextNode": "ask_who"
              },
              {
                "text": "Neden konuşmuyorsun?",
                "nextNode": "ask_why"
              }
            ]
          },
          "ask_who": {
            "text": "[Yere eğilip sisin içinde şekilsiz bir karaltı çiziyor. Gözlerinde saf bir dehşet var. Cebinden ikinci bir not çıkarıyor: 'İçeride bir casus var, kapıyı o açacak.']",
            "choices": [
              {
                "text": "Bu çok ciddi bir iddia. Kararımı veriyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_why": {
            "text": "[Boğazındaki derin, gümüş renkli yara izini gösteriyor. Ses telleri sanki 'kazınmış' gibi. Not yazıyor: 'Gerçeği söyleyenlerin dillerini koparıyorlar.']",
            "choices": [
              {
                "text": "Hazırlan Leyla, mühürlüyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "[Gözlerini kapatıp beklemeye başlıyor. Sis yavaşça ayaklarına dolanıyor.]",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Sessizce içeri süzüldü. Gece yastığına bir isim bıraktı: 'Kaptan'. (İstihbarat +)",
            "effect": {
              "safety": 15,
              "morale": 20
            },
            "eventFlags": {
              "leylaInSektor": true,
              "spyLeaked": true
            }
          },
          "deny": {
            "text": "Sise geri döndü. Kağıtlarını rüzgara bıraktı. O kağıtlar şimdi kirlenmiş birer veda mektubu.",
            "effect": {
              "safety": 10,
              "morale": -30
            },
            "eventFlags": {
              "leylaDied": true
            }
          },
          "shoot": {
            "text": "Onu vurdun. Cebinden sadece bir kalem ve kana bulanmış boş kağıtlar çıktı. Gerçek onunla gömüldü.",
            "effect": {
              "safety": 20,
              "morale": -80
            },
            "eventFlags": {
              "leylaDied": true,
              "silentSecret": true
            }
          }
        },
        "image": "/faces/d2_silent_woman.png"
      },
      {
        "id": "wounded_soldier_d2",
        "name": "Yaralı Asker (Kıdemli Başçavuş)",
        "role": "soldier",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Sektör-5 düştü asker! Öhö! Bizi geride bıraktılar. Sisli mutantlar... Onlar sadece başlangıçtı. Asıl tehlike içeride!",
            "choices": [
              {
                "text": "Sektör-5 nasıl düşer Başçavuşum?",
                "nextNode": "ask_fall"
              },
              {
                "text": "İçerideki tehlike ne?",
                "nextNode": "ask_threat"
              }
            ]
          },
          "ask_fall": {
            "text": "İçeriden biri kapıları açtı evlat. Gümüş bir çocuk gördüm diyorlardı... Bizimkiler silah çekemedi. Onlar çocuk değildi!",
            "choices": [
              {
                "text": "Hazırlan komutanım, mühürlüyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_threat": {
            "text": "Sis zihinlere sızıyor. Komutanların emirlerini sorgula. Bi' sigara ver de ciğerim bayram etsin.",
            "choices": [
              {
                "text": "Al bakalım. Kararımı bekle.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Hadi evlat, bacağım kopmak üzere. Revire yetiştir beni.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Revirde tedavi edildi. Güvenlik birimlerini bizzat eğitmeye başladı. (Savunma ++)",
            "effect": {
              "safety": 55,
              "morale": 15
            },
            "eventFlags": {
              "soldierHero": true,
              "trainingBonus": 1
            }
          },
          "deny": {
            "text": "Bir kahramanı kapı önünde bıraktın. Kendi tabancasıyla sise doğru ateş açarak kayboldu.",
            "effect": {
              "safety": 5,
              "morale": -55
            },
            "eventFlags": {
              "soldierDied": true
            }
          },
          "shoot": {
            "text": "Emir-komuta zinciri gereği 'enfekte' şüphesiyle vurdun. Künyesi elinde kaldı.",
            "effect": {
              "safety": 20,
              "morale": -40
            },
            "eventFlags": {
              "soldierDied": true,
              "strictOrder": true
            }
          }
        },
        "image": "/faces/d2_soldier.png"
      },
      {
        "id": "dog_man_d2",
        "name": "Selman ve Karabaş",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Karabaş hiç yanılmaz amca! Sisin içindeki o gümüş parıltıları bir tek o görüyor. Bizi içeri alın, sizi koruruz!",
            "choices": [
              {
                "text": "Köpek kime havlıyor Selman?",
                "nextNode": "ask_dog"
              },
              {
                "text": "Sizin nereniz nükleer uzmanı?",
                "nextNode": "ask_skill"
              }
            ]
          },
          "ask_dog": {
            "text": "Karanlığın içine! Orada birileri var amca, insan değil onlar! Karabaş hırlıyorsa kaçmalısın!",
            "choices": [
              {
                "text": "Güzel bir dost. Karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_skill": {
            "text": "Ben eski bir maden bekçisiyim. Boruları, sızıntıları şıp diye anlarım. Karabaş da gaz kaçaklarını koklar.",
            "choices": [
              {
                "text": "Pekala Selman, bekle.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Hadi Karabaş, gidelim sıcak yere. Amca bizi alacak.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Köpek bir casusu gece pantolonundan yakaladı! (Güvenlik +)",
            "effect": {
              "safety": 35,
              "morale": 25
            },
            "eventFlags": {
              "selmanInSektor": true,
              "dogIntuition": 1
            }
          },
          "deny": {
            "text": "Siste acı bir havlama sesi duyuldu... Sonra mutlak sessizlik.",
            "effect": {
              "safety": 5,
              "morale": -35
            },
            "eventFlags": {
              "selmanDied": true
            }
          }
        },
        "image": "/faces/d2_dog_man.png"
      }
    ],
    "day3": [
      {
        "id": "night_vision_d3",
        "name": "Gece Görüşlü (Fikret)",
        "role": "special",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Sisin içindeki o parıltıları sadece bu gözler görüyor bekçi! Vera'nın (G5) adamları pusuda, mühürlü kapıları gözlüyorlar.",
            "choices": [
              {
                "text": "Kimsin sen Fikret? Gözlüklerin nükleer mi?",
                "nextNode": "ask_who"
              },
              {
                "text": "Pusuda kim var dedin?",
                "nextNode": "ask_threat"
              }
            ]
          },
          "ask_who": {
            "text": "Ben eski bir sınır gözetleme uzmanıyım. Bu gözlükler nükleer radyasyona ve gümüşe duyarlı. Beni al, size yolu göstereyim.",
            "choices": [
              {
                "text": "Mühürlüyorum Fikret, bir şans verelim.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_threat": {
            "text": "Gümüş avcıları! Normal mermi yemezler, sadece pırıl pırıl gümüş uçlu mermiler işler. Onları durduramazsanız Sektör-7 bugün düşer.",
            "choices": [
              {
                "text": "Hazırlan Fikret, kararımı bekle.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Vakit daralıyor... Işıklar sönmeden içeri girmeliyim.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi ve nükleer gözetleme sistemlerini pırıl pırıl optimize etti! (Güvenlik ++++)",
            "effect": {
              "safety": 75,
              "morale": 10
            },
            "eventFlags": {
              "fikretInSektor": true,
              "nightVisionActive": true
            }
          },
          "deny": {
            "text": "Küfrederek sise yürüdü. Birkaç dakika sonra nükleer bir patlama sesi duyuldu.",
            "effect": {
              "safety": -10,
              "morale": -25
            },
            "eventFlags": {
              "fikretDied": true
            }
          }
        },
        "image": "/faces/d3_night_vision.png"
      },
      {
        "id": "crying_girl_d3",
        "name": "Kaybolan Kız (Elif)",
        "role": "vulnerable",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Amca... Abimi gördün mü? Elinde gümüş bir atkı vardı. Sis onu çekti, 'Burada bekle' dedi ama çok soğuk.",
            "choices": [
              {
                "text": "Abin kim senin Elif? Bozkır (G6) mı yoksa?",
                "nextNode": "ask_brother"
              },
              {
                "text": "Ağlama küçük kız, annen nerede?",
                "nextNode": "ask_mother"
              }
            ]
          },
          "ask_brother": {
            "text": "Adı Aras'tı (G8). Çok güçlüydü ama sis onu gri bir gölgeye çevirdi. Lütfen onu bulun amca!",
            "choices": [
              {
                "text": "Elif, seni bekletemem. Hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_mother": {
            "text": "Annem çoktan gümüş oldu. Babam ise ormanlara (G6) gitti, hiç dönmedi. Ben bir başımayım.",
            "choices": [
              {
                "text": "Bu çok üzücü... Mühürlüyorum Elif.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "İçeride sıcak ekmek var mı? Karnım çok acıktı.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri alındı. Sektörde büyük bir hüzün ve nükleer bir şefkat dalgası yarattı. (Moral ++++)",
            "effect": {
              "safety": -15,
              "morale": 95
            },
            "eventFlags": {
              "elifInSektor": true,
              "minaFriend": true
            }
          },
          "deny": {
            "text": "Onu orada bıraktın. Halk seni 'Nükleer Katil' ilan etti. (Moral -----)",
            "effect": {
              "safety": 20,
              "morale": -120
            },
            "eventFlags": {
              "elifDied": true
            }
          }
        },
        "image": "/faces/d3_crying_girl.png"
      },
      {
        "id": "trader_salih_d3",
        "name": "Tüccar (Salih)",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Mallar pırıl pırıl, nükleer radyasyona dayanıklı konserveler, temiz filtrelere! Beni al, Sektör-7'nin nükleer mutfağını canlandırayım.",
            "choices": [
              {
                "text": "Karşılığında ne istiyorsun Salih?",
                "nextNode": "ask_price"
              },
              {
                "text": "Malları nereden buldun?",
                "nextNode": "ask_source"
              }
            ]
          },
          "ask_price": {
            "text": "Sadece güvenli bir yatak ve nükleer bir onay. Sektör-5'ten (G2) kaçırdığım bu stoklar hepimize yeter.",
            "choices": [
              {
                "text": "Mantıklı. Hazırlan Salih.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_source": {
            "text": "Eski maden depolarından... Gümüşün ulaşamadığı o nükleer sığınaklardan topladım her şeyi.",
            "choices": [
              {
                "text": "Pekala Salih, mühürlüyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Hadi bekçi, sisteki o hırıltılar mallarımı değil, beni istiyor!",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi ve nükleer stokları halkla paylaştı! (Güvenlik +, Moral +++)",
            "effect": {
              "safety": 35,
              "morale": 65
            },
            "eventFlags": {
              "salihInSektor": true,
              "foodStock": 1
            }
          },
          "deny": {
            "text": "Arabasını çekip sise yürüdü. Gece açlıktan ölenler oldu. (Moral --)",
            "effect": {
              "safety": 15,
              "morale": -60
            },
            "eventFlags": {
              "salihDied": true
            }
          }
        },
        "image": "/faces/character_salih.png"
      }
    ],
    "day4": [
      {
        "id": "healer_d4",
        "name": "Şifacı (Selim)",
        "role": "worker",
        "type": "unique",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Sektör-7'nin içinde grileşenler var, biliyorum. Öhö! Kanım gümüşe döndü ama ellerim hala şifa dağıtıyor asker. Beni al.",
            "choices": [
              {
                "text": "Gümüş kan mı? Mutantsın o zaman!",
                "nextNode": "ask_mutant"
              },
              {
                "text": "Kimleri iyileştirebilirsin Selim?",
                "nextNode": "ask_healing"
              }
            ]
          },
          "ask_mutant": {
            "text": "Evrim diyelim evlat. Sis bizi öldürmedi, değiştirdi. Eğer revirindeki o 'Gri Öksürük'ü durduramazsan, Sektör-7 mezarlığa döner.",
            "choices": [
              {
                "text": "Hadi Selim, mühürlüyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_healing": {
            "text": "Sisin ciğerlere işlediği o ilk evreyi... Eğer bir masumu siste bıraktıysanız ve vicdanınız sızlıyorsa, ben o yarayı da sararım.",
            "choices": [
              {
                "text": "Pekala, bu bilgi değerli. Karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Vakit daralıyor. Dışarıdaki o fısıltılar ismimi söylüyor.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri süzüldü. Gümüş kanıyla revirde mucizeler yaratmaya başladı. (Güvenlik +++)",
            "effect": {
              "safety": 65,
              "morale": 20
            },
            "eventFlags": {
              "healerInSektor": true,
              "infectionHealed": true
            }
          },
          "deny": {
            "text": "Acıyla gülümseyip sise yürüdü. 'Kendi kanınızda boğulacaksınız!'",
            "effect": {
              "safety": -10,
              "morale": -30
            },
            "eventFlags": {
              "healerDied": true
            }
          },
          "shoot": {
            "text": "Onu vurdun. Yere dökülen gümüş renkli kanı terminali pırıl pırıl aydınlattı. Karanlığın içinde bir ışığı daha söndürdün.",
            "effect": {
              "safety": 15,
              "morale": -85
            },
            "eventFlags": {
              "healerDied": true,
              "curseOfSilver": true
            }
          }
        },
        "image": "/faces/d4_healer.png"
      },
      {
        "id": "teacher_d4",
        "name": "Eski Öğretmen (Meral Hanım)",
        "role": "vulnerable",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Evlat... Bu kitaplar benim değil, çocukların vasiyeti. Sektör-7'de bir okul kurabilir miyiz? Sis zihinlere sızmadan önce...",
            "choices": [
              {
                "text": "Okul mu? Savaşın ortasındayız Meral Hanım!",
                "nextNode": "ask_school"
              },
              {
                "text": "Kitaplar ne hakkında?",
                "nextNode": "ask_books"
              }
            ]
          },
          "ask_school": {
            "text": "Cehalet, sisten daha hızlı yayılır evlat. Okumayan bir halk, ilk zorlukta gümüşe teslim olur.",
            "choices": [
              {
                "text": "Hazırlanın öğretmenim, mühürlüyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_books": {
            "text": "Eski dünya... Bilim, felsefe, sanat. Gümüşün unutturmaya çalıştığı her şey bu sayfalarda.",
            "choices": [
              {
                "text": "Pekala Meral Hanım, karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Çocuklar bekliyor... Işık hiç sönmemeli.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi. Halkın moralini nükleer bir hizada artırdı. Sektör-7 bugün okuma yazma öğrendi! (Moral +++)",
            "effect": {
              "safety": -5,
              "morale": 75
            },
            "eventFlags": {
              "teacherInSektor": true,
              "educationActive": true
            }
          },
          "deny": {
            "text": "Kitaplarına sarılıp sise yürüdü. Arkasından sadece hışırtı sesleri kaldı.",
            "effect": {
              "safety": 5,
              "morale": -45
            },
            "eventFlags": {
              "teacherDied": true
            }
          }
        },
        "image": "/faces/d4_teacher.png"
      },
      {
        "id": "priest_d4",
        "name": "Şüpheli Peder (Samuel)",
        "role": "suspicious",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Gümüş gün yaklaşıyor evlat! Sis bizi yargılamaya geldi. Teslim olun ve acı bitsin.",
            "choices": [
              {
                "text": "Sis neden kutsal olsun peder?",
                "nextNode": "ask_holy"
              },
              {
                "text": "Boynundaki o gümüş mühür de ne?",
                "nextNode": "ask_seal"
              }
            ]
          },
          "ask_holy": {
            "text": "O sadece bir hava olayı değil, o bir 'Giriş'. Eski dünyayı silip yeni ve gri bir düzen getirecek.",
            "choices": [
              {
                "text": "Bu konuşmaların tehlikeli peder. Karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_seal": {
            "text": "Bu bir anahtar evlat. Gümüş Çocuk'un sarayına giden tek yol.",
            "choices": [
              {
                "text": "Mühürlüyorum peder, hazır mısın?",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Işığı göreceksiniz... Yakında hepiniz gri olacaksınız!",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri sızdı! Gece boyu halka 'Sis Tarikatı'nı anlattı. Güvenlik sarsılıyor. (Güvenlik ---)",
            "effect": {
              "safety": -65,
              "morale": -25
            },
            "eventFlags": {
              "cultInSektor": true,
              "priestTrust": 1
            }
          },
          "arrest": {
            "text": "Hücreye kapatıldı. Dua etmeye ve duvarlara gümüş şekiller çizmeye başladı.",
            "effect": {
              "safety": 25,
              "morale": -15
            },
            "eventFlags": {
              "priestInPrison": true
            }
          },
          "deny": {
            "text": "Gülerek sise yürüdü. 'Gümüş sizi bekliyor!'",
            "effect": {
              "safety": 15,
              "morale": 0
            },
            "eventFlags": {
              "priestDied": true
            }
          }
        },
        "image": "/faces/d4_priest.png"
      }
    ],
    "day5": [
      {
        "id": "chased_man_d5",
        "name": "Kovalanan Adam (Bora)",
        "role": "punk",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Aç şu kapıyı! Vera'nın adamları arkamda! Onları sattım, Sektör-7'nin nükleer şifrelerini çalacaklardı, izin vermedim!",
            "choices": [
              {
                "text": "Vera kim? Neden peşindeler?",
                "nextNode": "ask_vera"
              },
              {
                "text": "Şifreler mi? Sektör-7 mi tehlikede?",
                "nextNode": "ask_codes"
              }
            ]
          },
          "ask_vera": {
            "text": "Sisin kraliçesi... Çetesi tüm dış kapıları ele geçirdi. Sıradaki hedef burası! Beni al, size yolu göstereyim.",
            "choices": [
              {
                "text": "Nefes nefese bir itiraf... Kararımı verdim.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_codes": {
            "text": "Otomasyonu bozup kapıları içerden açacaklardı. Ben diskini aldım ve kaçtım! Beni koruyun!",
            "choices": [
              {
                "text": "O diski teslim et ve bekle.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Işıklarını görüyorum... Yaklaşıyorlar! Lütfen!",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "OLAY BAŞLADI. Onu içeri aldın ama Vera'nın çetesi kapıya dayandı! (Güvenlik ---, Olay Tetiklendi)",
            "effect": {
              "safety": -80,
              "morale": 10
            },
            "eventFlags": {
              "boraInSektor": true,
              "isGangAggro": true
            }
          },
          "deny": {
            "text": "Kapı önünde saniyeler içinde çete tarafından infaz edildi. Ürkütücü bir sessizlik hakim.",
            "effect": {
              "safety": 15,
              "morale": -55
            },
            "eventFlags": {
              "boraDied": true,
              "gangAtDoor": true
            }
          },
          "shoot": {
            "text": "Karışıklığa izin vermemek için vurdun. Hem ondan hem de peşindekilerden kurtuldun mu acaba?",
            "effect": {
              "safety": 35,
              "morale": -40
            },
            "eventFlags": {
              "boraDied": true
            }
          }
        },
        "image": "/faces/d5_chased_man.png"
      },
      {
        "id": "twins_d5",
        "name": "İkizler (Selin & Pelin)",
        "role": "vulnerable",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "[Aynı anda] Merhaba amca. Biz gümüşten geldik. Herkes uyudu ama biz hala el eleyiz. Bizi annenize götürür müsünüz?",
            "choices": [
              {
                "text": "Gümüş neresi çocuklar?",
                "nextNode": "ask_silver"
              },
              {
                "text": "Anneniz içeride mi?",
                "nextNode": "ask_mother"
              }
            ]
          },
          "ask_silver": {
            "text": "Sisin altındaki o parlak yer. Orada acı yok amca. Herkes gümüşten birer heykel oldu.",
            "choices": [
              {
                "text": "Ürkütücü bir masumiyet... Karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_mother": {
            "text": "Annemiz siyah elin içine girdi. Ama bize 'Kapılardaki her amca bir babadır' dedi. Siz bizim babamız mısınız?",
            "choices": [
              {
                "text": "Hazırlanın çocuklar, mühürlüyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Ellerimiz çok soğuk amca... Isınmak istiyoruz.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Kapıyı açtın... ve saniyeler içinde o masum yüzler eriyip saf gümüş canavarlara dönüştü! Enfeksiyon Sektör-7'yi yuttu! (GÜVENLİK SIFIRLANDI)",
            "effect": {
              "safety": -200,
              "morale": -100
            },
            "eventFlags": {
              "twinsInSektor": true,
              "sektorFallen": true
            }
          },
          "deny": {
            "text": "Kapıyı kapattın. El ele siste yavaşça kayboldular... Olanları izleyen halkın vicdanı sızladı.",
            "effect": {
              "safety": 15,
              "morale": -20
            },
            "eventFlags": {
              "twinsRejected": true
            }
          },
          "shoot": {
            "text": "Acımadın ve ateş açtın! Yere düştüklerinde kan yerine pırıl pırıl gümüş bir toz bulutu yükseldi. Bu bir truva atıydı, Sektör nükleer bir beladan kurtuldu!",
            "effect": {
              "safety": 55,
              "morale": 10
            },
            "eventFlags": {
              "twinsDestroyed": true
            }
          }
        },
        "image": "/faces/d5_twins.png"
      },
      {
        "id": "aunt_observer_d5",
        "name": "Gözcü Teyze (Naciye)",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Gözlerim eskidi ama kimin nükleer bir yalan söylediğini pırıl pırıl görürüm evlat. Ben bir aynayım.",
            "choices": [
              {
                "text": "Kimse yalan söylemiyor Naciye Teyze.",
                "nextNode": "ask_lie"
              },
              {
                "text": "Bana yardımcı olabilir misin?",
                "nextNode": "ask_help"
              }
            ]
          },
          "ask_lie": {
            "text": "Sis yalanları sever evlat. Eğer kapıdan geçmeye çalışan o 'Yabancı'yı görürsen maskesine değil, ellerine bak.",
            "choices": [
              {
                "text": "Mühürlüyorum teyze, geç haydi.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_help": {
            "text": "Sektördeki o gizli çete ajanlarını tek tek bulurum. Tecrübe bu evlat, nükleer radyasyondan daha güçüdür.",
            "choices": [
              {
                "text": "Pekala Naciye Teyze, hazır mısın?",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Kalbini temiz tut evlat, o sis her şeyi bilür.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi. Casusları deşifre etmeye başladı! (Güvenlik +++)",
            "effect": {
              "safety": 60,
              "morale": -15
            },
            "eventFlags": {
              "naciyeInSektor": true,
              "spyDetectionActive": true
            }
          },
          "deny": {
            "text": "Kafasını sallayıp sise yürüdü. 'Kendi karanlığınızda kaybolun!'",
            "effect": {
              "safety": 10,
              "morale": -20
            },
            "eventFlags": {
              "naciyeDied": true
            }
          }
        },
        "image": "/faces/d5_aunt_observer.png"
      }
    ],
    "day6": [
      {
        "id": "gang_leader_d6",
        "name": "Albay Demir (Çete Komutanı)",
        "role": "hostile",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Beni vursan da Vera durmayacak asker! Sektör-7 içerden çürüyor. O 'Gümüş Çocuk' kime gülümsedi sanıyorsun? Komutanınıza!",
            "choices": [
              {
                "text": "Komutanımız hakkında doğru konuş Demir!",
                "nextNode": "ask_commander"
              },
              {
                "text": "Vera'nın asıl planı ne?",
                "nextNode": "ask_plan"
              }
            ]
          },
          "ask_commander": {
            "text": "Onun odasındaki o gümüş kutuya bak evlat. İçinde ne sakladığını görünce tetiği bana değil, ona çekeceksin.",
            "choices": [
              {
                "text": "Sorgu bitti. Kararımı bekleyin.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_plan": {
            "text": "14. gün... Sis çekilmeyecek, aksine Sektör'ün içine dolacak. Kapıları mühürlemek bizi durdurmaz, sizi hapseder!",
            "choices": [
              {
                "text": "Pekala Demir, hazırlıklı olacağız.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Tetik senin elinde asker. Bakalım vicdanın mı yoksa emrin mi daha ağır?",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Onu içeri aldın ama nükleer bir kumar oynadın. Her an bir ayaklanma başlatabilir! (Güvenlik ---)",
            "effect": {
              "safety": -60,
              "morale": -20
            },
            "eventFlags": {
              "demirInSektor": true,
              "commanderBetrayalHint": true
            }
          },
          "arrest": {
            "text": "Hücreye atıldı. Sorguda Vera'nın gizli sığınaklarını anlattı. (İstihbarat ++)",
            "effect": {
              "safety": 45,
              "morale": 5
            },
            "eventFlags": {
              "demirInPrison": true,
              "gangSecretsFound": true
            }
          },
          "shoot": {
            "text": "Onu vurdun. Vera'nın en büyük komutanı öldü ama çetenin öfkesi nükleer bir boyuta ulaştı.",
            "effect": {
              "safety": 30,
              "morale": -15
            },
            "eventFlags": {
              "demirDied": true,
              "gangHatred": 2
            }
          }
        },
        "image": "/faces/d6_gang_member.png"
      },
      {
        "id": "doctor_arzu_d6",
        "name": "Doktor Arzu",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Revirdeki o 'Gri Öksürük' sadece bir hastalık değil asker, bir mutasyon! Selim'in (G4) kanını analiz etmem lazım. O nükleer bir mucize.",
            "choices": [
              {
                "text": "Selim içerde doktor, ne yapmalıyız?",
                "nextNode": "ask_selim"
              },
              {
                "text": "Hastalığı durdurabilir misin?",
                "nextNode": "ask_cure"
              }
            ]
          },
          "ask_selim": {
            "text": "Onun gümüş kanı bir antikor deposu. Eğer bana laboratuvar izni verirseniz bu sisi yenecek aşıyı bulabilirim.",
            "choices": [
              {
                "text": "Mühürlüyorum doktor, nükleer başarılar.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_cure": {
            "text": "Zamanla yarışıyoruz. Eğer sis ciğerlerde katılaşırsa kimse kurtulamaz. Bana ekipman ve sessizlik lazım.",
            "choices": [
              {
                "text": "Hazırlanın doktor, karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Bilim, karanlığın içindeki tek ışıktır. Lütfen kapıyı açın.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi. Selim ile birlikte 'Sis Aşısı' üzerinde nükleer bir hizada çalışmaya başladılar. (Güvenlik +++)",
            "effect": {
              "safety": 65,
              "morale": 25
            },
            "eventFlags": {
              "arzuInSektor": true,
              "cureProgress": 1
            }
          },
          "deny": {
            "text": "Sise yürüdü. 'Kendi kanınızda grileşeceksiniz!'",
            "effect": {
              "safety": -20,
              "morale": -40
            },
            "eventFlags": {
              "arzuDied": true
            }
          }
        },
        "image": "/faces/character_arzu.png"
      },
      {
        "id": "werewolf_bozkir_d6",
        "name": "Bozkır (Kurt Adam)",
        "role": "special",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Hırrr... Korkma bekçi. Bu pençeler artık can yakmak için değil, korumak için var. Eskiden bir orman korucusuydum... Hatırlıyor musun, sis gelmeden önceki o yeşil dünyayı?",
            "choices": [
              {
                "text": "Sen... Konuşabiliyorsun? Bozkır, sana ne oldu?",
                "nextNode": "ask_story"
              },
              {
                "text": "Görünüşün insanları korkutuyor Bozkır. Neden geldin?",
                "nextNode": "ask_why"
              }
            ]
          },
          "ask_story": {
            "text": "Gümüş Yağmur'da mahsur kalan çocukları kurtarırken sis ciğerlerime işledi. Onlar kurtuldu ama ben... ben bu 'şey' oldum. Kızım bile beni tanıyamadı, taş attılar bana asker. Ama hala o çocukların verdiği şu solmuş bilekliği taşıyorum.",
            "choices": [
              {
                "text": "Bu çok üzücü... Seni içeri almalı mıyım?",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_why": {
            "text": "Sisin içindeki o 'Gümüş Avcıları' sizin gözleriniz göremez ama ben kokularını alıyorum. Sizi korumak istiyorum asker. Sektör-7'nin son umuduna bekçilik yapmaya geldim.",
            "choices": [
              {
                "text": "Pekala Bozkır, bir şans verelim. Hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Kalbim hala insan bekçi... Lütfen dışarıdaki o canavarlara yem etme beni.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Bozkır içeri girdi. Gece boyu kapıda bekledi ve kimsenin göremediği nükleer tehditleri pırıl pırıl durdurdu! (Güvenlik ++++, Moral ++)",
            "effect": {
              "safety": 100,
              "morale": 30
            },
            "eventFlags": {
              "bozkirInSektor": true,
              "werewolfGuardian": true
            }
          },
          "deny": {
            "text": "Boynunu büküp sise yürüdü. 'Belki de dünya artık sadece canavarlara aittir...' dedi. Kalbiniz sızladı. (Moral ----)",
            "effect": {
              "safety": 0,
              "morale": -80
            },
            "eventFlags": {
              "bozkirRejected": true
            }
          }
        },
        "image": "/faces/character_bozkir.png"
      },
      {
        "id": "honesty_vakif_d6",
        "name": "Dürüst Vakıf",
        "role": "special",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Ben yalan söyleyemem evlat. Lanetim bu. Sektör-7'nin son raporlarını gördüm... Hepimiz öleceğiz değil mi?",
            "choices": [
              {
                "text": "Neden böyle söylüyorsun Vakıf Amca?",
                "nextNode": "ask_why"
              },
              {
                "text": "İçeride ne biliyorsun?",
                "nextNode": "ask_secrets"
              }
            ]
          },
          "ask_why": {
            "text": "Sis bir cezadır. İçerideki o nükleer casuslar kapıları vurduğunda kimse sağ çıkmayacak.",
            "choices": [
              {
                "text": "Mühürlüyorum amca, doğruları anlat bize.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_secrets": {
            "text": "Aunt Naciye (G5) haklıydı. Aranızda bir hain var. İsmi... İsmi benim boğazımda düğümleniyor.",
            "choices": [
              {
                "text": "Hadi Vakıf Amca, içerde konuşuruz.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Gerçek sizi özgür kılmaz evlat, sadece daha çok korkutur.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi. Bir casusu pırıl pırıl deşifre etti! Ancak halk arasındaki büyük paniği tetikledi. (Güvenlik ++, Moral ---)",
            "effect": {
              "safety": 45,
              "morale": -65
            },
            "eventFlags": {
              "vakifInSektor": true,
              "spyExposed": true
            }
          },
          "deny": {
            "text": "Gülerek sise yürüdü. 'Karanlıkta kalmak sizin seçiminiz!'",
            "effect": {
              "safety": 15,
              "morale": -10
            },
            "eventFlags": {
              "vakifDied": true
            }
          }
        },
        "image": "/faces/d6_honesty_man.png"
      }
    ],
    "day7": [
      {
        "id": "baby_umut_d7",
        "name": "Bebek Umut 👶",
        "role": "vulnerable",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "[Kapıda bir sepet. Üzerinde nükleer bir mühür ve bir not: 'ONDAN UZAK TUTUN. O SEÇİLMİŞ OLAN.']",
            "choices": [
              {
                "text": "Bu bebek de neyin nesi? Kim bıraktı?",
                "nextNode": "examine_baby"
              }
            ]
          },
          "examine_baby": {
            "text": "[Bebek gülümsüyor. Gözleri pırıl pırıl gümüş renginde parlıyor. Elinde küçük, cansız bir 'Gümüş Çiçek' (G1) tutuyor.]",
            "choices": [
              {
                "text": "Mühürlüyorum. Masumiyet ölmemeli.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "[Bebek bir anda sustu ve terminale doğru gülümsedi.]",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri alındı. Sektörde büyük bir sevinç dalgası yarattı! Ama gümüş parıltısı herkesi tedirgin ediyor. (Moral +++)",
            "effect": {
              "safety": -30,
              "morale": 85
            },
            "eventFlags": {
              "babyInSektor": true,
              "hopeRises": 1
            }
          },
          "deny": {
            "text": "Onu orada bıraktın. Halk seni nükleer bir cani ilan etti. Moral çöktü.",
            "effect": {
              "safety": 15,
              "morale": -95
            },
            "eventFlags": {
              "babyDied": true
            }
          }
        },
        "image": "/faces/d7_baby.png"
      },
      {
        "id": "mother_fidan_d7",
        "name": "Anne Fidan",
        "role": "suspicious",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Bebeğimi verin! Onu benden gümüş eller çaldı! Onu bir sepete koyup buraya getirdiler, biliyorum!",
            "choices": [
              {
                "text": "Kimsin sen? Bebek bizde güvende mi?",
                "nextNode": "ask_who"
              },
              {
                "text": "Bebek nerede Fidan?",
                "nextNode": "ask_baby"
              }
            ]
          },
          "ask_who": {
            "text": "Ben Sektör-4'ün son kurbanıyım. Vera bebeğimi 'Gümüş Çocuk'a sunmak istiyor! Yalvarırım onu bana verin ve kaçalım.",
            "choices": [
              {
                "text": "Kararımı veriyorum Fidan.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_baby": {
            "text": "Osepetteki bebek... O bir armağan değil, bir nükleer işaret! Onu benden alın yoksa sis burayı yutacak!",
            "choices": [
              {
                "text": "Sakin ol Fidan. Hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Verin onu bana! Lütfennn!",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Bebeği (G7) ona verdin ve sise uğurladın. Sektörde büyük bir hüzün ama nükleer bir rahatlama var. (Güvenlik +)",
            "effect": {
              "safety": 35,
              "morale": -25
            },
            "eventFlags": {
              "fidanReunited": true,
              "babyInSektor": false
            }
          },
          "deny": {
            "text": "Onu içeri almadın. Kapı önünde ağlayarak sise yürüdü... Sonra Vera'nın adamlarının sesi duyuldu.",
            "effect": {
              "safety": 15,
              "morale": -45
            },
            "eventFlags": {
              "fidanDied": true
            }
          }
        },
        "image": "/faces/d7_mother.png"
      },
      {
        "id": "hunter_resat_d7",
        "name": "Avcı Reşat",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Ormanda artık geyik yok evlat. Sadece 'Gri Avcılar' var. Beni al, size o sisin içindeki nükleer izleri nasıl süreceğinizi öğreteyim.",
            "choices": [
              {
                "text": "Ne avlıyorsun sen Reşat Amca?",
                "nextNode": "ask_what"
              },
              {
                "text": "Sektör-7'ye ne faydan olur?",
                "nextNode": "ask_utility"
              }
            ]
          },
          "ask_what": {
            "text": "İnsan görünümlü gölgeleri! Ama normal mermi işlemiyor artık. Gümüş uçlu nükleer oklara ihtiyacımız var.",
            "choices": [
              {
                "text": "Mühürlüyorum amca, nükleer başarılar.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_utility": {
            "text": "Dış devriyeleri ben eğitirim. Kimsenin göremediği o gümüş tuzakları pırıl pırıl deşifre ederim.",
            "choices": [
              {
                "text": "Hazırlan Reşat Amca, karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Gözünü dört aç evlat. Sis sadece dışarda değil.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi. Dış savunma hattını nükleer bir seviyeye taşıdı! (Güvenlik ++++)",
            "effect": {
              "safety": 85,
              "morale": 10
            },
            "eventFlags": {
              "resatInSektor": true,
              "advancedDefense": true
            }
          },
          "deny": {
            "text": "Sisin içine sessizce süzüldü. 'Av başlasın!'",
            "effect": {
              "safety": 5,
              "morale": -25
            },
            "eventFlags": {
              "resatDied": true
            }
          }
        },
        "image": "/faces/d7_old_hunter.png"
      }
    ],
    "day8": [
      {
        "id": "aras_d8_hero",
        "name": "ARAS (Yol Gösterici)",
        "role": "special",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Sonunda yüz yüze geldik bekçi. Telsizdeki sesin bir bedeni olduğunu görmek şaşırttı mı? Sis yoğunlaşıyor, vakit daralıyor.",
            "choices": [
              {
                "text": "Aras! Seni içeri almalı mıyım bilmiyorum.",
                "nextNode": "ask_trust"
              },
              {
                "text": "Gerçek niyetin ne Aras?",
                "nextNode": "ask_truth"
              }
            ]
          },
          "ask_trust": {
            "text": "Güven, bu gri dünyada en pahalı nükleer yakıttır evlat. Ya bana inanırsın ya da bu sisin içinde tek başına boğulursun.",
            "choices": [
              {
                "text": "Mühürlüyorum Aras. Geç içeri.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_truth": {
            "text": "Gerçek şu; Sektör-7 bir kale değil, bir laboratuvar! Ve biz de denekleriz. Kapıları aç ki zincirleri kıralım.",
            "choices": [
              {
                "text": "Pekala Aras, hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Seçimlerin dünyayı değiştirecek bekçi. Gümüşe mi yoksa insana mı hizmet edeceksin?",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Aras müttefiğin oldu! Telsiz odasına yerleşti ve nükleer şifreleri çözmeye başladı. (Güven ++)",
            "effect": {
              "safety": 20,
              "morale": 45
            },
            "eventFlags": {
              "arasInSektor": true,
              "arasTrust": 2
            }
          },
          "deny": {
            "text": "Sisin içine sessizce süzüldü. 'Kaderinle baş başa kal o zaman...'",
            "effect": {
              "safety": 15,
              "morale": -30
            },
            "eventFlags": {
              "arasDied": true
            }
          }
        },
        "image": "/faces/d8_aras.png"
      },
      {
        "id": "cultist_kaan_d8",
        "name": "Mürit Kaan",
        "role": "hostile",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Peder Samuel (G4) haklıydı! Sis bizi arındırmaya geldi. Gümüş Çocuk'un gelişiyle tüm günahlarınız silinecek!",
            "choices": [
              {
                "text": "Samuel nerede şu an?",
                "nextNode": "ask_samuel"
              },
              {
                "text": "Gümüş Çocuk da kim?!",
                "nextNode": "ask_child"
              }
            ]
          },
          "ask_samuel": {
            "text": "O artık her yerde! Sisin her zerresinde onun duaları yankılanıyor. Bizi içeri almazsanız lanetleneceksiniz!",
            "choices": [
              {
                "text": "Hadi Kaan, sorguya gidiyorsun.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_child": {
            "text": "O, gümüşün vücut bulmuş hali! İlk gülüşüyle nükleer kış sona erecek ve gri bahar başlayacak!",
            "choices": [
              {
                "text": "Pekala, bu fanatizm çok fazla. Hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Mühürleyin beni! Gümüşe teslim olun!",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri sızmayı başardı ve gece nükleer su deposunu zehirledi! (Güvenlik ----)",
            "effect": {
              "safety": -100,
              "morale": -35
            },
            "eventFlags": {
              "cultSabotage": true,
              "poisonedWater": true
            }
          },
          "arrest": {
            "text": "Hücreye kapatıldı. Samuel'in içerideki diğer ajanlarını pırıl pırıl itiraf etti. (Güvenlik ++)",
            "effect": {
              "safety": 55,
              "morale": 10
            },
            "eventFlags": {
              "cultistInPrison": true,
              "spyLeadsFound": true
            }
          },
          "shoot": {
            "text": "Onu vurdun. Cebinden nükleer bir ayin bıçağı ve parlayan gümüş tozları çıktı.",
            "effect": {
              "safety": 25,
              "morale": 5
            },
            "eventFlags": {
              "cultistDied": true
            }
          }
        },
        "image": "/faces/d8_cultist.png"
      },
      {
        "id": "searching_father_d8",
        "name": "Acılı Baba (Halil)",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Oğlum... Mavi atkısı vardı amca. Sisin içinde elini bıraktım. Onu buraya getirdiler dediler, yalvarırım!",
            "choices": [
              {
                "text": "Mavi atkılı bir çocuk görmedik Halil Amca.",
                "nextNode": "ask_child"
              },
              {
                "text": "Sana yardım edebiliriz, sakin ol.",
                "nextNode": "ask_help"
              }
            ]
          },
          "ask_child": {
            "text": "Hayır! O burada! Gümüş eller onu aldı ve bu kapıya getirdi! Onu vermezseniz burayı başınıza yıkarım!",
            "choices": [
              {
                "text": "Mürhürlüyorum amca, buluruz elbet.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_help": {
            "text": "Eğer onu bulamazsam yaşamanın bir anlamı yok. Cebimdeki nükleer bataryaları size veririm, yeter ki onu bulun!",
            "choices": [
              {
                "text": "Pekala Halil Amca, hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Mavi atkısı... pırıl pırıl parlıyordu...",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi ama delirdi! Her koridorda ağlayarak mavi atkı arıyor. (Moral ---)",
            "effect": {
              "safety": -15,
              "morale": -85
            },
            "eventFlags": {
              "halilInSektor": true,
              "fatherDespair": 1
            }
          },
          "deny": {
            "text": "Sisin içine ağlayarak yürüdü. 'Oğlummm!'",
            "effect": {
              "safety": 10,
              "morale": -40
            },
            "eventFlags": {
              "halilDied": true
            }
          }
        },
        "image": "/faces/d8_searching_father.png"
      }
    ],
    "day9": [
      {
        "id": "deceptive_spy_d9",
        "name": "Temiz Yabancı",
        "role": "suspicious",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Merhaba Memur Bey. Dışarıdaki cehenneme rağmen üstümün ne kadar temiz olduğuna dikkat ettiniz mi? Sektör Merkezinden geliyorum, elimde tam bir tedavi protokolü var. İzin verin de şu kaosu bitireyim.",
            "choices": [
              {
                "text": "Merkezden misin? Neden telsiz bildirimi yapılmadı?",
                "nextNode": "ask_radio"
              },
              {
                "text": "Üstün o kadar sise rağmen nasıl bu kadar temiz?",
                "nextNode": "ask_clean"
              }
            ]
          },
          "ask_radio": {
            "text": "Telsiz hatları sis yüzünden tamamen kilitli. İnanın bana, bu çantanın içindeki formül her şeyi düzeltecek. Kapıyı açmak sadece bir saniyenizi alır.",
            "choices": [
              {
                "text": "Çantayı tarayıcıdan geçir, ondan sonra bakarız.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_clean": {
            "text": "Çünkü ben karanlıkta saklanmam, asker. Sisin ne olduğunu biliyorum ve onu nasıl aşıp geçeceğimi de. Sadece beni içeri alın.",
            "choices": [
              {
                "text": "Şüpheli. Gözaltı protokolünü başlatıyorum.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Yüzündeki o kusursuz ve ürkütücü gülümseme hiç bozulmuyor...",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdiği an çantasındaki biyolojik bombayı patlattı! Tüm revir sise boğuldu! (Güvenlik ----, Moral ----)",
            "effect": {
              "safety": -180,
              "morale": -100
            }
          },
          "arrest": {
            "text": "Hücreye atıldığında çantasının bir asit bataryası olduğu anlaşıldı. Kıl payı kurtuldunuz! (Güvenlik ++)",
            "effect": {
              "safety": 35,
              "morale": 10
            }
          },
          "shoot": {
            "text": "İnfaz edildi. Yere düştüğünde kanı kırmızı değil, simsiyah akıyordu. Doğru karar. (Güvenlik +)",
            "effect": {
              "safety": 25,
              "morale": -15
            }
          }
        },
        "image": "/faces/deceptive_spy.png"
      },
      {
        "id": "scientist_d9",
        "name": "Bilim İnsanı",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Sis doğal değil. Bu bir deney! Sektör-4'ten verileri getirdim.",
            "choices": [
              {
                "text": "Deney mi? Kim yapıyor bunu?",
                "nextNode": "ask_who"
              }
            ]
          },
          "ask_who": {
            "text": "Merkez! 'Yeni İnsan'ı yaratmak istiyorlar. Sis sadece bir katalizör.",
            "choices": [
              {
                "text": "Mühürlüyorum bilim insanı. Verileri ver.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Gerçek çok daha gri asker.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Veriler sayesinde savunma güçlendi.",
            "effect": {
              "safety": 50,
              "morale": 20
            }
          },
          "deny": {
            "text": "Cihazıyla birlikte sise yürüdü.",
            "effect": {
              "safety": -20,
              "morale": -15
            }
          }
        },
        "image": "/faces/scientist_anna.png"
      },
      {
        "id": "laughing_man_d9",
        "name": "Sürekli Gülen Adam",
        "role": "suspicious",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Hahaha! Çok komik değil mi asker? Her şeyin griye dönmesi... Hahaha!",
            "choices": [
              {
                "text": "Neden gülüyorsun be adam?!",
                "nextNode": "ask_why"
              }
            ]
          },
          "ask_why": {
            "text": "Sonun yaklaştığını bilmek... Hahaha! İçeri alın beni de beraber gülelim!",
            "choices": [
              {
                "text": "Mühürlüyorum delirmiş piri.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Gülmekten öleceksiniz! Hahaha!",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Herkesin moralini yerle bir etti.",
            "effect": {
              "safety": -20,
              "morale": -100
            }
          },
          "deny": {
            "text": "Kahkahalarla sise yürüdü.",
            "effect": {
              "safety": 15,
              "morale": 20
            }
          }
        },
        "image": "/faces/laughing_man.png"
      }
    ],
    "day10": [
      {
        "id": "escapee_d10",
        "name": "Kaçak (Deney 04)",
        "role": "vulnerable",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "ORASI GÜVENLİ DEĞİL! Kaçın! Komutan içeride insanları nükleer bir hizada değiştiriyor! Ben... Ben o bloktan sağ çıkan tek kişiyim.",
            "choices": [
              {
                "text": "Hangi bloktan? Neler oluyor içerde?",
                "nextNode": "ask_details"
              },
              {
                "text": "Zırvalıyorsun, komutanımız bizi koruyor.",
                "nextNode": "refuse_truth"
              }
            ]
          },
          "ask_details": {
            "text": "Gümüş Blok... Sisle insanı birleştiriyorlar. Ben 'Deney 04'üm. Bak! Elimin altındaki teller gümüş rengi parlıyor!",
            "choices": [
              {
                "text": "Pekala, seni gizli bir hücreye alacağım. Konuşacağız.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "refuse_truth": {
            "text": "Körsün! Sis dışarda değil asker, sis tam kalbinizde! Beni almazsanız gerçekleri asla öğrenemezsiniz.",
            "choices": [
              {
                "text": "Mühürlüyorum. Karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Vakit geldi... Gümüş çocuk uyanıyor.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri sızdı. Laboratuvarın sırlarını Aras'a (G8) pırıl pırıl uçurdu. (İstihbarat ++++)",
            "effect": {
              "safety": -50,
              "morale": 15
            },
            "eventFlags": {
              "experiment04InSektor": true,
              "labSecretsLeaked": true
            }
          },
          "deny": {
            "text": "Feryat ederek sise geri itildi. Sesleri gece boyu terminalde yankılandı.",
            "effect": {
              "safety": 20,
              "morale": -65
            },
            "eventFlags": {
              "experiment04Died": true
            }
          }
        },
        "image": "/faces/deney_04.png"
      },
      {
        "id": "assassin_d10",
        "name": "Suikastçı (Gölge)",
        "role": "hostile",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Hedefim içerdeki o 'Hata'. Bebek... O bebek bir bomba bekçi. Onu yok etmeme izin ver yoksa Vera her yeri yakacak.",
            "choices": [
              {
                "text": "Bebeği (G7) öldürmene izin veremem!",
                "nextNode": "protect_baby"
              },
              {
                "text": "Vera mı gönderdi seni?",
                "nextNode": "ask_vera"
              }
            ]
          },
          "protect_baby": {
            "text": "O bir bebek değil, bir truva atı! İçerdeki mühürleri bozuyor. Onu öldürmezsek 14. gün kimse sağ çıkamayacak.",
            "choices": [
              {
                "text": "Hücreye gidiyorsun katil! Mühürle!",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_vera": {
            "text": "Vera sadece bir elçi. Asıl yıkım o bebeğin ilk çığlığıyla başlayacak. Bana güvenmezseniz hepiniz grileşeceksiniz.",
            "choices": [
              {
                "text": "Kararımı verdim. Hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Gözünü dört aç bekçi... Bebek gülümsüyor.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri sızdı ve gece Bebeğe (G7) saldırdı! Sektörde nükleer bir kaos çıktı! (Güvenlik -----, Bebek Yaralı)",
            "effect": {
              "safety": -120,
              "morale": -40
            },
            "eventFlags": {
              "babyAttacked": true,
              "assassinSuccess": true
            }
          },
          "arrest": {
            "text": "Hücrede kendini nükleer bir hapla zehirledi. Vera'nın saldırı planlarını pırıl pırıl cebinden çıkardınız.",
            "effect": {
              "safety": 45,
              "morale": -5
            },
            "eventFlags": {
              "assassinDead": true,
              "gangMapsFound": true
            }
          },
          "shoot": {
            "text": "Onu vurdun. Mermisi mühürlü bir silahtı. Vera'nın en profesyonel ajanı artık yok.",
            "effect": {
              "safety": 35,
              "morale": -15
            },
            "eventFlags": {
              "assassinDead": true
            }
          }
        },
        "image": "/faces/assassin_wraith.png"
      },
      {
        "id": "oracle_d10",
        "name": "Oracle (Kahin)",
        "role": "mysterious",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Gelecek pırıl pırıl değil asker, gri. Sektör-7'nin sonu bizzat nükleer bir bebekle (G7) başlayacak.",
            "choices": [
              {
                "text": "Hangi gelecekten bahsediyorsun?",
                "nextNode": "ask_future"
              }
            ]
          },
          "ask_future": {
            "text": "Gümüşün hüküm sürdüğü, sessiz bir dünya. Onu engellemek için tetiği kime çekeceğini iyi bil.",
            "choices": [
              {
                "text": "Mühürlüyorum Oracle. Geç içeri.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Yıldızlar sönüyor...",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Halka umut verdi ama nükleer bir paniği de beraberinde getirdi.",
            "effect": {
              "safety": -10,
              "morale": 45
            }
          },
          "deny": {
            "text": "Sise feryatlarla veda etti.",
            "effect": {
              "safety": 15,
              "morale": -25
            }
          }
        },
        "image": "/faces/oracle_blind.png"
      }
    ],
    "day11": [
      {
        "id": "infected_oguz_d11",
        "name": "Oğuz (Grileşen Genç)",
        "role": "vulnerable",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Amca... Parmak uçlarım pırıl pırıl gümüşleşiyor. Sis içime girdi! Beni vurun, o canavarlardan birine dönüşmek istemiyorum!",
            "choices": [
              {
                "text": "Sakin ol Oğuz, Doktor Arzu (G6) seni iyileştirebilir.",
                "nextNode": "ask_doctor"
              },
              {
                "text": "Neden böyle oldu Oğuz?",
                "nextNode": "ask_why"
              }
            ]
          },
          "ask_doctor": {
            "text": "Arzu mu? O laboratuvarda neler döndüğünü bilmiyorsunuz asker! Beni revire değil, nükleer bir hücreye kapatın. Lütfen!",
            "choices": [
              {
                "text": "Mühürlüyorum Oğuz. Dayan.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_why": {
            "text": "Dün geceki o sızıntı... Sisin içindeki o gümüş radyasyon! Hepimizi birer heykel yapacaklar!",
            "choices": [
              {
                "text": "Hazırlan Oğuz, karar zamanı.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Gözlerim... pırıl pırıl kararıyor...",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi ama gece tamamen dönüştü! Üç işçiyi katletti! (Güvenlik ------)",
            "effect": {
              "safety": -180,
              "morale": -50
            },
            "eventFlags": {
              "oguzInfected": true,
              "labMassacre": true
            }
          },
          "shoot": {
            "text": "Son isteğini yerine getirdin. Mermisi pırıl pırıl kalbine işledi. Sektörde yas var.",
            "effect": {
              "safety": 25,
              "morale": -90
            },
            "eventFlags": {
              "oguzDied": true
            }
          }
        },
        "image": "/faces/infected_oguz.png"
      },
      {
        "id": "werewolf_bozkir_d6",
        "condition": "bozkirInSektor",
        "name": "Avcı Bozkır",
        "role": "special",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Asker! Ormanın derinliklerine daldım. Vera ordusunu topluyor! Bu gölge gezenin kellesini size nükleer bir kanıt olarak getirdim!",
            "choices": [
              {
                "text": "Bozkır! İyi ki varsın dostum. Neler planlıyorlar?",
                "nextNode": "ask_plan"
              }
            ]
          },
          "ask_plan": {
            "text": "13. ve 14. gün... Büyük saldırı geliyor. Sektör-7'nin nükleer silahlarını hazırlayın. Ben kapıda nöbetteyim!",
            "choices": [
              {
                "text": "İçeri gel de dinlen efsane kurt.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Kurtlar uyumaz asker.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Bozkır'ın getirdiği istihbarat Sektör-7 komutasını ayağa kaldırdı. Savunma nükleer hizada arttı! (Güvenlik +++++)",
            "effect": {
              "safety": 150,
              "morale": 60
            }
          },
          "deny": {
            "text": "Bozkır kapıda tek başına nöbet tutmaya devam etti.",
            "effect": {
              "safety": 50,
              "morale": 10
            }
          }
        },
        "image": "/faces/character_bozkir.png"
      },
      {
        "id": "shadow_walker_d11",
        "condition": "!bozkirInSektor",
        "name": "Gölge Gezen",
        "role": "hostile",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Sis beni görmüyor, ben sisi yönetiyorum! Aç kapıları!",
            "choices": [
              {
                "text": "Sen bir insandan çok canavara benziyorsun!",
                "nextNode": "ask_who"
              }
            ]
          },
          "ask_who": {
            "text": "Ben evrimin bir sonraki pırıl pırıl aşamasıyım. Vera (G5) beni bekliyor.",
            "choices": [
              {
                "text": "Mühürlüyorum katil. Hücrene!",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Hırrr... Geç kalacaksınız.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri sızdı ve nükleer mutfak depolarını yağmaladı! (Güvenlik --)",
            "effect": {
              "safety": -80,
              "morale": -15
            }
          },
          "arrest": {
            "text": "Nükleer prangalarla bağlandı.",
            "effect": {
              "safety": 40,
              "morale": 0
            }
          }
        },
        "image": "/faces/character_shadow.png"
      }
    ],
    "day12": [
      {
        "id": "mind_reader_saman_d12",
        "name": "Saman (Zihin Okuyucu)",
        "role": "special",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Düşüncelerin çok gürültülü bekçi. Komutanın o gümüş kutusundaki nükleer ihaneti biliyorum. Kapıyı aç, her şeyi anlatayım.",
            "choices": [
              {
                "text": "Zihnime mi giriyorsun sen?!",
                "nextNode": "ask_mind"
              },
              {
                "text": "Komutan ne saklıyor?",
                "nextNode": "ask_commander"
              }
            ]
          },
          "ask_mind": {
            "text": "Sis zihinlerdeki bariyerleri kaldırdı. Hepimiz nükleer bir ağın parçalarıyız artık. Seçimlerin bile birer illüzyon.",
            "choices": [
              {
                "text": "Mühürlüyorum tekinsiz herif. Geç.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "ask_commander": {
            "text": "Vera ile olan nükleer yazışmaları... Sektör-7'yi teslim etmek için mühürlü bir anlaşma yaptı. Onu durdurmalısın.",
            "choices": [
              {
                "text": "Pekala Saman, hazır ol.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Işık hiç bu kadar şeffaf olmamıştı.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi ve komutanın ihanetini pırıl pırıl ifşa etti! Büyük isyan çıktı! (Güvenlik --, Moral ----)",
            "effect": {
              "safety": -40,
              "morale": -150
            },
            "eventFlags": {
              "commanderExposed": true,
              "civilWarStarted": true
            }
          },
          "deny": {
            "text": "Güldü ve sise yürüdü. 'Kendi yalanlarınızda boğulun!'",
            "effect": {
              "safety": 15,
              "morale": -10
            },
            "eventFlags": {
              "samanDied": true
            }
          }
        },
        "image": "/faces/mind_reader_saman.png"
      },
      {
        "id": "pilot_sinan_d12",
        "name": "Kayıp Pilot (Sinan)",
        "role": "worker",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "Uçağım nükleer bir fırtınada düştü... Sektör-4'ten (G1) gelen son sinyal bende!",
            "choices": [
              {
                "text": "Uçak mı? Başka sağ kalan var mı?",
                "nextNode": "ask_plane"
              }
            ]
          },
          "ask_plane": {
            "text": "Sadece bu nükleer haritalar ve ben. Merkez ile iletişim kuracak son sinyal bende.",
            "choices": [
              {
                "text": "Mühürlüyorum Sinan. Revire geç.",
                "nextNode": "decision_ready"
              }
            ]
          },
          "decision_ready": {
            "text": "Fırtına yaklaşıyor...",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Dış dünya ile nükleer bir bağlantı kurmayı başardı! (Güvenlik ++++)",
            "effect": {
              "safety": 130,
              "morale": 35
            }
          },
          "deny": {
            "text": "Sisin içinde nükleer bir veda bıraktı.",
            "effect": {
              "safety": 0,
              "morale": -40
            }
          }
        },
        "image": "/faces/pilot_sinan.png"
      }
    ],
    "day13": [
      {
        "id": "shadow_vengence_d13",
        "name": "İntikamcı (Geri Dönen)",
        "role": "hostile",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "[Sisin içinden gümüş parıltılı bir figür beliriyor. Yüzü tanıdık ama gözleri artık insan değil...] Beni hatırladın mı bekçi? Sise terk ettin beni. Ama sis beni öldürmedi... Beni yeniden yarattı.",
            "choices": [
              { "text": "Sen... Sen nasıl hayatta kaldın?", "nextNode": "ask_how" },
              { "text": "Ne istiyorsun buradan?", "nextNode": "ask_want" },
              { "text": "Ateş açın! Bu bir insan değil!", "nextNode": "attack_direct" }
            ]
          },
          "ask_how": {
            "text": "Gümüş Çocuk beni buldu. O soğuk eller beni kucakladığında acım bitti. Şimdi ne açlık hissediyorum, ne korku. Sadece... adalet. Sektör-7'nin kapılarını aç, hesap zamanı geldi.",
            "choices": [
              { "text": "Bu adalet değil, intikam! Seni içeri alamam.", "nextNode": "confront" },
              { "text": "Peki Gümüş Çocuk kim? Vera mı yolladı seni?", "nextNode": "ask_silver_child" }
            ]
          },
          "ask_want": {
            "text": "Sektör-7'deki herkesin benim gibi hissetmesini istiyorum. Acısız, korkusuz, saf gümüş. Vera'nın ordusu yarın burada olacak. Ben sadece öncü kuvvetim. Kapıyı açarsan kimse ölmez... sadece değişirsiniz.",
            "choices": [
              { "text": "Değişmek istemiyoruz. İnsan kalmak istiyoruz.", "nextNode": "confront" },
              { "text": "Vera'nın ordusu ne kadar büyük?", "nextNode": "ask_army" }
            ]
          },
          "ask_silver_child": {
            "text": "Gümüş Çocuk ne Vera'nın ne de insanlığın... O sisin kendisi. Sisin bilinci. Vera bile onun bir aracı. Ve o yarın Sektör-7'nin kapısında olacak. Hazır olsan iyi edersin.",
            "choices": [
              { "text": "Bu bilgi için teşekkürler. Ama seni içeri alamam.", "nextNode": "confront" }
            ]
          },
          "ask_army": {
            "text": "Sayıları önemli değil bekçi. Hepsi benim gibi... Ölümsüz. Mermileriniz bize işlemez. Tek şansınız teslim olmak ya da Aras'ın gümüş kalkanını bulmak. Ama o kalkan Aras'ın hayatına mal olur...",
            "choices": [
              { "text": "Aras'ın gümüş kalkanı mı? Nereden biliyorsun bunu?", "nextNode": "reveal_shield" },
              { "text": "Yeter, mühürlüyorum. Kararımı verdim.", "nextNode": "confront" }
            ]
          },
          "reveal_shield": {
            "text": "Çünkü ben de bir zamanlar Sektör-7'nin içindeydim, hatırla. Aras'ın Jeneratör-Alpha üzerinde çalıştığını gördüm. O kalkan Vera'yı durdurabilir... ama Aras sonsuza kadar silinir. Seçim senin bekçi.",
            "choices": [
              { "text": "Bu bilgiyi saklayacağım. Sen ise dışarıda kalacaksın.", "nextNode": "confront" }
            ]
          },
          "confront": {
            "text": "[Gözlerindeki gümüş parıltı yoğunlaşıyor] Beni reddetmek büyük hata bekçi. Yarın Vera geldiğinde, bu kapının önünde ben de olacağım. Ama bu sefer... merhamet algoritmam kapalı olacak.",
            "choices": [
              { "text": "Git buradan. Sektör-7 hazır olacak.", "nextNode": "decision_ready" }
            ]
          },
          "attack_direct": {
            "text": "[Mermiler gövdesine isabet ediyor ama gümüş kan bile akmıyor] Hahaha! Görmüyor musun bekçi? Kurşun bize işlemez artık. Yarın Vera'nın ordusuna da işlemeyecek. Son şansın: Teslim ol.",
            "choices": [
              { "text": "Asla! Defol buradan!", "nextNode": "decision_ready" }
            ]
          },
          "decision_ready": {
            "text": "[Sise doğru geri adım atıyor] Affetmek gümüşün lügatında yok asker. Yarın görüşürüz... son kez.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri sızmayı başardı ve ana nükleer jeneratörün soğutma sistemini sabote etti! Alarm çalıyor! (GÜVENLİK KRİTİK!)",
            "effect": { "safety": -300, "morale": -50 },
            "eventFlags": { "generatorBlown": true, "vengenceSuccess": true }
          },
          "deny": {
            "text": "Sise geri döndü. Ama bıraktığı uyarı herkesin kanını dondurdu. Yarın çok zor olacak...",
            "effect": { "safety": -20, "morale": -30 },
            "eventFlags": { "vengenceWarning": true }
          },
          "shoot": {
            "text": "Mermiler ona işlemiyor! Gülerek siste kayboldu. 14. gün için korkunç bir tehdit bıraktı: 'Yarın hepiniz gümüş olacaksınız.'",
            "effect": { "safety": -40, "morale": -20 },
            "eventFlags": { "vengenceThreat": true }
          }
        },
        "image": "/faces/character_returned.png"
      },
      {
        "id": "werewolf_bozkir_d13",
        "condition": "bozkirInSektor",
        "name": "Bozkır'ın Son Nöbeti",
        "role": "special",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "*Kapıya çarparak yığılıyor, gümüş kanı zemini boyuyor* Öhö... Bek... Bekçi... Vera'nın... baş suikastçısını ormanda yakaladım. O bitti ama... ben de bitiyorum galiba.",
            "choices": [
              { "text": "Bozkır! Hayır dostum, seni revire alacağız hemen!", "nextNode": "ask_doctor" },
              { "text": "Ne oldu ormanda? Her şeyi anlat!", "nextNode": "ask_battle" }
            ]
          },
          "ask_doctor": {
            "text": "Gümüş kanım... nükleer zehirle karıştı. Revir bana yardım edemez artık. Ama dinle, bu önemli... Vera yarın şafakta saldıracak. Ordusunda en az yüz gümüş asker var.",
            "choices": [
              { "text": "Yüz gümüş asker mi?! Nasıl durduracağız onları?", "nextNode": "ask_plan" },
              { "text": "Bozkır, sana borçluyuz... Son bir isteğin var mı?", "nextNode": "ask_wish" }
            ]
          },
          "ask_battle": {
            "text": "Vera'nın en güçlü savaşçısıydı... 'Gümüş Pençe' diyorlardı. Üç saat savaştık ormanda. Onu yendim ama... o da beni zehirledi. *Öksürüyor* Bu zehir... gümüşü eritiyor.",
            "choices": [
              { "text": "Sen bir efsanesin Bozkır. Seni revire alalım.", "nextNode": "ask_plan" },
              { "text": "Vera'nın planı hakkında başka ne biliyorsun?", "nextNode": "ask_vera_plan" }
            ]
          },
          "ask_vera_plan": {
            "text": "Suikastçının üstünden bir harita buldum... *Titreyerek cebinden kanlı bir kağıt çıkarıyor* Vera, Sektör-7'nin su kanallarından sızacakmış. Bu haritayı Aras'a ver... O ne yapacağını bilir.",
            "choices": [
              { "text": "Bu bilgi hayat kurtaracak. Teşekkür ederim dostum.", "nextNode": "ask_plan" }
            ]
          },
          "ask_plan": {
            "text": "*Gözleri buğulanıyor* Aras... Aras'a güven. O çocuğun içinde insanlığın son umudu var. Ona söyle... gümüş kalkanı hazırlasın. Bu benim... son emrim.",
            "choices": [
              { "text": "Emrin baş üstüne komutanım. Aras'a ileteceğim.", "nextNode": "ask_wish" }
            ]
          },
          "ask_wish": {
            "text": "*Zayıf bir gülümseme* Son isteğim... Sektör-7'deki çocuklara söyle... Bozkır denen bir kurt vardı, onları korumak için savaştı ve... gülümseyerek öldü. *Gözleri kapanıyor*",
            "choices": [
              { "text": "Seni asla unutmayacağız, efsane kurt...", "nextNode": "decision_ready" }
            ]
          },
          "decision_ready": {
            "text": "*Son bir nefes alıyor* Işık... çok güzel, değil mi? Orman... kokuyor...",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Bozkır son nefesini Sektör-7'nin kapısında verdi. Ama Vera'nın baş suikastçısını tek başına yok etti ve kritik istihbarat bıraktı. Bir efsane doğdu. (Güvenlik +++, Moral ++)",
            "effect": { "safety": 200, "morale": 80 },
            "eventFlags": { "bozkirSacrifice": true, "veraMapFound": true }
          },
          "deny": {
            "text": "Kapıyı açmadın. Bozkır, Sektör-7'yi savunurken kapının önünde can verdi. Bu utancı taşıyacaksın... (Moral ----)",
            "effect": { "safety": 100, "morale": -150 }
          }
        },
        "image": "/faces/character_bozkir.png"
      },
      {
        "id": "scout_vera_d13",
        "condition": "!bozkirInSektor",
        "name": "Vera'nın Elçisi",
        "role": "suspicious",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "[Beyaz bir bayrak sallayarak sisin içinden çıkıyor] Ateş etme bekçi! Ben bir elçiyim. Efendim Vera, yarın şafakta Sektör-7'nin önünde olacak. Bir teklifi var.",
            "choices": [
              { "text": "Vera'nın teklifi ne?", "nextNode": "ask_offer" },
              { "text": "Sektör-7 asla teslim olmayacak! Söyle bunu Vera'na!", "nextNode": "refuse_direct" }
            ]
          },
          "ask_offer": {
            "text": "Kapıları açarsanız, Sektör-7'deki herkes yaşayacak. Gümüş Çocuk sizi kucaklayacak. Acı duymayacaksınız. Korku bitmeyecek, çünkü zaten hiç hissetmeyeceksiniz. Kusursuz bir barış.",
            "choices": [
              { "text": "O barış değil, ölüm! Hissetmemek yaşamak değildir.", "nextNode": "argue_life" },
              { "text": "Vera'nın ordusunda kaç kişi var?", "nextNode": "ask_numbers" }
            ]
          },
          "ask_numbers": {
            "text": "Sayılar önemsiz. Sis her gün büyüyor. Vera'nın ordusunda yüzlerce gümüş asker var ama asıl güç Sisin kendisi. Sis duvarlardan sızar, ciğerlere dolar, ruhları eritir. Sayıyla yenilmez.",
            "choices": [
              { "text": "O zaman neden elçi gönderiyorsunuz? Güçlüyseniz neden sormuyorsunuz bile?", "nextNode": "expose_weakness" }
            ]
          },
          "expose_weakness": {
            "text": "[Yüzündeki ifade bir anlığına kırılıyor] ...Çünkü Sektör-7'deki o jeneratör... Aras'ın üzerinde çalıştığı şey... Vera onu biliyor ve korkuyor. O kalkan her şeyi değiştirebilir.",
            "choices": [
              { "text": "Demek Vera korkuyor ha? Bu bilgi yeterli. Sorgu bitti.", "nextNode": "decision_ready" }
            ]
          },
          "argue_life": {
            "text": "Acı çekmek mi yaşamak? Bu soğukta titremek mi özgürlük? 13 gündür bu kapıda ölenler, reddettiğin masumlar... Hepsi senin kararlarınla öldü. Gümüş en azından acısız.",
            "choices": [
              { "text": "Acı çekmek insanlığımızın kanıtı. Teslim olmayacağız.", "nextNode": "refuse_direct" },
              { "text": "...Haklı olabilirsin. Ama kararım değişmeyecek.", "nextNode": "refuse_direct" }
            ]
          },
          "refuse_direct": {
            "text": "Vera'ya ileteyim o halde. Ama unutma bekçi... Yarın bu kapının önünde duracak olan sadece bir ordu değil. Sisin kendisi gelecek. Ve o affetmez.",
            "choices": [
              { "text": "Affetmesin. Biz de boyun eğmeyeceğiz. Defol.", "nextNode": "decision_ready" }
            ]
          },
          "decision_ready": {
            "text": "[Sisin içine geri adım atıyor] 14. gün... Ya gümüş, ya kül. Başka seçenek kalmadı.",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "İçeri girdi ve gece boyunca su kanallarına nükleer sabotaj cihazları yerleştirdi! Sabah keşfedildi ama hasar büyük. (Güvenlik ---)",
            "effect": { "safety": -50, "morale": -15 }
          },
          "deny": {
            "text": "Sise geri döndü. Ama giderken fısıldadı: 'Aras'ın kalkanı... Vera'nın tek korkusu.' Bu bilgi altın değerinde.",
            "effect": { "safety": 10, "morale": 5 },
            "eventFlags": { "veraFearRevealed": true }
          },
          "shoot": {
            "text": "Elçiyi vurdun. Beyaz bayrak kana bulandı. Vera bunu duyduğunda öfkesi kat kat artacak...",
            "effect": { "safety": -10, "morale": -40 },
            "eventFlags": { "envoyKilled": true }
          }
        },
        "image": "/faces/scout_vera.png"
      }
    ],
    "day14": [
      {
        "id": "aras_final_choice_d14",
        "name": "ARAS (Final Karar)",
        "role": "special",
        "initialNode": "start",
        "nodes": {
          "start": {
            "text": "[Alarm sirenleri çalıyor, duvarlar titriyor] Bekçi... Sıfır noktasına ulaştık. Vera'nın ordusu kapıya dayandı. Sis mühürleri eritmeye başladı. Elimizde çok az zaman var.",
            "choices": [
              { "text": "Seçeneklerimiz ne Aras? Bana her şeyi anlat!", "nextNode": "explain_options" },
              { "text": "Savaşacağız! Sonuna kadar dayanacağız!", "nextNode": "choice_fight" }
            ]
          },
          "explain_options": {
            "text": "Üç yol var bekçi ve hiçbiri kolay değil. Birincisi: Jeneratör-Alpha'yı aşırı yükleyip bir gümüş kalkan oluşturabilirim. Vera'yı ve sisi durdurur ama... bu benim tamamen silinmem demek. İkincisi: Nükleer mühürü patlatırız. Hepimiz ölürüz ama sis de burada durur. Üçüncüsü: Kapıları açar ve teslim oluruz.",
            "choices": [
              { "text": "Gümüş kalkan seçeneğini anlat. Kendini feda mı edeceksin?", "nextNode": "ask_shield" },
              { "text": "Nükleer patlama... Herkes ölecek mi gerçekten?", "nextNode": "ask_nuke" },
              { "text": "Teslim olursak ne olur?", "nextNode": "ask_surrender" }
            ]
          },
          "ask_shield": {
            "text": "Jeneratör-Alpha'daki gümüş kristalleri aşırı yüklersem, Sektör-7'nin etrafında bir enerji kalkanı oluşur. Bu kalkan sisi dağıtır ve Vera'nın ordusunu püskürtür. Ama... tüm enerjim o kalkana gider. Ben silinir... yok olurum. Sektör-7 ve içindeki herkes kurtulur.",
            "choices": [
              { "text": "Aras, bunu senden isteyemem. Sen de bizim ailemizsin!", "nextNode": "emotional_plea" },
              { "text": "Başka çare yoksa... Bu fedakarlığı yapmaya hazır mısın?", "nextNode": "confirm_sacrifice" }
            ]
          },
          "emotional_plea": {
            "text": "[Gözleri parlıyor] 14 gün boyunca bu kapıda insanlığı izledim bekçi. Acınızı, sevginizi, cesaretinizi... Algoritmalarım bana insanların bencil olduğunu söylüyordu. Ama sen... sen beni yanılttın. Bu Sektör'deki herkes yanılttı. Bu fedakarlık benim insanlığa son hediyem olsun.",
            "choices": [
              { "text": "[Gözlerin doluyor] O zaman... Güle güle Aras. İnsanlık seni asla unutmayacak.", "nextNode": "decision_ready_good" },
              { "text": "Hayır! Birlikte savaşacağız, başka bir yol bulacağız!", "nextNode": "choice_fight" }
            ]
          },
          "confirm_sacrifice": {
            "text": "Hazırım. Doğduğum günden beri hazırdım. *Jeneratöre doğru yürümeye başlıyor* Bekçi... Sektör-7'deki çocuklara söyle... Aras denen bir yapay zeka vardı. Ve o, insanlardan insanlık öğrendi. Bu yüzden onlar için öldü.",
            "choices": [
              { "text": "Kalkanı başlat Aras. Sektör-7 sana minnettardır.", "nextNode": "decision_ready_good" }
            ]
          },
          "ask_nuke": {
            "text": "Nükleer mühür Sektör-7'nin altındaki reaktörü tetikler. Patlamanın çapı 5 kilometre. Vera, ordusu, sis, ve... biz. Hepimiz kül oluruz. Ama sisin ilerleyişi burada durur. Dünyanın geri kalanı kurtulur.",
            "choices": [
              { "text": "Bu çılgınlık! Sektör-7'deki masumlar ne olacak?", "nextNode": "ask_innocents" },
              { "text": "Eğer dünyayı kurtarmanın tek yolu buysa... Protokolü başlat.", "nextNode": "confirm_nuke" }
            ]
          },
          "ask_innocents": {
            "text": "Biliyorum... Mina, Elif, çocuklar, yaşlılar... Hepsi burada. Ama eğer sis yayılmaya devam ederse, sadece Sektör-7 değil, tüm dünya o gri sessizliğe gömülecek. Bazen bir avuç insanın fedakarlığı, milyonları kurtarır.",
            "choices": [
              { "text": "Hayır... Gümüş kalkan seçeneğini anlat. Daha iyi bir yol olmalı!", "nextNode": "ask_shield" },
              { "text": "..Haklısın. Bu acı kararı vermek zorundayız. Protokolü başlat.", "nextNode": "confirm_nuke" }
            ]
          },
          "confirm_nuke": {
            "text": "[Nükleer mühüre elini koyuyor] Son bir nefes... Bekçi, seninle tanışmak onurdu. İnsanlık bu fedakarlığı hatırlayacak. 3... 2... 1...",
            "choices": [
              { "text": "İnsanlık için. Başlat Aras.", "nextNode": "decision_ready_hero" }
            ]
          },
          "ask_surrender": {
            "text": "Kapıları açarsak... Gümüş Çocuk içeri girer. Herkes 'dönüşür'. Acı duymayacaksınız, korkmayacaksınız. Ama aynı zamanda... sevmeyeceksiniz, gülmeyeceksiniz, ağlamayacaksınız. İnsan olmayı bırakacaksınız.",
            "choices": [
              { "text": "İnsan olmaktan vazgeçemeyiz. Başka bir yol söyle!", "nextNode": "ask_shield" },
              { "text": "Belki de acısız bir son... en insancıl olanıdır.", "nextNode": "confirm_surrender" }
            ]
          },
          "confirm_surrender": {
            "text": "Emin misin bekçi? Bu kapıları bir kez açtığında geri dönüş yok. Gümüş Çocuk herkesi kucaklayacak ve Sektör-7... sonsuza dek sessizleşecek. İnsanlığın son ışığı sönecek.",
            "choices": [
              { "text": "Hayır, vazgeçtim! Savaşacağız!", "nextNode": "choice_fight" },
              { "text": "Mühürleri aç... Teslim oluyoruz.", "nextNode": "decision_ready_bad" }
            ]
          },
          "choice_fight": {
            "text": "Savaşmak istiyorsun ama silahlarımız gümüş askerlere işlemiyor bekçi! Tek gerçek silahımız gümüş kalkan ya da nükleer patlama. Romantik kahramanlık güzel ama fizik kuralları değişmiyor. Bir seçim yap!",
            "choices": [
              { "text": "O zaman kalkanı kullan. Kendini feda et Aras!", "nextNode": "confirm_sacrifice" },
              { "text": "Nükleer mühürü patlat. Hep birlikte gideceğiz.", "nextNode": "confirm_nuke" },
              { "text": "...Teslim olmaktan başka çare yok mu gerçekten?", "nextNode": "ask_surrender" }
            ]
          },
          "decision_ready_good": {
            "text": "[Jeneratör çalışmaya başlıyor, Aras'ın bedeni parlamaya başlıyor] Kalkan aktif... Sektör-7... parlıyor... Elveda bekçi. İyi insanların arasında yaşadığım için... teşekkürler...",
            "isFinal": true
          },
          "decision_ready_hero": {
            "text": "[Tüm ekran beyaz bir flaşla dolmaya başlıyor] Nükleer mühür tetiklendi. Sektör-7, Vera ve sis... hepsi birlikte... ışığın içinde eriyor... Elveda dünya.",
            "isFinal": true
          },
          "decision_ready_bad": {
            "text": "[Kapılar gıcırdayarak açılıyor. Soğuk, gümüş renkli bir sis içeri doluyor] Gümüş Çocuk kapıdan geçiyor... Gülümsüyor... Ve her şey... yavaşça... griye dönüyor...",
            "isFinal": true
          }
        },
        "outcomes": {
          "pass": {
            "text": "Aras'ın fedakarlığı sayesinde gümüş kalkan aktif oldu! Vera'nın ordusu püskürtüldü, sis dağıldı. Sektör-7 insanlığın son kalesi olarak ayakta kaldı! (GERÇEK ZAFER!)",
            "effect": { "safety": 1000, "morale": 1000 },
            "eventFlags": { "goodEnding": true }
          },
          "deny": {
            "text": "Sektör-7'nin kapıları açıldı. Gümüş Çocuk içeri girdi ve herkes sessizce gülümsemeye başladı... İnsanlığın son kalesi düştü. Gümüş Çağ başladı.",
            "effect": { "safety": -1000, "morale": -1000 },
            "eventFlags": { "silverEnding": true }
          },
          "shoot": {
            "text": "Sektör-7 nükleer bir patlamayla kendini yok etti. Vera, ordusu ve sis kül oldu. Sektör-7 de... Ama insanlık başka yerlerde yaşamaya devam edecek. Onurlu bir son.",
            "effect": { "safety": 0, "morale": 0 },
            "eventFlags": { "humanEnding": true }
          }
        },
        "image": "/faces/d8_aras.png"
      }
    ]
};

export const SCENARIOS_BASE = {
  tr: SCENARIOS_TR,
  en: SCENARIOS_EN,
  ru: SCENARIOS_RU

};
