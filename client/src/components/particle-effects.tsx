import { useEffect, useRef } from 'react';

interface ParticleEffectsProps {
  condition: string;
  intensity?: number;
}

export function ParticleEffects({ condition, intensity = 1 }: ParticleEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 시간대 확인 (밤인지)
    const isNight = () => {
      const hour = new Date().getHours();
      return hour >= 19 || hour < 6;
    };

    // 날씨별 파티클 설정
    const getParticleConfig = (condition: string) => {
      switch (condition) {
        case 'rainy':
        case 'drizzle':
          return {
            count: Math.floor(120 * intensity),
            type: 'rain',
            color: 'rgba(135, 206, 235, 0.7)',
            speed: 10,
            size: { min: 1, max: 2 },
            length: { min: 8, max: 15 }
          };
        case 'snow':
          return {
            count: Math.floor(60 * intensity),
            type: 'snow',
            color: 'rgba(255, 255, 255, 0.9)',
            speed: 2,
            size: { min: 2, max: 5 }
          };
        case 'fog':
          return {
            count: Math.floor(25 * intensity),
            type: 'fog',
            color: 'rgba(220, 220, 220, 0.4)',
            speed: 0.8,
            size: { min: 25, max: 50 }
          };
        case 'windy':
          return {
            count: Math.floor(35 * intensity),
            type: 'dust',
            color: 'rgba(139, 134, 130, 0.5)',
            speed: 6,
            size: { min: 1, max: 2 }
          };
        case 'thunderstorm':
          return {
            count: Math.floor(150 * intensity),
            type: 'storm',
            color: 'rgba(70, 130, 180, 0.8)',
            speed: 15,
            size: { min: 1, max: 3 },
            length: { min: 10, max: 20 }
          };
        case 'clear':
        case 'sunny':
        case 'partly_cloudy':
        case 'cloudy':
        default:
          // 밤이면 반딧불이, 낮이면 미세한 스파클
          if (isNight()) {
            return {
              count: Math.floor(15 * intensity),
              type: 'firefly',
              color: 'rgba(255, 255, 100, 0.8)',
              speed: 0.5,
              size: { min: 2, max: 3 }
            };
          } else {
            return {
              count: Math.floor(10 * intensity),
              type: 'sparkle',
              color: 'rgba(255, 255, 255, 0.2)',
              speed: 0.3,
              size: { min: 1, max: 1.5 }
            };
          }
      }
    };

    const config = getParticleConfig(condition);
    
    // 파티클 초기화
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < config.count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: config.speed + Math.random() * 2,
          size: config.size.min + Math.random() * (config.size.max - config.size.min),
          opacity: Math.random() * 0.8 + 0.2,
          life: Math.random()
        });
      }
    };

    // 파티클 애니메이션
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // 파티클 이동
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.01;

        // 파티클 타입별 특수 효과
        if (config.type === 'rain' || config.type === 'storm') {
          particle.y += config.speed + Math.random() * 2;
          particle.x += Math.sin(particle.life * 0.5) * 0.5; // 약간의 바람 효과
          if (particle.y > canvas.height) {
            particle.y = -(config.length?.max || 10);
            particle.x = Math.random() * canvas.width;
          }
        } else if (config.type === 'snow') {
          particle.y += config.speed;
          particle.x += Math.sin(particle.life) * 0.8;
          particle.opacity = 0.6 + Math.sin(particle.life * 2) * 0.3;
          if (particle.y > canvas.height) {
            particle.y = -10;
            particle.x = Math.random() * canvas.width;
          }
        } else if (config.type === 'fog') {
          particle.x += Math.sin(particle.life * 0.5) * 0.8;
          particle.y += Math.cos(particle.life * 0.3) * 0.5;
          particle.opacity = 0.1 + Math.sin(particle.life * 0.8) * 0.15;
        } else if (config.type === 'dust' || config.type === 'windy') {
          particle.x += config.speed + Math.sin(particle.life * 0.8) * 3;
          particle.y += Math.cos(particle.life * 0.6) * 1.5;
          particle.opacity = 0.3 + Math.sin(particle.life * 1.5) * 0.2;
          if (particle.x > canvas.width) {
            particle.x = -10;
            particle.y = Math.random() * canvas.height;
          }
        } else if (config.type === 'firefly') {
          // 반딧불이 효과
          particle.x += Math.sin(particle.life * 0.3) * 1.5;
          particle.y += Math.cos(particle.life * 0.4) * 1.2;
          particle.opacity = 0.3 + Math.sin(particle.life * 8) * 0.6; // 깜빡임 효과
          particle.size = config.size.min + Math.sin(particle.life * 6) * (config.size.max - config.size.min);
          
          // 화면 경계에서 반사
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        } else if (config.type === 'sparkle') {
          particle.opacity = 0.1 + Math.sin(particle.life * 4) * 0.15;
          particle.size = config.size.min + Math.sin(particle.life * 3) * (config.size.max - config.size.min);
          particle.x += Math.sin(particle.life * 0.2) * 0.3;
          particle.y += Math.cos(particle.life * 0.15) * 0.2;
        }

        // 파티클 그리기
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        if (config.type === 'rain' || config.type === 'storm') {
          // 실제 빗방울처럼 - 긴 선으로 그리기
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y,
            particle.x - 1, particle.y - (config.length?.min || 8)
          );
          gradient.addColorStop(0, config.color);
          gradient.addColorStop(1, 'rgba(135, 206, 235, 0)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = particle.size * 0.8;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - 1, particle.y - (config.length?.min || 8) - Math.random() * 5);
          ctx.stroke();
        } else if (config.type === 'firefly') {
          // 반딧불이 효과 - 빛나는 원
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
          );
          gradient.addColorStop(0, config.color);
          gradient.addColorStop(0.5, 'rgba(255, 255, 100, 0.3)');
          gradient.addColorStop(1, 'rgba(255, 255, 100, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // 중심 밝은 점
          ctx.fillStyle = config.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (config.type === 'snow') {
          // 눈송이 효과
          ctx.fillStyle = config.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // 눈송이 패턴
          ctx.strokeStyle = config.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size, particle.y);
          ctx.lineTo(particle.x + particle.size, particle.y);
          ctx.moveTo(particle.x, particle.y - particle.size);
          ctx.lineTo(particle.x, particle.y + particle.size);
          ctx.stroke();
        } else {
          // 기본 원형 파티클
          ctx.fillStyle = config.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();

        // 경계를 벗어난 파티클 재설정
        if (particle.x < -50 || particle.x > canvas.width + 50 || 
            particle.y < -50 || particle.y > canvas.height + 50) {
          particle.x = Math.random() * canvas.width;
          particle.y = -10;
          particle.life = 0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [condition, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}