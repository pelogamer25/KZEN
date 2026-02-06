import React, { useEffect, useRef } from 'react';

const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    // Significantly increased count for "enveloping" feel
    const particleCount = window.innerWidth < 768 ? 50 : 150; 

    // Sakura Color Palette
    const colors = [
      '255, 183, 197', // Classic Sakura Pink
      '255, 192, 203', // Light Pink
      '255, 240, 245', // Lavender Blush
      '255, 250, 250', // Snow White
      '255, 228, 225'  // Misty Rose
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      color: string;
      swayFrequency: number;
      swayAmplitude: number;
      time: number;
      type: 'petal' | 'leaf';
      flipSpeed: number;
      flip: number;

      constructor() {
        this.type = Math.random() > 0.95 ? 'leaf' : 'petal'; // Mostly petals
        this.x = Math.random() * width;
        this.y = Math.random() * height - height; // Start off-screen
        this.size = Math.random() * 8 + 6;
        
        // Physics
        this.speedY = Math.random() * 1.5 + 0.5; // Fall speed
        this.speedX = Math.random() * 0.5 - 0.25; // Wind drift
        
        // Rotation
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        
        // 3D Flip simulation
        this.flip = 0;
        this.flipSpeed = Math.random() * 0.03 + 0.01;

        this.opacity = Math.random() * 0.4 + 0.4;
        
        // Sway motion (Sine wave)
        this.swayFrequency = Math.random() * 0.02 + 0.005;
        this.swayAmplitude = Math.random() * 30 + 10;
        this.time = Math.random() * 1000;

        // Color assignment
        if (this.type === 'leaf') {
             this.color = '130, 150, 130'; // Muted sage green
        } else {
             this.color = colors[Math.floor(Math.random() * colors.length)];
        }
      }

      update() {
        this.time++;
        this.y += this.speedY;
        
        // Complex swaying motion
        this.x += Math.sin(this.time * this.swayFrequency) * 0.5 + this.speedX;
        
        // Rotation and Flip
        this.rotation += this.rotationSpeed;
        this.flip += this.flipSpeed;

        // Wrap around screen
        if (this.y > height + 20) {
          this.y = -20;
          this.x = Math.random() * width;
        }
        if (this.x > width + 20) this.x = -20;
        if (this.x < -20) this.x = width + 20;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        
        // Simulate 3D tumbling by scaling Y axis based on sine wave
        const scaleY = Math.cos(this.flip);
        ctx.scale(1, scaleY);

        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.beginPath();

        if (this.type === 'petal') {
            // Draw specialized Sakura Petal Shape (Notched top)
            ctx.moveTo(0, this.size);
            ctx.bezierCurveTo(-this.size, 0, -this.size/2, -this.size, 0, -this.size * 0.6); // Left curve
            ctx.bezierCurveTo(this.size/2, -this.size, this.size, 0, 0, this.size); // Right curve
        } else {
            // Draw simple leaf shape
            ctx.moveTo(0, -this.size);
            ctx.quadraticCurveTo(this.size * 0.8, 0, 0, this.size);
            ctx.quadraticCurveTo(-this.size * 0.8, 0, 0, -this.size);
        }

        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // z-20 puts it above standard content (z-10) but below nav (z-50), creating an "enveloping" feel
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[20]" 
    />
  );
};

export default FloatingParticles;
