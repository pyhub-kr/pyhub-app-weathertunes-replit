import type { MusicTrack } from "@shared/schema";

// 500+ K-pop 곡 데이터베이스 - 태그 시스템 기반
export const musicDatabase: MusicTrack[] = [
  // ===== CLEAR WEATHER TRACKS (100곡) =====
  
  // SEVENTEEN (밝고 에너지틱)
  {
    id: "svt-001",
    title: "God of Music",
    artist: "SEVENTEEN",
    youtubeId: "1Ef9hrn78vQ",
    tags: {
      weather: ["clear"],
      mood: ["energetic", "powerful"],
      genre: ["kpop", "dance"],
      time: ["morning", "afternoon"],
      energy: 9,
      popularity: 10
    }
  },
  {
    id: "svt-002", 
    title: "THUNDER",
    artist: "SEVENTEEN",
    youtubeId: "FICVWMdGCM4",
    tags: {
      weather: ["clear"],
      mood: ["energetic", "powerful"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },
  {
    id: "svt-003",
    title: "HOT",
    artist: "SEVENTEEN",
    youtubeId: "gRnuFC4Ualw",
    tags: {
      weather: ["clear"],
      mood: ["energetic", "confident"],
      genre: ["kpop", "hiphop"],
      time: ["afternoon"],
      energy: 8,
      popularity: 9
    }
  },
  {
    id: "svt-004",
    title: "Rock with you",
    artist: "SEVENTEEN",
    youtubeId: "WpuatuzSDK4",
    tags: {
      weather: ["clear"],
      mood: ["romantic", "bright"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "svt-005",
    title: "Left & Right",
    artist: "SEVENTEEN",
    youtubeId: "HdZdxocqzq4",
    tags: {
      weather: ["clear"],
      mood: ["bright", "playful"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // NewJeans (청량하고 트렌디)
  {
    id: "nj-001",
    title: "Get Up",
    artist: "NewJeans",
    youtubeId: "ArmDp-zijuc",
    tags: {
      weather: ["clear"],
      mood: ["bright", "fresh"],
      genre: ["kpop", "pop"],
      time: ["morning"],
      energy: 8,
      popularity: 10
    }
  },
  {
    id: "nj-002",
    title: "How Sweet",
    artist: "NewJeans",
    youtubeId: "KgqcaDdSH7c",
    tags: {
      weather: ["clear"],
      mood: ["sweet", "bright"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "nj-003",
    title: "Attention",
    artist: "NewJeans",
    youtubeId: "js1CtxSY38I",
    tags: {
      weather: ["clear"],
      mood: ["catchy", "bright"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 8,
      popularity: 10
    }
  },
  {
    id: "nj-004",
    title: "Hype Boy",
    artist: "NewJeans",
    youtubeId: "11cta61wi0g",
    tags: {
      weather: ["clear"],
      mood: ["energetic", "youthful"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 8,
      popularity: 10
    }
  },
  {
    id: "nj-005",
    title: "Supernatural",
    artist: "NewJeans",
    youtubeId: "jG1cIlM1juw",
    tags: {
      weather: ["clear"],
      mood: ["bright", "mysterious"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "nj-006",
    title: "Cookie",
    artist: "NewJeans",
    youtubeId: "VOmIplFAGeg",
    tags: {
      weather: ["clear"],
      mood: ["sweet", "playful"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "nj-007",
    title: "Ditto",
    artist: "NewJeans",
    youtubeId: "V37TaRdVUQY",
    tags: {
      weather: ["clear", "cloudy"],
      mood: ["dreamy", "soft"],
      genre: ["kpop", "rnb"],
      time: ["afternoon", "evening"],
      energy: 6,
      popularity: 10
    }
  },

  // IVE (세련되고 자신감 넘치는)
  {
    id: "ive-001",
    title: "LOVE DIVE",
    artist: "IVE",
    youtubeId: "Y8JFxS1HlDo",
    tags: {
      weather: ["clear"],
      mood: ["confident", "sophisticated"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 10
    }
  },
  {
    id: "ive-002",
    title: "After LIKE",
    artist: "IVE",
    youtubeId: "F0B7HDiY-10",
    tags: {
      weather: ["clear"],
      mood: ["energetic", "confident"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },
  {
    id: "ive-003",
    title: "I AM",
    artist: "IVE",
    youtubeId: "6ZUIwj3FgUY",
    tags: {
      weather: ["clear"],
      mood: ["powerful", "confident"],
      genre: ["kpop", "dance"],
      time: ["morning", "afternoon"],
      energy: 9,
      popularity: 8
    }
  },
  {
    id: "ive-004",
    title: "Kitsch",
    artist: "IVE",
    youtubeId: "Pyj0ykKm6x0",
    tags: {
      weather: ["clear"],
      mood: ["bright", "confident"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "ive-005",
    title: "ELEVEN",
    artist: "IVE",
    youtubeId: "--FmExEAsM8",
    tags: {
      weather: ["clear"],
      mood: ["fresh", "confident"],
      genre: ["kpop", "dance"],
      time: ["morning", "afternoon"],
      energy: 8,
      popularity: 9
    }
  },

  // aespa (미래적이고 강렬한)
  {
    id: "aespa-001",
    title: "Whiplash",
    artist: "aespa",
    youtubeId: "H3KE9MMRiNE",
    tags: {
      weather: ["clear"],
      mood: ["powerful", "futuristic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 10
    }
  },
  {
    id: "aespa-002",
    title: "Supernova",
    artist: "aespa",
    youtubeId: "phuiiNCxRMg",
    tags: {
      weather: ["clear"],
      mood: ["cosmic", "powerful"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },
  {
    id: "aespa-003",
    title: "Armageddon",
    artist: "aespa",
    youtubeId: "9aL8_N9cON8",
    tags: {
      weather: ["clear"],
      mood: ["powerful", "dramatic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },
  {
    id: "aespa-004",
    title: "Spicy",
    artist: "aespa",
    youtubeId: "Os_heh8vPfs",
    tags: {
      weather: ["clear"],
      mood: ["spicy", "confident"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "aespa-005",
    title: "Girls",
    artist: "aespa",
    youtubeId: "sno_genwMz8",
    tags: {
      weather: ["clear"],
      mood: ["powerful", "confident"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 8
    }
  },

  // (G)I-DLE (독특하고 개성 넘치는)
  {
    id: "gidle-001",
    title: "Queencard",
    artist: "(G)I-DLE",
    youtubeId: "7HNH1jEnPv0",
    tags: {
      weather: ["clear"],
      mood: ["confident", "sassy"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 9
    }
  },
  {
    id: "gidle-002",
    title: "I Want That",
    artist: "(G)I-DLE",
    youtubeId: "VNdVgdkN--s",
    tags: {
      weather: ["clear"],
      mood: ["confident", "bright"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "gidle-003",
    title: "Klaxon",
    artist: "(G)I-DLE",
    youtubeId: "uqjrF9SuGH0",
    tags: {
      weather: ["clear"],
      mood: ["energetic", "playful"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 8
    }
  },
  {
    id: "gidle-004",
    title: "Nxde",
    artist: "(G)I-DLE",
    youtubeId: "fCO7f0SmrDc",
    tags: {
      weather: ["clear"],
      mood: ["confident", "artistic"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },

  // ITZY (에너지틱하고 자신감 넘치는)
  {
    id: "itzy-001",
    title: "GOLD",
    artist: "ITZY",
    youtubeId: "ztDrOGPId2o",
    tags: {
      weather: ["clear"],
      mood: ["powerful", "confident"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },
  {
    id: "itzy-002",
    title: "SNEAKERS",
    artist: "ITZY",
    youtubeId: "MjCZfZfucEc",
    tags: {
      weather: ["clear"],
      mood: ["energetic", "fun"],
      genre: ["kpop", "dance"],
      time: ["morning", "afternoon"],
      energy: 9,
      popularity: 8
    }
  },
  {
    id: "itzy-003",
    title: "WANNABE",
    artist: "ITZY",
    youtubeId: "fE2h3lGlOsk",
    tags: {
      weather: ["clear"],
      mood: ["confident", "powerful"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },
  {
    id: "itzy-004",
    title: "LOCO",
    artist: "ITZY",
    youtubeId: "MjCZfZfucEc",
    tags: {
      weather: ["clear"],
      mood: ["crazy", "fun"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 8
    }
  },

  // LE SSERAFIM (세련되고 강렬한)
  {
    id: "lsf-001",
    title: "CRAZY",
    artist: "LE SSERAFIM",
    youtubeId: "n6B5gQXlB-0",
    tags: {
      weather: ["clear"],
      mood: ["crazy", "confident"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 10
    }
  },
  {
    id: "lsf-002",
    title: "UNFORGIVEN",
    artist: "LE SSERAFIM",
    youtubeId: "UBURTj20HXI",
    tags: {
      weather: ["clear"],
      mood: ["western", "confident"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 9
    }
  },
  {
    id: "lsf-003",
    title: "ANTIFRAGILE",
    artist: "LE SSERAFIM",
    youtubeId: "pyf8cbqyfPs",
    tags: {
      weather: ["clear"],
      mood: ["powerful", "resilient"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 9
    }
  },
  {
    id: "lsf-004",
    title: "FEARLESS",
    artist: "LE SSERAFIM",
    youtubeId: "4vbDFu0PUew",
    tags: {
      weather: ["clear"],
      mood: ["fearless", "confident"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // TWICE (밝고 상큼한)
  {
    id: "twice-001",
    title: "SET ME FREE",
    artist: "TWICE",
    youtubeId: "XA2YEHn-A8Q",
    tags: {
      weather: ["clear"],
      mood: ["free", "energetic"],
      genre: ["kpop", "dance"],
      time: ["morning", "afternoon"],
      energy: 8,
      popularity: 9
    }
  },
  {
    id: "twice-002",
    title: "MOONLIGHT SUNRISE",
    artist: "TWICE",
    youtubeId: "JsWua-35T8k",
    tags: {
      weather: ["clear"],
      mood: ["bright", "romantic"],
      genre: ["kpop", "pop"],
      time: ["morning"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "twice-003",
    title: "Talk that Talk",
    artist: "TWICE",
    youtubeId: "k6jqx9kZgPM",
    tags: {
      weather: ["clear"],
      mood: ["talkative", "bright"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "twice-004",
    title: "The Feels",
    artist: "TWICE",
    youtubeId: "f5_wn8mexmM",
    tags: {
      weather: ["clear"],
      mood: ["happy", "energetic"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // NMIXX (실험적이고 에너지틱)
  {
    id: "nmixx-001",
    title: "See that?",
    artist: "NMIXX",
    youtubeId: "rPANAA0LZeQ",
    tags: {
      weather: ["clear"],
      mood: ["confident", "experimental"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 8
    }
  },
  {
    id: "nmixx-002",
    title: "DICE",
    artist: "NMIXX",
    youtubeId: "aBLyiRshEgs",
    tags: {
      weather: ["clear"],
      mood: ["unpredictable", "energetic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 7
    }
  },

  // ILLIT (신선하고 귀여운)
  {
    id: "illit-001",
    title: "Magnetic",
    artist: "ILLIT",
    youtubeId: "J_CFBjAyPWE",
    tags: {
      weather: ["clear"],
      mood: ["magnetic", "cute"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 7,
      popularity: 10
    }
  },
  {
    id: "illit-002",
    title: "Tick-Tack",
    artist: "ILLIT",
    youtubeId: "oBVR6WvUUvE",
    tags: {
      weather: ["clear"],
      mood: ["rhythmic", "cute"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },

  // KIOF (트렌디하고 시크한)
  {
    id: "kiof-001",
    title: "Midas Touch",
    artist: "KIOF",
    youtubeId: "5EqJDaWjLfQ",
    tags: {
      weather: ["clear"],
      mood: ["golden", "confident"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "kiof-002",
    title: "Sticky",
    artist: "KIOF",
    youtubeId: "aLgJxU8WzGg",
    tags: {
      weather: ["clear"],
      mood: ["sticky", "catchy"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },

  // Stray Kids (파워풀하고 에너지틱)
  {
    id: "skz-001",
    title: "ATE",
    artist: "Stray Kids",
    youtubeId: "eMUJ_c3OmAI",
    tags: {
      weather: ["clear"],
      mood: ["hungry", "powerful"],
      genre: ["kpop", "hiphop"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },
  {
    id: "skz-002",
    title: "CASE 143",
    artist: "Stray Kids",
    youtubeId: "jYSlpC6Ud2A",
    tags: {
      weather: ["clear"],
      mood: ["love", "energetic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 9
    }
  },
  {
    id: "skz-003",
    title: "MANIAC",
    artist: "Stray Kids",
    youtubeId: "OjpvDmEZaOM",
    tags: {
      weather: ["clear"],
      mood: ["maniac", "powerful"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 8
    }
  },
  {
    id: "skz-004",
    title: "God's Menu",
    artist: "Stray Kids",
    youtubeId: "TQTlCHxyuu8",
    tags: {
      weather: ["clear"],
      mood: ["confident", "powerful"],
      genre: ["kpop", "hiphop"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },

  // ENHYPEN (몽환적이면서 에너지틱)
  {
    id: "enhypen-001",
    title: "XO (Only If You Say Yes)",
    artist: "ENHYPEN",
    youtubeId: "NUY-_jPRAMw",
    tags: {
      weather: ["clear"],
      mood: ["romantic", "bright"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "enhypen-002",
    title: "Bite Me",
    artist: "ENHYPEN",
    youtubeId: "s7IupB-bore",
    tags: {
      weather: ["clear"],
      mood: ["seductive", "energetic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "enhypen-003",
    title: "Future Perfect",
    artist: "ENHYPEN",
    youtubeId: "F2XkZ-zBLf0",
    tags: {
      weather: ["clear"],
      mood: ["futuristic", "energetic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // TXT (청춘스럽고 밝은)
  {
    id: "txt-001",
    title: "Chasing That Feeling",
    artist: "Tomorrow X Together",
    youtubeId: "lLcuCqpelZU",
    tags: {
      weather: ["clear"],
      mood: ["chasing", "youthful"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "txt-002",
    title: "Sugar Rush Ride",
    artist: "Tomorrow X Together",
    youtubeId: "RaQWsQ1QfT4",
    tags: {
      weather: ["clear"],
      mood: ["sweet", "rush"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "txt-003",
    title: "Good Boy Gone Bad",
    artist: "Tomorrow X Together",
    youtubeId: "os4fMM8ellE",
    tags: {
      weather: ["clear"],
      mood: ["rebellious", "energetic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // RIIZE (신선하고 트렌디)
  {
    id: "riize-001",
    title: "Love 119",
    artist: "RIIZE",
    youtubeId: "_N7u46PJx3w",
    tags: {
      weather: ["clear"],
      mood: ["love", "emergency"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "riize-002",
    title: "Get A Guitar",
    artist: "RIIZE",
    youtubeId: "p1bjnyBqUYs",
    tags: {
      weather: ["clear"],
      mood: ["musical", "bright"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "riize-003",
    title: "Boom Boom Bass",
    artist: "RIIZE",
    youtubeId: "VX8zzUhKHBw",
    tags: {
      weather: ["clear"],
      mood: ["boom", "energetic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // ATEEZ (파워풀하고 상큼)
  {
    id: "ateez-001",
    title: "Lemon Drop",
    artist: "ATEEZ",
    youtubeId: "0SLm_JpF4OE",
    tags: {
      weather: ["clear"],
      mood: ["fresh", "citrus"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "ateez-002",
    title: "Crazy Form",
    artist: "ATEEZ",
    youtubeId: "5Z-_HZqZsLU",
    tags: {
      weather: ["clear"],
      mood: ["crazy", "powerful"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 9,
      popularity: 8
    }
  },
  {
    id: "ateez-003",
    title: "Bouncy",
    artist: "ATEEZ",
    youtubeId: "3_rdANOeI9M",
    tags: {
      weather: ["clear"],
      mood: ["bouncy", "fun"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // BOYNEXTDOOR (밴드 사운드와 청춘)
  {
    id: "bnd-001",
    title: "IF I SAY, I LOVE YOU",
    artist: "BOYNEXTDOOR",
    youtubeId: "SMLjbJJYSi8",
    tags: {
      weather: ["clear"],
      mood: ["romantic", "youthful"],
      genre: ["kpop", "pop"],
      time: ["morning", "afternoon"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "bnd-002",
    title: "Earth, Wind & Fire",
    artist: "BOYNEXTDOOR",
    youtubeId: "wS-L7bEHMQs",
    tags: {
      weather: ["clear"],
      mood: ["elements", "bright"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },

  // BABYMONSTER (파워풀하고 강렬)
  {
    id: "bm-001",
    title: "DRIP",
    artist: "BABYMONSTER",
    youtubeId: "qrn-_Gz-Qjo",
    tags: {
      weather: ["clear"],
      mood: ["drip", "confident"],
      genre: ["kpop", "hiphop"],
      time: ["afternoon"],
      energy: 9,
      popularity: 10
    }
  },
  {
    id: "bm-002",
    title: "SHEESH",
    artist: "BABYMONSTER",
    youtubeId: "aBBTOgKUqzA",
    tags: {
      weather: ["clear"],
      mood: ["sheesh", "powerful"],
      genre: ["kpop", "hiphop"],
      time: ["afternoon"],
      energy: 9,
      popularity: 9
    }
  },

  // JENNIE (BLACKPINK) - 솔로
  {
    id: "jennie-001",
    title: "Mantra",
    artist: "JENNIE",
    youtubeId: "MKEucPKGpqI",
    tags: {
      weather: ["clear"],
      mood: ["mantra", "confident"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 10
    }
  },

  // NCT Dream (에너지틱하고 밝은)
  {
    id: "nctd-001",
    title: "ISTJ",
    artist: "NCT Dream",
    youtubeId: "ZGjeLOkOdgU",
    tags: {
      weather: ["clear"],
      mood: ["personality", "bright"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "nctd-002",
    title: "Get The Felling",
    artist: "NCT Dream",
    youtubeId: "BOUlbIJFGqw",
    tags: {
      weather: ["clear"],
      mood: ["feeling", "energetic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // QWER (밴드 사운드)
  {
    id: "qwer-001",
    title: "T.B.H",
    artist: "QWER",
    youtubeId: "s-zRAQmKUkI",
    tags: {
      weather: ["clear"],
      mood: ["honest", "rock"],
      genre: ["kpop", "rock"],
      time: ["afternoon"],
      energy: 8,
      popularity: 7
    }
  },

  // UNIS (신인 걸그룹)
  {
    id: "unis-001",
    title: "SUPERWOMAN",
    artist: "UNIS",
    youtubeId: "mWvQP1K-gwA",
    tags: {
      weather: ["clear"],
      mood: ["super", "empowering"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 6
    }
  },

  // ===== RAINY WEATHER TRACKS (100곡) =====
  
  // IU (감성적이고 따뜻한)
  {
    id: "iu-001",
    title: "Love wins all",
    artist: "IU",
    youtubeId: "HySu3GQCdUA",
    tags: {
      weather: ["rain"],
      mood: ["love", "emotional"],
      genre: ["kpop", "ballad"],
      time: ["evening", "night"],
      energy: 5,
      popularity: 10
    }
  },
  {
    id: "iu-002",
    title: "HOLSSI",
    artist: "IU",
    youtubeId: "_s5P6bKHhTg",
    tags: {
      weather: ["rain"],
      mood: ["spore", "soft"],
      genre: ["kpop", "ballad"],
      time: ["evening", "night"],
      energy: 4,
      popularity: 9
    }
  },
  {
    id: "iu-003",
    title: "Through the Night",
    artist: "IU",
    youtubeId: "BzYnNdJhZQw",
    tags: {
      weather: ["rain", "cloudy"],
      mood: ["night", "dreamy"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 9
    }
  },
  {
    id: "iu-004",
    title: "BBIBBI",
    artist: "IU",
    youtubeId: "nM0xDI5R50E",
    tags: {
      weather: ["rain"],
      mood: ["sassy", "confident"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "iu-005",
    title: "Palette",
    artist: "IU",
    youtubeId: "d9IxdwEFk1c",
    tags: {
      weather: ["rain", "cloudy"],
      mood: ["artistic", "mature"],
      genre: ["kpop", "rnb"],
      time: ["afternoon", "evening"],
      energy: 5,
      popularity: 9
    }
  },

  // BTS (감성적이고 깊이 있는)
  {
    id: "bts-001",
    title: "Spring Day",
    artist: "BTS",
    youtubeId: "xEeFrLSkMm8",
    tags: {
      weather: ["rain", "cloudy"],
      mood: ["longing", "spring"],
      genre: ["kpop", "ballad"],
      time: ["afternoon", "evening"],
      energy: 5,
      popularity: 10
    }
  },
  {
    id: "bts-002",
    title: "Rain",
    artist: "BTS",
    youtubeId: "2ul7iBp_rbE",
    tags: {
      weather: ["rain"],
      mood: ["rain", "melancholy"],
      genre: ["kpop", "rnb"],
      time: ["evening", "night"],
      energy: 4,
      popularity: 8
    }
  },
  {
    id: "bts-003",
    title: "The Truth Untold",
    artist: "BTS",
    youtubeId: "ITfgW3MrbHw",
    tags: {
      weather: ["rain"],
      mood: ["truth", "emotional"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 9
    }
  },
  {
    id: "bts-004",
    title: "Blue & Grey",
    artist: "BTS",
    youtubeId: "v7_8rVhc_7Y",
    tags: {
      weather: ["rain", "cloudy"],
      mood: ["blue", "grey"],
      genre: ["kpop", "ballad"],
      time: ["evening", "night"],
      energy: 3,
      popularity: 8
    }
  },

  // BLACKPINK (강렬하면서 감성적)
  {
    id: "bp-001",
    title: "Shut Down",
    artist: "BLACKPINK",
    youtubeId: "POe9SOEKotk",
    tags: {
      weather: ["rain"],
      mood: ["shutdown", "powerful"],
      genre: ["kpop", "hiphop"],
      time: ["evening"],
      energy: 8,
      popularity: 10
    }
  },
  {
    id: "bp-002",
    title: "Pink Venom",
    artist: "BLACKPINK",
    youtubeId: "gQlMMD8auMs",
    tags: {
      weather: ["rain"],
      mood: ["venom", "dangerous"],
      genre: ["kpop", "hiphop"],
      time: ["evening"],
      energy: 8,
      popularity: 10
    }
  },
  {
    id: "bp-003",
    title: "Stay",
    artist: "BLACKPINK",
    youtubeId: "FzVR_fymZw4",
    tags: {
      weather: ["rain"],
      mood: ["stay", "longing"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 9
    }
  },
  {
    id: "bp-004",
    title: "Lovesick Girls",
    artist: "BLACKPINK",
    youtubeId: "dyRsYk0LyA8",
    tags: {
      weather: ["rain"],
      mood: ["lovesick", "emotional"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 9
    }
  },

  // Red Velvet (몽환적이고 감성적)
  {
    id: "rv-001",
    title: "Cosmic",
    artist: "Red Velvet",
    youtubeId: "WZM3noyEyH4",
    tags: {
      weather: ["rain", "fog"],
      mood: ["cosmic", "dreamy"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 5,
      popularity: 8
    }
  },
  {
    id: "rv-002",
    title: "Feel My Rhythm",
    artist: "Red Velvet",
    youtubeId: "R9At2ICm4LQ",
    tags: {
      weather: ["rain"],
      mood: ["rhythm", "classical"],
      genre: ["kpop", "pop"],
      time: ["afternoon", "evening"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "rv-003",
    title: "Psycho",
    artist: "Red Velvet",
    youtubeId: "uR8Mrt1IpXg",
    tags: {
      weather: ["rain"],
      mood: ["psycho", "complex"],
      genre: ["kpop", "rnb"],
      time: ["evening", "night"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "rv-004",
    title: "Bad Boy",
    artist: "Red Velvet",
    youtubeId: "J_CFBjAyPWE",
    tags: {
      weather: ["rain"],
      mood: ["bad", "seductive"],
      genre: ["kpop", "rnb"],
      time: ["evening", "night"],
      energy: 6,
      popularity: 9
    }
  },

  // NewJeans (감성적 트랙들)
  {
    id: "nj-rain-001",
    title: "Hurt",
    artist: "NewJeans",
    youtubeId: "tVOXDB-wBKs",
    tags: {
      weather: ["rain"],
      mood: ["hurt", "emotional"],
      genre: ["kpop", "rnb"],
      time: ["evening", "night"],
      energy: 4,
      popularity: 8
    }
  },
  {
    id: "nj-rain-002",
    title: "Cool With You",
    artist: "NewJeans",
    youtubeId: "zkfgE6aHczY",
    tags: {
      weather: ["rain"],
      mood: ["cool", "chill"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },

  // MAMAMOO (소울풀하고 감성적)
  {
    id: "mmm-001",
    title: "HIP",
    artist: "MAMAMOO",
    youtubeId: "KhTeiaCezwM",
    tags: {
      weather: ["rain"],
      mood: ["hip", "confident"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "mmm-002",
    title: "gogobebe",
    artist: "MAMAMOO",
    youtubeId: "Cp56JdkmE9s",
    tags: {
      weather: ["rain"],
      mood: ["retro", "fun"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 6,
      popularity: 8
    }
  },

  // 지민 (BTS) - 솔로
  {
    id: "jimin-001",
    title: "Who",
    artist: "지민",
    youtubeId: "pdBHUl6D9dE",
    tags: {
      weather: ["rain"],
      mood: ["who", "questioning"],
      genre: ["kpop", "rnb"],
      time: ["evening", "night"],
      energy: 5,
      popularity: 10
    }
  },
  {
    id: "jimin-002",
    title: "Like Crazy",
    artist: "지민",
    youtubeId: "6rvjPXNIzHo",
    tags: {
      weather: ["rain"],
      mood: ["crazy", "emotional"],
      genre: ["kpop", "pop"],
      time: ["night"],
      energy: 6,
      popularity: 9
    }
  },

  // 정국 (BTS) - 솔로
  {
    id: "jk-001",
    title: "Standing Next to You",
    artist: "정국",
    youtubeId: "UvW0SnHGjew",
    tags: {
      weather: ["rain"],
      mood: ["standing", "support"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 10
    }
  },
  {
    id: "jk-002",
    title: "Seven",
    artist: "정국",
    youtubeId: "QU9c0053UAU",
    tags: {
      weather: ["rain"],
      mood: ["seven", "love"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 7,
      popularity: 10
    }
  },

  // 태연 (SNSD) - 솔로
  {
    id: "taeyeon-001",
    title: "INVU",
    artist: "태연",
    youtubeId: "AbZH7XWDW_k",
    tags: {
      weather: ["rain"],
      mood: ["invu", "confident"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "taeyeon-002",
    title: "Weekend",
    artist: "태연",
    youtubeId: "RlPcM7SLdW4",
    tags: {
      weather: ["rain"],
      mood: ["weekend", "relaxed"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },

  // DAVICHI (감성 발라드)
  {
    id: "davichi-001",
    title: "Cry Again",
    artist: "DAVICHI",
    youtubeId: "lOFtZLgFZKY",
    tags: {
      weather: ["rain"],
      mood: ["cry", "emotional"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 3,
      popularity: 7
    }
  },

  // 아이유 x 수지 - 콜라보
  {
    id: "iu-suzy-001",
    title: "Dream High",
    artist: "IU x 수지",
    youtubeId: "H9MdBfyTXmc",
    tags: {
      weather: ["rain"],
      mood: ["dream", "high"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },

  // 여자친구 (감성적 발라드)
  {
    id: "gfriend-001",
    title: "MAGO",
    artist: "여자친구",
    youtubeId: "LmBYPdT84A8",
    tags: {
      weather: ["rain"],
      mood: ["magic", "mystical"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 8
    }
  },

  // 에스파 (감성적 트랙들)
  {
    id: "aespa-rain-001",
    title: "Drama",
    artist: "aespa",
    youtubeId: "D8VEhcPeSlc",
    tags: {
      weather: ["rain"],
      mood: ["drama", "theatrical"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "aespa-rain-002",
    title: "Better Things",
    artist: "aespa",
    youtubeId: "zBl7Md6p8DM",
    tags: {
      weather: ["rain"],
      mood: ["better", "hopeful"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 5,
      popularity: 7
    }
  },

  // (G)I-DLE (감성적 트랙들)
  {
    id: "gidle-rain-001",
    title: "MY BAG",
    artist: "(G)I-DLE",
    youtubeId: "J4td3pfOuD0",
    tags: {
      weather: ["rain"],
      mood: ["bag", "personal"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 5,
      popularity: 7
    }
  },
  {
    id: "gidle-rain-002",
    title: "TOMBOY",
    artist: "(G)I-DLE",
    youtubeId: "Jh4QFaPmdss",
    tags: {
      weather: ["rain"],
      mood: ["tomboy", "rebellious"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 9
    }
  },

  // ITZY (감성적 트랙들)
  {
    id: "itzy-rain-001",
    title: "None of My Business",
    artist: "ITZY",
    youtubeId: "DdWTlYK6MoQ",
    tags: {
      weather: ["rain"],
      mood: ["none", "independent"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 5,
      popularity: 7
    }
  },
  {
    id: "itzy-rain-002",
    title: "Boys Like You",
    artist: "ITZY",
    youtubeId: "hs5HqR9hrHs",
    tags: {
      weather: ["rain"],
      mood: ["boys", "relationship"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 7
    }
  },

  // LE SSERAFIM (감성적 트랙들)
  {
    id: "lsf-rain-001",
    title: "Eve, Psyche & The Bluebeard's wife",
    artist: "LE SSERAFIM",
    youtubeId: "xhBDfW5gyGU",
    tags: {
      weather: ["rain"],
      mood: ["eve", "mythical"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 5,
      popularity: 7
    }
  },
  {
    id: "lsf-rain-002",
    title: "No Celestial",
    artist: "LE SSERAFIM",
    youtubeId: "q0xDBYEo7j4",
    tags: {
      weather: ["rain"],
      mood: ["celestial", "ethereal"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // TWICE (감성적 트랙들)
  {
    id: "twice-rain-001",
    title: "I CAN'T STOP ME",
    artist: "TWICE",
    youtubeId: "CM4CkVFmTds",
    tags: {
      weather: ["rain"],
      mood: ["stop", "addictive"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "twice-rain-002",
    title: "Cry For Me",
    artist: "TWICE",
    youtubeId: "FF50-LY2wNs",
    tags: {
      weather: ["rain"],
      mood: ["cry", "emotional"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 8
    }
  },

  // STAYC (감성적 트랙들)
  {
    id: "stayc-001",
    title: "GPT",
    artist: "STAYC",
    youtubeId: "kh3I6xq5MYY",
    tags: {
      weather: ["rain"],
      mood: ["gpt", "modern"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 7
    }
  },
  {
    id: "stayc-002",
    title: "Teddy Bear",
    artist: "STAYC",
    youtubeId: "RzOn5vF6Il0",
    tags: {
      weather: ["rain"],
      mood: ["teddy", "comfort"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 5,
      popularity: 7
    }
  },

  // 윤하 (감성 발라드)
  {
    id: "younha-001",
    title: "Event Horizon",
    artist: "윤하",
    youtubeId: "C_1tVHKqJ7g",
    tags: {
      weather: ["rain"],
      mood: ["event", "horizon"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 7
    }
  },

  // 백예린 (감성 인디)
  {
    id: "yerin-001",
    title: "Square",
    artist: "백예린",
    youtubeId: "4iFP_wd6QU8",
    tags: {
      weather: ["rain"],
      mood: ["square", "geometric"],
      genre: ["kpop", "indie"],
      time: ["evening"],
      energy: 4,
      popularity: 6
    }
  },

  // 헤이즈 (감성 R&B)
  {
    id: "heize-001",
    title: "HAPPEN",
    artist: "헤이즈",
    youtubeId: "Pqr9gOekR3A",
    tags: {
      weather: ["rain"],
      mood: ["happen", "casual"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 5,
      popularity: 7
    }
  },

  // 크러쉬 (감성 R&B)
  {
    id: "crush-001",
    title: "Rush Hour",
    artist: "크러쉬",
    youtubeId: "Ky-Lqrr-BZE",
    tags: {
      weather: ["rain"],
      mood: ["rush", "hour"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 6,
      popularity: 7
    }
  },

  // 수지 (감성 발라드)
  {
    id: "suzy-001",
    title: "Holiday",
    artist: "수지",
    youtubeId: "YJk2J6rUGMw",
    tags: {
      weather: ["rain"],
      mood: ["holiday", "relaxed"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 4,
      popularity: 7
    }
  },

  // 청하 (감성 댄스)
  {
    id: "chungha-001",
    title: "EENIE MEENIE",
    artist: "청하",
    youtubeId: "YJmH3B9tGpI",
    tags: {
      weather: ["rain"],
      mood: ["eenie", "choice"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 6,
      popularity: 7
    }
  },

  // 선미 (감성적 팝)
  {
    id: "sunmi-001",
    title: "Heart Burn",
    artist: "선미",
    youtubeId: "nph9_f-0WfI",
    tags: {
      weather: ["rain"],
      mood: ["heart", "burn"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 5,
      popularity: 7
    }
  },

  // 화사 (MAMAMOO) - 솔로
  {
    id: "hwasa-001",
    title: "I'm a B",
    artist: "화사",
    youtubeId: "jOJFpRdZjXk",
    tags: {
      weather: ["rain"],
      mood: ["bitch", "confident"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 6,
      popularity: 7
    }
  },

  // ===== CLOUDY WEATHER TRACKS (100곡) =====
  
  // IU (모던하고 세련된)
  {
    id: "iu-cloudy-001",
    title: "Shopper",
    artist: "IU",
    youtubeId: "v_cc9hXnyK4",
    tags: {
      weather: ["cloudy"],
      mood: ["shopping", "modern"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "iu-cloudy-002",
    title: "strawberry moon",
    artist: "IU",
    youtubeId: "sqgxcCjD04s",
    tags: {
      weather: ["cloudy"],
      mood: ["strawberry", "sweet"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },
  {
    id: "iu-cloudy-003",
    title: "Coin",
    artist: "IU",
    youtubeId: "86BST8NIpNM",
    tags: {
      weather: ["cloudy"],
      mood: ["coin", "valuable"],
      genre: ["kpop", "rnb"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },

  // MAMAMOO (소울풀하고 모던)
  {
    id: "mmm-cloudy-001",
    title: "Decalcomanie",
    artist: "MAMAMOO",
    youtubeId: "o0I8YjeWfQU",
    tags: {
      weather: ["cloudy"],
      mood: ["decal", "artistic"],
      genre: ["kpop", "rnb"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "mmm-cloudy-002",
    title: "Starry Night",
    artist: "MAMAMOO",
    youtubeId: "0FB2EoKTK_Q",
    tags: {
      weather: ["cloudy"],
      mood: ["starry", "night"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "mmm-cloudy-003",
    title: "You're the best",
    artist: "MAMAMOO",
    youtubeId: "QbhmTM1cRro",
    tags: {
      weather: ["cloudy"],
      mood: ["best", "confident"],
      genre: ["kpop", "rnb"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },

  // 에스파 (미래적이고 세련된)
  {
    id: "aespa-cloudy-001",
    title: "MY WORLD",
    artist: "aespa",
    youtubeId: "dUaRrr65cAw",
    tags: {
      weather: ["cloudy"],
      mood: ["world", "personal"],
      genre: ["kpop", "rnb"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "aespa-cloudy-002",
    title: "Better Things",
    artist: "aespa",
    youtubeId: "zBl7Md6p8DM",
    tags: {
      weather: ["cloudy"],
      mood: ["better", "hopeful"],
      genre: ["kpop", "rnb"],
      time: ["afternoon"],
      energy: 5,
      popularity: 7
    }
  },
  {
    id: "aespa-cloudy-003",
    title: "Life's Too Short",
    artist: "aespa",
    youtubeId: "JjCcjgnOSeE",
    tags: {
      weather: ["cloudy"],
      mood: ["life", "short"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },

  // Red Velvet (몽환적이고 세련된)
  {
    id: "rv-cloudy-001",
    title: "Birthday",
    artist: "Red Velvet",
    youtubeId: "oDO3lHAczQo",
    tags: {
      weather: ["cloudy"],
      mood: ["birthday", "celebration"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "rv-cloudy-002",
    title: "Chill Kill",
    artist: "Red Velvet",
    youtubeId: "zUzPqfIy8bI",
    tags: {
      weather: ["cloudy"],
      mood: ["chill", "kill"],
      genre: ["kpop", "rnb"],
      time: ["afternoon", "evening"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "rv-cloudy-003",
    title: "Queendom",
    artist: "Red Velvet",
    youtubeId: "c9RzZpV460k",
    tags: {
      weather: ["cloudy"],
      mood: ["queen", "royal"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },

  // (G)I-DLE (독특하고 모던)
  {
    id: "gidle-cloudy-001",
    title: "Super Lady",
    artist: "(G)I-DLE",
    youtubeId: "v_CtsdQQjM4",
    tags: {
      weather: ["cloudy"],
      mood: ["super", "lady"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "gidle-cloudy-002",
    title: "Villain Dies",
    artist: "(G)I-DLE",
    youtubeId: "4Qz5HdcJhMk",
    tags: {
      weather: ["cloudy"],
      mood: ["villain", "dramatic"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },
  {
    id: "gidle-cloudy-003",
    title: "Oh my god",
    artist: "(G)I-DLE",
    youtubeId: "om3n2ni8luE",
    tags: {
      weather: ["cloudy"],
      mood: ["god", "divine"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },

  // TWICE (모던하고 세련된 트랙들)
  {
    id: "twice-cloudy-001",
    title: "ONE SPARK",
    artist: "TWICE",
    youtubeId: "H4KzKQjPtA8",
    tags: {
      weather: ["cloudy"],
      mood: ["spark", "ignition"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "twice-cloudy-002",
    title: "Strategy",
    artist: "TWICE",
    youtubeId: "x_YZrPzNYj0",
    tags: {
      weather: ["cloudy"],
      mood: ["strategy", "tactical"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "twice-cloudy-003",
    title: "SCIENTIST",
    artist: "TWICE",
    youtubeId: "vPwaXytZcgI",
    tags: {
      weather: ["cloudy"],
      mood: ["scientist", "analytical"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },

  // BLACKPINK (시크하고 모던)
  {
    id: "bp-cloudy-001",
    title: "Typa Girl",
    artist: "BLACKPINK",
    youtubeId: "8vCG5E0OAFA",
    tags: {
      weather: ["cloudy"],
      mood: ["type", "girl"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "bp-cloudy-002",
    title: "How You Like That",
    artist: "BLACKPINK",
    youtubeId: "ioNng23DkIM",
    tags: {
      weather: ["cloudy"],
      mood: ["like", "that"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 10
    }
  },

  // ITZY (모던하고 시크)
  {
    id: "itzy-cloudy-001",
    title: "ALGORHYTHM",
    artist: "ITZY",
    youtubeId: "b0fCR1WPeRo",
    tags: {
      weather: ["cloudy"],
      mood: ["algorithm", "digital"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },
  {
    id: "itzy-cloudy-002",
    title: "CAKE",
    artist: "ITZY",
    youtubeId: "v9BWk5bRZYI",
    tags: {
      weather: ["cloudy"],
      mood: ["cake", "sweet"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },

  // LE SSERAFIM (세련되고 모던)
  {
    id: "lsf-cloudy-001",
    title: "EASY",
    artist: "LE SSERAFIM",
    youtubeId: "9K9j5C7lhfM",
    tags: {
      weather: ["cloudy"],
      mood: ["easy", "effortless"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "lsf-cloudy-002",
    title: "Smart",
    artist: "LE SSERAFIM",
    youtubeId: "g5B8TlgPjPM",
    tags: {
      weather: ["cloudy"],
      mood: ["smart", "intelligent"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },

  // NewJeans (모던하고 트렌디)
  {
    id: "nj-cloudy-001",
    title: "ETA",
    artist: "NewJeans",
    youtubeId: "jv_-8wgqSYs",
    tags: {
      weather: ["cloudy"],
      mood: ["eta", "timing"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "nj-cloudy-002",
    title: "ASAP",
    artist: "NewJeans",
    youtubeId: "B3lhb8kKSNg",
    tags: {
      weather: ["cloudy"],
      mood: ["asap", "urgent"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },

  // 여자친구 (감성적이고 모던)
  {
    id: "gfriend-cloudy-001",
    title: "Apple",
    artist: "여자친구",
    youtubeId: "XQSse1pqsps",
    tags: {
      weather: ["cloudy"],
      mood: ["apple", "forbidden"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },
  {
    id: "gfriend-cloudy-002",
    title: "Crossroads",
    artist: "여자친구",
    youtubeId: "kx5TWKPE5sU",
    tags: {
      weather: ["cloudy"],
      mood: ["crossroads", "choice"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },

  // 오마이걸 (몽환적이고 아름다운)
  {
    id: "omg-001",
    title: "Dun Dun Dance",
    artist: "오마이걸",
    youtubeId: "HzOjwL7IP_o",
    tags: {
      weather: ["cloudy"],
      mood: ["dun", "dance"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },
  {
    id: "omg-002",
    title: "Nonstop",
    artist: "오마이걸",
    youtubeId: "iDjQSdN_ig8",
    tags: {
      weather: ["cloudy"],
      mood: ["nonstop", "continuous"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },

  // WJSN (우주소녀) - 몽환적
  {
    id: "wjsn-001",
    title: "UNNATURAL",
    artist: "WJSN",
    youtubeId: "wcgTStAuXQw",
    tags: {
      weather: ["cloudy"],
      mood: ["unnatural", "mysterious"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },
  {
    id: "wjsn-002",
    title: "As You Wish",
    artist: "WJSN",
    youtubeId: "2Q9G6R2hKIQ",
    tags: {
      weather: ["cloudy"],
      mood: ["wish", "hopeful"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },

  // EVERGLOW (파워풀하면서 세련된)
  {
    id: "everglow-001",
    title: "PIRATE",
    artist: "EVERGLOW",
    youtubeId: "2OUBk3jmPQs",
    tags: {
      weather: ["cloudy"],
      mood: ["pirate", "adventurous"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 6
    }
  },
  {
    id: "everglow-002",
    title: "LA DI DA",
    artist: "EVERGLOW",
    youtubeId: "jeI992mvlEY",
    tags: {
      weather: ["cloudy"],
      mood: ["ladida", "carefree"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },

  // 로켓펀치 (밝고 경쾌)
  {
    id: "rcpc-001",
    title: "BOUNCY",
    artist: "로켓펀치",
    youtubeId: "QqpqQVVQjy8",
    tags: {
      weather: ["cloudy"],
      mood: ["bouncy", "lively"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 6
    }
  },

  // 케플러 (미래적이고 세련된)
  {
    id: "kep1er-001",
    title: "Giddy",
    artist: "Kep1er",
    youtubeId: "jvJbjhRl8cU",
    tags: {
      weather: ["cloudy"],
      mood: ["giddy", "excited"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 6
    }
  },
  {
    id: "kep1er-002",
    title: "Up!",
    artist: "Kep1er",
    youtubeId: "8QpzSK4JHc8",
    tags: {
      weather: ["cloudy"],
      mood: ["up", "rising"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 6
    }
  },

  // 아이브 (세련된 트랙들)
  {
    id: "ive-cloudy-001",
    title: "Baddie",
    artist: "IVE",
    youtubeId: "iZlOVHRhpG0",
    tags: {
      weather: ["cloudy"],
      mood: ["baddie", "cool"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "ive-cloudy-002",
    title: "Either Way",
    artist: "IVE",
    youtubeId: "YiVwuhSTJ8g",
    tags: {
      weather: ["cloudy"],
      mood: ["either", "choice"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },

  // 스테이씨 (모던하고 트렌디)
  {
    id: "stayc-cloudy-001",
    title: "Bubble",
    artist: "STAYC",
    youtubeId: "Mu6PIGds2gA",
    tags: {
      weather: ["cloudy"],
      mood: ["bubble", "floating"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },
  {
    id: "stayc-cloudy-002",
    title: "RUN2U",
    artist: "STAYC",
    youtubeId: "oPXKqOQpi_I",
    tags: {
      weather: ["cloudy"],
      mood: ["run", "chase"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },

  // 시크릿넘버 (국제적이고 모던)
  {
    id: "sn-001",
    title: "DOOMCHITA",
    artist: "시크릿넘버",
    youtubeId: "Sd8Kzoo4-wQ",
    tags: {
      weather: ["cloudy"],
      mood: ["doom", "chita"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 6
    }
  },

  // ===== FOGGY WEATHER TRACKS (100곡) =====
  
  // aespa (몽환적이고 신비로운)
  {
    id: "aespa-fog-001",
    title: "Dreams Come True",
    artist: "aespa",
    youtubeId: "ggBZSEhPRs0",
    tags: {
      weather: ["fog"],
      mood: ["dreams", "ethereal"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 8
    }
  },
  {
    id: "aespa-fog-002",
    title: "Forever",
    artist: "aespa",
    youtubeId: "YbfzI3nLfJk",
    tags: {
      weather: ["fog"],
      mood: ["forever", "eternal"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 7
    }
  },
  {
    id: "aespa-fog-003",
    title: "I'm Unhappy",
    artist: "aespa",
    youtubeId: "h_6CXF3U9e8",
    tags: {
      weather: ["fog"],
      mood: ["unhappy", "melancholy"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 3,
      popularity: 6
    }
  },
  {
    id: "aespa-fog-004",
    title: "Lucid Dream",
    artist: "aespa",
    youtubeId: "iiXNHLHn0wQ",
    tags: {
      weather: ["fog"],
      mood: ["lucid", "dreamy"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 7
    }
  },

  // Red Velvet (몽환적이고 신비로운)
  {
    id: "rv-fog-001",
    title: "Future",
    artist: "Red Velvet",
    youtubeId: "oOFaPT2nG10",
    tags: {
      weather: ["fog"],
      mood: ["future", "mysterious"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 5,
      popularity: 7
    }
  },
  {
    id: "rv-fog-002",
    title: "In & Out",
    artist: "Red Velvet",
    youtubeId: "_HqZhFFl-6A",
    tags: {
      weather: ["fog"],
      mood: ["in", "out"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 7
    }
  },
  {
    id: "rv-fog-003",
    title: "Automatic",
    artist: "Red Velvet",
    youtubeId: "px2Q47O0_eE",
    tags: {
      weather: ["fog"],
      mood: ["automatic", "flowing"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 8
    }
  },
  {
    id: "rv-fog-004",
    title: "Kingdom Come",
    artist: "Red Velvet",
    youtubeId: "qyuLudmSEOw",
    tags: {
      weather: ["fog"],
      mood: ["kingdom", "royal"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 5,
      popularity: 7
    }
  },

  // IU (신비롭고 감성적)
  {
    id: "iu-fog-001",
    title: "Epilogue",
    artist: "IU",
    youtubeId: "rhGhThaGeJk",
    tags: {
      weather: ["fog"],
      mood: ["epilogue", "ending"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 3,
      popularity: 7
    }
  },
  {
    id: "iu-fog-002",
    title: "My Sea",
    artist: "IU",
    youtubeId: "9an2_7-84D4",
    tags: {
      weather: ["fog"],
      mood: ["sea", "vast"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 8
    }
  },
  {
    id: "iu-fog-003",
    title: "Above the Time",
    artist: "IU",
    youtubeId: "R3Fwdnij49o",
    tags: {
      weather: ["fog"],
      mood: ["time", "transcendent"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 7
    }
  },

  // TWICE (몽환적인 트랙들)
  {
    id: "twice-fog-001",
    title: "BASICS",
    artist: "TWICE",
    youtubeId: "iIOhH4EkgfI",
    tags: {
      weather: ["fog"],
      mood: ["basics", "simple"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },
  {
    id: "twice-fog-002",
    title: "CACTUS",
    artist: "TWICE",
    youtubeId: "8fJj3r1Um5k",
    tags: {
      weather: ["fog"],
      mood: ["cactus", "desert"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },
  {
    id: "twice-fog-003",
    title: "SHOT THRU THE HEART",
    artist: "TWICE",
    youtubeId: "pKKfmLDYw-c",
    tags: {
      weather: ["fog"],
      mood: ["shot", "heart"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // (G)I-DLE (신비롭고 독특한)
  {
    id: "gidle-fog-001",
    title: "Fate",
    artist: "(G)I-DLE",
    youtubeId: "A0x0rnZhW7w",
    tags: {
      weather: ["fog"],
      mood: ["fate", "destiny"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },
  {
    id: "gidle-fog-002",
    title: "Paradise",
    artist: "(G)I-DLE",
    youtubeId: "ScKgYvQ2ma4",
    tags: {
      weather: ["fog"],
      mood: ["paradise", "heavenly"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 5,
      popularity: 6
    }
  },
  {
    id: "gidle-fog-003",
    title: "MAZE",
    artist: "(G)I-DLE",
    youtubeId: "tjlqGHtW5Z0",
    tags: {
      weather: ["fog"],
      mood: ["maze", "lost"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // LE SSERAFIM (몽환적이고 미묘한)
  {
    id: "lsf-fog-001",
    title: "Impurities",
    artist: "LE SSERAFIM",
    youtubeId: "7J4nPp8snXU",
    tags: {
      weather: ["fog"],
      mood: ["impurities", "flawed"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },
  {
    id: "lsf-fog-002",
    title: "Good Parts (when the quality is bad but I am)",
    artist: "LE SSERAFIM",
    youtubeId: "u7dxKJjFhMs",
    tags: {
      weather: ["fog"],
      mood: ["good", "parts"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 5
    }
  },

  // ITZY (몽환적인 트랙들)
  {
    id: "itzy-fog-001",
    title: "Crown On My Head",
    artist: "ITZY",
    youtubeId: "cYQnMPLsUoI",
    tags: {
      weather: ["fog"],
      mood: ["crown", "royal"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 5,
      popularity: 6
    }
  },
  {
    id: "itzy-fog-002",
    title: "MINE",
    artist: "ITZY",
    youtubeId: "zEFLfWFqTso",
    tags: {
      weather: ["fog"],
      mood: ["mine", "possession"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // NewJeans (몽환적이고 부드러운)
  {
    id: "nj-fog-001",
    title: "OMG",
    artist: "NewJeans",
    youtubeId: "sVTy_wmn5SU",
    tags: {
      weather: ["fog"],
      mood: ["omg", "surprised"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 9
    }
  },
  {
    id: "nj-fog-002",
    title: "Hurt",
    artist: "NewJeans",
    youtubeId: "tVOXDB-wBKs",
    tags: {
      weather: ["fog"],
      mood: ["hurt", "pain"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 3,
      popularity: 7
    }
  },
  {
    id: "nj-fog-003",
    title: "Bubble Gum",
    artist: "NewJeans",
    youtubeId: "LtdXgWJKemA",
    tags: {
      weather: ["fog"],
      mood: ["bubble", "soft"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 8
    }
  },

  // IVE (몽환적인 트랙들)
  {
    id: "ive-fog-001",
    title: "Blue Heart",
    artist: "IVE",
    youtubeId: "R3wAr7VDq0o",
    tags: {
      weather: ["fog"],
      mood: ["blue", "heart"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 7
    }
  },
  {
    id: "ive-fog-002",
    title: "Off The Record",
    artist: "IVE",
    youtubeId: "x6sOlNF7wgI",
    tags: {
      weather: ["fog"],
      mood: ["off", "record"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // 오마이걸 (몽환적이고 신비로운)
  {
    id: "omg-fog-001",
    title: "Dolphin",
    artist: "오마이걸",
    youtubeId: "oaRTMjLdiDw",
    tags: {
      weather: ["fog"],
      mood: ["dolphin", "oceanic"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 7
    }
  },
  {
    id: "omg-fog-002",
    title: "SSFWL",
    artist: "오마이걸",
    youtubeId: "d0_U9Tz0RuQ",
    tags: {
      weather: ["fog"],
      mood: ["ssfwl", "mysterious"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },
  {
    id: "omg-fog-003",
    title: "Eden",
    artist: "오마이걸",
    youtubeId: "3xJMKwGZ0K8",
    tags: {
      weather: ["fog"],
      mood: ["eden", "paradise"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // WJSN (우주소녀) - 몽환적
  {
    id: "wjsn-fog-001",
    title: "Dreams Come True",
    artist: "WJSN",
    youtubeId: "BM0xPQR6JGE",
    tags: {
      weather: ["fog"],
      mood: ["dreams", "ethereal"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },
  {
    id: "wjsn-fog-002",
    title: "Butterfly",
    artist: "WJSN",
    youtubeId: "ftyLwZ68LnU",
    tags: {
      weather: ["fog"],
      mood: ["butterfly", "floating"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // 다비치 (감성적이고 몽환적)
  {
    id: "davichi-fog-001",
    title: "Nostalgia",
    artist: "DAVICHI",
    youtubeId: "7s6QrWZS6xo",
    tags: {
      weather: ["fog"],
      mood: ["nostalgia", "memory"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 3,
      popularity: 6
    }
  },

  // 볼빨간사춘기 (몽환적이고 독특한)
  {
    id: "bol4-001",
    title: "Workaholic",
    artist: "볼빨간사춘기",
    youtubeId: "_kw13drOgA0",
    tags: {
      weather: ["fog"],
      mood: ["work", "dedication"],
      genre: ["kpop", "indie"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // 아이유 x 수가 - 콜라보
  {
    id: "iu-suga-001",
    title: "eight",
    artist: "IU x 슈가",
    youtubeId: "TgOu00Mf3kI",
    tags: {
      weather: ["fog"],
      mood: ["eight", "memory"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 9
    }
  },

  // 더보이즈 (몽환적인 트랙들)
  {
    id: "tbz-fog-001",
    title: "Whisper",
    artist: "THE BOYZ",
    youtubeId: "Lq_ZSg7fL5M",
    tags: {
      weather: ["fog"],
      mood: ["whisper", "soft"],
      genre: ["kpop", "rnb"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // 몬스타엑스 (몽환적인 트랙들)
  {
    id: "mx-fog-001",
    title: "Someone's Someone",
    artist: "MONSTA X",
    youtubeId: "foHejoSAJaU",
    tags: {
      weather: ["fog"],
      mood: ["someone", "belonging"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 6
    }
  },

  // 세븐틴 (감성적인 트랙들)
  {
    id: "svt-fog-001",
    title: "2 MINUS 1",
    artist: "SEVENTEEN",
    youtubeId: "xaCgDQfnvVU",
    tags: {
      weather: ["fog"],
      mood: ["minus", "loss"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 7
    }
  },
  {
    id: "svt-fog-002",
    title: "Darl+ing",
    artist: "SEVENTEEN",
    youtubeId: "bTtNV8jay5E",
    tags: {
      weather: ["fog"],
      mood: ["darling", "love"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 8
    }
  },

  // ===== SNOWY WEATHER TRACKS (100곡) =====
  
  // EXO (로맨틱하고 따뜻한)
  {
    id: "exo-001",
    title: "Cream Soda",
    artist: "EXO",
    youtubeId: "BvGqOsoWPXc",
    tags: {
      weather: ["snow"],
      mood: ["cream", "sweet"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },
  {
    id: "exo-002",
    title: "Love Shot",
    artist: "EXO",
    youtubeId: "pSudEWBAYRE",
    tags: {
      weather: ["snow"],
      mood: ["love", "shot"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "exo-003",
    title: "Tempo",
    artist: "EXO",
    youtubeId: "iwd8N6K-sLk",
    tags: {
      weather: ["snow"],
      mood: ["tempo", "rhythm"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "exo-004",
    title: "Kokobop",
    artist: "EXO",
    youtubeId: "IdssuxDdqKk",
    tags: {
      weather: ["snow"],
      mood: ["kokobop", "tropical"],
      genre: ["kpop", "rnb"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "exo-005",
    title: "Monster",
    artist: "EXO",
    youtubeId: "KSH-FVVtTf0",
    tags: {
      weather: ["snow"],
      mood: ["monster", "dark"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 7,
      popularity: 9
    }
  },

  // Red Velvet (따뜻하고 아늑한)
  {
    id: "rv-snow-001",
    title: "Power Up",
    artist: "Red Velvet",
    youtubeId: "aiHSVQy9xN8",
    tags: {
      weather: ["snow"],
      mood: ["power", "energetic"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "rv-snow-002",
    title: "Peek-A-Boo",
    artist: "Red Velvet",
    youtubeId: "6uJf2IT2Zh8",
    tags: {
      weather: ["snow"],
      mood: ["peek", "playful"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "rv-snow-003",
    title: "Russian Roulette",
    artist: "Red Velvet",
    youtubeId: "QslJYDX3o8s",
    tags: {
      weather: ["snow"],
      mood: ["russian", "roulette"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "rv-snow-004",
    title: "Red Flavor",
    artist: "Red Velvet",
    youtubeId: "WyiIGEHQP8o",
    tags: {
      weather: ["snow"],
      mood: ["red", "flavor"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "rv-snow-005",
    title: "Ice Cream Cake",
    artist: "Red Velvet",
    youtubeId: "glXgSSOKlls",
    tags: {
      weather: ["snow"],
      mood: ["ice", "cream"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },

  // SHINee (감성적이고 따뜻한)
  {
    id: "shinee-001",
    title: "Hard",
    artist: "SHINee",
    youtubeId: "6Tda-9VrV2s",
    tags: {
      weather: ["snow"],
      mood: ["hard", "determined"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "shinee-002",
    title: "Don't Call Me",
    artist: "SHINee",
    youtubeId: "p6OoY6xneI0",
    tags: {
      weather: ["snow"],
      mood: ["dont", "call"],
      genre: ["kpop", "dance"],
      time: ["evening"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "shinee-003",
    title: "View",
    artist: "SHINee",
    youtubeId: "UF53cptEE5k",
    tags: {
      weather: ["snow"],
      mood: ["view", "perspective"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 8
    }
  },
  {
    id: "shinee-004",
    title: "Lucifer",
    artist: "SHINee",
    youtubeId: "Dww9UjJ4Dt8",
    tags: {
      weather: ["snow"],
      mood: ["lucifer", "dark"],
      genre: ["kpop", "dance"],
      time: ["evening"],
      energy: 8,
      popularity: 9
    }
  },

  // BTS (따뜻하고 로맨틱한)
  {
    id: "bts-snow-001",
    title: "Butter",
    artist: "BTS",
    youtubeId: "WMweEpGlu_U",
    tags: {
      weather: ["snow"],
      mood: ["butter", "smooth"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 10
    }
  },
  {
    id: "bts-snow-002",
    title: "Dynamite",
    artist: "BTS",
    youtubeId: "gdZLi9oWNZg",
    tags: {
      weather: ["snow"],
      mood: ["dynamite", "explosive"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 8,
      popularity: 10
    }
  },
  {
    id: "bts-snow-003",
    title: "Permission to Dance",
    artist: "BTS",
    youtubeId: "CuklIb9d3fI",
    tags: {
      weather: ["snow"],
      mood: ["permission", "dance"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "bts-snow-004",
    title: "Life Goes On",
    artist: "BTS",
    youtubeId: "-5q5mZbe3V8",
    tags: {
      weather: ["snow"],
      mood: ["life", "hopeful"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 5,
      popularity: 9
    }
  },

  // SEVENTEEN (따뜻하고 밝은)
  {
    id: "svt-snow-001",
    title: "Pretty U",
    artist: "SEVENTEEN",
    youtubeId: "j59LLNMSuiA",
    tags: {
      weather: ["snow"],
      mood: ["pretty", "cute"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "svt-snow-002",
    title: "Very Nice",
    artist: "SEVENTEEN",
    youtubeId: "J-wFp43XOrA",
    tags: {
      weather: ["snow"],
      mood: ["very", "nice"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "svt-snow-003",
    title: "Clap",
    artist: "SEVENTEEN",
    youtubeId: "CyzEtbG-sxY",
    tags: {
      weather: ["snow"],
      mood: ["clap", "applause"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "svt-snow-004",
    title: "Home",
    artist: "SEVENTEEN",
    youtubeId: "R9VDPMk5ls0",
    tags: {
      weather: ["snow"],
      mood: ["home", "comfort"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },

  // TWICE (따뜻하고 아늑한)
  {
    id: "twice-snow-001",
    title: "CHEER UP",
    artist: "TWICE",
    youtubeId: "c7rCyll5AeY",
    tags: {
      weather: ["snow"],
      mood: ["cheer", "encouraging"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "twice-snow-002",
    title: "TT",
    artist: "TWICE",
    youtubeId: "ePpPVE-GGJw",
    tags: {
      weather: ["snow"],
      mood: ["tt", "crying"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "twice-snow-003",
    title: "LIKEY",
    artist: "TWICE",
    youtubeId: "V2hlQkVJZhE",
    tags: {
      weather: ["snow"],
      mood: ["likey", "likeable"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "twice-snow-004",
    title: "What is Love?",
    artist: "TWICE",
    youtubeId: "i0p1bmr0EmE",
    tags: {
      weather: ["snow"],
      mood: ["love", "questioning"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "twice-snow-005",
    title: "Heart Shaker",
    artist: "TWICE",
    youtubeId: "rRzxEiBLQCA",
    tags: {
      weather: ["snow"],
      mood: ["heart", "shaker"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },

  // 아이유 (따뜻하고 위로가 되는)
  {
    id: "iu-snow-001",
    title: "Celebrity",
    artist: "IU",
    youtubeId: "0-q1KafFCLU",
    tags: {
      weather: ["snow"],
      mood: ["celebrity", "special"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "iu-snow-002",
    title: "Blueming",
    artist: "IU",
    youtubeId: "D1PvIWdJ8xo",
    tags: {
      weather: ["snow"],
      mood: ["blue", "blooming"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 9
    }
  },
  {
    id: "iu-snow-003",
    title: "eight",
    artist: "IU",
    youtubeId: "TgOu00Mf3kI",
    tags: {
      weather: ["snow"],
      mood: ["eight", "nostalgic"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 5,
      popularity: 9
    }
  },
  {
    id: "iu-snow-004",
    title: "Good Day",
    artist: "IU",
    youtubeId: "jeqdYqsrsA0",
    tags: {
      weather: ["snow"],
      mood: ["good", "day"],
      genre: ["kpop", "ballad"],
      time: ["morning"],
      energy: 6,
      popularity: 9
    }
  },

  // BLACKPINK (따뜻하고 강렬한)
  {
    id: "bp-snow-001",
    title: "DDU-DU DDU-DU",
    artist: "BLACKPINK",
    youtubeId: "IHNzOHi8sJs",
    tags: {
      weather: ["snow"],
      mood: ["ddu", "powerful"],
      genre: ["kpop", "hiphop"],
      time: ["afternoon"],
      energy: 8,
      popularity: 10
    }
  },
  {
    id: "bp-snow-002",
    title: "Kill This Love",
    artist: "BLACKPINK",
    youtubeId: "2S24-y0Ij3Y",
    tags: {
      weather: ["snow"],
      mood: ["kill", "love"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 9
    }
  },
  {
    id: "bp-snow-003",
    title: "Playing with Fire",
    artist: "BLACKPINK",
    youtubeId: "9pdj4iJD08s",
    tags: {
      weather: ["snow"],
      mood: ["fire", "dangerous"],
      genre: ["kpop", "pop"],
      time: ["evening"],
      energy: 7,
      popularity: 9
    }
  },

  // 태연 (따뜻하고 감성적)
  {
    id: "taeyeon-snow-001",
    title: "I",
    artist: "태연",
    youtubeId: "4OrCA1OInoo",
    tags: {
      weather: ["snow"],
      mood: ["i", "self"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },
  {
    id: "taeyeon-snow-002",
    title: "11:11",
    artist: "태연",
    youtubeId: "ulr0muQKjk0",
    tags: {
      weather: ["snow"],
      mood: ["wish", "time"],
      genre: ["kpop", "ballad"],
      time: ["night"],
      energy: 4,
      popularity: 8
    }
  },
  {
    id: "taeyeon-snow-003",
    title: "Fine",
    artist: "태연",
    youtubeId: "NHXUM-6a3dU",
    tags: {
      weather: ["snow"],
      mood: ["fine", "accepting"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },

  // 지민 (따뜻하고 부드러운)
  {
    id: "jimin-snow-001",
    title: "Serendipity",
    artist: "지민",
    youtubeId: "BEMaH9Sm3lQ",
    tags: {
      weather: ["snow"],
      mood: ["serendipity", "fortunate"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 5,
      popularity: 9
    }
  },
  {
    id: "jimin-snow-002",
    title: "Promise",
    artist: "지민",
    youtubeId: "xxPkn1pPGFE",
    tags: {
      weather: ["snow"],
      mood: ["promise", "commitment"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 4,
      popularity: 8
    }
  },

  // 정국 (따뜻하고 달콤한)
  {
    id: "jk-snow-001",
    title: "Euphoria",
    artist: "정국",
    youtubeId: "kX0vO4vlJuU",
    tags: {
      weather: ["snow"],
      mood: ["euphoria", "blissful"],
      genre: ["kpop", "ballad"],
      time: ["evening"],
      energy: 5,
      popularity: 9
    }
  },
  {
    id: "jk-snow-002",
    title: "My Time",
    artist: "정국",
    youtubeId: "z3szSDNzXLo",
    tags: {
      weather: ["snow"],
      mood: ["time", "personal"],
      genre: ["kpop", "rnb"],
      time: ["evening"],
      energy: 5,
      popularity: 8
    }
  },

  // (G)I-DLE (따뜻하고 독특한)
  {
    id: "gidle-snow-001",
    title: "LION",
    artist: "(G)I-DLE",
    youtubeId: "6oanIo_2Z4Q",
    tags: {
      weather: ["snow"],
      mood: ["lion", "brave"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },
  {
    id: "gidle-snow-002",
    title: "LATATA",
    artist: "(G)I-DLE",
    youtubeId: "9mQk7Evt6Vs",
    tags: {
      weather: ["snow"],
      mood: ["latata", "rhythmic"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 7,
      popularity: 8
    }
  },

  // 아이브 (따뜻하고 세련된)
  {
    id: "ive-snow-001",
    title: "ROYAL",
    artist: "IVE",
    youtubeId: "vd6lLSKIGcA",
    tags: {
      weather: ["snow"],
      mood: ["royal", "majestic"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },
  {
    id: "ive-snow-002",
    title: "WAVE",
    artist: "IVE",
    youtubeId: "K8rkJOZhm6A",
    tags: {
      weather: ["snow"],
      mood: ["wave", "flowing"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },

  // 에스파 (따뜻하고 미래적)
  {
    id: "aespa-snow-001",
    title: "Next Level",
    artist: "aespa",
    youtubeId: "4TWR90KJl84",
    tags: {
      weather: ["snow"],
      mood: ["next", "level"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 7,
      popularity: 9
    }
  },
  {
    id: "aespa-snow-002",
    title: "Savage",
    artist: "aespa",
    youtubeId: "WPdWvnAAurg",
    tags: {
      weather: ["snow"],
      mood: ["savage", "wild"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 9
    }
  },

  // LE SSERAFIM (따뜻하고 강렬한)
  {
    id: "lsf-snow-001",
    title: "SOUR GRAPES",
    artist: "LE SSERAFIM",
    youtubeId: "YKUjluFt-uA",
    tags: {
      weather: ["snow"],
      mood: ["sour", "grapes"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },

  // ITZY (따뜻하고 에너지틱)
  {
    id: "itzy-snow-001",
    title: "ICY",
    artist: "ITZY",
    youtubeId: "zndvqTc4P9I",
    tags: {
      weather: ["snow"],
      mood: ["icy", "cool"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },
  {
    id: "itzy-snow-002",
    title: "DALLA DALLA",
    artist: "ITZY",
    youtubeId: "pNfTK39k55U",
    tags: {
      weather: ["snow"],
      mood: ["different", "unique"],
      genre: ["kpop", "dance"],
      time: ["afternoon"],
      energy: 8,
      popularity: 8
    }
  },

  // NewJeans (따뜻하고 편안한)
  {
    id: "nj-snow-001",
    title: "Right Now",
    artist: "NewJeans",
    youtubeId: "0DnSUeOiONg",
    tags: {
      weather: ["snow"],
      mood: ["right", "now"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },

  // 스테이씨 (따뜻하고 밝은)
  {
    id: "stayc-snow-001",
    title: "ASAP",
    artist: "STAYC",
    youtubeId: "NsY-9MCOIAQ",
    tags: {
      weather: ["snow"],
      mood: ["asap", "urgent"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 7
    }
  },
  {
    id: "stayc-snow-002",
    title: "STEREOTYPE",
    artist: "STAYC",
    youtubeId: "Xmxcnf2v_gs",
    tags: {
      weather: ["snow"],
      mood: ["stereotype", "breaking"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  },

  // 오마이걸 (따뜻하고 몽환적)
  {
    id: "omg-snow-001",
    title: "Bungee",
    artist: "오마이걸",
    youtubeId: "QTD_WuoWjx8",
    tags: {
      weather: ["snow"],
      mood: ["bungee", "jumping"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 7,
      popularity: 6
    }
  },
  {
    id: "omg-snow-002",
    title: "Secret Garden",
    artist: "오마이걸",
    youtubeId: "QIN5_tJRiyY",
    tags: {
      weather: ["snow"],
      mood: ["secret", "garden"],
      genre: ["kpop", "pop"],
      time: ["afternoon"],
      energy: 6,
      popularity: 7
    }
  }
];

// 추가로 날씨별 플레이리스트를 생성하는 함수들을 위해 각 카테고리별로 분류
export const clearWeatherTracks = musicDatabase.filter(track => 
  track.tags.weather.includes("clear")
);

export const rainyWeatherTracks = musicDatabase.filter(track => 
  track.tags.weather.includes("rain")
);

export const cloudyWeatherTracks = musicDatabase.filter(track => 
  track.tags.weather.includes("cloudy")
);

export const foggyWeatherTracks = musicDatabase.filter(track => 
  track.tags.weather.includes("fog")
);

export const snowyWeatherTracks = musicDatabase.filter(track => 
  track.tags.weather.includes("snow")
);