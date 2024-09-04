import { useCallback, useEffect, useRef, useState } from "react";

type Options = {
  smoothing: number;
  fft: number;
  minDecibels: number;
  scale: number;
  glow: number;
  color1: number[];
  color2: number[];
  color3: number[];
  fillOpacity: number;
  lineWidth: number;
  blend: "screen";
  shift: number;
  width: number;
  amp: number;
};

type Props = {
  height?: string;
  isMicOn: boolean;
  mediaStream?: MediaStream | null;
};

const PrivateVMeetOnlineAudioVisualizationPageComponent = ({
  height,
  isMicOn,
  mediaStream,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [freqs, setFreqs] = useState<Uint8Array | null>(null);

  const opts: Options = {
    smoothing: 0.6,
    fft: 8,
    minDecibels: -70,
    scale: 0.2,
    glow: 10,
    color1: [203, 36, 128],
    color2: [41, 200, 192],
    color3: [24, 137, 218],
    fillOpacity: 0.6,
    lineWidth: 1,
    blend: "screen",
    shift: 50,
    width: 60,
    amp: 1,
  };

  const shuffle = [1, 3, 0, 4, 2];

  useEffect(() => {
    if (audioContext && analyser && freqs && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const visualize = () => {
        analyser.smoothingTimeConstant = opts.smoothing;
        analyser.fftSize = Math.pow(2, opts.fft);
        analyser.minDecibels = opts.minDecibels;
        analyser.maxDecibels = 0;
        analyser.getByteFrequencyData(freqs);

        canvas.width = 1000;
        canvas.height = 400;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const path = (channel: number) => {
          const colorKey = `color${channel + 1}` as keyof Options;
          const colorValue = opts[colorKey];
          let color;
          if (Array.isArray(colorValue)) {
            color = colorValue.map(Math.floor);
          } else {
            console.error(`Expected an array, but got ${typeof colorValue}`);
          }
          ctx.fillStyle = `rgba(${color}, ${opts.fillOpacity})`;
          ctx.strokeStyle = ctx.shadowColor = `rgb(${color})`;
          ctx.lineWidth = opts.lineWidth;
          ctx.shadowBlur = opts.glow;
          ctx.globalCompositeOperation = opts.blend;

          const m = canvas.height / 2;
          const offset = (canvas.width - 15 * opts.width) / 2;
          const x = Array.from(Array(15).keys()).map(
            (i) => offset + channel * opts.shift + i * opts.width
          );
          const y = Array.from(Array(5).keys()).map((i) =>
            Math.max(0, m - scale(i) * freq(channel, i))
          );

          const h = 2 * m;

          ctx.beginPath();
          ctx.moveTo(0, m);
          ctx.lineTo(x[0], m + 1);
          ctx.bezierCurveTo(x[1], m + 1, x[2], y[0], x[3], y[0]);
          ctx.bezierCurveTo(x[4], y[0], x[4], y[1], x[5], y[1]);
          ctx.bezierCurveTo(x[6], y[1], x[6], y[2], x[7], y[2]);
          ctx.bezierCurveTo(x[8], y[2], x[8], y[3], x[9], y[3]);
          ctx.bezierCurveTo(x[10], y[3], x[10], y[4], x[11], y[4]);
          ctx.bezierCurveTo(x[12], y[4], x[12], m, x[13], m);
          ctx.lineTo(1000, m + 1);
          ctx.lineTo(x[13], m - 1);

          ctx.bezierCurveTo(x[12], m, x[12], h - y[4], x[11], h - y[4]);
          ctx.bezierCurveTo(x[10], h - y[4], x[10], h - y[3], x[9], h - y[3]);
          ctx.bezierCurveTo(x[8], h - y[3], x[8], h - y[2], x[7], h - y[2]);
          ctx.bezierCurveTo(x[6], h - y[2], x[6], h - y[1], x[5], h - y[1]);
          ctx.bezierCurveTo(x[4], h - y[1], x[4], h - y[0], x[3], h - y[0]);
          ctx.bezierCurveTo(x[2], h - y[0], x[1], m, x[0], m);

          ctx.lineTo(0, m);
          ctx.fill();
          ctx.stroke();
        };

        const freq = (channel: number, i: number) => {
          const band = 2 * channel + shuffle[i] * 6;
          return freqs[band];
        };

        const scale = (i: number) => {
          const x = Math.abs(2 - i);
          const s = 3 - x;
          return (s / 3) * opts.amp;
        };

        path(0);
        path(1);
        path(2);

        requestAnimationFrame(visualize);
      };

      requestAnimationFrame(visualize);
    }

    return () => {
      // Ensure that the audio context is still open before closing it
      if (audioContext && audioContext.state !== "closed") {
        audioContext.close();
      }
    };
  }, [audioContext, analyser, freqs, opts, shuffle]);

  const startVisualization = useCallback(() => {
    if (!audioContext) {
      const context = new AudioContext();
      const analyser = context.createAnalyser();
      const freqs = new Uint8Array(analyser.frequencyBinCount);

      setAudioContext(context);
      setAnalyser(analyser);
      setFreqs(freqs);

      if (mediaStream) {
        const input = context.createMediaStreamSource(mediaStream);
        input.connect(analyser);
      } else {
        console.error("No mediaStream provided");
      }
    }
  }, [audioContext, mediaStream]);

  useEffect(() => {
    if (isMicOn) {
      startVisualization();
    } else {
      if (audioContext && audioContext.state !== "closed") {
        audioContext.close();
        setAudioContext(null);
        setAnalyser(null);
        setFreqs(null);
      }
    }
  }, [isMicOn, startVisualization, audioContext]);

  return isMicOn ? (
    <canvas
      ref={canvasRef}
      className={`w-full ${height ? height : "h-12"}`}
    ></canvas>
  ) : null;
};

export default PrivateVMeetOnlineAudioVisualizationPageComponent;
