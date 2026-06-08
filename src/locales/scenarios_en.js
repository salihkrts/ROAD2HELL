export const SCENARIOS_EN = {
  "day1": [
    {
      "id": "mina_d1",
      "role": "vulnerable",
      "type": "victim",
      "initialNode": "start",
      "image": "/faces/d1_mina.png",
      "name": "Little Girl (Mina)",
      "nodes": {
        "start": {
          "text": "Uncle... My mother said, 'If I can't come, hug this bear tightly and show the silver flower to the man at the door.' But the flower fell... My bear is also very cold.",
          "choices": [
            {
              "nextNode": "ask_mother",
              "text": "Where is your mother, Mina?"
            },
            {
              "nextNode": "ask_flower",
              "text": "What is the silver flower?"
            }
          ]
        },
        "ask_mother": {
          "text": "He was left in the fog. I said don't go, but he said, 'I have to bring water.' Then those black hands pulled him... I heard his voice, uncle, telling me to come in.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay... I've made my decision."
            }
          ]
        },
        "ask_flower": {
          "text": "My mother bought it from the mine. 'This is our passport,' he said. It was shining, uncle... But now it's dark.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Mina, I can't keep you waiting. Be ready."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Is it hot inside, uncle? My bear is cold..."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -5,
            "morale": 45
          },
          "eventFlags": {
            "minaTrust": 1,
            "minaInSektor": true
          },
          "text": "He wiped his tears and went inside. 'Thank you uncle...' (Conscience +)"
        },
        "deny": {
          "effect": {
            "safety": 10,
            "morale": -50
          },
          "eventFlags": {
            "minaDied": true
          },
          "text": "He hugged his bear and walked into the fog. As you looked after him, you felt something break inside you."
        },
        "shoot": {
          "effect": {
            "safety": 15,
            "morale": -95
          },
          "eventFlags": {
            "minaDied": true,
            "isAssasin": true
          },
          "text": "You pulled the trigger. The teddy bear fell to the ground covered in blood. Sector-7 lost an angel today."
        }
      }
    },
    {
      "id": "aga_d1",
      "role": "punk",
      "type": "suspicious",
      "initialNode": "start",
      "image": "/faces/d1_aga.png",
      "name": "Tramp (Can)",
      "nodes": {
        "start": {
          "text": "Ah! I swear things are bad. The fog is the story, those growls in the background are the real deal! Let me in and I'll tell you the nuclear information I brought from Sector-4.",
          "choices": [
            {
              "nextNode": "ask_info",
              "text": "What information are these?"
            },
            {
              "nextNode": "ask_bag",
              "text": "What's in your bag?"
            }
          ]
        },
        "ask_info": {
          "text": "Vera... Vera's gang will come to your door, aga. I ran away from them. They have heavy relics in their hands.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Are you serious? Be prepared then."
            }
          ]
        },
        "ask_bag": {
          "text": "A few canned goods, a broken radio and a 'safety' to protect myself. What can we do, times are bad.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Hand over the deposit and wait for my decision."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "It's a shame, man, we are also children of this country. Take a look at this door."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -25,
            "morale": 10
          },
          "eventFlags": {
            "agaInSektor": true,
            "agaTrust": 1
          },
          "text": "He entered with a sly smile. 'Oh my God, I won't forget this.'"
        },
        "arrest": {
          "effect": {
            "safety": 35,
            "morale": -15
          },
          "eventFlags": {
            "agaInPrison": true
          },
          "text": "He was thrown into the cell. 'Shame on you, man, we were going to help!' (Information can be obtained in the cell)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -20
          },
          "eventFlags": {
            "agaDied": true
          },
          "text": "Cursing, he walked into the fog. His voice was suddenly cut off by a terrible growl."
        },
        "shoot": {
          "effect": {
            "safety": 25,
            "morale": -35
          },
          "eventFlags": {
            "agaDied": true,
            "gangHatred": 1
          },
          "text": "He was shot. A seal belonging to Vera's gang was found on it. Was she a spy or just a victim?"
        }
      }
    },
    {
      "id": "miner_d1",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/d1_miner.png",
      "name": "Old Miner (Idris)",
      "nodes": {
        "start": {
          "text": "Ahem! Ahem! Son... The fog doesn't come from above, it gushes from underground! That last vein we dug... Gray Radiance... We woke it up.",
          "choices": [
            {
              "nextNode": "ask_creature",
              "text": "What did you wake up, Uncle Idris?"
            },
            {
              "nextNode": "ask_mineral",
              "text": "Gray Shine? Was it valuable?"
            }
          ]
        },
        "ask_creature": {
          "text": "Something nameless... It has no eyes, but it sees us. He turned everyone in the mine gray in one breath. Only I could escape.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready, I'm making my decision."
            }
          ]
        },
        "ask_mineral": {
          "text": "It was brighter than gold, son, like silver... But the moment you touch it, it sucks your soul. I brought a piece of map with me.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Show that map and wait."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Open the door, son, my lungs are turning gray... I'm short on time."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -10,
            "morale": 25
          },
          "eventFlags": {
            "minerInSektor": true,
            "deepMystery": 1
          },
          "text": "He was taken in. He told nuclear secrets all night long. (Knowledge +)"
        },
        "arrest": {
          "effect": {
            "safety": 25,
            "morale": -15
          },
          "eventFlags": {
            "minerInPrison": true
          },
          "text": "He was confined to the infirmary for questioning."
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -25
          },
          "eventFlags": {
            "minerDied": true
          },
          "text": "He returned to the elevators. 'Your fate will also be gray!' he shouted."
        },
        "shoot": {
          "effect": {
            "safety": 45,
            "morale": -60
          },
          "eventFlags": {
            "minerDied": true,
            "minerMapFound": true
          },
          "text": "He was shot. That legendary map showing the hidden layers of the nuclear mine was found in his pocket. (Strategic Knowledge Gained)"
        }
      }
    }
  ],
  "day2": [
    {
      "id": "silent_woman_d2",
      "role": "mysterious",
      "initialNode": "start",
      "image": "/faces/d2_silent_woman.png",
      "name": "Silent Woman (Leyla)",
      "nodes": {
        "start": {
          "text": "[Leyla does not speak at all. He hands you a piece of paper with his shaking hands. The paper says 'They are following me, they are not human.']",
          "choices": [
            {
              "nextNode": "ask_who",
              "text": "Who is following you, Leyla?"
            },
            {
              "nextNode": "ask_why",
              "text": "Why aren't you talking?"
            }
          ]
        },
        "ask_who": {
          "text": "[He bends down and draws a shapeless figure in the mist. There is pure terror in his eyes. He takes out a second note from his pocket: 'There is a spy inside, he will open the door.']",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "This is a very serious claim. I'm making my decision."
            }
          ]
        },
        "ask_why": {
          "text": "[He points to the deep silver scar on his throat. It's as if the vocal cords have been 'scraped'. The note reads: 'They tear out the tongues of those who speak the truth.']",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready Leyla, I'm sealing it."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "[He closes his eyes and starts waiting. The mist slowly settles around his feet.]"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 15,
            "morale": 20
          },
          "eventFlags": {
            "leylaInSektor": true,
            "spyLeaked": true
          },
          "text": "He crept in silently. He left a name on his pillow at night: 'Captain'. (Intelligence +)"
        },
        "deny": {
          "effect": {
            "safety": 10,
            "morale": -30
          },
          "eventFlags": {
            "leylaDied": true
          },
          "text": "He returned to the fog. He threw his papers into the wind. Those papers are now dirty farewell letters."
        },
        "shoot": {
          "effect": {
            "safety": 20,
            "morale": -80
          },
          "eventFlags": {
            "leylaDied": true,
            "silentSecret": true
          },
          "text": "You shot him. Only a pen and blood-stained blank papers were found in his pocket. The truth was buried with him."
        }
      }
    },
    {
      "id": "wounded_soldier_d2",
      "role": "soldier",
      "initialNode": "start",
      "image": "/faces/d2_soldier.png",
      "name": "Wounded Soldier (Senior Sergeant)",
      "nodes": {
        "start": {
          "text": "Sector-5 has fallen, soldier! Ahem! They left us behind. Misty mutants... They were just the beginning. The real danger is inside!",
          "choices": [
            {
              "nextNode": "ask_fall",
              "text": "How could Sector-5 fall, Sergeant Major?"
            },
            {
              "nextNode": "ask_threat",
              "text": "What's the danger inside?"
            }
          ]
        },
        "ask_fall": {
          "text": "Someone from inside opened the doors, son. They were saying they saw a silver child... Our people couldn't draw a gun. They were not children!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready, commander, I'm sealing it."
            }
          ]
        },
        "ask_threat": {
          "text": "Fog is seeping into minds. Question commanders' orders. Give me a cigarette so my lungs can feast.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Here you go. Wait for my decision."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Come on kid, my leg is about to fall off. Get me to the infirmary."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 55,
            "morale": 15
          },
          "eventFlags": {
            "soldierHero": true,
            "trainingBonus": 1
          },
          "text": "He was treated in the infirmary. He started training security units personally. (Defense++)"
        },
        "deny": {
          "effect": {
            "safety": 5,
            "morale": -55
          },
          "eventFlags": {
            "soldierDied": true
          },
          "text": "You left a hero at the doorstep. He disappeared by firing into the fog with his own gun."
        },
        "shoot": {
          "effect": {
            "safety": 20,
            "morale": -40
          },
          "eventFlags": {
            "soldierDied": true,
            "strictOrder": true
          },
          "text": "According to the chain of command, you shot him on suspicion of being 'infected'. His tag remained in his hand."
        }
      }
    },
    {
      "id": "dog_man_d2",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/d2_dog_man.png",
      "name": "Selman and Karabaş",
      "nodes": {
        "start": {
          "text": "Uncle Karabaş is never wrong! He is the only one who sees those silver sparkles in the fog. Let us in, we've got you covered!",
          "choices": [
            {
              "nextNode": "ask_dog",
              "text": "Who is the dog barking at, Selman?"
            },
            {
              "nextNode": "ask_skill",
              "text": "Where are you, nuclear expert?"
            }
          ]
        },
        "ask_dog": {
          "text": "Into the darkness! There are people there, uncle, they are not human! If Karabaş growls, you should run away!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "A good friend. It's decision time."
            }
          ]
        },
        "ask_skill": {
          "text": "I'm a former mine guard. I can spot pipes and leaks in no time. Karabaş also smells gas leaks.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay Salman, wait."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Come on Karabaş, let's go to a warm place. Uncle will pick us up."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 35,
            "morale": 25
          },
          "eventFlags": {
            "selmanInSektor": true,
            "dogIntuition": 1
          },
          "text": "The dog caught a spy by his night pants! (Security +)"
        },
        "deny": {
          "effect": {
            "safety": 5,
            "morale": -35
          },
          "eventFlags": {
            "selmanDied": true
          },
          "text": "A bitter barking sound was heard in the fog... Then absolute silence."
        }
      }
    }
  ],
  "day3": [
    {
      "id": "night_vision_d3",
      "role": "special",
      "initialNode": "start",
      "image": "/faces/d3_night_vision.png",
      "name": "Night Vision (Fikret)",
      "nodes": {
        "start": {
          "text": "Only these eyes see those sparkles in the fog, guard! Vera's (G5) men lie in wait, watching the sealed doors.",
          "choices": [
            {
              "nextNode": "ask_who",
              "text": "Who are you, Fikret? Are your glasses nuclear?"
            },
            {
              "nextNode": "ask_threat",
              "text": "Who did you say was in ambush?"
            }
          ]
        },
        "ask_who": {
          "text": "I'm a former border surveillance expert. These glasses are sensitive to nuclear radiation and silver. Take me and I will show you the way.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, Fikret, let's give it a chance."
            }
          ]
        },
        "ask_threat": {
          "text": "Silver hunters! They don't eat normal bullets, only shiny silver tipped bullets. If you fail to stop them, Sector-7 will fall today.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready, Fikret, wait for my decision."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Time is running out... I have to get in before the lights go out."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 75,
            "morale": 10
          },
          "eventFlags": {
            "fikretInSektor": true,
            "nightVisionActive": true
          },
          "text": "He went in and optimized the nuclear surveillance systems to perfection! (Security ++++)"
        },
        "deny": {
          "effect": {
            "safety": -10,
            "morale": -25
          },
          "eventFlags": {
            "fikretDied": true
          },
          "text": "Cursing, he walked into the fog. A few minutes later, a nuclear explosion was heard."
        }
      }
    },
    {
      "id": "crying_girl_d3",
      "role": "vulnerable",
      "initialNode": "start",
      "image": "/faces/d3_crying_girl.png",
      "name": "Disappeared Girl (Elif)",
      "nodes": {
        "start": {
          "text": "Uncle... Have you seen my brother? He had a silver scarf in his hand. The fog pulled him and said, 'Wait here' but it's too cold.",
          "choices": [
            {
              "nextNode": "ask_brother",
              "text": "Who is your brother, Elif? Steppe (G6) or?"
            },
            {
              "nextNode": "ask_mother",
              "text": "Don't cry little girl, where is your mother?"
            }
          ]
        },
        "ask_brother": {
          "text": "His name was Aras (G8). He was very powerful, but the fog turned him into a gray shadow. Please find him, uncle!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Elif, I can't keep you waiting. Be ready."
            }
          ]
        },
        "ask_mother": {
          "text": "My mother has already become silver. My father went to the forests (G6) and never returned. I am alone.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "This is very sad... I'm sealing it, Elif."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Is there hot bread inside? I was very hungry."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -15,
            "morale": 95
          },
          "eventFlags": {
            "elifInSektor": true,
            "minaFriend": true
          },
          "text": "He was taken in. It created a wave of sadness and nuclear compassion in the industry. (Morale ++++)"
        },
        "deny": {
          "effect": {
            "safety": 20,
            "morale": -120
          },
          "eventFlags": {
            "elifDied": true
          },
          "text": "You left it there. The public declared you the 'Nuclear Killer'. (Morale -----)"
        }
      }
    },
    {
      "id": "trader_salih_d3",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/character_salih.png",
      "name": "Merchant (Salih)",
      "nodes": {
        "start": {
          "text": "The goods are sparkling clean, canned food resistant to nuclear radiation, clean filters! Take me and I'll revive Sector-7's nuclear kitchen.",
          "choices": [
            {
              "nextNode": "ask_price",
              "text": "What do you want in return, Salih?"
            },
            {
              "nextNode": "ask_source",
              "text": "Where did you find the goods?"
            }
          ]
        },
        "ask_price": {
          "text": "Just a safe bed and a nuclear approval. These stocks that I missed from Sector-5 (G2) are enough for all of us.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Logical. Get ready, Salih."
            }
          ]
        },
        "ask_source": {
          "text": "I collected everything from old mine warehouses... From those nuclear shelters where silver cannot reach.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay Salih, I'm sealing it."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Come on, guard, those growls in the fog don't want my goods, they want me!"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 35,
            "morale": 65
          },
          "eventFlags": {
            "salihInSektor": true,
            "foodStock": 1
          },
          "text": "He went in and shared the nuclear stockpile with the public! (Security +, Morale +++)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -60
          },
          "eventFlags": {
            "salihDied": true
          },
          "text": "He pulled his car and walked into the fog. There were people who died of hunger during the night. (Morale --)"
        }
      }
    }
  ],
  "day4": [
    {
      "id": "healer_d4",
      "role": "worker",
      "type": "unique",
      "initialNode": "start",
      "image": "/faces/d4_healer.png",
      "name": "Healer (Selim)",
      "nodes": {
        "start": {
          "text": "There are gray people in Sector-7, I know. Ahem! My blood has turned to silver, but my hands still heal, soldier. pick me up",
          "choices": [
            {
              "nextNode": "ask_mutant",
              "text": "Silver blood? You are mutants then!"
            },
            {
              "nextNode": "ask_healing",
              "text": "Who can you heal, Selim?"
            }
          ]
        },
        "ask_mutant": {
          "text": "Let's call it evolution, son. The fog didn't kill us, it changed us. If you can't stop that 'Grey Cough' in your infirmary, Sector-7 will become a graveyard.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Come on Selim, I'm sealing it."
            }
          ]
        },
        "ask_healing": {
          "text": "That first phase when the fog penetrates the lungs... If you left an innocent in the fog and your conscience aches, I will heal that wound too.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Well, this information is valuable. It's decision time."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Time is running out. Those whispers outside are calling my name."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 65,
            "morale": 20
          },
          "eventFlags": {
            "healerInSektor": true,
            "infectionHealed": true
          },
          "text": "He slipped in. He began to work miracles in the infirmary with his silver blood. (Security +++)"
        },
        "deny": {
          "effect": {
            "safety": -10,
            "morale": -30
          },
          "eventFlags": {
            "healerDied": true
          },
          "text": "He smiled bitterly and walked into the fog. 'You will drown in your own blood!'"
        },
        "shoot": {
          "effect": {
            "safety": 15,
            "morale": -85
          },
          "eventFlags": {
            "healerDied": true,
            "curseOfSilver": true
          },
          "text": "You shot him. His silver blood spilled onto the ground, illuminating the terminal brightly. You extinguished another light in the darkness."
        }
      }
    },
    {
      "id": "teacher_d4",
      "role": "vulnerable",
      "initialNode": "start",
      "image": "/faces/d4_teacher.png",
      "name": "Old Teacher (Mrs. Meral)",
      "nodes": {
        "start": {
          "text": "Son... These books are not mine, they are the children's will. Can we establish a school in Sector-7? Before the fog penetrates the minds...",
          "choices": [
            {
              "nextNode": "ask_school",
              "text": "School? We are in the middle of the war, Ms. Meral!"
            },
            {
              "nextNode": "ask_books",
              "text": "What are the books about?"
            }
          ]
        },
        "ask_school": {
          "text": "Ignorance spreads faster than fog, kid. An illiterate people surrenders to silver at the first difficulty.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready teacher, I'm sealing it."
            }
          ]
        },
        "ask_books": {
          "text": "Ancient world... Science, philosophy, art. Everything that Gümüş tries to make you forget is in these pages.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay Ms. Meral, it's decision time."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Children are waiting... The light must never go out."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -5,
            "morale": 75
          },
          "eventFlags": {
            "teacherInSektor": true,
            "educationActive": true
          },
          "text": "He came in. It boosted public morale to a nuclear level. Sector-7 learned to read and write today! (Morale +++)"
        },
        "deny": {
          "effect": {
            "safety": 5,
            "morale": -45
          },
          "eventFlags": {
            "teacherDied": true
          },
          "text": "He hugged his books and walked into the fog. Only rustling sounds remained."
        }
      }
    },
    {
      "id": "priest_d4",
      "role": "suspicious",
      "initialNode": "start",
      "image": "/faces/d4_priest.png",
      "name": "Doubtful Father (Samuel)",
      "nodes": {
        "start": {
          "text": "Silver day is coming, son! The fog has come to judge us. Surrender and the pain will end.",
          "choices": [
            {
              "nextNode": "ask_holy",
              "text": "Why should the fog be holy, Father?"
            },
            {
              "nextNode": "ask_seal",
              "text": "What's that silver seal around your neck?"
            }
          ]
        },
        "ask_holy": {
          "text": "It's not just a weather event, it's an 'Entry'. He will erase the old world and bring a new, gray order.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "These conversations are dangerous, Father. It's decision time."
            }
          ]
        },
        "ask_seal": {
          "text": "That's a key, kid. The only way to the Silver Child's palace.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, Father, are you ready?"
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "You will see the light... Soon you will all be grey!"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -65,
            "morale": -25
          },
          "eventFlags": {
            "cultInSektor": true,
            "priestTrust": 1
          },
          "text": "He infiltrated! He told the public about the 'Mist Sect' throughout the night. Security is being shaken. (Security ---)"
        },
        "arrest": {
          "effect": {
            "safety": 25,
            "morale": -15
          },
          "eventFlags": {
            "priestInPrison": true
          },
          "text": "He was locked in a cell. He began praying and drawing silver figures on the walls."
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": 0
          },
          "eventFlags": {
            "priestDied": true
          },
          "text": "He walked into the fog laughing. 'Silver is waiting for you!'"
        }
      }
    }
  ],
  "day5": [
    {
      "id": "chased_man_d5",
      "role": "punk",
      "initialNode": "start",
      "image": "/faces/d5_chased_man.png",
      "name": "Chased Man (Bora)",
      "nodes": {
        "start": {
          "text": "Open that door! Vera's men are behind me! I sold them, they were going to steal Sector-7's nuclear codes, I didn't let them!",
          "choices": [
            {
              "nextNode": "ask_vera",
              "text": "Vera who? Why are they after you?"
            },
            {
              "nextNode": "ask_codes",
              "text": "Passwords? Is Sector-7 in danger?"
            }
          ]
        },
        "ask_vera": {
          "text": "Queen of the mist... Her gang has taken over all the outer gates. This is the next target! Take me and I will show you the way.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "A breathless confession... I've made my decision."
            }
          ]
        },
        "ask_codes": {
          "text": "They would break the automation and open the doors from the inside. I took his disk and ran away! Protect me!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Hand over that disc and wait."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "I see their lights... They're getting closer! Please!"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -80,
            "morale": 10
          },
          "eventFlags": {
            "boraInSektor": true,
            "isGangAggro": true
          },
          "text": "THE EVENT HAS STARTED. You let him in, but Vera's gang came to the door! (Security ---, Event Triggered)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -55
          },
          "eventFlags": {
            "boraDied": true,
            "gangAtDoor": true
          },
          "text": "He was executed by the gang in front of the door within seconds. An eerie silence prevails."
        },
        "shoot": {
          "effect": {
            "safety": 35,
            "morale": -40
          },
          "eventFlags": {
            "boraDied": true
          },
          "text": "You shot to avoid confusion. Did you get rid of both him and his pursuers?"
        }
      }
    },
    {
      "id": "twins_d5",
      "role": "vulnerable",
      "initialNode": "start",
      "image": "/faces/d5_twins.png",
      "name": "Gemini (Selin & Pelin)",
      "nodes": {
        "start": {
          "text": "[Simultaneously] Hello uncle. We came from silver. Everyone slept but we are still holding hands. Can you take us to your mother?",
          "choices": [
            {
              "nextNode": "ask_silver",
              "text": "Where is the silver guys?"
            },
            {
              "nextNode": "ask_mother",
              "text": "Is your mother inside?"
            }
          ]
        },
        "ask_silver": {
          "text": "That bright place under the fog. There is no pain there, uncle. Everyone became a statue made of silver.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "A frightening innocence... Decision time."
            }
          ]
        },
        "ask_mother": {
          "text": "Our mother entered the black hand. But he told us, 'Every uncle at the gates is a father.' Are you our father?",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready guys, I'm sealing it."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Our hands are very cold, uncle... We want to warm up."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -200,
            "morale": -100
          },
          "eventFlags": {
            "twinsInSektor": true,
            "sektorFallen": true
          },
          "text": "You opened the door... and within seconds those innocent faces melted into pure silver monsters! The infection has engulfed Sector-7! (SECURITY HAS BEEN RESET)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -20
          },
          "eventFlags": {
            "twinsRejected": true
          },
          "text": "You closed the door. They slowly disappeared into the fog, hand in hand... The conscience of the people who watched what happened was pained."
        },
        "shoot": {
          "effect": {
            "safety": 55,
            "morale": 10
          },
          "eventFlags": {
            "twinsDestroyed": true
          },
          "text": "You showed no mercy and opened fire! When they hit the ground, instead of blood, a cloud of sparkling silver dust rose up. It was a trojan horse, the Sector was saved from nuclear disaster!"
        }
      }
    },
    {
      "id": "aunt_observer_d5",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/d5_aunt_observer.png",
      "name": "Auntie Gözcü (Naciye)",
      "nodes": {
        "start": {
          "text": "My eyes are old, but I can see clearly who is telling a nuclear lie, son. I am a mirror.",
          "choices": [
            {
              "nextNode": "ask_lie",
              "text": "Nobody is lying, Aunt Naciye."
            },
            {
              "nextNode": "ask_help",
              "text": "Can you help me?"
            }
          ]
        },
        "ask_lie": {
          "text": "Sis loves lies, son. If you see that 'Stranger' trying to pass through the door, look at his hands, not his mask.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, auntie, come on."
            }
          ]
        },
        "ask_help": {
          "text": "I find those secret gang agents in the sector one by one. This experience, son, is more powerful than nuclear radiation.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay, Aunt Naciye, are you ready?"
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Keep your heart pure son, that fog knows everything."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 60,
            "morale": -15
          },
          "eventFlags": {
            "naciyeInSektor": true,
            "spyDetectionActive": true
          },
          "text": "He came in. He started to decipher the spies! (Security +++)"
        },
        "deny": {
          "effect": {
            "safety": 10,
            "morale": -20
          },
          "eventFlags": {
            "naciyeDied": true
          },
          "text": "He shook his head and walked into the fog. 'Get lost in your own darkness!'"
        }
      }
    }
  ],
  "day6": [
    {
      "id": "gang_leader_d6",
      "role": "hostile",
      "initialNode": "start",
      "image": "/faces/d6_gang_member.png",
      "name": "Colonel Demir (Gang Commander)",
      "nodes": {
        "start": {
          "text": "Even if you shoot me, Vera will not stop, soldier! Sector-7 is rotting from the inside. Who do you think that 'Silver Boy' smiled at? To your commander!",
          "choices": [
            {
              "nextNode": "ask_commander",
              "text": "Speak truthfully about our commander, Demir!"
            },
            {
              "nextNode": "ask_plan",
              "text": "What is Vera's real plan?"
            }
          ]
        },
        "ask_commander": {
          "text": "Look at that silver box in his room, son. When you see what he's hiding inside, you'll pull the trigger on him, not me.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "The query is over. Wait for my decision."
            }
          ]
        },
        "ask_plan": {
          "text": "Day 14... The fog will not recede, on the contrary, it will fill the Sector. Sealing the doors doesn't stop us, it imprisons you!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "All right Demir, we'll be prepared."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "The trigger is in your hand, soldier. Let's see which is heavier, your conscience or your command?"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -60,
            "morale": -20
          },
          "eventFlags": {
            "demirInSektor": true,
            "commanderBetrayalHint": true
          },
          "text": "You let him in, but you took a nuclear gamble. He could start an uprising at any moment! (Security ---)"
        },
        "arrest": {
          "effect": {
            "safety": 45,
            "morale": 5
          },
          "eventFlags": {
            "demirInPrison": true,
            "gangSecretsFound": true
          },
          "text": "He was thrown into the cell. During the interrogation, he told about Vera's secret shelters. (Intelligence ++)"
        },
        "shoot": {
          "effect": {
            "safety": 30,
            "morale": -15
          },
          "eventFlags": {
            "demirDied": true,
            "gangHatred": 2
          },
          "text": "You shot him. Vera's greatest commander is dead, but the gang's anger has gone nuclear."
        }
      }
    },
    {
      "id": "doctor_arzu_d6",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/character_arzu.png",
      "name": "Doctor Arzu",
      "nodes": {
        "start": {
          "text": "That 'Grey Cough' in the infirmary is not just a disease, soldier, it's a mutation! I need to analyze Selim's (G4) blood. It's a nuclear miracle.",
          "choices": [
            {
              "nextNode": "ask_selim",
              "text": "Selim is inside, doctor, what should we do?"
            },
            {
              "nextNode": "ask_cure",
              "text": "Can you stop the disease?"
            }
          ]
        },
        "ask_selim": {
          "text": "His silver blood is a reservoir of antibodies. If you give me lab permission, I can find the vaccine to defeat this fog.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, doctor, nuclear success."
            }
          ]
        },
        "ask_cure": {
          "text": "We are racing against time. If the fog solidifies in the lungs, no one can survive. I need equipment and silence.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready doctor, it's decision time."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Science is the only light in the darkness. Please open the door."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 65,
            "morale": 25
          },
          "eventFlags": {
            "arzuInSektor": true,
            "cureProgress": 1
          },
          "text": "He came in. Together with Selim, they started working on the 'Fog Vaccine' in a nuclear manner. (Security +++)"
        },
        "deny": {
          "effect": {
            "safety": -20,
            "morale": -40
          },
          "eventFlags": {
            "arzuDied": true
          },
          "text": "He walked into the fog. 'You will turn gray in your own blood!'"
        }
      }
    },
    {
      "id": "werewolf_bozkir_d6",
      "role": "special",
      "initialNode": "start",
      "image": "/faces/character_bozkir.png",
      "name": "Steppe (Werewolf)",
      "nodes": {
        "start": {
          "text": "Hırrr... Don't be afraid, guard. These claws are no longer there to hurt, but to protect. I used to be a ranger... Do you remember that green world before the fog came?",
          "choices": [
            {
              "nextNode": "ask_story",
              "text": "You... can you talk? Steppe, what happened to you?"
            },
            {
              "nextNode": "ask_why",
              "text": "Your appearance scares people, Bozkır. Why did you come?"
            }
          ]
        },
        "ask_story": {
          "text": "The fog penetrated my lungs as I rescued the children trapped in the Silver Rain. They were saved, but I... I became this 'thing'. Even my daughter couldn't recognize me, they threw stones at me, soldiers. But I still carry that faded bracelet those kids gave me.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "This is so sad... Should I let you in?"
            }
          ]
        },
        "ask_why": {
          "text": "Your eyes can't see those 'Silver Hunters' in the fog, but I can smell them. I want to protect you, soldier. I have come to guard Sector-7's last hope.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay Bozkir, let's give it a try. Be ready."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "My heart is still a human guard... Please don't feed me to those monsters outside."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 100,
            "morale": 30
          },
          "eventFlags": {
            "bozkirInSektor": true,
            "werewolfGuardian": true
          },
          "text": "Steppe came in. He waited at the door all night and stopped the nuclear threats that no one could see! (Security ++++, Morale ++)"
        },
        "deny": {
          "effect": {
            "safety": 0,
            "morale": -80
          },
          "eventFlags": {
            "bozkirRejected": true
          },
          "text": "He bent his neck and walked into the fog. 'Maybe the world belongs only to monsters now...' he said. Your heart ached. (Morale ----)"
        }
      }
    },
    {
      "id": "honesty_vakif_d6",
      "role": "special",
      "initialNode": "start",
      "image": "/faces/d6_honesty_man.png",
      "name": "Honest Foundation",
      "nodes": {
        "start": {
          "text": "I can't lie, son. This is my curse. I saw the latest reports from Sector-7... We're all going to die, right?",
          "choices": [
            {
              "nextNode": "ask_why",
              "text": "Why do you say that, Uncle Vakıf?"
            },
            {
              "nextNode": "ask_secrets",
              "text": "What do you know inside?"
            }
          ]
        },
        "ask_why": {
          "text": "Fog is a punishment. When those nuclear spies inside come knocking on the doors, no one will come out alive.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, uncle, tell us the truth."
            }
          ]
        },
        "ask_secrets": {
          "text": "Aunt Naciye (G5) was right. There is a traitor among you. His name... His name gets stuck in my throat.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Come on Uncle Vakıf, we'll talk inside."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "The truth doesn't set you free, kid, it just scares you more."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 45,
            "morale": -65
          },
          "eventFlags": {
            "vakifInSektor": true,
            "spyExposed": true
          },
          "text": "He came in. He exposed a spy brilliantly! However, it triggered great panic among the public. (Security++, Morale ---)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -10
          },
          "eventFlags": {
            "vakifDied": true
          },
          "text": "He walked into the fog laughing. 'It's your choice to stay in the dark!'"
        }
      }
    }
  ],
  "day7": [
    {
      "id": "baby_umut_d7",
      "role": "vulnerable",
      "initialNode": "start",
      "image": "/faces/d7_baby.png",
      "name": "Baby Hope 👶",
      "nodes": {
        "start": {
          "text": "[A basket at the door. It has a nuclear seal on it and a note: 'KEEP AWAY FROM HIM. HE IS THE CHOSEN ONE.']",
          "choices": [
            {
              "nextNode": "examine_baby",
              "text": "What the hell is this baby? Who left?"
            }
          ]
        },
        "examine_baby": {
          "text": "[The baby smiles. His eyes shine bright silver. He is holding a small, lifeless 'Silver Flower' (G1) in his hand.]",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it. Innocence must not die."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "[The baby suddenly fell silent and smiled towards the terminal.]"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -30,
            "morale": 85
          },
          "eventFlags": {
            "babyInSektor": true,
            "hopeRises": 1
          },
          "text": "He was taken in. It created a great wave of joy in the industry! But the silver shine makes everyone uneasy. (Morale +++)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -95
          },
          "eventFlags": {
            "babyDied": true
          },
          "text": "You left it there. The people declared you a nuclear villain. Morale collapsed."
        }
      }
    },
    {
      "id": "mother_fidan_d7",
      "role": "suspicious",
      "initialNode": "start",
      "image": "/faces/d7_mother.png",
      "name": "Mother Fidan",
      "nodes": {
        "start": {
          "text": "Give me my baby! Silver hands stole it from me! They put him in a basket and brought him here, I know!",
          "choices": [
            {
              "nextNode": "ask_who",
              "text": "Who are you? Is the baby safe with us?"
            },
            {
              "nextNode": "ask_baby",
              "text": "Where is the baby, Fidan?"
            }
          ]
        },
        "ask_who": {
          "text": "I am the last victim of Sector-4. Vera wants to present my baby to the 'Silver Child'! I beg you, give it to me and let's escape.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm making my decision, Fidan."
            }
          ]
        },
        "ask_baby": {
          "text": "The baby in the basket... It's not a gift, it's a nuclear signal! Take it from me or the fog will swallow this place!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Calm down, Fidan. Be ready."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Give it to me! Please!"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 35,
            "morale": -25
          },
          "eventFlags": {
            "fidanReunited": true,
            "babyInSektor": false
          },
          "text": "You gave the baby (G7) to him and sent him off to the fog. There is great sadness but nuclear relief in the industry. (Security +)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -45
          },
          "eventFlags": {
            "fidanDied": true
          },
          "text": "You didn't let him in. He walked into the fog, crying in front of the door... Then the voice of Vera's men was heard."
        }
      }
    },
    {
      "id": "hunter_resat_d7",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/d7_old_hunter.png",
      "name": "Avcı Reşat",
      "nodes": {
        "start": {
          "text": "There are no more deer in the forest, son. There are only 'Grey Hunters'. Take me and I'll teach you how to trace nuclear traces through that fog.",
          "choices": [
            {
              "nextNode": "ask_what",
              "text": "What are you hunting, Uncle Reşat?"
            },
            {
              "nextNode": "ask_utility",
              "text": "What good would you do to Sector-7?"
            }
          ]
        },
        "ask_what": {
          "text": "Human-looking shadows! But normal bullets no longer work. We need silver-tipped nuclear arrows.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, uncle, nuclear success."
            }
          ]
        },
        "ask_utility": {
          "text": "I train the outside patrols. I decipher those silver traps that no one can see.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready, Uncle Reşat, it's decision time."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Keep your eyes open, son. The fog isn't just outside."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 85,
            "morale": 10
          },
          "eventFlags": {
            "resatInSektor": true,
            "advancedDefense": true
          },
          "text": "He came in. He took the outer defense line to a nuclear level! (Security ++++)"
        },
        "deny": {
          "effect": {
            "safety": 5,
            "morale": -25
          },
          "eventFlags": {
            "resatDied": true
          },
          "text": "He slipped silently into the mist. 'Let the hunt begin!'"
        }
      }
    }
  ],
  "day8": [
    {
      "id": "aras_d8_hero",
      "role": "special",
      "initialNode": "start",
      "image": "/faces/d8_aras.png",
      "name": "ARAS (Guidance)",
      "nodes": {
        "start": {
          "text": "Finally we came face to face, guard. Were you surprised to see that the voice on the radio had a body? The fog is thickening, time is running out.",
          "choices": [
            {
              "nextNode": "ask_trust",
              "text": "Aras! I don't know if I should let you in."
            },
            {
              "nextNode": "ask_truth",
              "text": "What is your real intention, Aras?"
            }
          ]
        },
        "ask_trust": {
          "text": "Trust is the most expensive nuclear fuel in this gray world, son. Either you believe me or you drown in this fog alone.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, Aras. Come in."
            }
          ]
        },
        "ask_truth": {
          "text": "The truth is; Sector-7 is not a castle, it's a laboratory! And we are the subjects. Open the doors so we can break the chains.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "All right, Aras, get ready."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Your choices will change the world, guard. Will you serve silver or man?"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 20,
            "morale": 45
          },
          "eventFlags": {
            "arasInSektor": true,
            "arasTrust": 2
          },
          "text": "Aras became your ally! He settled into the radio room and began deciphering the nuclear codes. (Trust++)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -30
          },
          "eventFlags": {
            "arasDied": true
          },
          "text": "He slipped silently into the mist. 'Then be alone with your fate...'"
        }
      }
    },
    {
      "id": "cultist_kaan_d8",
      "role": "hostile",
      "initialNode": "start",
      "image": "/faces/d8_cultist.png",
      "name": "Murit Kaan",
      "nodes": {
        "start": {
          "text": "Father Samuel (G4) was right! The fog has come to purify us. With the arrival of the Silver Child, all your sins will be erased!",
          "choices": [
            {
              "nextNode": "ask_samuel",
              "text": "Where is Samuel now?"
            },
            {
              "nextNode": "ask_child",
              "text": "Who is Silver Boy?!"
            }
          ]
        },
        "ask_samuel": {
          "text": "It's everywhere now! His prayers echo in every particle of the fog. You'll be damned if you don't let us in!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Come on Kaan, you are going for interrogation."
            }
          ]
        },
        "ask_child": {
          "text": "He is the embodiment of silver! With its first smile, the nuclear winter will end and the gray spring will begin!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Well, this fanaticism is too much. Be ready."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Seal me! Surrender to silver!"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -100,
            "morale": -35
          },
          "eventFlags": {
            "cultSabotage": true,
            "poisonedWater": true
          },
          "text": "He managed to sneak in and poisoned the nuclear water tank during the night! (Security ----)"
        },
        "arrest": {
          "effect": {
            "safety": 55,
            "morale": 10
          },
          "eventFlags": {
            "cultistInPrison": true,
            "spyLeadsFound": true
          },
          "text": "He was locked in a cell. Samuel's other agents inside confessed brightly. (Security++)"
        },
        "shoot": {
          "effect": {
            "safety": 25,
            "morale": 5
          },
          "eventFlags": {
            "cultistDied": true
          },
          "text": "You shot him. A nuclear ritual blade and shining silver dust emerged from his pocket."
        }
      }
    },
    {
      "id": "searching_father_d8",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/d8_searching_father.png",
      "name": "Grieving Father (Halil)",
      "nodes": {
        "start": {
          "text": "My son... He had a blue scarf, uncle. I let go of your hand in the mist. They said they brought him here, I beg of you!",
          "choices": [
            {
              "nextNode": "ask_child",
              "text": "Uncle Halil, we haven't seen a child with a blue scarf."
            },
            {
              "nextNode": "ask_help",
              "text": "We can help you, calm down."
            }
          ]
        },
        "ask_child": {
          "text": "No! He's here! Silver hands took him and brought him to this door! If you don't give it, I will destroy this place!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, uncle, we will find it of course."
            }
          ]
        },
        "ask_help": {
          "text": "There's no point in living if I can't find it. I'll give you the nuclear batteries in my pocket, as long as you find it!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay, Uncle Halil, get ready."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "His blue scarf... was shining brightly..."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -15,
            "morale": -85
          },
          "eventFlags": {
            "halilInSektor": true,
            "fatherDespair": 1
          },
          "text": "He came in but went crazy! He searches every corridor for a blue scarf, crying. (Morale ---)"
        },
        "deny": {
          "effect": {
            "safety": 10,
            "morale": -40
          },
          "eventFlags": {
            "halilDied": true
          },
          "text": "He walked into the fog crying. 'My son!'"
        }
      }
    }
  ],
  "day9": [
    {
      "id": "deceptive_spy_d9",
      "role": "suspicious",
      "initialNode": "start",
      "image": "/faces/deceptive_spy.png",
      "name": "Clean Stranger",
      "nodes": {
        "start": {
          "text": "Hello Officer. Have you noticed how clean my clothes are despite the hell outside? I come from the Sector Center, I have a complete treatment protocol. Let me end this chaos.",
          "choices": [
            {
              "nextNode": "ask_radio",
              "text": "Are you from the center? Why was there no radio notification?"
            },
            {
              "nextNode": "ask_clean",
              "text": "How is it so clean despite all the fog?"
            }
          ]
        },
        "ask_radio": {
          "text": "The radio lines are completely blocked due to fog. Trust me, the formula in this bag will fix everything. It only takes a second to open the door.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Run the bag through the scanner, then we'll look at it."
            }
          ]
        },
        "ask_clean": {
          "text": "Because I don't hide in the dark, soldier. I know what the fog is and how to get through it. Just let me in.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Suspicious. I'm initiating detention protocol."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "That flawless and scary smile on his face never fades..."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -180,
            "morale": -100
          },
          "text": "The moment he entered, he detonated the biological bomb in his bag! The entire infirmary was engulfed in fog! (Security ----, Morale ----)"
        },
        "arrest": {
          "effect": {
            "safety": 35,
            "morale": 10
          },
          "text": "When he was thrown into the cell, it turned out that his bag was an acid battery. You narrowly escaped! (Security++)"
        },
        "shoot": {
          "effect": {
            "safety": 25,
            "morale": -15
          },
          "text": "He was executed. When he fell to the ground, his blood was flowing black, not red. Right decision. (Security +)"
        }
      }
    },
    {
      "id": "scientist_d9",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/scientist_anna.png",
      "name": "The scientist",
      "nodes": {
        "start": {
          "text": "Fog is unnatural. This is an experiment! I brought the data from Sector-4.",
          "choices": [
            {
              "nextNode": "ask_who",
              "text": "Experiment? Who is doing this?"
            }
          ]
        },
        "ask_who": {
          "text": "Centre! They want to create the 'New Man'. The fog is just a catalyst.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, scientist. Give the data."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "The truth is much grayer, soldier."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 50,
            "morale": 20
          },
          "text": "Defense strengthened thanks to data."
        },
        "deny": {
          "effect": {
            "safety": -20,
            "morale": -15
          },
          "text": "He walked into the fog with his device."
        }
      }
    },
    {
      "id": "laughing_man_d9",
      "role": "suspicious",
      "initialNode": "start",
      "image": "/faces/laughing_man.png",
      "name": "The Man Who Always Laughs",
      "nodes": {
        "start": {
          "text": "Hahaha! Isn't it funny, soldier? Everything turning grey... Hahaha!",
          "choices": [
            {
              "nextNode": "ask_why",
              "text": "Why are you laughing man?!"
            }
          ]
        },
        "ask_why": {
          "text": "Knowing that the end is near... Hahaha! Take me in and let's laugh together!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing the crazy bastard."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "You will die laughing! Hahaha!"
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -20,
            "morale": -100
          },
          "text": "It destroyed everyone's morale."
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": 20
          },
          "text": "He walked into the fog with laughter."
        }
      }
    }
  ],
  "day10": [
    {
      "id": "escapee_d10",
      "role": "vulnerable",
      "initialNode": "start",
      "image": "/faces/deney_04.png",
      "name": "Runaway (Experiment 04)",
      "nodes": {
        "start": {
          "text": "IT'S NOT SAFE THERE! Run away! Inside, the Commander is changing people in nuclear alignment! I... I'm the only survivor from that block.",
          "choices": [
            {
              "nextNode": "ask_details",
              "text": "From which block? What's going on inside?"
            },
            {
              "nextNode": "refuse_truth",
              "text": "You're bullshitting, our commander is protecting us."
            }
          ]
        },
        "ask_details": {
          "text": "Silver Block... They unite fog and people. I am 'Experiment 04'. Look! The strands under my hand shine silver!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay, I'll take you to a secret cell. We will talk."
            }
          ]
        },
        "refuse_truth": {
          "text": "You are blind! The fog is not outside, soldier, the fog is right in your heart! If you don't take me, you will never learn the truth.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it. It's decision time."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "It's time... The silver boy is waking up."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -50,
            "morale": 15
          },
          "eventFlags": {
            "experiment04InSektor": true,
            "labSecretsLeaked": true
          },
          "text": "He infiltrated. He revealed the secrets of the laboratory to Aras (G8). (Intelligence ++++)"
        },
        "deny": {
          "effect": {
            "safety": 20,
            "morale": -65
          },
          "eventFlags": {
            "experiment04Died": true
          },
          "text": "Wailing, he was pushed back into the mist. Their voices echoed in the terminal throughout the night."
        }
      }
    },
    {
      "id": "assassin_d10",
      "role": "hostile",
      "initialNode": "start",
      "image": "/faces/assassin_wraith.png",
      "name": "Assassin (Shadow)",
      "nodes": {
        "start": {
          "text": "My target is that 'Error' inside. Baby... That baby is a bomb guard. Let me destroy it or Vera will burn the whole place down.",
          "choices": [
            {
              "nextNode": "protect_baby",
              "text": "I can't let you kill the baby (G7)!"
            },
            {
              "nextNode": "ask_vera",
              "text": "Did Vera send you?"
            }
          ]
        },
        "protect_baby": {
          "text": "It's not a baby, it's a trojan horse! It breaks the seals inside. If we don't kill him, no one will survive the 14th day.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "You're going to the cell, murderer! Seal it!"
            }
          ]
        },
        "ask_vera": {
          "text": "Vera is just a messenger. The real destruction will begin with that baby's first scream. If you don't trust me you will all turn grey.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I've made my decision. Be ready."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Keep your eyes open, guard... The baby is smiling."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -120,
            "morale": -40
          },
          "eventFlags": {
            "babyAttacked": true,
            "assassinSuccess": true
          },
          "text": "He sneaked in and attacked Baby (G7) at night! Nuclear chaos broke out in the industry! (Security -----, Baby Injured)"
        },
        "arrest": {
          "effect": {
            "safety": 45,
            "morale": -5
          },
          "eventFlags": {
            "assassinDead": true,
            "gangMapsFound": true
          },
          "text": "He poisoned himself with a nuclear pill in the cell. You took out Vera's attack plans from her shiny pocket."
        },
        "shoot": {
          "effect": {
            "safety": 35,
            "morale": -15
          },
          "eventFlags": {
            "assassinDead": true
          },
          "text": "You shot him. It was a weapon with a sealed bullet. Vera's most professional agent is no longer available."
        }
      }
    },
    {
      "id": "oracle_d10",
      "role": "mysterious",
      "initialNode": "start",
      "image": "/faces/oracle_blind.png",
      "name": "Oracle",
      "nodes": {
        "start": {
          "text": "The future is not bright soldier, it is grey. The end of Sector-7 will begin with a nuclear baby itself (G7).",
          "choices": [
            {
              "nextNode": "ask_future",
              "text": "Which future are you talking about?"
            }
          ]
        },
        "ask_future": {
          "text": "A silent world where silver rules. Know well who to pull the trigger on to prevent him.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, Oracle. Come in."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "The stars are fading..."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -10,
            "morale": 45
          },
          "text": "It gave hope to the public, but it also brought with it a nuclear panic."
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -25
          },
          "text": "He said goodbye to Sise with cries."
        }
      }
    }
  ],
  "day11": [
    {
      "id": "infected_oguz_d11",
      "role": "vulnerable",
      "initialNode": "start",
      "image": "/faces/infected_oguz.png",
      "name": "Oğuz (Graying Youth)",
      "nodes": {
        "start": {
          "text": "Uncle... My fingertips are turning bright silver. The fog got into me! Shoot me, I don't want to turn into one of those monsters!",
          "choices": [
            {
              "nextNode": "ask_doctor",
              "text": "Calm down Oğuz, Doctor Arzu (G6) can heal you."
            },
            {
              "nextNode": "ask_why",
              "text": "Why did this happen, Oguz?"
            }
          ]
        },
        "ask_doctor": {
          "text": "Desire? You don't know what's going on in that laboratory, soldier! Lock me in a nuclear cell, not the infirmary. Please!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, Oguz. Hang on."
            }
          ]
        },
        "ask_why": {
          "text": "That leak last night... That silver radiation in the fog! They will turn us all into statues!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Get ready Oguz, it's decision time."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "My eyes... are turning brightly dark..."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -180,
            "morale": -50
          },
          "eventFlags": {
            "oguzInfected": true,
            "labMassacre": true
          },
          "text": "He came in but was completely transformed for the night! He murdered three workers! (Security ------)"
        },
        "shoot": {
          "effect": {
            "safety": 25,
            "morale": -90
          },
          "eventFlags": {
            "oguzDied": true
          },
          "text": "You fulfilled his last wish. The bullet penetrated his sparkling heart. There is mourning in the industry."
        }
      }
    },
    {
      "id": "werewolf_bozkir_d6",
      "condition": "bozkirInSektor",
      "role": "special",
      "initialNode": "start",
      "image": "/faces/character_bozkir.png",
      "name": "Hunter Bozkir",
      "nodes": {
        "start": {
          "text": "Soldier! I dived deep into the forest. Vera is gathering her army! I bring you this shadow walker's head as nuclear evidence!",
          "choices": [
            {
              "nextNode": "ask_plan",
              "text": "Steppe! I'm glad to have you, my friend. What are they planning?"
            }
          ]
        },
        "ask_plan": {
          "text": "13th and 14th day... The big attack is coming. Prepare Sector-7's nuclear weapons. I'm on guard at the door!",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Come in and rest, legendary wolf."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Wolves don't sleep, soldier."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 150,
            "morale": 60
          },
          "text": "The intelligence brought by Bozkır brought the Sector-7 command to its feet. Defense increased at nuclear level! (Security +++++)"
        },
        "deny": {
          "effect": {
            "safety": 50,
            "morale": 10
          },
          "text": "Bozkır continued to guard the door alone."
        }
      }
    },
    {
      "id": "shadow_walker_d11",
      "condition": "!bozkirInSektor",
      "role": "hostile",
      "initialNode": "start",
      "image": "/faces/character_shadow.png",
      "name": "Shadow Walker",
      "nodes": {
        "start": {
          "text": "The fog doesn't see me, I control the fog! Open the doors!",
          "choices": [
            {
              "nextNode": "ask_who",
              "text": "You look more like a monster than a man!"
            }
          ]
        },
        "ask_who": {
          "text": "I am the next shining stage of evolution. Vera (G5) is waiting for me.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing you, killer. To your cell!"
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Hrrrr... You'll be late."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -80,
            "morale": -15
          },
          "text": "He infiltrated and looted the nuclear kitchen warehouses! (Security --)"
        },
        "arrest": {
          "effect": {
            "safety": 40,
            "morale": 0
          },
          "text": "He was bound with nuclear shackles."
        }
      }
    }
  ],
  "day12": [
    {
      "id": "mind_reader_saman_d12",
      "role": "special",
      "initialNode": "start",
      "image": "/faces/mind_reader_saman.png",
      "name": "Saman (Mind Reader)",
      "nodes": {
        "start": {
          "text": "Your thoughts are too loud, guard. I know about the nuclear betrayal in that silver box of the commander. Open the door and I'll tell you everything.",
          "choices": [
            {
              "nextNode": "ask_mind",
              "text": "Are you entering my mind?!"
            },
            {
              "nextNode": "ask_commander",
              "text": "What is the commander hiding?"
            }
          ]
        },
        "ask_mind": {
          "text": "The fog removed the barriers in the minds. We are all parts of a nuclear network now. Even your choices are illusions.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, you creepy guy. Late."
            }
          ]
        },
        "ask_commander": {
          "text": "His nuclear correspondence with Vera... He made a sealed agreement to surrender Sector-7. You must stop him.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Okay, Saman, get ready."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "Light has never been this transparent."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -40,
            "morale": -150
          },
          "eventFlags": {
            "commanderExposed": true,
            "civilWarStarted": true
          },
          "text": "He came in and brilliantly exposed the commander's betrayal! There was a big rebellion! (Security --, Morale ----)"
        },
        "deny": {
          "effect": {
            "safety": 15,
            "morale": -10
          },
          "eventFlags": {
            "samanDied": true
          },
          "text": "He laughed and walked into the mist. 'Drown in your own lies!'"
        }
      }
    },
    {
      "id": "pilot_sinan_d12",
      "role": "worker",
      "initialNode": "start",
      "image": "/faces/pilot_sinan.png",
      "name": "Lost Pilot (Sinan)",
      "nodes": {
        "start": {
          "text": "My plane crashed in a nuclear storm... I have the last signal from Sector-4 (G1)!",
          "choices": [
            {
              "nextNode": "ask_plane",
              "text": "Plane? Are there any other survivors?"
            }
          ]
        },
        "ask_plane": {
          "text": "Just these nuclear maps and me. I have the final signal to communicate with headquarters.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "I'm sealing it, Sinan. Go to the infirmary."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "The storm is approaching..."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 130,
            "morale": 35
          },
          "text": "He managed to establish a nuclear link with the outside world! (Security ++++)"
        },
        "deny": {
          "effect": {
            "safety": 0,
            "morale": -40
          },
          "text": "He left a nuclear farewell in the fog."
        }
      }
    }
  ],
  "day13": [
    {
      "id": "shadow_vengence_d13",
      "role": "hostile",
      "initialNode": "start",
      "image": "/faces/character_returned.png",
      "name": "Avenger (Returner)",
      "nodes": {
        "start": {
          "text": "[A silver shining figure appears from the mist. His face is familiar, but his eyes are no longer human...] Do you remember me, guard? You left me in the fog. But the fog didn't kill me... It recreated me.",
          "choices": [
            {
              "nextNode": "ask_how",
              "text": "You... How did you survive?"
            },
            {
              "nextNode": "ask_want",
              "text": "What do you want from here?"
            },
            {
              "nextNode": "attack_direct",
              "text": "Open fire! This is not a person!"
            }
          ]
        },
        "ask_how": {
          "text": "Silver Boy found me. When those cold hands embraced me, my pain ended. Now I feel neither hunger nor fear. Just...justice. Open the gates of Sector-7, the time of reckoning has come.",
          "choices": [
            {
              "nextNode": "confront",
              "text": "This is not justice, this is revenge! I can't let you in."
            },
            {
              "nextNode": "ask_silver_child",
              "text": "So who is the Silver Boy? Did Vera send you?"
            }
          ]
        },
        "ask_want": {
          "text": "I want everyone in Sector-7 to feel like me. Painless, fearless, pure silver. Vera's army will be here tomorrow. I'm just the vanguard. If you open the door, no one dies... you just change.",
          "choices": [
            {
              "nextNode": "confront",
              "text": "We don't want to change. We want to remain human."
            },
            {
              "nextNode": "ask_army",
              "text": "How big is Vera's army?"
            }
          ]
        },
        "ask_silver_child": {
          "text": "The Silver Child is neither Vera's nor humanity's... He is the mist itself. Consciousness of fog. Even Vera is his tool. And he will be at the door of Sector-7 tomorrow. You better be ready.",
          "choices": [
            {
              "nextNode": "confront",
              "text": "Thanks for this information. But I can't let you in."
            }
          ]
        },
        "ask_army": {
          "text": "Their numbers don't matter, guard. They're all like me... Immortal. Your bullets won't hit us. Your only chance is to surrender or find Aras' silver shield. But that shield costs Aras his life...",
          "choices": [
            {
              "nextNode": "reveal_shield",
              "text": "Aras' silver shield? How do you know this?"
            },
            {
              "nextNode": "confront",
              "text": "That's enough, I'm sealing it. I've made my decision."
            }
          ]
        },
        "reveal_shield": {
          "text": "Because I was once in Sector-7 too, remember. I saw Aras working on Generator-Alpha. That shield can stop Vera... but Aras is erased forever. The choice is yours, guard.",
          "choices": [
            {
              "nextNode": "confront",
              "text": "I will keep this information. You will be left out."
            }
          ]
        },
        "confront": {
          "text": "[The silver glint in his eyes intensifies] It's a big mistake to reject me, guard. When Vera comes tomorrow, I will also be in front of this door. But this time... my mercy algorithm will be off.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Go away. Sector-7 will be ready."
            }
          ]
        },
        "attack_direct": {
          "text": "[The bullets hit his body, but not even the silver blood flows] Hahaha! Don't you see, guard? Bullet doesn't work on us anymore. It won't work for Vera's army tomorrow either. Your last chance: Surrender.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Never! Get out of here!"
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "[Stepping back towards the fog] Forgiveness is not in silver's vocabulary, soldier. See you tomorrow... for the last time."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -300,
            "morale": -50
          },
          "eventFlags": {
            "generatorBlown": true,
            "vengenceSuccess": true
          },
          "text": "He managed to infiltrate and sabotage the main nuclear generator's cooling system! The alarm is ringing! (SAFETY IS CRITICAL!)"
        },
        "deny": {
          "effect": {
            "safety": -20,
            "morale": -30
          },
          "eventFlags": {
            "vengenceWarning": true
          },
          "text": "He returned to the fog. But the warning he left chilled everyone's blood. Tomorrow will be very difficult..."
        },
        "shoot": {
          "effect": {
            "safety": -40,
            "morale": -20
          },
          "eventFlags": {
            "vengenceThreat": true
          },
          "text": "Bullets don't hit him! Laughing, he disappeared into the fog. He left a terrible threat for the 14th day: 'Tomorrow you will all be silver.'"
        }
      }
    },
    {
      "id": "werewolf_bozkir_d13",
      "condition": "bozkirInSektor",
      "role": "special",
      "initialNode": "start",
      "image": "/faces/character_bozkir.png",
      "name": "Bozkır's Last Watch",
      "nodes": {
        "start": {
          "text": "*collapses, hitting the door, his silver blood staining the floor* Ahem... Watchman... Watchman... I caught Vera's... chief assassin in the forest. That's over, but... I think I'm over too.",
          "choices": [
            {
              "nextNode": "ask_doctor",
              "text": "Steppe! No, buddy, we'll take you to the infirmary right away!"
            },
            {
              "nextNode": "ask_battle",
              "text": "What happened in the forest? Tell me everything!"
            }
          ]
        },
        "ask_doctor": {
          "text": "My silver blood... mixed with nuclear poison. The infirmary can't help me anymore. But listen, this is important... Vera will attack at dawn tomorrow. There are at least a hundred silver soldiers in his army.",
          "choices": [
            {
              "nextNode": "ask_plan",
              "text": "One hundred silver soldiers?! How do we stop them?"
            },
            {
              "nextNode": "ask_wish",
              "text": "Bozkır, we owe you... Do you have one last request?"
            }
          ]
        },
        "ask_battle": {
          "text": "He was Vera's strongest warrior... 'Silver Claw' they called him. We fought in the forest for three hours. I defeated him, but... he also poisoned me. *Cough* This poison... melts the silver.",
          "choices": [
            {
              "nextNode": "ask_plan",
              "text": "You are a legend, Bozkır. Let's take you to the infirmary."
            },
            {
              "nextNode": "ask_vera_plan",
              "text": "What else do you know about Vera's plan?"
            }
          ]
        },
        "ask_vera_plan": {
          "text": "I found a map from the assassin... *Shaking, he pulls a bloody piece of paper from his pocket* Vera was going to infiltrate Sector-7's water channels. Give this map to Aras... He will know what to do.",
          "choices": [
            {
              "nextNode": "ask_plan",
              "text": "This information will save lives. Thank you buddy."
            }
          ]
        },
        "ask_plan": {
          "text": "*Eyes misty* Aras... Trust Aras. Inside that child is humanity's last hope. Tell him... to prepare the silver shield. This is my... final command.",
          "choices": [
            {
              "nextNode": "ask_wish",
              "text": "By your command, commander. I will forward it to Aras."
            }
          ]
        },
        "ask_wish": {
          "text": "*Weak smile* My last request... Tell the children of Sector-7... There was a wolf called Steppe, he fought to protect them and... died smiling. *Eyes close*",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "We will never forget you, legendary wolf..."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "*Takes one last breath* The light... it's beautiful, isn't it? The forest... smells..."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 200,
            "morale": 80
          },
          "eventFlags": {
            "bozkirSacrifice": true,
            "veraMapFound": true
          },
          "text": "Bozkır breathed his last at the gate of Sector-7. But he single-handedly destroyed Vera's chief assassin and left behind critical intelligence. A legend was born. (Security +++, Morale ++)"
        },
        "deny": {
          "effect": {
            "safety": 100,
            "morale": -150
          },
          "text": "You didn't open the door. Bozkir died in front of the gate while defending Sector-7. You will bear this shame... (Morale ----)"
        }
      }
    },
    {
      "id": "scout_vera_d13",
      "condition": "!bozkirInSektor",
      "role": "suspicious",
      "initialNode": "start",
      "image": "/faces/scout_vera.png",
      "name": "Vera's Ambassador",
      "nodes": {
        "start": {
          "text": "[Comes out of the fog waving a white flag] Don't shoot, guard! I am an ambassador. Sir Vera will be in front of Sector-7 at dawn tomorrow. He has an offer.",
          "choices": [
            {
              "nextNode": "ask_offer",
              "text": "What does Vera offer?"
            },
            {
              "nextNode": "refuse_direct",
              "text": "Sector-7 will never surrender! Tell that to Vera!"
            }
          ]
        },
        "ask_offer": {
          "text": "If you open the gates, everyone in Sector-7 will live. The Silver Child will embrace you. You will not feel any pain. The fear will not end, because you will never feel it anyway. A perfect peace.",
          "choices": [
            {
              "nextNode": "argue_life",
              "text": "It's not peace, it's death! Not feeling is not living."
            },
            {
              "nextNode": "ask_numbers",
              "text": "How many people are in Vera's army?"
            }
          ]
        },
        "ask_numbers": {
          "text": "Numbers are unimportant. The fog grows larger every day. There are hundreds of silver soldiers in Vera's army, but the real power is the Mist itself. Fog seeps through the walls, fills the lungs, melts the souls. He cannot be defeated by numbers.",
          "choices": [
            {
              "nextNode": "expose_weakness",
              "text": "Then why are you sending envoys? If you're strong, why don't you even ask?"
            }
          ]
        },
        "expose_weakness": {
          "text": "[The expression on her face breaks for a moment] ...Because that generator in Sector-7... What Aras is working on... Vera knows it and is afraid. That shield can change everything.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "So Vera is afraid, huh? This information is enough. The query is over."
            }
          ]
        },
        "argue_life": {
          "text": "Suffering or living? Is shivering in this cold freedom freedom? Those who died at this gate for 13 days, the innocents you rejected... They all died by your decisions. Silver is at least painless.",
          "choices": [
            {
              "nextNode": "refuse_direct",
              "text": "Suffering is proof of our humanity. We will not surrender."
            },
            {
              "nextNode": "refuse_direct",
              "text": "...You may be right. But my decision will not change."
            }
          ]
        },
        "refuse_direct": {
          "text": "I'll pass it on to Vera then. But remember, guard... It is not just an army that will stand in front of this door tomorrow. The fog itself will come. And he does not forgive.",
          "choices": [
            {
              "nextNode": "decision_ready",
              "text": "Don't forgive me. We will not bow down either. Get out."
            }
          ]
        },
        "decision_ready": {
          "isFinal": true,
          "text": "[Stepping back into the mist] Day 14... It's either silver or ash. There is no other option left."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": -50,
            "morale": -15
          },
          "text": "He went in and planted nuclear sabotage devices in the water channels throughout the night! It was discovered in the morning, but the damage is extensive. (Security ---)"
        },
        "deny": {
          "effect": {
            "safety": 10,
            "morale": 5
          },
          "eventFlags": {
            "veraFearRevealed": true
          },
          "text": "He returned to the fog. But as he was leaving, he whispered: 'Aras' shield... Vera's only fear.' This information is worth gold."
        },
        "shoot": {
          "effect": {
            "safety": -10,
            "morale": -40
          },
          "eventFlags": {
            "envoyKilled": true
          },
          "text": "You shot the messenger. The white flag was stained with blood. When Vera hears this, her anger will increase exponentially..."
        }
      }
    }
  ],
  "day14": [
    {
      "id": "aras_final_choice_d14",
      "role": "special",
      "initialNode": "start",
      "image": "/faces/d8_aras.png",
      "name": "ARAS (Final Decision)",
      "nodes": {
        "start": {
          "text": "[Alarm sirens blaring, walls shaking] Guard... We've reached ground zero. Vera's army is at the door. The mist began to melt the seals. We have very little time on our hands.",
          "choices": [
            {
              "nextNode": "explain_options",
              "text": "What are our options, Aras? Tell me everything!"
            },
            {
              "nextNode": "choice_fight",
              "text": "We will fight! We will endure until the end!"
            }
          ]
        },
        "explain_options": {
          "text": "There are three paths, guard, and none of them are easy. First: I can overload Generator-Alpha and create a silver shield. It stops Vera and the mist, but... that means I'm completely erased. Second: We blow the nuclear seal. We all die, but the fog stops here too. Third: We open the gates and surrender.",
          "choices": [
            {
              "nextNode": "ask_shield",
              "text": "Explain the silver shield option. Will you sacrifice yourself?"
            },
            {
              "nextNode": "ask_nuke",
              "text": "Nuclear explosion... Will everyone really die?"
            },
            {
              "nextNode": "ask_surrender",
              "text": "What happens if we surrender?"
            }
          ]
        },
        "ask_shield": {
          "text": "If I overload the silver crystals in Generator-Alpha, an energy shield will form around Sector-7. This shield disperses the fog and repels Vera's army. But... all my energy goes to that shield. I am erased... I disappear. Sector-7 and everyone in it are saved.",
          "choices": [
            {
              "nextNode": "emotional_plea",
              "text": "Aras, I can't ask this from you. You are our family too!"
            },
            {
              "nextNode": "confirm_sacrifice",
              "text": "If there is no other choice... Are you ready to make this sacrifice?"
            }
          ]
        },
        "emotional_plea": {
          "text": "[His eyes shine] I watched humanity at this gate for 14 days, guard. Your pain, your love, your courage... My algorithms were telling me that people were selfish. But you... you misled me. Everyone in this Sector was misled. Let this sacrifice be my last gift to humanity.",
          "choices": [
            {
              "nextNode": "decision_ready_good",
              "text": "[Your eyes fill with tears] Then... Goodbye Aras. Humanity will never forget you."
            },
            {
              "nextNode": "choice_fight",
              "text": "No! We will fight together, we will find another way!"
            }
          ]
        },
        "confirm_sacrifice": {
          "text": "I am ready. I was ready from the day I was born. *Starts walking towards the generator* Watchman... Tell the kids in Sector-7... There was an artificial intelligence called Aras. And he learned humanity from people. That's why he died for them.",
          "choices": [
            {
              "nextNode": "decision_ready_good",
              "text": "Launch the shield, Aras. Sector-7 is grateful to you."
            }
          ]
        },
        "ask_nuke": {
          "text": "The nuclear seal triggers the reactor beneath Sector-7. The explosion had a diameter of 5 kilometers. Vera, her army, the fog, and... us. We will all turn to ashes. But the progress of the fog stops here. The rest of the world is saved.",
          "choices": [
            {
              "nextNode": "ask_innocents",
              "text": "This is crazy! What will happen to the innocents in Sector-7?"
            },
            {
              "nextNode": "confirm_nuke",
              "text": "If this is the only way to save the world... Start the protocol."
            }
          ]
        },
        "ask_innocents": {
          "text": "I know... Mina, Elif, children, elderly people... They are all here. But if the fog continues to spread, not only Sector-7 but the entire world will be plunged into that gray silence. Sometimes the sacrifice of a handful of people saves millions.",
          "choices": [
            {
              "nextNode": "ask_shield",
              "text": "No... Tell me about the silver shield option. There must be a better way!"
            },
            {
              "nextNode": "confirm_nuke",
              "text": "..You are right. We have to make this painful decision. Start protocol."
            }
          ]
        },
        "confirm_nuke": {
          "text": "[Places his hand on the nuclear seal] One last breath... Warden, it was an honor to meet you. Humanity will remember this sacrifice. 3... 2... 1...",
          "choices": [
            {
              "nextNode": "decision_ready_hero",
              "text": "For humanity. Start Aras."
            }
          ]
        },
        "ask_surrender": {
          "text": "If we open the doors... Silver Boy comes in. Everyone 'transforms'. You will not feel pain, you will not be afraid. But at the same time... you won't love, you won't laugh, you won't cry. You will stop being human.",
          "choices": [
            {
              "nextNode": "ask_shield",
              "text": "We cannot stop being human. Tell me another way!"
            },
            {
              "nextNode": "confirm_surrender",
              "text": "Perhaps a painless ending... is the most humane one."
            }
          ]
        },
        "confirm_surrender": {
          "text": "Are you sure, guard? Once you open these doors there is no turning back. The Silver Child will embrace everyone, and Sector-7... will be silent forever. The last light of humanity will go out.",
          "choices": [
            {
              "nextNode": "choice_fight",
              "text": "No, I gave up! We will fight!"
            },
            {
              "nextNode": "decision_ready_bad",
              "text": "Open the seals... We surrender."
            }
          ]
        },
        "choice_fight": {
          "text": "You want to fight, but our weapons don't work on silver soldiers, guard! Our only real weapon is the silver shield or the nuclear blast. Romantic heroism is nice, but the laws of physics do not change. Make a choice!",
          "choices": [
            {
              "nextNode": "confirm_sacrifice",
              "text": "Then use the shield. Sacrifice yourself, Aras!"
            },
            {
              "nextNode": "confirm_nuke",
              "text": "Blow the nuclear seal. We will all go together."
            },
            {
              "nextNode": "ask_surrender",
              "text": "...Is there really no choice but to surrender?"
            }
          ]
        },
        "decision_ready_good": {
          "isFinal": true,
          "text": "[The generator starts working, Aras' body starts to glow] The shield is active... Sector-7... is glowing... Farewell, guard. Thank you for living among good people..."
        },
        "decision_ready_hero": {
          "isFinal": true,
          "text": "[The entire screen begins to fill with a white flash] Nuclear seal has been triggered. Sector-7, Vera and the fog... all together... melting into the light... Farewell world."
        },
        "decision_ready_bad": {
          "isFinal": true,
          "text": "[The doors creak open. A cold, silver mist fills in] The Silver Boy walks through the door... He smiles... And everything... slowly... turns gray..."
        }
      },
      "outcomes": {
        "pass": {
          "effect": {
            "safety": 1000,
            "morale": 1000
          },
          "eventFlags": {
            "goodEnding": true
          },
          "text": "Thanks to Aras' sacrifice, the silver shield became active! Vera's army was repulsed, the fog cleared. Sector-7 has survived as the last bastion of humanity! (TRUE VICTORY!)"
        },
        "deny": {
          "effect": {
            "safety": -1000,
            "morale": -1000
          },
          "eventFlags": {
            "silverEnding": true
          },
          "text": "The gates of Sector-7 have been opened. The Silver Boy walked in and everyone started smiling silently... The last bastion of humanity has fallen. The Silver Age has begun."
        },
        "shoot": {
          "effect": {
            "safety": 0,
            "morale": 0
          },
          "eventFlags": {
            "humanEnding": true
          },
          "text": "Sector-7 destroyed itself in a nuclear explosion. Vera, her army and the fog were reduced to ashes. In Sector-7... But humanity will continue to live in other places. An honorable ending."
        }
      }
    }
  ]
};
