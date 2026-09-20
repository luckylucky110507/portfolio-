import React, { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'

/* ── Profile data ── */
const profile = {
  name: 'Lucky Kumari',
  bio: "I am a B.Tech Computer Science student with a strong interest in Artificial Intelligence and Machine Learning. I enjoy building intelligent systems that solve real-world problems using Python, SQL, NLP, and Machine Learning. My journey includes developing predictive models, recommendation systems, NLP applications, and data-driven solutions while continuously improving my problem-solving and software engineering skills. I am passionate about learning emerging AI technologies and contributing to impactful products.",
  email: 'kumarilucky01437@gmail.com',
  phone: '+91-7827843321',
  linkedin: 'https://www.linkedin.com/in/lucky-kumari-3b83a2364',
  github: 'https://github.com/luckylucky110507',
  instagram: 'https://www.instagram.com/k11_lucky',
  location: 'Delhi/NCR, India',
  resumeUrl: 'Resume Lucky.pdf',
  photo: '/profile.jpeg',
}

/* ── Scroll-reveal hook ── */
function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold: 0.12, ...options })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

/* ── Animated section wrapper ── */
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal ${inView ? 'revealed' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ── Currently Exploring ── */
const exploring = [
  {
    name: 'Deep Learning', color: '#ff6b35', bg: '#4d1f0a',
    logo: <svg viewBox="0 0 24 24"><path fill="#ff6b35" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
  },
  {
    name: 'OpenCV', color: '#5b9bd5', bg: '#1a2f42',
    logo: <svg viewBox="0 0 24 24"><path fill="#5b9bd5" d="M3 5v14h18V5H3zm2 2h14v10H5V7zm4 2v4h2v-4H9zm3 0v4h2v-4h-2zm3 0v4h2v-4h-2z" /></svg>
  },
  {
    name: 'MLOps', color: '#2eb67d', bg: '#0f3d25',
    logo: <svg viewBox="0 0 24 24"><path fill="#2eb67d" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4.04v9.78c0 4.42-2.84 8.54-7 10.08-4.16-1.54-7-5.66-7-10.08V8.22l6-4.04zM8 11.5h8v2H8z" /></svg>
  },
  {
    name: 'Generative AI', color: '#9370db', bg: '#3d1a5c',
    logo: <svg viewBox="0 0 24 24"><path fill="#9370db" d="M13 13h-2v-2h2v2zm-4 6h2v-2h-2v2zm4-6h2v-2h-2v2zm4 6h2v-2h-2v2zm0-6h2v-2h-2v2zm-8-6h2V5h-2v2zm8 0h2V5h-2v2zM8 5h2V3H8v2zm8 18h2v-2h-2v2zm-12 0h2v-2H4v2z" /></svg>
  },
  {
    name: 'Computer Vision', color: '#f39c12', bg: '#4a2600',
    logo: <svg viewBox="0 0 24 24"><path fill="#f39c12" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
  },
  {
    name: 'Transformers', color: '#e74c3c', bg: '#4a1a1a',
    logo: <svg viewBox="0 0 24 24"><path fill="#e74c3c" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V5h2v12zm4 0h-2v-5h2v5z" /></svg>
  },
  {
    name: 'Reinforcement Learning', color: '#1abc9c', bg: '#0d3d35',
    logo: <svg viewBox="0 0 24 24"><path fill="#1abc9c" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
  },
  {
    name: 'LLM Fine-tuning', color: '#3498db', bg: '#0d1f3d',
    logo: <svg viewBox="0 0 24 24"><path fill="#3498db" d="M19 2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18H7v-2h7v2zm5-4H5V4h14v12z" /></svg>
  },
]

/* ── Skills ── */
const skills = [
  {
    name: 'Python', color: '#3776ab', bg: '#1e3a5f',
    logo: <svg viewBox="0 0 24 24"><path fill="#3776ab" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.02.08.02zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" /><path fill="#ffd43b" d="M9.38 7.45h5.84v.83H9.38z" /></svg>
  },
  {
    name: 'Machine Learning', color: '#a855f7', bg: '#2d1b4e',
    logo: <svg viewBox="0 0 24 24"><path fill="#a855f7" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V8h2v9zm4 0h-2V8h2v9z" /></svg>
  },
  {
    name: 'Power BI', color: '#f2c811', bg: '#3d2d00',
    logo: <svg viewBox="0 0 24 24"><path fill="#f2c811" d="M3 13h2v7H3v-7zm4-5h2v12H7V8zm4-3h2v15h-2V5zm4 5h2v10h-2V10zm4-3h2v13h-2V7z" /></svg>
  },
  {
    name: 'Java', color: '#e76f00', bg: '#3d1a1a',
    logo: <svg viewBox="0 0 24 24"><path fill="#e76f00" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.981.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118" /></svg>
  },
  {
    name: 'Git', color: '#f05032', bg: '#3d1500',
    logo: <svg viewBox="0 0 24 24"><path fill="#f05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" /></svg>
  },
  {
    name: 'GitHub', color: '#e2e8f0', bg: '#1e293b',
    logo: <svg viewBox="0 0 24 24"><path fill="#e2e8f0" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
  },
  {
    name: 'MySQL', color: '#4479a1', bg: '#102a3d',
    logo: <svg viewBox="0 0 24 24"><path fill="#00aff0" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.5-6-2v-2.23C7.61 15.57 9.72 16 12 16s4.39-.43 6-1.23V17c0 .5-2.13 2-6 2zm0-4c-3.87 0-6-1.5-6-2v-2.23C7.61 11.57 9.72 12 12 12s4.39-.43 6-1.23V13c0 .5-2.13 2-6 2z" /></svg>
  },
  {
    name: 'Colab', color: '#f9ab00', bg: '#3d1e0a',
    logo: <svg viewBox="0 0 24 24"><path fill="#f9ab00" d="M16.9 8.2L15 6.3l-3 3-3-3-1.9 1.9 3 3-3 3 1.9 1.9 3-3 3 3 1.9-1.9-3-3 3-3zM12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
  },
  {
    name: 'Jupyter', color: '#f37626', bg: '#3d2800',
    logo: <svg viewBox="0 0 24 24"><path fill="#f37626" d="M7.157 22.201A1.784 1.784 0 0 1 5.378 20.7c-.483-2.43 1.938-4.943 5.941-5.03.717-.016 1.406.04 2.049.158-.049-.217-.076-.419-.076-.6 0-.714.344-1.294.806-1.605-4.745.153-9.219 2.388-9.219 5.97 0 1.978 1.51 3.407 3.278 3.407.828 0 1.676-.255 2.399-.74L7.157 22.2zm9.686-2.152c.723.485 1.571.74 2.399.74 1.768 0 3.278-1.429 3.278-3.407 0-3.582-4.474-5.817-9.219-5.97.462.311.806.891.806 1.605 0 .181-.027.383-.076.6.643-.118 1.332-.174 2.049-.158 4.003.087 6.424 2.6 5.941 5.03a1.784 1.784 0 0 1-1.779 1.501 1.784 1.784 0 0 1-1.08-.358l-2.32.417zM12 13.008c1.106 0 2.003-.897 2.003-2.003 0-1.106-.897-2.004-2.003-2.004A2.003 2.003 0 0 0 9.997 11.005c0 1.106.897 2.003 2.003 2.003z" /></svg>
  },
  {
    name: 'VS Code', color: '#007acc', bg: '#0c2340',
    logo: <svg viewBox="0 0 24 24"><path fill="#007acc" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.88V4.12a1.5 1.5 0 0 0-.85-1.533zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" /></svg>
  },
  {
    name: 'Scikit-learn', color: '#f7931e', bg: '#3d1e00',
    logo: <svg viewBox="0 0 24 24"><path fill="#f7931e" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" /></svg>
  },
  {
    name: 'Streamlit', color: '#ff4b4b', bg: '#3d0a0a',
    logo: <svg viewBox="0 0 24 24"><path fill="#ff4b4b" d="M19.44 9.03L12.29 2l-2.08 2.08 7.15 7.03-7.15 7.04L12.29 20l7.15-7.15a2.813 2.813 0 0 0 0-3.82zM6.29 2L4.56 3.73 11.71 11 4.56 18.27 6.29 20l7.15-7.15a2.813 2.813 0 0 0 0-3.82L6.29 2z" /></svg>
  },
  {
    name: 'Pandas', color: '#a78bfa', bg: '#1a0a3d',
    logo: <svg viewBox="0 0 24 24"><path fill="#a78bfa" d="M9 3H7v7.5h2V3zM9 13.5H7V21h2v-7.5zM17 3h-2v7.5h2V3zM17 13.5h-2V21h2v-7.5zM13 8.5h-2v7h2v-7z" /></svg>
  },
  {
    name: 'NumPy', color: '#4dabcf', bg: '#0e2d35',
    logo: <svg viewBox="0 0 24 24"><path fill="#4dabcf" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.5 12 13 4 8.5l8-4.32zM4 10.18l7 3.5V20l-7-3.5v-6.32zm9 3.5l7-3.5v6.32l-7 3.5v-6.32z" /></svg>
  },
  {
    name: 'Matplotlib', color: '#e37933', bg: '#3d1f0a',
    logo: <svg viewBox="0 0 24 24"><path fill="#e37933" d="M3 20h2v-8H3v8zm4 0h2V9H7v11zm4 0h2V4h-2v16zm4 0h2v-6h-2v6zm4 0h2v-10h-2v10z" /></svg>
  },
]

/* ── Inline brand marks adapted from simple-icons/simple-icons on GitHub ── */
function officialSkillLogo(name) {
  if (name === 'MySQL') {
    return (
      <svg viewBox="11 2 13 10" role="img" aria-label="MySQL dolphin">
        <path fill="#4479a1" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
      </svg>
    )
  }
  if (name === 'Power BI') {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="Power BI">
        <rect x="3" y="13" width="3" height="8" rx="1" fill="#f2c811" />
        <rect x="7.5" y="8" width="3" height="13" rx="1" fill="#f2c811" />
        <rect x="12" y="4" width="3" height="17" rx="1" fill="#f2c811" />
        <rect x="16.5" y="9" width="3" height="12" rx="1" fill="#f2c811" />
      </svg>
    )
  }
  if (name === 'Scikit-learn') {
    return (
      <svg viewBox="110 220 250 160" role="img" aria-label="Scikit-learn">
        <path d="m333.32 347.348c33.869-33.867 39.498-83.146 12.572-110.07-26.922-26.921-76.199-21.293-110.066 12.572-33.867 33.866-24.07 98.568-12.57 110.07 9.293 9.293 76.199 21.293 110.064-12.572z" fill="#f89939" />
        <path d="m194.35 298.411c-19.648-19.648-48.242-22.919-63.867-7.295-15.621 15.622-12.355 44.22 7.297 63.865 19.652 19.654 57.195 13.969 63.863 7.295 5.396-5.387 12.361-44.215-7.293-63.865z" fill="#3499cd" />
      </svg>
    )
  }
  if (name === 'Jupyter') {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="Jupyter">
        <path fill="#f37626" d="M7.157 22.201A1.784 1.799 0 0 1 5.374 24a1.784 1.799 0 0 1-1.784-1.799 1.784 1.799 0 0 1 1.784-1.799 1.784 1.799 0 0 1 1.783 1.799zM20.582 1.427a1.415 1.427 0 0 1-1.415 1.428 1.415 1.427 0 0 1-1.416-1.428A1.415 1.427 0 0 1 19.167 0a1.415 1.427 0 0 1 1.415 1.427zM4.992 3.336A1.047 1.056 0 0 1 3.946 4.39a1.047 1.056 0 0 1-1.047-1.055A1.047 1.056 0 0 1 3.946 2.28a1.047 1.056 0 0 1 1.046 1.056zm7.336 1.517c3.769 0 7.06 1.38 8.768 3.424a9.363 9.363 0 0 0-3.393-4.547 9.238 9.238 0 0 0-5.377-1.728A9.238 9.238 0 0 0 6.95 3.73a9.363 9.363 0 0 0-3.394 4.547c1.713-2.04 5.004-3.424 8.772-3.424zm.001 13.295c-3.768 0-7.06-1.381-8.768-3.425a9.363 9.363 0 0 0 3.394 4.547A9.238 9.238 0 0 0 12.33 21a9.238 9.238 0 0 0 5.377-1.729 9.363 9.363 0 0 0 3.393-4.547c-1.712 2.044-5.003 3.425-8.772 3.425Z" />
      </svg>
    )
  }
  if (name === 'Colab') {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="Google Colab">
        <path fill="#f9ab00" d="M16.941 4.976a7.033 7.033 0 0 0-4.93 2.064 7.033 7.033 0 0 0-.123 9.807l2.395-2.395a3.645 3.645 0 0 1 5.15-5.148l2.397-2.399a7.033 7.033 0 0 0-4.889-1.929zM7.07 4.986a7.033 7.033 0 0 0-4.888 1.931l2.391 2.391a3.643 3.643 0 0 1 5.023.127l1.734-2.974-.1-.08A7.033 7.033 0 0 0 7.07 4.986zm15.009 2.172-2.389 2.391a3.645 3.645 0 0 1-5.15 5.15l-2.407 2.407a7.036 7.036 0 0 0 9.946-9.948zM1.932 7.167a7.033 7.033 0 0 0-.002 9.682l2.397-2.397a3.643 3.643 0 0 1-.004-4.892zm7.664 7.424c-1.38 1.382-3.587 1.411-5.017.113l-2.397 2.395c2.469 2.333 6.263 2.576 9.007.546l.137-.112z" />
      </svg>
    )
  }
  if (name === 'Streamlit') {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="Streamlit">
        <path fill="#ff4b4b" d="M16.673 11.32l6.862-3.618c.233-.136.554.12.442.387L20.463 17.1zm-8.556-.229l3.473-5.187c.203-.328.578-.316.793-.028l7.886 11.75zm-3.375 7.25c-.28 0-.835-.284-.993-.716l-3.72-9.46c-.118-.331.139-.614.48-.464l19.474 10.306c-.149.147-.453.337-.72.334z" />
      </svg>
    )
  }
  if (name === 'Pandas') {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="Pandas">
        <path fill="#a78bfa" d="M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z" />
      </svg>
    )
  }
  if (name === 'NumPy') {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="NumPy">
        <path fill="#4dabcf" d="M10.315 4.876 6.305 2.852l-4.401 2.196 4.119 2.068zm1.838.928 4.205 2.122-4.363 2.191-4.125-2.072zm5.615-2.921 4.319 2.166-3.863 1.94-4.213-2.125zm-1.859-.933L12.021 0 8.174 1.919l4.007 2.021zm-3.04 16.744V24l4.711-2.351-.006-5.308zm4.704-4.206-.005-5.253-4.699 2.336v5.255zm5.655-.985v5.327l-4.018 2.005-.003-5.303zm0-1.863V6.421l-4.025 2.001.003 5.263zM11.206 11.571 8.033 9.976v6.895S4.153 8.615 3.793 7.873c-.046-.095-.237-.201-.285-.226L.773 6.249V18.43l2.82 1.508v-6.368s3.84 7.378 3.879 7.458c.038.081.424.859.836 1.132.548.363 2.899 1.776 2.899 1.776z" />
      </svg>
    )
  }
  return null
}

const skillsWithRealLogos = skills.map(skill => ({
  ...skill,
  // Keep the original inline Java logo and every existing inline mark.
  logo: officialSkillLogo(skill.name) || skill.logo,
}))


/* ── Neural network nodes ── */
const nodes = [
  {
    id: 0, x: 400, y: 220, label: 'Python', color: '#3776ab', bg: '#1e3a5f', r: 74, main: true, dur: '7s', delay: '0s',
    logo: <svg viewBox="0 0 24 24"><path fill="#3776ab" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.02.08.02zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" /><path fill="#ffd43b" d="M9.38 7.45h5.84v.83H9.38z" /></svg>
  },
  {
    id: 1, x: 145, y: 95, label: 'ML', color: '#a855f7', bg: '#2d1b4e', r: 46, dur: '5.5s', delay: '0.4s',
    logo: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="#a855f7" /><path fill="none" stroke="#a855f7" strokeWidth="1.5" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path fill="#a855f7" d="M12 6l1.5 4H10.5L12 6zm0 12l-1.5-4h3L12 18zM6 12l4-1.5V13.5L6 12zm12 0l-4 1.5V10.5L18 12z" /></svg>
  },
  {
    id: 2, x: 655, y: 95, label: 'Power BI', color: '#f2c811', bg: '#3d2d00', r: 46, dur: '6s', delay: '0.8s',
    logo: <svg viewBox="0 0 24 24"><rect x="3" y="13" width="3" height="8" fill="#f2c811" rx="1" /><rect x="7" y="8" width="3" height="13" fill="#f2c811" rx="1" /><rect x="11" y="5" width="3" height="16" fill="#f2c811" rx="1" /><rect x="15" y="10" width="3" height="11" fill="#f2c811" rx="1" /><rect x="19" y="7" width="2" height="14" fill="#f2c811" rx="1" /></svg>
  },
  {
    id: 3, x: 60, y: 235, label: 'Java', color: '#e76f00', bg: '#3d1a1a', r: 42, dur: '8s', delay: '1.2s',
    logo: <svg viewBox="0 0 24 24"><path fill="#e76f00" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.981.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118" /></svg>
  },
  {
    id: 4, x: 740, y: 235, label: 'Git', color: '#f05032', bg: '#3d1500', r: 42, dur: '6.5s', delay: '0.2s',
    logo: <svg viewBox="0 0 24 24"><path fill="#f05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" /></svg>
  },
  {
    id: 5, x: 100, y: 375, label: 'GitHub', color: '#e2e8f0', bg: '#1e293b', r: 42, dur: '7.5s', delay: '1.6s',
    logo: <svg viewBox="0 0 24 24"><path fill="#e2e8f0" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
  },
  {
    id: 6, x: 700, y: 375, label: 'MySQL', color: '#4479a1', bg: '#102a3d', r: 42, dur: '5s', delay: '0.6s',
    logo: officialSkillLogo('MySQL'),
  },
  {
    id: 8, x: 555, y: 385, label: 'Colab', color: '#f9ab00', bg: '#3d1e0a', r: 40, dur: '6s', delay: '1.4s',
    logo: officialSkillLogo('Colab'),
  },
  {
    id: 9, x: 265, y: 72, label: 'Jupyter', color: '#f37626', bg: '#3d2800', r: 40, dur: '7s', delay: '0.5s',
    logo: officialSkillLogo('Jupyter'),
  },
  {
    id: 10, x: 535, y: 72, label: 'VS Code', color: '#007acc', bg: '#0c2340', r: 40, dur: '8.5s', delay: '1.8s',
    logo: <svg viewBox="0 0 24 24"><path fill="#007acc" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.88V4.12a1.5 1.5 0 0 0-.85-1.533zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" /></svg>
  },
  {
    id: 11, x: 400, y: 385, label: 'Scikit', color: '#f7931e', bg: '#3d1e00', r: 40, dur: '5.5s', delay: '0.9s',
    logo: officialSkillLogo('Scikit-learn'),
  },
  {
    id: 12, x: 250, y: 395, label: 'Matplotlib', color: '#e37933', bg: '#3d1f0a', r: 38, dur: '6.8s', delay: '1.1s',
    logo: <svg viewBox="0 0 24 24"><path fill="#e37933" d="M3 20h2v-8H3v8zm4 0h2V9H7v11zm4 0h2V4h-2v16zm4 0h2v-6h-2v6zm4 0h2v-10h-2v10z" /></svg>
  },
  {
    id: 13,
    x: 220,
    y: 165,
    label: "NumPy",
    color: "#4DABCF",
    bg: "#13293D",
    r: 40,
    dur: "6.2s",
    delay: "0.7s",
    logo: (
      <svg viewBox="0 0 24 24">
        <path
          fill="#4DABCF"
          d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"
        />
      </svg>
    ),
  },
  {
    id: 14,
    x: 580,
    y: 165,
    label: "Pandas",
    color: "#150458",
    bg: "#25143D",
    r: 40,
    dur: "6.8s",
    delay: "1.1s",
    logo: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="3" width="3" height="18" rx="1" fill="#150458" />
        <rect x="10.5" y="3" width="3" height="18" rx="1" fill="#6D3FC0" />
        <rect x="16" y="3" width="3" height="18" rx="1" fill="#150458" />
      </svg>
    ),
  },
  {
    id: 15,
    x: 650,
    y: 300,
    label: 'Streamlit',
    color: '#ff4b4b',
    bg: '#3d0a0a',
    r: 38,
    dur: '6.4s',
    delay: '1.3s',
    logo: officialSkillLogo('Streamlit'),
  },
]

const nodesWithRealLogos = nodes.map(node => {
  const logoName = node.label === 'ML'
    ? 'Machine Learning'
    : node.label === 'Scikit'
      ? 'Scikit-learn'
      : node.label
  return { ...node, logo: officialSkillLogo(logoName) || node.logo }
})

const edges = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 8], [0, 9], [0, 10], [0, 11],
  [1, 3], [1, 9], [2, 4], [2, 10], [3, 5], [4, 6], [6, 8], [8, 11], [9, 10],
  [0, 12], [8, 12], [11, 12], [0, 13], [13, 14], [13, 11], [14, 6], [14, 2],
  [0, 15], [15, 2], [15, 6],
]

/* ── AI/ML Projects (primary) ── */
const aiProjects = [
  {
    name: 'PDF to eCourse', stack: ['Next.js 16', 'TypeScript', 'Groq (GPT-OSS-120B)', 'Supabase', 'NextAuth.js', 'Tailwind CSS'],
    desc: 'AI platform that turns any PDF into a full interactive course — chapters, topics & lessons auto-structured by GPT-OSS-120B, with progress tracking, an AI tutor chatbot, auto-generated quizzes, full-text search and one-click summaries.',
    url: 'https://github.com/luckylucky110507/-pdf-to-ecourse', demo: 'https://pdf-to-ecourse-platform-three.vercel.app/', color: '#22d3ee', icon: '📚', image: '/projects/pdf-to-ecourse.png'
  },
  {
    name: 'Fake News Detection', stack: ['Python', 'Scikit-learn', 'TF-IDF', 'Logistic Regression', 'Streamlit'],
    desc: 'Built an NLP-based fake news classifier trained on 44,898 news articles using TF-IDF vectorization and Logistic Regression, reaching 96.81% accuracy. Deployed as a live Streamlit web app for real-time predictions.',
    url: 'https://github.com/luckylucky110507/fake-news-detection', demo: 'https://fake-news-detection-i6ke2c9ihsht66ljjenezq.streamlit.app/', color: '#3b82f6', icon: '📰', image: '/projects/fake-news-detection.png'
  },
  {
    name: 'Voice SQL Insight Agent', stack: ['Python', 'Flask', 'SQL', 'NLP', 'Speech Recognition'],
    desc: 'Developed an AI-powered voice-enabled SQL assistant that converts natural-language questions into schema-validated, read-only SQL queries using speech recognition and NLP.',
    url: 'https://github.com/luckylucky110507/voice-sql-insight-agent', demo: 'https://voice-sql-insight-agent.vercel.app/', color: '#f59e0b', icon: '🎙️', image: '/projects/voice-sql-insight-agent.png'
  },
  {
    name: 'Movie Recommendation System', stack: ['Python', 'TF-IDF', 'Cosine Similarity'],
    desc: 'Built a content-based recommendation engine using TF-IDF and Cosine Similarity to suggest movies across a dataset of 1,300+ Hollywood and Bollywood films.',
    url: 'https://github.com/luckylucky110507/Movie-Recommendation-System', demo: 'https://movie-recommendation-system-fqbmpdribti7z4tifzfurl.streamlit.app/', color: '#ef4444', icon: '🎥', image: '/projects/movie-recommendation-system.png'
  },
  {
    name: 'Movie Success Prediction', stack: ['Python', 'Scikit-learn', 'Logistic Regression', 'Naive Bayes', 'SVM', 'GridSearchCV'],
    desc: 'Built classification models with Logistic Regression, Naive Bayes, and SVM to predict movie box-office success, optimizing performance with GridSearchCV.',
    url: 'https://github.com/luckylucky110507/Movie-Success-Prediction', demo: null, color: '#a855f7', icon: '🎬', image: '/projects/movie-success-prediction.png'
  },
  {
    name: 'TalentLens AI', stack: ['React', 'Vite', 'FastAPI', 'Python', 'TF-IDF & Cosine Similarity', 'Random Forest', 'scikit-learn (ANN)', 'SQLite/SQLAlchemy', 'Recharts'],
    desc: 'Full-stack AI resume-intelligence platform: parses PDF/DOCX resumes, computes TF-IDF/cosine-similarity resume-to-JD matching, and produces a transparent ATS score (skill match, keywords, similarity, section completeness, project relevance). Combines a Random Forest classifier with an ANN-style suitability model, recruiter batch ranking, skill-gap career recommendations, and a rule-based interview-practice module.',
    url: 'https://github.com/luckylucky110507/Talent-Lens-AI.git', demo: 'https://talent-lens-ai-beta.vercel.app/', color: '#6366f1', icon: '🧠', image: '/projects/talentlens-ai.png'
  },
  {
    name: 'Heart Disease Analytics & Risk Prediction', stack: ['Python', 'Power BI', 'Pandas', 'Scikit-learn', 'DAX', 'Matplotlib/Seaborn', 'Random Forest'],
    desc: 'End-to-end healthcare analytics project pairing a Power BI dashboard with a Python ML pipeline on the Heart Failure Clinical Records dataset (299 patients). Compared 5 models for mortality prediction — Random Forest performed best (ROC-AUC 0.90) — then fed patient-level risk scores back into an interactive Power BI dashboard with KPI cards, decomposition-tree root-cause analysis, and an AI risk-prediction page.',
    url: 'https://github.com/luckylucky110507/heart-failure-risk-prediction-system.git', demo: null, color: '#f43f5e', icon: '❤️', image: '/projects/heart-disease-analytics.png'
  },
  {
    name: 'House Price Prediction', stack: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Linear Regression', 'GridSearchCV'],
    desc: 'Built and compared Linear Regression, Ridge Regression, and Random Forest models to predict house prices. Performed feature engineering and hyperparameter tuning, evaluating performance with MAE, RMSE, and R² Score.',
    url: 'https://github.com/luckylucky110507/House-Price-Prediction-Kaggle', demo: null, color: '#22c55e', icon: '🏠', image: null
  },
]

/* ── Certifications ── */
const certifications = [
  { title: 'Introduction to AI Concepts', issuer: 'Microsoft', date: 'Sep 11, 2025', image: '/certifications/microsoft-intro-ai.jpg' },
  { title: 'AI Tools Workshop', issuer: 'be10x', date: 'Dec 14, 2025', image: '/certifications/be10x-ai-tools.jpg' },
  { title: "Code4EdTech Hack-A-Thon'25", issuer: 'Innomatics Research Labs', date: 'Sep 21-22, 2025', image: '/certifications/innomatics-hackathon.jpg' },
  { title: 'Oracle Certified Foundations Associate', issuer: 'Oracle University', date: 'Aug 27, 2025', image: '/certifications/oracle-ai-foundations.jpg' },
  { title: 'Master ChatGPT', issuer: 'UniAthena', date: 'Jul 13, 2025', image: '/certifications/master-chatgpt.jpg' },
  { title: 'Google AI Professional Certificate', issuer: 'Google / Coursera', date: 'May 3, 2026', image: '/certifications/google-ai-professional.png' },
  { title: 'Soft Computing Techniques (Elite)', issuer: 'NPTEL - IIT Dhanbad', date: 'Jan-Apr 2026', note: '71%', image: '/certifications/nptel-soft-computing.png' },
  { title: 'Develop Generative AI Applications: Get Started', issuer: 'IBM / Coursera', date: 'Apr 25, 2026', image: '/certifications/ibm-gen-ai.png' },
  { title: 'Cybersecurity Analyst Simulation', issuer: 'Tata - Forage', date: 'Jul 3, 2025', image: '/certifications/tata-forage-cybersecurity.jpg' },
  { title: 'Technology Job Simulation', issuer: 'Deloitte', date: 'Jul 3, 2025', image: '/certifications/deloitte-tech-sim.jpg' },
  { title: 'Programming in Java (Elite)', issuer: 'NPTEL - IIT Kharagpur', date: 'Jul-Oct 2025', note: '82%', image: '/certifications/nptel-java-elite.jpg' },
  { title: 'Machine Learning using Python', issuer: 'Infosys Springboard', date: 'Oct 29, 2025', image: '/certifications/infosys-ml-python.jpg' },
  { title: "QuizOff 2026: India's Biggest AI Quiz", issuer: 'CampusCrew (Unstop)', date: 'Jul 19, 2026', image: '/certifications/unstop-quizoff-2026.png' },
  { title: 'Gen AI — NASSCOM Skill Development Program', issuer: 'SFJ', date: 'Mar 10, 2026', image: '/certifications/sfj-genai-nasscom.jpg' },
  { title: 'Workshop on AI & ML', issuer: 'CETPA - IIMT University, Greater Noida', date: 'Jan 5, 2026', image: '/certifications/cetpa-ai-ml-workshop.jpg' },
  { title: 'Advance Internet of Things (IoT)', issuer: 'Technoledge Eduresearch - IIMT University', date: 'Training Program', image: '/certifications/technoledge-iot.jpg' },
  { title: 'SQL (Basic)', issuer: 'HackerRank', date: 'Nov 21, 2025', image: '/certifications/hackerrank-sql-basic.png' },
]

/* ── Publications ── */
const publications = [
  {
    title: 'Efficient Detection of Offensive Social Media Comments in Assamese Language Using LSTM',
    status: 'Published',
    venue: 'IRJCS, Volume 12, Issue 12',
    role: 'Co-Author',
    date: 'December 2025',
    categories: ['AI', 'NLP', 'Deep Learning'],
    authors: 'Komal Kumar, Lucky Kumari, Kritansh Pandey, Dr. Shivani Dubey, Neha Gupta, Vikas Yadav',
    desc: 'An LSTM-based deep learning approach to automatically detect offensive comments in Assamese-language social media text, tackling the challenge of moderating harmful content in a low-resource regional language.',
    tags: ['LSTM', 'NLP', 'Python', 'TensorFlow/Keras'],
    doi: 'https://doi.org/10.26562/irjcs.2025.v1212.08',
    pdf: '/research paper.pdf',
  },
]

/* ── Experience ── */
const experience = [
  {
    title: 'AI & ML Intern', company: 'Codomax Digital Solutions, Remote', period: 'Jul 2026 – Aug 2026',
    points: ['Worked on applied machine learning tasks including data preprocessing, model building, and evaluation.', 'Contributed to end-to-end ML workflows under mentorship, translating business problems into model-ready datasets.']
  },
  {
    title: 'Full Stack Development Intern', company: 'CodTech IT Solutions, Remote', period: 'Aug 2025 – Oct 2025',
    points: ['Developed real-time chat app using WebSocket, supporting 50+ concurrent users.', 'Built collaborative multi-user document editor with conflict-resolution logic.', 'Integrated weather REST API and launched a Chrome productivity-tracker extension.']
  },
  {
    title: 'Artificial Intelligence Intern', company: 'CodSoft, Remote', period: 'Jul 2025 – Aug 2025',
    points: ['Designed rule-based NLP chatbot covering 20+ predefined intent categories.', 'Developed AI-powered Tic-Tac-Toe using the Minimax algorithm.', 'Built content-based recommendation system using cosine similarity scoring.']
  },
  {
    title: 'Technology Job Simulation', company: 'Deloitte (Forage)', period: 'Jul 2025',
    points: ['Completed a virtual job simulation covering technology consulting and cybersecurity fundamentals.', 'Practiced client-facing problem solving in a simulated enterprise technology environment.']
  },
]

/* ── Chatbot QA ── */
const BOT_QA = [
  { q: /hi|hello|hey/i, a: "Hi there! 👋 I'm Lucky's AI. Ask me about her skills, projects, or how to reach her!" },
  { q: /skill|tech|stack|know/i, a: "Lucky is skilled in Python, ML, NLP, SQL, Power BI, Java, Scikit-learn, Streamlit, Pandas, NumPy, Git & Jupyter! 🚀" },
  { q: /project/i, a: "Lucky has 8 AI/ML projects — PDF to eCourse (AI course generator), Fake News Detector (96.81% accuracy), Voice SQL Agent, Movie Recommender, Movie Success Prediction, TalentLens AI (resume intelligence), Heart Disease Risk Prediction & House Price Prediction! 🎯" },
  { q: /edu|college|univer|study/i, a: "B.Tech CSE at IIMT University, Greater Noida (2023–2027) · SGPA: 8.81/10 🎓" },
  { q: /intern|work|experience/i, a: "Lucky interned at Codomax Digital Solutions (AI & ML, Jul–Aug 2026), CodTech IT Solutions (Full Stack, Aug–Oct 2025) & Codsoft (AI, Jul–Aug 2025) 💼" },
  { q: /cert/i, a: "17+ certs from Microsoft, Oracle, Google, IBM, NPTEL, Infosys Springboard, HackerRank, CETPA & more! 📜" },
  { q: /research|paper/i, a: "Co-authored an LSTM paper on Assamese offensive comment detection — IRJCS Vol.12, Dec 2025 📄" },
  { q: /contact|email|phone/i, a: "📧 kumarilucky01437@gmail.com\n📞 +91-7827843321\n📍 Delhi/NCR, India" },
  { q: /github/i, a: "GitHub → github.com/luckylucky110507 🐙" },
  { q: /linkedin/i, a: "LinkedIn → linkedin.com/in/lucky-kumari-3b83a2364 🔗" },
  { q: /instagram/i, a: "Instagram → @k11_lucky 📸" },
  { q: /resume|cv/i, a: "Hit ⬇ Resume in the navbar to download Lucky's CV! 📄" },
  { q: /sgpa|gpa|grade/i, a: "SGPA 8.81/10 at IIMT University 🏆" },
  { q: /python|hackerrank/i, a: "Lucky holds a Golden Badge in Python on HackerRank 🐍" },
  { q: /learn|currently/i, a: "Currently leveling up in Deep Learning, OpenCV, MLOps, Generative AI & Advanced Computer Vision 📈" },
]
function getBotReply(msg) {
  const m = BOT_QA.find(({ q }) => q.test(msg))
  return m ? m.a : "Not sure! Try asking about Lucky's skills, projects, education, certs, or contact info 😊"
}

/* ── Neural network SVG ── */
function NeuralSkills() {
  return (
    <svg className="circuit-svg" viewBox="0 0 800 480" fill="none">
      <defs>
        <filter id="gn"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="ge"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        {nodes.map(n => (
          <radialGradient key={n.id} id={`ng${n.id}`} cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor={n.color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={n.bg} stopOpacity="1" />
          </radialGradient>
        ))}
      </defs>
      {/* Edges */}
      {edges.map(([a, b], i) => {
        const na = nodes.find(n => n.id === a), nb = nodes.find(n => n.id === b)
        return (
          <g key={i} filter="url(#ge)">
            <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke={`${na.color}30`} strokeWidth="1.5"
              strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </line>
            <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke={`${na.color}15`} strokeWidth="3"
              strokeDasharray="none" />
          </g>
        )
      })}
      {/* Nodes */}
      {nodesWithRealLogos.map(n => (
        <g key={n.id} filter="url(#gn)">
          <animateTransform
            attributeName="transform" type="translate"
            values={`0,0; 0,-${n.main ? 12 : 7}; 0,0`}
            dur={n.dur} begin={n.delay} repeatCount="indefinite"
            additive="sum" />
          {n.main && (
            <>
              <circle cx={n.x} cy={n.y} r={n.r + 26} fill="none" stroke={n.color} strokeWidth="1" opacity="0.12">
                <animate attributeName="r" values={`${n.r + 26};${n.r + 36};${n.r + 26}`} dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.12;0.05;0.12" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx={n.x} cy={n.y} r={n.r + 12} fill="none" stroke={n.color} strokeWidth="1" opacity="0.22">
                <animate attributeName="r" values={`${n.r + 12};${n.r + 18};${n.r + 12}`} dur="3s" repeatCount="indefinite" />
              </circle>
            </>
          )}
          {/* neon outline ring around every icon, like the video reference */}
          <circle cx={n.x} cy={n.y} r={n.r + 7} fill="none" stroke={n.color} strokeWidth="1.5" opacity="0.4" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={`url(#ng${n.id})`} stroke={n.color} strokeWidth={n.main ? 3 : 2} opacity="0.97" />
          {React.cloneElement(n.logo, {
            x: n.x - n.r * 0.42,
            y: n.y - n.r * 0.42,
            width: n.r * 0.84,
            height: n.r * 0.84,
          })}
          <text x={n.x} y={n.y + n.r + 22} textAnchor="middle" fill={n.color} fontSize={n.main ? 14 : 12} fontWeight="700" opacity="0.9">{n.label}</text>
        </g>
      ))}
    </svg>
  )
}

/* ── Floating particles ── */
function Particles() {
  const pts = [
    { s: 6, t: '18%', l: '10%', d: '5s', dl: '0s' }, { s: 4, t: '60%', l: '6%', d: '7s', dl: '1s' },
    { s: 8, t: '30%', l: '87%', d: '6s', dl: '2s' }, { s: 5, t: '72%', l: '82%', d: '8s', dl: '0.5s' },
    { s: 3, t: '48%', l: '48%', d: '4.5s', dl: '1.5s' }, { s: 7, t: '12%', l: '58%', d: '6.5s', dl: '3s' },
    { s: 4, t: '82%', l: '38%', d: '9s', dl: '2.5s' }, { s: 5, t: '25%', l: '70%', d: '7s', dl: '0.8s' },
    { s: 3, t: '55%', l: '22%', d: '5.5s', dl: '1.2s' },
  ]
  return <>{pts.map((p, i) => (
    <div key={i} className="hero-particle"
      style={{ width: p.s, height: p.s, top: p.t, left: p.l, '--dur': p.d, '--delay': p.dl }} />
  ))}</>
}

/* ── DNA Helix ── */
function DnaHelix() {
  return (
    <div className="dna-wrap">
      <svg className="dna-svg" viewBox="0 0 1800 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wglow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="15%" stopColor="#7c3aed" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#5ce1e6" stopOpacity="1" />
            <stop offset="85%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5ce1e6" stopOpacity="0" />
            <stop offset="15%" stopColor="#5ce1e6" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="85%" stopColor="#7c3aed" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wg3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="15%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#5ce1e6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5ce1e6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          { amp: 90, freq: 0.007, phase: 0, cy: 160, grad: 'wg1', sw: 2.5, delay: '0s' },
          { amp: 75, freq: 0.009, phase: 1.2, cy: 160, grad: 'wg2', sw: 2, delay: '-2s' },
          { amp: 60, freq: 0.006, phase: 2.4, cy: 160, grad: 'wg1', sw: 1.5, delay: '-4s' },
          { amp: 100, freq: 0.008, phase: 0.6, cy: 160, grad: 'wg3', sw: 2.2, delay: '-1s' },
          { amp: 50, freq: 0.011, phase: 1.8, cy: 160, grad: 'wg2', sw: 1.2, delay: '-3s' },
          { amp: 80, freq: 0.005, phase: 3.0, cy: 160, grad: 'wg3', sw: 1.8, delay: '-5s' },
          { amp: 40, freq: 0.013, phase: 0.9, cy: 160, grad: 'wg1', sw: 1, delay: '-6s' },
          { amp: 65, freq: 0.007, phase: 2.1, cy: 160, grad: 'wg2', sw: 1.6, delay: '-2.5s' },
        ].map((w, wi) => {
          const pts = Array.from({ length: 361 }, (_, i) => {
            const x = i * 5
            const y = w.cy + w.amp * Math.sin(w.freq * x + w.phase)
            return `${i === 0 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`
          }).join(' ')
          return (
            <path key={wi} d={pts}
              stroke={`url(#${w.grad})`}
              strokeWidth={w.sw}
              fill="none"
              filter="url(#wglow)"
              opacity="0.85">
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0" to="-900 0"
                dur="8s"
                begin={w.delay}
                repeatCount="indefinite"
                additive="sum" />
            </path>
          )
        })}
        {[
          { amp: 90, freq: 0.007, phase: 0, cy: 160, grad: 'wg1', sw: 2.5, delay: '0s' },
          { amp: 75, freq: 0.009, phase: 1.2, cy: 160, grad: 'wg2', sw: 2, delay: '-2s' },
          { amp: 60, freq: 0.006, phase: 2.4, cy: 160, grad: 'wg1', sw: 1.5, delay: '-4s' },
          { amp: 100, freq: 0.008, phase: 0.6, cy: 160, grad: 'wg3', sw: 2.2, delay: '-1s' },
          { amp: 50, freq: 0.011, phase: 1.8, cy: 160, grad: 'wg2', sw: 1.2, delay: '-3s' },
          { amp: 80, freq: 0.005, phase: 3.0, cy: 160, grad: 'wg3', sw: 1.8, delay: '-5s' },
          { amp: 40, freq: 0.013, phase: 0.9, cy: 160, grad: 'wg1', sw: 1, delay: '-6s' },
          { amp: 65, freq: 0.007, phase: 2.1, cy: 160, grad: 'wg2', sw: 1.6, delay: '-2.5s' },
        ].map((w, wi) => {
          const pts = Array.from({ length: 361 }, (_, i) => {
            const x = i * 5 + 900
            const y = w.cy + w.amp * Math.sin(w.freq * x + w.phase)
            return `${i === 0 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`
          }).join(' ')
          return (
            <path key={'b' + wi} d={pts}
              stroke={`url(#${w.grad})`}
              strokeWidth={w.sw}
              fill="none"
              filter="url(#wglow)"
              opacity="0.85">
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0" to="-900 0"
                dur="8s"
                begin={w.delay}
                repeatCount="indefinite"
                additive="sum" />
            </path>
          )
        })}
      </svg>
    </div>
  )
}

/* ── Bot Avatar ── */
function BotAvatar({ size = 32 }) {
  return (
    <div className="bot-av" style={{ width: size, height: size }} aria-label="Lucky's AI robot">
      <svg className="bot-avatar-svg" viewBox="0 0 100 100" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="botBubbleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#11b8d4" />
          </linearGradient>
          <linearGradient id="botBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#241157" />
            <stop offset="100%" stopColor="#101b45" />
          </linearGradient>
        </defs>
        <path d="M28 6h44a9 9 0 0 1 9 9v9a9 9 0 0 1-9 9H39L28 42V15a9 9 0 0 1 9-9Z" fill="url(#botBubbleGradient)" />
        <text x="50" y="25" fill="#fff" fontSize="13" fontWeight="800" textAnchor="middle">Hello!</text>
        <path d="M50 34v7" stroke="#7c3aed" strokeWidth="2.5" />
        <circle cx="50" cy="32" r="3.5" fill="#12b8d4" />
        <rect x="31" y="41" width="38" height="26" rx="8" fill="url(#botBodyGradient)" stroke="#863cff" strokeWidth="2" />
        <circle cx="42" cy="51" r="4.3" fill="#0b1025" stroke="#7c3aed" strokeWidth="1.4" />
        <circle cx="58" cy="51" r="4.3" fill="#0b1025" stroke="#08b9d5" strokeWidth="1.4" />
        <circle cx="43" cy="50" r="1.5" fill="#fff" />
        <circle cx="59" cy="50" r="1.5" fill="#fff" />
        <rect x="40" y="59" width="20" height="4" rx="2" fill="#7c3aed" />
        <path d="M50 67v4" stroke="#5726ad" strokeWidth="3" />
        <rect x="23" y="68" width="54" height="24" rx="9" fill="url(#botBodyGradient)" stroke="#863cff" strokeWidth="2" />
        <rect x="35" y="74" width="30" height="13" rx="4" fill="#0b1025" stroke="#321c6d" strokeWidth="1.5" />
        <circle cx="50" cy="80.5" r="4.3" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
        <path d="M23 72H18a5 5 0 0 0-5 5v9a5 5 0 0 0 5 5h5M77 72h5a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-5" fill="url(#botBodyGradient)" stroke="#863cff" strokeWidth="2" />
        <path d="M34 92h10v4H34a5 5 0 0 1-5-5v-1h5v2ZM56 92h10v-2h5v1a5 5 0 0 1-5 5H56v-4Z" fill="url(#botBodyGradient)" stroke="#863cff" strokeWidth="1.5" />
      </svg>
      <span className="bot-av-dot" />
    </div>
  )
}

/* ── Chatbot ── */
const QUICK_CHIPS = ['Skills 🛠️', 'Projects 🚀', 'Education 🎓', 'Contact 📬', 'Research 📄', 'Experience 💼']

function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{ from: 'bot', text: "Hi! I'm **Lucky's AI** ✨\nAsk me anything — skills, projects, research, or how to reach her!" }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [chipsUsed, setChipsUsed] = useState(false)
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, typing])

  function send(text) {
    const q = (text || input).trim(); if (!q) return
    setMsgs(m => [...m, { from: 'user', text: q }])
    setInput(''); setChipsUsed(true); setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(m => [...m, { from: 'bot', text: getBotReply(q) }])
    }, 1200)
  }

  function renderText(t) {
    return t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')
  }

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <BotAvatar size={44} />
            <div className="cb-head-info">
              <div className="cb-head-name">Lucky's AI Assistant</div>
              <div className="cb-head-sub"><span className="cb-online-dot" />Always available</div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            </button>
          </div>
          <div className="cb-intro">
            <BotAvatar size={54} />
            <div className="cb-intro-text">
              <p className="cb-intro-name">Lucky Kumari</p>
              <p className="cb-intro-role">CSE Student · AI/ML Engineer</p>
              <p className="cb-intro-note">Ask me anything about Lucky's work 👇</p>
            </div>
          </div>
          <div className="chatbot-messages">
            {msgs.map((m, i) => (
              <div key={i} className={`chatbot-msg ${m.from}`}>
                {m.from === 'bot' && <BotAvatar size={26} />}
                <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: renderText(m.text) }} />
              </div>
            ))}
            {typing && (
              <div className="chatbot-msg bot">
                <BotAvatar size={26} />
                <div className="msg-bubble typing-bubble">
                  <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          {!chipsUsed && (
            <div className="cb-chips">
              {QUICK_CHIPS.map(c => (
                <button key={c} className="cb-chip" onClick={() => send(c)}>{c}</button>
              ))}
            </div>
          )}
          <div className="chatbot-input-row">
            <input className="chatbot-input" value={input} placeholder="Ask about Lucky…"
              onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} />
            <button className="chatbot-send" onClick={() => send()}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <button className="chatbot-fab" onClick={() => setOpen(o => !o)} aria-label="Chat">
        {open
          ? <svg width="20" height="20" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
          : <BotAvatar size={64} />
        }
        {!open && <span className="fab-ring" />}
        {!open && <span className="fab-ring fab-ring-2" />}
        {!open && <span className="fab-badge">AI</span>}
      </button>
    </div>
  )
}

/* ── Contact Form ── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
  function submit(e) {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.open(`mailto:kumarilucky01437@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`)
    setSent(true); setTimeout(() => setSent(false), 4000)
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="cf-row">
        <div className="cf-field"><label>Your Name</label><input value={form.name} onChange={set('name')} placeholder="John Doe" required /></div>
        <div className="cf-field"><label>Your Email</label><input type="email" value={form.email} onChange={set('email')} placeholder="john@example.com" required /></div>
      </div>
      <div className="cf-field"><label>Subject</label><input value={form.subject} onChange={set('subject')} placeholder="Project collaboration, internship…" /></div>
      <div className="cf-field"><label>Message</label><textarea rows={5} value={form.message} onChange={set('message')} placeholder="Tell me about your project…" required /></div>
      <button type="submit" className="cf-submit">{sent ? '✅ Sent!' : '✉️ Send Message'}</button>
    </form>
  )
}

/* ── Typewriter (types lines one-by-one, letter by letter) ── */
function useTypewriter(lines, { speed = 100, startDelay = 300, lineDelay = 600, loop = true, pauseAtEnd = 0, pauseBeforeRestart = 300, start = true } = {}) {
  const [displayed, setDisplayed] = useState(() => lines.map(() => ''))
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (!start) return
    let cancelled = false
    const wait = ms => new Promise(res => setTimeout(res, ms))

    async function typeOnce() {
      setIsDone(false)
      setDisplayed(lines.map(() => ''))
      await wait(startDelay)
      for (let li = 0; li < lines.length; li++) {
        if (cancelled) return
        setActiveIndex(li)
        const text = lines[li]
        for (let ci = 0; ci <= text.length; ci++) {
          if (cancelled) return
          setDisplayed(prev => {
            const next = [...prev]
            next[li] = text.slice(0, ci)
            return next
          })
          await wait(speed)
        }
        await wait(lineDelay)
      }
      if (!cancelled) setIsDone(true)
    }

    async function run() {
      do {
        await typeOnce()
        if (cancelled) return
        if (loop) {
          await wait(pauseAtEnd)
          if (cancelled) return
          await wait(pauseBeforeRestart)
        }
      } while (loop && !cancelled)
    }
    run()
    return () => { cancelled = true }
  }, [start]) // eslint-disable-line react-hooks/exhaustive-deps

  return { displayed, activeIndex, isDone }
}

/* ── Hero greeting + name, typed one-by-one ── */
function HeroTypewriterGreeting({ start }) {
  const lines = ['Hi, I am', 'Lucky Kumari']
  const { displayed, activeIndex, isDone } = useTypewriter(lines, { start })

  return (
    <>
      <div className="hero-greeting">
        {displayed[0]}
        {activeIndex === 0 && !isDone && <span className="tw-cursor" aria-hidden="true">|</span>}
      </div>
      <div className="hero-name">
        {displayed[1]}
        {(activeIndex === 1 || isDone) && <span className="tw-cursor" aria-hidden="true">|</span>}
      </div>
    </>
  )
}

/* ── Animated Hero Roles ── */
const ROLES = ['CSE Student', 'AIML Enthusiast', 'Python Developer', 'ML Engineer']
function HeroRoles() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % ROLES.length)
        setVisible(true)
      }, 400)
    }, 2200)
    return () => clearInterval(cycle)
  }, [])
  return (
    <div className="hero-roles-wrap">
      <span className="hero-roles-prefix">I'm a </span>
      <span className={`hero-role-animated ${visible ? 'role-in' : 'role-out'}`}>
        {ROLES[idx]}
      </span>
    </div>
  )
}

/* ── Welcome Splash ── */
function WelcomeSplash({ onDone }) {
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 2800)
    const t3 = setTimeout(() => onDone(), 3500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])
  return (
    <div className={`splash ${phase >= 1 ? 'splash-in' : ''} ${phase === 2 ? 'splash-out' : ''}`} onClick={() => { setPhase(2); setTimeout(onDone, 600) }}>
      <div className="splash-bg" />
      <div className="splash-particles">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="splash-dot" style={{
            left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 5}px`, height: `${3 + Math.random() * 5}px`,
            animationDelay: `${Math.random() * 2}s`, animationDuration: `${3 + Math.random() * 4}s`
          }} />
        ))}
      </div>
      <div className="splash-content">
        <div className="splash-ring" />
        <img src="/profile.jpeg" alt="Lucky" className="splash-photo" />
        <div className="splash-welcome">Welcome to my Portfolio</div>
        <div className="splash-name">{'{'}Lucky Kumari{'}'}</div>
        <div className="splash-role">CSE Student · AI/ML Engineer · Python Developer</div>
        <div className="splash-hint">Click anywhere to enter</div>
      </div>
    </div>
  )
}

/* ══════════════════════════════
   MAIN APP
══════════════════════════════ */
export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    document.title = 'Lucky Kumari | AI/ML Engineer Portfolio'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = 'AI/ML Portfolio of Lucky Kumari showcasing Machine Learning projects, NLP applications, recommendation systems, internships, research publication and technical skills.'
  }, [])

  return (
    <>
      {showSplash && <WelcomeSplash onDone={() => setShowSplash(false)} />}
      <div className={`main-wrapper ${showSplash ? 'main-hidden' : 'main-visible'}`}>

        {/* ── NAV ── */}
        <nav className="nav">
          <span className="brand">Lucky.ai</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certificates</a>
            <a href="#skills">Tech Stack</a>
            <a href="#contact">Contact</a>
            <a className="btn-nav-resume" href={profile.resumeUrl} download>⬇ Resume</a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="hero" id="home">
          <Particles />
          <div className="hero-blob" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-float-bg" aria-hidden="true">
            {['CSE Student', 'AIML Enthusiast', 'Python Developer', 'ML Engineer'].map((r, i) => (
              <span key={r} className="hero-float-word" style={{ '--fi': i }}>{r}</span>
            ))}
          </div>
          <div className="hero-content">
            <p className="hero-tagline">
              <span className="hero-tagline-icon" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="17" stroke="url(#tagRing)" strokeWidth="1.4" opacity=".55" />
                  <path d="M20 8v6M20 26v6M8 20h6M26 20h6" stroke="#5ce1e6" strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
                  <circle cx="20" cy="20" r="6.5" fill="url(#tagCore)" />
                  <path d="M20 5.5 21.3 9l3.5 1.3-3.5 1.3L20 15l-1.3-3.4L15.2 10.3 18.7 9 20 5.5Z" fill="#c4b5fd" />
                  <defs>
                    <linearGradient id="tagRing" x1="0" y1="0" x2="40" y2="40">
                      <stop stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#5ce1e6" />
                    </linearGradient>
                    <radialGradient id="tagCore" cx="50%" cy="40%" r="60%">
                      <stop stopColor="#c4b5fd" />
                      <stop offset="1" stopColor="#7c3aed" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
              <span className="hero-tagline-copy">
                <span className="hero-tagline-kicker">AI / ML • BUILDING FOR IMPACT</span>
                <span className="hero-tagline-text">Building innovative, scalable AI/ML systems for real-world impact.</span>
              </span>
            </p>
            <HeroTypewriterGreeting start={!showSplash} />
            <HeroRoles />
            <p className="hero-desc">
              Results-driven AI/ML enthusiast building end-to-end ML solutions, NLP applications,
              recommendation systems, and predictive models using Python, SQL, and Scikit-learn.
              Currently seeking AI/ML Internship opportunities to contribute, learn, and grow.
            </p>
            <div className="hero-btns">
              <a className="btn-outline" href={profile.resumeUrl} download>⬇ Download Resume</a>
              <a className="btn-filled" href={profile.github} target="_blank" rel="noreferrer">View GitHub →</a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" className="hs-link" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hs-link" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" className="hs-link" title="@k11_lucky">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-glow" />
            <img src={profile.photo} alt="Lucky Kumari" className="hero-photo" />
          </div>
        </section>

        {/* ── BIO STRIP ── */}
        <Reveal>
          <div className="bio-strip">
            <div className="bio-strip-inner">
              <div className="bio-stat"><span className="bio-num">8.81</span><span className="bio-label">SGPA</span></div>
              <div className="bio-div" />
              <div className="bio-stat"><span className="bio-num">8+</span><span className="bio-label">AI/ML Projects</span></div>
              <div className="bio-div" />
              <div className="bio-stat"><span className="bio-num">17+</span><span className="bio-label">Certifications</span></div>
              <div className="bio-div" />
              <div className="bio-stat"><span className="bio-num">3</span><span className="bio-label">Internships</span></div>
              <div className="bio-div" />
              <div className="bio-stat"><span className="bio-num">1</span><span className="bio-label">Research Paper</span></div>
            </div>
          </div>
        </Reveal>

        {/* ── ABOUT ── */}
        <section id="about" className="section">
          <Reveal><p className="section-label">About me</p></Reveal>
          <Reveal delay={80}><h2 className="section-heading">About me</h2></Reveal>
          <div className="about-row">
            <Reveal delay={120} className="about-left-wrap">
              <div className="about-terminal">
                <div className="terminal-bar">
                  <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                  <span className="terminal-title">lucky@portfolio:~</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-prompt"><span className="star">✦</span><span className="cmd">whoami</span></div>
                  <p className="terminal-text">{profile.bio}</p>
                  <p className="terminal-text" style={{ marginTop: '12px', color: '#5ce1e6' }}>
                    CSE'27 · IIMT University · Golden Badge Python (HackerRank)
                  </p>
                  <div className="terminal-cursor" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={220} className="about-right-wrap">
              <div className="about-cards">
                {[
                  { icon: '🎓', title: 'Education', val: 'B.Tech CSE (2023–2027)' },
                  { icon: '💻', title: 'Projects', val: '8+ AI/ML Projects' },
                  { icon: '📄', title: 'Research', val: 'Published Research Paper' },
                  { icon: '🏆', title: 'Certifications', val: 'Multiple Industry Certifications' },
                ].map(c => (
                  <div key={c.title} className="about-card">
                    <span className="about-card-icon">{c.icon}</span>
                    <div><p className="about-card-title">{c.title}</p><p className="about-card-val">{c.val}</p></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <div className="skills-section" id="skills">
          <div className="skills-inner">
            <Reveal><p className="section-label">Tech Stack</p></Reveal>
            <Reveal delay={80}><h2 className="section-heading">Tech Stack</h2></Reveal>
            <Reveal delay={160}><p className="section-sub">Technologies I work with daily to build AI-powered systems.</p></Reveal>
            <Reveal delay={200}>
              <div className="skills-circuit"><NeuralSkills /></div>
            </Reveal>
            <div className="skill-badges-grid">
              {skillsWithRealLogos.map((s, i) => (
                <Reveal key={s.name} delay={i * 40}>
                  <div className="skill-badge" style={{ '--sc': s.color, '--sb': s.bg }}>
                    <div className="skill-badge-logo">{s.logo}</div>
                    <span className="skill-badge-name">{s.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── CURRENTLY EXPLORING ── */}
        <div className="exploring-section">
          <div className="exploring-inner">
            <Reveal><p className="section-label">Learning Path</p></Reveal>
            <Reveal delay={80}><h2 className="section-heading">Currently Exploring</h2></Reveal>
            <Reveal delay={120}><p className="section-sub">Technologies and techniques I'm actively learning and experimenting with.</p></Reveal>
            <div className="exploring-badges-grid">
              {exploring.map((exp, i) => (
                <Reveal key={exp.name} delay={i * 40}>
                  <div className="skill-badge exploring-badge" style={{ '--sc': exp.color, '--sb': exp.bg }}>
                    <div className="skill-badge-logo">{exp.logo}</div>
                    <span className="skill-badge-name">{exp.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROJECTS (AI/ML — primary) ── */}
        <section id="projects" className="section">
          <Reveal><p className="section-label">Projects</p></Reveal>
          <Reveal delay={80}><h2 className="section-heading">Featured AI/ML Projects</h2></Reveal>
          <Reveal delay={120}><p className="section-sub">Crafted with real data, real models, production-ready code.</p></Reveal>
          <div className="project-grid">
            {aiProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <article className="project-card" style={{ '--accent-glow': p.color + '55', '--accent-border': p.color + '80', '--pi': i }}>
                  <div className={`project-thumb ${p.image ? 'has-image' : ''}`} style={!p.image ? { background: `linear-gradient(135deg,${p.color}22,${p.color}42)` } : undefined}>
                    {p.image ? (
                      <img src={p.image} alt={p.name} className="project-thumb-img" />
                    ) : (
                      <span className="project-emoji">{p.icon}</span>
                    )}
                    {p.demo && <span className="live-badge"><span className="live-dot" />Live</span>}
                    <div className="thumb-bar">
                      <span style={{ background: '#ef4444' }} /><span style={{ background: '#f59e0b' }} /><span style={{ background: '#22c55e' }} />
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{p.name}</h3><p>{p.desc}</p>
                    <div className="project-tags">{p.stack.map(t => <span key={t} className="project-tag">{t}</span>)}</div>
                    <div className="project-links">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="proj-btn proj-btn-filled" style={{ background: p.color }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5V5z" /></svg>
                          Live Demo
                        </a>
                      )}
                      <a href={p.url} target="_blank" rel="noreferrer" className="proj-btn proj-btn-outline">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        Code
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATES ── */}
        <div className="cert-section" id="certifications">
          <svg className="cert-wire-bg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <filter id="cwg"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            {[80, 180, 280, 380, 460].map((y, i) => (
              <line key={`h${i}`} x1="0" y1={y} x2="1200" y2={y} stroke={i % 2 === 0 ? 'rgba(92,225,230,0.07)' : 'rgba(124,58,237,0.06)'} strokeWidth="1" strokeDasharray="8 6" filter="url(#cwg)">
                <animate attributeName="stroke-dashoffset" from="0" to={i % 2 === 0 ? '-28' : '28'} dur={`${5 + i * 1.2}s`} repeatCount="indefinite" />
              </line>
            ))}
            {[120, 280, 420, 580, 720, 860, 1000, 1140].map((x, i) => (
              <line key={`v${i}`} x1={x} y1="0" x2={x} y2="500" stroke={i % 2 === 0 ? 'rgba(124,58,237,0.06)' : 'rgba(92,225,230,0.05)'} strokeWidth="1" strokeDasharray="6 8" filter="url(#cwg)">
                <animate attributeName="stroke-dashoffset" from="0" to={i % 2 === 0 ? '-28' : '28'} dur={`${6 + i * 0.8}s`} repeatCount="indefinite" />
              </line>
            ))}
            {[[120, 80], [280, 180], [420, 280], [580, 80], [720, 380], [860, 180], [1000, 280], [1140, 80], [280, 380], [580, 280], [860, 380], [420, 80], [720, 180], [1000, 80]].map(([x, y], i) => (
              <circle key={`n${i}`} cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.5} fill={i % 2 === 0 ? '#5ce1e6' : '#7c3aed'} opacity="0.55" filter="url(#cwg)">
                <animate attributeName="opacity" values="0.55;0.15;0.55" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="r" values={i % 3 === 0 ? '4;6;4' : '2.5;4;2.5'} dur={`${4 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>

          <div className="cert-inner">
            <Reveal><p className="section-label">Certifications</p></Reveal>
            <Reveal delay={80}><h2 className="section-heading">My Certifications</h2></Reveal>
            <Reveal delay={120}><p className="section-sub">17 verified credentials across AI/ML, Cloud, Java, IoT, and Cybersecurity.</p></Reveal>
            <div className="cert-grid">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 55}>
                  <div className="cert-card" style={{ '--ci': i }}>
                    <span className="cc-node cc-tl" /><span className="cc-node cc-tr" />
                    <span className="cc-node cc-bl" /><span className="cc-node cc-br" />
                    <span className="cc-scan" />
                    <div className="cert-img-wrap">
                      {c.image
                        ? <img src={c.image} alt={c.title} loading="lazy" />
                        : <div className="cert-no-img"><span className="cert-badge-big">{c.badge}</span><span>{c.issuer}</span></div>}
                      <div className="cert-img-overlay" />
                    </div>
                    <div className="cert-body">
                      <h3>{c.title}</h3>
                      <p className="cert-issuer">
                        <span className="cert-issuer-dot" />
                        {c.issuer}
                      </p>
                      <div className="cert-footer">
                        <span className="cert-date">{c.date}</span>
                        {c.note && <span className="cert-score">✦ {c.note}</span>}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── EXPERIENCE ── */}
        <section className="section" id="experience">
          <Reveal><p className="section-label">Experience</p></Reveal>
          <Reveal delay={80}><h2 className="section-heading">Work Experience</h2></Reveal>
          <div className="exp-list">
            {experience.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <div className="exp-card">
                  <div className="exp-header">
                    <div><h3>{e.title}</h3><p className="exp-company">{e.company}</p></div>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <ul className="exp-points">{e.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── RESEARCH ── */}
        <section id="research" className="section">
          <Reveal><p className="section-label">Research</p></Reveal>
          <Reveal delay={80}><h2 className="section-heading">Publications</h2></Reveal>
          <div className="pub-grid">
            {publications.map((p, i) => (
              <Reveal key={p.title} delay={120 + i * 100}>
                <div className="pub-card">
                  <div className="pub-head">
                    <h3>{p.title}</h3>
                    <span className={`pub-status ${p.status === 'Published' ? 'is-published' : 'is-pending'}`}>{p.status}</span>
                  </div>
                  <p className="pub-venue">{p.venue}</p>
                  <p className="pub-meta">{p.role} • {p.date}</p>
                  <p className="pub-categories">{p.categories.join(' • ')}</p>
                  <p className="pub-authors">{p.authors}</p>
                  <p className="pub-desc">{p.desc}</p>

                  {p.dataset && <p className="pub-dataset"><strong>Datasets:</strong> {p.dataset}</p>}

                  {p.tags && (
                    <div className="pub-tags">
                      {p.tags.map((t) => <span className="pub-tag" key={t}>{t}</span>)}
                    </div>
                  )}

                  <div className="research-pdf-btns">
                    {p.doi && <a href={p.doi} className="research-doi" target="_blank" rel="noreferrer">doi.org/{p.doi.split('doi.org/')[1]}</a>}
                    {p.pdf && <a href={p.pdf} target="_blank" rel="noreferrer" className="btn-pdf-view">📄 View Paper</a>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <Reveal><p className="section-label">Get In Touch</p></Reveal>
            <Reveal delay={80}><h2 className="section-heading">Contact Me</h2></Reveal>
            <Reveal delay={120}><p className="section-sub">Have a project or opportunity? Let's collaborate!</p></Reveal>
            <div className="contact-grid">
              <Reveal delay={160}>
                <div className="contact-info-card">
                  <div className="ci-item"><span className="ci-icon">📧</span><div><span className="ci-label">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
                  <div className="ci-item"><span className="ci-icon">📞</span><div><span className="ci-label">Phone</span><a href={`tel:${profile.phone}`}>{profile.phone}</a></div></div>
                  <div className="ci-item"><span className="ci-icon">📍</span><div><span className="ci-label">Location</span><span>{profile.location}</span></div></div>
                  <div className="ci-socials">
                    <a href={profile.github} target="_blank" rel="noreferrer" className="ci-social-btn github-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg> GitHub
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="ci-social-btn linkedin-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> LinkedIn
                    </a>
                    <a href={profile.instagram} target="_blank" rel="noreferrer" className="ci-social-btn insta-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg> @k11_lucky
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={240}><ContactForm /></Reveal>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <Reveal><h2 className="cta-heading">Let's start something great together</h2></Reveal>
          <Reveal delay={80}><p className="cta-sub">Open to AI/ML roles, research collaborations, and freelance projects.</p></Reveal>
          <Reveal delay={160}>
            <div className="cta-btns">
              <a className="btn-cta" href={`mailto:${profile.email}`}>Get in touch</a>
              <a className="btn-cta-outline" href={profile.resumeUrl} download>⬇ Download Resume</a>
            </div>
          </Reveal>
          <DnaHelix />
        </section>

        {/* ── FOOTER ── */}
        <footer>
          <div className="footer-grid">
            <div className="footer-col">
              <p className="brand" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Lucky.ai</p>
              <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '16px', maxWidth: '200px' }}>AI/ML Engineer · CSE Student · Python Developer</p>
              <div className="footer-social">
                {[
                  { href: profile.github, svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg> },
                  { href: profile.linkedin, svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                  { href: profile.instagram, svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg> },
                  { href: `mailto:${profile.email}`, svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg> },
                ].map((s, i) => <a key={i} className="social-icon" href={s.href} target="_blank" rel="noreferrer">{s.svg}</a>)}
              </div>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              <p>Delhi/NCR, India</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#about">About me</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certificates</a>
              <a href="#skills">Tech Stack</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <p className="footer-bottom">© 2025 Lucky Kumari · All rights reserved</p>
        </footer>

        <Chatbot />
      </div>
    </>
  )
}
