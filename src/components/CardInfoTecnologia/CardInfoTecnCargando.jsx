/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import './CardInfoTecnCargando.css';

function CardInfoTecnCargando({ id }) {
  const intervalRef = useRef(null);

  useEffect(() => {
    const gradient = document.getElementById(`gradient-${id}`);

    if (gradient) {
      const animateGradient = () => {
        let offset = 0;

        // Limpiar el intervalo existente si lo hay
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
          if (offset < -160) {
            offset = 100;
          }
          offset -= 1;
          gradient.setAttribute('x1', `${offset}%`);
          gradient.setAttribute('x2', `${offset + 100}%`);
        }, 5);
      };

      animateGradient();
    }

    // Limpiar el intervalo al desmontar el componente
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [id]);

  return (
    <div className='cont-cardInfo-cargando'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.91 254.38">
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#adacac" />
            <stop offset="50%" stopColor="#8DEDED" />
            <stop offset="70%" stopColor="#adacac" />
          </linearGradient>
        </defs>
        <path fill={`url(#gradient-${id})`} d="M215.28,55.05L125.61,3.37a25.22,25.22,0,0,0-25.36.1L12.45,55A25.24,25.24,0,0,0,0,76.77v99.35a25.23,25.23,0,0,0,12.36,21.7l89.47,53a25.2,25.2,0,0,0,24.6.63l88-46.32a25.22,25.22,0,0,0,13.47-22.32V76.91A25.23,25.23,0,0,0,215.28,55.05Zm.32,121.78a22.51,22.51,0,0,1-12,19.91l-78.5,41.31a22.47,22.47,0,0,1-21.94-.56l-79.8-47.3a22.49,22.49,0,0,1-11-19.35V82.22a22.5,22.5,0,0,1,11.11-19.4l78.31-46a22.48,22.48,0,0,1,22.62-.09l80,46.1A22.51,22.51,0,0,1,215.6,82.34Z"/>
        <path fill={`url(#gradient-${id})`} d="M173.63,80a17.4,17.4,0,0,0-1.94-8.31c-3.65-6.84-9.54-9.81-17.14-9.81H71.92a20.51,20.51,0,0,0-6.38.8c-8.16,2.72-12.73,9.09-12.73,17.7q0,20.92,0,41.85t0,42.06a19,19,0,0,0,1.75,8.36c3.59,7.43,9.86,10.12,17.76,10.11,27.26-.05,54.52,0,81.77-.05a27.76,27.76,0,0,0,6.63-.68A17.31,17.31,0,0,0,173.62,165Q173.7,122.51,173.63,80Zm-60.42,76.83a8.4,8.4,0,0,1-8.64-8.72,8.64,8.64,0,0,1,17.28,0A8.37,8.37,0,0,1,113.21,156.84Zm18-39.42c-2.82,2.74-6.42,4.3-9.8,6.18a3.89,3.89,0,0,0-2.14,2.73,6,6,0,0,1-6,4.64,6.14,6.14,0,0,1-6.12-4.75c-1.51-6-.25-9,5-12.19,3-1.8,6-3.58,9-5.41,2.4-1.46,3-2.78,2.42-4.91-.65-2.34-2.48-2.76-4.53-2.76-4.67,0-9.35,0-14,0a3.08,3.08,0,0,0-3.16,2c-1.64,3.48-5.13,4.87-8.15,3.47-3.92-1.81-5.29-4.9-3.7-8.8,2.53-6.18,7.19-9.5,13.88-9.82,2.65-.12,5.32,0,8,0h0c2.52,0,5,0,7.55,0,7.69.14,15,5.16,16.82,12.88C137.93,107.29,135.94,112.78,131.18,117.42Z"/>
      </svg>

      <div className='cont-text-descriptivo'>
        <span className='cont-text-superior'></span>
      </div>
      <div className='cont-text-descriptivo'>
        <span className='cont-text-inferior'></span>
      </div>
    </div>
  );
}

export default CardInfoTecnCargando;
