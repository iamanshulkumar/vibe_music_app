import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const handlePauseClick = () => {

  };

  const handlePlayClick = () => {

  };

  return (
    // songCard container block
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-orange-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">

        {/* hover on songCard */}
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-orange-70' : 'hidden'} `}>

          {/* current state of player */}
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>

        {/* Song cover art */}
        <img src={song.images?.coverart} alt="song_img" />
      </div>

      {/* Song title */}
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/song/${song?.key}`}>
            {song.title}
          </Link>
        </p>

        {/* song artists name  */}
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
