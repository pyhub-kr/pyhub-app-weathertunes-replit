// Time-based background system
export type TimeOfDay = 
  | 'dawn'        // 새벽 (5-6시)
  | 'sunrise'     // 해뜰녘 (6-7시)
  | 'morning'     // 아침 (7-9시)
  | 'forenoon'    // 오전 (9-12시)
  | 'noon'        // 정오 (12-14시)
  | 'afternoon'   // 오후 (14-17시)
  | 'evening'     // 늦은 오후 (17-19시)
  | 'sunset'      // 해질녘 (19-20시)
  | 'night';      // 어두운 밤 (20-5시)

export function getTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 6) return 'dawn';
  if (hour >= 6 && hour < 7) return 'sunrise';
  if (hour >= 7 && hour < 9) return 'morning';
  if (hour >= 9 && hour < 12) return 'forenoon';
  if (hour >= 12 && hour < 14) return 'noon';
  if (hour >= 14 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 19) return 'evening';
  if (hour >= 19 && hour < 20) return 'sunset';
  return 'night'; // 20-5시
}

export type WeatherCondition = 'clear' | 'clouds' | 'rain' | 'snow' | 'thunderstorm' | 'fog' | 'default';

// Multiple background options for each time and weather condition
export const timeWeatherBackgrounds = {
  // 새벽 (5-6시)
  dawn: {
    clear: [
      'linear-gradient(135deg, #2D1B69 0%, #11998e 50%, #38ef7d 100%)',
      'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      'linear-gradient(135deg, #4b79a1 0%, #283e51 50%, #0a0e27 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #414345 0%, #232526 50%, #2D1B69 100%)',
      'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #4a5568 100%)',
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #2980B9 100%)',
      'linear-gradient(135deg, #3a5998 0%, #5477ba 50%, #7bb3db 100%)',
      'linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #E6DADA 0%, #274046 50%, #1E3C72 100%)',
      'linear-gradient(135deg, #e0eafc 0%, #cfdef3 50%, #a8edea 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #d7dde8 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #373B44 0%, #4286f4 50%, #1E3C72 100%)',
      'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #000000 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #1c1c1c 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #606c88 0%, #3f4c6b 50%, #2C3E50 100%)',
      'linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #d3cce3 0%, #e9e4f0 50%, #a8caba 100%)'
    ],
    default: [
      'linear-gradient(135deg, #2D1B69 0%, #11998e 50%, #38ef7d 100%)',
      'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      'linear-gradient(135deg, #4b79a1 0%, #283e51 50%, #0a0e27 100%)'
    ]
  },
  
  // 해뜰녘 (6-7시)
  sunrise: {
    clear: [
      'linear-gradient(135deg, #FF512F 0%, #F09819 50%, #FFEF94 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffecd2 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #95E1D3 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #a8edea 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #3E5151 0%, #DECBA4 50%, #A8EDEA 100%)',
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #a8edea 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #667eea 50%, #ffecd2 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #FFECD2 0%, #FCB69F 50%, #A8EDEA 100%)',
      'linear-gradient(135deg, #e0eafc 0%, #cfdef3 50%, #ffecd2 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #a8edea 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #757F9A 0%, #D7DDE8 50%, #FF512F 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #ff512f 100%)',
      'linear-gradient(135deg, #434343 0%, #000000 50%, #fa8072 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 50%, #FFECD2 100%)',
      'linear-gradient(135deg, #d3cce3 0%, #e9e4f0 50%, #a8edea 100%)',
      'linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 50%, #fed6e3 100%)'
    ],
    default: [
      'linear-gradient(135deg, #FF512F 0%, #F09819 50%, #FFEF94 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffecd2 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)'
    ]
  },
  
  // 아침 (7-9시)
  morning: {
    clear: [
      'linear-gradient(135deg, #FFE53B 0%, #FF2525 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #00c9ff 0%, #92fe9d 50%, #ffe53b 100%)',
      'linear-gradient(135deg, #56ccf2 0%, #2f80ed 50%, #ffd200 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #F7971E 0%, #FFD200 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #ffd200 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #f7971e 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #5C258D 0%, #4389A2 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #667eea 50%, #4389a2 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #e0eafc 0%, #cfdef3 50%, #ffffff 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #2980B9 100%)',
      'linear-gradient(135deg, #434343 0%, #000000 50%, #2c3e50 100%)',
      'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #485563 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #D3CCE3 0%, #E9E4F0 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #d3cce3 100%)'
    ],
    default: [
      'linear-gradient(135deg, #FFE53B 0%, #FF2525 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #00c9ff 0%, #92fe9d 50%, #ffe53b 100%)',
      'linear-gradient(135deg, #56ccf2 0%, #2f80ed 50%, #ffd200 100%)'
    ]
  },
  
  // 오전 (9-12시)
  forenoon: {
    clear: [
      'linear-gradient(135deg, #56CCF2 0%, #2F80ED 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #00c9ff 0%, #92fe9d 50%, #56ccf2 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #2f80ed 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #ddd6fe 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ddd6fe 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #a8caba 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #667eea 50%, #a8caba 100%)',
      'linear-gradient(135deg, #5c258d 0%, #4389a2 50%, #667eea 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 50%, #ffffff 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #e0eafc 100%)',
      'linear-gradient(135deg, #ffffff 0%, #e0eafc 50%, #cfdef3 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #434343 0%, #000000 50%, #2980B9 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #2c3e50 100%)',
      'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #434343 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #C9D6FF 0%, #E2E2E2 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #d3cce3 0%, #e9e4f0 50%, #c9d6ff 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #e2e2e2 100%)'
    ],
    default: [
      'linear-gradient(135deg, #56CCF2 0%, #2F80ED 50%, #87CEEB 100%)',
      'linear-gradient(135deg, #00c9ff 0%, #92fe9d 50%, #56ccf2 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #2f80ed 100%)'
    ]
  },
  
  // 정오 (12-14시)
  noon: {
    clear: [
      'linear-gradient(135deg, #00C9FF 0%, #92FE9D 50%, #FFE53B 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
      'linear-gradient(135deg, #56ccf2 0%, #2f80ed 50%, #92fe9d 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #a8edea 100%)',
      'linear-gradient(135deg, #fed6e3 0%, #a8edea 50%, #ddd6fe 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6c5ce7 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #667eea 50%, #6c5ce7 100%)',
      'linear-gradient(135deg, #5c258d 0%, #4389a2 50%, #764ba2 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #FDFCFB 0%, #E2D1C3 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #e0eafc 0%, #cfdef3 50%, #fdfcfb 100%)',
      'linear-gradient(135deg, #ffffff 0%, #e2d1c3 50%, #a8edea 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #3498DB 100%)',
      'linear-gradient(135deg, #434343 0%, #000000 50%, #2c3e50 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #3498db 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #E4E5E6 0%, #00416A 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 50%, #e4e5e6 100%)',
      'linear-gradient(135deg, #d3cce3 0%, #e9e4f0 50%, #00416a 100%)'
    ],
    default: [
      'linear-gradient(135deg, #00C9FF 0%, #92FE9D 50%, #FFE53B 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
      'linear-gradient(135deg, #56ccf2 0%, #2f80ed 50%, #92fe9d 100%)'
    ]
  },
  
  // 오후 (14-17시)
  afternoon: {
    clear: [
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
      'linear-gradient(135deg, #00c9ff 0%, #92fe9d 50%, #4facfe 100%)',
      'linear-gradient(135deg, #56ccf2 0%, #2f80ed 50%, #43e97b 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #a8caba 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #667eea 50%, #a8caba 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #764ba2 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #636fa4 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #667eea 50%, #636fa4 100%)',
      'linear-gradient(135deg, #5c258d 0%, #4389a2 50%, #764ba2 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 50%, #a8caba 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #a8caba 100%)',
      'linear-gradient(135deg, #ffffff 0%, #e0eafc 50%, #cfdef3 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #2C3E50 0%, #3498DB 50%, #636fa4 100%)',
      'linear-gradient(135deg, #434343 0%, #000000 50%, #2c3e50 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #3498db 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #C9D6FF 0%, #E2E2E2 50%, #a8caba 100%)',
      'linear-gradient(135deg, #d3cce3 0%, #e9e4f0 50%, #c9d6ff 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #e2e2e2 100%)'
    ],
    default: [
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
      'linear-gradient(135deg, #00c9ff 0%, #92fe9d 50%, #4facfe 100%)',
      'linear-gradient(135deg, #56ccf2 0%, #2f80ed 50%, #43e97b 100%)'
    ]
  },
  
  // 늦은 오후 (17-19시)
  evening: {
    clear: [
      'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #f093fb 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #f5576c 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #fed6e3 0%, #a8edea 50%, #ffecd2 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #667eea 50%, #5c258d 100%)',
      'linear-gradient(135deg, #636fa4 0%, #667eea 50%, #764ba2 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #ffffff 0%, #e0eafc 50%, #cfdef3 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #434343 0%, #000000 50%, #667eea 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #434343 100%)',
      'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #667eea 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #D3CCE3 0%, #E9E4F0 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 50%, #d3cce3 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #e9e4f0 100%)'
    ],
    default: [
      'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #f093fb 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #f5576c 100%)'
    ]
  },
  
  // 해질녘 (19-20시)
  sunset: {
    clear: [
      'linear-gradient(135deg, #FA8072 0%, #FF6347 50%, #FF4500 100%)',
      'linear-gradient(135deg, #ff512f 0%, #f09819 50%, #fa8072 100%)',
      'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #ff4500 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)',
      'linear-gradient(135deg, #fed6e3 0%, #a8edea 50%, #fecfef 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #FA8072 100%)',
      'linear-gradient(135deg, #74b9ff 0%, #667eea 50%, #ff6347 100%)',
      'linear-gradient(135deg, #5c258d 0%, #4389a2 50%, #fa8072 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #FFECD2 0%, #FCB69F 50%, #FA8072 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #ffecd2 100%)',
      'linear-gradient(135deg, #e0eafc 0%, #cfdef3 50%, #fcb69f 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #FA8072 100%)',
      'linear-gradient(135deg, #434343 0%, #000000 50%, #ff6347 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #fa8072 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #FA8072 100%)',
      'linear-gradient(135deg, #fed6e3 0%, #a8edea 50%, #ffecd2 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fcb69f 100%)'
    ],
    default: [
      'linear-gradient(135deg, #FA8072 0%, #FF6347 50%, #FF4500 100%)',
      'linear-gradient(135deg, #ff512f 0%, #f09819 50%, #fa8072 100%)',
      'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #ff4500 100%)'
    ]
  },
  
  // 어두운 밤 (20-5시) - 별빛 가득한 밤하늘, 도시 야경, 모닥불 등
  night: {
    clear: [
      // 별이 가득한 밤하늘
      'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%), radial-gradient(ellipse at top, #0c1445, transparent 50%), radial-gradient(ellipse 200% 50% at 50% 0%, #663dff 0%, transparent 50%)',
      // 도시 야경 느낌
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      // 따뜻한 모닥불 야경
      'linear-gradient(135deg, #ff7b7b 0%, #667eea 30%, #1a1a2e 70%, #0c0c0c 100%)',
      // 오로라 같은 밤하늘
      'linear-gradient(135deg, #2d1b69 0%, #11998e 30%, #38ef7d 60%, #0c3483 100%)',
      // 달빛이 비치는 밤
      'linear-gradient(135deg, #232526 0%, #414345 50%, #6b73ff 100%)'
    ],
    clouds: [
      'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #4A6741 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #667eea 100%)',
      'linear-gradient(135deg, #434343 0%, #000000 50%, #2c3e50 100%)'
    ],
    rain: [
      'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
      'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      'linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%)'
    ],
    snow: [
      'linear-gradient(135deg, #283048 0%, #859398 50%, #0F2027 100%)',
      'linear-gradient(135deg, #e0eafc 0%, #cfdef3 50%, #74b9ff 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #a8edea 100%)'
    ],
    thunderstorm: [
      'linear-gradient(135deg, #000000 0%, #434343 50%, #2C3E50 100%)',
      'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #000000 100%)',
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #1c1c1c 100%)'
    ],
    fog: [
      'linear-gradient(135deg, #485563 0%, #29323c 50%, #2C3E50 100%)',
      'linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 50%, #485563 100%)',
      'linear-gradient(135deg, #d3cce3 0%, #e9e4f0 50%, #29323c 100%)'
    ],
    default: [
      // 기본 - 별이 가득한 밤하늘
      'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%), radial-gradient(ellipse at top, #0c1445, transparent 50%), radial-gradient(ellipse 200% 50% at 50% 0%, #663dff 0%, transparent 50%)',
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      'linear-gradient(135deg, #ff7b7b 0%, #667eea 30%, #1a1a2e 70%, #0c0c0c 100%)'
    ]
  }
};

export function getTimeWeatherBackground(weather?: WeatherCondition, index: number = 0): string {
  const timeOfDay = getTimeOfDay();
  const condition = weather || 'default';
  
  const backgrounds = timeWeatherBackgrounds[timeOfDay][condition] || 
                     timeWeatherBackgrounds[timeOfDay].default;
  
  return backgrounds[index % backgrounds.length];
}

export function getBackgroundCount(weather?: WeatherCondition): number {
  const timeOfDay = getTimeOfDay();
  const condition = weather || 'default';
  
  const backgrounds = timeWeatherBackgrounds[timeOfDay][condition] || 
                     timeWeatherBackgrounds[timeOfDay].default;
  
  return backgrounds.length;
}

export function getTimeDisplayName(timeOfDay?: TimeOfDay): string {
  const time = timeOfDay || getTimeOfDay();
  
  const names = {
    dawn: '새벽',
    sunrise: '해뜰녘',
    morning: '아침',
    forenoon: '오전',
    noon: '정오',
    afternoon: '오후',
    evening: '늦은 오후',
    sunset: '해질녘',
    night: '밤'
  };
  
  return names[time];
}