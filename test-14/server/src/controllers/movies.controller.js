import movies from '../data/movies.json' with {type: 'json'} 

export const getMovies = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, data: movies });
  } catch (err) {
    next(err);
  }
};



