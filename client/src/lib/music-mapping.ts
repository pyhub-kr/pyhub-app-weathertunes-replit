import type { MusicTrack } from "@shared/schema";

// Weather-based music playlists
const musicPlaylists = {
  clear: [
    {
      title: "Sunny Day Vibes",
      artist: "Chill Beats",
      mood: "밝고 경쾌한 • 맑은 날",
      youtubeId: "jfKfPfyJRdk", // lofi hip hop radio
    },
    {
      title: "Happy Summer",
      artist: "Upbeat Music",
      mood: "신나는 팝 • 화창한 날씨",
      youtubeId: "5qap5aO4i9A", // lofi hip hop
    },
    {
      title: "Acoustic Sunshine",
      artist: "Relaxing Guitar",
      mood: "따뜻한 어쿠스틱 • 햇살",
      youtubeId: "DWcJFNfaw9c", // calm piano
    },
    {
      title: "Good Vibes Only",
      artist: "ChillHop Music",
      mood: "긍정적인 로파이 • 상쾌한 아침",
      youtubeId: "rUxyKA_-grg",
    },
    {
      title: "Summer Breeze",
      artist: "Jazz Cafe",
      mood: "시원한 재즈 • 여름 산들바람",
      youtubeId: "2gliGzb2_1I",
    },
    {
      title: "Tropical House Vibes",
      artist: "Electronic Chill",
      mood: "트로피칼 하우스 • 해변가",
      youtubeId: "sTsVJ1PsnMs",
    },
    {
      title: "Feel Good Indie",
      artist: "Indie Pop",
      mood: "기분 좋은 인디팝 • 맑은 하늘",
      youtubeId: "fBYVlFXsEME",
    },
    {
      title: "Uplifting Piano",
      artist: "Piano Melodies",
      mood: "희망찬 피아노 • 밝은 하루",
      youtubeId: "EKkzbbLYPuI",
    },
    {
      title: "Coffee Shop Acoustic",
      artist: "Acoustic Guitar",
      mood: "카페 어쿠스틱 • 여유로운 오후",
      youtubeId: "Dq7jk1jNhqA",
    },
    {
      title: "Happy Go Lucky",
      artist: "Cheerful Tunes",
      mood: "유쾌한 멜로디 • 신나는 날",
      youtubeId: "lTRiuFIWV54",
    },
    {
      title: "Sunshine Reggae",
      artist: "Island Vibes",
      mood: "햇살 레게 • 따뜻한 오후",
      youtubeId: "BeQNLgqnbIc",
    },
    {
      title: "Morning Energy",
      artist: "Energetic Beats",
      mood: "아침 에너지 • 활기찬 시작",
      youtubeId: "MV_3Dpw-BRY",
    },
    {
      title: "Bossa Nova Sunrise",
      artist: "Brazilian Jazz",
      mood: "보사노바 • 일출과 함께",
      youtubeId: "q76bMs-NwRk",
    },
    {
      title: "Electronic Sunshine",
      artist: "Synth Pop",
      mood: "전자음악 • 밝은 신스팝",
      youtubeId: "wzjWIxXBs_s",
    },
    {
      title: "Country Roads",
      artist: "Folk Country",
      mood: "컨트리 포크 • 시골길 드라이브",
      youtubeId: "1ZYbU82GVz4",
    },
    {
      title: "K-Pop Energy",
      artist: "Korean Pop",
      mood: "케이팝 • 신나는 한국 음악",
      youtubeId: "nTkKoD_mBmY",
    },
    {
      title: "Funk Fusion",
      artist: "Funky Grooves",
      mood: "펑크 퓨전 • 그루브한 리듬",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Latin Fiesta",
      artist: "Latin Rhythms",
      mood: "라틴 피에스타 • 열정적인 리듬",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Jazz Fusion Bright",
      artist: "Modern Jazz",
      mood: "모던 재즈 퓨전 • 세련된 사운드",
      youtubeId: "Dx5qFachd3A",
    },
    {
      title: "Ska Sunshine",
      artist: "Ska Punk",
      mood: "스카 펑크 • 경쾌한 브라스",
      youtubeId: "5qap5aO4i9A",
    },
    {
      title: "Dream Pop Morning",
      artist: "Dreamy Sounds",
      mood: "드림팝 • 몽환적인 아침",
      youtubeId: "jfKfPfyJRdk",
    },
    {
      title: "Mediterranean Breeze",
      artist: "World Music",
      mood: "지중해 산들바람 • 이국적인 선율",
      youtubeId: "DWcJFNfaw9c",
    },
    {
      title: "Surf Rock Waves",
      artist: "Surf Guitar",
      mood: "서프 록 • 파도와 기타",
      youtubeId: "rUxyKA_-grg",
    },
    {
      title: "Ambient Sunshine",
      artist: "Atmospheric",
      mood: "앰비언트 • 햇살 같은 따스함",
      youtubeId: "2gliGzb2_1I",
    },
    {
      title: "Hip Hop Sunny",
      artist: "Positive Rap",
      mood: "긍정적인 힙합 • 밝은 에너지",
      youtubeId: "sTsVJ1PsnMs",
    },
    {
      title: "Celtic Joy",
      artist: "Irish Folk",
      mood: "켈틱 민요 • 아일랜드의 기쁨",
      youtubeId: "fBYVlFXsEME",
    },
    {
      title: "Indie Rock Bright",
      artist: "Alternative Rock",
      mood: "밝은 인디록 • 청춘의 에너지",
      youtubeId: "EKkzbbLYPuI",
    },
    {
      title: "Gospel Uplifting",
      artist: "Spiritual Music",
      mood: "영적인 가스펠 • 희망의 메시지",
      youtubeId: "Dq7jk1jNhqA",
    },
    {
      title: "Bluegrass Morning",
      artist: "Country Folk",
      mood: "블루그래스 • 시골 아침 풍경",
      youtubeId: "lTRiuFIWV54",
    },
    {
      title: "Afrobeat Sunshine",
      artist: "African Rhythms",
      mood: "아프로비트 • 태양 같은 리듬",
      youtubeId: "BeQNLgqnbIc",
    },
  ],
  rain: [
    {
      title: "Rainy Day Jazz",
      artist: "Smooth Jazz Cafe",
      mood: "차분한 재즈 • 비오는 날",
      youtubeId: "Dx5qFachd3A", // jazz cafe
    },
    {
      title: "Rain Sounds & Piano",
      artist: "Nature Sounds",
      mood: "편안한 피아노 • 빗소리",
      youtubeId: "q76bMs-NwRk", // rain sounds
    },
    {
      title: "Melancholic Indie",
      artist: "Indie Folk",
      mood: "감성적인 인디 • 우울한 날씨",
      youtubeId: "BeQNLgqnbIc", // indie music
    },
    {
      title: "Coffee Shop Rain",
      artist: "Cafe Ambience",
      mood: "카페 분위기 • 창가의 빗소리",
      youtubeId: "jfKfPfyJRdk",
    },
    {
      title: "Neo Soul Rainy",
      artist: "R&B Vibes",
      mood: "네오 소울 • 비 내리는 밤",
      youtubeId: "MV_3Dpw-BRY",
    },
    {
      title: "Acoustic Ballad",
      artist: "Singer Songwriter",
      mood: "어쿠스틱 발라드 • 감성적인 빗날",
      youtubeId: "wzjWIxXBs_s",
    },
    {
      title: "Liquid Drum & Bass",
      artist: "Electronic Chill",
      mood: "리퀴드 드럼앤베이스 • 빗소리 리듬",
      youtubeId: "1ZYbU82GVz4",
    },
    {
      title: "Classical Rain",
      artist: "Chamber Music",
      mood: "클래식 실내악 • 우아한 빗소리",
      youtubeId: "nTkKoD_mBmY",
    },
    {
      title: "Ambient Rainfall",
      artist: "Soundscape",
      mood: "앰비언트 • 빗소리와 하나되기",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Downtempo Chill",
      artist: "Trip Hop",
      mood: "다운템포 • 여유로운 빗날",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Sad Piano Solo",
      artist: "Emotional Piano",
      mood: "슬픈 피아노 • 빗방울과 감정",
      youtubeId: "5qap5aO4i9A",
    },
    {
      title: "Blues Rain",
      artist: "Electric Blues",
      mood: "블루스 기타 • 비 내리는 저녁",
      youtubeId: "DWcJFNfaw9c",
    },
    {
      title: "Lo-fi Hip Hop Rain",
      artist: "Chillhop",
      mood: "로파이 힙합 • 빗소리 비트",
      youtubeId: "rUxyKA_-grg",
    },
    {
      title: "Thunderstorm Jazz",
      artist: "Storm Sounds",
      mood: "재즈와 천둥소리 • 격한 비",
      youtubeId: "2gliGzb2_1I",
    },
    {
      title: "Indie Folk Rain",
      artist: "Alternative Folk",
      mood: "인디 포크 • 서정적인 빗날",
      youtubeId: "sTsVJ1PsnMs",
    },
    {
      title: "Violin Rain Sonata",
      artist: "String Quartet",
      mood: "바이올린 소나타 • 빗속 연주",
      youtubeId: "fBYVlFXsEME",
    },
    {
      title: "Post Rock Rain",
      artist: "Instrumental Rock",
      mood: "포스트록 • 빗소리 서사시",
      youtubeId: "EKkzbbLYPuI",
    },
    {
      title: "Celtic Rain Dance",
      artist: "Irish Traditional",
      mood: "켈틱 • 아일랜드 빗속 춤",
      youtubeId: "Dq7jk1jNhqA",
    },
    {
      title: "Minimal Techno Rain",
      artist: "Underground Electronic",
      mood: "미니멀 테크노 • 빗방울 패턴",
      youtubeId: "lTRiuFIWV54",
    },
    {
      title: "Korean Ballad Rain",
      artist: "K-Ballad",
      mood: "한국 발라드 • 비 오는 서울",
      youtubeId: "BeQNLgqnbIc",
    },
    {
      title: "Shoegaze Drizzle",
      artist: "Dream Rock",
      mood: "슈게이즈 • 몽환적인 이슬비",
      youtubeId: "Dx5qFachd3A",
    },
    {
      title: "Bossa Nova Rain",
      artist: "Brazilian Jazz",
      mood: "보사노바 • 브라질 빗소리",
      youtubeId: "q76bMs-NwRk",
    },
    {
      title: "Dark Ambient Storm",
      artist: "Atmospheric Dark",
      mood: "다크 앰비언트 • 폭풍우의 깊이",
      youtubeId: "jfKfPfyJRdk",
    },
    {
      title: "Piano Trio Rain",
      artist: "Jazz Trio",
      mood: "피아노 트리오 • 빗속 즉흥연주",
      youtubeId: "MV_3Dpw-BRY",
    },
    {
      title: "Drone Rain Meditation",
      artist: "Meditation Music",
      mood: "드론 음악 • 빗소리 명상",
      youtubeId: "wzjWIxXBs_s",
    },
    {
      title: "Experimental Rain",
      artist: "Sound Art",
      mood: "실험음악 • 빗소리 예술",
      youtubeId: "1ZYbU82GVz4",
    },
    {
      title: "Flamenco Rain",
      artist: "Spanish Guitar",
      mood: "플라멘코 • 스페인 빗속 기타",
      youtubeId: "nTkKoD_mBmY",
    },
    {
      title: "Deep House Rain",
      artist: "House Music",
      mood: "딥하우스 • 빗소리 그루브",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Contemporary Classical",
      artist: "Modern Orchestra",
      mood: "현대 클래식 • 빗속 오케스트라",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Vocal Jazz Rain",
      artist: "Jazz Vocals",
      mood: "보컬 재즈 • 빗소리 세레나데",
      youtubeId: "5qap5aO4i9A",
    },
  ],
  snow: [
    {
      title: "Winter Wonderland",
      artist: "Classical Piano",
      mood: "고요한 클래식 • 눈오는 날",
      youtubeId: "EKkzbbLYPuI", // winter music
    },
    {
      title: "Cozy Fireplace",
      artist: "Ambient Sounds",
      mood: "따뜻한 앰비언트 • 겨울밤",
      youtubeId: "L_LUpnjgPso", // fireplace sounds
    },
    {
      title: "Nordic Folk",
      artist: "Traditional Music",
      mood: "신비로운 포크 • 설국",
      youtubeId: "RWQMg56ZVZY", // nordic music
    },
    {
      title: "Silent Night Piano",
      artist: "Winter Classics",
      mood: "고요한 밤 피아노 • 성스러운 눈",
      youtubeId: "jfKfPfyJRdk",
    },
    {
      title: "Arctic Ambient",
      artist: "Polar Soundscapes",
      mood: "북극 앰비언트 • 얼음 왕국",
      youtubeId: "MV_3Dpw-BRY",
    },
    {
      title: "Christmas Jazz",
      artist: "Holiday Jazz",
      mood: "크리스마스 재즈 • 따뜻한 겨울",
      youtubeId: "wzjWIxXBs_s",
    },
    {
      title: "Snowfall Meditation",
      artist: "Nature Sounds",
      mood: "눈 내리는 소리 • 명상적 고요",
      youtubeId: "1ZYbU82GVz4",
    },
    {
      title: "Winter Classical Suite",
      artist: "Symphony Orchestra",
      mood: "겨울 클래식 모음 • 장엄한 설경",
      youtubeId: "nTkKoD_mBmY",
    },
    {
      title: "Scandinavian Chill",
      artist: "Nordic Electronic",
      mood: "스칸디나비아 칠 • 북유럽 감성",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Ice Crystal Sounds",
      artist: "Crystalline Music",
      mood: "얼음 결정 소리 • 투명한 겨울",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Hot Chocolate Jazz",
      artist: "Cafe Winter",
      mood: "따뜻한 재즈 • 핫초콜릿과 함께",
      youtubeId: "5qap5aO4i9A",
    },
    {
      title: "Blizzard Ambient",
      artist: "Storm Sounds",
      mood: "눈폭풍 앰비언트 • 거센 겨울바람",
      youtubeId: "DWcJFNfaw9c",
    },
    {
      title: "Alpine Folk",
      artist: "Mountain Music",
      mood: "알프스 민요 • 산속 눈마을",
      youtubeId: "rUxyKA_-grg",
    },
    {
      title: "Winter Morning Piano",
      artist: "Solo Piano",
      mood: "겨울 아침 피아노 • 서리꽃 창가",
      youtubeId: "2gliGzb2_1I",
    },
    {
      title: "Siberian Winds",
      artist: "World Ambient",
      mood: "시베리아 바람 • 극한의 추위",
      youtubeId: "sTsVJ1PsnMs",
    },
    {
      title: "Snowman's Waltz",
      artist: "Children's Winter",
      mood: "눈사람 왈츠 • 동화 같은 겨울",
      youtubeId: "fBYVlFXsEME",
    },
    {
      title: "Frozen Lake",
      artist: "Minimal Classical",
      mood: "얼어붙은 호수 • 미니멀 클래식",
      youtubeId: "EKkzbbLYPuI",
    },
    {
      title: "Winter Solstice",
      artist: "Ceremonial Music",
      mood: "동지 의식 • 신성한 겨울밤",
      youtubeId: "Dq7jk1jNhqA",
    },
    {
      title: "Icicle Dreams",
      artist: "Experimental Winter",
      mood: "고드름 꿈 • 실험적 겨울 사운드",
      youtubeId: "lTRiuFIWV54",
    },
    {
      title: "Cabin in Woods",
      artist: "Rustic Acoustic",
      mood: "숲속 오두막 • 소박한 어쿠스틱",
      youtubeId: "BeQNLgqnbIc",
    },
    {
      title: "Snow Globe Music Box",
      artist: "Vintage Mechanical",
      mood: "스노우볼 오르골 • 추억의 겨울",
      youtubeId: "Dx5qFachd3A",
    },
    {
      title: "Polar Night",
      artist: "Dark Winter Ambient",
      mood: "극야 • 어두운 겨울 앰비언트",
      youtubeId: "q76bMs-NwRk",
    },
    {
      title: "Ski Slope Jazz",
      artist: "Resort Music",
      mood: "스키장 재즈 • 겨울 리조트",
      youtubeId: "jfKfPfyJRdk",
    },
    {
      title: "Winter Harp",
      artist: "Celtic Harp",
      mood: "겨울 하프 • 켈틱 선율",
      youtubeId: "MV_3Dpw-BRY",
    },
    {
      title: "Frozen Tundra",
      artist: "Arctic Expedition",
      mood: "얼어붙은 툰드라 • 극지 탐험",
      youtubeId: "wzjWIxXBs_s",
    },
    {
      title: "Christmas Eve Peace",
      artist: "Sacred Winter",
      mood: "크리스마스 이브 평화 • 성스러운 밤",
      youtubeId: "1ZYbU82GVz4",
    },
    {
      title: "Snowboard Chill",
      artist: "Winter Sports",
      mood: "스노보드 칠 • 겨울 스포츠",
      youtubeId: "nTkKoD_mBmY",
    },
    {
      title: "Ice Palace",
      artist: "Orchestral Winter",
      mood: "얼음 궁전 • 웅장한 겨울 오케스트라",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Winter Tea Ceremony",
      artist: "Asian Winter",
      mood: "겨울 다도 • 동양적 겨울 정취",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Aurora Borealis",
      artist: "Northern Lights Sound",
      mood: "오로라 • 북극광의 신비",
      youtubeId: "5qap5aO4i9A",
    },
  ],
  clouds: [
    {
      title: "Cloudy Afternoon",
      artist: "Lo-Fi Chill",
      mood: "여유로운 로파이 • 흐린 날",
      youtubeId: "jfKfPfyJRdk", // lofi study
    },
    {
      title: "Contemplative",
      artist: "Ambient Electronic",
      mood: "사색적인 앰비언트 • 구름",
      youtubeId: "lTRiuFIWV54", // ambient music
    },
    {
      title: "Dreamy Synthwave",
      artist: "Retro Electronic",
      mood: "몽환적인 신스웨이브 • 흐림",
      youtubeId: "MV_3Dpw-BRY", // synthwave
    },
    {
      title: "Overcast Jazz",
      artist: "Moody Jazz",
      mood: "흐린 날 재즈 • 차분한 분위기",
      youtubeId: "wzjWIxXBs_s",
    },
    {
      title: "Gray Sky Meditation",
      artist: "Mindful Sounds",
      mood: "회색 하늘 명상 • 고요한 마음",
      youtubeId: "1ZYbU82GVz4",
    },
    {
      title: "Cloudy Study Session",
      artist: "Study Music",
      mood: "흐린 날 공부 • 집중력 향상",
      youtubeId: "nTkKoD_mBmY",
    },
    {
      title: "Soft Rock Clouds",
      artist: "Alternative Soft",
      mood: "부드러운 록 • 구름 사이 여행",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Melancholy Piano",
      artist: "Emotional Keys",
      mood: "우울한 피아노 • 흐린 마음",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Indie Folk Clouds",
      artist: "Folk Indie",
      mood: "인디 포크 • 구름 낀 들판",
      youtubeId: "5qap5aO4i9A",
    },
    {
      title: "Nostalgic Synthpop",
      artist: "80s Revival",
      mood: "노스탤직 신스팝 • 추억의 구름",
      youtubeId: "DWcJFNfaw9c",
    },
    {
      title: "Drone Meditation",
      artist: "Deep Listening",
      mood: "드론 명상 • 구름 속 명상",
      youtubeId: "rUxyKA_-grg",
    },
    {
      title: "Cloudy Day Reading",
      artist: "Literary Sounds",
      mood: "흐린 날 독서 • 책과 함께",
      youtubeId: "2gliGzb2_1I",
    },
    {
      title: "Atmospheric Post-Rock",
      artist: "Instrumental Epic",
      mood: "대기적 포스트록 • 구름의 서사",
      youtubeId: "sTsVJ1PsnMs",
    },
    {
      title: "Minimal Techno Gray",
      artist: "Underground Minimal",
      mood: "미니멀 테크노 • 회색 도시",
      youtubeId: "fBYVlFXsEME",
    },
    {
      title: "Cloud Forest",
      artist: "Nature Ambient",
      mood: "구름 숲 • 자연 앰비언트",
      youtubeId: "EKkzbbLYPuI",
    },
    {
      title: "Twilight Clouds",
      artist: "Evening Chill",
      mood: "황혼 구름 • 저녁 칠아웃",
      youtubeId: "Dq7jk1jNhqA",
    },
    {
      title: "Dream House Clouds",
      artist: "Dream House",
      mood: "드림 하우스 • 몽환적 구름",
      youtubeId: "lTRiuFIWV54",
    },
    {
      title: "Cloudy Morning Coffee",
      artist: "Cafe Chill",
      mood: "흐린 아침 커피 • 카페 분위기",
      youtubeId: "BeQNLgqnbIc",
    },
    {
      title: "Vapor Wave Clouds",
      artist: "Vaporwave",
      mood: "베이퍼웨이브 • 레트로 구름",
      youtubeId: "Dx5qFachd3A",
    },
    {
      title: "Contemporary Classical",
      artist: "Modern Orchestra",
      mood: "현대 클래식 • 구름의 움직임",
      youtubeId: "q76bMs-NwRk",
    },
    {
      title: "Cloudy Day Reflection",
      artist: "Thoughtful Music",
      mood: "흐린 날 성찰 • 생각하는 시간",
      youtubeId: "jfKfPfyJRdk",
    },
    {
      title: "Shoegaze Afternoon",
      artist: "Dreamy Rock",
      mood: "슈게이즈 • 몽환적인 오후",
      youtubeId: "MV_3Dpw-BRY",
    },
    {
      title: "Cloudy Beach Walk",
      artist: "Coastal Sounds",
      mood: "흐린 해변 산책 • 바다와 구름",
      youtubeId: "wzjWIxXBs_s",
    },
    {
      title: "Gray Day Lullaby",
      artist: "Peaceful Melodies",
      mood: "회색 날 자장가 • 평온한 선율",
      youtubeId: "1ZYbU82GVz4",
    },
    {
      title: "Cloudy City View",
      artist: "Urban Ambient",
      mood: "흐린 도시 풍경 • 도시 앰비언트",
      youtubeId: "nTkKoD_mBmY",
    },
    {
      title: "Downtempo Clouds",
      artist: "Chill Electronic",
      mood: "다운템포 • 구름 속 여행",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Cloudy Garden",
      artist: "Nature Chill",
      mood: "흐린 정원 • 자연 속 휴식",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Overcast Film Score",
      artist: "Cinematic Music",
      mood: "흐린 영화음악 • 영화적 감성",
      youtubeId: "5qap5aO4i9A",
    },
    {
      title: "Cloud Walking",
      artist: "Ethereal Sounds",
      mood: "구름 위 걷기 • 천상의 소리",
      youtubeId: "DWcJFNfaw9c",
    },
    {
      title: "Gray Afternoon Tea",
      artist: "British Chill",
      mood: "회색 오후 차 • 영국식 여유",
      youtubeId: "rUxyKA_-grg",
    },
  ],
  fog: [
    {
      title: "Mysterious Ambience",
      artist: "Dark Ambient",
      mood: "신비로운 앰비언트 • 안개",
      youtubeId: "wzjWIxXBs_s", // dark ambient
    },
    {
      title: "Ethereal Soundscape",
      artist: "Atmospheric",
      mood: "몽환적인 사운드스케이프 • 안개",
      youtubeId: "1ZYbU82GVz4", // ethereal music
    },
    {
      title: "Foggy Morning",
      artist: "Nature & Piano",
      mood: "고요한 피아노 • 안개낀 아침",
      youtubeId: "nTkKoD_mBmY", // morning music
    },
    {
      title: "Misty Forest",
      artist: "Forest Sounds",
      mood: "안개 낀 숲 • 자연의 신비",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Fog Horn Symphony",
      artist: "Harbor Sounds",
      mood: "안개 경적 교향곡 • 항구의 밤",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Phantom Melodies",
      artist: "Ghostly Music",
      mood: "유령의 선율 • 환상적인 안개",
      youtubeId: "5qap5aO4i9A",
    },
    {
      title: "Vapor Dreams",
      artist: "Dream Ambient",
      mood: "증기 꿈 • 몽환적인 안개",
      youtubeId: "DWcJFNfaw9c",
    },
    {
      title: "Lost in Mist",
      artist: "Wandering Sounds",
      mood: "안개 속에서 길을 잃다 • 방황",
      youtubeId: "rUxyKA_-grg",
    },
    {
      title: "Foggy Lighthouse",
      artist: "Coastal Mystery",
      mood: "안개 등대 • 해안의 신비",
      youtubeId: "2gliGzb2_1I",
    },
    {
      title: "Mist Valley",
      artist: "Mountain Ambient",
      mood: "안개 계곡 • 산속의 고요",
      youtubeId: "sTsVJ1PsnMs",
    },
    {
      title: "Spectral Voices",
      artist: "Ethereal Choir",
      mood: "유령의 목소리 • 안개 속 합창",
      youtubeId: "fBYVlFXsEME",
    },
    {
      title: "Fog Drifting",
      artist: "Ambient Drift",
      mood: "안개가 흘러가다 • 부유하는 소리",
      youtubeId: "EKkzbbLYPuI",
    },
    {
      title: "Misty Lake",
      artist: "Water Sounds",
      mood: "안개 낀 호수 • 물의 신비",
      youtubeId: "Dq7jk1jNhqA",
    },
    {
      title: "Fog Bank",
      artist: "Weather Ambient",
      mood: "안개 덩어리 • 기상 앰비언트",
      youtubeId: "lTRiuFIWV54",
    },
    {
      title: "Phantom Ship",
      artist: "Maritime Mystery",
      mood: "유령선 • 바다의 전설",
      youtubeId: "BeQNLgqnbIc",
    },
    {
      title: "Misty Mountain Top",
      artist: "Alpine Ambient",
      mood: "안개 낀 산 정상 • 고산 지대",
      youtubeId: "Dx5qFachd3A",
    },
    {
      title: "Fog Whispers",
      artist: "Whispered Sounds",
      mood: "안개의 속삭임 • 신비로운 목소리",
      youtubeId: "q76bMs-NwRk",
    },
    {
      title: "Veiled Moonlight",
      artist: "Nocturnal Ambient",
      mood: "베일에 가린 달빛 • 야행성 앰비언트",
      youtubeId: "jfKfPfyJRdk",
    },
    {
      title: "Fog Machine Dreams",
      artist: "Industrial Ambient",
      mood: "안개 기계 꿈 • 산업적 앰비언트",
      youtubeId: "MV_3Dpw-BRY",
    },
    {
      title: "Shrouded Path",
      artist: "Journey Sounds",
      mood: "가려진 길 • 여행의 신비",
      youtubeId: "wzjWIxXBs_s",
    },
    {
      title: "Foggy Graveyard",
      artist: "Gothic Ambient",
      mood: "안개 낀 묘지 • 고딕 앰비언트",
      youtubeId: "1ZYbU82GVz4",
    },
    {
      title: "Mist Spirits",
      artist: "Spiritual Ambient",
      mood: "안개 정령 • 영적인 앰비언트",
      youtubeId: "nTkKoD_mBmY",
    },
    {
      title: "Foggy Bridge",
      artist: "Urban Mystery",
      mood: "안개 낀 다리 • 도시의 신비",
      youtubeId: "RWQMg56ZVZY",
    },
    {
      title: "Vapor Trail",
      artist: "Atmospheric Trail",
      mood: "증기 흔적 • 대기의 궤적",
      youtubeId: "L_LUpnjgPso",
    },
    {
      title: "Fog Rolling In",
      artist: "Weather Phenomena",
      mood: "안개가 밀려오다 • 기상 현상",
      youtubeId: "5qap5aO4i9A",
    },
    {
      title: "Misty Dawn",
      artist: "Morning Mystery",
      mood: "안개 낀 새벽 • 아침의 신비",
      youtubeId: "DWcJFNfaw9c",
    },
    {
      title: "Fog Cathedral",
      artist: "Sacred Ambient",
      mood: "안개 대성당 • 신성한 앰비언트",
      youtubeId: "rUxyKA_-grg",
    },
    {
      title: "Phantom Fog",
      artist: "Supernatural Sounds",
      mood: "유령 안개 • 초자연적 소리",
      youtubeId: "2gliGzb2_1I",
    },
    {
      title: "Fog Meditation",
      artist: "Mindful Mist",
      mood: "안개 명상 • 마음챙김 안개",
      youtubeId: "sTsVJ1PsnMs",
    },
    {
      title: "Twilight Fog",
      artist: "Evening Mist",
      mood: "황혼 안개 • 저녁 미스트",
      youtubeId: "fBYVlFXsEME",
    },
  ],
};

export function getPlaylistForWeather(condition: string): MusicTrack[] {
  return musicPlaylists[condition as keyof typeof musicPlaylists] || musicPlaylists.clear;
}

export function getRandomTrackForWeather(condition: string): MusicTrack {
  const playlist = getPlaylistForWeather(condition);
  return playlist[Math.floor(Math.random() * playlist.length)];
}
