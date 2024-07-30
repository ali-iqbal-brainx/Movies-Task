import React from 'react';
import './styles.scss';

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5' />
      <rect x='2' y='6' width='14' height='12' rx='2' />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
}

const movies = [
  {
    id: 1,
    title: 'Scary Doll',
    src: 'https://images.unsplash.com/photo-1611787640592-ebf78080d96e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '20023',
  },
  {
    id: 2,
    title: 'Click Land',
    src: 'https://plus.unsplash.com/premium_photo-1682125311959-a000535c0b19?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '20023',
  },
  {
    id: 3,
    title: 'Animated YBR',
    src: 'https://images.unsplash.com/photo-1623375428145-4d276c83ce5e?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '20023',
  },
  {
    id: 4,
    title: 'Detective X',
    src: 'https://images.unsplash.com/photo-1701162859793-39f114a79edc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '20023',
  },
  {
    id: 4,
    title: 'Forest',
    src: 'https://images.unsplash.com/photo-1660215457242-7fa1e84684f2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '20023',
  },
  {
    id: 5,
    title: 'Scary Doll',
    src: 'https://images.unsplash.com/photo-1611787640592-ebf78080d96e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '20023',
  },
  {
    id: 6,
    title: 'Scary Doll',
    src: 'https://images.unsplash.com/photo-1611787640592-ebf78080d96e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '20023',
  },
];

const MovieCard = ({ movie }) => {
  return (
    <div class='movie-card'>
      <div className='movie-image-container'>
        <img src={movie?.src} alt={movie?.title} />
      </div>
      <h3>{movie?.title}</h3>
      <h3>{movie?.year}</h3>
    </div>
  );
};

const MoviesListingPage = () => {
  return (
    <div className='main-container'>
      <header>
        <div className='left-side'>
          <h3>My Movies</h3>
          <div>+ Button</div>
        </div>
        <div className='right-side'>
          <h3>Logout</h3>
          <div>Logout Btn</div>
        </div>
      </header>
      <div class='grid-container'>
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesListingPage;
