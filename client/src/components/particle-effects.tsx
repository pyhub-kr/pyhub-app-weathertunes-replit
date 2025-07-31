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

    // 날씨별 파티클 설정
    const getParticleConfig = (condition: string) => {
      switch (condition) {
        case 'rainy':
        case 'drizzle':
          return {
            count: Math.floor(100 * intensity),
            type: 'rain',
            color: 'rgba(173, 216, 230, 0.6)',
            speed: 8,
            size: { min: 1, max: 3 }
          };
        case 'snow':
          return {
            count: Math.floor(50 * intensity),
            type: 'snow',
            color: 'rgba(255, 255, 255, 0.8)',
            speed: 2,
            size: { min: 2, max: 5 }
          };
        case 'fog':
          return {
            count: Math.floor(30 * intensity),
            type: 'fog',
            color: 'rgba(200, 200, 200, 0.3)',
            speed: 1,
            size: { min: 20, max: 40 }
          };
        case 'windy':
          return {
            count: Math.floor(40 * intensity),
            type: 'dust',
            color: 'rgba(139, 134, 130, 0.4)',
            speed: 5,
            size: { min: 1, max: 2 }
          };
        case 'thunderstorm':
          return {
            count: Math.floor(80 * intensity),
            type: 'storm',
            color: 'rgba(70, 130, 180, 0.7)',
            speed: 12,
            size: { min: 2, max: 4 }
          };
        default:
          return {
            count: Math.floor(20 * intensity),
            type: 'sparkle',
            color: 'rgba(255, 255, 255, 0.3)',
            speed: 1,
            size: { min: 1, max: 2 }
          };
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
          particle.y += config.speed;
          if (particle.y > canvas.height) {
            particle.y = -10;
            particle.x = Math.random() * canvas.width;
          }
        } else if (config.type === 'snow') {
          particle.y += config.speed;
          particle.x += Math.sin(particle.life) * 0.5;
          if (particle.y > canvas.height) {
            particle.y = -10;
            particle.x = Math.random() * canvas.width;
          }
        } else if (config.type === 'fog') {
          particle.x += Math.sin(particle.life) * 0.5;
          particle.y += Math.cos(particle.life) * 0.3;
          particle.opacity = 0.1 + Math.sin(particle.life) * 0.1;
        } else if (config.type === 'dust' || config.type === 'windy') {
          particle.x += config.speed + Math.sin(particle.life) * 2;
          particle.y += Math.cos(particle.life) * 1;
          if (particle.x > canvas.width) {
            particle.x = -10;
            particle.y = Math.random() * canvas.height;
          }
        } else if (config.type === 'sparkle') {
          particle.opacity = 0.2 + Math.sin(particle.life * 3) * 0.3;
          particle.size = config.size.min + Math.sin(particle.life * 2) * (config.size.max - config.size.min);
        }

        // 파티클 그리기
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = config.color;
        
        if (config.type === 'rain' || config.type === 'storm') {
          // 빗방울 - 선으로 그리기
          ctx.strokeStyle = config.color;
          ctx.lineWidth = particle.size;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - 2, particle.y - 10);
          ctx.stroke();
        } else {
          // 원형 파티클
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